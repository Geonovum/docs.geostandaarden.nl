import { mkdtemp, mkdir, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import assert from "node:assert/strict";
import { renderBroIndex, renderMainIndex } from "./publication-index.js";
import { extractFinalUrls, extractInitialUserConfig } from "./bibliography.js";
import { createApp } from "./server.js";

test("main index groups definitive publications and latest versions", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "docs-index-"));
  await writeFile(
    path.join(root, "pubDomainList.json"),
    JSON.stringify({ Geonovum: [{ pubDomain: "api", pubDomainTitle: "API" }] })
  );
  await mkdir(path.join(root, "api", "API-Strategie"), { recursive: true });
  await mkdir(path.join(root, "api", "def-st-api-designrules-20200117"), { recursive: true });
  await mkdir(path.join(root, "api", "cv-st-api-designrules-20200117"), { recursive: true });
  await mkdir(path.join(root, "server"), { recursive: true });
  await mkdir(path.join(root, ".claude"), { recursive: true });

  const html = await renderMainIndex(root);

  assert.match(html, /API/);
  assert.match(html, /Laatste versie: API-Strategie/);
  assert.match(html, /Definitieve versie: def-st-api-designrules-20200117/);
  assert.doesNotMatch(html, /Consultatie versie: cv-st-api-designrules-20200117/);
  assert.doesNotMatch(html, /server/);
  assert.doesNotMatch(html, /\.claude/);
});

test("BRO index renders configured registration object links", () => {
  const html = renderBroIndex();

  assert.match(html, /Basisregistratie Ondergrond/);
  assert.match(html, /Booronderzoek \(BHR-G\)/);
  assert.match(html, /href="\.\/bhr-g"/);
});

test("bibliography helpers parse final urls and ReSpec config JSON", () => {
  const html = `<span class="final"><a href="./api/API-Strategie">Laatste versie</a></span>
<script id="initialUserConfig" type="application/json">{"localBiblio":{"X":{"href":"https://example.test","title":"Example"}}}</script>`;

  assert.deepEqual(extractFinalUrls(html), ["./api/API-Strategie"]);
  assert.equal(extractInitialUserConfig(html).localBiblio.X.title, "Example");
});

test("runtime exposes publication environment without changing content branch", async () => {
  const app = createApp({ environment: "Test Omgeving" });
  const response = new MockResponse();

  await app({ method: "GET", url: "/environment.json", headers: { host: "localhost" } }, response);

  assert.equal(response.statusCode, 200);
  assert.equal(response.headers["x-publication-environment"], "test-omgeving");
  assert.deepEqual(JSON.parse(response.body), { environment: "test-omgeving" });
});

class MockResponse {
  headers = {};
  statusCode = 200;
  body = "";

  setHeader(name, value) {
    this.headers[name.toLowerCase()] = value;
  }

  writeHead(statusCode, headers = {}) {
    this.statusCode = statusCode;
    for (const [name, value] of Object.entries(headers)) {
      this.setHeader(name, value);
    }
  }

  end(body = "") {
    this.body += body;
  }
}
