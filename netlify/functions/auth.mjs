import jwt from "jsonwebtoken";

const {
  JWT_SECRET = "dev-secret",
  ADMIN_PASSWORD,
  ALLOWED_EMAILS = "",
} = process.env;
const allowed = new Set(
  ALLOWED_EMAILS.split(",")
    .map((s) => s.trim())
    .filter(Boolean)
);

export async function handler(event) {
  const path = event.path || "";
  if (path.endsWith("/start")) {
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/html" },
      body: `<form method="POST" action="/api/auth/login"><input type="email" name="email" required/><input type="password" name="password" required/><button>Entrar</button></form>`,
    };
  }
  if (path.endsWith("/login") && event.httpMethod === "POST") {
    const ct = event.headers["content-type"] || "";
    let email = "",
      password = "";
    if (ct.includes("json")) {
      ({ email, password } = JSON.parse(event.body || "{}"));
    } else {
      const p = new URLSearchParams(event.body);
      email = p.get("email");
      password = p.get("password");
    }
    if (!email || !password)
      return { statusCode: 400, body: "Missing credentials" };
    if (ADMIN_PASSWORD && password !== ADMIN_PASSWORD)
      return { statusCode: 401, body: "Invalid password" };
    if (allowed.size && !allowed.has(email))
      return { statusCode: 403, body: "Not allowed" };
    const token = jwt.sign({ sub: email }, JWT_SECRET, { expiresIn: "12h" });
    return {
      statusCode: 302,
      headers: {
        "Set-Cookie": `session=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=43200`,
        Location: "/admin/",
      },
      body: "",
    };
  }
  if (path.endsWith("/logout")) {
    return {
      statusCode: 302,
      headers: {
        "Set-Cookie": `session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`,
        Location: "/admin/",
      },
      body: "",
    };
  }
  return { statusCode: 404, body: "Not found" };
}
export const config = { path: "/api/auth/*" };
