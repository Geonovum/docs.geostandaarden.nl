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
    JSON.stringify({
      Geonovum: [
        { pubDomain: "api", pubDomainTitle: "API" },
        { pubDomain: "empty", pubDomainTitle: "Empty" }
      ]
    })
  );
  await mkdir(path.join(root, "api", "API-Strategie"), { recursive: true });
  await mkdir(path.join(root, "api", "def-st-api-designrules-20200117"), { recursive: true });
  await mkdir(path.join(root, "api", "cv-st-api-designrules-20200117"), { recursive: true });
  await mkdir(path.join(root, "empty", "cv-st-only-consultation-20200117"), { recursive: true });
  await mkdir(path.join(root, "server"), { recursive: true });
  await mkdir(path.join(root, ".claude"), { recursive: true });

  const html = await renderMainIndex(root);

  assert.match(html, /API/);
  assert.match(html, /href="\/api"/);
  assert.match(html, /href="\/api\/API-Strategie"/);
  assert.match(html, /Laatste versie: API-Strategie/);
  assert.match(html, /Definitieve versie: def-st-api-designrules-20200117/);
  assert.doesNotMatch(html, /Consultatie versie: cv-st-api-designrules-20200117/);
  assert.doesNotMatch(html, /<h3>Standaarden<\/h3><\/div>/);
  assert.doesNotMatch(html, /server/);
  assert.doesNotMatch(html, /\.claude/);
  assert.doesNotMatch(html, /<style>/);
  assert.match(html, /href="\/media\/publication-index\.css"/);
});

test("BRO index renders configured registration object links", () => {
  const html = renderBroIndex();

  assert.match(html, /Basisregistratie Ondergrond/);
  assert.match(html, /Booronderzoek \(BHR-G\)/);
  assert.match(html, /href="\/bro\/bhr-g"/);
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

test("runtime sets compatible security headers by default", async () => {
  const app = createApp({ cspMode: "enforce" });
  const response = new MockResponse();

  await app({ method: "GET", url: "/healthz", headers: { host: "localhost" } }, response);

  assert.equal(response.headers["x-content-type-options"], "nosniff");
  assert.equal(response.headers["x-frame-options"], "SAMEORIGIN");
  assert.equal(response.headers["referrer-policy"], "strict-origin-when-cross-origin");
  assert.equal(response.headers["strict-transport-security"], "max-age=31536000");
  assert.match(response.headers["content-security-policy"], /default-src 'self'/);
  assert.match(response.headers["content-security-policy"], /object-src 'none'/);
  assert.match(response.headers["content-security-policy"], /frame-ancestors 'self'/);
});

test("runtime can run CSP in report-only mode", async () => {
  const app = createApp({ cspMode: "report-only", hstsEnabled: "false" });
  const response = new MockResponse();

  await app({ method: "GET", url: "/healthz", headers: { host: "localhost" } }, response);

  assert.equal(response.headers["content-security-policy"], undefined);
  assert.match(response.headers["content-security-policy-report-only"], /default-src 'self'/);
  assert.equal(response.headers["strict-transport-security"], undefined);
});

test("runtime blocks repository dotfiles but allows security.txt redirect", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "docs-security-"));
  await writeFile(path.join(root, ".dockerignore"), "node_modules\n");
  const app = createApp({
    rootDir: root,
    securityTxtUrl: "https://www.geonovum.nl/.well-known/security.txt"
  });

  const dotfileResponse = new MockResponse();
  await app({ method: "GET", url: "/.dockerignore", headers: { host: "localhost" } }, dotfileResponse);

  const securityTxtResponse = new MockResponse();
  await app({ method: "GET", url: "/.well-known/security.txt", headers: { host: "localhost" } }, securityTxtResponse);

  assert.equal(dotfileResponse.statusCode, 404);
  assert.equal(securityTxtResponse.statusCode, 302);
  assert.equal(securityTxtResponse.headers.location, "https://www.geonovum.nl/.well-known/security.txt");
});

test("BRO CORS compatibility route serves only local bro/gen files without credentialed origin reflection", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "docs-cors-"));
  await mkdir(path.join(root, "bro", "gen"), { recursive: true });
  await writeFile(path.join(root, "bro", "gen", "example.json"), "{}\n");
  const app = createApp({ rootDir: root });

  const validResponse = new MockResponse();
  await app(
    {
      method: "HEAD",
      url: "/bro/gen/cors.php?url=https%3A%2F%2Fdocs.geostandaarden.nl%2Fbro%2Fgen%2Fexample.json",
      headers: { host: "localhost", origin: "https://attacker.example" }
    },
    validResponse
  );

  const invalidResponse = new MockResponse();
  await app(
    {
      method: "HEAD",
      url: "/bro/gen/cors.php?url=https%3A%2F%2Fexample.org%2Fhttps%3A%2F%2Fdocs.geostandaarden.nl%2Fbro%2Fgen%2Fexample.json",
      headers: { host: "localhost", origin: "https://attacker.example" }
    },
    invalidResponse
  );

  assert.equal(validResponse.statusCode, 200);
  assert.equal(validResponse.headers["access-control-allow-origin"], "*");
  assert.equal(validResponse.headers["access-control-allow-credentials"], undefined);
  assert.equal(invalidResponse.statusCode, 400);
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
