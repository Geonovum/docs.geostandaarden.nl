// build.js
const fs = require("fs");
const path = require("path");

const PUB_DOMAIN_LIST_URL = "https://raw.githubusercontent.com/Geonovum/respec-utils/master/src/autodeploy/config/pubDomainList.json";
const IGNORE_LIST = ["BRO", "NWBBGT", ".GIT", "BRTNEXT", "SFR"];
const PUBLISH_ALL_LIST = ["G4W", "KL", "MIM", "OOV", "RO", "SERV"];

async function fetchPubDomains() {
    const res = await fetch(PUB_DOMAIN_LIST_URL);
    const data = await res.json();
    return data.Geonovum;
}

function getPubDomainTitle(pubDomain, allPubDomains) {
    const pd = allPubDomains.find((pd) => pd.pubDomain === pubDomain);
    const title = pd?.pubDomainTitle || pubDomain.toUpperCase();
    return `<span class='pubDomainAbbr'>(${pubDomain.toLowerCase()})</span>${title}`;
}

function subDirsAsList(subdirs, pubDomain) {
    let htmlList = "";
    const listItems = subdirs.map((subdir) => {
        let docType = "Laatste versie";
        let cls = "final";
        if (subdir.startsWith("def-")) {
            docType = "Definitieve versie";
            cls = "def";
        } else if (subdir.startsWith("cv-")) {
            docType = "Consultatie versie";
            cls = "cv";
        } else if (subdir.startsWith("vv-")) {
            docType = "Vastgestelde versie";
            cls = "vv";
        }
        return `<li><span class='${cls}'><a href='${pubDomain}/${subdir}'>${docType}: ${subdir}</a></span></li>`;
    });
    if (listItems.length > 0) {
        htmlList += `<ul class='docs'>${listItems.join("\n")}</ul>`;
    }
    return htmlList;
}

function classifySubdirs(subdirs) {
    const norm = [], toelichting = [], documentatie = [], unknown = [];
    subdirs.forEach((subdir) => {
        const parts = subdir.split("-");
        if (parts.length > 3) {
            switch (parts[1]) {
                case "no":
                case "st":
                case "im":
                    norm.push(subdir);
                    break;
                case "pr":
                    toelichting.push(subdir);
                    break;
                case "al":
                case "bd":
                case "hr":
                case "wa":
                    documentatie.push(subdir);
                    break;
                default:
                    unknown.push(subdir);
            }
        } else {
            unknown.push(subdir);
        }
    });
    return {norm, toelichting, documentatie, unknown};
}

async function buildIndex() {
    const pubDomains = await fetchPubDomains();
    const dirList = fs.readdirSync(".").filter((d) => {
        const full = path.join(".", d);
        return (
            fs.statSync(full).isDirectory() &&
            !d.startsWith(".") &&
            !IGNORE_LIST.includes(d.toUpperCase())
        );
    });


    let html = fs.readFileSync("header.html", "utf8");

    for (const pubDomain of dirList) {
        const fullPath = path.join(".", pubDomain);
        const subdirs = fs
            .readdirSync(fullPath)
            .filter((s) => fs.statSync(path.join(fullPath, s)).isDirectory());

        const {norm, toelichting, documentatie, unknown} = classifySubdirs(subdirs);
        html += `<div class='pubDomain'><h2><a href='${pubDomain}'>${getPubDomainTitle(pubDomain, pubDomains)}</a></h2>`;

        if (unknown.length) html += `<h3>Laatste versies</h3>${subDirsAsList(unknown, pubDomain)}`;
        if (norm.length) html += `<h3>Standaarden</h3>${subDirsAsList(norm, pubDomain)}`;
        if (toelichting.length) html += `<h3>Toelichtingen</h3>${subDirsAsList(toelichting, pubDomain)}`;
        if (documentatie.length) html += `<h3>Documentatie</h3>${subDirsAsList(documentatie, pubDomain)}`;

        html += `</div>`;
    }

    html += `</div></body></html>`;

    const distDir = path.join(__dirname, 'dist');
    if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, {recursive: true});
    }

    fs.writeFileSync("index.html", html);
    console.log("✅ index.html gegenereerd.");
}

buildIndex().catch((e) => {
    console.error("❌ Fout bij genereren:", e);
    process.exit(1);
});