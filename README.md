# 📄 Geonovum Docs Repository

Deze repository publiceert automatisch publicaties op:

- **Productieomgeving**: [https://docs.geostandaarden.nl/](https://docs.geostandaarden.nl/) → `main` branch  
- **Testomgeving**: [https://test.docs.geostandaarden.nl/](https://test.docs.geostandaarden.nl/) → `develop` branch

De repository bevat daarnaast een nginx container-runtime voor dezelfde
statische publicaties. De oude PHP/Apache-redirects zijn vervangen door
routes in `publication-routes.json`; tijdens de container build wordt daaruit
nginx configuratie gegenereerd.

---

## Publicatieproces

Deze repository wordt **automatisch bijgewerkt** vanuit andere repositories die gebaseerd zijn op de [`NL-ReSpec-template`](https://github.com/Geonovum/NL-ReSpec-template).

1. **Template repository maakt release**:
   - Als een repository een **_pre-release_** maakt → de `develop` branch van deze repo wordt automatisch bijgewerkt.
   - Als een repository een **_release_** maakt → er wordt automatisch een **Pull Request naar `main`** aangemaakt in deze repo.

2. **Bijwerken van content**:
   - De gegenereerde `index.html` + alle relevante bestanden (zoals `media/`, `data/`, `js/`, etc.) worden gekopieerd naar een folder als:
     ```
     <pubDomain>/<specStatus>-<specType>-<shortName>-<publishDate>/
     ```
     Bijvoorbeeld:  
     `3dbv/basis-hr-test-respec-flow-2025-07-21/`

3. **Na merge naar `main`**:
   - De productieomgeving wordt automatisch geüpdatet via een rsync-actie (`scp`) naar de webserver.
   - Er wordt ook een container image gebouwd en gepubliceerd naar GitHub
     Container Registry.

---

## Container gebruiken

Lokaal starten:

```bash
npm start
```

Dat start de Node-compatibiliteitsserver voor lokale ontwikkeling. De
productiecontainer draait nginx.

Met Docker:

```bash
docker build -t docs-geostandaarden .
docker run --rm -p 8080:8080 docs-geostandaarden
```

De nginx runtime luistert op poort `8080` en heeft een health endpoint op
`/healthz`. De runtime markeert de omgeving met `PUBLICATION_ENV`, standaard
`production`. Die waarde komt terug in de HTTP-header
`X-Publication-Environment` en in `/environment.json`.

De nginx-runtime zet standaard security headers:

- `Content-Security-Policy`
- `Strict-Transport-Security`
- `X-Content-Type-Options`
- `X-Frame-Options`
- `Referrer-Policy`
- `Permissions-Policy`
- `X-Permitted-Cross-Domain-Policies`

De CSP is bewust compatibel met historische ReSpec/publicatiepagina's en staat
daarom nog inline scripts en styles toe.

Voor `security.txt` verwijst de runtime naar de centrale meldingpagina:

`https://www.geonovum.nl/.well-known/security.txt`

Redirects en interne rewrites worden beheerd in `publication-routes.json`.
`npm run build:nginx` genereert daaruit `build/nginx/default.conf.template` en
een statische publicatiemap voor de nginx image.

Voor een testomgeving die exact dezelfde publicatiebestanden als productie
draait:

```bash
docker run --rm -p 8080:8080 \
  -e PUBLICATION_ENV=test \
  ghcr.io/geonovum/docs.geostandaarden.nl:main
```

Daarmee hoeft de testomgeving straks niet meer uit `develop` te worden gevuld:
gebruik dezelfde image/tag als productie en zet alleen `PUBLICATION_ENV=test` op
de test-runtime.

Na een push naar `main` of `develop` publiceert `.github/workflows/container.yml`
images naar:

```text
ghcr.io/geonovum/docs.geostandaarden.nl:<branch>
ghcr.io/geonovum/docs.geostandaarden.nl:sha-<commit>
```

Op de default branch wordt ook `latest` gezet.

---

## Voor de beheerder

### Wat moet je doen?

- **Controleer nieuwe PR's naar `main`**:
  - Titel: `"Automated update from <repo> to main"`
  - Inhoud bevat:
    - Publicerend domein (`pubDomain`)
    - Bestandsmap (`folderPath`)

- **Merge de PR alleen als alles klopt**.
  - Na merge wordt automatisch gedeployed naar **productie**.

---

## Vragen?

Voor vragen over dit proces, neem contact op met: [Linda van den Brink](mailto:l.vandenbrink@geonovum.nl) of [Wilko Quak](mailto:w.quak@geonovum.nl)
