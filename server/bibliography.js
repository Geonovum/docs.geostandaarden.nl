import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { escapeHtml, pageTemplate } from "./html.js";
import { renderMainIndex } from "./publication-index.js";

export async function renderBibliography(rootDir) {
  const rootIndex = await renderMainIndex(rootDir);
  const urls = extractFinalUrls(rootIndex);
  const biblioCount = new Map();

  for (const url of urls) {
    const htmlPath = await urlToHtmlPath(rootDir, url);
    if (!htmlPath) continue;
    const html = await readFile(htmlPath, "utf8");
    const config = extractInitialUserConfig(html);
    const localBiblio = config?.localBiblio;
    if (!localBiblio || typeof localBiblio !== "object") continue;

    for (const [shortcode, item] of Object.entries(localBiblio)) {
      const href = item?.href;
      if (!href || href === "http://url van de publicatie" || href === "https://www.geonovum.nl") {
        continue;
      }
      const existing = biblioCount.get(href) ?? {
        href,
        count: 0,
        voorkomendeUrls: [],
        shortcodes: new Set(),
        title: new Set(),
        status: new Set(),
        publisher: new Set(),
        editors: new Set(),
        date: new Set(),
        id: new Set()
      };

      existing.count += 1;
      existing.voorkomendeUrls.push(url);
      existing.shortcodes.add(`[${shortcode}]`);
      addField(existing.title, item.title);
      addField(existing.status, item.status);
      addField(existing.publisher, item.publisher);
      addField(existing.editors, item.editors);
      addField(existing.date, item.date);
      addField(existing.id, item.id);
      biblioCount.set(href, existing);
    }
  }

  const rows = [...biblioCount.values()]
    .sort((a, b) => b.count - a.count)
    .map((item) => {
      return `<tr>
<td><a href="${escapeHtml(item.href)}" target="_blank" rel="noreferrer">${escapeHtml(item.href)}</a></td>
<td>${item.count}</td>
<td>${escapeHtml(item.voorkomendeUrls.join(";"))}</td>
<td>${escapeHtml([...item.shortcodes].join(";"))}</td>
<td>${escapeHtml([...item.title].join(";"))}</td>
<td>${escapeHtml([...item.status].join(";"))}</td>
<td>${escapeHtml([...item.publisher].join(";"))}</td>
<td>${escapeHtml([...item.editors].join(";"))}</td>
<td>${escapeHtml([...item.date].join(";"))}</td>
<td>${escapeHtml([...item.id].join(";"))}</td>
</tr>`;
    });

  return pageTemplate({
    title: "Referentie Bibliografie",
    body: `<h2>Referentie Bibliografie</h2>
<table id="biblioTable">
<thead>
<tr>
<th>href</th>
<th>Aantal voorkomens</th>
<th>Komt voor in</th>
<th>Gebruikte shortcodes</th>
<th>Titel</th>
<th>Status</th>
<th>Publisher</th>
<th>Editors</th>
<th>Datum</th>
<th>ID</th>
</tr>
</thead>
<tbody>${rows.join("")}</tbody>
</table>`
  });
}

export function extractFinalUrls(html) {
  const urls = [];
  const regex = /<span class="final"><a href="([^"]+)"/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

export function extractInitialUserConfig(html) {
  const match = html.match(/<script[^>]*id=["']initialUserConfig["'][^>]*>([\s\S]*?)<\/script>/i);
  if (!match) return null;
  try {
    return JSON.parse(match[1].trim());
  } catch {
    return null;
  }
}

async function urlToHtmlPath(rootDir, url) {
  const parsed = new URL(url, "https://docs.geostandaarden.nl/");
  const relative = decodeURIComponent(parsed.pathname.replace(/^\/+/, ""));
  const basePath = path.resolve(rootDir, relative);
  if (!basePath.startsWith(rootDir)) return null;

  const stats = await stat(basePath).catch(() => null);
  if (!stats) return null;
  if (stats.isDirectory()) return path.join(basePath, "index.html");
  return basePath.endsWith(".html") ? basePath : null;
}

function addField(target, value) {
  if (Array.isArray(value)) {
    for (const item of value) target.add(String(item));
  } else if (value !== undefined && value !== null) {
    target.add(String(value));
  }
}
