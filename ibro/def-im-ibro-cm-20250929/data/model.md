# Informatiemodel Conceptueel model IBRO
## Domein Kern
![Kern](data/media/kern.png "Domein Kern")

### Objecttypen


<section id="informatiemodel_imibro_conceptueel_domein_kern_objecttype_object">
<h4>Object</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Object</td>
</tr>
<tr>
<th>Naam</th>
<td>Object</td>
</tr>
<tr>
<th>Herkomst</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een fenomeen in de werkelijkheid dat direct of indirect is geassocieerd met een locatie relatief ten opzichte van de aarde.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://definities.geostandaarden.nl/nen3610-2022/id/begrip/object">http://definities.geostandaarden.nl/nen3610-2022/id/begrip/object</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_geo_object">GeoObject (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_object_relatiesoort_heeft_netwerkverwijzing">heeftNetwerkverwijzing</a>
</td>
<td>
Netwerkverwijzing die een object heeft.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_netwerkverwijzing">Netwerkverwijzing</a>
</td>
<td>
0..*</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_kern_objecttype_object_relatiesoort_heeft_netwerkverwijzing">
<h6>heeftNetwerkverwijzing</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#heeftNetwerkverwijzing</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftNetwerkverwijzing</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft netwerkverwijzing</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Netwerkverwijzing die een object heeft.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_conceptueel_domein_kern_objecttype_functionele_ruimte">
<h5>FunctioneleRuimte</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#FunctioneleRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>FunctioneleRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>Functionele ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Ruimte met een specifieke functie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit objecttype is gelijk aan het objecttype Functionele ruimte uit NEN 3610, maar is opgenomen als specialisatie daarvan omdat er specifieke kenmerken voor zijn gedefinieerd.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/functionele_ruimte">https://definities.geostandaarden.nl/ibro/id/begrip/functionele_ruimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_functionele_ruimte">FunctioneleRuimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_object">Object</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_functionele_ruimte_attribuutsoort_status">status</a>
</td>
<td>
Fase van de levenscyclus waarin een object zich bevindt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_enumeratie_status_functionele_ruimte">StatusFunctioneleRuimte</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_kern_objecttype_functionele_ruimte_attribuutsoort_status">
<h6>status</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#status</td>
</tr>
<tr>
<th>Naam</th>
<td>status</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fase van de levenscyclus waarin een object zich bevindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_conceptueel_domein_kern_objecttype_reeel_object">
<h5>ReeelObject</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ReeelObject</td>
</tr>
<tr>
<th>Naam</th>
<td>ReeelObject</td>
</tr>
<tr>
<th>Alias</th>
<td>Reëel object</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geo-object dat zich geheel materieel manifesteert.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit objecttype is gelijk aan het objecttype Reëel object uit NEN 3610, maar is opgenomen als specialisatie daarvan omdat er specifieke kenmerken voor zijn gedefinieerd.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://definities.geostandaarden.nl/nen3610-2022/id/begrip/reeel_object">http://definities.geostandaarden.nl/nen3610-2022/id/begrip/reeel_object</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_reeel_object">ReeelObject (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_object">Object</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_reeel_object_attribuutsoort_status">status</a>
</td>
<td>
Fase van de levenscyclus waarin een object zich bevindt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_enumeratie_status_reeel_object">StatusReeelObject</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_reeel_object_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Object"> GM_Object</a>
</td>
<td>
1..*</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_kern_objecttype_reeel_object_attribuutsoort_status">
<h6>status</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#status</td>
</tr>
<tr>
<th>Naam</th>
<td>status</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fase van de levenscyclus waarin een object zich bevindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_kern_objecttype_reeel_object_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..*</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>



<section id="informatiemodel_imibro_conceptueel_domein_kern_objecttype_constructie">
<h6>Constructie</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Constructie</td>
</tr>
<tr>
<th>Naam</th>
<td>Constructie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebouwd object dat direct of indirect met de bodem is verbonden en bedoeld is om ter plaatse te functioneren.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit objecttype is gelijk aan het objecttype Constructie uit NEN 3610, maar is opgenomen als specialisatie daarvan omdat er specifieke kenmerken voor zijn gedefinieerd.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/constructie">https://definities.geostandaarden.nl/ibro/id/begrip/constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_constructie">Constructie (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kern_objecttype_onbepaald_terrein">
<h6>OnbepaaldTerrein</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OnbepaaldTerrein</td>
</tr>
<tr>
<th>Naam</th>
<td>OnbepaaldTerrein</td>
</tr>
<tr>
<th>Alias</th>
<td>Onbepaald terrein</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fysiek begrensd en zichtbaar terrein dat bij een gebouw hoort, dat niet verder wordt gedetailleerd in andere reële objecten en dat bestaat uit een mengvorm van verharding, water, begroeiing en/of constructies.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op definitie van erf in BGT</td>
</tr>
<tr>
<th>Toelichting</th>
<td>In plaats van onbepaald terrein kan ter plaatse ook de reële topografie worden ingewonnen (vrijwillig).</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/onbepaald_terrein">https://definities.geostandaarden.nl/ibro/id/begrip/onbepaald_terrein</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie Erf zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_kern_objecttype_registratieve_ruimte">
<h5>RegistratieveRuimte</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#RegistratieveRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>RegistratieveRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>Registratieve ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Op basis van wet- of regelgeving afgebakende ruimte die als eenheid geldt van politiek-bestuurlijke verantwoordelijkheid of voor bedrijfsvoering.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit objecttype is gelijk aan het objecttype Registratieve ruimte uit NEN 3610, maar is opgenomen als specialisatie daarvan omdat er specifieke kenmerken voor zijn gedefinieerd.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/registratieve_ruimte">https://definities.geostandaarden.nl/ibro/id/begrip/registratieve_ruimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_registratieve_ruimte">RegistratieveRuimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_object">Object</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_registratieve_ruimte_attribuutsoort_status">status</a>
</td>
<td>
Fase van de levenscyclus waarin een object zich bevindt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_enumeratie_status_registratieve_ruimte">StatusRegistratieveRuimte</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_kern_objecttype_registratieve_ruimte_attribuutsoort_status">
<h6>status</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#status</td>
</tr>
<tr>
<th>Naam</th>
<td>status</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fase van de levenscyclus waarin een object zich bevindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_conceptueel_domein_kern_objecttype_geografische_ruimte">
<h5>GeografischeRuimte</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#GeografischeRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>GeografischeRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>Geografische ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Ruimte die bekendstaat onder een vanuit de historie of het gebruik bekende benaming of een fysisch-geografische samenhang, al dan niet met zijn omgeving, kent.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit objecttype is gelijk aan het objecttype Geografische ruimte uit NEN 3610, maar is opgenomen als specialisatie daarvan omdat er specifieke kenmerken voor zijn gedefinieerd.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/geografische_ruimte">https://definities.geostandaarden.nl/ibro/id/begrip/geografische_ruimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_geografische_ruimte">GeografischeRuimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_object">Object</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_geografische_ruimte_attribuutsoort_status">status</a>
</td>
<td>
Fase van de levenscyclus waarin een object zich bevindt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_enumeratie_status_geografische_ruimte">StatusGeografischeRuimte</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_kern_objecttype_geografische_ruimte_attribuutsoort_status">
<h6>status</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#status</td>
</tr>
<tr>
<th>Naam</th>
<td>status</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fase van de levenscyclus waarin een object zich bevindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
</section>



### Keuzen tussen datatypen

#### VlakOfMultivlak {#informatiemodel_imibro_conceptueel_domein_kern_keuze_datatype__vlak_of_multivlak}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#VlakOfMultivlak</td>
</tr>
<tr>
<th>Naam</th>
<td>VlakOfMultivlak</td>
</tr>
<tr>
<th>Alias</th>
<td>Vlak of multivlak</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Keuze uit een vlak- of multivlakgeometrie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht datatypekeuzen</h5>
<table style="width: 100%">
<colgroup style="width: 50%"></colgroup>
<tbody>
<tr>
  <th>Datatype</th>
</tr>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_MultiSurface"> GM_MultiSurface</a>
</td>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
</tbody>
</table>
</section>

#### PuntLijnOfVlak {#informatiemodel_imibro_conceptueel_domein_kern_keuze_datatype__punt_lijn_of_vlak}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#PuntLijnOfVlak</td>
</tr>
<tr>
<th>Naam</th>
<td>PuntLijnOfVlak</td>
</tr>
<tr>
<th>Alias</th>
<td>Punt, lijn of vlak</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Keuze uit een punt-, lijn- of vlakgeometrie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht datatypekeuzen</h5>
<table style="width: 100%">
<colgroup style="width: 50%"></colgroup>
<tbody>
<tr>
  <th>Datatype</th>
</tr>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Point"> GM_Point</a>
</td>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_LineString"> GM_LineString</a>
</td>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
</tbody>
</table>
</section>

#### MultiPuntOfMultiVlak {#informatiemodel_imibro_conceptueel_domein_kern_keuze_datatype__multi_punt_of_multi_vlak}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#MultiPuntOfMultiVlak</td>
</tr>
<tr>
<th>Naam</th>
<td>MultiPuntOfMultiVlak</td>
</tr>
<tr>
<th>Alias</th>
<td>Multipunt of multivlak</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Keuze uit een multipunt- of multivlakgeometrie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht datatypekeuzen</h5>
<table style="width: 100%">
<colgroup style="width: 50%"></colgroup>
<tbody>
<tr>
  <th>Datatype</th>
</tr>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_MultiPoint"> GM_MultiPoint</a>
</td>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_MultiSurface"> GM_MultiSurface</a>
</td>
</tbody>
</table>
</section>




### Enumeraties

#### StatusReeelObject {#informatiemodel_imibro_conceptueel_domein_kern_enumeratie_status_reeel_object}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#StatusReeelObject</td>
</tr>
<tr>
<th>Naam</th>
<td>StatusReeelObject</td>
</tr>
<tr>
<th>Alias</th>
<td>Status reëel object</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fase van ontwikkeling waarin een reëel object zich bevindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht waarden</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 75%"></colgroup>
<tbody>
<tr>
  <th>Waarde</th>
  <th>Definitie</th>
</tr>
<tr>
<td>
Ontwerp</td>
<td>
Object dat zich in de schets-, ontwerp- of planfase bevindt.</td>
<tr>
<td>
Bouw gepland</td>
<td>
Object dat nog niet is gebouwd of aangelegd maar waarvoor de voor de bouw of aanleg noodzakelijke ruimtelijke procedures zijn afgerond.</td>
<tr>
<td>
Niet gerealiseerd</td>
<td>
Object waarvan is vastgesteld dat het ontwerp of een geplande bouw of aanleg niet heeft geleid tot een feitelijke realisatie van het object.</td>
<tr>
<td>
In aanbouw</td>
<td>
Object waarvan de feitelijke bouw, verbouw of aanleg is aangevangen.</td>
<tr>
<td>
Bestaand</td>
<td>
Object dat in gebruik is genomen of als gebruiksgereed kan worden beschouwd dan wel buiten gebruik is gesteld.</td>
<tr>
<td>
Verbouw gepland</td>
<td>
Object dat nog geschikt is voor oorspronkelijk gebruik, maar waarvan de voor de verbouw of wijziging noodzakelijke ruimtelijke procedures zijn afgerond, en de verbouwing of wijziging nog niet is voltooid.</td>
<tr>
<td>
Sloop gepland</td>
<td>
Object waarvoor de voor de sloop of verwijdering noodzakelijke ruimtelijke procedures zijn afgerond.</td>
<tr>
<td>
In sloop</td>
<td>
Object waarvan een langdurig slooptraject is aangevangen.</td>
<tr>
<td>
Gesloopt</td>
<td>
Object waarvan de feitelijke sloop of verwijdering is afgerond.</td>
</tbody>
</table>


</section>

#### StatusFunctioneleRuimte {#informatiemodel_imibro_conceptueel_domein_kern_enumeratie_status_functionele_ruimte}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#StatusFunctioneleRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>StatusFunctioneleRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>Status functionele ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fase van ontwikkeling waarin een functionele ruimte zich bevindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht waarden</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 75%"></colgroup>
<tbody>
<tr>
  <th>Waarde</th>
  <th>Definitie</th>
</tr>
<tr>
<td>
Ontwerp</td>
<td>
Object dat zich in de schets- of ontwerpfase bevindt.</td>
<tr>
<td>
Niet gerealiseerd</td>
<td>
Object waarvan is vastgesteld dat het ontwerp niet heeft geleid tot de feitelijke vorming van het object.</td>
<tr>
<td>
In voorbereiding</td>
<td>
Gevormd object waarvan de voor vervulling van de functie noodzakelijke reële objecten nog niet gereed zijn.</td>
<tr>
<td>
Bestaand</td>
<td>
Object dat geschikt is om zijn functie te vervullen.</td>
<tr>
<td>
Onbruikbaar</td>
<td>
Object dat niet geschikt is om zijn functie te vervullen.</td>
<tr>
<td>
Opgeheven</td>
<td>
Object dat is opgeheven.</td>
</tbody>
</table>


</section>

#### StatusRegistratieveRuimte {#informatiemodel_imibro_conceptueel_domein_kern_enumeratie_status_registratieve_ruimte}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#StatusRegistratieveRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>StatusRegistratieveRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>Status registratieve ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fase van ontwikkeling waarin een registratieve ruimte zich bevindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht waarden</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 75%"></colgroup>
<tbody>
<tr>
  <th>Waarde</th>
  <th>Definitie</th>
</tr>
<tr>
<td>
Ontwerp</td>
<td>
Object waarvan de vaststelling wordt voorbereid.</td>
<tr>
<td>
Niet gerealiseerd</td>
<td>
Object waarvan de voorbereiding niet heeft geleid tot vaststelling.</td>
<tr>
<td>
Vastgesteld</td>
<td>
Object dat door het bevoegd gezag is benoemd of afgebakend op grond van wet- of regelgeving.</td>
<tr>
<td>
Ingetrokken</td>
<td>
Object dat door het bevoegd gezag is ingetrokken op grond van wet- of regelgeving.</td>
</tbody>
</table>


</section>

#### StatusGeografischeRuimte {#informatiemodel_imibro_conceptueel_domein_kern_enumeratie_status_geografische_ruimte}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#StatusGeografischeRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>StatusGeografischeRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>Status geografische ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fase van ontwikkeling waarin een geografische ruimte zich bevindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht waarden</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 75%"></colgroup>
<tbody>
<tr>
  <th>Waarde</th>
  <th>Definitie</th>
</tr>
<tr>
<td>
Ontwerp</td>
<td>
Object waarvan de vorming wordt voorbereid.</td>
<tr>
<td>
Niet gerealiseerd</td>
<td>
Object waarvan is vastgesteld dat het ontwerp niet heeft geleid tot de feitelijke vorming van het object.</td>
<tr>
<td>
Bestaand</td>
<td>
Object dat als zodanig wordt onderscheiden.</td>
<tr>
<td>
Opgeheven</td>
<td>
Object dat niet langer als zodanig wordt aangemerkt.</td>
</tbody>
</table>


</section>



## Domein Groen
![Groen](data/media/groen.png "Domein Groen")

### Objecttypen


<section id="informatiemodel_imibro_conceptueel_domein_groen_objecttype_begroeiing">
<h4>Begroeiing</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Begroeiing</td>
</tr>
<tr>
<th>Naam</th>
<td>Begroeiing</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Planten die op natuurlijke wijze zijn ontstaan of door mensen zijn aangeplant.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit objecttype is gelijk aan het objecttype Begroeiing uit NEN 3610, maar is opgenomen als specialisatie daarvan omdat er specifieke kenmerken voor zijn gedefinieerd.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/begroeiing">https://definities.geostandaarden.nl/ibro/id/begrip/begroeiing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_begroeiing">Begroeiing (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_groen_objecttype_heide">
<h5>Heide</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Heide</td>
</tr>
<tr>
<th>Naam</th>
<td>Heide</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Terrein begroeid met heide en heideachtige vegetaties.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Het reëel object Heide is opgenomen om de kenmerkende begroeiing weer te geven ten behoeve van navigatie en toegankelijkheid. Deze gebieden kenmerken zich door een heel eigen verschijningsvorm, waarbinnen de begroeiing plaatselijk en tijdelijk kan veranderen, maar waar onderhoud gericht is op behoud van de typische verschijningsvorm van heide.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/heide">https://definities.geostandaarden.nl/ibro/id/begrip/heide</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie heide zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_groen_objecttype_begroeiing">Begroeiing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_groen_objecttype_haag">
<h5>Haag</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Haag</td>
</tr>
<tr>
<th>Naam</th>
<td>Haag</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMBOR 2025</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gesloten lijnvormige beplanting, waarvan de hoogte en breedte door middel van knippen in stand wordt gehouden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMBOR 2025</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/haag">https://definities.geostandaarden.nl/ibro/id/begrip/haag</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie fysiek voorkomen haag zoals deze is opgenomen in de basisregistratie grootschalige topografie. En de heg, haag zoals deze is opgenomen in de basisregistratie topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_groen_objecttype_begroeiing">Begroeiing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_groen_objecttype_fruit_of_kweekbomen">
<h5>FruitOfKweekbomen</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#FruitOfKweekbomen</td>
</tr>
<tr>
<th>Naam</th>
<td>FruitOfKweekbomen</td>
</tr>
<tr>
<th>Alias</th>
<td>Fruit of kweekbomen</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Begroeiing die het kweken van meerjarige siergewassen en bomen betreft ten behoeve van een later gebruik elders of voor het kweken van fruit.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>De hier bedoelde kwekerijen onderscheiden zich van kwekerijen van potplanten door de langdurige stand/teelt van gewassen.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/fruit-_of_kweekbomen">https://definities.geostandaarden.nl/ibro/id/begrip/fruit-_of_kweekbomen</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie fysiek voorkomen fruitteelt en boomteelt zoals deze is opgenomen in de basisregistratie grootschalige topografie. En de Boomkwekerij, Fruitkwekerij en Boomgaard zoals deze is opgenomen in de basisregistratie topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_groen_objecttype_begroeiing">Begroeiing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_groen_objecttype_boomkwekerij">
<h6>Boomkwekerij</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Boomkwekerij</td>
</tr>
<tr>
<th>Naam</th>
<td>Boomkwekerij</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Terrein, overwegend in gebruik t.b.v. het opkweken van bomen (inclusief coniferen en sparren) en struiken, waarbij de hoogte van de aanplant niet van belang is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/boomkwekerij">https://definities.geostandaarden.nl/ibro/id/begrip/boomkwekerij</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_groen_objecttype_fruit_of_kweekbomen">FruitOfKweekbomen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_groen_objecttype_hoogstam_boomgaarden">
<h6>HoogstamBoomgaarden</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#HoogstamBoomgaarden</td>
</tr>
<tr>
<th>Naam</th>
<td>HoogstamBoomgaarden</td>
</tr>
<tr>
<th>Alias</th>
<td>Hoogstam boomgaarden</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Terrein begroeid met hoogstamfruitbomen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/hoogstam_boomgaarden">https://definities.geostandaarden.nl/ibro/id/begrip/hoogstam_boomgaarden</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_groen_objecttype_fruit_of_kweekbomen">FruitOfKweekbomen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_groen_objecttype_fruitkwekerij_met_lage_opstand">
<h6>FruitkwekerijMetLageOpstand</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#FruitkwekerijMetLageOpstand</td>
</tr>
<tr>
<th>Naam</th>
<td>FruitkwekerijMetLageOpstand</td>
</tr>
<tr>
<th>Alias</th>
<td>Fruitkwekerij met lage opstand</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Terrein begroeid met laagstamfruitbomen, druivenstokken of begroeid met heesters voor zachtfruit zoals bessen of frambozen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/fruitkwekerij_met_lage_opstand">https://definities.geostandaarden.nl/ibro/id/begrip/fruitkwekerij_met_lage_opstand</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_groen_objecttype_fruit_of_kweekbomen">FruitOfKweekbomen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_groen_objecttype_bouwland">
<h5>Bouwland</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bouwland</td>
</tr>
<tr>
<th>Naam</th>
<td>Bouwland</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Terrein in gebruik als akker, met gewassen die in een teelt-roulatieschema zijn opgenomen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Kan tijdelijk zonder gewas zijn of braak liggen.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/bouwland">https://definities.geostandaarden.nl/ibro/id/begrip/bouwland</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie fysiek voorkomen bouwland zoals deze is opgenomen in de basisregistratie grootschalige topografie. BRT-object Braakliggend wordt voor zover het landbouwgrond betreft ook in dit objecttype akkerland opgenomen.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_groen_objecttype_begroeiing">Begroeiing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_groen_objecttype_bos">
<h5>Bos</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bos</td>
</tr>
<tr>
<th>Naam</th>
<td>Bos</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Begroeiing die een dusdanige aantal bomen betreft dat deze een min of meer gesloten geheel vormen of, na volgroeiing van de bomen, zullen vormen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op de definities van bos in de BGT 1.2 en van Griend en Hakhout uit IMGeo 2.2</td>
</tr>
<tr>
<th>Toelichting</th>
<td>De definitie van Bos laat voldoende ruimte voor plaatselijke aanwezigheid van struiken.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/bos">https://definities.geostandaarden.nl/ibro/id/begrip/bos</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie fysiek voorkomen loofbos, naaldbos en gemengd bos en groenvoorziening van type bosplantsoen van begroeid terreindeel zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_groen_objecttype_begroeiing">Begroeiing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_groen_objecttype_naaldbos">
<h6>Naaldbos</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Naaldbos</td>
</tr>
<tr>
<th>Naam</th>
<td>Naaldbos</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Terrein begroeid met een dusdanige aantal naaldbomen dat deze een min of meer gesloten geheel vormen of, na volgroeiing van de bomen, zullen vormen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/naaldbos">https://definities.geostandaarden.nl/ibro/id/begrip/naaldbos</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_groen_objecttype_bos">Bos</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_groen_objecttype_griend_en_hakhout">
<h6>GriendEnHakhout</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#GriendEnHakhout</td>
</tr>
<tr>
<th>Naam</th>
<td>GriendEnHakhout</td>
</tr>
<tr>
<th>Alias</th>
<td>Griend en hakhout</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Terrein begroeid met loofbomen, in een dicht groeiverband die periodiek wordt ingekort.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/griend_en_hakhout">https://definities.geostandaarden.nl/ibro/id/begrip/griend_en_hakhout</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_groen_objecttype_bos">Bos</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_groen_objecttype_gemengd_bos">
<h6>GemengdBos</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#GemengdBos</td>
</tr>
<tr>
<th>Naam</th>
<td>GemengdBos</td>
</tr>
<tr>
<th>Alias</th>
<td>Gemengd bos</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Terrein begroeid met een dusdanig aantal naald- en loofbomen dat deze een min of meer gesloten geheel vormen of, na volgroeiing van de bomen, zullen vormen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/gemengd_bos">https://definities.geostandaarden.nl/ibro/id/begrip/gemengd_bos</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_groen_objecttype_bos">Bos</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_groen_objecttype_loofbos">
<h6>Loofbos</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Loofbos</td>
</tr>
<tr>
<th>Naam</th>
<td>Loofbos</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Terrein begroeid met een dusdanige aantal loofbomen dat deze een min of meer gesloten geheel vormen of, na volgroeiing van de bomen, zullen vormen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/loofbos">https://definities.geostandaarden.nl/ibro/id/begrip/loofbos</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_groen_objecttype_bos">Bos</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_groen_objecttype_struiken">
<h5>Struiken</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Struiken</td>
</tr>
<tr>
<th>Naam</th>
<td>Struiken</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Begroeiing van bodembedekkers en/of houtachtige en/of meerstammige overblijvende planten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit omvat alle begroeiing die niet valt onder de overige reële objecten onder Begroeiing.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href=" https://definities.geostandaarden.nl/ibro/id/begrip/struiken"> https://definities.geostandaarden.nl/ibro/id/begrip/struiken</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie fysiek voorkomen struiken en circa de helft van groenvoorziening (de rest valt onder gras- en kruidachtigen) zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_groen_objecttype_begroeiing">Begroeiing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_groen_objecttype_gras_en_kruidachtigen">
<h5>GrasEnKruidachtigen</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#GrasEnKruidachtigen</td>
</tr>
<tr>
<th>Naam</th>
<td>GrasEnKruidachtigen</td>
</tr>
<tr>
<th>Alias</th>
<td>Gras- en kruidachtigen</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Begroeiing die een laagblijvende, aaneengesloten gras- en/of kruidachtige vegetatie betreft.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMBOR</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Onderscheid in gras voor agrarisch gebruik, dan wel voor natuurlijk gebruik of &#39;overig&#39; gebruik wordt niet gemaakt in dit informatiemodel. In een sectormodel kan onderscheid gemaakt worden op basis van sector specifieke kenmerken. De combinatie van reëel object Gras- en kruidachtigen en functioneel object Park of Sportterrein en/of sectorregistraties (bv IMNA, gewaspercelen, IMBOR) kan voorzien in informatiebehoefte aan specifieke grastypen zoals &#39;gazon&#39;, agrarisch/natuurlijk gras&#39; of &#39;sportveld&#39;.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/gras-_en_kruidachtigen">https://definities.geostandaarden.nl/ibro/id/begrip/gras-_en_kruidachtigen</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie fysiek voorkomen grasland agrarisch en grasland overig, zoals opgenomen in de basisregistratie grootschalige topografie, en gras- en kruidachtigen, zoals als optionele plus-inhoud opgenomen in de BGT onder groenvoorziening.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_groen_objecttype_begroeiing">Begroeiing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_groen_objecttype_boom">
<h5>Boom</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Boom</td>
</tr>
<tr>
<th>Naam</th>
<td>Boom</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een overblijvende plant met verhoute stam en kroon.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>In een later stadium zullen registratieregels worden opgesteld waarin een nadere invulling wordt gegeven welke bomen verplicht in de registratie worden opgenomen. Ook zal dan nader worden uitgewerkt wat de exacte relatie is tussen boom, houtsingel, bomenrij en bos, hoe deze begrippen zich verhouden tot andere aan het landschap gerelateerde begrippen en op welke wijze de geometrie van deze begrippen wordt vormgegeven.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/boom">https://definities.geostandaarden.nl/ibro/id/begrip/boom</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie boom zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_groen_objecttype_begroeiing">Begroeiing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_groen_objecttype_moeras">
<h5>Moeras</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Moeras</td>
</tr>
<tr>
<th>Naam</th>
<td>Moeras</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Terrein met moerasvegetatie in stilstaand water van geringe diepte zonder merkbare toe- of afvloeiing.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Het reëel object Moeras is opgenomen om de specifieke combinatie van water en kenmerkende moerasbegroeiing weer te geven ten behoeve van navigatie en toegankelijkheid. Deze gebieden kenmerken zich door een heel eigen verschijningsvorm, waarbinnen de begroeiing plaatselijk en tijdelijk kan veranderen, maar waar onderhoud gericht is op behoud van de typische verschijningsvorm van moerasland.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/moeras">https://definities.geostandaarden.nl/ibro/id/begrip/moeras</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie moeras zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_groen_objecttype_begroeiing">Begroeiing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_groen_objecttype_houtsingel">
<h5>Houtsingel</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Houtsingel</td>
</tr>
<tr>
<th>Naam</th>
<td>Houtsingel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Opgaande rijvormige begroeiing van bomen (enkelvoudige/meervoudige stammen) mét ondergroei van struiken.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td> In een later stadium zullen registratieregels worden opgesteld waarin nader wordt uitgewerkt wat de exacte relatie is tussen boom, houtsingel, bomenrij en bos, hoe deze begrippen zich verhouden tot andere aan het landschap gerelateerde begrippen en op welke wijze de geometrie van deze begrippen wordt vormgegeven.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/houtsingel">https://definities.geostandaarden.nl/ibro/id/begrip/houtsingel</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie houtwal zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_groen_objecttype_begroeiing">Begroeiing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_groen_objecttype_rietland">
<h5>Rietland</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Rietland</td>
</tr>
<tr>
<th>Naam</th>
<td>Rietland</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Terrein overwegend begroeid met rietvegetatie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Het reëel object Rietland is opgenomen om de specifieke combinatie van water en kenmerkende begroeiing weer te geven ten behoeve van navigatie en toegankelijkheid. Deze gebieden kenmerken zich door een heel eigen verschijningsvorm, waarbinnen de begroeiing plaatselijk en tijdelijk kan veranderen, maar waar onderhoud gericht is op behoud van de typische verschijningsvorm van rietland.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/rietland">https://definities.geostandaarden.nl/ibro/id/begrip/rietland</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie rietland zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_groen_objecttype_begroeiing">Begroeiing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_groen_objecttype_houtwal">
<h5>Houtwal</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Houtwal</td>
</tr>
<tr>
<th>Naam</th>
<td>Houtwal</td>
</tr>
<tr>
<th>Herkomst</th>
<td>BGT</td>
</tr>
<tr>
<th>Definitie</th>
<td>Terreindeel zijnde een afscheiding met beperkte breedte en beplant met bomen of struiken. </td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>BGT 1.2</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Een houtwal staat op een aarden wal. </td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/houtwal">https://definities.geostandaarden.nl/ibro/id/begrip/houtwal</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_groen_objecttype_begroeiing">Begroeiing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>








## Domein Bodem
![Bodem](data/media/bodem.png "Domein Bodem")

### Objecttypen


<section id="informatiemodel_imibro_conceptueel_domein_bodem_objecttype_onbegroeide_grond">
<h4>OnbegroeideGrond</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OnbegroeideGrond</td>
</tr>
<tr>
<th>Naam</th>
<td>OnbegroeideGrond</td>
</tr>
<tr>
<th>Alias</th>
<td>Onbegroeide grond</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Oppervlakte die niet bedekt is met enige vorm van begroeiing, water, verharding, gebouwen of andere constructies.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Onbegroeide grond is bewust niet bedekt.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/onbegroeide_grond">https://definities.geostandaarden.nl/ibro/id/begrip/onbegroeide_grond</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier ten opzichte van de bestaande basisregistraties een nieuw objecttype, grotendeels het bestaande fysieke voorkomen type onverhard of zand van terreinen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_bodem">Bodem (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>








## Domein Water
![Water](data/media/water.png "Domein Water")

### Objecttypen


<section id="informatiemodel_imibro_conceptueel_domein_water_objecttype_oppervlaktewater">
<h4>Oppervlaktewater</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Oppervlaktewater</td>
</tr>
<tr>
<th>Naam</th>
<td>Oppervlaktewater</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Massa van water dat de bodem bedekt of in normale omstandigheden kan bedekken.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit objecttype is gelijk aan het objecttype Oppervlaktewater uit NEN 3610, maar is opgenomen als specialisatie daarvan omdat er specifieke kenmerken voor zijn gedefinieerd.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/oppervlaktewater">https://definities.geostandaarden.nl/ibro/id/begrip/oppervlaktewater</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_oppervlaktewater">Oppervlaktewater (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_water_objecttype_greppel">
<h5>Greppel</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Greppel</td>
</tr>
<tr>
<th>Naam</th>
<td>Greppel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMGEO 1.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een ten behoeve van de waterbeheersing gegraven geul die al dan niet met water bedekt is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMGEO 1.0</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/greppel">https://definities.geostandaarden.nl/ibro/id/begrip/greppel</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie greppel/droge sloot zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_water_objecttype_oppervlaktewater">Oppervlaktewater</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_water_objecttype_watergang">
<h5>Watergang</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Watergang</td>
</tr>
<tr>
<th>Naam</th>
<td>Watergang</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Langgerekte verlaging in het aardoppervlak van natuurlijke of kunstmatige oorsprong die permanent of periodiek water bevat.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>AQUO lex</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Het betreft hier enkel het aanwezige water bij het voorgeschreven waterpeil. Het bij dit waterpeil droog liggende gedeelte van de oever valt niet binnen de afbakening van dit object.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/watergang">https://definities.geostandaarden.nl/ibro/id/begrip/watergang</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie waterloop zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_water_objecttype_oppervlaktewater">Oppervlaktewater</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_water_objecttype_watergang_attribuutsoort_indicatie_primair">indicatiePrimair</a>
</td>
<td>
Deze watergang is al dan niet een hoofdverbinding in het watersysteem.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_water_objecttype_watergang_attribuutsoort_indicatie_primair">
<h6>indicatiePrimair</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#indicatiePrimair</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatiePrimair</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Deze watergang is al dan niet een hoofdverbinding in het watersysteem.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>



<section id="informatiemodel_imibro_conceptueel_domein_water_objecttype_sloot">
<h6>Sloot</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Sloot</td>
</tr>
<tr>
<th>Naam</th>
<td>Sloot</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Watergang van beperkte breedte die stilstaand of langzaam stromend water bevat, en die is aangelegd met als doel het beheersen van het waterpeil.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/sloot">https://definities.geostandaarden.nl/ibro/id/begrip/sloot</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_water_objecttype_watergang">Watergang</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_water_objecttype_rivier">
<h6>Rivier</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Rivier</td>
</tr>
<tr>
<th>Naam</th>
<td>Rivier</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Water dat door atmosferische neerslag op hellende terreinen valt, vloeit, voor zover het niet verdampt of door planten wordt opgenomen, tezamen tot een watergang en stroomt naar laaggelegen streken.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/rivier">https://definities.geostandaarden.nl/ibro/id/begrip/rivier</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_water_objecttype_watergang">Watergang</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_water_objecttype_gracht">
<h6>Gracht</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Gracht</td>
</tr>
<tr>
<th>Naam</th>
<td>Gracht</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gegraven watergang die hoofdzakelijk voorkomt in oude steden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/gracht">https://definities.geostandaarden.nl/ibro/id/begrip/gracht</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_water_objecttype_watergang">Watergang</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_water_objecttype_beek">
<h6>Beek</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Beek</td>
</tr>
<tr>
<th>Naam</th>
<td>Beek</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Natuurlijke smalle watergang zonder getij, die veelal doorwaadbaar is en afwatert op een rivier.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/beek">https://definities.geostandaarden.nl/ibro/id/begrip/beek</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_water_objecttype_watergang">Watergang</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_water_objecttype_kanaal">
<h6>Kanaal</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kanaal</td>
</tr>
<tr>
<th>Naam</th>
<td>Kanaal</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gegraven grote watergang die dient voor scheepvaart en/of watertransport.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/kanaal">https://definities.geostandaarden.nl/ibro/id/begrip/kanaal</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_water_objecttype_watergang">Watergang</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_water_objecttype_watervlakte">
<h5>Watervlakte</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Watervlakte</td>
</tr>
<tr>
<th>Naam</th>
<td>Watervlakte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een niet langgerekte verlaging in het aardoppervlak van natuurlijke of kunstmatige oorsprong, die permanent of periodiek water bevat.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>gebaseerd op Aquo-standaard</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Het betreft hier enkel het aanwezige water bij het voorgeschreven waterpeil. Het bij dit waterpeil droog liggende gedeelte van de oever valt niet binnen de afbakening van dit object.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/watervlakte">https://definities.geostandaarden.nl/ibro/id/begrip/watervlakte</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie watervlakte en zee zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_water_objecttype_oppervlaktewater">Oppervlaktewater</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_water_objecttype_watervlakte_attribuutsoort_indicatie_primair">indicatiePrimair</a>
</td>
<td>
Deze watervlakte is al dan niet een hoofdverbinding in het watersysteem.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_water_objecttype_watervlakte_attribuutsoort_indicatie_primair">
<h6>indicatiePrimair</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#indicatiePrimair</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatiePrimair</td>
</tr>
<tr>
<th>Alias</th>
<td>indicatie primair</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Deze watervlakte is al dan niet een hoofdverbinding in het watersysteem.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>



<section id="informatiemodel_imibro_conceptueel_domein_water_objecttype_ven">
<h6>Ven</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Ven</td>
</tr>
<tr>
<th>Naam</th>
<td>Ven</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Natuurlijk ontstaan meer op zandgrond.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/ven">https://definities.geostandaarden.nl/ibro/id/begrip/ven</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_water_objecttype_watervlakte">Watervlakte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_water_objecttype_meer">
<h6>Meer</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Meer</td>
</tr>
<tr>
<th>Naam</th>
<td>Meer</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Watervlakte (meestal zoet) die op natuurlijke wijze dan wel door menselijk ingrijpen (ingraving of afsluiting) is ontstaan.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/meer">https://definities.geostandaarden.nl/ibro/id/begrip/meer</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_water_objecttype_watervlakte">Watervlakte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_water_objecttype_vijver">
<h6>Vijver</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Vijver</td>
</tr>
<tr>
<th>Naam</th>
<td>Vijver</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gegraven waterpartij, aangelegd in stedelijke omgeving of in een parklandschap.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/vijver">https://definities.geostandaarden.nl/ibro/id/begrip/vijver</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_water_objecttype_watervlakte">Watervlakte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_water_objecttype_zee">
<h6>Zee</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Zee</td>
</tr>
<tr>
<th>Naam</th>
<td>Zee</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Uitgestrekt oppervlak zout water.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/zee">https://definities.geostandaarden.nl/ibro/id/begrip/zee</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_water_objecttype_watervlakte">Watervlakte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_water_objecttype_plas">
<h6>Plas</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Plas</td>
</tr>
<tr>
<th>Naam</th>
<td>Plas</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Waterpartij, ontstaan door de winning van delfstoffen in dagbouw, die in contact staat met de vrije grondwaterspiegel.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/plas">https://definities.geostandaarden.nl/ibro/id/begrip/plas</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_water_objecttype_watervlakte">Watervlakte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_water_objecttype_getijdengebied">
<h5>Getijdengebied</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Getijdengebied</td>
</tr>
<tr>
<th>Naam</th>
<td>Getijdengebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geheel of gedeeltelijk droogvallende gronden die buitendijks gelegen zijn.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Basisregistratie Topografie: Catalogus en Productspecificaties (versie 1.2.0.1)</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/getijdengebied">https://definities.geostandaarden.nl/ibro/id/begrip/getijdengebied</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie ondersteunend waterdeel; Type slik en begroeide terreindelen; Type kwelder zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_water_objecttype_oppervlaktewater">Oppervlaktewater</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_water_objecttype_slik">
<h6>Slik</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Slik</td>
</tr>
<tr>
<th>Naam</th>
<td>Slik</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Buitendijks aangeslibde, onbegroeide grond die bij vrijwel elk hoogwater onderloopt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/slik">https://definities.geostandaarden.nl/ibro/id/begrip/slik</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_water_objecttype_getijdengebied">Getijdengebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_water_objecttype_schor">
<h6>Schor</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Schor</td>
</tr>
<tr>
<th>Naam</th>
<td>Schor</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Buitendijks aangeslibd land, dat bij gewone vloed niet meer onderloopt en doorgaans begroeid is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/schor">https://definities.geostandaarden.nl/ibro/id/begrip/schor</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_water_objecttype_getijdengebied">Getijdengebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>
</section>








## Domein Gebouwen
![Gebouwen](data/media/gebouwen.png "Domein Gebouwen")

### Objecttypen


<section id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand">
<h4>Pand</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Pand</td>
</tr>
<tr>
<th>Naam</th>
<td>Pand</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een bouwwerk, dat overdekt is en een geheel of grotendeels met wanden omsloten constructief zelfstandige eenheid vormt, bedoeld voor het in een afgeschermde omgeving onderbrengen van mensen, dieren of voorwerpen of voor de productie van goederen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op definitie “pand” in artikel 1 Wet basisregistratie adressen en gebouwen en de INSPIRE richtlijn</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Er is gekozen voor de naam Pand in plaats van de naam Gebouw zoals in de SOR. De BAG afbakeningscriteria blijven behouden. Dit om de BAG bijhouding niet te verstoren.
Een Pand bestaat uit minimaal 1 Panddeel (Type: basisconstructie).</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/pand">https://definities.geostandaarden.nl/ibro/id/begrip/pand</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie panden en grotendeels de bestaande populatie open loodsen en overkappingen zoals deze zijn opgenomen in de basisregistratie adressen en gebouwen en de basisregistratie grootschalige topografie. De bestaande definitie van het begrip pand is uitgebreid met een aantal elementen die zijn opgenomen in de INSPIRE richtlijn.

Tot de verzameling Panden horen ook afzonderlijk staande overdekkingen rustend op een constructie met kolommen met
één of meerdere open gevels, zoals loodsen, overkappingen, parkeergarages en uitkijktorens.

Tot de verzameling Panden behoren ook (in theorie) verplaatsbare objecten.

Tot de verzameling Panden behoren geen bouwwerken &lt;5 m2 Bruto grondoppervlakte. Deze worden afgebakend als
Erfconstructies.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_gebouw">Gebouw (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand_attribuutsoort_aard_pand">aardPand</a>
</td>
<td>
Fysieke verschijningsvorm van een pand.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_enumeratie_aard_pand">AardPand</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand_attribuutsoort_oorspronkelijk_bouwjaar">oorspronkelijkBouwjaar</a>
</td>
<td>
Aanduiding van het jaar waarin een constructie oorspronkelijk als bouwkundig gereed is of zal worden opgeleverd.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Year</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand_attribuutsoort_naam">naam</a>
</td>
<td>
Naam van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand_attribuutsoort_indicatie_open_constructie">indicatieOpenConstructie</a>
</td>
<td>
Indicatie dat het pand een open constructie heeft.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand_relatiesoort_bestaat_uit">bestaatUit</a>
</td>
<td>
Object waar dit object uit bestaat.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_panddeel">Panddeel</a>
</td>
<td>
1..*</td>
</tr>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht Constraints</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Specificatie</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand_constraint_minimaal_basisconstructie">MinimaalBasisconstructie</a>
</td>
<td>
Een Pand bestaat uit minimaal 1 Panddeel (Type: Basisconstructie).</td>
</tr>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand_attribuutsoort_aard_pand">
<h6>aardPand</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#aardPand</td>
</tr>
<tr>
<th>Naam</th>
<td>aardPand</td>
</tr>
<tr>
<th>Alias</th>
<td>aard pand</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fysieke verschijningsvorm van een pand.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand_attribuutsoort_oorspronkelijk_bouwjaar">
<h6>oorspronkelijkBouwjaar</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#oorspronkelijkBouwjaar</td>
</tr>
<tr>
<th>Naam</th>
<td>oorspronkelijkBouwjaar</td>
</tr>
<tr>
<th>Alias</th>
<td>oorspronkelijk bouwjaar</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Aanduiding van het jaar waarin een constructie oorspronkelijk als bouwkundig gereed is of zal worden opgeleverd.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Deze eigenschap kan worden afgeleid. Dit is gelijk aan het oorspronkelijk bouwjaar van het panddeel van het type basisconstructie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Breed geaccepteerde benaming van een object zoals deze door de eigenaar is toegekend of zoals deze in de volksmond bekend staat.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand_attribuutsoort_indicatie_open_constructie">
<h6>indicatieOpenConstructie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#indicatieOpenConstructie</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatieOpenConstructie</td>
</tr>
<tr>
<th>Alias</th>
<td>indicatie open constructie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Indicatie dat het pand een open constructie heeft.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand_relatiesoort_bestaat_uit">
<h6>bestaatUit</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#bestaatUit</td>
</tr>
<tr>
<th>Naam</th>
<td>bestaatUit</td>
</tr>
<tr>
<th>Alias</th>
<td>bestaat uit</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object uit bestaat.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_panddeel">
<h4>Panddeel</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Panddeel</td>
</tr>
<tr>
<th>Naam</th>
<td>Panddeel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een Panddeel is een niet vrijstaand deel van (de constructie) van een Pand dat wordt onderscheiden omdat het op een ander moment onderdeel is geworden van dat Pand dan andere panddelen of omdat de aard van de bouwkundige constructie voldoet aan bepaalde criteria.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Een Panddeel kan intern (inpandig) of extern (aan de buitenzijde van een Pand) zijn.
Interne Panddelen zijn later aangebouwde delen (afwijkend bouwjaar) of fysiek onderscheidend.
Een Pand kent altijd een verplicht Panddeel type Basisconstructie (zie bij Pand).</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/panddeel">https://definities.geostandaarden.nl/ibro/id/begrip/panddeel</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie van gebouwinstallatie zoals deze is opgenomen in de basisregistratie grootschalige topografie, plus delen van panden die apart worden afgebakend omdat ze een later bouwjaar hebben. </td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_panddeel_attribuutsoort_oorspronkelijk_bouwjaar">oorspronkelijkBouwjaar</a>
</td>
<td>
Aanduiding van het jaar waarin een constructie oorspronkelijk als bouwkundig gereed is of zal worden opgeleverd.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Year</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_panddeel_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
Object waar dit object onderdeel van uit maakt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand">Pand</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_panddeel_attribuutsoort_oorspronkelijk_bouwjaar">
<h6>oorspronkelijkBouwjaar</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#oorspronkelijkBouwjaar</td>
</tr>
<tr>
<th>Naam</th>
<td>oorspronkelijkBouwjaar</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Aanduiding van het jaar waarin een constructie oorspronkelijk als bouwkundig gereed is of zal worden opgeleverd.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_panddeel_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is onderdeel van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object onderdeel van uit maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_bouwlaag">
<h4>Bouwlaag</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bouwlaag</td>
</tr>
<tr>
<th>Naam</th>
<td>Bouwlaag</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Verzameling van ruimten die zijn gelegen op hetzelfde niveau binnen een gebouw</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op de definitie van het begrip Bouwlaag (IfcBuildingStorey) uit de concepten rondom Bouwwerkinformatiemodellen (BIM)</td>
</tr>
<tr>
<th>Toelichting</th>
<td>In een later stadium zullen registratieregels worden opgesteld waarin een nadere invulling wordt gegeven aan de interpretatie die aan bouwlaag moet worden gegeven.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/bouwlaag">https://definities.geostandaarden.nl/ibro/id/begrip/bouwlaag</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier ten opzichte van de bestaande basisregistraties een nieuw objecttype.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_gebouw">Gebouw (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_bouwlaag_attribuutsoort_bouwlaagnummer">bouwlaagnummer</a>
</td>
<td>
Niveau waarop een bouwlaag zich bevindt</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Integer</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_bouwlaag_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand">Pand</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_bouwlaag_attribuutsoort_bouwlaagnummer">
<h6>bouwlaagnummer</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#bouwlaagnummer</td>
</tr>
<tr>
<th>Naam</th>
<td>bouwlaagnummer</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Niveau waarop een bouwlaag zich bevindt</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Voor de nummering van de bouwlaag geldt:

* Tweede kelder laag = bouwlaagnummer -2
* Kelder = bouwlaagnummer -1
* Begane grond = bouwlaagnummer 0
* Eerste verdieping = bouwlaagnummer 1
* Tweede verdieping = bouwlaagnummer 2</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_bouwlaag_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_functiezone">
<h4>Functiezone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Functiezone</td>
</tr>
<tr>
<th>Naam</th>
<td>Functiezone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>De grootst mogelijke clustering van (aaneengesloten) ruimten met dezelfde functie en op dezelfde bouwlaag, die volledig binnen de afbakening van een Pand (inclusief Panddelen) ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Een Functiezone kan inpandig zijn of gebouwgebonden buitenruimte zijn.
Elke Functiezone wordt geclassificeerd op basis van de hoofdfuncties Verblijven, Verkeer, Opslag of Technisch. De
hoofdfunctie Verblijven wordt nader onderverdeeld in subfuncties conform de gebruiksfuncties uit het Besluit
Bouwwerken Leefomgeving (Bbl). Het betreft hier de vergunde functie.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/functiezone">https://definities.geostandaarden.nl/ibro/id/begrip/functiezone</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Dit betreft deels een nieuw begrip, samen met Panddeel en Gebruikszone is dit een vervanging van het begrip EMSO-Gebouwzone als gevolg van een striktere scheiding fysiek - functie - gebruik.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_functiezone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_functiezone_attribuutsoort_bruto_vloeroppervlakte">brutoVloeroppervlakte</a>
</td>
<td>
BrutoVloeroppervlakte als bedoeld in NEN 2580.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Integer</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_functiezone_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_bouwlaag">Bouwlaag</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_functiezone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_functiezone_attribuutsoort_bruto_vloeroppervlakte">
<h6>brutoVloeroppervlakte</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#brutoVloeroppervlakte</td>
</tr>
<tr>
<th>Naam</th>
<td>brutoVloeroppervlakte</td>
</tr>
<tr>
<th>Alias</th>
<td>bruto vloeroppervlakte (BVO)</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>BrutoVloeroppervlakte als bedoeld in NEN 2580.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Besluit Bouwwerken Leefomgeving</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_functiezone_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone">
<h4>Gebruikzone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Gebruikzone</td>
</tr>
<tr>
<th>Naam</th>
<td>Gebruikzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een Gebruikzone is het samenstel van de grootst mogelijke clustering van (aaneengesloten) ruimten op dezelfde bouwlaag binnen een Pand (inclusief Panddelen), waarvoor geldt dat deze deel uit maakt van een zelfstandige eenheid van gebruik.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>

</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/gebruikzone">https://definities.geostandaarden.nl/ibro/id/begrip/gebruikzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_MultiSurface"> GM_MultiSurface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone_attribuutsoort_gebruiksoppervlakte">gebruiksoppervlakte</a>
</td>
<td>
Gebruiksoppervlakte als bedoeld in NEN 2580.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Integer</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_bouwlaag">Bouwlaag</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone_attribuutsoort_gebruiksoppervlakte">
<h6>gebruiksoppervlakte</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#gebruiksoppervlakte</td>
</tr>
<tr>
<th>Naam</th>
<td>gebruiksoppervlakte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebruiksoppervlakte als bedoeld in NEN 2580.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Besluit Bouwwerken Leefomgeving</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_toegangspunt">
<h4>Toegangspunt</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Toegangspunt</td>
</tr>
<tr>
<th>Naam</th>
<td>Toegangspunt</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een voorziening die vanaf de openbare weg, een erf of een gedeelde verkeersruimte toegang geeft tot een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/toegangspunt">https://definities.geostandaarden.nl/ibro/id/begrip/toegangspunt</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_toegangspunt_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Point"> GM_Point</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_toegangspunt_attribuutsoort_toegangssoort">toegangssoort</a>
</td>
<td>
Plaats waarvan een toegangsdeur toegang geeft.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_enumeratie_toegangssoort">Toegangssoort</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_toegangspunt_attribuutsoort_gebruiksaard">gebruiksaard</a>
</td>
<td>
Aard van gebruik van een toegangsdeur.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_enumeratie_gebruiksaard_toegangpunt">GebruiksaardToegangpunt</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_toegangspunt_relatiesoort_hoort_bij">hoortBij</a>
</td>
<td>
Object waar dit object bijhoort.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_keuze_relatiedoel__pand_of_verblijfsobject">PandOfVerblijfsobject</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_toegangspunt_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_toegangspunt_attribuutsoort_toegangssoort">
<h6>toegangssoort</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#toegangssoort</td>
</tr>
<tr>
<th>Naam</th>
<td>toegangssoort</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Plaats waarvan een toegangsdeur toegang geeft.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_toegangspunt_attribuutsoort_gebruiksaard">
<h6>gebruiksaard</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#gebruiksaard</td>
</tr>
<tr>
<th>Naam</th>
<td>gebruiksaard</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Aard van gebruik van een toegangsdeur.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_toegangspunt_relatiesoort_hoort_bij">
<h6>hoortBij</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#hoortBij</td>
</tr>
<tr>
<th>Naam</th>
<td>hoortBij</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object bijhoort.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_verblijfsobject">
<h4>Verblijfsobject</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verblijfsobject</td>
</tr>
<tr>
<th>Naam</th>
<td>Verblijfsobject</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een clustering van gebruikzones die samen een zelfstandige gebruikseenheid vormen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/verblijfsobject">https://definities.geostandaarden.nl/ibro/id/begrip/verblijfsobject</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_adresseerbaar_object">AdresseerbaarObject</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_verblijfsobject_attribuutsoort_gebruiksoppervlakte">gebruiksoppervlakte</a>
</td>
<td>
Gebruiksoppervlakte van een verblijfsobject.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Integer</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_verblijfsobject_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Object"> GM_Object</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_verblijfsobject_relatiesoort_omvat">omvat</a>
</td>
<td>
Object dat wordt omvat door dit object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
<td>
1..*</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_verblijfsobject_relatiesoort_overlapt_met">overlaptMet</a>
</td>
<td>
Object dat dit object overlapt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_functiezone">Functiezone</a>
</td>
<td>
1..*</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_verblijfsobject_attribuutsoort_gebruiksoppervlakte">
<h6>gebruiksoppervlakte</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#gebruiksoppervlakte</td>
</tr>
<tr>
<th>Naam</th>
<td>gebruiksoppervlakte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebruiksoppervlakte van een verblijfsobject.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit is de optelsom van de gebruiksoppervlakte van de door dit verblijfsobject geclusterde gebruikzones.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_verblijfsobject_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_verblijfsobject_relatiesoort_omvat">
<h6>omvat</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#omvat</td>
</tr>
<tr>
<th>Naam</th>
<td>omvat</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object dat wordt omvat door dit object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..1</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_verblijfsobject_relatiesoort_overlapt_met">
<h6>overlaptMet</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#overlaptMet</td>
</tr>
<tr>
<th>Naam</th>
<td>overlaptMet</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object dat dit object overlapt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>






### Enumeraties

#### AardPand {#informatiemodel_imibro_conceptueel_domein_gebouwen_enumeratie_aard_pand}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#AardPand</td>
</tr>
<tr>
<th>Naam</th>
<td>AardPand</td>
</tr>
<tr>
<th>Alias</th>
<td>Aard pand</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>De aard van een pand.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/aard_pand">https://definities.geostandaarden.nl/ibro/id/begrip/aard_pand</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht waarden</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 75%"></colgroup>
<tbody>
<tr>
  <th>Waarde</th>
  <th>Definitie</th>
</tr>
<tr>
<td>
Heterogeen</td>
<td>
Pand dat onderdeel uitmaakt van een reeks aan elkaar verbonden panden die onafhankelijk van elkaar zijn gerealiseerd.</td>
<tr>
<td>
Repeterend</td>
<td>
Pand dat onderdeel uitmaakt van een reeks aan elkaar verbonden panden die als zodanig in één project zijn gerealiseerd.</td>
<tr>
<td>
Vrijstaand</td>
<td>
Pand dat niet is verbonden met een ander pand.</td>
</tbody>
</table>


</section>

#### Toegangssoort {#informatiemodel_imibro_conceptueel_domein_gebouwen_enumeratie_toegangssoort}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Toegangssoort</td>
</tr>
<tr>
<th>Naam</th>
<td>Toegangssoort</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Plaats waarvan een toegangspunt toegang geeft.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht waarden</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 75%"></colgroup>
<tbody>
<tr>
  <th>Waarde</th>
  <th>Definitie</th>
</tr>
<tr>
<td>
Directe toegang vanaf eigen terrein</td>
<td>
Toegangspunt bevindt zich op een erf, in een tuin of een andere specifiek terrein dat behoort bij het gebouw.</td>
<tr>
<td>
Directe toegang vanaf openbare weg</td>
<td>
Toegangspunt bevindt zich direct aan een voor iedereen toegankelijke weg.</td>
<tr>
<td>
Toegang vanaf gemeenschappelijke verkeersruimte</td>
<td>
Toegangspunt bevindt zich aan een inpandige ruimte die bedoeld is voor verplaatsingen door een gebouw door de verschillende gebruikers van dit gebouw.</td>
</tbody>
</table>


</section>

#### GebruiksaardToegangpunt {#informatiemodel_imibro_conceptueel_domein_gebouwen_enumeratie_gebruiksaard_toegangpunt}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#GebruiksaardToegangpunt</td>
</tr>
<tr>
<th>Naam</th>
<td>GebruiksaardToegangpunt</td>
</tr>
<tr>
<th>Alias</th>
<td>Gebruiksaard toegangspunt</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Aard van gebruik van een toegangspunt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht waarden</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 75%"></colgroup>
<tbody>
<tr>
  <th>Waarde</th>
  <th>Definitie</th>
</tr>
<tr>
<td>
Auto</td>
<td>
Toegangspunt is primair bedoeld voor toegang tot een object door voertuigen.</td>
<tr>
<td>
Personen</td>
<td>
Toegangspunt is primair bedoeld voor toegang tot een object door personen.</td>
<tr>
<td>
Vracht</td>
<td>
Toegangspunt is primair bedoeld voor toegang tot een object door vracht zonder gebruik van een voertuig.</td>
</tbody>
</table>


</section>



## Domein Pandtypen
![Pandtypen](data/media/pandtypen.png "Domein Pandtypen")

### Objecttypen


<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_bijgebouw">
<h4>Bijgebouw</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bijgebouw</td>
</tr>
<tr>
<th>Naam</th>
<td>Bijgebouw</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Pand dat constructief is opgezet om aan een woongebouw ondersteunende opslagfaciliteiten te bieden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/bijgebouw">https://definities.geostandaarden.nl/ibro/id/begrip/bijgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand">Pand</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_schuur">
<h5>Schuur</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Schuur</td>
</tr>
<tr>
<th>Naam</th>
<td>Schuur</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Bijgebouw met een constructie gericht op het kunnen opslaan van goederen ter ondersteuning van een woonfunctie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/schuur">https://definities.geostandaarden.nl/ibro/id/begrip/schuur</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_bijgebouw">Bijgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_garage">
<h5>Garage</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Garage</td>
</tr>
<tr>
<th>Naam</th>
<td>Garage</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Bijgebouw met een constructie gericht op het kunnen stallen van motorvoertuigen op meer dan twee wielen ter ondersteuning van een woonfunctie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/garage">https://definities.geostandaarden.nl/ibro/id/begrip/garage</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_bijgebouw">Bijgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_bedrijfsgebouw">
<h4>Bedrijfsgebouw</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bedrijfsgebouw</td>
</tr>
<tr>
<th>Naam</th>
<td>Bedrijfsgebouw</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Pand waarvan de constructie zodanig is vormgegeven dat het geschikt is voor het daarbinnen uitoefenen van specifieke bedrijfsmatige activiteiten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/bedrijfsgebouw">https://definities.geostandaarden.nl/ibro/id/begrip/bedrijfsgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand">Pand</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_parkeergarage">
<h5>Parkeergarage</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Parkeergarage</td>
</tr>
<tr>
<th>Naam</th>
<td>Parkeergarage</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Open constructie die geheel of gedeeltelijk in gebruik is als voorziening voor het parkeren van voertuigen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/parkeergarage">https://definities.geostandaarden.nl/ibro/id/begrip/parkeergarage</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_bedrijfsgebouw">Bedrijfsgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_loods">
<h5>Loods</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Loods</td>
</tr>
<tr>
<th>Naam</th>
<td>Loods</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Groot en hoog gebouw met veelal grote inrijdeuren bedoeld voor het opslaan van handels- of industriële goederen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/loods">https://definities.geostandaarden.nl/ibro/id/begrip/loods</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_bedrijfsgebouw">Bedrijfsgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_boerderij">
<h5>Boerderij</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Boerderij</td>
</tr>
<tr>
<th>Naam</th>
<td>Boerderij</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Pand dat zodanig constructief is vormgegeven dat daarbinnen een combinatie van agrarische bedrijfsvoering en bewoning door de bedrijfsvoerder kan plaatsvinden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/boerderij">https://definities.geostandaarden.nl/ibro/id/begrip/boerderij</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_bedrijfsgebouw">Bedrijfsgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_molen">
<h5>Molen</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Molen</td>
</tr>
<tr>
<th>Naam</th>
<td>Molen</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Bedrijfsgebouw dat gekenmerkt wordt door het in een aan het gebouw aanwezig zijn van een draaiend mechaniek waarbij wind wordt omgezet in rotatie-energie van de op het gebouw aanwezige wieken.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/molen">https://definities.geostandaarden.nl/ibro/id/begrip/molen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_bedrijfsgebouw">Bedrijfsgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_fabriek">
<h5>Fabriek</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Fabriek</td>
</tr>
<tr>
<th>Naam</th>
<td>Fabriek</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Bedrijfsgebouw dat constructief is vormgegeven zodat daarbinnen op grote schaal stoffen of goederen geproduceerd kunnen worden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/fabriek">https://definities.geostandaarden.nl/ibro/id/begrip/fabriek</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_bedrijfsgebouw">Bedrijfsgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_stal">
<h5>Stal</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Stal</td>
</tr>
<tr>
<th>Naam</th>
<td>Stal</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Bedrijfsgebouw met een constructie gericht op het daarbinnen onderbrengen van vee.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/stal">https://definities.geostandaarden.nl/ibro/id/begrip/stal</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_bedrijfsgebouw">Bedrijfsgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_hangar">
<h5>Hangar</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Hangar</td>
</tr>
<tr>
<th>Naam</th>
<td>Hangar</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Bedrijfsgebouw met een omvang en constructie gericht op het produceren, onderhouden of stallen van vliegtuigen en/of helikopters.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/hangar">https://definities.geostandaarden.nl/ibro/id/begrip/hangar</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_bedrijfsgebouw">Bedrijfsgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_voertuigenstalling">
<h5>Voertuigenstalling</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Voertuigenstalling</td>
</tr>
<tr>
<th>Naam</th>
<td>Voertuigenstalling</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Pand met een constructie gericht op het bedrijfsmatig kunnen stallen van voertuigen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/voertuigenstalling">https://definities.geostandaarden.nl/ibro/id/begrip/voertuigenstalling</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_bedrijfsgebouw">Bedrijfsgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_kas">
<h5>Kas</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kas</td>
</tr>
<tr>
<th>Naam</th>
<td>Kas</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebouw bestaande uit een structuur van meestal glas en metaal die gebruikt wordt voor het commercieel kweken van planten in een beschermde omgeving op een natuurlijke of kunstmatige ondergrond.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/kas">https://definities.geostandaarden.nl/ibro/id/begrip/kas</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_bedrijfsgebouw">Bedrijfsgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_doelgroepengebouw">
<h4>Doelgroepengebouw</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Doelgroepengebouw</td>
</tr>
<tr>
<th>Naam</th>
<td>Doelgroepengebouw</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Pand met een constructieve opzet gericht op het tijdelijk of permanent onderbrengen van grotere groepen personen voor zorg, onderwijs, detentie of militaire doeleinden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/doelgroepengebouw">https://definities.geostandaarden.nl/ibro/id/begrip/doelgroepengebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand">Pand</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_kazerne">
<h5>Kazerne</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kazerne</td>
</tr>
<tr>
<th>Naam</th>
<td>Kazerne</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Pand met een constructie gericht op het kunnen huisvesten van militairen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/kazerne">https://definities.geostandaarden.nl/ibro/id/begrip/kazerne</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_doelgroepengebouw">Doelgroepengebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_gevangenis">
<h5>Gevangenis</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Gevangenis</td>
</tr>
<tr>
<th>Naam</th>
<td>Gevangenis</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Pand dat zodanig constructief is vormgegeven dat daarbinnen personen in verzekerde bewaring kunnen worden gesteld om een gevangenisstraf uit te zitten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/gevangenis">https://definities.geostandaarden.nl/ibro/id/begrip/gevangenis</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_doelgroepengebouw">Doelgroepengebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_gebedsgebouw">
<h4>Gebedsgebouw</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Gebedsgebouw</td>
</tr>
<tr>
<th>Naam</th>
<td>Gebedsgebouw</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Pand dat zodanig is ontworpen dat het primair geschikt is voor het houden van religieuze bijeenkomsten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/gebedsgebouw">https://definities.geostandaarden.nl/ibro/id/begrip/gebedsgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand">Pand</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_kerkgebouw">
<h5>Kerkgebouw</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kerkgebouw</td>
</tr>
<tr>
<th>Naam</th>
<td>Kerkgebouw</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebedsgebouw met een constructie gericht op het houden van christelijke erediensten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href=" https://definities.geostandaarden.nl/ibro/id/begrip/kerkgebouw"> https://definities.geostandaarden.nl/ibro/id/begrip/kerkgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_gebedsgebouw">Gebedsgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_synagoge">
<h5>Synagoge</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Synagoge</td>
</tr>
<tr>
<th>Naam</th>
<td>Synagoge</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebedsgebouw met een constructie gericht op joodse geloofsuitoefening.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href=" https://definities.geostandaarden.nl/ibro/id/begrip/synagoge"> https://definities.geostandaarden.nl/ibro/id/begrip/synagoge</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_gebedsgebouw">Gebedsgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_tempel">
<h5>Tempel</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Tempel</td>
</tr>
<tr>
<th>Naam</th>
<td>Tempel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebedsgebouw met een constructie gericht op niet-abrahamitische geloofsuitoefening.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href=" https://definities.geostandaarden.nl/ibro/id/begrip/tempel"> https://definities.geostandaarden.nl/ibro/id/begrip/tempel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_gebedsgebouw">Gebedsgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_moskee">
<h5>Moskee</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Moskee</td>
</tr>
<tr>
<th>Naam</th>
<td>Moskee</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebedsgebouw met een constructie gericht op islamitische geloofsuitoefening.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href=" https://definities.geostandaarden.nl/ibro/id/begrip/moskee"> https://definities.geostandaarden.nl/ibro/id/begrip/moskee</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_gebedsgebouw">Gebedsgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_kapel">
<h5>Kapel</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kapel</td>
</tr>
<tr>
<th>Naam</th>
<td>Kapel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Klein gebedsgebouw dat is vormgegeven om te kunnen fungeren voor individuele bezinning.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href=" https://definities.geostandaarden.nl/ibro/id/begrip/kapel"> https://definities.geostandaarden.nl/ibro/id/begrip/kapel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_gebedsgebouw">Gebedsgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_klooster">
<h5>Klooster</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Klooster</td>
</tr>
<tr>
<th>Naam</th>
<td>Klooster</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebedsgebouw bedoeld voor huisvesting en eventueel het voorzien in levensonderhoud van een geloofsgemeenschap.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href=" https://definities.geostandaarden.nl/ibro/id/begrip/klooster"> https://definities.geostandaarden.nl/ibro/id/begrip/klooster</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_gebedsgebouw">Gebedsgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_installatiegebouw">
<h4>Installatiegebouw</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Installatiegebouw</td>
</tr>
<tr>
<th>Naam</th>
<td>Installatiegebouw</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Pand met een constructieve opbouw gericht op het binnen het gebouw onderbrengen van specifieke technische installaties of voorzieningen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/installatiegebouw">https://definities.geostandaarden.nl/ibro/id/begrip/installatiegebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand">Pand</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_gemaalgebouw">
<h5>Gemaalgebouw</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Gemaalgebouw</td>
</tr>
<tr>
<th>Naam</th>
<td>Gemaalgebouw</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Pand dat is ingericht om de installaties te herbergen die nodig zijn voor het van een lager naar een hoger niveau brengen van water.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/gemaalgebouw">https://definities.geostandaarden.nl/ibro/id/begrip/gemaalgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_installatiegebouw">Installatiegebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_energiecentrale">
<h5>Energiecentrale</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Energiecentrale</td>
</tr>
<tr>
<th>Naam</th>
<td>Energiecentrale</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Pand met een constructie die het mogelijk maakt om daarbinnen centraal energie op te wekken.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/energiecentrale">https://definities.geostandaarden.nl/ibro/id/begrip/energiecentrale</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_installatiegebouw">Installatiegebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_kantoorgebouw">
<h4>Kantoorgebouw</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kantoorgebouw</td>
</tr>
<tr>
<th>Naam</th>
<td>Kantoorgebouw</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Pand met een constructieve opzet gericht op het daarbinnen kunnen uitoefenen van administratieve werkzaamheden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/kantoorgebouw">https://definities.geostandaarden.nl/ibro/id/begrip/kantoorgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand">Pand</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_multigebouw">
<h4>Multigebouw</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Multigebouw</td>
</tr>
<tr>
<th>Naam</th>
<td>Multigebouw</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Pand met een constructie gericht op het daarbinnen kunnen vormen van meerdere op wonen en/of bedrijfsmatige activiteiten gerichte gebruikseenheden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/multigebouw">https://definities.geostandaarden.nl/ibro/id/begrip/multigebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand">Pand</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_overkapping">
<h4>Overkapping</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Overkapping</td>
</tr>
<tr>
<th>Naam</th>
<td>Overkapping</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Afzonderlijk staande overdekking rustend op kolommen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/overkapping">https://definities.geostandaarden.nl/ibro/id/begrip/overkapping</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand">Pand</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_recreatiegebouw">
<h4>Recreatiegebouw</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Recreatiegebouw</td>
</tr>
<tr>
<th>Naam</th>
<td>Recreatiegebouw</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Pand met een constructie die het mogelijk maakt dat daarbinnen activiteiten kunnen plaatsvinden gericht op of ondersteunend aan sport, cultuur of ontspanning.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/recreatiegebouw">https://definities.geostandaarden.nl/ibro/id/begrip/recreatiegebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand">Pand</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_sportgebouw">
<h5>Sportgebouw</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Sportgebouw</td>
</tr>
<tr>
<th>Naam</th>
<td>Sportgebouw</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Pand met een specifieke constructie die is bedoeld om het mogelijk te maken om binnensporten te kunnen beoefenen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/sportgebouw">https://definities.geostandaarden.nl/ibro/id/begrip/sportgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_recreatiegebouw">Recreatiegebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_toren">
<h4>Toren</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Toren</td>
</tr>
<tr>
<th>Naam</th>
<td>Toren</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Pand met een constructie waarbij de verhouding van de hoogte ten opzichte van lengte en breedte karakteristiek is voor de verschijningsvorm.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/toren">https://definities.geostandaarden.nl/ibro/id/begrip/toren</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand">Pand</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_vuurtoren">
<h5>Vuurtoren</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Vuurtoren</td>
</tr>
<tr>
<th>Naam</th>
<td>Vuurtoren</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Toren bedoeld als drager van een ter oriëntatie van schepen dienend licht.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/vuurtoren">https://definities.geostandaarden.nl/ibro/id/begrip/vuurtoren</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_toren">Toren</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_fabrieksschoorsteen">
<h5>Fabrieksschoorsteen</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Fabrieksschoorsteen</td>
</tr>
<tr>
<th>Naam</th>
<td>Fabrieksschoorsteen</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Losstaand hoog stenen kanaal bedoeld voor het afvoeren van verbrandingsgassen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/fabrieksschoorsteen">https://definities.geostandaarden.nl/ibro/id/begrip/fabrieksschoorsteen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_toren">Toren</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_watertoren">
<h5>Watertoren</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Watertoren</td>
</tr>
<tr>
<th>Naam</th>
<td>Watertoren</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Toren die oorspronkelijk is bedoeld voor de opslag van drinkwater in een bovenin het gebouw gelegen waterreservoir.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/watertoren">https://definities.geostandaarden.nl/ibro/id/begrip/watertoren</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_toren">Toren</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_klokkentoren">
<h5>Klokkentoren</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Klokkentoren</td>
</tr>
<tr>
<th>Naam</th>
<td>Klokkentoren</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Toren bedoeld voor de ophanging van een uurwerk en/of klokkenspel.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/klokkentoren">https://definities.geostandaarden.nl/ibro/id/begrip/klokkentoren</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_toren">Toren</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_uitkijktoren">
<h5>Uitkijktoren</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Uitkijktoren</td>
</tr>
<tr>
<th>Naam</th>
<td>Uitkijktoren</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Hoge open constructie die ontworpen is om vanuit een hoog punt de wijde omgeving te kunnen bekijken en/of bewaken.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/uitkijktoren">https://definities.geostandaarden.nl/ibro/id/begrip/uitkijktoren</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_toren">Toren</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_vestingsgebouw">
<h4>Vestingsgebouw</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Vestingsgebouw</td>
</tr>
<tr>
<th>Naam</th>
<td>Vestingsgebouw</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Pand met een constructie die het mogelijk maakt om aanvallen van buiten het gebouw te kunnen weerstaan.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/vestingsgebouw">https://definities.geostandaarden.nl/ibro/id/begrip/vestingsgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand">Pand</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_kasteel">
<h5>Kasteel</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kasteel</td>
</tr>
<tr>
<th>Naam</th>
<td>Kasteel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Versterkt en te verdedigen gebouw dat van oorsprong is bedoeld voor bewoning.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/kasteel">https://definities.geostandaarden.nl/ibro/id/begrip/kasteel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_vestingsgebouw">Vestingsgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_fort">
<h5>Fort</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Fort</td>
</tr>
<tr>
<th>Naam</th>
<td>Fort</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naar alle zijden tegen vijandelijke aanvallen verdedigbaar militair gebouw dat van oorsprong is ingericht om een eenheid militairen te herbergen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/fort">https://definities.geostandaarden.nl/ibro/id/begrip/fort</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_vestingsgebouw">Vestingsgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_bunker">
<h5>Bunker</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bunker</td>
</tr>
<tr>
<th>Naam</th>
<td>Bunker</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Van oorsprong versterkt militair gebouw gericht op het schuilen tegen beschietingen en bombardementen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/bunker">https://definities.geostandaarden.nl/ibro/id/begrip/bunker</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_vestingsgebouw">Vestingsgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_pandtypen_objecttype_woongebouw">
<h4>Woongebouw</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Woongebouw</td>
</tr>
<tr>
<th>Naam</th>
<td>Woongebouw</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Pand met een constructie die primair geschikt voor bewoning.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/woongebouw">https://definities.geostandaarden.nl/ibro/id/begrip/woongebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_pand">Pand</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>








## Domein Panddeeltypen
![Panddeeltypen](data/media/panddeeltypen.png "Domein Panddeeltypen")

### Objecttypen


<section id="informatiemodel_imibro_conceptueel_domein_panddeeltypen_objecttype_basisconstructie">
<h4>Basisconstructie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Basisconstructie</td>
</tr>
<tr>
<th>Naam</th>
<td>Basisconstructie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Panddeel wat de oorspronkelijke constructie betreft van het pand waarin het panddeel is gelegen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/basisconstructie">https://definities.geostandaarden.nl/ibro/id/begrip/basisconstructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_panddeel">Panddeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_panddeeltypen_objecttype_latere_aanbouw">
<h4>LatereAanbouw</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#LatereAanbouw</td>
</tr>
<tr>
<th>Naam</th>
<td>LatereAanbouw</td>
</tr>
<tr>
<th>Alias</th>
<td>Latere aanbouw</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Panddeel wat een latere aanbouw (niet zijnde een serre) of opbouw ten opzichte van de oorspronkelijke constructie van het gebouw betreft waarin het panddeel is gelegen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/latere_aanbouw">https://definities.geostandaarden.nl/ibro/id/begrip/latere_aanbouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_panddeel">Panddeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_panddeeltypen_objecttype_serre">
<h4>Serre</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Serre</td>
</tr>
<tr>
<th>Naam</th>
<td>Serre</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Panddeel wat een serre betreft die al dan geen onderdeel uitmaakt van de oorspronkelijke constructie van het pand waarin het panddeel is gelegen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/serre">https://definities.geostandaarden.nl/ibro/id/begrip/serre</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_panddeel">Panddeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_panddeeltypen_objecttype_afdak">
<h4>Afdak</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Afdak</td>
</tr>
<tr>
<th>Naam</th>
<td>Afdak</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Constructie aangebracht en vast verbonden aan de gevel van een pand, gericht op beschutting tegen weersinvloeden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Een aan het pand bevestigde carport valt hier ook onder.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/afdak">https://definities.geostandaarden.nl/ibro/id/begrip/afdak</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_panddeel">Panddeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_panddeeltypen_objecttype_balkon">
<h4>Balkon</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Balkon</td>
</tr>
<tr>
<th>Naam</th>
<td>Balkon</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Open uitbouw die niet gelijkvloers aan de gevel is aangebracht en waarvan het bovenvlak vanuit het gebouw toegankelijk is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/balkon">https://definities.geostandaarden.nl/ibro/id/begrip/balkon</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_panddeel">Panddeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_panddeeltypen_objecttype_bordes">
<h4>Bordes</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bordes</td>
</tr>
<tr>
<th>Naam</th>
<td>Bordes</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Verhard oppervlak, eventueel verhoogd en/of uitgevoerd met treden, grenzen aan een pand en primair bedoeld voor gebruik door voetgangers</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/bordes">https://definities.geostandaarden.nl/ibro/id/begrip/bordes</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_panddeel">Panddeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_panddeeltypen_objecttype_dakkapel">
<h4>Dakkapel</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Dakkapel</td>
</tr>
<tr>
<th>Naam</th>
<td>Dakkapel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Uitbouw van het schuine dakvlak.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/dakkapel">https://definities.geostandaarden.nl/ibro/id/begrip/dakkapel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_panddeel">Panddeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_panddeeltypen_objecttype_kolom">
<h4>Kolom</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kolom</td>
</tr>
<tr>
<th>Naam</th>
<td>Kolom</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een verticaal, of bijna verticaal, constructiedeel dat door compressie het gewicht van de constructie erboven overdraagt op andere constructie-elementen eronder.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/kolom">https://definities.geostandaarden.nl/ibro/id/begrip/kolom</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_panddeel">Panddeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_panddeeltypen_objecttype_laadperron">
<h4>Laadperron</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Laadperron</td>
</tr>
<tr>
<th>Naam</th>
<td>Laadperron</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Tegen het gebouw aangebrachte constructie die is bedoeld voor het kunnen laden en lossen van voertuigen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/laadperron">https://definities.geostandaarden.nl/ibro/id/begrip/laadperron</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_panddeel">Panddeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_panddeeltypen_objecttype_loopbrug">
<h4>Loopbrug</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Loopbrug</td>
</tr>
<tr>
<th>Naam</th>
<td>Loopbrug</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Constructie bedoeld voor het op hoogte verbinden van twee bij elkaar liggende gebouwen zodat een oversteek van het ene naar het andere gebouw kan plaatsvinden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/loopbrug">https://definities.geostandaarden.nl/ibro/id/begrip/loopbrug</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_panddeel">Panddeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_panddeeltypen_objecttype_toegangstrap">
<h4>Toegangstrap</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Toegangstrap</td>
</tr>
<tr>
<th>Naam</th>
<td>Toegangstrap</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Buiten de gevel geplaatste trapconstructie die toegang biedt tot een gebouw en vast verbonden is met dat gebouw.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/toegangstrap">https://definities.geostandaarden.nl/ibro/id/begrip/toegangstrap</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_panddeel">Panddeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>








## Domein Functiezonetypen
![Functiezonetypen](data/media/functiezonetypen.png "Domein Functiezonetypen")

### Objecttypen


<section id="informatiemodel_imibro_conceptueel_domein_functiezonetypen_objecttype_bijeenkomstfunctie">
<h4>Bijeenkomstfunctie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bijeenkomstfunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>Bijeenkomstfunctie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebruiksfunctie voor het samenkomen van personen voor kunst, cultuur, godsdienst, communicatie, kinderopvang, het verstrekken van consumpties voor het gebruik ter plaatse, ontspanning of het aanschouwen van sport.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Besluit bouwwerken leefomgeving</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/bijeenkomstfunctie">https://definities.geostandaarden.nl/ibro/id/begrip/bijeenkomstfunctie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_functiezone">Functiezone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functiezonetypen_objecttype_celfunctie">
<h4>Celfunctie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Celfunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>Celfunctie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebruiksfunctie voor dwangverblijf van personen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Besluit bouwwerken leefomgeving</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/celfunctie">https://definities.geostandaarden.nl/ibro/id/begrip/celfunctie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_functiezone">Functiezone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functiezonetypen_objecttype_gezondheidszorgfunctie">
<h4>Gezondheidszorgfunctie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Gezondheidszorgfunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>Gezondheidszorgfunctie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebruiksfunctie voor medisch onderzoek, verpleging, verzorging of behandeling.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Besluit bouwwerken leefomgeving</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/gezondheidszorgfunctie">https://definities.geostandaarden.nl/ibro/id/begrip/gezondheidszorgfunctie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_functiezone">Functiezone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functiezonetypen_objecttype_industriefunctie">
<h4>Industriefunctie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Industriefunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>Industriefunctie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebruiksfunctie voor het bedrijfsmatig bewerken of opslaan van materialen en goederen, of voor bedrijfsmatige agrarische doeleinden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Besluit bouwwerken leefomgeving</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/industriefunctie">https://definities.geostandaarden.nl/ibro/id/begrip/industriefunctie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_functiezone">Functiezone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functiezonetypen_objecttype_kantoorfunctie">
<h4>Kantoorfunctie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kantoorfunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>Kantoorfunctie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebruiksfunctie voor administratie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Besluit bouwwerken leefomgeving</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/kantoorfunctie">https://definities.geostandaarden.nl/ibro/id/begrip/kantoorfunctie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_functiezone">Functiezone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functiezonetypen_objecttype_logiesfunctie">
<h4>Logiesfunctie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Logiesfunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>Logiesfunctie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebruiksfunctie voor het bieden van recreatief verblijf of tijdelijk onderdak aan personen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Besluit bouwwerken leefomgeving</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/logiesfunctie">https://definities.geostandaarden.nl/ibro/id/begrip/logiesfunctie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_functiezone">Functiezone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functiezonetypen_objecttype_onderwijsfunctie">
<h4>Onderwijsfunctie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Onderwijsfunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>Onderwijsfunctie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebruiksfunctie voor het geven van onderwijs.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Besluit bouwwerken leefomgeving</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/onderwijsfunctie">https://definities.geostandaarden.nl/ibro/id/begrip/onderwijsfunctie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_functiezone">Functiezone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functiezonetypen_objecttype_opslagfunctie">
<h4>Opslagfunctie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Opslagfunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>Opslagfunctie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Ruimte voor het stallen en opslaan.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/opslagfunctie">https://definities.geostandaarden.nl/ibro/id/begrip/opslagfunctie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_functiezone">Functiezone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functiezonetypen_objecttype_sportfunctie">
<h4>Sportfunctie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Sportfunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>Sportfunctie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebruiksfunctie voor het beoefenen van sport.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Besluit bouwwerken leefomgeving</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/sportfunctie">https://definities.geostandaarden.nl/ibro/id/begrip/sportfunctie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_functiezone">Functiezone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functiezonetypen_objecttype_technische_functie">
<h4>TechnischeFunctie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TechnischeFunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>TechnischeFunctie</td>
</tr>
<tr>
<th>Alias</th>
<td>Technische functie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Ruimte voor het plaatsen van technische voorzieningen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/technische_functie">https://definities.geostandaarden.nl/ibro/id/begrip/technische_functie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_functiezone">Functiezone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functiezonetypen_objecttype_verkeersfunctie">
<h4>Verkeersfunctie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verkeersfunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>Verkeersfunctie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Ruimte bestemd voor het bereiken van een andere ruimte.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Denk bijvoorbeeld aan een hal, gang, overloop, trappenhuis of galerij.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/verkeersfunctie">https://definities.geostandaarden.nl/ibro/id/begrip/verkeersfunctie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_functiezone">Functiezone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functiezonetypen_objecttype_winkelfunctie">
<h4>Winkelfunctie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Winkelfunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>Winkelfunctie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebruiksfunctie voor het verhandelen van materialen, goederen of diensten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Besluit bouwwerken leefomgeving</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/winkelfunctie">https://definities.geostandaarden.nl/ibro/id/begrip/winkelfunctie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_functiezone">Functiezone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functiezonetypen_objecttype_woonfunctie">
<h4>Woonfunctie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Woonfunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>Woonfunctie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebruiksfunctie voor het wonen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Besluit bouwwerken leefomgeving</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/woonfunctie">https://definities.geostandaarden.nl/ibro/id/begrip/woonfunctie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_functiezone">Functiezone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>








## Domein Gebruikzonetypen
![Gebruikzonetypen](data/media/gebruikzonetypen.png "Domein Gebruikzonetypen")

### Objecttypen


<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_agrarisch_bedrijf">
<h4>AgrarischBedrijf</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#AgrarischBedrijf</td>
</tr>
<tr>
<th>Naam</th>
<td>AgrarischBedrijf</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Bedrijfsmatige activiteiten gericht op het voortbrengen van producten door middel van het telen van gewassen of het houden van vee.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/agrarisch_bedrijf">https://definities.geostandaarden.nl/ibro/id/begrip/agrarisch_bedrijf</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_viskwekerij">
<h5>Viskwekerij</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Viskwekerij</td>
</tr>
<tr>
<th>Naam</th>
<td>Viskwekerij</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Vorm van aquacultuur, waarbij vissen op een commerciële manier worden gekweekt voor consumptie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/viskwekerij">https://definities.geostandaarden.nl/ibro/id/begrip/viskwekerij</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_agrarisch_bedrijf">AgrarischBedrijf</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_akkerbouw">
<h5>Akkerbouw</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Akkerbouw</td>
</tr>
<tr>
<th>Naam</th>
<td>Akkerbouw</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Economische activiteiten waarbij het natuurlijke milieu wordt aangepast ten behoeve van de productie van planten voor menselijk of dierlijk gebruik.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/akkerbouw">https://definities.geostandaarden.nl/ibro/id/begrip/akkerbouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_agrarisch_bedrijf">AgrarischBedrijf</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_tuinbouw">
<h5>Tuinbouw</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Tuinbouw</td>
</tr>
<tr>
<th>Naam</th>
<td>Tuinbouw</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Op commerciële basis op intensieve wijze telen van groenten, paddenstoelen, fruit, bloemen, planten, bomen, bollen of zaden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/tuinbouw">https://definities.geostandaarden.nl/ibro/id/begrip/tuinbouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_agrarisch_bedrijf">AgrarischBedrijf</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_veehouderij">
<h5>Veehouderij</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Veehouderij</td>
</tr>
<tr>
<th>Naam</th>
<td>Veehouderij</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Bedrijfsmatige activiteiten gericht op het houden van vee ten behoeve van het verkrijgen van melk, eieren of vlees.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/veehouderij">https://definities.geostandaarden.nl/ibro/id/begrip/veehouderij</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_agrarisch_bedrijf">AgrarischBedrijf</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_bijeenkomsten">
<h4>Bijeenkomsten</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bijeenkomsten</td>
</tr>
<tr>
<th>Naam</th>
<td>Bijeenkomsten</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Activiteiten waarin grotere groepen bijeen worden gebracht voor communicatieve doeleinden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href=" https://definities.geostandaarden.nl/ibro/id/begrip/bijeenkomst_feitelijk_gebruik"> https://definities.geostandaarden.nl/ibro/id/begrip/bijeenkomst_feitelijk_gebruik</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_cellen">
<h4>Cellen</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Cellen</td>
</tr>
<tr>
<th>Naam</th>
<td>Cellen</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Dwangverblijf van personen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href=" https://definities.geostandaarden.nl/ibro/id/begrip/cel_feitelijk_gebruik"> https://definities.geostandaarden.nl/ibro/id/begrip/cel_feitelijk_gebruik</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_detailhandel">
<h4>Detailhandel</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Detailhandel</td>
</tr>
<tr>
<th>Naam</th>
<td>Detailhandel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Bedrijfsmatige levering van fysieke goederen voor persoonlijk gebruik aan consumenten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/detailhandel">https://definities.geostandaarden.nl/ibro/id/begrip/detailhandel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_dienstverlening">
<h4>Dienstverlening</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Dienstverlening</td>
</tr>
<tr>
<th>Naam</th>
<td>Dienstverlening</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Levering van niet-fysieke goederen door een persoon, instantie of onderneming aan een andere partij.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/dienstverlening">https://definities.geostandaarden.nl/ibro/id/begrip/dienstverlening</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_wasstraat">
<h5>Wasstraat</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wasstraat</td>
</tr>
<tr>
<th>Naam</th>
<td>Wasstraat</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Dienstverlening in de vorm van mechanische reiniging van de buitenzijde van voertuigen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/wasstraat">https://definities.geostandaarden.nl/ibro/id/begrip/wasstraat</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_dienstverlening">Dienstverlening</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_crematorium">
<h5>Crematorium</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Crematorium</td>
</tr>
<tr>
<th>Naam</th>
<td>Crematorium</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Verbranding van lichamen van overledenen in een speciale oven.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/crematorium">https://definities.geostandaarden.nl/ibro/id/begrip/crematorium</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_dienstverlening">Dienstverlening</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_paleis">
<h5>Paleis</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Paleis</td>
</tr>
<tr>
<th>Naam</th>
<td>Paleis</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Ambtsverblijf dat een openbare of ceremoniële functie heeft.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/paleis">https://definities.geostandaarden.nl/ibro/id/begrip/paleis</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_dienstverlening">Dienstverlening</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_bibliotheek">
<h5>Bibliotheek</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bibliotheek</td>
</tr>
<tr>
<th>Naam</th>
<td>Bibliotheek</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Bewaarplaats voor boeken en andere media waarbij deze al dan niet aan het publiek worden uitgeleend of ter inzage aangeboden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/bibliotheek">https://definities.geostandaarden.nl/ibro/id/begrip/bibliotheek</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_dienstverlening">Dienstverlening</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_politiebureau">
<h5>Politiebureau</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Politiebureau</td>
</tr>
<tr>
<th>Naam</th>
<td>Politiebureau</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Dienstverlening door de politie aan de samenleving.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/politiebureau">https://definities.geostandaarden.nl/ibro/id/begrip/politiebureau</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_dienstverlening">Dienstverlening</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_laboratorium">
<h5>Laboratorium</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Laboratorium</td>
</tr>
<tr>
<th>Naam</th>
<td>Laboratorium</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Natuurwetenschappelijke werkplaats voor het maken of onderzoeken van stoffen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/laboratorium">https://definities.geostandaarden.nl/ibro/id/begrip/laboratorium</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_dienstverlening">Dienstverlening</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_rechtbank">
<h5>Rechtbank</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Rechtbank</td>
</tr>
<tr>
<th>Naam</th>
<td>Rechtbank</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Locatie van waaruit recht gesproken wordt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/rechtbank">https://definities.geostandaarden.nl/ibro/id/begrip/rechtbank</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_dienstverlening">Dienstverlening</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_gemeentekantoor">
<h5>Gemeentekantoor</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Gemeentekantoor</td>
</tr>
<tr>
<th>Naam</th>
<td>Gemeentekantoor</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Directe dienstverlening vanuit een gemeente aan inwoners en bedrijven.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/gemeentekantoor">https://definities.geostandaarden.nl/ibro/id/begrip/gemeentekantoor</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_dienstverlening">Dienstverlening</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_verkeerstoren">
<h5>Verkeerstoren</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verkeerstoren</td>
</tr>
<tr>
<th>Naam</th>
<td>Verkeerstoren</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Punt van waaruit verkeersregulatie te land, ter zee of in de lucht plaatsvindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/verkeerstoren">https://definities.geostandaarden.nl/ibro/id/begrip/verkeerstoren</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_dienstverlening">Dienstverlening</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_tol">
<h5>Tol</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Tol</td>
</tr>
<tr>
<th>Naam</th>
<td>Tol</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Tolheffing ten behoeve van het gebruik van verkeers- of waterwegen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/tol">https://definities.geostandaarden.nl/ibro/id/begrip/tol</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_dienstverlening">Dienstverlening</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_buurtgebouw">
<h5>Buurtgebouw</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Buurtgebouw</td>
</tr>
<tr>
<th>Naam</th>
<td>Buurtgebouw</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Activiteitencentrum in een wijk, buurt of dorp waar activiteiten plaatsvinden van en voor de bewoners hiervan.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/buurtgebouw">https://definities.geostandaarden.nl/ibro/id/begrip/buurtgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_dienstverlening">Dienstverlening</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_energievoorziening">
<h4>Energievoorziening</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Energievoorziening</td>
</tr>
<tr>
<th>Naam</th>
<td>Energievoorziening</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Levering van elektriciteit en warmte aan consumenten en bedrijven.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/energievoorziening">https://definities.geostandaarden.nl/ibro/id/begrip/energievoorziening</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_groothandel">
<h4>Groothandel</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Groothandel</td>
</tr>
<tr>
<th>Naam</th>
<td>Groothandel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Bedrijfsmatige levering van fysieke goederen aan bedrijfsmatige afnemers.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/groothandel">https://definities.geostandaarden.nl/ibro/id/begrip/groothandel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_veiling">
<h5>Veiling</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Veiling</td>
</tr>
<tr>
<th>Naam</th>
<td>Veiling</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Activiteiten gericht op het op grote schaal openbaar verkopen van goederen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/veiling">https://definities.geostandaarden.nl/ibro/id/begrip/veiling</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_groothandel">Groothandel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_grossier">
<h5>Grossier</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Grossier</td>
</tr>
<tr>
<th>Naam</th>
<td>Grossier</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Activiteiten gericht op het in grote partijen inkopen van goederen en deze als tussenhandelaar doorverkopen aan detailhandel of andere professionele grootverbruikers.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/grossier">https://definities.geostandaarden.nl/ibro/id/begrip/grossier</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_groothandel">Groothandel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_horeca">
<h4>Horeca</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Horeca</td>
</tr>
<tr>
<th>Naam</th>
<td>Horeca</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Verstrekken van logies en/of bereide maaltijden, snacks en dranken aan gasten voor onmiddellijke consumptie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/horeca">https://definities.geostandaarden.nl/ibro/id/begrip/horeca</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_strandpaviljoen">
<h5>Strandpaviljoen</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Strandpaviljoen</td>
</tr>
<tr>
<th>Naam</th>
<td>Strandpaviljoen</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Verstrekken van bereide maaltijden, snacks en dranken aan gasten voor onmiddellijke consumptie vanuit een op het strand gelegen voorziening.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/strandpaviljoen">https://definities.geostandaarden.nl/ibro/id/begrip/strandpaviljoen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_horeca">Horeca</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_hotel">
<h5>Hotel</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Hotel</td>
</tr>
<tr>
<th>Naam</th>
<td>Hotel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Dienstverlening gericht op het met een commercieel oogmerk aanbieden van overnachtingen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/hotel">https://definities.geostandaarden.nl/ibro/id/begrip/hotel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_horeca">Horeca</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_industrie">
<h4>Industrie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Industrie</td>
</tr>
<tr>
<th>Naam</th>
<td>Industrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Met een hoge graad van mechanisering en automatisering produceren van materiële goederen of artikelen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/industrie_feitelijk_gebruik">https://definities.geostandaarden.nl/ibro/id/begrip/industrie_feitelijk_gebruik</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_werf">
<h5>Werf</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Werf</td>
</tr>
<tr>
<th>Naam</th>
<td>Werf</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Werkplaats waar schepen worden gebouwd of hersteld.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/werf">https://definities.geostandaarden.nl/ibro/id/begrip/werf</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_industrie">Industrie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_kantoor">
<h4>Kantoor</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kantoor</td>
</tr>
<tr>
<th>Naam</th>
<td>Kantoor</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Uitoefening van een bedrijf, beroep of dienst waarin geen product wordt vervaardigd maar uitsluitend dienstverlening wordt bedreven.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/kantoor_feitelijk_gebruik">https://definities.geostandaarden.nl/ibro/id/begrip/kantoor_feitelijk_gebruik</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_kunst">
<h4>Kunst</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kunst</td>
</tr>
<tr>
<th>Naam</th>
<td>Kunst</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Activiteiten waarin met behulp van vaardigheden en verbeelding unieke creatieve producten worden gecreëerd.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/kunst">https://definities.geostandaarden.nl/ibro/id/begrip/kunst</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_bioscoop">
<h5>Bioscoop</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bioscoop</td>
</tr>
<tr>
<th>Naam</th>
<td>Bioscoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Publieke uitgaansgelegenheid die speciaal is bedoeld voor het bekijken van films.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/bioscoop">https://definities.geostandaarden.nl/ibro/id/begrip/bioscoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_kunst">Kunst</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_podiumkunst">
<h5>Podiumkunst</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Podiumkunst</td>
</tr>
<tr>
<th>Naam</th>
<td>Podiumkunst</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Publieke uitgaansgelegenheid bedoeld voor vormen van kunst die uitgevoerd worden op een podium in de aanwezigheid van publiek.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href=" https://definities.geostandaarden.nl/ibro/id/begrip/podiumkunst_feitelijk_gebruik"> https://definities.geostandaarden.nl/ibro/id/begrip/podiumkunst_feitelijk_gebruik</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_kunst">Kunst</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_museum">
<h5>Museum</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Museum</td>
</tr>
<tr>
<th>Naam</th>
<td>Museum</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Activiteiten gericht op het bijeenbrengen en (ten minste voor een gedeelte) voortdurend voor het publiek uitstallen van materiële en immateriële getuigenissen van de mens en zijn omgeving.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/museum">https://definities.geostandaarden.nl/ibro/id/begrip/museum</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_kunst">Kunst</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_onderwijs">
<h4>Onderwijs</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Onderwijs</td>
</tr>
<tr>
<th>Naam</th>
<td>Onderwijs</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Activiteiten gericht op het overbrengen van kennis, vaardigheden en attitudes met vooraf vastgelegde doelen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/onderwijs_feitelijk_gebruik">https://definities.geostandaarden.nl/ibro/id/begrip/onderwijs_feitelijk_gebruik</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_opslag">
<h4>Opslag</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Opslag</td>
</tr>
<tr>
<th>Naam</th>
<td>Opslag</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Activiteiten gericht op het voor kortere of langere tijd bewaren van goederen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/opslag">https://definities.geostandaarden.nl/ibro/id/begrip/opslag</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_munitiedepot">
<h5>Munitiedepot</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Munitiedepot</td>
</tr>
<tr>
<th>Naam</th>
<td>Munitiedepot</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Opslagplaats voor munitie en explosieven.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/munitiedepot">https://definities.geostandaarden.nl/ibro/id/begrip/munitiedepot</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_opslag">Opslag</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_distributiecentrum">
<h5>Distributiecentrum</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Distributiecentrum</td>
</tr>
<tr>
<th>Naam</th>
<td>Distributiecentrum</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Activiteiten gericht op het vanaf een geconcentreerde locatie verspreiden van goederen door een bedrijf.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/distributiecentrum">https://definities.geostandaarden.nl/ibro/id/begrip/distributiecentrum</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_opslag">Opslag</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_magazijn">
<h5>Magazijn</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Magazijn</td>
</tr>
<tr>
<th>Naam</th>
<td>Magazijn</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Tijdelijke opslag van goederen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/magazijn">https://definities.geostandaarden.nl/ibro/id/begrip/magazijn</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_opslag">Opslag</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_koelcel">
<h5>Koelcel</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Koelcel</td>
</tr>
<tr>
<th>Naam</th>
<td>Koelcel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Activiteiten gericht op het opzettelijk gekoeld houden ten behoeve van de opslag van producten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/koelcel">https://definities.geostandaarden.nl/ibro/id/begrip/koelcel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_opslag">Opslag</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_productverwerking">
<h4>Productverwerking</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Productverwerking</td>
</tr>
<tr>
<th>Naam</th>
<td>Productverwerking</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Activiteiten gericht op het verwerken van een product tot een ander product.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/productverwerking">https://definities.geostandaarden.nl/ibro/id/begrip/productverwerking</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_recreatie">
<h4>Recreatie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Recreatie</td>
</tr>
<tr>
<th>Naam</th>
<td>Recreatie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Uitoefening van vormen van vrijetijdsbesteding die in hoofdzaak geen lichamelijke beweging omvatten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/recreatie">https://definities.geostandaarden.nl/ibro/id/begrip/recreatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_clubgebouw">
<h5>Clubgebouw</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Clubgebouw</td>
</tr>
<tr>
<th>Naam</th>
<td>Clubgebouw</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Activiteiten gericht op het ten behoeve van leden of andere deelnemers aan een groep verzorgen van ontspannende activiteiten of samenkomsten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/clubgebouw">https://definities.geostandaarden.nl/ibro/id/begrip/clubgebouw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_recreatie">Recreatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_religie">
<h4>Religie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Religie</td>
</tr>
<tr>
<th>Naam</th>
<td>Religie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Activiteiten verbonden aan zingeving of het zoeken naar betekenisvolle verbindingen, waarbij meestal een hogere macht, opperwezen of god centraal staat.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/religie">https://definities.geostandaarden.nl/ibro/id/begrip/religie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_sport">
<h4>Sport</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Sport</td>
</tr>
<tr>
<th>Naam</th>
<td>Sport</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Activiteiten gericht op lichamelijke oefeningen en ontspanning waarbij vaardigheid, kracht en inzicht vereist worden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/sport_feitelijk_gebruik">https://definities.geostandaarden.nl/ibro/id/begrip/sport_feitelijk_gebruik</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_manege">
<h5>Manege</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Manege</td>
</tr>
<tr>
<th>Naam</th>
<td>Manege</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Beoefening van het paardrijden in een besloten omgeving.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/manege">https://definities.geostandaarden.nl/ibro/id/begrip/manege</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_sport">Sport</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_zwembadzone">
<h5>Zwembadzone</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Zwembadzone</td>
</tr>
<tr>
<th>Naam</th>
<td>Zwembadzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Openbaar toegankelijke zwemactiviteiten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/zwembad_feitelijk_gebruik">https://definities.geostandaarden.nl/ibro/id/begrip/zwembad_feitelijk_gebruik</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_sport">Sport</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_techniek">
<h4>Techniek</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Techniek</td>
</tr>
<tr>
<th>Naam</th>
<td>Techniek</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Activiteiten waarin de ontwikkeling of het gebruik van apparaten, machines en andere complexe voorwerpen centraal staat.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/techniek">https://definities.geostandaarden.nl/ibro/id/begrip/techniek</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_rioolgemaal">
<h5>Rioolgemaal</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Rioolgemaal</td>
</tr>
<tr>
<th>Naam</th>
<td>Rioolgemaal</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Activiteiten gericht op het binnen een rioolstelsel naar een hoger peil brengen of over langere afstand transporteren van afvalwater.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/rioolgemaal">https://definities.geostandaarden.nl/ibro/id/begrip/rioolgemaal</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_techniek">Techniek</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_radarpost">
<h5>Radarpost</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Radarpost</td>
</tr>
<tr>
<th>Naam</th>
<td>Radarpost</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Waarnemingen met behulp van radar om vliegtuigen en scheepsbewegingen te observeren.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/radarpost">https://definities.geostandaarden.nl/ibro/id/begrip/radarpost</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_techniek">Techniek</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_brugwachtershuis">
<h5>Brugwachtershuis</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Brugwachtershuis</td>
</tr>
<tr>
<th>Naam</th>
<td>Brugwachtershuis</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Activiteiten gericht op het bedienen van de technische voorzieningen die behoren bij een brug die geopend kan worden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/brugwachtershuis">https://definities.geostandaarden.nl/ibro/id/begrip/brugwachtershuis</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_techniek">Techniek</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_transformatorstation">
<h5>Transformatorstation</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Transformatorstation</td>
</tr>
<tr>
<th>Naam</th>
<td>Transformatorstation</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Transformeren van elektrische wisselspanning van hoge naar lage spanning en andersom.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/transformatorstation">https://definities.geostandaarden.nl/ibro/id/begrip/transformatorstation</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_techniek">Techniek</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_pompstation">
<h5>Pompstation</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Pompstation</td>
</tr>
<tr>
<th>Naam</th>
<td>Pompstation</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Op- of doorpompen van vloeistoffen door middel van een installatie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/pompstation">https://definities.geostandaarden.nl/ibro/id/begrip/pompstation</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_techniek">Techniek</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_peilmeetstation">
<h5>Peilmeetstation</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Peilmeetstation</td>
</tr>
<tr>
<th>Naam</th>
<td>Peilmeetstation</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Meting van landelijke of regionale waterstanden via het Monitoring Systeem Water met behulp van een Digitaal Niveau Meter (DNM).</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/peilmeetstation">https://definities.geostandaarden.nl/ibro/id/begrip/peilmeetstation</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_techniek">Techniek</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_telecommunicatie">
<h5>Telecommunicatie</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Telecommunicatie</td>
</tr>
<tr>
<th>Naam</th>
<td>Telecommunicatie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Activiteiten gericht op het in stand houden van voorzieningen die benodigd zijn voor het op afstand met behulp van elektronische middelen kunnen communiceren.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/telecommunicatie">https://definities.geostandaarden.nl/ibro/id/begrip/telecommunicatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_techniek">Techniek</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_observatorium">
<h5>Observatorium</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Observatorium</td>
</tr>
<tr>
<th>Naam</th>
<td>Observatorium</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Waarnemingen in de ruimte.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/observatorium">https://definities.geostandaarden.nl/ibro/id/begrip/observatorium</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_techniek">Techniek</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_gasverdeelstation">
<h5>Gasverdeelstation</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Gasverdeelstation</td>
</tr>
<tr>
<th>Naam</th>
<td>Gasverdeelstation</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Drukverlaging van aardgas in een netwerk ten behoeve van toevoer in een lokaal net.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/gasverdeelstation">https://definities.geostandaarden.nl/ibro/id/begrip/gasverdeelstation</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_techniek">Techniek</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_voertuigen">
<h4>Voertuigen</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Voertuigen</td>
</tr>
<tr>
<th>Naam</th>
<td>Voertuigen</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Bedrijfsmatige stalling of opstelpunt van voertuigen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/voertuigen">https://definities.geostandaarden.nl/ibro/id/begrip/voertuigen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_ambulancepost">
<h5>Ambulancepost</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Ambulancepost</td>
</tr>
<tr>
<th>Naam</th>
<td>Ambulancepost</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Opstelpunt voor voertuigen om medische hulpverleners te vervoeren naar een plaats waar behoefte is aan spoedeisende hulp of om slachtoffers of patiënten te vervoeren naar een ziekenhuis.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/ambulancepost">https://definities.geostandaarden.nl/ibro/id/begrip/ambulancepost</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_voertuigen">Voertuigen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_metrostation">
<h5>Metrostation</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Metrostation</td>
</tr>
<tr>
<th>Naam</th>
<td>Metrostation</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebruiksgebied dat bedoeld is voor het in- en uitstappen in metrovoertuigen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/metrostation">https://definities.geostandaarden.nl/ibro/id/begrip/metrostation</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_voertuigen">Voertuigen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_brandweerkazerne">
<h5>Brandweerkazerne</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Brandweerkazerne</td>
</tr>
<tr>
<th>Naam</th>
<td>Brandweerkazerne</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Opstelpunt van materieel en manschappen ten behoeve van brandbestrijding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/brandweerkazerne">https://definities.geostandaarden.nl/ibro/id/begrip/brandweerkazerne</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_voertuigen">Voertuigen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_station">
<h5>Station</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Station</td>
</tr>
<tr>
<th>Naam</th>
<td>Station</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebruiksgebied dat bedoeld is voor het in- en uitstappen in treinen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/station">https://definities.geostandaarden.nl/ibro/id/begrip/station</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_voertuigen">Voertuigen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_remise">
<h5>Remise</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Remise</td>
</tr>
<tr>
<th>Naam</th>
<td>Remise</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Stallingsplaats voor trams en bussen in de nacht en andere tijdstippen dat ze niet nodig zijn voor het vervoer van reizigers.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/remise">https://definities.geostandaarden.nl/ibro/id/begrip/remise</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_voertuigen">Voertuigen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_parkeergaragezone">
<h5>Parkeergaragezone</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Parkeergaragezone</td>
</tr>
<tr>
<th>Naam</th>
<td>Parkeergaragezone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Openbare voorziening voor het parkeren van voertuigen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/parkeergarage_feitelijk_gebruik">https://definities.geostandaarden.nl/ibro/id/begrip/parkeergarage_feitelijk_gebruik</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_voertuigen">Voertuigen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_wonen">
<h4>Wonen</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wonen</td>
</tr>
<tr>
<th>Naam</th>
<td>Wonen</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Permanent verblijf van personen voor niet bedrijfsmatige activiteiten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/wonen_feitelijk_gebruik">https://definities.geostandaarden.nl/ibro/id/begrip/wonen_feitelijk_gebruik</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_corridorflatwoning">
<h5>Corridorflatwoning</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Corridorflatwoning</td>
</tr>
<tr>
<th>Naam</th>
<td>Corridorflatwoning</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Flatwoning waarbij de voordeur uitkomt op een centraal binnen de bouwmassa per etage gelegen loopgang dan wel op een centrale hal op de etage.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/corridorflatwoning">https://definities.geostandaarden.nl/ibro/id/begrip/corridorflatwoning</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_wonen">Wonen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_personeelshuisvesting">
<h5>Personeelshuisvesting</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Personeelshuisvesting</td>
</tr>
<tr>
<th>Naam</th>
<td>Personeelshuisvesting</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Woonruimte die specifiek bedoeld is voor het onderbrengen van personeel van een bepaalde organisatie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/personeelshuisvesting">https://definities.geostandaarden.nl/ibro/id/begrip/personeelshuisvesting</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_wonen">Wonen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_bovenwoning">
<h5>Bovenwoning</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bovenwoning</td>
</tr>
<tr>
<th>Naam</th>
<td>Bovenwoning</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Etagewoning of flatwoning op een etage die bereikbaar is via een binnentrap met een mogelijk gemeenschappelijke voordeur die op straat uitkomt of een eigen voordeur heeft die niet in een portiek uitkomt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/bovenwoning">https://definities.geostandaarden.nl/ibro/id/begrip/bovenwoning</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_wonen">Wonen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_geschakelde_twee_onder_een_kap_woning">
<h5>GeschakeldeTweeOnderEenKapWoning</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#GeschakeldeTweeOnderEenKapWoning</td>
</tr>
<tr>
<th>Naam</th>
<td>GeschakeldeTweeOnderEenKapWoning</td>
</tr>
<tr>
<th>Alias</th>
<td>Geschakelde 2-onder-1-kapwoning</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>2-onder-1-kapwoning waarbij de muren van aanbouwen gedeeltelijk aan (aanbouwen van) andere woningen grenzen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/geschakelde_2-onder-1-kapwoning">https://definities.geostandaarden.nl/ibro/id/begrip/geschakelde_2-onder-1-kapwoning</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_wonen">Wonen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_galerijflatwoning">
<h5>Galerijflatwoning</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Galerijflatwoning</td>
</tr>
<tr>
<th>Naam</th>
<td>Galerijflatwoning</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Flatwoning waarbij de voordeur uitkomt op een aan de buitenkant gelegen loopgang.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/galerijflatwoning">https://definities.geostandaarden.nl/ibro/id/begrip/galerijflatwoning</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_wonen">Wonen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_portiekflatwoning">
<h5>Portiekflatwoning</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Portiekflatwoning</td>
</tr>
<tr>
<th>Naam</th>
<td>Portiekflatwoning</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Flatwoning waarbij de voordeur uitkomt op een gemeenschappelijk afsluitbaar trappenhuis, een centrale hal of een gesloten portiek.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/portiekflatwoning">https://definities.geostandaarden.nl/ibro/id/begrip/portiekflatwoning</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_wonen">Wonen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_maisonnette">
<h5>Maisonnette</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Maisonnette</td>
</tr>
<tr>
<th>Naam</th>
<td>Maisonnette</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Specifiek type flatwoning waarbij de woning zelf twee of meer bouwlagen heeft en de voordeur uitkomt op een gemeenschappelijke loopgang, op een gemeenschappelijk afsluitbaar trappenhuis, een centrale hal of gesloten portiek.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/maisonnette">https://definities.geostandaarden.nl/ibro/id/begrip/maisonnette</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_wonen">Wonen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_portiekwoning">
<h5>Portiekwoning</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Portiekwoning</td>
</tr>
<tr>
<th>Naam</th>
<td>Portiekwoning</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Etagewoning waarbij de voordeur uitkomt in een open portiek.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/portiekwoning">https://definities.geostandaarden.nl/ibro/id/begrip/portiekwoning</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_wonen">Wonen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_benedenwoning">
<h5>Benedenwoning</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Benedenwoning</td>
</tr>
<tr>
<th>Naam</th>
<td>Benedenwoning</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Etagewoning of flatwoning op de begane grond met een voordeur die op straat uitkomt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/benedenwoning">https://definities.geostandaarden.nl/ibro/id/begrip/benedenwoning</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_wonen">Wonen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_twee_onder_een_kap_woning">
<h5>TweeOnderEenKapWoning</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TweeOnderEenKapWoning</td>
</tr>
<tr>
<th>Naam</th>
<td>TweeOnderEenKapWoning</td>
</tr>
<tr>
<th>Alias</th>
<td>2-onder-1-kapwoning</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Eengezinswoning waarvan het hoofdgebouw is verbonden met het hoofdgebouw van één andere gelijksoortige en gelijkvormige woning (niet zijnde een tussenwoning).</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/2-onder-1-kapwoning">https://definities.geostandaarden.nl/ibro/id/begrip/2-onder-1-kapwoning</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_wonen">Wonen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_eindwoning">
<h5>Eindwoning</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Eindwoning</td>
</tr>
<tr>
<th>Naam</th>
<td>Eindwoning</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Eengezinswoning die grenst aan een aanliggende woning en die ligt op het begin of einde van de reeks woningen zonder (extra) bij de woning behorende grond aan de zijkant van de woning.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/eindwoning">https://definities.geostandaarden.nl/ibro/id/begrip/eindwoning</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_wonen">Wonen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_tussenwoning">
<h5>Tussenwoning</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Tussenwoning</td>
</tr>
<tr>
<th>Naam</th>
<td>Tussenwoning</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Eengezinswoning waarbij de tussenmuren aan andere panden grenzen en waarbij de woningen ten opzichte van elkaar in een gelijk vlak of lijn liggen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/tussenwoning">https://definities.geostandaarden.nl/ibro/id/begrip/tussenwoning</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_wonen">Wonen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_vrijstaande_woning">
<h5>VrijstaandeWoning</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#VrijstaandeWoning</td>
</tr>
<tr>
<th>Naam</th>
<td>VrijstaandeWoning</td>
</tr>
<tr>
<th>Alias</th>
<td>Vrijstaande woning</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Eengezinswoning die los staat van (eventueel) aanwezige andere objecten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/vrijstaande_woning">https://definities.geostandaarden.nl/ibro/id/begrip/vrijstaande_woning</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_wonen">Wonen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_geschakelde_woning">
<h5>GeschakeldeWoning</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#GeschakeldeWoning</td>
</tr>
<tr>
<th>Naam</th>
<td>GeschakeldeWoning</td>
</tr>
<tr>
<th>Alias</th>
<td>Geschakelde woning</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Eengezinswoning waarbij de muren of muren van aanbouwen gedeeltelijk aan (aanbouwen van) andere woningen grenzen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/geschakelde_woning">https://definities.geostandaarden.nl/ibro/id/begrip/geschakelde_woning</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_wonen">Wonen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_zorg">
<h4>Zorg</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Zorg</td>
</tr>
<tr>
<th>Naam</th>
<td>Zorg</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Bieden van lichamelijke of geestelijke hulp of aandacht.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/zorg">https://definities.geostandaarden.nl/ibro/id/begrip/zorg</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_institutioneel_huishouden">
<h5>InstitutioneelHuishouden</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#InstitutioneelHuishouden</td>
</tr>
<tr>
<th>Naam</th>
<td>InstitutioneelHuishouden</td>
</tr>
<tr>
<th>Alias</th>
<td>Institutioneel huishouden</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Bedrijfsmatige huishoudelijke verzorging van een groep personen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/institutioneel_huishouden">https://definities.geostandaarden.nl/ibro/id/begrip/institutioneel_huishouden</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_zorg">Zorg</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_ziekenhuis">
<h5>Ziekenhuis</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Ziekenhuis</td>
</tr>
<tr>
<th>Naam</th>
<td>Ziekenhuis</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Onderzoek, behandeling en verpleging van patiënten in het kader van professionele gezondheidszorg.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/ziekenhuis">https://definities.geostandaarden.nl/ibro/id/begrip/ziekenhuis</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_gebruikzonetypen_objecttype_zorg">Zorg</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>








## Domein Verhardingen
![Verhardingen](data/media/verhardingen.png "Domein Verhardingen")

### Objecttypen


<section id="informatiemodel_imibro_conceptueel_domein_verhardingen_objecttype_verharding">
<h4>Verharding</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verharding</td>
</tr>
<tr>
<th>Naam</th>
<td>Verharding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een door egaliseren, verstevigen en/of verruwen voor het beoogde gebruik geschikt gemaakt oppervlak, bestaande uit in een of meer lagen over een bodem of onderliggende constructie aangelegd materiaal.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit objecttype is gelijk aan het objecttype Verharding uit NEN 3610, maar is opgenomen als specialisatie daarvan omdat er specifieke kenmerken voor zijn gedefinieerd.
Een verhardingsvlak bestaat uit één Type verharding. Het gaat hierbij over het Type verharding waarmee het vlak overwegend is bedekt.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/verharding">https://definities.geostandaarden.nl/ibro/id/begrip/verharding</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier een selectie van de bestaande populatie fysieke voorkomen van wegdelen, ondersteunende wegdelen en onbegroeide terreindelen zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_verharding">Verharding (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_verhardingen_objecttype_asfaltverharding">
<h5>Asfaltverharding</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Asfaltverharding</td>
</tr>
<tr>
<th>Naam</th>
<td>Asfaltverharding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gesloten verharding bestaande uit asfaltbeton of andere met bitumen gebonden materialen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/asfaltverharding">https://definities.geostandaarden.nl/ibro/id/begrip/asfaltverharding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_verhardingen_objecttype_verharding">Verharding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_verhardingen_objecttype_elementenverharding">
<h5>Elementenverharding</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Elementenverharding</td>
</tr>
<tr>
<th>Naam</th>
<td>Elementenverharding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Open verharding opgebouwd uit losse elementen die in meer of mindere mate met elkaar verbonden zijn.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/elementenverharding">https://definities.geostandaarden.nl/ibro/id/begrip/elementenverharding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_verhardingen_objecttype_verharding">Verharding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_verhardingen_objecttype_halfverharding">
<h5>Halfverharding</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Halfverharding</td>
</tr>
<tr>
<th>Naam</th>
<td>Halfverharding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Open verharding bestaande uit onsamenhangend materiaal dat meer draagkracht levert dan de originele grond.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/halfverharding">https://definities.geostandaarden.nl/ibro/id/begrip/halfverharding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_verhardingen_objecttype_verharding">Verharding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_verhardingen_objecttype_kunststofverharding">
<h5>Kunststofverharding</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kunststofverharding</td>
</tr>
<tr>
<th>Naam</th>
<td>Kunststofverharding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Verharding bestaande uit een synthetisch vervaardigd materiaal.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/kunststofverharding">https://definities.geostandaarden.nl/ibro/id/begrip/kunststofverharding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_verhardingen_objecttype_verharding">Verharding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_verhardingen_objecttype_betonverharding">
<h5>Betonverharding</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Betonverharding</td>
</tr>
<tr>
<th>Naam</th>
<td>Betonverharding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gesloten verharding bestaande uit gewapend of ongewapend beton.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/betonverharding">https://definities.geostandaarden.nl/ibro/id/begrip/betonverharding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_verhardingen_objecttype_verharding">Verharding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_verhardingen_objecttype_onverhard">
<h5>Onverhard</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Onverhard</td>
</tr>
<tr>
<th>Naam</th>
<td>Onverhard</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Verharding bestaande uit natuurlijke materialen met een onverhard karakter.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href=" https://definities.geostandaarden.nl/ibro/id/begrip/onverhard"> https://definities.geostandaarden.nl/ibro/id/begrip/onverhard</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_verhardingen_objecttype_verharding">Verharding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>








## Domein Kunstwerken
![Kunstwerken](data/media/kunstwerken.png "Domein Kunstwerken")

### Objecttypen


<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_kunstwerk">
<h4>Kunstwerk</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kunstwerk</td>
</tr>
<tr>
<th>Naam</th>
<td>Kunstwerk</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Civiel-technische constructie voor de infrastructuur van wegen, water, spoorbanen, waterkeringen en/of leidingen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit objecttype is gelijk aan het objecttype Kunstwerk uit NEN 3610, maar is opgenomen als specialisatie daarvan omdat er specifieke kenmerken voor zijn gedefinieerd.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/kunstwerk">https://definities.geostandaarden.nl/ibro/id/begrip/kunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_kunstwerk">Kunstwerk (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_kunstwerk_attribuutsoort_naam">naam</a>
</td>
<td>
Naam van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_kunstwerk_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Breed geaccepteerde benaming van een kunstwerk zoals deze door de eigenaar is toegekend of zoals deze in de volksmond bekend staat.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>



<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_ondertunneling">
<h5>Ondertunneling</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Ondertunneling</td>
</tr>
<tr>
<th>Naam</th>
<td>Ondertunneling</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Ondergrondse of onder water gelegen verbinding tussen twee punten, aan beide einden voorzien van een open bakconstructie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>In een later stadium zullen registratieregels worden opgesteld waarin een nadere invulling wordt gegeven welke typeringen verplicht in de registratie worden opgenomen.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/ondertunneling">https://definities.geostandaarden.nl/ibro/id/begrip/ondertunneling</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie tunneldelen zoals deze is opgenomen in de basisregistratie grootschalige topografie. En van kunstwerkdelen van Type duiker indien opgenomen in het IMGeo deel van de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_kunstwerk">Kunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_duiker">
<h6>Duiker</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Duiker</td>
</tr>
<tr>
<th>Naam</th>
<td>Duiker</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Kunstwerk voor de waterhuishouding, bestaande uit een gesloten kokervormige constructie met een in- en uitstroomopening, die niet de gehele waterbreedte beslaat, aangebracht onder een weg of spoorweg of in een dam of ander terrein en de bodem van de watergang onderbreekt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/duiker">https://definities.geostandaarden.nl/ibro/id/begrip/duiker</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_ondertunneling">Ondertunneling</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_sifon">
<h6>Sifon</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Sifon</td>
</tr>
<tr>
<th>Naam</th>
<td>Sifon</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Kokervormige constructie met een verlaagd middengedeelte dat geheel met water is gevuld en die twee watergangen met elkaar verbindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/sifon">https://definities.geostandaarden.nl/ibro/id/begrip/sifon</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_ondertunneling">Ondertunneling</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_tunnel">
<h6>Tunnel</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Tunnel</td>
</tr>
<tr>
<th>Naam</th>
<td>Tunnel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Kokervormig kunstwerk onder een of meer wegen, spoorwegen, waterwegen en/of andere hindernissen, als ondergrondse doorgang voor verkeer, leidingen of dieren.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/tunnel">https://definities.geostandaarden.nl/ibro/id/begrip/tunnel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_ondertunneling">Ondertunneling</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_hevel">
<h6>Hevel</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Hevel</td>
</tr>
<tr>
<th>Naam</th>
<td>Hevel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Kokervormige constructie met een verhoogd middengedeelte dat twee wederzijds gelegen wateren met elkaar verbindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/hevel">https://definities.geostandaarden.nl/ibro/id/begrip/hevel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_ondertunneling">Ondertunneling</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk">
<h5>WaterstaatkundigKunstwerk</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#WaterstaatkundigKunstwerk</td>
</tr>
<tr>
<th>Naam</th>
<td>WaterstaatkundigKunstwerk</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Kunstwerk voor de beheersing van het oppervlaktewater en alles wat daarin voorkomt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>De kerende functie kan worden vastgelegd middels de functionele ruimte kering van het type water.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/waterstaatkundig_kunstwerk">https://definities.geostandaarden.nl/ibro/id/begrip/waterstaatkundig_kunstwerk</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie kunstwerkdeel zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_kunstwerk">Kunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk_relatiesoort_heeft_functie">heeftFunctie</a>
</td>
<td>
Functie die dit object vervult.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_kering">Kering</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk_relatiesoort_heeft_functie">
<h6>heeftFunctie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#heeftFunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftFunctie</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft functie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Functie die dit object vervult.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_damwand">
<h6>Damwand</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Damwand</td>
</tr>
<tr>
<th>Naam</th>
<td>Damwand</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Grondkerende of waterkerende constructie bestaande uit (nagenoeg) verticaal in de grond aangebrachte elementen die door middel van een langsprofiel in elkaar grijpen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href=" https://definities.geostandaarden.nl/ibro/id/begrip/damwand"> https://definities.geostandaarden.nl/ibro/id/begrip/damwand</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk">WaterstaatkundigKunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_walbescherming">
<h6>Walbescherming</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Walbescherming</td>
</tr>
<tr>
<th>Naam</th>
<td>Walbescherming</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Nagenoeg verticale wand tot kering van grond om afkalving van water te voorkomen, niet zijnde een kademuur.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/walbescherming">https://definities.geostandaarden.nl/ibro/id/begrip/walbescherming</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk">WaterstaatkundigKunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_vuilvang">
<h6>Vuilvang</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Vuilvang</td>
</tr>
<tr>
<th>Naam</th>
<td>Vuilvang</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Voorziening om de watergang dan wel één of meerdere objecten benedenstrooms te vrijwaren van drijvend vuil en dergelijke.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/vuilvang">https://definities.geostandaarden.nl/ibro/id/begrip/vuilvang</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk">WaterstaatkundigKunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_dijklichaam">
<h6>Dijklichaam</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Dijklichaam</td>
</tr>
<tr>
<th>Naam</th>
<td>Dijklichaam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Aangelegde waterkering van grond, die het achterliggende land beschermt tegen overstromingen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/dijklichaam">https://definities.geostandaarden.nl/ibro/id/begrip/dijklichaam</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk">WaterstaatkundigKunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_stormvloedkering">
<h6>Stormvloedkering</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Stormvloedkering</td>
</tr>
<tr>
<th>Naam</th>
<td>Stormvloedkering</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Waterkerende constructie die gesloten wordt bij zeer hoge buitenwaterstanden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/stormvloedkering">https://definities.geostandaarden.nl/ibro/id/begrip/stormvloedkering</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk">WaterstaatkundigKunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_schot">
<h6>Schot</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Schot</td>
</tr>
<tr>
<th>Naam</th>
<td>Schot</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Permanente afscheiding, verticaal in het water geplaatst, bedoeld om het waterpeil van het aan beide zijden aanwezige water te regelen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/schot">https://definities.geostandaarden.nl/ibro/id/begrip/schot</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk">WaterstaatkundigKunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_krib">
<h6>Krib</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Krib</td>
</tr>
<tr>
<th>Naam</th>
<td>Krib</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Kunstmatig lichaam van aarde, steen, turf of rijshout (en tegenwoordig beton of staal), om water te keren of te leiden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/krib">https://definities.geostandaarden.nl/ibro/id/begrip/krib</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk">WaterstaatkundigKunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_voorde">
<h6>Voorde</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Voorde</td>
</tr>
<tr>
<th>Naam</th>
<td>Voorde</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Doorwaadbare, doorgaans verharde, plaats in de watergang, die dient voor de oversteek van die watergang.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/voorde">https://definities.geostandaarden.nl/ibro/id/begrip/voorde</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk">WaterstaatkundigKunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_coupure">
<h6>Coupure</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Coupure</td>
</tr>
<tr>
<th>Naam</th>
<td>Coupure</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Onderbreking in een waterkering voor de doorvoer van een weg of spoorweg, die bij extreme waterstanden afsluitbaar is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/coupure">https://definities.geostandaarden.nl/ibro/id/begrip/coupure</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk">WaterstaatkundigKunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_ponton">
<h6>Ponton</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Ponton</td>
</tr>
<tr>
<th>Naam</th>
<td>Ponton</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Vastliggend drijflichaam, dat dienst doet als aanlegplaats van vaartuigen of daartoe toegang geeft.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/ponton">https://definities.geostandaarden.nl/ibro/id/begrip/ponton</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk">WaterstaatkundigKunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_vaste_dam">
<h6>VasteDam</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#VasteDam</td>
</tr>
<tr>
<th>Naam</th>
<td>VasteDam</td>
</tr>
<tr>
<th>Alias</th>
<td>Vaste dam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Dwars door een water gelegen afsluiting, bedoeld om water te keren of te beheersen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/vaste_dam">https://definities.geostandaarden.nl/ibro/id/begrip/vaste_dam</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk">WaterstaatkundigKunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_strekdam">
<h6>Strekdam</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Strekdam</td>
</tr>
<tr>
<th>Naam</th>
<td>Strekdam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Dam in de richting van de loop van de rivier of kanaal, ter beveiliging van de oevers of brugpijlers of ter beheersing van de rivier.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/strekdam">https://definities.geostandaarden.nl/ibro/id/begrip/strekdam</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk">WaterstaatkundigKunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_bodemval">
<h6>Bodemval</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bodemval</td>
</tr>
<tr>
<th>Naam</th>
<td>Bodemval</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Sprong in de bodem van een watergang.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href=" http://definities.acceptatie.geostandaarden.nl/imgeo/id/begrip/Bodemval"> http://definities.acceptatie.geostandaarden.nl/imgeo/id/begrip/Bodemval</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk">WaterstaatkundigKunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_steiger">
<h6>Steiger</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Steiger</td>
</tr>
<tr>
<th>Naam</th>
<td>Steiger</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Vaste (niet drijvende) waterbouwkundige constructie, verbonden met de wal, voor het aanleggen van schepen en bedoeld om deze schepen vanaf de wal te laden en te lossen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/steiger">https://definities.geostandaarden.nl/ibro/id/begrip/steiger</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk">WaterstaatkundigKunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_stuw">
<h6>Stuw</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Stuw</td>
</tr>
<tr>
<th>Naam</th>
<td>Stuw</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Vaste of beweegbare constructie in het water die dient om de waterstand bovenstrooms en/of benedenstrooms van de constructie te regelen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/stuw">https://definities.geostandaarden.nl/ibro/id/begrip/stuw</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk">WaterstaatkundigKunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_gemaal">
<h6>Gemaal</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Gemaal</td>
</tr>
<tr>
<th>Naam</th>
<td>Gemaal</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Kunstwerk in principe bedoeld om water van een laag peil naar een hoog peil te brengen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/gemaal">https://definities.geostandaarden.nl/ibro/id/begrip/gemaal</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk">WaterstaatkundigKunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_sluis">
<h6>Sluis</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Sluis</td>
</tr>
<tr>
<th>Naam</th>
<td>Sluis</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Kunstmatige, afsluitbare waterkering die een scheepvaartverbinding tussen twee wateren met verschillende waterpeilen mogelijk maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/sluis">https://definities.geostandaarden.nl/ibro/id/begrip/sluis</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk">WaterstaatkundigKunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_vispassage">
<h6>Vispassage</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Vispassage</td>
</tr>
<tr>
<th>Naam</th>
<td>Vispassage</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Waterbouwkundig constructie dat tot doel heeft vissen toegang te bieden tot een door een kunstwerk onbereikbaar geworden achterland.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/vispassage">https://definities.geostandaarden.nl/ibro/id/begrip/vispassage</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk">WaterstaatkundigKunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_overbrugging">
<h5>Overbrugging</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Overbrugging</td>
</tr>
<tr>
<th>Naam</th>
<td>Overbrugging</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Kunstwerk dat een beweegbare of vaste verbinding tussen twee punten betreft, die door water, een weg of anderszins gescheiden zijn, bestaande uit een brugdek/-bak met landhoofden en veelal gesteund door pijlers.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/overbrugging">https://definities.geostandaarden.nl/ibro/id/begrip/overbrugging</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie overbruggingsdelen; hoort bij Type overbrugging zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_kunstwerk">Kunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_overbrugging_attribuutsoort_indicatie_beweegbaar">indicatieBeweegbaar</a>
</td>
<td>
Deze overbrugging is al dan niet beweegbaar is (kan open en dicht).</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_overbrugging_attribuutsoort_indicatie_beweegbaar">
<h6>indicatieBeweegbaar</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#indicatieBeweegbaar</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatieBeweegbaar</td>
</tr>
<tr>
<th>Alias</th>
<td>indicatie beweegbaar</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Deze overbrugging is al dan niet beweegbaar is (kan open en dicht).</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>



<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_ecoduct">
<h6>Ecoduct</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Ecoduct</td>
</tr>
<tr>
<th>Naam</th>
<td>Ecoduct</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Overbruggingsconstructie over een weg of spoorweg, bedoeld voor het passeren van dieren.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/ecoduct">https://definities.geostandaarden.nl/ibro/id/begrip/ecoduct</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_overbrugging">Overbrugging</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_viaduct">
<h6>Viaduct</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Viaduct</td>
</tr>
<tr>
<th>Naam</th>
<td>Viaduct</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Overbruggingsconstructie over een weg, spoorweg of terreinverdieping, bedoeld voor verkeer.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href=" https://definities.geostandaarden.nl/ibro/id/begrip/viaduct"> https://definities.geostandaarden.nl/ibro/id/begrip/viaduct</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_overbrugging">Overbrugging</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_flyover" class="notoc">
<h6>Flyover</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Flyover</td>
</tr>
<tr>
<th>Naam</th>
<td>Flyover</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Kunstwerk in de vorm van een viaduct dat deel uitmaakt van een verkeersbaan en waarmee een verkeersstroom over twee of meer ongelijkvloerse verkeersstromen wordt geleid.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/fly-over">https://definities.geostandaarden.nl/ibro/id/begrip/fly-over</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_viaduct">Viaduct</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_brug">
<h6>Brug</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Brug</td>
</tr>
<tr>
<th>Naam</th>
<td>Brug</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Overbruggingsconstructie over een watervlakte of watergang, bedoeld voor verkeer.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/brug">https://definities.geostandaarden.nl/ibro/id/begrip/brug</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_overbrugging">Overbrugging</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_overkluizing">
<h6>Overkluizing</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Overkluizing</td>
</tr>
<tr>
<th>Naam</th>
<td>Overkluizing</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Civieltechnisch kunstwerk waarmee een weg, een plein of een watergang (kruiselings) wordt overwelfd, waarbij het dek meestal niet uitsluitend uit een pad of weg bestaat.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/overkluizing">https://definities.geostandaarden.nl/ibro/id/begrip/overkluizing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_overbrugging">Overbrugging</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_aquaduct">
<h6>Aquaduct</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Aquaduct</td>
</tr>
<tr>
<th>Naam</th>
<td>Aquaduct</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Overbruggingsconstructie waarmee een watergang door een bakvormige constructie over een weg, een spoorweg, een andere watergang, een leiding of een terrein wordt geleid.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/aquaduct">https://definities.geostandaarden.nl/ibro/id/begrip/aquaduct</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_overbrugging">Overbrugging</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_kunstwerkdeel">
<h4>Kunstwerkdeel</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kunstwerkdeel</td>
</tr>
<tr>
<th>Naam</th>
<td>Kunstwerkdeel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Onderdeel van een civieltechnisch werk voor de infrastructuur van wegen, water, spoorbanen, waterkeringen en/of leidingen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>BGT 1.2</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/kunstwerkdeel">https://definities.geostandaarden.nl/ibro/id/begrip/kunstwerkdeel</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie overbruggingsdelen, Type overbruggingsdeel zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_kunstwerkdeel_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
Object waar dit object onderdeel van uit maakt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_kunstwerk">Kunstwerk</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_kunstwerkdeel_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kunstwerkdeel.isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object onderdeel van uit maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_sloof">
<h5>Sloof</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Sloof</td>
</tr>
<tr>
<th>Naam</th>
<td>Sloof</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Deel van de pijler voor de overdracht van krachten naar de ondergrond of de fundering.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/sloof">https://definities.geostandaarden.nl/ibro/id/begrip/sloof</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_kunstwerkdeel">Kunstwerkdeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_sloof_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
Object waar dit object onderdeel van uit maakt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_overbrugging">Overbrugging</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_sloof_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is onderdeel van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object onderdeel van uit maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_sluisdeur">
<h5>Sluisdeur</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Sluisdeur</td>
</tr>
<tr>
<th>Naam</th>
<td>Sluisdeur</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Beweegbare deur die wordt toegepast bij (hoog)waterkeringen en sluizen om het niveauverschil aan beide zijden in stand te houden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/sluisdeur">https://definities.geostandaarden.nl/ibro/id/begrip/sluisdeur</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_kunstwerkdeel">Kunstwerkdeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_sluisdeur_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
Object waar dit object onderdeel van uit maakt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_sluis">Sluis</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_sluisdeur_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is onderdeel van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object onderdeel van uit maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_landhoofd">
<h5>Landhoofd</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Landhoofd</td>
</tr>
<tr>
<th>Naam</th>
<td>Landhoofd</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Ondersteuningsconstructie ter plaatse van een overgang van de aardebaan naar een kunstwerk.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/landhoofd">https://definities.geostandaarden.nl/ibro/id/begrip/landhoofd</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_kunstwerkdeel">Kunstwerkdeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_landhoofd_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
Object waar dit object onderdeel van uit maakt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_overbrugging">Overbrugging</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_landhoofd_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is onderdeel van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object onderdeel van uit maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_dek">
<h5>Dek</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Dek</td>
</tr>
<tr>
<th>Naam</th>
<td>Dek</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Direct door het verkeer belaste deel van de bovenbouw van de brug.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/dek">https://definities.geostandaarden.nl/ibro/id/begrip/dek</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_kunstwerkdeel">Kunstwerkdeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_dek_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
Object waar dit object onderdeel van uit maakt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_overbrugging">Overbrugging</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_dek_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is onderdeel van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object onderdeel van uit maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_pijler">
<h5>Pijler</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Pijler</td>
</tr>
<tr>
<th>Naam</th>
<td>Pijler</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Ondersteuningsconstructie van overbruggingen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/pijler">https://definities.geostandaarden.nl/ibro/id/begrip/pijler</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_kunstwerkdeel">Kunstwerkdeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_pijler_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
Object waar dit object onderdeel van uit maakt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_overbrugging">Overbrugging</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_pijler_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is onderdeel van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object onderdeel van uit maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_pyloon">
<h5>Pyloon</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Pyloon</td>
</tr>
<tr>
<th>Naam</th>
<td>Pyloon</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Boven de bovenbouw uitstekende draagconstructie voor tuien (kabels).</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/pyloon">https://definities.geostandaarden.nl/ibro/id/begrip/pyloon</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_kunstwerkdeel">Kunstwerkdeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_pyloon_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
Object waar dit object onderdeel van uit maakt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_overbrugging">Overbrugging</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_pyloon_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is onderdeel van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object onderdeel van uit maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_pyloon">Pyloon</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_schutkolk">
<h5>Schutkolk</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Schutkolk</td>
</tr>
<tr>
<th>Naam</th>
<td>Schutkolk</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Deel van de sluis waarin de te schutten schepen afmeren en op een hoger of lager niveau worden gebracht.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/schutkolk">https://definities.geostandaarden.nl/ibro/id/begrip/schutkolk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_kunstwerkdeel">Kunstwerkdeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_schutkolk_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
Object waar dit object onderdeel van uit maakt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_sluis">Sluis</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_kunstwerken_objecttype_schutkolk_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is onderdeel van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object onderdeel van uit maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
</section>








## Domein Overige constructies
![Overige constructies](data/media/overige_constructies.png "Domein Overige constructies")

### Objecttypen


<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_afvalcontainer">
<h4>Afvalcontainer</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Afvalcontainer</td>
</tr>
<tr>
<th>Naam</th>
<td>Afvalcontainer</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Constructie met een permanent karakter voor het inzamelen van afval.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op IMGeo 2.2</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/afvalcontainer">https://definities.geostandaarden.nl/ibro/id/begrip/afvalcontainer</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier een subset van de bestaande populatie bak zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_dok">
<h4>Dok</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Dok</td>
</tr>
<tr>
<th>Naam</th>
<td>Dok</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Constructie bedoeld om schepen uit het water te halen en vervolgens weer in het water te laten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/dok">https://definities.geostandaarden.nl/ibro/id/begrip/dok</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier deels de bestaande populatie overig bouwwerk type bassin zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_erfconstructie">
<h4>Erfconstructie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Erfconstructie</td>
</tr>
<tr>
<th>Naam</th>
<td>Erfconstructie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een met de aarde verbonden duurzaam en vrijstaand bouwwerk (op het achtererf), waarvan de grondoppervlakte op basis van de maaiveld geometrie kleiner is dan 5 m².</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/erfconstructie">https://definities.geostandaarden.nl/ibro/id/begrip/erfconstructie</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Dit betreft deels een nieuw begrip en is bedoeld voor vereenvoudigen van het bijhoudingsproces. Is onderdeel van NEN3610 Constructies en een uitbreiding op EMSO Overige constructies. Het betreft deels de overige bouwwerken (type schuur) in de BGT.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_erfconstructie_attribuutsoort_naam">naam</a>
</td>
<td>
Breed geaccepteerde benaming van een erfconstructie zoals deze door de eigenaar is toegekend of zoals deze in de volksmond bekend staat.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_erfconstructie_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Breed geaccepteerde benaming van een erfconstructie zoals deze door de eigenaar is toegekend of zoals deze in de volksmond bekend staat.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_geleideconstructie">
<h4>Geleideconstructie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geleideconstructie</td>
</tr>
<tr>
<th>Naam</th>
<td>Geleideconstructie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Constructie bedoeld voor de fysieke (be-)geleiding van voer- of vaartuigen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Het IBRO-begrip geleideconstructie omvat meer dan het gelijknamige BGT/IMGeo objecttype weginrichtingselement; geleideconstructie.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/geleideconstructie">https://definities.geostandaarden.nl/ibro/id/begrip/geleideconstructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_installatie">
<h4>Installatie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Installatie</td>
</tr>
<tr>
<th>Naam</th>
<td>Installatie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Constructie die een technisch samenhangend systeem betreft dat een bepaald doel dient.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op installatie in IMGeo 2.2</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/installatie">https://definities.geostandaarden.nl/ibro/id/begrip/installatie</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie installatie en onderdelen van de bestaande populaties paal, kast en overig bouwwerk zoals deze zijn opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_installatie_relatiesoort_hoort_bij">hoortBij</a>
</td>
<td>
Object waar dit object bijhoort.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_constructie">Constructie</a>
</td>
<td>
0..*</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_installatie_relatiesoort_hoort_bij">
<h6>hoortBij</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#hoortBij</td>
</tr>
<tr>
<th>Naam</th>
<td>hoortBij</td>
</tr>
<tr>
<th>Alias</th>
<td>hoort bij</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object bijhoort.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_windturbine">
<h5>Windturbine</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Windturbine</td>
</tr>
<tr>
<th>Naam</th>
<td>Windturbine</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Turbine waarin winddruk omgezet wordt in mechanische energie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/windturbine">https://definities.geostandaarden.nl/ibro/id/begrip/windturbine</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_installatie">Installatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_kast">
<h5>Kast</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kast</td>
</tr>
<tr>
<th>Naam</th>
<td>Kast</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Constructie met een permanent karakter dat dient om iets in te bergen en te beschermen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/kast">https://definities.geostandaarden.nl/ibro/id/begrip/kast</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_installatie">Installatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_transformator">
<h5>Transformator</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Transformator</td>
</tr>
<tr>
<th>Naam</th>
<td>Transformator</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Installatie voor het transformeren van elektrische wisselspanning van hoge naar lage spanning en andersom.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMBOR</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/transformator">https://definities.geostandaarden.nl/ibro/id/begrip/transformator</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_installatie">Installatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_pomp">
<h5>Pomp</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Pomp</td>
</tr>
<tr>
<th>Naam</th>
<td>Pomp</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Technische inrichting om vloeistoffen en/of gassen te verplaatsen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Als het een werkende pomp is, wordt deze als Pomp opgenomen; in andere gevallen (bv historische, niet-werkende pomp) als straatmeubilair zijnde kunstobject.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/pomp">https://definities.geostandaarden.nl/ibro/id/begrip/pomp</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_installatie">Installatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_lift">
<h5>Lift</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Lift</td>
</tr>
<tr>
<th>Naam</th>
<td>Lift</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Installatie gericht op het verticaal vervoeren van personen en goederen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/lift">https://definities.geostandaarden.nl/ibro/id/begrip/lift</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_installatie">Installatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_verlichtingsarmatuur">
<h5>Verlichtingsarmatuur</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verlichtingsarmatuur</td>
</tr>
<tr>
<th>Naam</th>
<td>Verlichtingsarmatuur</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Installatie bedoeld voor verlichten van de openbare ruimte.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/verlichtingsarmatuur">https://definities.geostandaarden.nl/ibro/id/begrip/verlichtingsarmatuur</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_installatie">Installatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_sirene">
<h5>Sirene</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Sirene</td>
</tr>
<tr>
<th>Naam</th>
<td>Sirene</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Installatie welke geluiden van variabele toonhoogte kan voortbrengen om de bevolking te waarschuwen voor gevaarlijke situaties.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/sirene">https://definities.geostandaarden.nl/ibro/id/begrip/sirene</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_installatie">Installatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_oplaadpunt">
<h5>Oplaadpunt</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Oplaadpunt</td>
</tr>
<tr>
<th>Naam</th>
<td>Oplaadpunt</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Systeem voor opladen van elektrische auto&#39;s.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/oplaadpunt">https://definities.geostandaarden.nl/ibro/id/begrip/oplaadpunt</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_installatie">Installatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_zonnepanelen">
<h5>Zonnepanelen</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Zonnepanelen</td>
</tr>
<tr>
<th>Naam</th>
<td>Zonnepanelen</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Installatie om zonne-energie om te zetten in energie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/zonnepanelen">https://definities.geostandaarden.nl/ibro/id/begrip/zonnepanelen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_installatie">Installatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_mast">
<h4>Mast</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Mast</td>
</tr>
<tr>
<th>Naam</th>
<td>Mast</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Hoge draagconstructie voor een installatie of het transport van energie en elektromagnetische straling.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/mast">https://definities.geostandaarden.nl/ibro/id/begrip/mast</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier een samenvoeging van een subset van de bestaande populaties overig bouwwerk, kunstwerkdeel en mast zoals deze zijn opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_mast_attribuutsoort_indicatie_open_mast">indicatieOpenMast</a>
</td>
<td>
Geeft aan of een mast al dan niet open is.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_mast_attribuutsoort_indicatie_open_mast">
<h6>indicatieOpenMast</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#indicatieOpenMast</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatieOpenMast</td>
</tr>
<tr>
<th>Alias</th>
<td>indicatie open mast</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geeft aan of een mast al dan niet open is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>



<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_hoogspanningsmast">
<h5>Hoogspanningsmast</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Hoogspanningsmast</td>
</tr>
<tr>
<th>Naam</th>
<td>Hoogspanningsmast</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Hoge draagconstructie voor het transport van energie en elektromagnetische straling.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/hoogspanningsmast">https://definities.geostandaarden.nl/ibro/id/begrip/hoogspanningsmast</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_mast">Mast</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_muur">
<h4>Muur</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Muur</td>
</tr>
<tr>
<th>Naam</th>
<td>Muur</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Constructie die een relatief smal, rechtopstaand bouwwerk betreft.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op Basisregistratie Topografie: Catalogus en Productspecificaties (versie 1.2.0.1)</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/muur">https://definities.geostandaarden.nl/ibro/id/begrip/muur</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie scheidingen, type muur en type kademuur, en kunstwerkdeel, type keermuur zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_muur_attribuutsoort_indicatie_valbescherming">indicatieValbescherming</a>
</td>
<td>
Muur die al dan niet bedoeld is om vallen te voorkomen.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_muur_relatiesoort_heeft_functie">heeftFunctie</a>
</td>
<td>
Functie die dit object vervult.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_keuze_relatiedoel__kering_of_afscheiding">KeringOfAfscheiding</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_muur_attribuutsoort_indicatie_valbescherming">
<h6>indicatieValbescherming</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#indicatieValbescherming</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatieValbescherming</td>
</tr>
<tr>
<th>Alias</th>
<td>indicatie valbescherming</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Muur die al dan niet bedoeld is om vallen te voorkomen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_muur_relatiesoort_heeft_functie">
<h6>heeftFunctie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#heeftFunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftFunctie</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft functie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Functie die dit object vervult.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_keermuur">
<h5>Keermuur</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Keermuur</td>
</tr>
<tr>
<th>Naam</th>
<td>Keermuur</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Muur die door vorm, gewicht en fundering zonder verankering de grond keert.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/keermuur">https://definities.geostandaarden.nl/ibro/id/begrip/keermuur</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_muur">Muur</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_kademuur">
<h5>Kademuur</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kademuur</td>
</tr>
<tr>
<th>Naam</th>
<td>Kademuur</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Verticale wand ter scheiding van land en water, opgebouwd uit een muur van gemetselde stenen of gestort beton.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/kademuur">https://definities.geostandaarden.nl/ibro/id/begrip/kademuur</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_muur">Muur</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_omheining">
<h4>Omheining</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Omheining</td>
</tr>
<tr>
<th>Naam</th>
<td>Omheining</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Kunstmatige verticale constructie die bedoeld is om de toegang tot een gebied te weren.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/omheining">https://definities.geostandaarden.nl/ibro/id/begrip/omheining</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie scheidingen, Type hek en Type draadraster, faunaraster zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_omheining_attribuutsoort_indicatie_valbescherming">indicatieValbescherming</a>
</td>
<td>
Omheining die al dan niet bedoeld is om vallen te voorkomen.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_omheining_relatiesoort_heeft_functie">heeftFunctie</a>
</td>
<td>
Functie die dit object vervult.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_afscheiding">Afscheiding</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_omheining_attribuutsoort_indicatie_valbescherming">
<h6>indicatieValbescherming</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#indicatieValbescherming</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatieValbescherming</td>
</tr>
<tr>
<th>Alias</th>
<td>indicatie valbescherming</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Omheining die al dan niet bedoeld is om vallen te voorkomen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_omheining_relatiesoort_heeft_functie">
<h6>heeftFunctie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#heeftFunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftFunctie</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft functie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Functie die dit object vervult.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_opslagtank">
<h4>Opslagtank</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Opslagtank</td>
</tr>
<tr>
<th>Naam</th>
<td>Opslagtank</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Constructie in de vorm van een bovengronds, afgesloten reservoir bestemd voor gassen, energie of vloeistoffen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMGeo 2.2</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/opslagtank">https://definities.geostandaarden.nl/ibro/id/begrip/opslagtank</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie overig bouwwerk, type opslagtank zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_paal">
<h4>Paal</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Paal</td>
</tr>
<tr>
<th>Naam</th>
<td>Paal</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Lage draagconstructie voor onder meer installaties of borden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/paal">https://definities.geostandaarden.nl/ibro/id/begrip/paal</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier een samenvoeging van een subset van de bestaande populaties palen en borden zoals deze zijn opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_putdeksel">
<h4>Putdeksel</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Putdeksel</td>
</tr>
<tr>
<th>Naam</th>
<td>Putdeksel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Afsluitende deel van een toegang tot een ingegraven constructie of netwerk.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Afgeleid van de definitie van een put in IMGeo 2.2</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/putdeksel">https://definities.geostandaarden.nl/ibro/id/begrip/putdeksel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_reservoir">
<h4>Reservoir</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Reservoir</td>
</tr>
<tr>
<th>Naam</th>
<td>Reservoir</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Constructie voor het (tijdelijk) bergen van water.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>gebaseerd op IMBOR 2020</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/reservoir">https://definities.geostandaarden.nl/ibro/id/begrip/reservoir</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie overig bouwwerk, type bezinkbak en type bassin zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_bassin">
<h5>Bassin</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bassin</td>
</tr>
<tr>
<th>Naam</th>
<td>Bassin</td>
</tr>
<tr>
<th>Herkomst</th>
<td>BGT</td>
</tr>
<tr>
<th>Definitie</th>
<td>Waterbak, niet zijnde een zwembad of een dok.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_reservoir">Reservoir</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_bezinkbak">
<h5>Bezinkbak</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bezinkbak</td>
</tr>
<tr>
<th>Naam</th>
<td>Bezinkbak</td>
</tr>
<tr>
<th>Herkomst</th>
<td>BGT</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een gesloten reservoir waarin het afvalwater tijdelijk wordt opgevangen met een slibreinigende voorziening.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>BGT</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_reservoir">Reservoir</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_scherm">
<h4>Scherm</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Scherm</td>
</tr>
<tr>
<th>Naam</th>
<td>Scherm</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Lineaire constructie specifiek bedoeld om te reduceren.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/scherm">https://definities.geostandaarden.nl/ibro/id/begrip/scherm</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie scheidingen, Type geluidscherm zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_scherm_relatiesoort_heeft_functie">heeftFunctie</a>
</td>
<td>
Functie die dit object vervult.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_reducering">Reducering</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_scherm_relatiesoort_heeft_functie">
<h6>heeftFunctie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#heeftFunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftFunctie</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft functie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Functie die dit object vervult.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_straatmeubilair">
<h4>Straatmeubilair</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Straatmeubilair</td>
</tr>
<tr>
<th>Naam</th>
<td>Straatmeubilair</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Constructie ter inrichting van de openbare ruimte niet verbonden met ondergrondse objecten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op IMGeo 2.2</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/straatmeubilair">https://definities.geostandaarden.nl/ibro/id/begrip/straatmeubilair</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier een subset van de bestaande populaties bak en straatmeubilair zoals deze zijn opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_herdenkingsmonument">
<h5>Herdenkingsmonument</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Herdenkingsmonument</td>
</tr>
<tr>
<th>Naam</th>
<td>Herdenkingsmonument</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Langs de weg of elders in het terrein aangelegd object ter herdenking van personen of gebeurtenissen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/herdenkingsmonument">https://definities.geostandaarden.nl/ibro/id/begrip/herdenkingsmonument</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_straatmeubilair">Straatmeubilair</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_fontein">
<h5>Fontein</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Fontein</td>
</tr>
<tr>
<th>Naam</th>
<td>Fontein</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Natuurlijke of kunstmatige installatie die water spuit.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/fontein">https://definities.geostandaarden.nl/ibro/id/begrip/fontein</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_straatmeubilair">Straatmeubilair</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_fietsenparkeerplaats">
<h5>Fietsenparkeerplaats</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Fietsenparkeerplaats</td>
</tr>
<tr>
<th>Naam</th>
<td>Fietsenparkeerplaats</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Voorziening in de openbare ruimte voor het stallen van fietsen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/fietsenparkeerplaats">https://definities.geostandaarden.nl/ibro/id/begrip/fietsenparkeerplaats</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_straatmeubilair">Straatmeubilair</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_speelvoorziening">
<h5>Speelvoorziening</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Speelvoorziening</td>
</tr>
<tr>
<th>Naam</th>
<td>Speelvoorziening</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Aard en nagelvast met de grond verbonden constructie in de openbare ruimte, bedoeld als speelmateriaal voor kinderen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/speelvoorziening">https://definities.geostandaarden.nl/ibro/id/begrip/speelvoorziening</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_straatmeubilair">Straatmeubilair</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_zitelement">
<h5>Zitelement</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Zitelement</td>
</tr>
<tr>
<th>Naam</th>
<td>Zitelement</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMBOR</td>
</tr>
<tr>
<th>Definitie</th>
<td>Zit- of steunplaats voor één of meerdere personen, bedoeld voor openbaar gebruik en geplaatst in de openbare ruimte.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMBOR</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Voornamelijk in parken, plantsoenen, bossen en langs wegen.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/zitelement">https://definities.geostandaarden.nl/ibro/id/begrip/zitelement</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_straatmeubilair">Straatmeubilair</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_openbaar_toilet">
<h5>OpenbaarToilet</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OpenbaarToilet</td>
</tr>
<tr>
<th>Naam</th>
<td>OpenbaarToilet</td>
</tr>
<tr>
<th>Alias</th>
<td>Openbaar toilet</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Voor mensen bedoeld toilet niet zijnde een gebouw, langs de openbare weg.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/openbaar_toilet">https://definities.geostandaarden.nl/ibro/id/begrip/openbaar_toilet</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_straatmeubilair">Straatmeubilair</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_picknicktafel">
<h5>Picknicktafel</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Picknicktafel</td>
</tr>
<tr>
<th>Naam</th>
<td>Picknicktafel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Tafel met vaak daaraan gemonteerde zitbanken of stoelen die kan gebruikt worden om te picknicken, bedoeld voor openbaar gebruik en geplaatst in de openbare ruimte (vnl. in parken, plantsoenen, bossen en langs wegen).</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/picknicktafel">https://definities.geostandaarden.nl/ibro/id/begrip/picknicktafel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_straatmeubilair">Straatmeubilair</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_kunstobject">
<h5>Kunstobject</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kunstobject</td>
</tr>
<tr>
<th>Naam</th>
<td>Kunstobject</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object dat als kunst gezien wordt en een bepaalde schoonheid heeft, niet door de natuur gemaakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/kunstobject">https://definities.geostandaarden.nl/ibro/id/begrip/kunstobject</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_straatmeubilair">Straatmeubilair</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_abri">
<h5>Abri</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Abri</td>
</tr>
<tr>
<th>Naam</th>
<td>Abri</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Overdekte wachtplaats voor passagiers van het openbaar vervoer.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/abri">https://definities.geostandaarden.nl/ibro/id/begrip/abri</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_straatmeubilair">Straatmeubilair</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_afvalbak">
<h5>Afvalbak</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Afvalbak</td>
</tr>
<tr>
<th>Naam</th>
<td>Afvalbak</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Bak of korf in de openbare ruimte met een permanent karakter; bedoeld voor het verzamelen van (meestal los) afval.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/afvalbak">https://definities.geostandaarden.nl/ibro/id/begrip/afvalbak</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_straatmeubilair">Straatmeubilair</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_overige_constructies_objecttype_zwembad">
<h4>Zwembad</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Zwembad</td>
</tr>
<tr>
<th>Naam</th>
<td>Zwembad</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Constructie in de vorm van een bassin bedoeld om in te zwemmen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>In een later stadium zullen registratieregels worden opgesteld waarin een nadere invulling wordt gegeven aan de interpretatie die aan zwembad moet worden gegeven. Daarbij zal ook nader worden bepaald in welke gevallen overdekte zwembaden in de registratie worden opgenomen.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/zwembad">https://definities.geostandaarden.nl/ibro/id/begrip/zwembad</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier deels de bestaande populatie overig bouwwerk type bassin zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>








## Domein Netwerk
![Netwerk](data/media/netwerk.png "Domein Netwerk")

### Objecttypen


<section id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_netwerk">
<h4>Netwerk</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Netwerk</td>
</tr>
<tr>
<th>Naam</th>
<td>Netwerk</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een verzameling netwerkelementen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/netwerk">https://definities.geostandaarden.nl/ibro/id/begrip/netwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>








</section>

<section id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_netwerkelement">
<h4>Netwerkelement</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Netwerkelement</td>
</tr>
<tr>
<th>Naam</th>
<td>Netwerkelement</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een element in een netwerk. Elk element in een netwerk biedt een functie die van belang is in het netwerk.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/netwerkelement">https://definities.geostandaarden.nl/ibro/id/begrip/netwerkelement</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>




<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_netwerkelement_relatiesoort_in_netwerk">inNetwerk</a>
</td>
<td>
De netwerken waarvan een netwerkelement lid is.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_netwerk">Netwerk</a>
</td>
<td>
0..*</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_netwerkelement_relatiesoort_in_netwerk">
<h6>inNetwerk</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#inNetwerk</td>
</tr>
<tr>
<th>Naam</th>
<td>inNetwerk</td>
</tr>
<tr>
<th>Alias</th>
<td>in netwerk</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De netwerken waarvan een netwerkelement lid is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_knoop">
<h5>Knoop</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Knoop</td>
</tr>
<tr>
<th>Naam</th>
<td>Knoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Vertegenwoordigt een belangrijke positie in het netwerk die altijd voorkomt aan het begin of het einde van een verbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/knoop">https://definities.geostandaarden.nl/ibro/id/begrip/knoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_netwerkelement">Netwerkelement</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#extern_inspire_generic_network_model_objecttype_node">Node</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_knoop_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Point"> GM_Point</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_knoop_relatiesoort_inkomende_verbinding">inkomendeVerbinding</a>
</td>
<td>
De verbindingen die de knoop binnenkomen.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_verbinding">Verbinding</a>
</td>
<td>
0..*</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_knoop_relatiesoort_uitgaande_verbinding">uitgaandeVerbinding</a>
</td>
<td>
De verbindingen die de knoop verlaten.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_verbinding">Verbinding</a>
</td>
<td>
0..*</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_knoop_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_knoop_relatiesoort_inkomende_verbinding">
<h6>inkomendeVerbinding</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#inkomendeVerbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>inkomendeVerbinding</td>
</tr>
<tr>
<th>Alias</th>
<td>inkomende verbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De verbindingen die de knoop binnenkomen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..1</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_knoop_relatiesoort_uitgaande_verbinding">
<h6>uitgaandeVerbinding</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#uitgaandeVerbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>uitgaandeVerbinding</td>
</tr>
<tr>
<th>Alias</th>
<td>uitgaande verbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De verbindingen die de knoop verlaten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..1</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_verbinding">
<h5>Verbinding</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>Verbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Netwerkelement dat twee posities met elkaar verbindt en een homogeen pad in het netwerk voorstelt. De verbonden posities kunnen worden voorgesteld als knopen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/verbinding">https://definities.geostandaarden.nl/ibro/id/begrip/verbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_netwerkelement">Netwerkelement</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#extern_inspire_generic_network_model_objecttype_link">Link</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_verbinding_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Curve"> GM_Curve</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_verbinding_relatiesoort_startknoop">startknoop</a>
</td>
<td>
De startknoop van de verbinding.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_knoop">Knoop</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_verbinding_relatiesoort_eindknoop">eindknoop</a>
</td>
<td>
De eindknoop van de verbinding.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_knoop">Knoop</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_verbinding_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_verbinding_relatiesoort_startknoop">
<h6>startknoop</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#startknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>startknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De startknoop van de verbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_verbinding_relatiesoort_eindknoop">
<h6>eindknoop</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#eindknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>eindknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De eindknoop van de verbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_netwerkverwijzing">
<h4>Netwerkverwijzing</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Netwerkverwijzing</td>
</tr>
<tr>
<th>Naam</th>
<td>Netwerkverwijzing</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een verwijzing naar een netwerkelement.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/netwerkverwijzing">https://definities.geostandaarden.nl/ibro/id/begrip/netwerkverwijzing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>




<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_netwerkverwijzing_relatiesoort_netwerkelement">netwerkelement</a>
</td>
<td>
Het netwerkelement waarnaar verwezen wordt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_netwerkelement">Netwerkelement</a>
</td>
<td>
1..1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_netwerkverwijzing_relatiesoort_netwerkelement">
<h6>netwerkelement</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#netwerkelement</td>
</tr>
<tr>
<th>Naam</th>
<td>netwerkelement</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Het netwerkelement waarnaar verwezen wordt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_verbindingsverwijzing">
<h5>Verbindingsverwijzing</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verbindingsverwijzing</td>
</tr>
<tr>
<th>Naam</th>
<td>Verbindingsverwijzing</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een verwijzing naar een verbinding in een netwerk.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/verbindingsverwijzing">https://definities.geostandaarden.nl/ibro/id/begrip/verbindingsverwijzing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_netwerkverwijzing">Netwerkverwijzing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_verbindingsverwijzing_attribuutsoort_betreft_richting">betreftRichting</a>
</td>
<td>
De richtingen van de gegeneraliseerde link waarop de verwijzing van toepassing is.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_enumeratie_verbindingsrichting">Verbindingsrichting</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_verbindingsverwijzing_relatiesoort_verbinding">verbinding</a>
</td>
<td>
De verbinding waarnaar verwezen wordt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_verbinding">Verbinding</a>
</td>
<td>
1..1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_verbindingsverwijzing_attribuutsoort_betreft_richting">
<h6>betreftRichting</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#betreftRichting</td>
</tr>
<tr>
<th>Naam</th>
<td>betreftRichting</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De richtingen van de gegeneraliseerde link waarop de verwijzing van toepassing is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Toelichting</th>
<td>In gevallen waar een eigenschap niet van toepassing is op een richting langs een verbinding, maar een fenomeen langs een verbinding vertegenwoordigt, verwijst &quot;inRichting&quot; naar de rechterkant in de richting van de verbinding.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_verbindingsverwijzing_relatiesoort_verbinding">
<h6>verbinding</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#verbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>verbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De verbinding waarnaar verwezen wordt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_simpele_lineaire_verwijzing">
<h6>SimpeleLineaireVerwijzing</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#SimpeleLineaireVerwijzing</td>
</tr>
<tr>
<th>Naam</th>
<td>SimpeleLineaireVerwijzing</td>
</tr>
<tr>
<th>Alias</th>
<td>Simpele lineaire verwijzing</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een netwerkverwijzing die beperkt is tot een deel van een verbinding. Het deel is het deel van de verbinding tussen &#39;vanaf positie&#39; en &#39;tot positie&#39; met een eventuele &#39;offset&#39;.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/simpele_lineaire_verwijzing">https://definities.geostandaarden.nl/ibro/id/begrip/simpele_lineaire_verwijzing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_verbindingsverwijzing">Verbindingsverwijzing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_simpele_lineaire_verwijzing_attribuutsoort_vanaf_positie">vanafPositie</a>
</td>
<td>
De startpositie van de verbinding, uitgedrukt als de afstand vanaf het begin van verbinding langs diens curvegeometrie.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_primitief_datatype_lengte">Lengte</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_simpele_lineaire_verwijzing_attribuutsoort_tot_positie">totPositie</a>
</td>
<td>
De eindpositie van de verbinding, uitgedrukt als de afstand vanaf het begin van de verbinding langs diens curvegeometrie.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_primitief_datatype_lengte">Lengte</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_simpele_lineaire_verwijzing_attribuutsoort_offset">offset</a>
</td>
<td>
Een verschuiving ten opzichte van de middellijngeometrie van de verbinding, indien van toepassing. Een positieve offset is een verschuiving naar rechts in de richting van de verbinding, een negatieve offset is een verschuiving naar links.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_primitief_datatype_lengte">Lengte</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_simpele_lineaire_verwijzing_attribuutsoort_vanaf_positie">
<h6>vanafPositie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#vanafPositie</td>
</tr>
<tr>
<th>Naam</th>
<td>vanafPositie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De startpositie van de verbinding, uitgedrukt als de afstand vanaf het begin van verbinding langs diens curvegeometrie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_simpele_lineaire_verwijzing_attribuutsoort_tot_positie">
<h6>totPositie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#totPositie</td>
</tr>
<tr>
<th>Naam</th>
<td>totPositie</td>
</tr>
<tr>
<th>Alias</th>
<td>tot positie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De eindpositie van de verbinding, uitgedrukt als de afstand vanaf het begin van de verbinding langs diens curvegeometrie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_simpele_lineaire_verwijzing_attribuutsoort_offset">
<h6>offset</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#offset</td>
</tr>
<tr>
<th>Naam</th>
<td>offset</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een verschuiving ten opzichte van de middellijngeometrie van de verbinding, indien van toepassing. Een positieve offset is een verschuiving naar rechts in de richting van de verbinding, een negatieve offset is een verschuiving naar links.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_simpele_puntverwijzing">
<h6>SimpelePuntverwijzing</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#SimpelePuntverwijzing</td>
</tr>
<tr>
<th>Naam</th>
<td>SimpelePuntverwijzing</td>
</tr>
<tr>
<th>Alias</th>
<td>Simpele puntverwijzing</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een netwerkreferentie die beperkt is tot een punt op een verbinding. Het punt is de locatie op het netwerkelement op de positie &#39;op positie&#39; langs het netwerk, met een eventuele offset.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/simpele_puntverwijzing">https://definities.geostandaarden.nl/ibro/id/begrip/simpele_puntverwijzing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_verbindingsverwijzing">Verbindingsverwijzing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_simpele_puntverwijzing_attribuutsoort_op_positie">opPositie</a>
</td>
<td>
Positie van het punt, uitgedrukt als de afstand vanaf het begin van de verbinding langs diens curvegeometrie.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_primitief_datatype_lengte">Lengte</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_simpele_puntverwijzing_attribuutsoort_offset">offset</a>
</td>
<td>
Een verschuiving ten opzichte van de middellijngeometrie van de verbinding, indien van toepassing. Een positieve offset is een verschuiving naar rechts in de richting van de verbinding, een negatieve offset is een verschuiving naar links.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_primitief_datatype_lengte">Lengte</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_simpele_puntverwijzing_attribuutsoort_op_positie">
<h6>opPositie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#opPositie</td>
</tr>
<tr>
<th>Naam</th>
<td>opPositie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Positie van het punt, uitgedrukt als de afstand vanaf het begin van de verbinding langs diens curvegeometrie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_simpele_puntverwijzing_attribuutsoort_offset">
<h6>offset</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#offset</td>
</tr>
<tr>
<th>Naam</th>
<td>offset</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een verschuiving ten opzichte van de middellijngeometrie van de verbinding, indien van toepassing. Een positieve offset is een verschuiving naar rechts in de richting van de verbinding, een negatieve offset is een verschuiving naar links.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_netwerkeigenschap">
<h4>Netwerkeigenschap</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Netwerkeigenschap</td>
</tr>
<tr>
<th>Naam</th>
<td>Netwerkeigenschap</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Type dat verschijnselen voorstelt die zich op of langs een netwerkelement bevinden. Dit type verschaft algemene eigenschappen om netwerkgerelateerde verschijnselen (netwerkeigenschappen) te associëren met de netwerkelementen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/netwerkeigenschap">https://definities.geostandaarden.nl/ibro/id/begrip/netwerkeigenschap</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>




<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_netwerkeigenschap_relatiesoort_netwerkverwijzing">netwerkverwijzing</a>
</td>
<td>
Ruimtelijke verwijzing van de netwerkgerelateerde eigenschap.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_netwerkverwijzing">Netwerkverwijzing</a>
</td>
<td>
1..*</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_netwerkeigenschap_relatiesoort_netwerkverwijzing">
<h6>netwerkverwijzing</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#netwerkverwijzing</td>
</tr>
<tr>
<th>Naam</th>
<td>netwerkverwijzing</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Ruimtelijke verwijzing van de netwerkgerelateerde eigenschap.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..1</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>





### Primitieve datatypen

#### Lengte {#informatiemodel_imibro_conceptueel_domein_netwerk_primitief_datatype_lengte}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Lengte</td>
</tr>
<tr>
<th>Naam</th>
<td>Lengte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De afstandsmaat als integraal, d.w.z. de limiet van een oneindige som van afstanden tussen punten op een kromme.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Bijvoorbeeld de lengte van een kromme, de omtrek van een veelhoek als de lengte van de grens.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Decimal</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>


### Enumeraties

#### Verbindingsrichting {#informatiemodel_imibro_conceptueel_domein_netwerk_enumeratie_verbindingsrichting}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verbindingsrichting</td>
</tr>
<tr>
<th>Naam</th>
<td>Verbindingsrichting</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De richtingen van de verbinding waarop de verwijzing van toepassing is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/verbindingsrichting">https://definities.geostandaarden.nl/ibro/id/begrip/verbindingsrichting</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht waarden</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 75%"></colgroup>
<tbody>
<tr>
  <th>Waarde</th>
  <th>Definitie</th>
</tr>
<tr>
<td>
BeideRichtingen</td>
<td>
</td>
<tr>
<td>
InRichting</td>
<td>
</td>
<tr>
<td>
InTegenovergesteldeRichting</td>
<td>
</td>
</tbody>
</table>


</section>



## Domein Transportnetwerk
![Transportnetwerk](data/media/transportnetwerk.png "Domein Transportnetwerk")

### Objecttypen


<section id="informatiemodel_imibro_conceptueel_domein_transportnetwerk_objecttype_transportruimte">
<h4>Transportruimte</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Transportruimte</td>
</tr>
<tr>
<th>Naam</th>
<td>Transportruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Natuurlijke of aangelegde transportlijnen of verbindingen met knooppunten waarlangs stromen zich kunnen verplaatsen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit objecttype is gelijk aan het objecttype Transportruimte uit NEN 3610, maar is opgenomen als specialisatie daarvan omdat er specifieke kenmerken voor zijn gedefinieerd.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/transportruimte">https://definities.geostandaarden.nl/ibro/id/begrip/transportruimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_transportruimte">Transportruimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_transportnetwerk_objecttype_transportruimte_relatiesoort_ligt_op">ligtOp</a>
</td>
<td>
Object waar dit object op ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
<td>
1..*</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_transportnetwerk_objecttype_transportruimte_relatiesoort_hyperverbinding">hyperverbinding</a>
</td>
<td>
Een relatie vanuit een netwerk naar een functionele ruimte waarmee functionele samenhang bestaat.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
<td>
0..*</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_transportnetwerk_objecttype_transportruimte_relatiesoort_ligt_op">
<h6>ligtOp</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtOp</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtOp</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt op</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object op ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_transportnetwerk_objecttype_transportruimte_relatiesoort_hyperverbinding">
<h6>hyperverbinding</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#hyperverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>hyperverbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een relatie vanuit een netwerk naar een functionele ruimte waarmee functionele samenhang bestaat.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Conceptueel model netwerken - Ministerie van Infrastructuur enWaterstaat</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Bijvoorbeeld een voetpad en een fietspad die parallel aan elkaar liggen.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_conceptueel_domein_transportnetwerk_objecttype_transportknoop">
<h5>Transportknoop</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Transportknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>Transportknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Transportruimte die een begin-, eind- of keuzepunt voor de gebruiker is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/transportknoop">https://definities.geostandaarden.nl/ibro/id/begrip/transportknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_transportnetwerk_objecttype_transportruimte">Transportruimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_knoop">Knoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_transportnetwerk_objecttype_transportverbinding">
<h5>Transportverbinding</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Transportverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>Transportverbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Transportruimte die twee knopen met elkaar verbindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/transportverbinding">https://definities.geostandaarden.nl/ibro/id/begrip/transportverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_verbinding">Verbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_transportnetwerk_objecttype_transportruimte">Transportruimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>








## Domein Wegennetwerk
![Wegennetwerk](data/media/wegennetwerk.png "Domein Wegennetwerk")

### Objecttypen


<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverkeerruimteverbinding">
<h4>Wegverkeerruimteverbinding</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wegverkeerruimteverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>Wegverkeerruimteverbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Transportverbinding ten behoeve van wegverkeer.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/wegverkeerruimteverbinding">https://definities.geostandaarden.nl/ibro/id/begrip/wegverkeerruimteverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_wegverkeerruimte">Wegverkeerruimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_transportnetwerk_objecttype_transportverbinding">Transportverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverkeerruimteverbinding_attribuutsoort_rijrichting">rijrichting</a>
</td>
<td>
De toegestane beweegrichting van de hoofdverkeersgebruiker op een weg/baan/strookverbinding.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_enumeratie_rijrichting">Rijrichting</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverkeerruimteverbinding_attribuutsoort_vlakgeometrie">vlakgeometrie</a>
</td>
<td>
Vlakgeometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverkeerruimteverbinding_attribuutsoort_rijrichting">
<h6>rijrichting</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#rijrichting</td>
</tr>
<tr>
<th>Naam</th>
<td>rijrichting</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>De toegestane beweegrichting van de hoofdverkeersgebruiker op een weg/baan/strookverbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverkeerruimteverbinding_attribuutsoort_vlakgeometrie">
<h6>vlakgeometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#vlakgeometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>vlakgeometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Vlakgeometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>



<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_baanverbinding">
<h5>Baanverbinding</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Baanverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>Baanverbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Aaneengesloten deel van een weg dat bedoeld is voor bepaalde groepen verkeersgebruikers.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/baan">https://definities.geostandaarden.nl/ibro/id/begrip/baan</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverkeerruimteverbinding">Wegverkeerruimteverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_baanverbinding_attribuutsoort_afritnummer">afritnummer</a>
</td>
<td>
Nummer toegekend aan een verbindingsbaan</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Integer</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_baanverbinding_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
Object waar dit object onderdeel van uit maakt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverbinding">Wegverbinding</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_baanverbinding_relatiesoort_heeft_hectometerpunt">heeftHectometerpunt</a>
</td>
<td>
Hectometerpunt dat dit object heeft.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_hectometerpunt">Hectometerpunt</a>
</td>
<td>
0..*</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_baanverbinding_attribuutsoort_afritnummer">
<h6>afritnummer</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#afritnummer</td>
</tr>
<tr>
<th>Naam</th>
<td>afritnummer</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Nummer toegekend aan een verbindingsbaan</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_baanverbinding_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is onderdeel van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object onderdeel van uit maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_baanverbinding_relatiesoort_heeft_hectometerpunt">
<h6>heeftHectometerpunt</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#heeftHectometerpunt</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftHectometerpunt</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft hectometerpunt</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Hectometerpunt dat dit object heeft.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..1</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_verbindingsbaan">
<h6>Verbindingsbaan</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verbindingsbaan</td>
</tr>
<tr>
<th>Naam</th>
<td>Verbindingsbaan</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Verkeer dragende baan die de verbinding verzorgt tussen ongelijkvloers samenkomende wegen of tussen niet samenkomende wegen, en die voorzien is van hectometerborden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/verbindingsbaan">https://definities.geostandaarden.nl/ibro/id/begrip/verbindingsbaan</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_baanverbinding">Baanverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_parallelbaan">
<h6>Parallelbaan</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Parallelbaan</td>
</tr>
<tr>
<th>Naam</th>
<td>Parallelbaan</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een verkeer dragende baan buiten de bebouwde kom die naast een hoofdrijbaan loopt en het lokale verkeer dat die hoofdrijbaan mag en wil kruisen, oprijden of verlaten, kan opvangen, verzamelen of verdelen, of alleen voor lokaal verkeer gebruikt kan worden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/parallelbaan">https://definities.geostandaarden.nl/ibro/id/begrip/parallelbaan</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_baanverbinding">Baanverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_fietspadbaan">
<h6>Fietspadbaan</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Fietspadbaan</td>
</tr>
<tr>
<th>Naam</th>
<td>Fietspadbaan</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Baan aanliggend/parallel aan de hoofdrijbaan, al dan niet gescheiden, waar fietsers, snorfietsers en bromfietsers gebruik van dienen te maken.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>RVV-Bordaanduiding: G12a</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/fietspadbaan">https://definities.geostandaarden.nl/ibro/id/begrip/fietspadbaan</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_baanverbinding">Baanverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_hoofdrijbaan">
<h6>Hoofdrijbaan</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Hoofdrijbaan</td>
</tr>
<tr>
<th>Naam</th>
<td>Hoofdrijbaan</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Verkeer dragende baan bestemd voor doorgaand verkeer.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/hoofdrijbaan">https://definities.geostandaarden.nl/ibro/id/begrip/hoofdrijbaan</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_baanverbinding">Baanverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_rotondebaan">
<h6>Rotondebaan</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Rotondebaan</td>
</tr>
<tr>
<th>Naam</th>
<td>Rotondebaan</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Hoofdrijbaan op een rotonde.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/rotondebaan">https://definities.geostandaarden.nl/ibro/id/begrip/rotondebaan</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_baanverbinding">Baanverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_voetpadbaan">
<h6>Voetpadbaan</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Voetpadbaan</td>
</tr>
<tr>
<th>Naam</th>
<td>Voetpadbaan</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Baan aanliggend/parallel aan de hoofdrijbaan, al dan niet gescheiden die bedoeld is voor voetgangers.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/voetpadbaan">https://definities.geostandaarden.nl/ibro/id/begrip/voetpadbaan</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_baanverbinding">Baanverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_fietsveer">
<h6>Fietsveer</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Fietsveer</td>
</tr>
<tr>
<th>Naam</th>
<td>Fietsveer</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geregelde verbinding per vaartuig bestemd voor het fietsverkeer en snorfietsen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/fietsveer">https://definities.geostandaarden.nl/ibro/id/begrip/fietsveer</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_baanverbinding">Baanverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_verkeerspleinbaan">
<h6>Verkeerspleinbaan</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verkeerspleinbaan</td>
</tr>
<tr>
<th>Naam</th>
<td>Verkeerspleinbaan</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Hoofdrijbaan op een verkeersplein.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/verkeerspleinbaan">https://definities.geostandaarden.nl/ibro/id/begrip/verkeerspleinbaan</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_baanverbinding">Baanverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_ruiterpadbaan">
<h6>Ruiterpadbaan</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Ruiterpadbaan</td>
</tr>
<tr>
<th>Naam</th>
<td>Ruiterpadbaan</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Speciaal zandpad aanliggend/parallel aan de hoofdrijbaan, al dan niet gescheiden, waarover ruiters kunnen rijden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/ruiterpadbaan">https://definities.geostandaarden.nl/ibro/id/begrip/ruiterpadbaan</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_baanverbinding">Baanverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_verzorgingsbaan">
<h6>Verzorgingsbaan</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verzorgingsbaan</td>
</tr>
<tr>
<th>Naam</th>
<td>Verzorgingsbaan</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Verkeer dragende baan op een parkeer- of verzorgingsplaats voor rustend verkeer.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/verzorgingsbaan">https://definities.geostandaarden.nl/ibro/id/begrip/verzorgingsbaan</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_baanverbinding">Baanverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_ventweg">
<h6>Ventweg</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Ventweg</td>
</tr>
<tr>
<th>Naam</th>
<td>Ventweg</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een verkeer dragende baan binnen de bebouwde kom die naast een hoofdrijbaan loopt en het lokale verkeer dat die hoofdrijbaan mag en wil kruisen, oprijden of verlaten, kan opvangen, verzamelen of verdelen, of alleen voor lokaal verkeer gebruikt kan worden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/ventweg">https://definities.geostandaarden.nl/ibro/id/begrip/ventweg</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_baanverbinding">Baanverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_busbaan">
<h6>Busbaan</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Busbaan</td>
</tr>
<tr>
<th>Naam</th>
<td>Busbaan</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Rijbaan waarop het woord «BUS» of «LIJNBUS» is aangebracht.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/busbaan">https://definities.geostandaarden.nl/ibro/id/begrip/busbaan</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_baanverbinding">Baanverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_veerverbindingbaan">
<h6>Veerverbindingbaan</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Veerverbindingbaan</td>
</tr>
<tr>
<th>Naam</th>
<td>Veerverbindingbaan</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geregelde verbinding per vaartuig bestemd voor onbepaalde hoofdverkeersgebruik.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/veerverbindingbaan">https://definities.geostandaarden.nl/ibro/id/begrip/veerverbindingbaan</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_baanverbinding">Baanverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_voetveer">
<h6>Voetveer</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Voetveer</td>
</tr>
<tr>
<th>Naam</th>
<td>Voetveer</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geregelde verbinding per vaartuig bestemd voor voetgangers.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/voetveer">https://definities.geostandaarden.nl/ibro/id/begrip/voetveer</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_baanverbinding">Baanverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">
<h5>Strookverbinding</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Strookverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>Strookverbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Door doorgetrokken of onderbroken strepen gemarkeerd gedeelte van de baan.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/strook">https://definities.geostandaarden.nl/ibro/id/begrip/strook</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverkeerruimteverbinding">Wegverkeerruimteverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
Object waar dit object onderdeel van uit maakt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_baanverbinding">Baanverbinding</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is onderdeel van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object onderdeel van uit maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_invoegstrook">
<h6>Invoegstrook</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Invoegstrook</td>
</tr>
<tr>
<th>Naam</th>
<td>Invoegstrook</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Door een blokmarkering van de doorgaande rijbaan afgescheiden weggedeelte dat is bestemd voor bestuurders die de doorgaande rijbaan oprijden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/invoegstrook">https://definities.geostandaarden.nl/ibro/id/begrip/invoegstrook</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_opstelstrook_rechtdoor">
<h6>OpstelstrookRechtdoor</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OpstelstrookRechtdoor</td>
</tr>
<tr>
<th>Naam</th>
<td>OpstelstrookRechtdoor</td>
</tr>
<tr>
<th>Alias</th>
<td>Opstelstrook rechtdoor</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Infrastructurele voorziening nabij kruisingen waar verkeersdeelnemers zich opstellen om rechtdoor te gaan.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/opstelstrook_rechtdoor_-_strookverbinding">https://definities.geostandaarden.nl/ibro/id/begrip/opstelstrook_rechtdoor_-_strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_vrachtwagenstrook">
<h6>Vrachtwagenstrook</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Vrachtwagenstrook</td>
</tr>
<tr>
<th>Naam</th>
<td>Vrachtwagenstrook</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Strook specifiek bestemd voor vrachtverkeer en meestal ook bussen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/vrachtwagenstrook">https://definities.geostandaarden.nl/ibro/id/begrip/vrachtwagenstrook</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_opstelstrook_rechtdoor_of_rechtsaf">
<h6>OpstelstrookRechtdoorOfRechtsaf</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OpstelstrookRechtdoorOfRechtsaf</td>
</tr>
<tr>
<th>Naam</th>
<td>OpstelstrookRechtdoorOfRechtsaf</td>
</tr>
<tr>
<th>Alias</th>
<td>Opstelstrook rechtdoor+rechtsaf</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Infrastructurele voorziening nabij kruisingen waar verkeersdeelnemers zich opstellen om rechtsaf te slaan of rechtdoor te gaan.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/opstelstrook_rechtdoor%2Brechtsaf">https://definities.geostandaarden.nl/ibro/id/begrip/opstelstrook_rechtdoor%2Brechtsaf</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_voetgangersstrook">
<h6>Voetgangersstrook</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Voetgangersstrook</td>
</tr>
<tr>
<th>Naam</th>
<td>Voetgangersstrook</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Strook bestemd voor voetgangers als onderdeel van een baan.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/voetgangersstrook">https://definities.geostandaarden.nl/ibro/id/begrip/voetgangersstrook</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_passeerstrook">
<h6>Passeerstrook</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Passeerstrook</td>
</tr>
<tr>
<th>Naam</th>
<td>Passeerstrook</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Lokale wegverbreding op smalle wegen buiten de bebouwde kom waar langzaam verkeer gepasseerd kan worden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/passeerstrook">https://definities.geostandaarden.nl/ibro/id/begrip/passeerstrook</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_spitsstrook">
<h6>Spitsstrook</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Spitsstrook</td>
</tr>
<tr>
<th>Naam</th>
<td>Spitsstrook</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Vluchtstrook die als rijstrook is aangewezen met een bord.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>RVV-Bordaanduiding: C23-01</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/spitsstrook">https://definities.geostandaarden.nl/ibro/id/begrip/spitsstrook</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_fietssuggestiestrook">
<h6>Fietssuggestiestrook</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Fietssuggestiestrook</td>
</tr>
<tr>
<th>Naam</th>
<td>Fietssuggestiestrook</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Strook die voor fietsers is gereserveerd zonder fietssymbool.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/fietssuggestiestrook">https://definities.geostandaarden.nl/ibro/id/begrip/fietssuggestiestrook</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_klimstrook">
<h6>Klimstrook</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Klimstrook</td>
</tr>
<tr>
<th>Naam</th>
<td>Klimstrook</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Strook waarbij trager rijdend verkeer (zoals vrachtwagens) en het overige sneller rijdende verkeer gescheiden wordt bij het beklimmen van een heuvel of berg.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/klimstrook">https://definities.geostandaarden.nl/ibro/id/begrip/klimstrook</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_busstrook">
<h6>Busstrook</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Busstrook</td>
</tr>
<tr>
<th>Naam</th>
<td>Busstrook</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Door doorgetrokken of onderbroken strepen gemarkeerd gedeelte van de rijbaan waarop het woord «BUS» of «LIJNBUS» is aangebracht.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/busstrook_-_strook">https://definities.geostandaarden.nl/ibro/id/begrip/busstrook_-_strook</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_redresseerstrook">
<h6>Redresseerstrook</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Redresseerstrook</td>
</tr>
<tr>
<th>Naam</th>
<td>Redresseerstrook</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Strook langs de buitenste rijstroken van een rijbaan met als doel om uit de koers geraakte voertuigen op te vangen en terug op koers te brengen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/redresseerstrook">https://definities.geostandaarden.nl/ibro/id/begrip/redresseerstrook</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_plusstrook">
<h6>Plusstrook</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Plusstrook</td>
</tr>
<tr>
<th>Naam</th>
<td>Plusstrook</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Smalle strook aan de linkerzijde van een rijbaan met dynamische openstelling.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/plusstrook">https://definities.geostandaarden.nl/ibro/id/begrip/plusstrook</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_rijstrook">
<h6>Rijstrook</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Rijstrook</td>
</tr>
<tr>
<th>Naam</th>
<td>Rijstrook</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Strook waar voertuigen over rijden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/rijstrook">https://definities.geostandaarden.nl/ibro/id/begrip/rijstrook</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_vluchtstrook">
<h6>Vluchtstrook</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Vluchtstrook</td>
</tr>
<tr>
<th>Naam</th>
<td>Vluchtstrook</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Door een doorgetrokken streep van de rijbaan van de autosnelweg of autoweg afgescheiden weggedeelte, dat bestemd is voor gebruik in noodgevallen, behoudens voor de duur van openstelling als spitsstrook.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/vluchtstrook">https://definities.geostandaarden.nl/ibro/id/begrip/vluchtstrook</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_opstelstrook">
<h6>Opstelstrook</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Opstelstrook</td>
</tr>
<tr>
<th>Naam</th>
<td>Opstelstrook</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Infrastructurele voorziening nabij kruisingen waar verkeersdeelnemers zich opstellen om naar de gewenste richting (linksaf, rechtdoor, rechtsaf) af te slaan.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/opstelstrook">https://definities.geostandaarden.nl/ibro/id/begrip/opstelstrook</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_bufferstrook">
<h6>Bufferstrook</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bufferstrook</td>
</tr>
<tr>
<th>Naam</th>
<td>Bufferstrook</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Extra rijstrook die kan worden opengesteld om te voorkomen dat een file vóór een knelpunt zo lang wordt dat hij andere verkeersstromen gaat blokkeren.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/bufferstrook">https://definities.geostandaarden.nl/ibro/id/begrip/bufferstrook</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_opstelstrook_opgeblazen_fietsopstelstrook">
<h6>OpstelstrookOpgeblazenFietsopstelstrook</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OpstelstrookOpgeblazenFietsopstelstrook</td>
</tr>
<tr>
<th>Naam</th>
<td>OpstelstrookOpgeblazenFietsopstelstrook</td>
</tr>
<tr>
<th>Alias</th>
<td>Opstelstrook opgeblazen fietsopstelstrook</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Infrastructurele voorziening nabij kruisingen waar fietsers zich voor het andere verkeer opstellen om linksaf te slaan.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/opstelstrook_opgeblazen_fietsopstelstrook">https://definities.geostandaarden.nl/ibro/id/begrip/opstelstrook_opgeblazen_fietsopstelstrook</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_uitvoegstrook">
<h6>Uitvoegstrook</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Uitvoegstrook</td>
</tr>
<tr>
<th>Naam</th>
<td>Uitvoegstrook</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Door een blokmarkering van de doorgaande rijbaan afgescheiden weggedeelte dat bestemd is voor bestuurders die de doorgaande rijbaan verlaten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/uitvoegstrook">https://definities.geostandaarden.nl/ibro/id/begrip/uitvoegstrook</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_fietsstrook">
<h6>Fietsstrook</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Fietsstrook</td>
</tr>
<tr>
<th>Naam</th>
<td>Fietsstrook</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Door doorgetrokken of onderbroken strepen gemarkeerd gedeelte van de rijbaan waarop afbeeldingen van een fiets zijn aangebracht.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/fietsstrook">https://definities.geostandaarden.nl/ibro/id/begrip/fietsstrook</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wisselstrook">
<h6>Wisselstrook</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wisselstrook</td>
</tr>
<tr>
<th>Naam</th>
<td>Wisselstrook</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Rijstrook die afhankelijk van de drukte geopend wordt voor een bepaalde rijrichting.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/wisselstrook">https://definities.geostandaarden.nl/ibro/id/begrip/wisselstrook</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_opstelstrook_rechtdoor_of_linksaf">
<h6>OpstelstrookRechtdoorOfLinksaf</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OpstelstrookRechtdoorOfLinksaf</td>
</tr>
<tr>
<th>Naam</th>
<td>OpstelstrookRechtdoorOfLinksaf</td>
</tr>
<tr>
<th>Alias</th>
<td>Opstelstrook rechtdoor+linksaf</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Infrastructurele voorziening nabij kruisingen waar verkeersdeelnemers zich opstellen om linksaf te slaan of rechtdoor te gaan.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/opstelstrook_rechtdoor%2Blinksaf">https://definities.geostandaarden.nl/ibro/id/begrip/opstelstrook_rechtdoor%2Blinksaf</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_weefstrook">
<h6>Weefstrook</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Weefstrook</td>
</tr>
<tr>
<th>Naam</th>
<td>Weefstrook</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Strook bedoeld voor het afwikkelen en uitwisselen van rijdend verkeer afkomstig van verschillende rijbanen en gaande naar verschillende rijbanen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/weefstrook">https://definities.geostandaarden.nl/ibro/id/begrip/weefstrook</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_opstelstrook_linksaf">
<h6>OpstelstrookLinksaf</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OpstelstrookLinksaf</td>
</tr>
<tr>
<th>Naam</th>
<td>OpstelstrookLinksaf</td>
</tr>
<tr>
<th>Alias</th>
<td>Opstelstrook linksaf</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Infrastructurele voorziening nabij kruisingen waar verkeersdeelnemers zich opstellen om linksaf te slaan.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/opstelstrook_linksaf_-_strookverbinding">https://definities.geostandaarden.nl/ibro/id/begrip/opstelstrook_linksaf_-_strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_opstelstrook_rechtsaf">
<h6>OpstelstrookRechtsaf</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OpstelstrookRechtsaf</td>
</tr>
<tr>
<th>Naam</th>
<td>OpstelstrookRechtsaf</td>
</tr>
<tr>
<th>Alias</th>
<td>Opstelstrook rechtsaf</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Infrastructurele voorziening nabij kruisingen waar verkeersdeelnemers zich opstellen om rechtsaf te slaan.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/opstelstrook_rechtsaf_-_strookverbinding">https://definities.geostandaarden.nl/ibro/id/begrip/opstelstrook_rechtsaf_-_strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverbinding">
<h5>Wegverbinding</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wegverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>Wegverbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een (onverharde/verharde) voorziening die bedoeld is voor het afwikkelen van het verkeer.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/wegverbinding_-_wegverkeerruimte">https://definities.geostandaarden.nl/ibro/id/begrip/wegverbinding_-_wegverkeerruimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverkeerruimteverbinding">Wegverkeerruimteverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverbinding_attribuutsoort_routenummer">routenummer</a>
</td>
<td>
Routenummer die over de wegverbinding loopt. Er zijn meerdere routenummers op een wegverbinding mogelijk.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1..*</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverbinding_attribuutsoort_indicatie_openbare_weg">indicatieOpenbareWeg</a>
</td>
<td>
Deze wegverbinding is al dan niet een openbare weg.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverbinding_relatiesoort_heeft_openbare_ruimte">heeftOpenbareRuimte</a>
</td>
<td>
De openbare ruimte dit object heeft.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_openbare_ruimte">OpenbareRuimte</a>
</td>
<td>
0..*</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverbinding_attribuutsoort_routenummer">
<h6>routenummer</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#routenummer</td>
</tr>
<tr>
<th>Naam</th>
<td>routenummer</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Routenummer die over de wegverbinding loopt. Er zijn meerdere routenummers op een wegverbinding mogelijk.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..*</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverbinding_attribuutsoort_indicatie_openbare_weg">
<h6>indicatieOpenbareWeg</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#indicatieOpenbareWeg</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatieOpenbareWeg</td>
</tr>
<tr>
<th>Alias</th>
<td>indicatie openbare weg</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Deze wegverbinding is al dan niet een openbare weg.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverbinding_relatiesoort_heeft_openbare_ruimte">
<h6>heeftOpenbareRuimte</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#heeftOpenbareRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftOpenbareRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft openbare ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>De openbare ruimte dit object heeft.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_fietsstraat">
<h6>Fietsstraat</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Fietsstraat</td>
</tr>
<tr>
<th>Naam</th>
<td>Fietsstraat</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Straat die ingericht is als fietsroute waar auto’s zijn toegestaan.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/fietsstraat">https://definities.geostandaarden.nl/ibro/id/begrip/fietsstraat</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverbinding">Wegverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_voetpad">
<h6>Voetpad</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Voetpad</td>
</tr>
<tr>
<th>Naam</th>
<td>Voetpad</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Vrij liggend pad (zonder naast/parallel liggende weg) waarvan voetgangers gebruik dienen te maken.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>RVV-Bordaanduiding: G7</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/voetpad">https://definities.geostandaarden.nl/ibro/id/begrip/voetpad</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverbinding">Wegverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_autosnelweg">
<h6>Autosnelweg</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Autosnelweg</td>
</tr>
<tr>
<th>Naam</th>
<td>Autosnelweg</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Conflictvrije weg (ongelijkvloerse kruisingen) aangeduid bestemd voor snel gemotoriseerd verkeer</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>RVV-Bordaanduiding: G1</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/autosnelweg">https://definities.geostandaarden.nl/ibro/id/begrip/autosnelweg</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverbinding">Wegverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_autoweg">
<h6>Autoweg</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Autoweg</td>
</tr>
<tr>
<th>Naam</th>
<td>Autoweg</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Weg die alleen voor snel gemotoriseerd (min 50km/uur) verkeer toegankelijk is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>RVV-Bordaanduiding: G3</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/autoweg">https://definities.geostandaarden.nl/ibro/id/begrip/autoweg</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverbinding">Wegverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_gebiedsontsluitingsweg_open">
<h6>GebiedsontsluitingswegOpen</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#GebiedsontsluitingswegOpen</td>
</tr>
<tr>
<th>Naam</th>
<td>GebiedsontsluitingswegOpen</td>
</tr>
<tr>
<th>Alias</th>
<td>Gebiedsontsluitingsweg open</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Verbindt een auto(snel)weg met een erftoegangsweg waar wel land- en bosbouwverkeer is toegestaan.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/gebiedsontsluitingsweg_open">https://definities.geostandaarden.nl/ibro/id/begrip/gebiedsontsluitingsweg_open</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverbinding">Wegverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_voetpad_op_trap">
<h6>VoetpadOpTrap</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#VoetpadOpTrap</td>
</tr>
<tr>
<th>Naam</th>
<td>VoetpadOpTrap</td>
</tr>
<tr>
<th>Herkomst</th>
<td>BGT</td>
</tr>
<tr>
<th>Definitie</th>
<td>Voetpad op verkeersinfrastructurele voorziening bestaande uit een constructie van treden, waarop men een hoger of lager gelegen plaats kan bereiken.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>BGT 1.2</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/voetpad_op_trap">https://definities.geostandaarden.nl/ibro/id/begrip/voetpad_op_trap</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverbinding">Wegverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_voetgangerszone">
<h6>Voetgangerszone</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Voetgangerszone</td>
</tr>
<tr>
<th>Naam</th>
<td>Voetgangerszone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Wegverbinding die bedoeld is voor voetgangers met uitzondering van fietsers en bestemmingsverkeer en, tussen bepaalde tijden, andere verkeersgebruikers.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/voetgangerszone">https://definities.geostandaarden.nl/ibro/id/begrip/voetgangerszone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverbinding">Wegverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_erftoegangsweg">
<h6>Erftoegangsweg</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Erftoegangsweg</td>
</tr>
<tr>
<th>Naam</th>
<td>Erftoegangsweg</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Weg met gemengd langzaam verkeer en gemotoriseerd verkeer, zonder rijrichtingscheiding en zonder gescheiden fietspaden. Weg biedt directe toegang tot verblijfsgebieden op de plaats van herkomst en bestemming. Verblijven staat hier centraal en het autoverkeer dient zich aan te passen (met name door lage rijsnelheden) aan de &#39;verblijvers&#39; zoals fietsers en voetgangers.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/erftoegangsweg">https://definities.geostandaarden.nl/ibro/id/begrip/erftoegangsweg</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverbinding">Wegverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_gebiedsontsluitingsweg_gesloten">
<h6>GebiedsontsluitingswegGesloten</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#GebiedsontsluitingswegGesloten</td>
</tr>
<tr>
<th>Naam</th>
<td>GebiedsontsluitingswegGesloten</td>
</tr>
<tr>
<th>Alias</th>
<td>Gebiedsontsluitingsweg gesloten</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Verbindt een auto(snel)weg met een erftoegangsweg waar geen land- en bosbouwverkeer is toegestaan.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/gebiedsontsluitingsweg_gesloten">https://definities.geostandaarden.nl/ibro/id/begrip/gebiedsontsluitingsweg_gesloten</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverbinding">Wegverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_veerverbinding">
<h6>Veerverbinding</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Veerverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>Veerverbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geregelde wegverbinding per vaartuig bestemd voor (on)bepaald hoofdverkeersgebruik.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/veerverbinding">https://definities.geostandaarden.nl/ibro/id/begrip/veerverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverbinding">Wegverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_fiets_of_bromfietspad">
<h6>FietsOfBromfietspad</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#FietsOfBromfietspad</td>
</tr>
<tr>
<th>Naam</th>
<td>FietsOfBromfietspad</td>
</tr>
<tr>
<th>Alias</th>
<td>Fiets/bromfietspad</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Vrij liggend pad (zonder naast/parallel liggende weg) waar fietsers, snorfietsers en bromfietsers gebruik van dienen te maken.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>RVV-Bordaanduiding: G12a</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/fiets-_of_bromfietspad">https://definities.geostandaarden.nl/ibro/id/begrip/fiets-_of_bromfietspad</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverbinding">Wegverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_fietspad">
<h6>Fietspad</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Fietspad</td>
</tr>
<tr>
<th>Naam</th>
<td>Fietspad</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Vrij liggend pad (zonder naast/parallel liggende weg) waar fietsers en snorfietsers gebruik van dienen te maken of waar fietsers gebruik van mogen maken.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>RVV-Bordaanduiding: G12 of G13</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/fietspad">https://definities.geostandaarden.nl/ibro/id/begrip/fietspad</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverbinding">Wegverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_ruiterpad">
<h6>Ruiterpad</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Ruiterpad</td>
</tr>
<tr>
<th>Naam</th>
<td>Ruiterpad</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Vrij liggend pad (zonder naast/parallel liggende weg) waarvan ruiters gebruik dienen te maken.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/ruiterpad">https://definities.geostandaarden.nl/ibro/id/begrip/ruiterpad</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverbinding">Wegverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverkeerruimteknoop">
<h4>Wegverkeerruimteknoop</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wegverkeerruimteknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>Wegverkeerruimteknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Transportknoop ten behoeve van wegverkeer.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/wegverkeerruimteknoop">https://definities.geostandaarden.nl/ibro/id/begrip/wegverkeerruimteknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_wegverkeerruimte">Wegverkeerruimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_transportnetwerk_objecttype_transportknoop">Transportknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_baanknoop">
<h5>Baanknoop</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Baanknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>Baanknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Transportknoop die een begin- of eindpunt is van een baanverbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/baanknoop">https://definities.geostandaarden.nl/ibro/id/begrip/baanknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverkeerruimteknoop">Wegverkeerruimteknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_strookknoop">
<h5>Strookknoop</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Strookknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>Strookknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Transportknoop die een begin- of eindpunt is van een strookverbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/strookknoop">https://definities.geostandaarden.nl/ibro/id/begrip/strookknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverkeerruimteknoop">Wegverkeerruimteknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegknoop">
<h5>Wegknoop</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wegknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>Wegknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Wegverkeerruimte die een begin-, eind- of keuzepunt is voor de weggebruiker/voertuig.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/wegknoop">https://definities.geostandaarden.nl/ibro/id/begrip/wegknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegverkeerruimteknoop">Wegverkeerruimteknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegknoop_attribuutsoort_vlakgeometrie">vlakgeometrie</a>
</td>
<td>
Vlakgeometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegknoop_relatiesoort_heeft_openbare_ruimte">heeftOpenbareRuimte</a>
</td>
<td>
De openbare ruimte dit object heeft.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_openbare_ruimte">OpenbareRuimte</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegknoop_attribuutsoort_vlakgeometrie">
<h6>vlakgeometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#vlakgeometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>vlakgeometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Vlakgeometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegknoop_relatiesoort_heeft_openbare_ruimte">
<h6>heeftOpenbareRuimte</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#heeftOpenbareRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftOpenbareRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft openbare ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>De openbare ruimte dit object heeft.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_koppelknoop">
<h6>Koppelknoop</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Koppelknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>Koppelknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Wegknoop waar twee verschillende type wegverbindingen aan elkaar verbonden zijn.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/koppelknoop">https://definities.geostandaarden.nl/ibro/id/begrip/koppelknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegknoop">Wegknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_grensknoop">
<h6>Grensknoop</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Grensknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>Grensknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Wegknoop met 1 verbinding en betreft een doorgaande verbinding met het wegennetwerk van een buurland.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/grensknoop">https://definities.geostandaarden.nl/ibro/id/begrip/grensknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegknoop">Wegknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_eindknoop">
<h6>Eindknoop</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Eindknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>Eindknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Wegknoop met 1 verbinding en is het einde van een doodlopende weg.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/eindknoop">https://definities.geostandaarden.nl/ibro/id/begrip/eindknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegknoop">Wegknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_kruising">
<h6>Kruising</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kruising</td>
</tr>
<tr>
<th>Naam</th>
<td>Kruising</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Wegknoop waar tenminste drie verbindingen samenkomen in de vorm van een Y,T of +.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/kruising">https://definities.geostandaarden.nl/ibro/id/begrip/kruising</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegknoop">Wegknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_rotonde">
<h6>Rotonde</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Rotonde</td>
</tr>
<tr>
<th>Naam</th>
<td>Rotonde</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Wegknoop waarop het verkeer voorrang heeft en waarop de wegen radiaal aansluiten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/kruising">https://definities.geostandaarden.nl/ibro/id/begrip/kruising</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegknoop">Wegknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_verkeersplein">
<h6>Verkeersplein</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verkeersplein</td>
</tr>
<tr>
<th>Naam</th>
<td>Verkeersplein</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Wegknoop waar wegen samenkomen in de vorm van een rond plein, waar het rijverkeer met een verplichte, rondgaande rijrichting wordt afgewikkeld waarbij het verkeer op het plein geen voorrang heeft.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/verkeersplein">https://definities.geostandaarden.nl/ibro/id/begrip/verkeersplein</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_wegknoop">Wegknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_wegennetwerk_objecttype_hectometerpunt">
<h4>Hectometerpunt</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Hectometerpunt</td>
</tr>
<tr>
<th>Naam</th>
<td>Hectometerpunt</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Locatieaanduiding op regelmatige afstand langs de wegverbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/hectormeterpunt">https://definities.geostandaarden.nl/ibro/id/begrip/hectormeterpunt</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_netwerk_objecttype_netwerkeigenschap">Netwerkeigenschap</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>






### Enumeraties

#### Rijrichting {#informatiemodel_imibro_conceptueel_domein_wegennetwerk_enumeratie_rijrichting}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Rijrichting</td>
</tr>
<tr>
<th>Naam</th>
<td>Rijrichting</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>De toegestane beweegrichting van de hoofdverkeersgebruiker op een weg/baan/strookverbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/rijrichting">https://definities.geostandaarden.nl/ibro/id/begrip/rijrichting</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht waarden</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 75%"></colgroup>
<tbody>
<tr>
  <th>Waarde</th>
  <th>Definitie</th>
</tr>
<tr>
<td>
Beide</td>
<td>
Beide rijrichtingen zijn op de verbinding toegestaan.</td>
<tr>
<td>
Eenrichting</td>
<td>
Eén rijrichting is toegestaan in de richting van de verbinding.</td>
<tr>
<td>
Tegenovergesteld eenrichting</td>
<td>
Eén rijrichting is toegestaan in de tegenovergestelde richting van de verbinding.</td>
</tbody>
</table>


</section>



## Domein Spoorwegennetwerk
![Spoorwegennetwerk](data/media/spoorwegennetwerk.png "Domein Spoorwegennetwerk")

### Objecttypen


<section id="informatiemodel_imibro_conceptueel_domein_spoorwegennetwerk_objecttype_spoorwegknoop">
<h4>Spoorwegknoop</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Spoorwegknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>Spoorwegknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Gebaseerd op conceptueel model netwerken.</td>
</tr>
<tr>
<th>Definitie</th>
<td>Spoorverkeerruimte die een begin-, eind- of keuzepunt voor de spoorgebruiker is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/spoorwegknoop">https://definities.geostandaarden.nl/ibro/id/begrip/spoorwegknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_spoorverkeerruimte">Spoorverkeerruimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_transportnetwerk_objecttype_transportknoop">Transportknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_spoorwegennetwerk_objecttype_spoorverbinding">
<h4>Spoorverbinding</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Spoorverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>Spoorverbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Gebaseerd op conceptueel model netwerken</td>
</tr>
<tr>
<th>Definitie</th>
<td>Spoorverkeerruimte die de verkeerskundige inrichting van een spoor tussen twee knopen betreft.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/spoorverbinding">https://definities.geostandaarden.nl/ibro/id/begrip/spoorverbinding</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie spoor zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_spoorverkeerruimte">Spoorverkeerruimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_transportnetwerk_objecttype_transportverbinding">Transportverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_conceptueel_domein_spoorwegennetwerk_objecttype_lokale_spoorverbinding">
<h5>LokaleSpoorverbinding</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#LokaleSpoorverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>LokaleSpoorverbinding</td>
</tr>
<tr>
<th>Alias</th>
<td>Lokale spoorverbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Spoorverbinding in gesloten spoornetwerk bedoeld voor en beperkt tot stedelijk/regionaal vervoer van personen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Het gaat hier om spoor voor een boven- danwel ondergrondse interlokale tram met een vrije baan, en spoor voor een railvoertuig voor personenvervoer voor de korte afstand. </td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/lokale_spoorverbinding">https://definities.geostandaarden.nl/ibro/id/begrip/lokale_spoorverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_spoorwegennetwerk_objecttype_spoorverbinding">Spoorverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_spoorwegennetwerk_objecttype_nationale_spoorverbinding">
<h5>NationaleSpoorverbinding</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#NationaleSpoorverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>NationaleSpoorverbinding</td>
</tr>
<tr>
<th>Alias</th>
<td>Nationale spoorverbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Spoorverbinding in het landelijk spoornetwerk waarmee (inter-)nationaal vervoer van personen en goederen mogelijk is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/nationale_spoorverbinding">https://definities.geostandaarden.nl/ibro/id/begrip/nationale_spoorverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_spoorwegennetwerk_objecttype_spoorverbinding">Spoorverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>








## Domein Functionele ruimten
![Functionele ruimten](data/media/functionele_ruimten.png "Domein Functionele ruimten")

### Objecttypen


<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_afscheiding">
<h4>Afscheiding</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Afscheiding</td>
</tr>
<tr>
<th>Naam</th>
<td>Afscheiding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Functionele ruimte die een voorziening betreft om terrein af te scheiden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/afscheiding">https://definities.geostandaarden.nl/ibro/id/begrip/afscheiding</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de functionele vertaling van de bestaande populatie scheiding type muur, hek en raster zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_afscheiding_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_LineString"> GM_LineString</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_afscheiding_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_complex">
<h4>Complex</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Complex</td>
</tr>
<tr>
<th>Naam</th>
<td>Complex</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Functionele ruimte die een verzameling van één of meer gebouwen, constructies, verharding, water en begroeiing betreft die samen een eenheid vormen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/complex">https://definities.geostandaarden.nl/ibro/id/begrip/complex</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_complex_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_complex_attribuutsoort_naam">naam</a>
</td>
<td>
Naam van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_complex_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_complex_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Breed geaccepteerde benaming van een complex zoals deze door de eigenaar is toegekend of zoals deze in de volksmond bekend staat.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>



<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_zorgcomplex">
<h5>Zorgcomplex</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Zorgcomplex</td>
</tr>
<tr>
<th>Naam</th>
<td>Zorgcomplex</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Alle bij een ziekenhuis / zorginstellingslocatie behorende begroeiing, verharding en gebouwen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/zorgcomplex">https://definities.geostandaarden.nl/ibro/id/begrip/zorgcomplex</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_complex">Complex</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_zuiveringscomplex">
<h5>Zuiveringscomplex</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Zuiveringscomplex</td>
</tr>
<tr>
<th>Naam</th>
<td>Zuiveringscomplex</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geheel van gebouwen, constructies, verharding en begroeiing dat ervoor zorgt dat water gezuiverd wordt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/zuiveringscomplex">https://definities.geostandaarden.nl/ibro/id/begrip/zuiveringscomplex</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_complex">Complex</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_sluiscomplex">
<h5>Sluiscomplex</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Sluiscomplex</td>
</tr>
<tr>
<th>Naam</th>
<td>Sluiscomplex</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Alle bij een sluis behorend water, begroeiing, verharding en gebouwen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/sluiscomplex">https://definities.geostandaarden.nl/ibro/id/begrip/sluiscomplex</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_complex">Complex</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_industrieel_complex">
<h5>IndustrieelComplex</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#IndustrieelComplex</td>
</tr>
<tr>
<th>Naam</th>
<td>IndustrieelComplex</td>
</tr>
<tr>
<th>Alias</th>
<td>Industrieel complex</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Alle bij een industriële locatie behorende begroeiing, verharding en gebouwen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/industrieel_complex">https://definities.geostandaarden.nl/ibro/id/begrip/industrieel_complex</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_complex">Complex</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_schoolterrein">
<h5>Schoolterrein</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Schoolterrein</td>
</tr>
<tr>
<th>Naam</th>
<td>Schoolterrein</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMBOR 2025</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een beheervak dat het gebied dat aan een school toebehoort begrenst, bijvoorbeeld niet alleen het schoolgebouw, maar ook het omliggende schoolplein.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMBOR 2025</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/schoolterrein">https://definities.geostandaarden.nl/ibro/id/begrip/schoolterrein</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_complex">Complex</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_stuwcomplex">
<h5>Stuwcomplex</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Stuwcomplex</td>
</tr>
<tr>
<th>Naam</th>
<td>Stuwcomplex</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Alle bij een stuw behorend water, begroeiing, verharding en gebouwen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/stuwcomplex">https://definities.geostandaarden.nl/ibro/id/begrip/stuwcomplex</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_complex">Complex</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_gemaalcomplex">
<h5>Gemaalcomplex</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Gemaalcomplex</td>
</tr>
<tr>
<th>Naam</th>
<td>Gemaalcomplex</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Alle bij een gemaal behorend water, begroeiing, verharding en gebouwen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/gemaalcomplex">https://definities.geostandaarden.nl/ibro/id/begrip/gemaalcomplex</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_complex">Complex</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_coupurecomplex">
<h5>Coupurecomplex</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Coupurecomplex</td>
</tr>
<tr>
<th>Naam</th>
<td>Coupurecomplex</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Alle bij een coupure behorende begroeiing, verharding en gebouwen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/coupurecomplex">https://definities.geostandaarden.nl/ibro/id/begrip/coupurecomplex</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_complex">Complex</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_begraafplaats">
<h5>Begraafplaats</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Begraafplaats</td>
</tr>
<tr>
<th>Naam</th>
<td>Begraafplaats</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Besloten gebied waar lichamen van overleden personen worden begraven. Ook worden op begraafplaatsen urnen met as van gecremeerde lichamen bewaard.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMGeo 2.2</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Het betreft hier deels de bestaande populatie begraafplaats zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/begraafplaats">https://definities.geostandaarden.nl/ibro/id/begrip/begraafplaats</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_complex">Complex</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_havencomplex">
<h5>Havencomplex</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Havencomplex</td>
</tr>
<tr>
<th>Naam</th>
<td>Havencomplex</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Alle bij een haven behorend water, begroeiing, verharding en gebouwen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/havencomplex">https://definities.geostandaarden.nl/ibro/id/begrip/havencomplex</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_complex">Complex</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_gebruikszone_oppervlaktewater">
<h4>GebruikszoneOppervlaktewater</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#GebruikszoneOppervlaktewater</td>
</tr>
<tr>
<th>Naam</th>
<td>GebruikszoneOppervlaktewater</td>
</tr>
<tr>
<th>Alias</th>
<td>Gebruikszone oppervlaktewater</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Begrensd oppervlaktewatergebied dat een bepaald gebruik kent.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/gebruikszone_oppervlaktewater">https://definities.geostandaarden.nl/ibro/id/begrip/gebruikszone_oppervlaktewater</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_gebruikszone_oppervlaktewater_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_gebruikszone_oppervlaktewater_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>



<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_watersportzone">
<h5>Watersportzone</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Watersportzone</td>
</tr>
<tr>
<th>Naam</th>
<td>Watersportzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Begrensd oppervlaktewatergebied dat gebruikt wordt voor recreatieve watersport.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/watersport_zone">https://definities.geostandaarden.nl/ibro/id/begrip/watersport_zone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_gebruikszone_oppervlaktewater">GebruikszoneOppervlaktewater</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_visserijzone">
<h5>Visserijzone</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Visserijzone</td>
</tr>
<tr>
<th>Naam</th>
<td>Visserijzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Begrensd oppervlaktewatergebied dat gebruikt wordt voor professionele visserij.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/visserij_zone">https://definities.geostandaarden.nl/ibro/id/begrip/visserij_zone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_gebruikszone_oppervlaktewater">GebruikszoneOppervlaktewater</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_vaarwegzone">
<h5>Vaarwegzone</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Vaarwegzone</td>
</tr>
<tr>
<th>Naam</th>
<td>Vaarwegzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Begrensd oppervlaktewatergebied dat gebruikt wordt voor transport middels scheepvaart.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/vaarwegzone">https://definities.geostandaarden.nl/ibro/id/begrip/vaarwegzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_gebruikszone_oppervlaktewater">GebruikszoneOppervlaktewater</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_kering">
<h4>Kering</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kering</td>
</tr>
<tr>
<th>Naam</th>
<td>Kering</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Voorziening met een kerende functie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Een waterkerende en/of scheidende, kunstmatige of natuurlijke hoogte of hooggelegen gronden inclusief de daarin aanwezige waterkerende elementen.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/kering">https://definities.geostandaarden.nl/ibro/id/begrip/kering</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie functioneel gebied type kering zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_kering_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_kering_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>



<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_waterkering">
<h5>Waterkering</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Waterkering</td>
</tr>
<tr>
<th>Naam</th>
<td>Waterkering</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Voorziening bedoeld om water te keren.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/waterkering">https://definities.geostandaarden.nl/ibro/id/begrip/waterkering</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_kering">Kering</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_waterkering_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_waterkering_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_grondkering">
<h5>Grondkering</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Grondkering</td>
</tr>
<tr>
<th>Naam</th>
<td>Grondkering</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Voorziening bedoeld om grond te keren.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/grondkering">https://definities.geostandaarden.nl/ibro/id/begrip/grondkering</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_kering">Kering</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_grondkering_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_LineString"> GM_LineString</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_grondkering_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_luchtvaartzone">
<h4>Luchtvaartzone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Luchtvaartzone</td>
</tr>
<tr>
<th>Naam</th>
<td>Luchtvaartzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Functionele ruimte die in gebruik is voor luchtvaart.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/luchtvaartzone">https://definities.geostandaarden.nl/ibro/id/begrip/luchtvaartzone</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populaties van de verschillende type luchtvaartzones zoals deze zijn opgenomen in de basisregistratie (grootschalige) topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_luchtvaartzone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_luchtvaartzone_attribuutsoort_naam">naam</a>
</td>
<td>
Naam van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_luchtvaartzone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_luchtvaartzone_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Breed geaccepteerde benaming van een zone zoals deze door de eigenaar is toegekend of zoals deze in de volksmond bekend staat.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>



<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_luchthaven">
<h5>Luchthaven</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Luchthaven</td>
</tr>
<tr>
<th>Naam</th>
<td>Luchthaven</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Vliegveld voor verkeersvliegtuigen met groot, effen terrein met al dan niet verharde banen, waar vliegtuigen kunnen opstijgen en landen, eventueel met accommodatie voor ontvangst en vertrek van passagiers en verzending van goederen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/luchthaven">https://definities.geostandaarden.nl/ibro/id/begrip/luchthaven</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_luchtvaartzone">Luchtvaartzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_baan_voor_vliegverkeer">
<h5>BaanVoorVliegverkeer</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#BaanVoorVliegverkeer</td>
</tr>
<tr>
<th>Naam</th>
<td>BaanVoorVliegverkeer</td>
</tr>
<tr>
<th>Alias</th>
<td>Baan voor vliegverkeer</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Baan uitsluitend bedoeld voor vliegverkeer.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/baan_voor_vliegverkeer">https://definities.geostandaarden.nl/ibro/id/begrip/baan_voor_vliegverkeer</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_luchtvaartzone">Luchtvaartzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_oeverzone">
<h4>Oeverzone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Oeverzone</td>
</tr>
<tr>
<th>Naam</th>
<td>Oeverzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebied op de grens van water en land waar het dynamisch samenspel van land en water plaatsvindt, lopend van waterpeil tot insteek.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>In een later stadium zullen registratieregels worden opgesteld waarin een nadere invulling wordt gegeven aan de interpretatie die aan oeverzone moet worden gegeven. Ook zal dan gedetailleerder worden vastgelegd welke oeverzones in de registratie worden opgenomen. Het is niet de bedoeling om alle waterkanten verplicht te voorzien van een oeverzone. Het betreft het gedeelte van de oever dat bij het voorgeschreven waterpeil droog ligt.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/oeverzone">https://definities.geostandaarden.nl/ibro/id/begrip/oeverzone</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie ondersteunend waterdeel, type oever, slootkant zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_oeverzone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_oeverzone_attribuutsoort_indicatie_natuurvriendelijke_oever">indicatieNatuurvriendelijkeOever</a>
</td>
<td>
Deze oeverzone is al dan niet een door de mens ingericht gebied langs oppervlaktewater waarbij de ontwikkeling van natuur, landschap en ecologie expliciet wordt gestimuleerd.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_oeverzone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_oeverzone_attribuutsoort_indicatie_natuurvriendelijke_oever">
<h6>indicatieNatuurvriendelijkeOever</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#indicatieNatuurvriendelijkeOever</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatieNatuurvriendelijkeOever</td>
</tr>
<tr>
<th>Alias</th>
<td>indicatie natuurvriendelijke oever</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Deze oeverzone is al dan niet een door de mens ingericht gebied langs oppervlaktewater waarbij de ontwikkeling van natuur, landschap en ecologie expliciet wordt gestimuleerd.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_recreatiezone">
<h4>Recreatiezone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Recreatiezone</td>
</tr>
<tr>
<th>Naam</th>
<td>Recreatiezone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Functionele ruimte die in gebruik is voor openlucht recreatie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMGeo 2.2</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/recreatiezone">https://definities.geostandaarden.nl/ibro/id/begrip/recreatiezone</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier deels de bestaande populatie typen recreatie zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_recreatiezone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van het object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_recreatiezone_attribuutsoort_naam">naam</a>
</td>
<td>
Naam van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_recreatiezone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van het object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_recreatiezone_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Breed geaccepteerde benaming van een zone zoals deze door de eigenaar is toegekend of zoals deze in de volksmond bekend staat.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>



<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_camping">
<h5>Camping</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Camping</td>
</tr>
<tr>
<th>Naam</th>
<td>Camping</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geheel van begroeiing, verharding en gebouwen, bedoeld voor tijdelijk verblijf in kampeermiddel.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/camping">https://definities.geostandaarden.nl/ibro/id/begrip/camping</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_recreatiezone">Recreatiezone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_speeltuin">
<h5>Speeltuin</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Speeltuin</td>
</tr>
<tr>
<th>Naam</th>
<td>Speeltuin</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geheel van speelwerktuigen, begroeiing, verharding en gebouwen, bedoeld als speelplaats voor kinderen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/speeltuin">https://definities.geostandaarden.nl/ibro/id/begrip/speeltuin</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_recreatiezone">Recreatiezone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_park">
<h5>Park</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Park</td>
</tr>
<tr>
<th>Naam</th>
<td>Park</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Landschappelijk ingericht terrein, met begroeiing, verharding, water en gebouwen, bedoeld als recreatieve voorziening.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/park">https://definities.geostandaarden.nl/ibro/id/begrip/park</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_recreatiezone">Recreatiezone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_volkstuin">
<h5>Volkstuin</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Volkstuin</td>
</tr>
<tr>
<th>Naam</th>
<td>Volkstuin</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geheel van begroeiing, verharding en gebouwen in gebruik als particuliere tuinen die niet bij de woning liggen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/volkstuin">https://definities.geostandaarden.nl/ibro/id/begrip/volkstuin</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_recreatiezone">Recreatiezone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_sportterrein">
<h5>Sportterrein</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Sportterrein</td>
</tr>
<tr>
<th>Naam</th>
<td>Sportterrein</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geheel van begroeiing, verharding en gebouwen bestemd voor sportbeoefening.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/sportterrein">https://definities.geostandaarden.nl/ibro/id/begrip/sportterrein</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_recreatiezone">Recreatiezone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_bungalowpark">
<h5>Bungalowpark</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bungalowpark</td>
</tr>
<tr>
<th>Naam</th>
<td>Bungalowpark</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geheel van begroeiing, verharding en gebouwen, bedoeld voor niet-permanente bewoning.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/bungalowpark">https://definities.geostandaarden.nl/ibro/id/begrip/bungalowpark</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_recreatiezone">Recreatiezone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_reducering">
<h4>Reducering</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Reducering</td>
</tr>
<tr>
<th>Naam</th>
<td>Reducering</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Voorziening om bepaalde effecten van omgevingsfactoren te verminderen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/reducering">https://definities.geostandaarden.nl/ibro/id/begrip/reducering</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de functionele vertaling van de bestaande populatie scheiding type geluidscherm zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_reducering_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_LineString"> GM_LineString</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_reducering_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>



<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_fijnstofreducering">
<h5>Fijnstofreducering</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Fijnstofreducering</td>
</tr>
<tr>
<th>Naam</th>
<td>Fijnstofreducering</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Voorziening bedoeld om verspreiding van fijnstof te verminderen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/fijnstofreducering">https://definities.geostandaarden.nl/ibro/id/begrip/fijnstofreducering</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_reducering">Reducering</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_geluidreducering">
<h5>Geluidreducering</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geluidreducering</td>
</tr>
<tr>
<th>Naam</th>
<td>Geluidreducering</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Voorziening bedoeld om geluidshinder in de buitenlucht te verminderen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/geluidreducering">https://definities.geostandaarden.nl/ibro/id/begrip/geluidreducering</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_reducering">Reducering</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_spoorzone">
<h4>Spoorzone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Spoorzone</td>
</tr>
<tr>
<th>Naam</th>
<td>Spoorzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Functionele ruimte die in gebruik is voor spoorwegen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/spoorzone">https://definities.geostandaarden.nl/ibro/id/begrip/spoorzone</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populaties van de verschillende type spoorzones zoals deze zijn opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_spoorzone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_spoorzone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>



<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_perron">
<h5>Perron</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Perron</td>
</tr>
<tr>
<th>Naam</th>
<td>Perron</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Verhoogde constructie langs een (spoor)rails voor het in- en uitstappen van passagiers of voor het laden en lossen van goederen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/perron">https://definities.geostandaarden.nl/ibro/id/begrip/perron</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_spoorzone">Spoorzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_spoorbaan">
<h5>Spoorbaan</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Spoorbaan</td>
</tr>
<tr>
<th>Naam</th>
<td>Spoorbaan</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebaand gedeelte voor het verkeer over rails.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/spoorbaan">https://definities.geostandaarden.nl/ibro/id/begrip/spoorbaan</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_spoorzone">Spoorzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_overweg">
<h5>Overweg</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Overweg</td>
</tr>
<tr>
<th>Naam</th>
<td>Overweg</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gelijkvloerse kruising van een weg met een (spoor)rails.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/overweg">https://definities.geostandaarden.nl/ibro/id/begrip/overweg</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_spoorzone">Spoorzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_emplacement">
<h5>Emplacement</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Emplacement</td>
</tr>
<tr>
<th>Naam</th>
<td>Emplacement</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Totaal aan sporen op een terrein ten behoeve van het rangeren en stallen van treinen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/emplacement">https://definities.geostandaarden.nl/ibro/id/begrip/emplacement</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_spoorzone">Spoorzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone">
<h4>VerkeerskundigFunctioneleZone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#VerkeerskundigFunctioneleZone</td>
</tr>
<tr>
<th>Naam</th>
<td>VerkeerskundigFunctioneleZone</td>
</tr>
<tr>
<th>Alias</th>
<td>Verkeerskundig functionele zone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Functionele ruimte die een verkeerskundige functie kent.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/verkeerskundige_functionele_zone">https://definities.geostandaarden.nl/ibro/id/begrip/verkeerskundige_functionele_zone</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier deels de bestaande populaties van de verschillende typeringen zoals deze zijn opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone_attribuutsoort_naam">naam</a>
</td>
<td>
Naam van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Breed geaccepteerde benaming van een zone zoals deze door de eigenaar is toegekend of zoals deze in de volksmond bekend staat.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>



<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_tankstation">
<h5>Tankstation</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Tankstation</td>
</tr>
<tr>
<th>Naam</th>
<td>Tankstation</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geheel van installaties, verharding en gebouwen bedoeld voor de verkoop van brandstoffen of energie voor voertuigen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/tankstation">https://definities.geostandaarden.nl/ibro/id/begrip/tankstation</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone">VerkeerskundigFunctioneleZone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_inrit">
<h5>Inrit</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Inrit</td>
</tr>
<tr>
<th>Naam</th>
<td>Inrit</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geeft toegang tot een bestemmingsdoel.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/inrit">https://definities.geostandaarden.nl/ibro/id/begrip/inrit</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone">VerkeerskundigFunctioneleZone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_parkeerplaats">
<h5>Parkeerplaats</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Parkeerplaats</td>
</tr>
<tr>
<th>Naam</th>
<td>Parkeerplaats</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Parkeergelegenheid voor het parkeren van meerdere voertuigen in de openlucht met een aparte toegang vanaf de doorgaande weg.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/parkeerplaats">https://definities.geostandaarden.nl/ibro/id/begrip/parkeerplaats</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone">VerkeerskundigFunctioneleZone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_halteplaats">
<h5>Halteplaats</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Halteplaats</td>
</tr>
<tr>
<th>Naam</th>
<td>Halteplaats</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Het geheel van voorzieningen bedoeld als stopplaats voor voertuigen van het openbaar vervoer.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/halteplaats">https://definities.geostandaarden.nl/ibro/id/begrip/halteplaats</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone">VerkeerskundigFunctioneleZone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_overstapplaats">
<h5>Overstapplaats</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Overstapplaats</td>
</tr>
<tr>
<th>Naam</th>
<td>Overstapplaats</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Voorziening waar men kan overstappen tussen modaliteiten of netwerken.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/overstapplaats">https://definities.geostandaarden.nl/ibro/id/begrip/overstapplaats</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone">VerkeerskundigFunctioneleZone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_verzorgingsplaats">
<h5>Verzorgingsplaats</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verzorgingsplaats</td>
</tr>
<tr>
<th>Naam</th>
<td>Verzorgingsplaats</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Langs de weg gelegen parkeergelegenheid, met inbegrip van de daarbij behorende verharde en onverharde banen en een of meer voorzieningen ten behoeve van reizigers en/of voertuigen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/verzorgingsplaats">https://definities.geostandaarden.nl/ibro/id/begrip/verzorgingsplaats</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone">VerkeerskundigFunctioneleZone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_snellaadstation">
<h5>Snellaadstation</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Snellaadstation</td>
</tr>
<tr>
<th>Naam</th>
<td>Snellaadstation</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Infrastructuurelement, doorgaans langs autosnelwegen, dat in elektrische energie voorziet om elektrische plug-invoertuigen op te laden in een relatief korte tijd.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/snellaadstation">https://definities.geostandaarden.nl/ibro/id/begrip/snellaadstation</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone">VerkeerskundigFunctioneleZone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_tolplaats">
<h5>Tolplaats</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Tolplaats</td>
</tr>
<tr>
<th>Naam</th>
<td>Tolplaats</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geheel van installaties, verharding en gebouwen waar betaald moet worden voor toegang tot de weg.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/tolplaats">https://definities.geostandaarden.nl/ibro/id/begrip/tolplaats</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone">VerkeerskundigFunctioneleZone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_knooppunt">
<h5>Knooppunt</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Knooppunt</td>
</tr>
<tr>
<th>Naam</th>
<td>Knooppunt</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Wegknoop van twee stroomwegen waartussen ongelijkvloerse uitwisseling mogelijk is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/knooppunt">https://definities.geostandaarden.nl/ibro/id/begrip/knooppunt</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone">VerkeerskundigFunctioneleZone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_parkeervlak">
<h5>Parkeervlak</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Parkeervlak</td>
</tr>
<tr>
<th>Naam</th>
<td>Parkeervlak</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Parkeergelegenheid bestemd voor het parkeren van één of meerdere voertuigen direct langs de doorgaande weg gelegen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/parkeervlak">https://definities.geostandaarden.nl/ibro/id/begrip/parkeervlak</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone">VerkeerskundigFunctioneleZone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_woonerf">
<h5>Woonerf</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Woonerf</td>
</tr>
<tr>
<th>Naam</th>
<td>Woonerf</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Wegdeel waar de verblijfsfunctie (lopen, spelen, ontmoeten enzovoorts) prioriteit heeft boven de verkeersfunctie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/woonerf">https://definities.geostandaarden.nl/ibro/id/begrip/woonerf</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone">VerkeerskundigFunctioneleZone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_waterbergingsgebied">
<h4>Waterbergingsgebied</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Waterbergingsgebied</td>
</tr>
<tr>
<th>Naam</th>
<td>Waterbergingsgebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Waterwet</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebied, niet zijnde een oppervlaktewaterlichaam of onderdeel daarvan, dat dient ter verruiming van de bergingscapaciteit van een of meer watersystemen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Waterwet</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Een wadi is een voorbeeld van een waterbergingsgebied.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/waterbergingsgebied">https://definities.geostandaarden.nl/ibro/id/begrip/waterbergingsgebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_waterbergingsgebied_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_waterbergingsgebied_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_wegzone">
<h4>Wegzone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wegzone</td>
</tr>
<tr>
<th>Naam</th>
<td>Wegzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Functionele ruimte die in gebruik is voor weginrichting.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/wegzone">https://definities.geostandaarden.nl/ibro/id/begrip/wegzone</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populaties van de verschillende type wegzones zoals deze zijn opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_wegzone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_wegzone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>



<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_verkeersdrempel">
<h5>Verkeersdrempel</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verkeersdrempel</td>
</tr>
<tr>
<th>Naam</th>
<td>Verkeersdrempel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Verhoging in een regionale rijbaan, bedoeld om het gemotoriseerde verkeer met een lage snelheid te laten rijden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/verkeersdrempel">https://definities.geostandaarden.nl/ibro/id/begrip/verkeersdrempel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_wegzone">Wegzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_wildrooster">
<h5>Wildrooster</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wildrooster</td>
</tr>
<tr>
<th>Naam</th>
<td>Wildrooster</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Horizontaal raamwerk dat dient om wild de doorgang te beletten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/wildrooster">https://definities.geostandaarden.nl/ibro/id/begrip/wildrooster</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_wegzone">Wegzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_berm">
<h5>Berm</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Berm</td>
</tr>
<tr>
<th>Naam</th>
<td>Berm</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Strook grond langs een weg of spoorweg bedoeld voor het uitwijken van voertuigen, het scheiden van verkeerstromen, het plaatsen van verkeersondersteunend meubiliar, afwatering en/of het verbinden van zones met ecologische infrastructurele waarden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/berm">https://definities.geostandaarden.nl/ibro/id/begrip/berm</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_wegzone">Wegzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_verkeerseiland">
<h5>Verkeerseiland</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verkeerseiland</td>
</tr>
<tr>
<th>Naam</th>
<td>Verkeerseiland</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Weggedeelte van beperkte omvang, uitgevoerd als een verhoging of wegmarkering, dat wordt omsloten door rijbanen of rijstroken en als doel heeft verkeersstromen te scheiden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/verkeerseiland">https://definities.geostandaarden.nl/ibro/id/begrip/verkeerseiland</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_functionele_ruimten_objecttype_wegzone">Wegzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>








## Domein Registratieve ruimten
![Registratieve ruimten](data/media/registratieve_ruimten.png "Domein Registratieve ruimten")

### Objecttypen


<section id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_woonplaats">
<h4>Woonplaats</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Woonplaats</td>
</tr>
<tr>
<th>Naam</th>
<td>Woonplaats</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Door het bevoegde gemeentelijke orgaan als zodanig aangewezen en van een naam voorzien gedeelte van het grondgebied van de gemeente.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Artikel 1 Wet basisregistratie adressen en gebouwen</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Een woonplaats valt altijd volledig binnen een gemeente. De geometrie van alle woonplaatsen moeten het Europese deel van het grondgebied van Nederland op land volledig bedekken. Woonplaatsen mogen niet overlappen.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/woonplaats">https://definities.geostandaarden.nl/ibro/id/begrip/woonplaats</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie zoals opgenomen in de basisregistratie adressen en gebouwen.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_woonplaats_attribuutsoort_formele_naam">formeleNaam</a>
</td>
<td>
Naam van een object zoals formeel benoemd.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_woonplaats_attribuutsoort_alternatieve_naam">alternatieveNaam</a>
</td>
<td>
Alternatieve benaming van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_woonplaats_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_keuze_datatype__vlak_of_multivlak">VlakOfMultivlak</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_woonplaats_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.
</td>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_gemeentegebied">Gemeentegebied (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_woonplaats_attribuutsoort_formele_naam">
<h6>formeleNaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#formeleNaam</td>
</tr>
<tr>
<th>Naam</th>
<td>formeleNaam</td>
</tr>
<tr>
<th>Alias</th>
<td>formele naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam van een object zoals formeel benoemd.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Benaming van een door het gemeentebestuur aangewezen woonplaats.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_woonplaats_attribuutsoort_alternatieve_naam">
<h6>alternatieveNaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#alternatieveNaam</td>
</tr>
<tr>
<th>Naam</th>
<td>alternatieveNaam</td>
</tr>
<tr>
<th>Alias</th>
<td>alternatieve naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Alternatieve benaming van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Alternatieve benaming van een woonplaats zoals deze bekend staat in het Fries (bij een formele benaming in het Nederlands) of in het Nederlands (bij een formele benaming in het Fries).</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_woonplaats_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_woonplaats_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.
</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_wijk">
<h4>Wijk</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wijk</td>
</tr>
<tr>
<th>Naam</th>
<td>Wijk</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Aaneengesloten gedeelte van het grondgebied van een gemeente, waarvan de grenzen zo veel mogelijk zijn gebaseerd op sociaalgeografische kenmerken.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>GFO Basisgegevens</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Een wijk valt altijd volledig binnen een gemeente. De geometrie van alle wijken moeten het Europese deel van het grondgebied van Nederland op land volledig bedekken. Wijken mogen niet overlappen.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/wijk">https://definities.geostandaarden.nl/ibro/id/begrip/wijk</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Wijken zijn op dit moment nog geen onderdeel van een basisregistratie. Wel hebben alle gemeenten (in overleg met het CBS) wijken vastgesteld. Deze zijn landelijk opgenomen in de WBI (wijk- en buurtindeling) die momenteel wordt beheerd door het CBS. Door de opname van wijken in de objectenregistratie ontstaat een formele vastlegging van wijken.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_wijk_attribuutsoort_wijkcode">wijkcode</a>
</td>
<td>
Codering van een wijk zoals deze door het CBS wordt gebruikt.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_wijk_attribuutsoort_wijknaam">wijknaam</a>
</td>
<td>
Naam die aan een wijk is toegekend in een daartoe strekkend formeel gemeentelijk besluit.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_wijk_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_keuze_datatype__vlak_of_multivlak">VlakOfMultivlak</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_wijk_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_gemeentegebied">Gemeentegebied (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_wijk_attribuutsoort_wijkcode">
<h6>wijkcode</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#wijkcode</td>
</tr>
<tr>
<th>Naam</th>
<td>wijkcode</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Codering van een wijk zoals deze door het CBS wordt gebruikt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_wijk_attribuutsoort_wijknaam">
<h6>wijknaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#wijknaam</td>
</tr>
<tr>
<th>Naam</th>
<td>wijknaam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam die aan een wijk is toegekend in een daartoe strekkend formeel gemeentelijk besluit.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_wijk_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_wijk_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_buurt">
<h4>Buurt</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Buurt</td>
</tr>
<tr>
<th>Naam</th>
<td>Buurt</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Aaneengesloten gedeelte van een wijk, waarvan de grenzen zo veel mogelijk gebaseerd zijn op topografische elementen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>GFO Basisgegevens</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Een buurt valt altijd volledig binnen een wijk. De geometrie van alle buurten moeten het Europese deel van het grondgebied van Nederland op land volledig bedekken. Buurten mogen niet overlappen.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/buurt">https://definities.geostandaarden.nl/ibro/id/begrip/buurt</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Buurten zijn op dit moment nog geen onderdeel van een basisregistratie. Wel hebben alle gemeenten (in overleg met het CBS) buurten vastgesteld. Deze zijn landelijk opgenomen in de WBI (wijk- en buurtindeling) die momenteel wordt beheerd door het CBS. Door de opname van buurten in de objectenregistratie ontstaat een formele vastlegging van buurten.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_buurt_attribuutsoort_buurtcode">buurtcode</a>
</td>
<td>
Codering van een buurt zoals deze door het CBS wordt gebruikt.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_buurt_attribuutsoort_buurtnaam">buurtnaam</a>
</td>
<td>
Naam die aan een buurt is toegekend in een daartoe strekkend formeel gemeentelijk besluit.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_buurt_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_keuze_datatype__vlak_of_multivlak">VlakOfMultivlak</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_buurt_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_wijk">Wijk</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_buurt_attribuutsoort_buurtcode">
<h6>buurtcode</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#buurtcode</td>
</tr>
<tr>
<th>Naam</th>
<td>buurtcode</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Codering van een buurt zoals deze door het CBS wordt gebruikt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_buurt_attribuutsoort_buurtnaam">
<h6>buurtnaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#buurtnaam</td>
</tr>
<tr>
<th>Naam</th>
<td>buurtnaam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam die aan een buurt is toegekend in een daartoe strekkend formeel gemeentelijk besluit.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_buurt_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_buurt_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_subbuurt">
<h4>Subbuurt</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Subbuurt</td>
</tr>
<tr>
<th>Naam</th>
<td>Subbuurt</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een subbuurt is, zo mogelijk, een samenhangend sociaal geheel, omsloten door natuurlijke grenzen (zoals brede wegen en waterlopen). Samen vormen zij een Buurt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/subbuurt">https://definities.geostandaarden.nl/ibro/id/begrip/subbuurt</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_subbuurt_attribuutsoort_subbuurtcode">subbuurtcode</a>
</td>
<td>
Codering van een subbuurt.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_subbuurt_attribuutsoort_subbuurtnaam">subbuurtnaam</a>
</td>
<td>
Naam die aan een subbuurt is toegekend in een daartoe strekkend formeel gemeentelijk besluit.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_subbuurt_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_keuze_datatype__vlak_of_multivlak">VlakOfMultivlak</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_subbuurt_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_buurt">Buurt</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_subbuurt_attribuutsoort_subbuurtcode">
<h6>subbuurtcode</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#subbuurtcode</td>
</tr>
<tr>
<th>Naam</th>
<td>subbuurtcode</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Codering van een subbuurt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_subbuurt_attribuutsoort_subbuurtnaam">
<h6>subbuurtnaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#subbuurtnaam</td>
</tr>
<tr>
<th>Naam</th>
<td>subbuurtnaam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam die aan een subbuurt is toegekend in een daartoe strekkend formeel gemeentelijk besluit.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_subbuurt_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_subbuurt_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_subbuurtdeel">
<h4>Subbuurtdeel</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Subbuurtdeel</td>
</tr>
<tr>
<th>Naam</th>
<td>Subbuurtdeel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Subbuurtdeel ontstaat als subbuurten te groot zijn voor technisch en administratief beheer. Een subbuurtdeel is, zo mogelijk, een samenhangend sociaal geheel, omsloten door natuurlijke grenzen (zoals brede wegen en waterlopen). Samen vormen zij een Subbuurt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/subbuurtdeel">https://definities.geostandaarden.nl/ibro/id/begrip/subbuurtdeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_subbuurtdeel_attribuutsoort_subbuurtdeelcode">subbuurtdeelcode</a>
</td>
<td>
Codering van een subbuurtdeel.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_subbuurtdeel_attribuutsoort_subbuurtdeelnaam">subbuurtdeelnaam</a>
</td>
<td>
Naam die aan een subbuurtdeel is toegekend in een daartoe strekkend formeel gemeentelijk besluit.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_subbuurtdeel_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_keuze_datatype__vlak_of_multivlak">VlakOfMultivlak</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_subbuurtdeel_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_subbuurt">Subbuurt</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_subbuurtdeel_attribuutsoort_subbuurtdeelcode">
<h6>subbuurtdeelcode</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#subbuurtdeelcode</td>
</tr>
<tr>
<th>Naam</th>
<td>subbuurtdeelcode</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Codering van een subbuurtdeel.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_subbuurtdeel_attribuutsoort_subbuurtdeelnaam">
<h6>subbuurtdeelnaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#subbuurtdeelnaam</td>
</tr>
<tr>
<th>Naam</th>
<td>subbuurtdeelnaam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam die aan een subbuurtdeel is toegekend in een daartoe strekkend formeel gemeentelijk besluit.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_subbuurtdeel_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_subbuurtdeel_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_openbare_ruimte">
<h4>OpenbareRuimte</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OpenbareRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>OpenbareRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>Openbare ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Door het bevoegde gemeentelijke orgaan als zodanig aangewezen en van een naam voorziene buitenruimte die binnen één woonplaats is gelegen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Artikel 1 Wet basisregistratie adressen en gebouwen</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Openbare ruimten worden uitsluitend gekoppeld aan wegverbindingen en waterverbindingen door het bij deze verbindingen opnemen van een verwijzing naar de identificatiecode van de openbare ruimte waarbinnen deze verbinding is gelegen. De naamgeving van de andere objecttypen die momenteel nog van een formele openbare ruimte naam kunnen worden voorzien, wordt geregistreerd door het op vrijwillige basis bij deze objecttypen opnemen van een eigenschap “naam”. Het gaat daarbij om spoorverbindingen, kunstwerken, geografische gebieden en functionele gebieden. Door deze wijze van koppeling aan wegverbindingen en waterverbindingen worden openbare ruimten ook geometrisch vindbaar. Naam van een openbare ruimte wordt in de dagelijkse praktijk vaak straatnaam genoemd.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/openbare_ruimte">https://definities.geostandaarden.nl/ibro/id/begrip/openbare_ruimte</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>De populatie van openbare ruimten, zoals deze momenteel is opgenomen in de basisregistratie adressen en gebouwen, wijzigt als gevolg van de inperking van het aantal typen objecten waaraan een formele benaming van een openbare ruimte kan worden gekoppeld.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_openbare_ruimte_attribuutsoort_formele_naam">formeleNaam</a>
</td>
<td>
Naam van een object zoals formeel benoemd.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_openbare_ruimte_attribuutsoort_alternatieve_naam">alternatieveNaam</a>
</td>
<td>
Alternatieve benaming van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_openbare_ruimte_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_openbare_ruimte_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_woonplaats">Woonplaats</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_openbare_ruimte_attribuutsoort_formele_naam">
<h6>formeleNaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#formeleNaam</td>
</tr>
<tr>
<th>Naam</th>
<td>formeleNaam</td>
</tr>
<tr>
<th>Alias</th>
<td>formele naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam van een object zoals formeel benoemd.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Naam die aan een openbare ruimte is toegekend in een daartoe strekkend formeel gemeentelijk besluit.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_openbare_ruimte_attribuutsoort_alternatieve_naam">
<h6>alternatieveNaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#alternatieveNaam</td>
</tr>
<tr>
<th>Naam</th>
<td>alternatieveNaam</td>
</tr>
<tr>
<th>Alias</th>
<td>alternatieve naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Alternatieve benaming van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Alternatieve benaming van een openbare ruimte zoals deze breed is geaccepteerd in de volksmond of zoals deze bekend staat in het Fries (bij een formele benaming in het Nederlands) of in het Nederlands (bij een formele benaming in het Fries).</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_openbare_ruimte_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_openbare_ruimte_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_nummeraanduiding">
<h4>Nummeraanduiding</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Nummeraanduiding</td>
</tr>
<tr>
<th>Naam</th>
<td>Nummeraanduiding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Door het bevoegde gemeentelijke orgaan als zodanig toegekende aanduiding van een verblijfsobject of een benoemde plaats.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Artikel 1 Wet basisregistraties adressen en gebouwen, Catalogus BAG 2018</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Nummeraanduiding maakt samen met woonplaats en openbare ruimte het officiële adres. Een nummeraanduiding is gelegen aan een openbare ruimte en heeft daartoe een verwijzing naar deze gerelateerde openbare ruimte.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/nummeraanduiding">https://definities.geostandaarden.nl/ibro/id/begrip/nummeraanduiding</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie zoals opgenomen in de basisregistratie adressen en gebouwen.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_huisnummer">huisnummer</a>
</td>
<td>
Een huisnummer is een door of namens het gemeentebestuur ten aanzien van een adresseerbaar object toegekende nummering.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Integer</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_huisletter">huisletter</a>
</td>
<td>
Een huisletter is een door of namens het gemeentebestuur ten aanzien van een adresseerbaar object toegekende toevoeging aan een huisnummer in de vorm van een alfanumeriek teken.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_huisnummertoevoeging">huisnummertoevoeging</a>
</td>
<td>
Een huisnummertoevoeging is een door of namens het gemeentebestuur ten aanzien van een adresseerbaar object toegekende nadere toevoeging aan een huisnummer of een combinatie van huisnummer en huisletter.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_postcode">postcode</a>
</td>
<td>
De postcode is een door PostNL vastgestelde code behorende bij een bepaalde combinatie van een straatnaam en een huisnummer.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_nummeraanduiding_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_woonplaats">Woonplaats</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_nummeraanduiding_relatiesoort_ligt_aan">ligtAan</a>
</td>
<td>
Object waaraan dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_openbare_ruimte">OpenbareRuimte</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_huisnummer">
<h6>huisnummer</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#huisnummer</td>
</tr>
<tr>
<th>Naam</th>
<td>huisnummer</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een huisnummer is een door of namens het gemeentebestuur ten aanzien van een adresseerbaar object toegekende nummering.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Catalogus BAG 2018</td>
</tr>
<tr>
<th>Toelichting</th>
<td>De gemeente voegt een huisnummer toe aan een adresseerbaar object. Een huisnummer is altijd een getal tussen 1 en 99999.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_huisletter">
<h6>huisletter</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#huisletter</td>
</tr>
<tr>
<th>Naam</th>
<td>huisletter</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een huisletter is een door of namens het gemeentebestuur ten aanzien van een adresseerbaar object toegekende toevoeging aan een huisnummer in de vorm van een alfanumeriek teken.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Catalogus BAG 2018</td>
</tr>
<tr>
<th>Toelichting</th>
<td>De gemeente kan een huisletter toevoegen aan een huisnummer. Een huisletter mag een hoofdletter of een kleine letter zijn.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_huisnummertoevoeging">
<h6>huisnummertoevoeging</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#huisnummertoevoeging</td>
</tr>
<tr>
<th>Naam</th>
<td>huisnummertoevoeging</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een huisnummertoevoeging is een door of namens het gemeentebestuur ten aanzien van een adresseerbaar object toegekende nadere toevoeging aan een huisnummer of een combinatie van huisnummer en huisletter.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Catalogus BAG 2018</td>
</tr>
<tr>
<th>Toelichting</th>
<td>De gemeente kan een huisnummertoevoeging toevoegen aan een huisnummer en een eventuele huisletter. Een huisnummertoevoeging bestaat uit 4 tekens en kan een combinatie zijn van hoofdletters, kleine letters en/of cijfers.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_postcode">
<h6>postcode</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#postcode</td>
</tr>
<tr>
<th>Naam</th>
<td>postcode</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>De postcode is een door PostNL vastgestelde code behorende bij een bepaalde combinatie van een straatnaam en een huisnummer.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Catalogus BAG 2018</td>
</tr>
<tr>
<th>Toelichting</th>
<td>De postcode is een door PostNL bepaalde code, die hoort bij een combinatie van een straatnaam en een huisnummer. Een postcode bestaat uit 4 cijfers en 2 letters. </td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_nummeraanduiding_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_nummeraanduiding_relatiesoort_ligt_aan">
<h6>ligtAan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtAan</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtAan</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt aan</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waaraan dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Catalogus BAG 2018</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_adresseerbaar_object">
<h4>AdresseerbaarObject</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#AdresseerbaarObject</td>
</tr>
<tr>
<th>Naam</th>
<td>AdresseerbaarObject</td>
</tr>
<tr>
<th>Alias</th>
<td>Adresseerbaar object</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een adresseerbaar object is een object waaraan formeel adressen kunnen en moeten worden toegekend.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op artikel 1 Wet basisregistratie adressen en gebouwen</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/adresseerbaar_object">https://definities.geostandaarden.nl/ibro/id/begrip/adresseerbaar_object</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_adresseerbaar_object_relatiesoort_heeft_als_hoofdadres">heeftAlsHoofdadres</a>
</td>
<td>
Een hoofdadres is het primaire adres van een adresseerbaar object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_nummeraanduiding">Nummeraanduiding</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_adresseerbaar_object_relatiesoort_heeft_als_nevenadres">heeftAlsNevenadres</a>
</td>
<td>
Een nevenadres is een aanvullend adres voor een adresseerbaar object. Een nevenadres mag alleen worden toegekend wanneer er meerdere relevante toegangen zijn en een toegang een wezenlijke betekenis heeft bij het aanduiden van het object, zoals een leveranciersingang. Met het nevenadres wordt expliciet niet een bepaald gedeelte van een adresseerbaar object aangeduid.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_nummeraanduiding">Nummeraanduiding</a>
</td>
<td>
0..*</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_adresseerbaar_object_relatiesoort_heeft_als_hoofdadres">
<h6>heeftAlsHoofdadres</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#heeftAlsHoofdadres</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftAlsHoofdadres</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft als hoofdadres</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een hoofdadres is het primaire adres van een adresseerbaar object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Catalogus BAG 2018</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..1</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_adresseerbaar_object_relatiesoort_heeft_als_nevenadres">
<h6>heeftAlsNevenadres</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#heeftAlsNevenadres</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftAlsNevenadres</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft als nevenadres</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een nevenadres is een aanvullend adres voor een adresseerbaar object. Een nevenadres mag alleen worden toegekend wanneer er meerdere relevante toegangen zijn en een toegang een wezenlijke betekenis heeft bij het aanduiden van het object, zoals een leveranciersingang. Met het nevenadres wordt expliciet niet een bepaald gedeelte van een adresseerbaar object aangeduid.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Catalogus BAG 2018</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Een extra adres. Een nevenadres mag alleen worden gegeven als er meer belangrijke toegangen zijn en een toegang een echte betekenis heeft, zoals een leveranciersingang. Een nevenadres is een eigenschap van het hele adresseerbare object en niet van alleen een deel hiervan. Een nevenadres is dus op dezelfde plek als het hoofdadres. Meestal wordt aan elk adresseerbaar object maar 1 adres gegeven.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..1</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_benoemde_plaats">
<h5>BenoemdePlaats</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#BenoemdePlaats</td>
</tr>
<tr>
<th>Naam</th>
<td>BenoemdePlaats</td>
</tr>
<tr>
<th>Alias</th>
<td>Benoemde plaats</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Door het bevoegde gemeentelijk orgaan als zodanig aangewezen delen van een terrein en/of water waarvan het belang is daaraan een adres toe te kennen en dat bedoeld is voor het permanent plaatsen van een niet direct en niet duurzaam met de aarde verbonden object, het permanent afmeren van een drijvend object of het permanent aanwezig zijn van publiek toegankelijke technische voorzieningen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op artikel 1 Wet basisregistratie adressen en gebouwen</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Door het hanteren van een generiek begrip benoemde plaats in plaats van standplaats en ligplaats, wordt het mogelijk ook andere objecten onder dit begrip te laten vallen. Van deze mogelijkheid is in eerste instantie gebruik gemaakt om ook onbemenste tankstations van een adres te kunnen voorzien. Door de wijziging van Benaming wordt ook de in de uitvoeringspraktijk bestaande verwarring met vergelijkbare begrippen in het kader van onder meer de Omgevingswet tegengegaan.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/benoemde_plaats">https://definities.geostandaarden.nl/ibro/id/begrip/benoemde_plaats</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>De populatie van standplaatsen en ligplaatsen, zoals deze momenteel is opgenomen in de basisregistratie adressen en gebouwen, wordt met de juiste typering opgenomen als benoemde plaats.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_adresseerbaar_object">AdresseerbaarObject</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_benoemde_plaats_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_benoemde_plaats_attribuutsoort_type_te_plaatsen_object">typeTePlaatsenObject</a>
</td>
<td>
Type van het object dat op de benoemde plaats is of kan worden geplaatst.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_enumeratie_type_te_plaatsen_object">TypeTePlaatsenObject</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_benoemde_plaats_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_objecttype_benoemde_plaats_attribuutsoort_type_te_plaatsen_object">
<h6>typeTePlaatsenObject</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#typeTePlaatsenObject</td>
</tr>
<tr>
<th>Naam</th>
<td>typeTePlaatsenObject</td>
</tr>
<tr>
<th>Alias</th>
<td>type te plaatsen object</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Type van het object dat op de benoemde plaats is of kan worden geplaatst.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
</section>






### Enumeraties

#### TypeTePlaatsenObject {#informatiemodel_imibro_conceptueel_domein_registratieve_ruimten_enumeratie_type_te_plaatsen_object}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeTePlaatsenObject</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeTePlaatsenObject</td>
</tr>
<tr>
<th>Alias</th>
<td>Type te plaatsen object</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Objecttypes waarvan plaatsing op een benoemde plaats bestemd kan worden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht waarden</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 75%"></colgroup>
<tbody>
<tr>
  <th>Waarde</th>
  <th>Definitie</th>
</tr>
<tr>
<td>
Drijvend object</td>
<td>
Constructief zelfstandig object dat met het water kan meebewegen.</td>
<tr>
<td>
Mobiel object</td>
<td>
Constructief zelfstandig object dat in zijn geheel kan worden verplaatst.</td>
<tr>
<td>
Onbemensd tankstation</td>
<td>
Geheel van installaties bedoeld voor de verkoop van brandstoffen of energie voor voertuigen, waarbij zich geen bij deze installaties betrokken gebouw bevindt.</td>
</tbody>
</table>


</section>



## Domein Geografische ruimten
![Geografische ruimten](data/media/geografische_ruimten.png "Domein Geografische ruimten")

### Objecttypen


<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_bebouwingskern">
<h4>Bebouwingskern</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bebouwingskern</td>
</tr>
<tr>
<th>Naam</th>
<td>Bebouwingskern</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geografische ruimte die gekenmerkt wordt door een concentratie van gebouwen en die vanuit besluitvorming, historie of in de volksmond bekend staat onder een bepaalde naam.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op definitie Plaats in BRT</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Met bebouwingskernen kan een algemeen toepasbaar onderscheid worden aangebracht tussen bebouwd gebied en het buitengebied. Tot het buitengebied kan dan worden gerekend al het gebied dat niet behoort tot een bebouwingskern, De bebouwingskern (zonder juridische status) moet niet worden verward met bebouwde kommen (die wel een juridische grondslag kennen in specifieke wetgeving). Hierbij kan worden gedacht aan de bebouwde kom in het kader van Wegenverkeerswet, Wegenwet, Wet natuurbescherming en Omgevingswet. De diversiteit in achterliggende doelstellingen van genoemde wetgeving maakt het op dit moment niet mogelijk te komen tot één uniform en breed bruikbaar begrip bebouwde kom. Deze bebouwde kommen maken dan ook geen onderdeel uit van IMIBRO. De regels voor de afbakening zullen worden vastgelegd in registratievoorschriften. Hierbij kan worden gedacht aan voorschriften dat alleen van een bebouwingskern sprake is bij aaneengesloten bebouwing waarbij de gebouwen maximaal 50 meter van elkaar liggen en deze minimaal 5 verschillende gebouwen met een verblijfsobject bevatten.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/bebouwingskern">https://definities.geostandaarden.nl/ibro/id/begrip/bebouwingskern</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>In de BRT zijn al plaatsen opgenomen. Deze zijn landelijk door het Kadaster bepaald. Plaatsen worden in de vorm van bebouwingskernen ook opgenomen in de objectenregistratie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_geografische_ruimte">GeografischeRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_bebouwingskern_attribuutsoort_naam">naam</a>
</td>
<td>
Naam van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_bebouwingskern_attribuutsoort_alternatieve_naam">alternatieveNaam</a>
</td>
<td>
Alternatieve benaming van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_bebouwingskern_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_keuze_datatype__vlak_of_multivlak">VlakOfMultivlak</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_bebouwingskern_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_gemeentegebied">Gemeentegebied (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_bebouwingskern_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Plaatselijke naam van een bebouwingskern zoals deze als woonplaats bekend is of bij het ontbreken daarvan zoals deze in het plaatselijk gebruik bekend staat.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_bebouwingskern_attribuutsoort_alternatieve_naam">
<h6>alternatieveNaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#alternatieveNaam</td>
</tr>
<tr>
<th>Naam</th>
<td>alternatieveNaam</td>
</tr>
<tr>
<th>Alias</th>
<td>alternatieve naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Alternatieve benaming van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Alternatieve benaming van een bebouwingskern zoals deze breed is geaccepteerd in de volksmond of zoals deze bekend staat in het Fries (bij een benaming in het Nederlands) of in het Nederlands (bij een benaming in het Fries).</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_bebouwingskern_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_bebouwingskern_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_buurtschap">
<h5>Buurtschap</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Buurtschap</td>
</tr>
<tr>
<th>Naam</th>
<td>Buurtschap</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Lintbebouwing of verspreid staande bebouwing in landelijk gebied met een zekere mate van sociale samenhang die gezamenlijk een bebouwingskern vormen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/buurtschap">https://definities.geostandaarden.nl/ibro/id/begrip/buurtschap</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_bebouwingskern">Bebouwingskern</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_deelkern">
<h5>Deelkern</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Deelkern</td>
</tr>
<tr>
<th>Naam</th>
<td>Deelkern</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Ruimtelijk van omliggende bebouwing te onderscheiden historische bebouwingskern, die is gelegen binnen een andere bebouwingskern.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/deelkern">https://definities.geostandaarden.nl/ibro/id/begrip/deelkern</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_bebouwingskern">Bebouwingskern</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_industriekern">
<h5>Industriekern</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Industriekern</td>
</tr>
<tr>
<th>Naam</th>
<td>Industriekern</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Van openbare wegen voorziene bebouwingskern die voor het grootste gedeelte bestaat uit gebouwen die gebruikt worden voor bedrijfsmatige activiteiten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/industriekern">https://definities.geostandaarden.nl/ibro/id/begrip/industriekern</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_bebouwingskern">Bebouwingskern</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_recreatiekern">
<h5>Recreatiekern</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Recreatiekern</td>
</tr>
<tr>
<th>Naam</th>
<td>Recreatiekern</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Bebouwingskern die voor het grootste gedeelte bestaat uit gebouwen die gebruikt worden voor (verblijfs)recreatie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/recreatiekern">https://definities.geostandaarden.nl/ibro/id/begrip/recreatiekern</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_bebouwingskern">Bebouwingskern</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_woonkern">
<h5>Woonkern</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Woonkern</td>
</tr>
<tr>
<th>Naam</th>
<td>Woonkern</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Van openbare wegen voorziene bebouwingskern die voor het grootste gedeelte bestaat uit gebouwen die gebruikt worden voor wonen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/woonkern">https://definities.geostandaarden.nl/ibro/id/begrip/woonkern</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_bebouwingskern">Bebouwingskern</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_stadsdeel">
<h5>Stadsdeel</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Stadsdeel</td>
</tr>
<tr>
<th>Naam</th>
<td>Stadsdeel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Binnen een andere bebouwingskern gelegen ruimtelijk samenhangend en van een overkoepelende naam voorzien gebied.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/stadsdeel">https://definities.geostandaarden.nl/ibro/id/begrip/stadsdeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_bebouwingskern">Bebouwingskern</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_gehucht">
<h5>Gehucht</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Gehucht</td>
</tr>
<tr>
<th>Naam</th>
<td>Gehucht</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Kleine bebouwingskern die bestaat uit een concentratie van aaneengesloten bebouwing.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/gehucht">https://definities.geostandaarden.nl/ibro/id/begrip/gehucht</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_bebouwingskern">Bebouwingskern</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_landschappelijk_gebied">
<h4>LandschappelijkGebied</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#LandschappelijkGebied</td>
</tr>
<tr>
<th>Naam</th>
<td>LandschappelijkGebied</td>
</tr>
<tr>
<th>Alias</th>
<td>Landschappelijk gebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geografische ruimte die een fysisch-geografische samenhang vertoont.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op Basisregistratie Topografie: Catalogus en Productspecificaties (versie 1.2.0.1)</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Het landschappelijk gebied is al dan niet begroeid, bebouwd of bedekt door water of wegen, waarbij de typering leidend is.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/landschappelijk_gebied">https://definities.geostandaarden.nl/ibro/id/begrip/landschappelijk_gebied</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie geografische gebieden zoals deze is opgenomen in de basisregistratie topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_geografische_ruimte">GeografischeRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_landschappelijk_gebied_attribuutsoort_naam">naam</a>
</td>
<td>
Naam van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_landschappelijk_gebied_attribuutsoort_alternatieve_naam">alternatieveNaam</a>
</td>
<td>
Alternatieve benaming van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_landschappelijk_gebied_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_landschappelijk_gebied_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Plaatselijke naam van een landschappelijk gebied zoals deze is vastgesteld of in het plaatselijk gebruik bekend staat.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_landschappelijk_gebied_attribuutsoort_alternatieve_naam">
<h6>alternatieveNaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#alternatieveNaam</td>
</tr>
<tr>
<th>Naam</th>
<td>alternatieveNaam</td>
</tr>
<tr>
<th>Alias</th>
<td>alternatieve naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Alternatieve benaming van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Alternatieve benaming van een landschappelijk gebied zoals deze breed is geaccepteerd in de volksmond of zoals deze bekend staat in het Fries (bij een benaming in het Nederlands) of in het Nederlands (bij een benaming in het Fries).</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_landschappelijk_gebied_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>



<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_duingebied">
<h5>Duingebied</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Duingebied</td>
</tr>
<tr>
<th>Naam</th>
<td>Duingebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebied bestaande uit verhogingen of heuvels van zand of fijne losse aarde opgeworpen door wind. Duingebieden grenzen aan zeestranden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/duingebied">https://definities.geostandaarden.nl/ibro/id/begrip/duingebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_landschappelijk_gebied">LandschappelijkGebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_strand">
<h5>Strand</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Strand</td>
</tr>
<tr>
<th>Naam</th>
<td>Strand</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Onbegroeide zandige kustvlakte op de overgang van zee met land en welke onder invloed staat van het zeewater en de wind.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/strand">https://definities.geostandaarden.nl/ibro/id/begrip/strand</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_landschappelijk_gebied">LandschappelijkGebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_heidegebied">
<h5>Heidegebied</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Heidegebied</td>
</tr>
<tr>
<th>Naam</th>
<td>Heidegebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebied dat overwegend met heide begroeid is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/heidegebied">https://definities.geostandaarden.nl/ibro/id/begrip/heidegebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_landschappelijk_gebied">LandschappelijkGebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_watergebied">
<h5>Watergebied</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Watergebied</td>
</tr>
<tr>
<th>Naam</th>
<td>Watergebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebied dat overwegend met water bedekt is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/watergebied">https://definities.geostandaarden.nl/ibro/id/begrip/watergebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_landschappelijk_gebied">LandschappelijkGebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_polder">
<h5>Polder</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Polder</td>
</tr>
<tr>
<th>Naam</th>
<td>Polder</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebied dat door één of meerdere waterkeringen is omgeven en waarvan de waterstand kunstmatig geregeld kan worden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/polder">https://definities.geostandaarden.nl/ibro/id/begrip/polder</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_landschappelijk_gebied">LandschappelijkGebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_cultuurlandschap">
<h5>Cultuurlandschap</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Cultuurlandschap</td>
</tr>
<tr>
<th>Naam</th>
<td>Cultuurlandschap</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebied dat overwegend een agrarisch gebruik kent.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/cultuurlandschap">https://definities.geostandaarden.nl/ibro/id/begrip/cultuurlandschap</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_landschappelijk_gebied">LandschappelijkGebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_bosgebied">
<h5>Bosgebied</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bosgebied</td>
</tr>
<tr>
<th>Naam</th>
<td>Bosgebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebied dat overwegend met bos begroeid is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/bosgebied">https://definities.geostandaarden.nl/ibro/id/begrip/bosgebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_landschappelijk_gebied">LandschappelijkGebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_zandverstuiving">
<h5>Zandverstuiving</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Zandverstuiving</td>
</tr>
<tr>
<th>Naam</th>
<td>Zandverstuiving</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebied met overwegend levend stuifzand, dus met zo weinig begroeiing dat het zand door de wind en het water verstoven wordt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/zandverstuiving">https://definities.geostandaarden.nl/ibro/id/begrip/zandverstuiving</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_landschappelijk_gebied">LandschappelijkGebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_eiland">
<h5>Eiland</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Eiland</td>
</tr>
<tr>
<th>Naam</th>
<td>Eiland</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Landoppervlak dat aan alle kanten omringd is door water.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/eiland">https://definities.geostandaarden.nl/ibro/id/begrip/eiland</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_landschappelijk_gebied">LandschappelijkGebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_landgoed">
<h5>Landgoed</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Landgoed</td>
</tr>
<tr>
<th>Naam</th>
<td>Landgoed</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Aaneengesloten en samenhangend gebied met akkerlanden, graslanden, bossen en of tuinen en gebouwen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/landgoed">https://definities.geostandaarden.nl/ibro/id/begrip/landgoed</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_landschappelijk_gebied">LandschappelijkGebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_reliefzone">
<h4>Reliefzone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Reliefzone</td>
</tr>
<tr>
<th>Naam</th>
<td>Reliefzone</td>
</tr>
<tr>
<th>Alias</th>
<td>Reliëfzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geografische ruimte die een hoogteverschil in het landschap aanduidt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Basisregistratie Topografie: Catalogus en Productspecificaties (versie 1.2.0.1)</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/reliefzone">https://definities.geostandaarden.nl/ibro/id/begrip/reliefzone</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie reliëf zoals deze is opgenomen in de basisregistratie topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_geografische_ruimte">GeografischeRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_reliefzone_attribuutsoort_naam">naam</a>
</td>
<td>
Naam van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_reliefzone_attribuutsoort_alternatieve_naam">alternatieveNaam</a>
</td>
<td>
Alternatieve benaming van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_reliefzone_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Plaatselijke naam van een reliëfzone zoals deze is vastgesteld of in het plaatselijk gebruik bekend staat.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_reliefzone_attribuutsoort_alternatieve_naam">
<h6>alternatieveNaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#alternatieveNaam</td>
</tr>
<tr>
<th>Naam</th>
<td>alternatieveNaam</td>
</tr>
<tr>
<th>Alias</th>
<td>alternatieve naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Alternatieve benaming van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Alternatieve benaming van een reliëfzone zoals deze breed is geaccepteerd in de volksmond of zoals deze bekend staat in het Fries (bij een benaming in het Nederlands) of in het Nederlands (bij een benaming in het Fries)</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>



<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_groeve">
<h5>Groeve</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Groeve</td>
</tr>
<tr>
<th>Naam</th>
<td>Groeve</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Opengegraven gebied waaruit een delfstof gewonnen wordt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/groeve">https://definities.geostandaarden.nl/ibro/id/begrip/groeve</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_reliefzone">Reliefzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_groeve_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_groeve_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_holle_weg">
<h5>HolleWeg</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#HolleWeg</td>
</tr>
<tr>
<th>Naam</th>
<td>HolleWeg</td>
</tr>
<tr>
<th>Alias</th>
<td>Holle weg</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Weg die zo diep is uitgesleten dat hij tussen twee hellingen ligt als gevolg van eeuwenlang gebruik en erosie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/holle_weg">https://definities.geostandaarden.nl/ibro/id/begrip/holle_weg</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_reliefzone">Reliefzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_holle_weg_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_holle_weg_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_terp">
<h5>Terp</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Terp</td>
</tr>
<tr>
<th>Naam</th>
<td>Terp</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Verhoging in het landschap oorspronkelijk bedoelt om de daarop gevestigde bebouwing te beschermen tegen het water.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/terp">https://definities.geostandaarden.nl/ibro/id/begrip/terp</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_reliefzone">Reliefzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_terp_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_terp_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_steilrand">
<h5>Steilrand</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Steilrand</td>
</tr>
<tr>
<th>Naam</th>
<td>Steilrand</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Abrupte scheiding tussen een hooggelegen en laaggelegen gebied in het landschap, al dan niet begroeid, gevormd door diverse geologische en antropogene processen zoals riviererosie, afzettingen, vergraving en bodembewegingen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/steilrand">https://definities.geostandaarden.nl/ibro/id/begrip/steilrand</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_reliefzone">Reliefzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_steilrand_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_LineString"> GM_LineString</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_steilrand_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_grafheuvel">
<h5>Grafheuvel</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Grafheuvel</td>
</tr>
<tr>
<th>Naam</th>
<td>Grafheuvel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Voorhistorische begraafplaats in de vorm van een heuvel.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/grafheuvel">https://definities.geostandaarden.nl/ibro/id/begrip/grafheuvel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_reliefzone">Reliefzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_grafheuvel_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_grafheuvel_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_berg">
<h5>Berg</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Berg</td>
</tr>
<tr>
<th>Naam</th>
<td>Berg</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Min of meer op zichzelf staande sterke verheffing van het aardoppervlak.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/berg">https://definities.geostandaarden.nl/ibro/id/begrip/berg</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_reliefzone">Reliefzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_berg_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_berg_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_dal">
<h5>Dal</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Dal</td>
</tr>
<tr>
<th>Naam</th>
<td>Dal</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Langgerekte laagte, inzinking of verdieping in het landschap tussen bergen, heuvels of hoogvlakten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/dal">https://definities.geostandaarden.nl/ibro/id/begrip/dal</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_reliefzone">Reliefzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_dal_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_dal_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
</section>

<section id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_streek">
<h4>Streek</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Streek</td>
</tr>
<tr>
<th>Naam</th>
<td>Streek</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geografische ruimte met een culturele samenhang die vanuit de historie of in de volksmond bekend staat onder een bepaalde naam.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op Basisregistratie Topografie: Catalogus en Productspecificaties (versie 1.2.0.1)</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Onder deze landstreek valt ook het open land buiten steden en dorpen (veld).</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/streek">https://definities.geostandaarden.nl/ibro/id/begrip/streek</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie Streek zoals deze is opgenomen in de basisregistratie topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_kern_objecttype_geografische_ruimte">GeografischeRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_streek_attribuutsoort_naam">naam</a>
</td>
<td>
Naam van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_streek_attribuutsoort_alternatieve_naam">alternatieveNaam</a>
</td>
<td>
Alternatieve benaming van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_streek_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_streek_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Plaatselijke naam van een streek zoals deze formeel is vastgesteld of bij het ontbreken daarvan zoals deze in het plaatselijk gebruik bekend staat.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_streek_attribuutsoort_alternatieve_naam">
<h6>alternatieveNaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#alternatieveNaam</td>
</tr>
<tr>
<th>Naam</th>
<td>alternatieveNaam</td>
</tr>
<tr>
<th>Alias</th>
<td>alternatieve naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Alternatieve benaming van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Alternatieve benaming van een streek zoals deze breed is geaccepteerd in de volksmond of zoals deze bekend staat in het Fries (bij een benaming in het Nederlands) of in het Nederlands (bij een benaming in het Fries).</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_conceptueel_domein_geografische_ruimten_objecttype_streek_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>








## Extern NEN 3610:2022 - Basismodel geo-informatie
![NEN 3610:2022 - Basismodel geo-informatie](data/media/nen_3610_2022_-_basismodel_geo-informatie.png "Extern NEN 3610:2022 - Basismodel geo-informatie")

### Objecttypen


<section id="informatiemodel_nen3610_domein_semantisch_model_objecttype_reeel_object">
<h4>ReeelObject</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:NEN%203610:2022%20-%20Basismodel%20geo-informatie:ReeelObject</td>
</tr>
<tr>
<th>Naam</th>
<td>ReeelObject</td>
</tr>
<tr>
<th>Alias</th>
<td>Reëel object</td>
</tr>
<tr>
<th>Herkomst</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geo-object dat zich geheel materieel manifesteert.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Datum opname</th>
<td>20220601</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_reeel_object">ReeelObject (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_geo_object">GeoObject (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_nen3610_domein_semantisch_model_objecttype_functionele_ruimte">
<h4>FunctioneleRuimte</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:NEN%203610:2022%20-%20Basismodel%20geo-informatie:FunctioneleRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>FunctioneleRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>Functionele ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Definitie</th>
<td>Ruimte met een specifieke functie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Datum opname</th>
<td>20220601</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_functionele_ruimte">FunctioneleRuimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_virtuele_ruimte">VirtueleRuimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_nen3610_domein_semantisch_model_objecttype_geografische_ruimte">
<h4>GeografischeRuimte</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:NEN%203610:2022%20-%20Basismodel%20geo-informatie:GeografischeRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>GeografischeRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>Geografische ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Definitie</th>
<td>Ruimte die bekendstaat onder een vanuit de historie of het gebruik bekende benaming of een fysisch-geografische samenhang, al dan niet met zijn omgeving, kent.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Datum opname</th>
<td>20220601</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_geografische_ruimte">GeografischeRuimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_virtuele_ruimte">VirtueleRuimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_nen3610_domein_semantisch_model_objecttype_registratieve_ruimte">
<h4>RegistratieveRuimte</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:NEN%203610:2022%20-%20Basismodel%20geo-informatie:RegistratieveRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>RegistratieveRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>Registratieve ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Definitie</th>
<td>Op basis van wet- of regelgeving afgebakende ruimte die als eenheid geldt van politiek-bestuurlijke verantwoordelijkheid of voor bedrijfsvoering.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Datum opname</th>
<td>20220601</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_registratieve_ruimte">RegistratieveRuimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_virtuele_ruimte">VirtueleRuimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_nen3610_domein_semantisch_model_objecttype_geo_object">
<h4>GeoObject</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:NEN%203610:2022%20-%20Basismodel%20geo-informatie:GeoObject</td>
</tr>
<tr>
<th>Naam</th>
<td>GeoObject</td>
</tr>
<tr>
<th>Alias</th>
<td>Geo-object</td>
</tr>
<tr>
<th>Herkomst</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een fenomeen in de werkelijkheid dat direct of indirect is geassocieerd met een locatie relatief ten opzichte van de aarde.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Datum opname</th>
<td>20220601</td>
</tr>
<tbody>
</tbody>
</table>








</section>

<section id="informatiemodel_nen3610_domein_semantisch_model_objecttype_transportruimte">
<h4>Transportruimte</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:NEN%203610:2022%20-%20Basismodel%20geo-informatie:Transportruimte</td>
</tr>
<tr>
<th>Naam</th>
<td>Transportruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Definitie</th>
<td>Natuurlijke of aangelegde transportlijnen of verbindingen met knooppunten waarlangs stromen zich kunnen verplaatsen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Datum opname</th>
<td>20220601</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_transportruimte">Transportruimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_functionele_ruimte">FunctioneleRuimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_nen3610_domein_semantisch_model_objecttype_wegverkeerruimte">
<h4>Wegverkeerruimte</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:NEN%203610:2022%20-%20Basismodel%20geo-informatie:Wegverkeerruimte</td>
</tr>
<tr>
<th>Naam</th>
<td>Wegverkeerruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Definitie</th>
<td>Verkeerruimte voor weggebruikers die zich over wegen verplaatsen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Datum opname</th>
<td>20220601</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_wegverkeerruimte">Wegverkeerruimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_verkeerruimte">Verkeerruimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_nen3610_domein_semantisch_model_objecttype_verkeerruimte">
<h4>Verkeerruimte</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:NEN%203610:2022%20-%20Basismodel%20geo-informatie:Verkeerruimte</td>
</tr>
<tr>
<th>Naam</th>
<td>Verkeerruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Definitie</th>
<td>Transportruimte voor verkeer via land, water of lucht.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Datum opname</th>
<td>20220601</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_verkeerruimte">Verkeerruimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_transportruimte">Transportruimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_nen3610_domein_semantisch_model_objecttype_spoorverkeerruimte">
<h4>Spoorverkeerruimte</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:NEN%203610:2022%20-%20Basismodel%20geo-informatie:Spoorverkeerruimte</td>
</tr>
<tr>
<th>Naam</th>
<td>Spoorverkeerruimte</td>
</tr>
<tr>
<th>Alias</th>
<td>Spoorverkeerruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Definitie</th>
<td>Verkeerruimte voor voertuigen die zich over rails verplaatsen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Datum opname</th>
<td>20220601</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_spoorverkeerruimte">Spoorverkeerruimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_verkeerruimte">Verkeerruimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_nen3610_domein_semantisch_model_objecttype_virtuele_ruimte">
<h4>VirtueleRuimte</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:NEN%203610:2022%20-%20Basismodel%20geo-informatie:VirtueleRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>VirtueleRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>Virtuele ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geo-object dat zich geheel of gedeeltelijk niet-materieel manifesteert en dus slechts in abstracte en/of geregistreerde vorm bestaat.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Datum opname</th>
<td>20220601</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_virtuele_ruimte">VirtueleRuimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_geo_object">GeoObject (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_nen3610_domein_semantisch_model_objecttype_begroeiing">
<h4>Begroeiing</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:NEN%203610:2022%20-%20Basismodel%20geo-informatie:Begroeiing</td>
</tr>
<tr>
<th>Naam</th>
<td>Begroeiing</td>
</tr>
<tr>
<th>Alias</th>
<td>Begroeiing</td>
</tr>
<tr>
<th>Herkomst</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Definitie</th>
<td>Planten die op natuurlijke wijze zijn ontstaan of door mensen zijn aangeplant.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Datum opname</th>
<td>20220601</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_begroeiing">Begroeiing (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_reeel_object">ReeelObject (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_nen3610_domein_semantisch_model_objecttype_kunstwerk">
<h4>Kunstwerk</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:NEN%203610:2022%20-%20Basismodel%20geo-informatie:Kunstwerk</td>
</tr>
<tr>
<th>Naam</th>
<td>Kunstwerk</td>
</tr>
<tr>
<th>Alias</th>
<td>Kunstwerk</td>
</tr>
<tr>
<th>Herkomst</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Definitie</th>
<td>Civiel-technische constructie voor de infrastructuur van wegen, water, spoorbanen, waterkeringen en/of leidingen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Datum opname</th>
<td>20220601</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_kunstwerk">Kunstwerk (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_constructie">Constructie (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_nen3610_domein_semantisch_model_objecttype_verharding">
<h4>Verharding</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:NEN%203610:2022%20-%20Basismodel%20geo-informatie:Verharding</td>
</tr>
<tr>
<th>Naam</th>
<td>Verharding</td>
</tr>
<tr>
<th>Alias</th>
<td>Verharding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een door egaliseren, verstevigen en/of verruwen voor het beoogde gebruik geschikt gemaakt oppervlak, bestaande uit in een of meer lagen over een bodem of onderliggende constructie aangelegd materiaal.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Datum opname</th>
<td>20220601</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_verharding">Verharding (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_constructie">Constructie (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_nen3610_domein_semantisch_model_objecttype_gebouw">
<h4>Gebouw</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:NEN%203610:2022%20-%20Basismodel%20geo-informatie:Gebouw</td>
</tr>
<tr>
<th>Naam</th>
<td>Gebouw</td>
</tr>
<tr>
<th>Alias</th>
<td>Gebouw</td>
</tr>
<tr>
<th>Herkomst</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Definitie</th>
<td>Overdekte en geheel of gedeeltelijk met wanden omsloten constructie bedoeld voor het in een afgeschermde omgeving onderbrengen van mensen, dieren of voorwerpen of voor de productie van goederen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Datum opname</th>
<td>20220601</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_gebouw">Gebouw (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_constructie">Constructie (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_nen3610_domein_semantisch_model_objecttype_oppervlaktewater">
<h4>Oppervlaktewater</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:NEN%203610:2022%20-%20Basismodel%20geo-informatie:Oppervlaktewater</td>
</tr>
<tr>
<th>Naam</th>
<td>Oppervlaktewater</td>
</tr>
<tr>
<th>Alias</th>
<td>Oppervlaktewater</td>
</tr>
<tr>
<th>Herkomst</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Definitie</th>
<td>Massa van water dat de bodem bedekt of in normale omstandigheden kan bedekken.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Datum opname</th>
<td>20220601</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_oppervlaktewater">Oppervlaktewater (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_reeel_object">ReeelObject (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_nen3610_domein_semantisch_model_objecttype_constructie">
<h4>Constructie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:NEN%203610:2022%20-%20Basismodel%20geo-informatie:Constructie</td>
</tr>
<tr>
<th>Naam</th>
<td>Constructie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebouwd object dat direct of indirect met de bodem is verbonden en bedoeld is om ter plaatse te functioneren.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Datum opname</th>
<td>20220601</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_constructie">Constructie (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_reeel_object">ReeelObject (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_nen3610_domein_semantisch_model_objecttype_bodem">
<h4>Bodem</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:NEN%203610:2022%20-%20Basismodel%20geo-informatie:Bodem</td>
</tr>
<tr>
<th>Naam</th>
<td>Bodem</td>
</tr>
<tr>
<th>Alias</th>
<td>Bodem</td>
</tr>
<tr>
<th>Herkomst</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Definitie</th>
<td>Bovenste deel van de aarde, exclusief oppervlaktewater.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Datum opname</th>
<td>20220601</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_bodem">Bodem (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_reeel_object">ReeelObject (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>








## Extern INSPIRE - Generic Network Model
![INSPIRE - Generic Network Model](data/media/inspire_-_generic_network_model.png "Extern INSPIRE - Generic Network Model")

### Objecttypen


<section id="extern_inspire_generic_network_model_objecttype_link">
<h4>Link</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:INSPIRE%20-%20Generic%20Network%20Model:Link</td>
</tr>
<tr>
<th>Naam</th>
<td>Link</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Curvilinear network element that connects two positions and represents a homogeneous path in the network. The connected positions may be represented as nodes.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>








</section>

<section id="extern_inspire_generic_network_model_objecttype_node">
<h4>Node</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:INSPIRE%20-%20Generic%20Network%20Model:Node</td>
</tr>
<tr>
<th>Naam</th>
<td>Node</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Represents a significant position in the network that always occurs at the beginning or the end of a link.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Toelichting</th>
<td>NOTE if a topological representation of the network is used the road node is either a topological connection between two or more links or the termination of a ink. If a geometric representation of the network is used road nodes are represented by points or alternatively another geometric shape. [EuroRoadS]</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-06-30</td>
</tr>
<tbody>
</tbody>
</table>








</section>








## Extern Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden
![Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden](data/media/informatiemodel_samenhangende_objecten_-_bestuurlijke_gebieden.png "Extern Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden")

### Objecttypen


<section id="informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_gemeentegebied">
<h4>Gemeentegebied</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:Informatiemodel%20Samenhangende%20Objecten%20-%20Bestuurlijke%20gebieden:Gemeentegebied</td>
</tr>
<tr>
<th>Naam</th>
<td>Gemeentegebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMDiSGeo</td>
</tr>
<tr>
<th>Definitie</th>
<td>Afgebakend gedeelte van het grondgebied van Nederland, onder zeggenschap van een openbaar lichaam met diverse bestuurlijke taken, ingesteld op basis van artikel 123 en 124 van de Grondwet, artikel 2:1 Burgerlijk Wetboek en artikel 3 van de Wet algemene regels herindeling.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Grondwet en Gemeentewet</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/gemeentegebied">http://begrippen.geostandaarden.nl/disgeo/id/begrip/gemeentegebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>23-03-2022</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_gemeentegebied">Gemeentegebied (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_op_land">BestuurlijkGebiedOpLand (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_gemeentegebied_relatiesoort_ligt_in_provinciegebied">ligtInProvinciegebied</a>
</td>
<td>
De geometrische afbakening van het provinciegebied waarbinnen de geometrie van het gemeentegebied zich moet bevinden, en/of mee moet samenvallen.</td>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_provinciegebied">Provinciegebied (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
<td>
1..*</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_gemeentegebied_relatiesoort_ligt_in_veiligheidsregiogebied">ligtInVeiligheidsregiogebied</a>
</td>
<td>
De geometrische afbakening van het veiligheidsregiogebied waarbinnen de geometrie van het gemeentegebied zich moet bevinden, en/of mee moet samenvallen.</td>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_veiligheidsregiogebied">Veiligheidsregiogebied (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
<td>
1..*</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_gemeentegebied_relatiesoort_ligt_in_provinciegebied">
<h6>ligtInProvinciegebied</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>${package}${owner}.ligtInProvinciegebied</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtInProvinciegebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMDiSGeo</td>
</tr>
<tr>
<th>Definitie</th>
<td>De geometrische afbakening van het provinciegebied waarbinnen de geometrie van het gemeentegebied zich moet bevinden, en/of mee moet samenvallen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMDiSGeo</td>
</tr>
<tr>
<th>Datum opname</th>
<td>29-03-2022</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..1</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_gemeentegebied">Gemeentegebied (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_gemeentegebied_relatiesoort_ligt_in_veiligheidsregiogebied">
<h6>ligtInVeiligheidsregiogebied</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>${package}${owner}.ligtInVeiligheidsregiogebied</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtInVeiligheidsregiogebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMDiSGeo</td>
</tr>
<tr>
<th>Definitie</th>
<td>De geometrische afbakening van het veiligheidsregiogebied waarbinnen de geometrie van het gemeentegebied zich moet bevinden, en/of mee moet samenvallen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMDiSGeo</td>
</tr>
<tr>
<th>Datum opname</th>
<td>11-05-2022</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..1</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_gemeentegebied">Gemeentegebied (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_provinciegebied">
<h4>Provinciegebied</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:Informatiemodel%20Samenhangende%20Objecten%20-%20Bestuurlijke%20gebieden:Provinciegebied</td>
</tr>
<tr>
<th>Naam</th>
<td>Provinciegebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMDiSGeo</td>
</tr>
<tr>
<th>Definitie</th>
<td>Afgebakend gedeelte van het grondgebied van Nederland, onder zeggenschap van een openbaar lichaam met diverse bestuurlijke taken, ingesteld op basis van artikel 123 en 124 van de Grondwet, artikel 2:1 Burgerlijk Wetboek en artikel 13 van de Wet algemene regels herindeling</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Grondwet en Provinciewet</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/provinciegebied">http://begrippen.geostandaarden.nl/disgeo/id/begrip/provinciegebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>29-03-2022</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_provinciegebied">Provinciegebied (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_op_land">BestuurlijkGebiedOpLand (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_provinciegebied_relatiesoort_ligt_in_rijksgebied">ligtInRijksgebied</a>
</td>
<td>
De geometrische afbakening van het rijksgebied waarbinnen de geometrie van het provinciegebied zich moet bevinden, en/of mee moet samenvallen.</td>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_rijksgebied">Rijksgebied (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
<td>
1..*</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_provinciegebied_relatiesoort_ligt_in_rijksgebied">
<h6>ligtInRijksgebied</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>${package}${owner}.ligtInRijksgebied</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtInRijksgebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMDiSGeo</td>
</tr>
<tr>
<th>Definitie</th>
<td>De geometrische afbakening van het rijksgebied waarbinnen de geometrie van het provinciegebied zich moet bevinden, en/of mee moet samenvallen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMDiSGeo</td>
</tr>
<tr>
<th>Datum opname</th>
<td>20-04-2022</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..1</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_provinciegebied">Provinciegebied (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_veiligheidsregiogebied">
<h4>Veiligheidsregiogebied</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:Informatiemodel%20Samenhangende%20Objecten%20-%20Bestuurlijke%20gebieden:Veiligheidsregiogebied</td>
</tr>
<tr>
<th>Naam</th>
<td>Veiligheidsregiogebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMDiSGeo</td>
</tr>
<tr>
<th>Definitie</th>
<td>Afgebakend gedeelte van het grondgebied van Nederland, onder zeggenschap van een openbaar lichaam met diverse bestuurlijke taken, ingesteld op basis van artikel 9 van de Wet Veiligheidsregio’s</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Wet Veiligheidsregio’s</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/veiligheidregiogebied">http://begrippen.geostandaarden.nl/disgeo/id/begrip/veiligheidregiogebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>11-05-2022</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_veiligheidsregiogebied">Veiligheidsregiogebied (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_op_land">BestuurlijkGebiedOpLand (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_rijksgebied">
<h4>Rijksgebied</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:Informatiemodel%20Samenhangende%20Objecten%20-%20Bestuurlijke%20gebieden:Rijksgebied</td>
</tr>
<tr>
<th>Naam</th>
<td>Rijksgebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMDiSGeo</td>
</tr>
<tr>
<th>Definitie</th>
<td>Het grondgebied van het Koninkrijk der Nederlanden</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/rijksgebied">http://begrippen.geostandaarden.nl/disgeo/id/begrip/rijksgebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>20-04-2022</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_rijksgebied">Rijksgebied (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_op_land">BestuurlijkGebiedOpLand (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_op_land">
<h4>BestuurlijkGebiedOpLand</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:Informatiemodel%20Samenhangende%20Objecten%20-%20Bestuurlijke%20gebieden:BestuurlijkGebiedOpLand</td>
</tr>
<tr>
<th>Naam</th>
<td>BestuurlijkGebiedOpLand</td>
</tr>
<tr>
<th>Definitie</th>
<td>Bestuurlijk gebied op land.</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_op_land">BestuurlijkGebiedOpLand (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied">BestuurlijkGebied (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied">
<h4>BestuurlijkGebied</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:Informatiemodel%20Samenhangende%20Objecten%20-%20Bestuurlijke%20gebieden:BestuurlijkGebied</td>
</tr>
<tr>
<th>Naam</th>
<td>BestuurlijkGebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMDiSGeo</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een bestuurlijk gebied is een registratieve ruimte die op basis van wet- of regelgeving als eenheid geldt van bestuurlijke verantwoordelijkheid.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/bestuurlijk_gebied">http://begrippen.geostandaarden.nl/disgeo/id/begrip/bestuurlijk_gebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>23-03-2022</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied">BestuurlijkGebied (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_registratieve_ruimte">RegistratieveRuimte (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een gebied op land dat door een openbaar lichaam wordt bestuurd.</td>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_keuze_datatype__vlak_of_multivlak">VlakOfMultivlak (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
<td>
1..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_attribuutsoort_type">type</a>
</td>
<td>
Categorie waartoe het betreffende bestuurlijke gebied behoort.</td>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_enumeratie_type_bestuurlijk_gebied">TypeBestuurlijkGebied (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
<td>
1..1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_relatiesoort_wordt_bestuurd_door">wordtBestuurdDoor</a>
</td>
<td>
Relatie die aangeeft dat het gebied bestuurt wordt door de bestuurder.</td>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_openbaar_lichaam">OpenbaarLichaam (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
<td>
0..*</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_relatiesoort_ligt_in_bestuurlijk_gebied">ligtInBestuurlijkGebied</a>
</td>
<td>
De geometrische afbakening van het &lt;i&gt;bevattendGebied, &lt;/i&gt;waarbinnen de geometrie van het &lt;i&gt;bevatteGebied&lt;/i&gt;,zich moet bevinden, en/of mee moet samenvallen.</td>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied">BestuurlijkGebied (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
<td>
0..*</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>${package}${owner}.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMDisGeo</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een gebied op land dat door een openbaar lichaam wordt bestuurd.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>31-05-2022</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>${package}${owner}.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMDiSGeo</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorie waartoe het betreffende bestuurlijke gebied behoort.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMDiSGeo</td>
</tr>
<tr>
<th>Datum opname</th>
<td>17-08-202</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_relatiesoort_wordt_bestuurd_door">
<h6>wordtBestuurdDoor</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>${package}${owner}.wordtBestuurdDoor</td>
</tr>
<tr>
<th>Naam</th>
<td>wordtBestuurdDoor</td>
</tr>
<tr>
<th>Definitie</th>
<td>Relatie die aangeeft dat het gebied bestuurt wordt door de bestuurder.</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..1</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied">BestuurlijkGebied (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_relatiesoort_ligt_in_bestuurlijk_gebied">
<h6>ligtInBestuurlijkGebied</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>${package}${owner}.ligtInBestuurlijkGebied</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtInBestuurlijkGebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMDiSGeo</td>
</tr>
<tr>
<th>Definitie</th>
<td>De geometrische afbakening van het &lt;i&gt;bevattendGebied, &lt;/i&gt;waarbinnen de geometrie van het &lt;i&gt;bevatteGebied&lt;/i&gt;,zich moet bevinden, en/of mee moet samenvallen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMDiSGeo</td>
</tr>
<tr>
<th>Datum opname</th>
<td>19-08-2022</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied">BestuurlijkGebied (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_registratieve_ruimte">
<h4>RegistratieveRuimte</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:Informatiemodel%20Samenhangende%20Objecten%20-%20Bestuurlijke%20gebieden:RegistratieveRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>RegistratieveRuimte</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_registratieve_ruimte_attribuutsoort_status">status</a>
</td>
<td>
Fase van de levenscyclus waarin een bestuurlijk gebied zich bevindt.</td>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_enumeratie_status_registratieve_ruimte">StatusRegistratieveRuimte (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
<td>
1..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_registratieve_ruimte_attribuutsoort_status">
<h6>status</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>${package}${owner}.status</td>
</tr>
<tr>
<th>Naam</th>
<td>status</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMDiSGeo</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fase van de levenscyclus waarin een bestuurlijk gebied zich bevindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>22-04-2022</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_openbaar_lichaam">
<h4>OpenbaarLichaam</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:Informatiemodel%20Samenhangende%20Objecten%20-%20Bestuurlijke%20gebieden:OpenbaarLichaam</td>
</tr>
<tr>
<th>Naam</th>
<td>OpenbaarLichaam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een openbaar lichaam is, in de bestuurlijke indeling van het Koninkrijk der Nederlanden, een overheidsorganisatie met publiekrechtelijke rechtspersoonlijkheid, die bepaalde taken uitvoert binnen een bepaald ruimtelijk gebied of op een bepaald inhoudelijk gebied.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Wikipedia</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/openbaar_lichaam">http://begrippen.geostandaarden.nl/disgeo/id/begrip/openbaar_lichaam</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>30-03-2022</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_openbaar_lichaam">OpenbaarLichaam (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_overheidsorganisatie">Overheidsorganisatie (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_openbaar_lichaam_attribuutsoort_type">type</a>
</td>
<td>
Categorie waartoe het betreffende openbaar lichaam behoort.</td>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_enumeratie_type_openbaar_lichaam">TypeOpenbaarLichaam (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
<td>
1..1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_openbaar_lichaam_relatiesoort_bestuurt_gebied">bestuurtGebied</a>
</td>
<td>
Relatie die aangeeft dat bestuurder het gebied bestuurt bestuurt.</td>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied">BestuurlijkGebied (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
<td>
1..1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_openbaar_lichaam_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>${package}${owner}.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMDiSGeo</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorie waartoe het betreffende openbaar lichaam behoort.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMDiSGeo</td>
</tr>
<tr>
<th>Datum opname</th>
<td>17-08-2022</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_openbaar_lichaam_relatiesoort_bestuurt_gebied">
<h6>bestuurtGebied</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>${package}${owner}.bestuurtGebied</td>
</tr>
<tr>
<th>Naam</th>
<td>bestuurtGebied</td>
</tr>
<tr>
<th>Definitie</th>
<td>Relatie die aangeeft dat bestuurder het gebied bestuurt bestuurt.</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_openbaar_lichaam">OpenbaarLichaam (Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden)</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_overheidsorganisatie">
<h4>Overheidsorganisatie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:Informatiemodel%20Samenhangende%20Objecten%20-%20Bestuurlijke%20gebieden:Overheidsorganisatie</td>
</tr>
<tr>
<th>Naam</th>
<td>Overheidsorganisatie</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een overheidsorganisatie is een organisatie die naar algemene opvatting als onderdeel van de overheid wordt beschouwd.</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_overheidsorganisatie_attribuutsoort_officiele_naam_incl_soort">officieleNaamInclSoort</a>
</td>
<td>
</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_overheidsorganisatie_attribuutsoort_organisatiecode">organisatiecode</a>
</td>
<td>
</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_overheidsorganisatie_attribuutsoort_officiele_naam_incl_soort">
<h6>officieleNaamInclSoort</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>${package}${owner}.officieleNaamInclSoort</td>
</tr>
<tr>
<th>Naam</th>
<td>officieleNaamInclSoort</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_overheidsorganisatie_attribuutsoort_organisatiecode">
<h6>organisatiecode</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>${package}${owner}.organisatiecode</td>
</tr>
<tr>
<th>Naam</th>
<td>organisatiecode</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
