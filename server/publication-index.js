import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { escapeHtml, pageTemplate } from "./html.js";

const ROOT_IGNORE_LIST = new Set([
  "NWBBGT",
  ".GIT",
  ".AGENTS",
  ".CLAUDE",
  ".CODEX",
  "BRTNEXT",
  "SFR",
  "MEDIA",
  "NODE_MODULES",
  "SERVER",
  ".WELL-KNOWN",
  ".GITHUB"
]);

const PUBLISH_ALL_LIST = new Set(["G4W", "KL", "MIM", "OOV", "RO", "SERV"]);

const SPEC_GROUPS = {
  no: "norm",
  st: "norm",
  im: "norm",
  pr: "toelichting",
  al: "documentatie",
  bd: "documentatie",
  hr: "documentatie",
  wa: "documentatie"
};

export const broDomains = {
  "Domein Bodem- en grondonderzoek": {
    "bhr-g": "Booronderzoek",
    "BHR-GT": "Booronderzoek: Geotechnische boormonsterbeschrijving en boormonsteranalyse",
    "bhr-p": "Bodemkundig Booronderzoek",
    CPT: "Geotechnisch sondeeronderzoek",
    sfr: "Wandonderzoek - bodemkunde"
  },
  "Domein Grondwatergebruik": {
    guf: "Grondwatergebruiksysteem",
    gpd: "Grondwaterproductiedossier"
  },
  "Domein Grondwatermonitoring": {
    FRD: "Formatieweerstand onderzoek",
    gmn: "Grondwatermonitoringnet",
    gmw: "Grondwatermonitoringput",
    gar: "Grondwatersamenstellingsonderzoek",
    gld: "Grondwaterstandonderzoek"
  },
  "Domein Mijnbouwwet": {
    EPC: "Mijnbouwconstructie",
    EPL: "Mijnbouwwetvergunning"
  },
  Modellen: {
    SGM: "Bodemkaart",
    DGM: "Digitaal Geologisch Model",
    GMM: "Geomorfologische kaart",
    GTM: "GeoTOP",
    wdm: "Model Grondwaterspiegeldiepte",
    HGM: "REGIS II"
  },
  Milieukwaliteit: {
    sad: "Milieuhygienisch bodemonderzoek",
    sld: "Overheidsbesluit bodemverontreiniging"
  }
};

export async function renderMainIndex(rootDir) {
  const allPubDomains = await loadPubDomains(rootDir);
  const entries = await readdir(rootDir, { withFileTypes: true });
  const domains = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => !name.startsWith("."))
    .filter((name) => !ROOT_IGNORE_LIST.has(name.toUpperCase()))
    .sort((a, b) => a.localeCompare(b, "nl"));

  const sections = [];
  for (const pubDomain of domains) {
    sections.push(await renderPubDomain(rootDir, pubDomain, allPubDomains));
  }

  return pageTemplate({
    title: "Geonovum specificaties",
    body: `<img class="block-sitebranding__logo" src="https://www.geonovum.nl/logo.svg" alt="Home">
<h1>Standaarden en technische documenten</h1>
<p>Op <a href="https://docs.geostandaarden.nl/">https://docs.geostandaarden.nl/</a> publiceert Geonovum standaarden en technische documenten.</p>
<p class="warning">Deze pagina is slechts een inhoudsopgave van documentatie die wij beheren. Ga naar de <a href="https://www.geonovum.nl">website van Geonovum</a> voor toelichting op de documentatie.</p>
<p>Onderstaande documenten zijn op dit moment beschikbaar:</p>
${sections.join("\n")}`
  });
}

export function renderBroIndex() {
  const sections = Object.entries(broDomains).map(([domain, registrations]) => {
    const items = Object.entries(registrations).map(([mnemonic, title]) => {
      return `<h3><a href="/bro/${encodeURI(mnemonic)}">${escapeHtml(title)} (${escapeHtml(mnemonic.toUpperCase())})</a></h3>`;
    });
    const content = items.length > 0 ? items.join("\n") : "<i>Geen publicaties</i>";
    return `<div class="pubDomain"><h2>${escapeHtml(domain)}</h2>${content}</div>`;
  });

  return pageTemplate({
    title: "Geonovum specificaties",
    body: `<img class="block-sitebranding__logo" src="https://www.geonovum.nl/logo.svg" alt="Home">
<h1>Basisregistratie Ondergrond (BRO): standaarden en technische documentatie</h1>
<p>Op <a href="https://docs.geostandaarden.nl/bro">https://docs.geostandaarden.nl/bro</a> publiceert Geonovum de standaarden en technische documenten voor de Basisregistratie Ondergrond (BRO).</p>
<p class="warning">Deze pagina is slechts een inhoudsopgave van documentatie die wij beheren. Ga naar de <a href="https://www.bro-productomgeving.nl/bpo/latest/">BRO Productomgeving</a> voor toelichting op de documentatie.</p>
<p>Onderstaande documenten zijn op dit moment beschikbaar:</p>
${sections.join("\n")}`
  });
}

export async function renderDirectoryListing(rootDir, requestPath, directoryPath) {
  const entries = await readdir(directoryPath, { withFileTypes: true });
  const visibleEntries = entries
    .filter((entry) => !entry.name.startsWith("."))
    .sort((a, b) => {
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1;
      return a.name.localeCompare(b.name, "nl");
    });

  const normalizedPath = requestPath.endsWith("/") ? requestPath : `${requestPath}/`;
  const parent = normalizedPath === "/" ? "" : `<li><a href="../">..</a></li>`;
  const items = visibleEntries.map((entry) => {
    const suffix = entry.isDirectory() ? "/" : "";
    const href = encodeURI(`${entry.name}${suffix}`);
    return `<li><a href="${href}">${escapeHtml(entry.name)}${suffix}</a></li>`;
  });

  return pageTemplate({
    title: `Index of ${normalizedPath}`,
    body: `<h1>Index of ${escapeHtml(normalizedPath)}</h1><ul>${parent}${items.join("")}</ul>`
  });
}

async function loadPubDomains(rootDir) {
  const jsonPath = path.join(rootDir, "pubDomainList.json");
  try {
    const data = JSON.parse(await readFile(jsonPath, "utf8"));
    return Array.isArray(data.Geonovum) ? data.Geonovum : [];
  } catch {
    return [];
  }
}

async function renderPubDomain(rootDir, pubDomain, allPubDomains) {
  const lookIntoDir = path.join(rootDir, pubDomain);
  const entries = await readdir(lookIntoDir, { withFileTypes: true });
  const groups = {
    norm: [],
    toelichting: [],
    documentatie: [],
    unknown: []
  };

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const group = classifySpecGroup(entry.name);
    groups[group].push(entry.name);
  }

  const blocks = [];
  if (groups.unknown.length > 0) {
    pushListBlock(blocks, "Laatste versies", groups.unknown, pubDomain, `/${pubDomain}`);
  }
  if (groups.norm.length > 0) {
    pushListBlock(blocks, "Standaarden", groups.norm, pubDomain, `/${pubDomain}`);
  }
  if (groups.toelichting.length > 0) {
    pushListBlock(blocks, "Toelichtingen", groups.toelichting, pubDomain, `/${pubDomain}`);
  }
  if (groups.documentatie.length > 0) {
    pushListBlock(blocks, "Documentatie", groups.documentatie, pubDomain, `/${pubDomain}`);
  }

  return `<div class="pubDomain"><h2><a href="/${encodeURI(pubDomain)}">${getPubDomainTitle(pubDomain, allPubDomains)}</a></h2>${blocks.join("\n")}</div>`;
}

function pushListBlock(blocks, heading, subdirs, pubDomain, lookIntoDir) {
  const listHtml = subDirsAsList(subdirs, pubDomain, lookIntoDir);
  if (!listHtml) return;
  blocks.push(`<h3>${heading}</h3>`);
  blocks.push(listHtml);
}

function classifySpecGroup(subdir) {
  const parts = subdir.split("-");
  if (parts.length <= 3) return "unknown";
  return SPEC_GROUPS[parts[1]] ?? "unknown";
}

function getPubDomainTitle(pubDomain, allPubDomains) {
  const domain = allPubDomains.find((item) => item.pubDomain === pubDomain);
  const title = domain?.pubDomainTitle ? domain.pubDomainTitle : pubDomain.toUpperCase();
  return `<span class="pubDomainAbbr">(${escapeHtml(pubDomain.toLowerCase())})</span>${escapeHtml(title)}`;
}

function subDirsAsList(subdirs, pubDomain, lookIntoDir) {
  const items = subdirs
    .sort((a, b) => a.localeCompare(b, "nl"))
    .map((subdir) => {
      const { label, className } = documentTypeForSubdir(subdir);
      if (
        label !== "Laatste versie" &&
        label !== "Definitieve versie" &&
        !PUBLISH_ALL_LIST.has(pubDomain.toUpperCase())
      ) {
        return "";
      }
      return `<li><span class="${className}"><a href="${encodeURI(`${lookIntoDir}/${subdir}`)}">${escapeHtml(label)}: ${escapeHtml(subdir)}</a></span></li>`;
    })
    .filter(Boolean);

  return items.length > 0 ? `<ul class="docs">${items.join("")}</ul>` : "";
}

function documentTypeForSubdir(subdir) {
  if (subdir.startsWith("def-")) return { label: "Definitieve versie", className: "def" };
  if (subdir.startsWith("cv-")) return { label: "Consultatie versie", className: "cv" };
  if (subdir.startsWith("vv-")) return { label: "Vastgestelde versie", className: "vv" };
  return { label: "Laatste versie", className: "final" };
}

export async function pathExists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}
