// Auto-kompiliert aus site/site-config.jsx (kein Browser-Babel mehr).
// Quelle bleibt site/site-config.jsx — bei Änderungen neu kompilieren.
(function () {
// site-config.jsx — zentrale Firmen-Kennzahlen (eine Quelle der Wahrheit).
// Wird VOR den Seiten geladen, damit auch Modul-Konstanten (z. B. die Timeline)
// darauf zugreifen können. Jede Kennzahl nur hier pflegen.
const STATS = {
  founded: 2001,
  // Gründungsjahr
  years: 25,
  // Jahre Erfahrung
  jobs: 14000,
  // erledigte Einsätze
  team: 30,
  // Mitarbeitende / Profis
  satisfaction: 98,
  // % Kundenzufriedenheit
  recommend: 96,
  // % Weiterempfehlung
  responseMin: 30,
  // Ø Reaktionszeit / Anfahrt (Minuten)
  reviews: 320,
  // Anzahl Bewertungen
  rating: 4.9 // Durchschnittsbewertung (von 5)
};

// Schweizer Tausendertrennung mit Hochkomma (identisch zu CountUp/de-CH).
const fmtNum = n => Number(n).toLocaleString('de-CH');
window.STATS = STATS;
window.fmtNum = fmtNum;
})();
