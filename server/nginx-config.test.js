import { mkdtemp, mkdir, readFile, stat, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import assert from "node:assert/strict";
import { buildNginxSite, generateNginxConfig } from "./nginx-config.js";

test("nginx config renders manifest redirect routes as nginx returns", () => {
  const config = generateNginxConfig({
    routes: [
      {
        source: "/bro/bhr-gt",
        match: "prefix",
        type: "redirect",
        statusCode: 302,
        target: "/bro/vv-st-bhr-gt-20260724/"
      }
    ]
  });

  assert.match(config, /location = \/bro\/bhr-gt \{\n\s+return 302 \/bro\/vv-st-bhr-gt-20260724\/\$is_args\$args;/);
  assert.match(config, /location ~ \^\/bro\/bhr-gt\/\(\?<route_suffix>.*\)\$ \{\n\s+return 302 \/bro\/vv-st-bhr-gt-20260724\/\$route_suffix\$is_args\$args;/);
  assert.match(config, /absolute_redirect off;/);
  assert.match(config, /port_in_redirect off;/);
});

test("nginx config delegates BRO CORS compatibility to njs", () => {
  const config = generateNginxConfig({ routes: [] });

  assert.match(config, /location = \/bro\/gen\/cors\.php \{\n\s+js_content docs_cors\.cors;/);
  assert.match(config, /location = \/bro\/gen\/cors \{\n\s+js_content docs_cors\.cors;/);
  assert.match(config, /location \^~ \/_cors\/bro\/gen\/ \{/);
});

test("nginx config renders manifest rewrite routes as internal rewrites", () => {
  const config = generateNginxConfig({
    routes: [
      {
        source: "/api/API-Strategie",
        match: "prefix",
        type: "rewrite",
        target: "/api/vv-hr-API-Strategie-20231221/"
      }
    ]
  });

  assert.match(config, /location = \/api\/API-Strategie \{\n\s+rewrite \^ \/api\/vv-hr-API-Strategie-20231221\/ last;/);
  assert.match(config, /location ~ \^\/api\/API-Strategie\/\(.*\)\$ \{\n\s+rewrite \^\/api\/API-Strategie\/\(.*\)\$ \/api\/vv-hr-API-Strategie-20231221\/\$1 last;/);
});

test("nginx site build pre-renders dynamic publication pages", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "docs-nginx-build-"));
  const outDir = path.join(root, "build", "nginx");
  await writeFile(
    path.join(root, "pubDomainList.json"),
    JSON.stringify({ Geonovum: [{ pubDomain: "api", pubDomainTitle: "API" }] })
  );
  await mkdir(path.join(root, "api", "API-Strategie"), { recursive: true });
  await mkdir(path.join(root, "api", "def-st-api-designrules-20200117"), { recursive: true });
  await writeFile(
    path.join(root, "api", "API-Strategie", "index.html"),
    `<span class="final"><a href="./api/API-Strategie">Laatste versie</a></span>
<script id="initialUserConfig" type="application/json">{"localBiblio":{"X":{"href":"https://example.test","title":"Example"}}}</script>`
  );
  await writeFile(path.join(root, "llms.txt"), "# Test publications\n");
  await writeFile(path.join(root, "publication-routes.json"), JSON.stringify({ version: 1, routes: [] }));

  await buildNginxSite({ rootDir: root, outDir });

  const rootIndex = await readFile(path.join(outDir, "html", "index.html"), "utf8");
  const broIndex = await readFile(path.join(outDir, "html", "bro", "index.html"), "utf8");
  const biblio = await readFile(path.join(outDir, "html", "biblio.php"), "utf8");
  const llmsTxt = await readFile(path.join(outDir, "html", "llms.txt"), "utf8");

  assert.match(rootIndex, /Standaarden en technische documenten/);
  assert.match(rootIndex, /Laatste versie: API-Strategie/);
  assert.match(broIndex, /Basisregistratie Ondergrond/);
  assert.match(biblio, /https:\/\/example\.test/);
  assert.equal(llmsTxt, "# Test publications\n");
  assert.equal(await exists(path.join(outDir, "html", "server")), false);
  assert.equal(await exists(path.join(outDir, "default.conf.template")), true);
});

test("nginx site build can generate only Docker overlay files", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "docs-nginx-overlay-"));
  const outDir = path.join(root, "build", "nginx");
  await writeFile(path.join(root, "pubDomainList.json"), JSON.stringify({ Geonovum: [] }));
  await writeFile(path.join(root, "publication-routes.json"), JSON.stringify({ version: 1, routes: [] }));
  await writeFile(path.join(root, "static.html"), "<h1>Static source</h1>");

  await buildNginxSite({ rootDir: root, outDir, copyContent: false });

  assert.equal(await exists(path.join(outDir, "html", "static.html")), false);
  assert.equal(await exists(path.join(outDir, "html", "index.html")), true);
  assert.equal(await exists(path.join(outDir, "html", "bro", "index.html")), true);
  assert.equal(await exists(path.join(outDir, "default.conf.template")), true);
});

async function exists(filePath) {
  return Boolean(await stat(filePath).catch(() => null));
}
