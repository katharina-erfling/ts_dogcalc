<img width="1071" height="443" alt="Screenshot 2026-05-14 122632" src="https://github.com/user-attachments/assets/55cda7c3-2305-4dd8-aab8-8a916864836d" />

# 🐾 ts_dogcal

Ein Kalorienrechner für Hunde – berechnet den Energiegehalt von Hundefutter anhand der Nährstoffangaben auf der Verpackung.

🚧 Work in Progress  
Erste Version fertig – Speicherfunktion und weitere Features geplant.

---

## 📁 Projektstruktur
```
/
├── index.html
├── tsconfig.json
├── css/
│   └── style.css
├── script/
│   ├── calculator.ts
│   └── main.ts
└── dist/
    ├── calculator.js
    └── main.js
```

---

## 💡 Idee

Viele Hundefutter-Hersteller geben keine Kalorien auf der Verpackung an – nur Makronährstoffe und Feuchtigkeit. Mit der **Modified Atwater Methode** lassen sich daraus die metabolisierbaren Kalorien berechnen, genau wie es in der Veterinärmedizin und von AAFCO empfohlen wird.

> 🔬 **Modified Atwater Methode** – Branchenstandard zur Kalorienberechnung von Heimtierfutter: `ME (kcal/100g) = 3.5 × Protein + 8.5 × Fett + 3.5 × NFE`

> 🧮 **NFE (stickstofffreie Extraktstoffe)** – Kohlenhydrate werden per Differenzformel berechnet: `NFE = 100 − (Protein + Fett + Rohfaser + Feuchtigkeit + Rohasche)`

> 📦 **Feuchtigkeit optional** – fehlt die Angabe auf der Verpackung, kann der Futtertyp (Trocken, Nass, Snack, BARF) gewählt werden – der Feuchtigkeitswert wird dann als Richtwert geschätzt und klar als solcher gekennzeichnet

---

## ✨ Features

- Berechnung von kcal/100g und kcal/Portion
- Unterstützung für Komma- und Punkteingabe
- Tastatursteuerung – Berechnung per Enter-Taste
- Kategorie-Auswahl wenn Feuchtigkeit nicht auf der Verpackung steht
- Tooltip-Erklärung für NFE
- Validierung aller Pflichtfelder mit spezifischen Fehlermeldungen

---

## 🛠️ Technologien
- **TypeScript** – Interfaces, Typisierung, modularer Aufbau
- **HTML5** – semantisches Markup, ARIA-Attribute
- **CSS3** – eigene Design-Tokens, Tooltip, responsive Layout
