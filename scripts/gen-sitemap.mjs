import { SitemapStream, streamToPromise } from "sitemap";

import { createWriteStream } from "node:fs";
import { routes } from "../src/routes.js"; // importa tu lista de rutas

const hostname = "https://psicologiaamatu.com";

const smStream = new SitemapStream({ hostname });
const writeStream = createWriteStream("./dist/sitemap.xml");

smStream.pipe(writeStream);

routes.forEach(({ path }) => {
  smStream.write({
    url: path,
    changefreq: "monthly",
    priority: path === "/" ? 1.0 : 0.8,
  });
});

smStream.end();
await streamToPromise(smStream);
