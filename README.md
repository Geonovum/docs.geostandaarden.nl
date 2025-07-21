# 📄 Geonovum Docs Repository

Deze repository publiceert automatisch publicaties op:

- **Productieomgeving**: [https://docs.geostandaarden.nl/](https://docs.geostandaarden.nl/) → `main` branch  
- **Testomgeving**: [https://test.docs.geostandaarden.nl/](https://test.docs.geostandaarden.nl/) → `develop` branch

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

## ❓ Vragen?

Voor vragen over dit proces, neem contact op met: [Linda van den Brink](mailto:l.vandenbrink@geonovum.nl) of [Wilko Quak](mailto:w.quak@geonovum.nl)
