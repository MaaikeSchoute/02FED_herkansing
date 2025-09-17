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

  ### Bevindingen
  Op deze site kun je alleen de heading horen, en de linkjes. Niets te horen van de headings, of pharagraph texten. Je kan alleen op de links klikken. Het is wel duidelijk waar de link naartoe gaat. Want dat is beschreven in de knop of link. Alleen iets minder duidelijk als je op 'details' klikt. Dat is een uitklap venster, bij een bepaald onderdeel.  Maar als je de koppen niet kan horen, dan weet je ook niet wat voor details je te zien krijgt. In dit geval niets, want je kan alleen met tab naar de knoppen. 

  <b>Content</b>
  Ja | Het is duidelijke tekst zonder lastige spreekwoorden, of gecompliciseerde metaforen.
  Ja | De knoppen zijn duidelijk beschreven, met duidelijk labels, en unieke beschrijving.

  <b>Global Code</b>
  Ja | De errors die er zijn, zijn er van de "Dupilicate ID", "A bad value" en "Div's". Div's staan meestal in de buttons. 
  Ja | Heeft een Lang attribute. 
  Ja | Elke pagina heeft een eigen titel.
  Ja | vieport zoom werkt.

 <b>Keyboard</b>
 Ja | je ziet een tab randje, bij de elementen die hebt geselecteerd met je keyboard.
 Ja | Alle elementen geselecteerd met de tab worden op volgorde van boven naar beneden, en beneden naar boven van de pagina selecteerd.

 <b>Mobile and Touch</b>
 Nee | Wanneer de mobiel roteerd, dan gaan texten met elkaar overlappen, waardoor de site niet meer leesbaar is.
 Ja | Je kan niet horizontaal scrollen.
 Ja | Knoppen en links kunnen makkelijk worden geklikt.
 Ja | Er zit genoeg ruimte tussen alle interactieve elementen tijdens het scrollen.

 <b>Headings</b>
<img src="readme-images/headings_homepage.jpg" width="375px" alt="Home page HUHF Amount of Headings">
Ja | De home pagina heeft geen H1. Wel 3 h2's en h3's, 4 h5's, en 2 h6.
<img src="readme-images/headings_aboutpage.jpg" width="375px" alt="About page HUHF Amount of Headings">
De About pagina heeft  0 h1, 12 h2's, 15 h3's, 7 h5's en 2 h6's.
Nee | Er zijn geen H1's.
Ja | Headings hebben logische volgorde:
<img src="readme-images/heading_sequence_homepage.jpg" width="375px" alt="About page HUHF heading sequence">
<img src="readme-images/headings_aboutpage.jpg" width="375px" alt="Home page HUHF heading sequence">
Nee | Er zijn wel headinglevels geskipt. De H4. 

<b>Lists</b>
Er wordt geen gebruik gemaakt van li elementen.

<b>Images</b>
<img src="readme-images/about_alt_checker.jpg" width="375px" alt="About alt checker results">
Nee | De website bestaat vooral uit SVG's. Deze afbeeldingen hebben vaak dezelfde (lange 12345234) namen, en zijn niet goed toegankelijk voor slechtziende mensen die met Tab navigeren door de website.
<img src="readme-images/home_alt_check.jog.png" width="375px" alt="Home alt checker results">
Hetzelfde geld voor de homepage. 
Nee | De alt in decoratieve images gebruiken geen "0" value.
<img src="readme-images/image_check_checklist.png" width="375px" alt="proof there's no text to explain img">
Nee | Er zijn geen alt texten, in afbeeldingen waar misschien meer uitleg voor zou moeten zijn.

<b>Media</b>
This site has no media.

<b>Controls</b>
<img src="readme-images/image_check_checklist.png" width="375px" alt="proof there's no text to explain img">
Ja | De site gebruikt <a hrf=src(#)>a</a> elementen bij links.
Ja | De links zien eruit als buttons en staan in de nav.
Ja | De links scrollen mee met de pagina. Maar ze brengen je niet met een sneltoets mee terug naar begin pagina, of laten een layout zien van de verschillende hoofdstukken, waar je naar terug wilt springen.
<img src="readme-images/focus-state.jpg" width="375px" alt="proof site has focus state on links">
Ja | De controls hebben focus state.
<img src="readme-images/focus-state2.jpg" width="375px" alt="proof site has focus state on links">
Ja | Als de control is geselecteerd, dan klapt hij het uitklap menu uit. Anders laat hij hem dicht. 
Ja | Alleen in de NAV ga je naar een andere pagina.

<b>Appearance</b>
Nee | Er is geen dark mode. Alleen een light mode.
Nee | De site ziet er niet anders uit als het verhoogde contrast in ingesteld. 
Nee | Ik kan wel inzoomen en uitzoomen op de pagina, maar ik kan niet met ctrl + de lettertypen groter maken.
Ja | Ook zonder kleur is het duidelijk waar de website over gaat.

<b>Animation</b>
Ja | De animaties zijn subtiel, en trekken niet teveel de aandacht.
Nee | Er is geen video, dus ook geen pauze knop voor een video.
Nee | De afbeeldingen blijven van kleur veranderen als je "Verminder Beweging" inschakeld in "toegankelijkheid".

<b>Color contrast</b>
<img src="readme-images/colorcontrast_check.jpg" width="375px" alt="color contrast data">
<img src="readme-images/colorcontrast_check2.jpg" width="375px" alt="color contrast example">
<img src="readme-images/contrast_check4.jpg" width="375px" alt="color contrast example">
Nee | Op de meeste plaatsen is er een goed verschil tussen de kleuren. Maar niet overal is goed het verschil te zien tussen wit, en beige bijvoorbeeld. Voor teksten is deze wel altijd goed te onderscheiden, maar voor de iconen niet. Zelf vind ik op deze afbeelding: 
<img src="readme-images/contrast_check3.jpg" width="375px" alt="color contrast example 2">
De tekst in het midden niet erg duidelijk contrasterend met de achtergrond. 
Nee | Er is geen :: Selection colors? Niet gevonden ieg.

<b>Samenvatting:</b>
  • | De errors die er zijn, zijn er van de "Dupilicate ID", "A bad value" en "Div's". Div's staan meestal in de buttons. 
  • | De home pagina heeft geen H1. Wel 3 h2's en h3's, 4 h5's, en 2 h6. 
  • | Er worden ook H's geskipt in de volgorde van de pagina. H4 komt bijvoorbeeld helemaal niet voor.
  • | Er wordt geen gebruik gemaakt van li elementen op locaties waar dat wel kan, of een betere oplossing kan zijn.
  • | De website bestaat voor een groot deel uit SVG's. Deze afbeeldingen hebben vaak dezelfde (lange 12345234) namen, en zijn niet goed toegankelijk voor slechtziende mensen die met Tab navigeren door de website.
  • | De alt in decoratieve images gebruiken geen "0" value.
  • | Er zijn geen alt texten, in afbeeldingen waar misschien meer uitleg voor zou moeten zijn.
  • | Er is geen dark mode. Alleen een light mode.
  • | De site ziet er niet anders uit als het verhoogde contrast in ingesteld. 
  • | Ik kan wel inzoomen en uitzoomen op de pagina, maar ik kan niet met ctrl + de lettertypen groter maken.
  • | De afbeeldingen blijven van kleur veranderen als je "Verminder Beweging" inschakeld in "toegankelijkheid".
  • | Op de meeste plaatsen is er een goed verschil tussen de kleuren. Maar niet overal is goed het verschil te zien tussen wit, en beige bijvoorbeeld. Voor teksten is deze wel (bijna) altijd goed te onderscheiden.
  • | maar voor de iconen (logo achtergong, ronding van -> knoppen) niet.
  • | Er is geen :: Selection colors? Niet gevonden ieg.
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


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

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
  2. [bron 2 ](https://ralfvanveen.com/en/tools/alt-attribute-checker/) Alt checker website
  3. ...

</details>