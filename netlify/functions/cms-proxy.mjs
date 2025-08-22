import { Buffer } from "node:buffer";
import { Octokit } from "octokit";
import jwt from "jsonwebtoken";

const {
  JWT_SECRET = "dev-secret",
  GITHUB_TOKEN,
  GITHUB_OWNER,
  GITHUB_REPO,
  GITHUB_BRANCH = "master",
} = process.env;
const octokit = new Octokit({ auth: GITHUB_TOKEN });

const json = (d, s = 200) => ({
  statusCode: s,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(d),
});
const unauthorized = () => ({ statusCode: 401, body: "Unauthorized" });
const session = (e) => {
  const c = e.headers.cookie || "";
  const m = c.match(/(?:^|;\\s*)session=([^;]+)/);
  if (!m) return null;
  try {
    return jwt.verify(decodeURIComponent(m[1]), JWT_SECRET);
  } catch {
    return null;
  }
};

async function getFile(path) {
  const { data } = await octokit.rest.repos.getContent({
    owner: GITHUB_OWNER,
    repo: GITHUB_REPO,
    path,
    ref: GITHUB_BRANCH,
  });
  if (Array.isArray(data)) throw new Error("dir");
  return {
    sha: data.sha,
    content: Buffer.from(data.content, "base64").toString("utf8"),
  };
}
async function putFile(path, content, message) {
  let sha;
  try {
    ({ sha } = await getFile(path));
  } catch {
    sha = undefined;
  }
  return octokit.rest.repos.createOrUpdateFileContents({
    owner: GITHUB_OWNER,
    repo: GITHUB_REPO,
    path,
    message: message || `CMS: update ${path}`,
    content: Buffer.from(content).toString("base64"),
    branch: GITHUB_BRANCH,
    sha,
  });
}

export async function handler(event) {
  if (!session(event)) return unauthorized();
  const url = new URL(event.rawUrl);
  const p = url.pathname;

  if (p.endsWith("/me")) return json({ ok: true });

  if (p.endsWith("/entriesByFolder")) {
    const folder = url.searchParams.get("folder");
    const { data } = await octokit.rest.repos.getContent({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      path: folder,
      ref: GITHUB_BRANCH,
    });
    const files = (Array.isArray(data) ? data : []).filter(
      (f) => f.type === "file"
    );
    const entries = [];
    for (const f of files) {
      const file = await getFile(f.path);
      entries.push({ path: f.path, data: file.content });
    }
    return json(entries);
  }

  if (p.endsWith("/entriesByFiles")) {
    const { files = [] } = JSON.parse(event.body || "{}");
    const entries = [];
    for (const f of files) {
      const file = await getFile(f.file);
      entries.push({ path: f.file, data: file.content });
    }
    return json(entries);
  }

  if (p.endsWith("/entry")) {
    const path = url.searchParams.get("path");
    const file = await getFile(path);
    return json({ path, data: file.content });
  }

  if (p.endsWith("/persistEntry")) {
    const { entry } = JSON.parse(event.body || "{}"); // { path, data, commitMessage? }
    if (!entry?.path || typeof entry.data !== "string")
      return json({ error: "Bad entry" }, 400);
    await putFile(entry.path, entry.data, entry.commitMessage);
    return json({ ok: true });
  }

  if (p.endsWith("/media") && event.httpMethod === "GET") {
    const { data } = await octokit.rest.repos.getContent({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      path: "public/uploads",
      ref: GITHUB_BRANCH,
    });
    const files = Array.isArray(data)
      ? data.filter((f) => f.type === "file")
      : [];
    return json(
      files.map((f) => ({
        id: f.sha,
        name: f.name,
        path: f.path,
        url: `/${f.path.replace(/^public\//, "")}`,
      }))
    );
  }

  if (p.endsWith("/media") && event.httpMethod === "POST") {
    const boundary = (event.headers["content-type"] || "").match(
      /boundary=(.*)$/
    )?.[1];
    if (!boundary) return json({ error: "Bad form" }, 400);
    const part = event.body
      .split(`--${boundary}`)
      .find((p) => p.includes('name="file"'));
    const filename =
      part.match(/filename="([^"]+)"/)?.[1] || `file-${Date.now()}`;
    const blob = part.split("\\r\\n\\r\\n")[1].split("\\r\\n--")[0];
    await putFile(
      `public/uploads/${filename}`,
      blob,
      `CMS: upload ${filename}`
    );
    return json({
      ok: true,
      path: `public/uploads/${filename}`,
      url: `/uploads/${filename}`,
    });
  }

  if (p.endsWith("/deleteFile") && event.httpMethod === "POST") {
    const { path } = JSON.parse(event.body || "{}");
    const { sha } = await getFile(path);
    await octokit.rest.repos.deleteFile({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      path,
      message: `CMS: delete ${path}`,
      sha,
      branch: GITHUB_BRANCH,
    });
    return json({ ok: true });
  }

  return json({ error: "Not found" }, 404);
}
export const config = { path: "/api/cms/*" };
