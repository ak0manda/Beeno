// js/main.js

// alle Content-IDs in einem Array
const sections = ['contentHow', 'contentGet', 'contentWhat'];

/**
 * Blendet zuerst alle Sektionen aus und zeigt dann nur die gewünschte.
 * @param {string} id - die ID der zu zeigenden Sektion
 */
function showSection(id) {
  sections.forEach(sec => {
    const el = document.getElementById(sec);
    if (el) el.classList.toggle('hidden', sec !== id);
  });
}

// Event-Handler an die Buttons hängen
document.getElementById('btnHow').addEventListener('click', () => showSection('contentHow'));
document.getElementById('btnGet').addEventListener('click', () => showSection('contentGet'));
document.getElementById('btnWhat').addEventListener('click', () => showSection('contentWhat'));

// **Neu**: direkt beim Laden die "Get"-Sektion anzeigen
document.addEventListener('DOMContentLoaded', () => {
  showSection('contentGet');
});

// Lightning-QR-Code ein/ausblenden
document.getElementById('btnLightning')
  .addEventListener('click', () => {
    // Bitcoin-QR immer verbergen
    document.getElementById('bitcoinQr').classList.add('hidden');
    // Lightning-QR toggeln
    document.getElementById('lightningQr').classList.toggle('hidden');
  });

// Bitcoin-QR-Code ein/ausblenden
document.getElementById('btnBitcoin')
  .addEventListener('click', () => {
    // Lightning-QR immer verbergen
    document.getElementById('lightningQr').classList.add('hidden');
    // Bitcoin-QR toggeln
    document.getElementById('bitcoinQr').classList.toggle('hidden');
  });

  // ganz unten in js/main.js
document.getElementById('btnImprint')
.addEventListener('click', () => {
  document.getElementById('imprint')
    .classList.toggle('hidden');
});
