// JavaScript Document
console.log("hi");



// [BRON]https://claude.ai/public/artifacts/3512b5ad-9fb9-4c2c-8b88-6288624ce18c | [PROMPT] hi chat. Ik heb een website na gemaatk met html en css, en nu moet ik daar nog een javascript element aan toevoegen. Ik weet alleen helemaal niks van javascript. Kun jij me helpen om dit uit te leggen, of mijn naar (gratis) bronnen te sturen er iets meer over kan leren? Wat ik wil is om een nav element van kleur te laten veranderen, als je op de laatste <p>Inquire</p> drukt. 

// Stap 1: Selecteer de elementen die je nodig hebt
const inquireButton = document.querySelector('nav p'); // De <p> met "Inquire"
const nav = document.querySelector('nav'); // Het <nav> element

// Stap 2: Voeg een click event listener toe
inquireButton.addEventListener('click', function() {
    // Stap 3: Verander de achtergrondkleur van het nav element
    nav.style.backgroundColor = 'var(--color-blue)'; // Of een andere kleur die je wilt
    
    // Optioneel: als je wilt dat het weer terugverandert bij een tweede klik:
    // nav.classList.toggle('active');
});

/* 
UITLEG:
- querySelector zoekt het eerste element dat aan de selector voldoet
- addEventListener 'luistert' naar een gebeurtenis (in dit geval 'click')
- De function() wordt uitgevoerd wanneer er geklikt wordt
- style.backgroundColor verandert de CSS background-color property
*/

// BONUS: Als je wilt dat de kleur tussen verschillende kleuren wisselt bij elke klik:
let colorIndex = 0;
const colors = ['var(--color-pink)', 'var(--color-yellow)', 'var(--color-blue)', 'var(--color-green)'];

inquireButton.addEventListener('click', function() {
    nav.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; // Ga naar de volgende kleur
});