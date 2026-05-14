import { calculateCalories } from "./calculator.js";
const checkbox = document.getElementById('use-category');
const categorySection = document.getElementById('category-section');
const moistureDirect = document.getElementById('moisture-direct-section');
const proteinInput = document.getElementById('protein');
const fatInput = document.getElementById('fat');
const fiberInput = document.getElementById('fiber');
const ashInput = document.getElementById('ash');
const weightInput = document.getElementById('weight');
const moistureCustomInput = document.getElementById('moisture-custom');
const moistureDirectInput = document.getElementById('moisture-direct');
const errorBox = document.getElementById('error-box');
const calcButton = document.getElementById('calc-btn');
const resultSection = document.getElementById('result-section');
const showResult = document.getElementById('res-per100');
const resultTotalWrap = document.getElementById('res-total-wrap');
const resultKcalPerPortion = document.getElementById('res-total');
const resultNfe = document.getElementById('res-nfe');
const resultMoisture = document.getElementById('res-moisture');
checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        categorySection.classList.remove('hidden');
        moistureDirect.classList.add('hidden');
    }
    else {
        categorySection.classList.add('hidden');
        moistureDirect.classList.remove('hidden');
    }
});
const catButtons = document.querySelectorAll('.cat-btn');
catButtons.forEach(button => {
    button.addEventListener('click', function () {
        catButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        let moisture = button.dataset.moisture;
        moistureCustomInput.value = moisture !== null && moisture !== void 0 ? moisture : '';
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
    }
    else {
        moisture = moistureDirectInput.value;
    }
    ;
    if (protein === '') {
        errorBox.style.display = 'block';
        errorBox.textContent = 'Angabe fehlt! Bitte gib den Proteingehalt an.';
        return;
    }
    if (fat === '') {
        errorBox.style.display = 'block';
        errorBox.textContent = 'Angabe fehlt! Bitte gib den Fettgehalt an.';
        return;
    }
    if (fiber === '') {
        errorBox.style.display = 'block';
        errorBox.textContent = 'Angabe fehlt! Bitte gib den Rohfaseranteil an.';
        return;
    }
    if (moisture === '') {
        errorBox.style.display = 'block';
        errorBox.textContent = 'Angabe fehlt! Bitte gib den Feuchtigkeitsgehalt an.';
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
    }
    else {
        resultTotalWrap.classList.add('hidden');
    }
    resultNfe.textContent = String(result.nfe);
    resultMoisture.textContent = String(moisture);
};
calcButton.addEventListener('click', calculate);
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter')
        calculate();
});
