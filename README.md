# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.


Link naar website: https://maaikeschoute.github.io/02FED_herkansing/


## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Maaike Schoute

  #### Je startniveau:
  Rood

  #### Je focus:
  Plane

</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://phamilypharma.com/concept
  of: https://www.hurryupandhavefun.com/

  #### Screenshot(s) van de eerste pagina (small screen):
  Homepage
  <img src="readme-images/huahf_homepage.jpg" width="375px" alt="Home page: Hurry up and have fun">

  #### Screenshot(s) van de tweede pagina (small screen):
  hier de naam van de pagina  
  <img src="readme-images/huahf_about.jpg" width="375px" alt="Home page: About">
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen<br>
  Op deze site kun je alleen de heading horen, en de linkjes. Niets te horen van de headings, of pharagraph texten. Je kan alleen op de links klikken. Het is wel duidelijk waar de link naartoe gaat. Want dat is beschreven in de knop of link. Alleen iets minder duidelijk als je op 'details' klikt. Dat is een uitklap venster, bij een bepaald onderdeel.  Maar als je de koppen niet kan horen, dan weet je ook niet wat voor details je te zien krijgt. In dit geval niets, want je kan alleen met tab naar de knoppen. <br><br>

  <b>Content</b><br>
  Ja | Het is duidelijke tekst zonder lastige spreekwoorden, of gecompliciseerde metaforen.<br>
  Ja | De knoppen zijn duidelijk beschreven, met duidelijk labels, en unieke beschrijving.<br><br>

  <b>Global Code</b><br>
  Ja | De errors die er zijn, zijn er van de "Dupilicate ID", "A bad value" en "Div's". Div's staan meestal in de buttons. <br>
  Ja | Heeft een Lang attribute. <br>
  Ja | Elke pagina heeft een eigen titel.<br>
  Ja | vieport zoom werkt.<br><br>

 <b>Keyboard</b><br>
 Ja | je ziet een tab randje, bij de elementen die hebt geselecteerd met je keyboard.<br>
 Ja | Alle elementen geselecteerd met de tab worden op volgorde van boven naar beneden, en beneden naar boven van de pagina selecteerd.<br><br>

 <b>Mobile and Touch</b><br>
 Nee | Wanneer de mobiel roteerd, dan gaan texten met elkaar overlappen, waardoor de site niet meer leesbaar is.<br>
 Ja | Je kan niet horizontaal scrollen.<br>
 Ja | Knoppen en links kunnen makkelijk worden geklikt.<br>
 Ja | Er zit genoeg ruimte tussen alle interactieve elementen tijdens het scrollen.<br><br>

 <b>Headings</b><br>
<img src="readme-images/headings_homepage.jpg" width="375px" alt="Home page HUHF Amount of Headings"><br>
Ja | De home pagina heeft geen H1. Wel 3 h2's en h3's, 4 h5's, en 2 h6.<br>
<img src="readme-images/headings_aboutpage.jpg" width="375px" alt="About page HUHF Amount of Headings"><br>
De About pagina heeft  0 h1, 12 h2's, 15 h3's, 7 h5's en 2 h6's.<br>
Nee | Er zijn geen H1's.<br>
Ja | Headings hebben logische volgorde:<br>
<img src="readme-images/heading_sequence_homepage.jpg" width="375px" alt="About page HUHF heading sequence"><br>
<img src="readme-images/headings_aboutpage.jpg" width="375px" alt="Home page HUHF heading sequence"><br>
Nee | Er zijn wel headinglevels geskipt. De H4. <br><br>

<b>Lists</b><br>
Er wordt geen gebruik gemaakt van li elementen.<br><br>

<b>Images</b><br>
<img src="readme-images/about_alt_checker.jpg" width="375px" alt="About alt checker results"><br>
Nee | De website bestaat vooral uit SVG's. Deze afbeeldingen hebben vaak dezelfde (lange 12345234) namen, en zijn niet goed toegankelijk voor slechtziende mensen die met Tab navigeren door de website.<br>
<img src="readme-images/home_alt_check.jog.png" width="375px" alt="Home alt checker results"><br>
Hetzelfde geld voor de homepage. <br>
Nee | De alt in decoratieve images gebruiken geen "0" value.<br>
<img src="readme-images/image_check_checklist.png" width="375px" alt="proof there's no text to explain img"><br>
Nee | Er zijn geen alt texten, in afbeeldingen waar misschien meer uitleg voor zou moeten zijn.<br><br>

<b>Media</b><br>
This site has no media.<br><br>

<b>Controls</b><br>
<img src="readme-images/image_check_checklist.png" width="375px" alt="proof there's no text to explain img"><br>
Ja | De site gebruikt <a hrf=src(#)>a</a> elementen bij links.<br>
Ja | De links zien eruit als buttons en staan in de nav.<br>
Ja | De links scrollen mee met de pagina. Maar ze brengen je niet met een sneltoets mee terug naar begin pagina, of laten een layout zien van de verschillende hoofdstukken, waar je naar terug wilt springen.<br>
<img src="readme-images/focus-state.jpg" width="375px" alt="proof site has focus state on links"><br>
Ja | De controls hebben focus state.<br>
<img src="readme-images/focus-state2.jpg" width="375px" alt="proof site has focus state on links"><br>
Ja | Als de control is geselecteerd, dan klapt hij het uitklap menu uit. Anders laat hij hem dicht. <br>
Ja | Alleen in de NAV ga je naar een andere pagina.<br><br>

<b>Appearance</b><br>
Nee | Er is geen dark mode. Alleen een light mode.<br>
Nee | De site ziet er niet anders uit als het verhoogde contrast in ingesteld. <br>
Nee | Ik kan wel inzoomen en uitzoomen op de pagina, maar ik kan niet met ctrl + de lettertypen groter maken.<br>
Ja | Ook zonder kleur is het duidelijk waar de website over gaat.<br><br>

<b>Animation</b><br>
Ja | De animaties zijn subtiel, en trekken niet teveel de aandacht.<br>
Nee | Er is geen video, dus ook geen pauze knop voor een video.<br>
Nee | De afbeeldingen blijven van kleur veranderen als je "Verminder Beweging" inschakeld in "toegankelijkheid".<br><br>

<b>Color contrast</b><br>
<img src="readme-images/colorcontrast_check.jpg" width="375px" alt="color contrast data"><br>
<img src="readme-images/colorcontrast_check2.jpg" width="375px" alt="color contrast example"><br>
<img src="readme-images/contrast_check4.jpg" width="375px" alt="color contrast example"><br>
Nee | Op de meeste plaatsen is er een goed verschil tussen de kleuren. Maar niet overal is goed het verschil te zien tussen wit, en beige bijvoorbeeld. Voor teksten is deze wel altijd goed te onderscheiden, maar voor de iconen niet. Zelf vind ik op deze afbeelding: <br>
<img src="readme-images/contrast_check3.jpg" width="375px" alt="color contrast example 2"><br>
De tekst in het midden niet erg duidelijk contrasterend met de achtergrond. <br>
Nee | Er is geen :: Selection colors? Niet gevonden ieg.<br><br>

<b>Samenvatting:</b><br>
  • | De errors die er zijn, zijn er van de "Dupilicate ID", "A bad value" en "Div's". Div's staan meestal in de buttons. <br>
  • | De home pagina heeft geen H1. Wel 3 h2's en h3's, 4 h5's, en 2 h6. <br>
  • | Er worden ook H's geskipt in de volgorde van de pagina. H4 komt bijvoorbeeld helemaal niet voor.<br>
  • | Er wordt geen gebruik gemaakt van li elementen op locaties waar dat wel kan, of een betere oplossing kan zijn.<br>
  • | De website bestaat voor een groot deel uit SVG's. Deze afbeeldingen hebben vaak dezelfde (lange 12345234) namen, en zijn niet goed toegankelijk voor slechtziende mensen die met Tab navigeren door de website.<br>
  • | De alt in decoratieve images gebruiken geen "0" value.<br>
  • | Er zijn geen alt texten, in afbeeldingen waar misschien meer uitleg voor zou moeten zijn.<br>
  • | Er is geen dark mode. Alleen een light mode.<br>
  • | De site ziet er niet anders uit als het verhoogde contrast in ingesteld. <br>
  • | Ik kan wel inzoomen en uitzoomen op de pagina, maar ik kan niet met ctrl + de lettertypen groter maken.<br>
  • | De afbeeldingen blijven van kleur veranderen als je "Verminder Beweging" inschakeld in "toegankelijkheid".<br>
  • | Op de meeste plaatsen is er een goed verschil tussen de kleuren. Maar niet overal is goed het verschil te zien tussen wit, en beige bijvoorbeeld. Voor teksten is deze wel (bijna) altijd goed te onderscheiden.<br>
  • | maar voor de iconen (logo achtergong, ronding van -> knoppen) niet.<br>
  • | Er is geen :: Selection colors? Niet gevonden ieg.<br>
</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina:
  <img src="readme-images/breakdownschets_about_page_breakdown.jpg" width="375px" alt="breakdown van de hele pagina Home">

  ### dynamisch deel (bijv menu):
  <img src="readme-images/breakdownschets_home_page_breakdown.jpg" width="375px" alt="breakdown van de hele pagina About">


<b>Vragen</b>
• | Op de homepage staan alle h's in volgorde van H2 naar H6. Maar als ik dezelfde H stijlen gebruik bij de About pagina, dan staan de h's niet meer op volgorde. Moet je dan 2 verschillende style sheets maken?
• | het is ook lastiger om de kopjes vorm te geven, gezien h6:nth(1) { } niet dezelfde kleur heeft op de home page als op de about page. Hoe kan ik dit oplossen?
• | Ik heb ook een aantal div's.... Omdat er was 'decoratie figuren' in het ontwerp zitten. moet ik die veranderen naar svg's? Zodat de div's weg gaan? En graag nog een x de uitleg wanneer secties, en div's te gebruiken :D.
• | Hoe noem je zo'n uitschuif menu?
</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |

  <b>Robin</b>
  - gebruik een echte SVG tag. let erop dat je alles netjes nest.
  - Bij het gebruikt van een section, moet een heading. Je mag wel sections gebruiken.
  - je mag niet veel sections in eeen section stoppen.

  <b>Xar</b>
  - Je kan een nav in je footer plaatsen. Youtube.


  <b>Maaike</b>
  - Id voor de body van pagina 2. En daarin de headings anders aanspreken.
  headings zijn alleen voor belangijke section. Alles wat daarin hoort, wordt georganiseerd in headings, dus belangrijkste h2, dan 3.etc
  - GEEN DIV. Gebruikt de svg;s. Als je dingen wilt boxen, gebruik dan figure. = voor figuren, video;s, beelden. geen p's, mag wel een fig caption.
  - uitschuif menu heet een detial.
  - ff je eigen linkje in de excel zetten.  - check

  <b>Zhafira</b>
  - iets met labels.

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - SVG's kun je gewoon van de orginele site kopieren van de inspector, en plakken in je eigen code. Het klopt dat deze er elke keer heel anders uitziet.
  - Je kan een #id pagina2 en daarin alle H's en andere vormgeving die aangepast moet worden aanpassen
  - maak de html pagina's.

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Deze keer was ik bezig met het maken van mijn CSS. Het duurde me veelste lang om erachter te komen hoe ik de typografie moest downloaden van de site hurryupanhavefun.com. Nadat ik ze dinsdag 30 sepember had gedowload na een demonstratie van 1 seconde, was het nog lastig uit te zoeken welk lettertype ik had gedownload. Ze hadden namen als 01GDJG13423jgd^&8.tt. Daar maakte ik een test document, om te kijken welke fonts het waren.<br>
 <img src="readme-images/test.png" width="375px" alt="test letterype">
 <img src="readme-images/test_2.png.png" width="375px" alt="test letterype"><br>
 Ook had ik twijfels welke volgorde ik de h2's en h3's moetst doen. Maar Sanne zei dat het al goed was dat ik hier overnadacht, en dat het in prince niet veel uitmaakte, zolang ik kon vertellen waarom ik de keuze had gemaakt. <br><br>

<b>WAT GEDAAN</b>
 - Meerder stylesheets.css gemaakt. 1 voor font faces. 1 om alle headings, p's etc aan te passen. 1 voor alle kleuren. 1 voor all het andere.<br>
 - Heel veel dingen mislukt enzo. <br>


 <b>VRAGEN</b>
 - moeten de SVG's in in het mapje bij je img staan? Of hoeft dat niet omdat ze in code al in de html staan? <br>
 - Hoe kan ik die blauwe blokjes in header niet meer in een margin hebben? Moet ik het dan uit de header halen? En een soort 'zwevend' ding van maken? (tussen de <header> en <main> in). Of is daar een andere code voor?<br>
 - vragen hoe ik de NAV goed krijg. (1. Hoe ze aan de linkerkant komen te staan. 3. Iets met flexbox, en dat ze sticky blijven in de top).<br>
 - Nog een keer vragen welke code/welke site/promp op te zoeken om dat rondje met scrollen te laten draaien. <br>
 - Waarom neemt de <main> niet de hele breedte in beslag, maar lijkt het alsof er een margin omheen zit?<br>

  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |

  <b>Robin</b>
  Niet aan de SVG viewport komen. Je kan css gewoon als svg aanspreken in de css. 

  <b>Maaike</b>
  - gebruik top, right, bij de verschillende elementen.
  - svg's kun je laten staan, maar hoeft niet in een mapje te staan. Is wel handig om een map te hebben waar ze allemaal staan. 

  <b>Zhafira</b>
  Moest een nav tussen bij javascript. 

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Ik moet dingen snelle vragen als ik vastloop, omdat er nogal 'vieze' dingen in mijn code staan.
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. [bron 1](https://www.seoreviewtools.com/html-headings-checker/) - het checken van de headings op de webpagina.
  2. [bron 2](https://ralfvanveen.com/en/tools/alt-attribute-checker/) Alt checker website
  3. [bron3]SVG export - Google Chrome extentie om SVG's van een webpagina te scrapen.
  4. [bron4] Hoe maak je een form?: https://www.google.com/search?q=hoe+maak+je+unvul+form+html&sca_esv=f04038ad81816743&sxsrf=AE3TifN4i9sADXbdX9Vx2Jl7qCX_S6ff_A%3A1758367077756&ei=ZY3OaJzpLYzq7_UPgZCVoQo&ved=0ahUKEwjcr7fom-ePAxUM9bsIHQFIJaQQ4dUDCBA&uact=5&oq=hoe+maak+je+unvul+form+html&gs_lp=Egxnd3Mtd2l6LXNlcnAiG2hvZSBtYWFrIGplIHVudnVsIGZvcm0gaHRtbDIIEAAYgAQYogQyBRAAGO8FMgUQABjvBTIFEAAY7wUyBRAAGO8FSIgtUK8EWIUrcAR4AZABAJgBeKAB9xKqAQQyNS41uAEDyAEA-AEBmAIioALeE6gCEMICBxAjGCcY6gLCAhQQABiABBiRAhi0AhiKBRjqAtgBAcICBBAjGCfCAgsQABiABBiRAhiKBcICChAAGIAEGEMYigXCAgsQLhiABBjRAxjHAcICBRAAGIAEwgIFEC4YgATCAggQLhiABBjUAsICCxAuGIAEGMcBGK8BwgIKECMY8AUYJxjJAsICCBAAGIAEGMsBwgIHEAAYgAQYCsICBhAAGBYYHsICCBAAGAgYDRgewgIHEAAYgAQYDcICCRAAGIAEGBMYDcICCBAAGBMYDRgewgIKEAAYExgIGA0YHsICBRAhGKABwgIHECEYoAEYCsICChAAGAgYChgNGB7CAgsQABiABBiGAxiKBZgDBPEFHL521MX8CMO6BgYIARABGAGSBwQyOC42oAfzxQGyBwQyNC42uAfQE8IHBjUuMjAuOcgHUQ&sclient=gws-wiz-serp
  5. [bron] Forms uitleg: https://chatgpt.com/share/68cea3ac-1ffc-8009-b70a-63681384af5e
  6. [bron] min-max grid uitleg en error fix: https://claude.ai/share/c01c7c22-ea94-4deb-b20e-919cce0d731b
  7. [bron] animation nav: https://chatgpt.com/share/68e0eb5e-b7f0-8009-a091-29389efbdb85
  8. [bron] grid calculator: https://cssgrid-generator.netlify.app/
  9. [bron] space between letters: https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing



</details>
