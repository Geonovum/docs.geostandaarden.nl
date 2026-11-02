import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { buildNginxSite } from "./nginx-config.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = process.env.DOCS_ROOT ? path.resolve(process.env.DOCS_ROOT) : path.resolve(__dirname, "..");
const outDir = process.env.NGINX_BUILD_DIR ? path.resolve(process.env.NGINX_BUILD_DIR) : path.join(rootDir, "build", "nginx");
const copyContent = process.env.NGINX_COPY_SITE_CONTENT !== "0";

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  await buildNginxSite({ rootDir, outDir, copyContent });
  console.log(`Built nginx site in ${outDir}`);
}
