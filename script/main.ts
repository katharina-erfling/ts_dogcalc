import { calculateCalories } from "./calculator.js";



const checkbox = document.getElementById('use-category') as HTMLInputElement;
const categorySection = document.getElementById('category-section') as HTMLElement;
const moistureDirect = document. getElementById('moisture-direct-section') as HTMLElement;
const proteinInput = document.getElementById('protein') as HTMLInputElement;
const fatInput = document.getElementById('fat') as HTMLInputElement;
const fiberInput = document.getElementById('fiber') as HTMLInputElement;
const ashInput = document.getElementById('ash') as HTMLInputElement;
const weightInput = document.getElementById('weight') as HTMLInputElement;
const moistureCustomInput = document.getElementById('moisture-custom') as HTMLInputElement;
const moistureDirectInput = document.getElementById('moisture-direct') as HTMLInputElement;
const errorBox = document.getElementById('error-box') as HTMLElement;
const calcButton = document.getElementById('calc-btn') as HTMLElement;
const resultSection = document.getElementById('result-section') as HTMLElement;
const showResult = document.getElementById('res-per100') as HTMLElement;
const resultTotalWrap = document.getElementById('res-total-wrap') as HTMLElement;
const resultKcalPerPortion = document.getElementById('res-total') as HTMLElement;
const resultNfe = document.getElementById('res-nfe') as HTMLElement;
const resultMoisture = document.getElementById('res-moisture') as HTMLElement;


checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        categorySection.classList.remove('hidden');
        moistureDirect.classList.add('hidden');

    } else {
        categorySection.classList.add('hidden');
        moistureDirect.classList.remove('hidden');
    }
});


const catButtons = document.querySelectorAll('.cat-btn');

catButtons.forEach(button => {
    button.addEventListener('click', function() {
        catButtons.forEach(btn => (btn as HTMLElement).classList.remove('selected'));
        (button as HTMLElement).classList.add('selected');

        let moisture = (button as HTMLElement).dataset.moisture;
        moistureCustomInput.value = moisture ?? '';
    });
});



const calculate = () => {
     // Obligatorisch
    const protein = proteinInput.value;
    const fat = fatInput.value;
    const fiber = fiberInput.value;

    // Optional   
    const ash = ashInput.value; 
    const weight = weightInput.value;

    

    let moisture = '';
    if (checkbox.checked) {
        moisture = moistureCustomInput.value;
    } else {
        moisture = moistureDirectInput.value;
    };



    if (protein === '') {
        errorBox.style.display = 'block';
        errorBox.textContent = 'Angabe fehlt! Bitte gib den Proteingehalt an.'
        return;      
    }

    if (fat === '') {
        errorBox.style.display = 'block';
        errorBox.textContent = 'Angabe fehlt! Bitte gib den Fettgehalt an.'
        return;
    }

    if (fiber === '') {
        errorBox.style.display = 'block';
        errorBox.textContent = 'Angabe fehlt! Bitte gib den Rohfaseranteil an.'
        return;
    }

    if (moisture === '') {
        errorBox.style.display = 'block';
        errorBox.textContent = 'Angabe fehlt! Bitte gib den Feuchtigkeitsgehalt an.'
        return;
    }


    // Berechnung
    errorBox.style.display = 'none';
    const result = calculateCalories({
        protein: parseFloat(protein.replace(',', '.')),
        fat: parseFloat(fat.replace(',', '.')),
        fiber: parseFloat(fiber.replace(',', '.')),
        ash: parseFloat(ash.replace(',', '.')),
        weight: parseFloat(weight.replace(',', '.')),
        moisture: parseFloat(moisture.replace(',', '.')),
    });

    // Ergebnis

    // Section sichtbar machen
    resultSection.classList.remove('hidden');

    // Ergebnis anzeigen    
    showResult.textContent = String(result.kcalPer100g);

    
    if (weight !== '') {        
        resultKcalPerPortion.textContent = String(result.kcalPerPortion);
        resultTotalWrap.classList.remove('hidden');
    } else {
        resultTotalWrap.classList.add('hidden');
    }

    resultNfe.textContent = String(result.nfe);

    resultMoisture.textContent = String(moisture);
    
}


calcButton.addEventListener('click', calculate);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') calculate();
});



    