// Auto-kompiliert aus site/calc-config.jsx (kein Browser-Babel mehr).
// Quelle bleibt site/calc-config.jsx — bei Änderungen neu kompilieren.
(function () {
// calc-config.jsx — Konfiguration & Preislogik des Offerten-Rechners
// Alle Beträge sind unverbindliche CHF-Richtwerte als Spanne [von, bis] und
// zentral hier anpassbar.

/* ---- 1) Projekttypen ---------------------------------------------------- */
const CALC_TYPES = [{
  id: 'bad',
  icon: 'bath',
  label: 'Badezimmer renovieren',
  sub: 'Komplett oder teilweise'
}, {
  id: 'umbau',
  icon: 'droplets',
  label: 'Küche · WC · Waschküche',
  sub: 'Umbau & Erneuerung'
}, {
  id: 'neubau',
  icon: 'building',
  label: 'Neubau-Installation',
  sub: 'Sanitär ab Rohbau'
}, {
  id: 'notfall',
  icon: 'zap',
  label: 'Rohrbruch · Notfall',
  sub: 'Leck · Verstopfung · Schaden',
  emergency: true
}, {
  id: 'wartung',
  icon: 'gauge',
  label: 'Wartung & Service',
  sub: 'Vorsorge & Reparatur'
}];
const RENO_TYPES = ['bad', 'umbau', 'neubau'];

/* ---- 2) Detail-Optionen je Typ ----------------------------------------- */
const BAD_ERSETZEN = [{
  id: 'dusche',
  icon: 'shower-head',
  label: 'Dusche',
  add: [1500, 3200]
}, {
  id: 'badewanne',
  icon: 'bath',
  label: 'Badewanne',
  add: [1800, 4000]
}, {
  id: 'wc',
  icon: 'droplets',
  label: 'WC',
  add: [800, 1700]
}, {
  id: 'lavabo',
  icon: 'droplet',
  label: 'Lavabo',
  add: [600, 1400]
}, {
  id: 'alles',
  icon: 'sparkles',
  label: 'Alles neu',
  add: [5000, 11000]
}];
const ALTER_OPTS = [{
  id: 'neu',
  icon: 'check',
  label: 'Unter 10 Jahre',
  sub: 'Moderne Installation',
  mult: 0.95
}, {
  id: 'mittel',
  icon: 'clock',
  label: '10–25 Jahre',
  sub: 'Solider Bestand',
  mult: 1.0
}, {
  id: 'alt',
  icon: 'history',
  label: 'Über 25 Jahre',
  sub: 'Evtl. neue Leitungen',
  mult: 1.18
}];
const BAD_FLIESEN = [{
  id: 'inkl',
  icon: 'grid',
  label: 'Mit Bau- & Fliesenarbeiten',
  sub: 'Komplette Sanierung',
  mult: 1.35
}, {
  id: 'nur',
  icon: 'wrench',
  label: 'Nur Sanitär',
  sub: 'Geräte & Armaturen',
  mult: 1.0
}];
const UMBAU_BEREICH = [{
  id: 'kueche',
  icon: 'droplets',
  label: 'Küche',
  sub: 'Spüle & Anschlüsse',
  base: [4000, 11000]
}, {
  id: 'wc',
  icon: 'droplet',
  label: 'WC / Gäste-WC',
  sub: 'Kompakt',
  base: [2500, 6000]
}, {
  id: 'waschkueche',
  icon: 'waves',
  label: 'Waschküche',
  sub: 'Anschlüsse & Becken',
  base: [2000, 5000]
}, {
  id: 'mehrere',
  icon: 'layers',
  label: 'Mehrere',
  sub: 'Mehrere Bereiche',
  base: [7000, 16000]
}];
const UMBAU_UMFANG = [{
  id: 'geraete',
  icon: 'wrench',
  label: 'Nur Geräte',
  sub: 'Armaturen ersetzen',
  mult: 0.7
}, {
  id: 'teil',
  icon: 'hammer',
  label: 'Teilumbau',
  sub: 'Teilweise erneuern',
  mult: 1.0
}, {
  id: 'komplett',
  icon: 'sparkles',
  label: 'Komplettumbau',
  sub: 'Alles erneuern',
  mult: 1.5
}];
const NEUBAU_AUSBAU = [{
  id: 'rohbau',
  icon: 'building',
  label: 'Rohbau',
  sub: 'Installation ab Rohbau',
  mult: 1.0
}, {
  id: 'verputzt',
  icon: 'paint-roller',
  label: 'Bereits verputzt',
  sub: 'Aufwändigerer Einbau',
  mult: 1.25
}];
const NOTFALL_ART = [{
  id: 'rohrbruch',
  icon: 'droplets',
  label: 'Rohrbruch',
  sub: 'Leck orten & stoppen',
  base: [250, 700]
}, {
  id: 'wasserschaden',
  icon: 'waves',
  label: 'Wasserschaden',
  sub: 'Mehrere Stellen',
  base: [400, 1500]
}, {
  id: 'verstopfung',
  icon: 'droplet',
  label: 'Verstopfung',
  sub: 'Abfluss / Leitung',
  base: [180, 480]
}, {
  id: 'boiler',
  icon: 'flame',
  label: 'Boiler / Heizung',
  sub: 'Kein Warmwasser',
  base: [300, 900]
}];
const WARTUNG_ART = [{
  id: 'einmal',
  icon: 'wrench',
  label: 'Einmalige Wartung',
  sub: 'Einzeltermin',
  base: [150, 400]
}, {
  id: 'abo',
  icon: 'calendar-check',
  label: 'Wartungs-Abo',
  sub: 'Jährlich, inkl. Check',
  base: [280, 600]
}, {
  id: 'reparatur',
  icon: 'settings',
  label: 'Reparatur',
  sub: 'Defektes Bauteil',
  base: [200, 700]
}];

/* ---- 3) Ausstattung & Qualität ----------------------------------------- */
const QUALITY = [{
  id: 'einstieg',
  icon: 'wallet',
  label: 'Einstieg',
  sub: 'Solide Standard-Qualität',
  mult: 0.85
}, {
  id: 'mittel',
  icon: 'star',
  label: 'Mittel',
  sub: 'Gutes Preis-Leistungs-Verhältnis',
  mult: 1.0
}, {
  id: 'premium',
  icon: 'crown',
  label: 'Premium',
  sub: 'Design & Top-Marken',
  mult: 1.4
}];
const BRANDS = ['Geberit', 'Laufen', 'Hansgrohe', 'Duravit', 'Keine Präferenz'];
const EXTRAS = [{
  id: 'regendusche',
  icon: 'shower-head',
  label: 'Regendusche',
  add: [400, 900]
}, {
  id: 'thermostat',
  icon: 'thermometer',
  label: 'Thermostat-Armatur',
  add: [250, 600]
}, {
  id: 'spuelkasten',
  icon: 'droplets',
  label: 'Unterputz-Spülkasten',
  add: [350, 800]
}, {
  id: 'bodenheizung',
  icon: 'flame',
  label: 'Bodenheizung',
  add: [1200, 3000]
}];

/* ---- 4) Standort & Zeitrahmen ------------------------------------------ */
const ZEITRAHMEN = [{
  id: 'sofort',
  icon: 'zap',
  label: 'So schnell wie möglich',
  sub: 'Dringend',
  mult: 1.08
}, {
  id: 'monate',
  icon: 'calendar-check',
  label: 'In 1–3 Monaten',
  sub: 'Geplant',
  mult: 1.0
}, {
  id: 'flexibel',
  icon: 'clock',
  label: 'Flexibel',
  sub: 'Kein Zeitdruck',
  mult: 0.98
}];

/* ---- 5) Preislogik ------------------------------------------------------ */
function roundChf(n) {
  const step = n >= 10000 ? 100 : n >= 2000 ? 50 : 10;
  return Math.round(n / step) * step;
}
function fmtChf(n) {
  return Math.round(n).toLocaleString('de-CH');
}
function byId(list, id) {
  return list.find(x => x.id === id) || null;
}
function priceFor(data) {
  const t = data.type;
  if (!t) return null;
  const d = data.details || {};
  const q = data.quality || {};
  let lo = 0,
    hi = 0;
  const add = a => {
    if (a) {
      lo += a[0];
      hi += a[1];
    }
  };
  const mul = m => {
    lo *= m;
    hi *= m;
  };
  if (t === 'bad') {
    const size = d.size || 5;
    add([size * 1500, size * 2600]);
    (d.ersetzen || []).forEach(id => add((byId(BAD_ERSETZEN, id) || {}).add));
    mul((byId(ALTER_OPTS, d.alter) || {}).mult || 1);
    mul((byId(BAD_FLIESEN, d.fliesen) || {}).mult || 1);
  } else if (t === 'umbau') {
    add((byId(UMBAU_BEREICH, d.bereich) || {}).base || [3000, 8000]);
    if (!d.bereich) {
      lo = 0;
      hi = 0;
    } else {
      mul((byId(UMBAU_UMFANG, d.umfang) || {}).mult || 1);
      mul((byId(ALTER_OPTS, d.alter) || {}).mult || 1);
    }
  } else if (t === 'neubau') {
    const baeder = d.baeder || 1;
    add([baeder * 7000, baeder * 14000]);
    mul(1 + ((d.stockwerke || 1) - 1) * 0.12);
    mul((byId(NEUBAU_AUSBAU, d.ausbau) || {}).mult || 1);
  } else if (t === 'notfall') {
    add((byId(NOTFALL_ART, d.art) || {}).base);
    if (!d.art) return null;
  } else if (t === 'wartung') {
    add((byId(WARTUNG_ART, d.art) || {}).base);
    if (!d.art) return null;
  }
  if (RENO_TYPES.includes(t)) {
    mul((byId(QUALITY, q.preisklasse) || {}).mult || 1);
    (q.extras || []).forEach(id => add((byId(EXTRAS, id) || {}).add));
  }
  mul((byId(ZEITRAHMEN, (data.contact || {}).zeitrahmen) || {}).mult || 1);
  if (t === 'notfall') mul(1.2); // Notdienst-Zuschlag

  if (hi <= 0) return null;
  return {
    lo: roundChf(lo),
    hi: roundChf(hi)
  };
}

/* kurze „Das ist enthalten"-Liste für die Ergebnis-Seite */
function includedSummary(data) {
  const t = data.type,
    d = data.details || {},
    q = data.quality || {};
  const items = [];
  if (t === 'bad') {
    items.push('Demontage & fachgerechte Entsorgung');
    const fx = (d.ersetzen || []).map(id => (byId(BAD_ERSETZEN, id) || {}).label).filter(Boolean);
    if (fx.length) items.push('Neue Objekte: ' + fx.join(', '));
    items.push(d.fliesen === 'inkl' ? 'Bau-, Abdichtungs- & Fliesenarbeiten' : 'Sanitärinstallation & Anschlüsse');
    items.push('Qualität: ' + ((byId(QUALITY, q.preisklasse) || {}).label || 'Mittel'));
  } else if (t === 'umbau') {
    items.push('Demontage & Entsorgung der Altobjekte');
    items.push((byId(UMBAU_BEREICH, d.bereich) || {}).label + ' – ' + ((byId(UMBAU_UMFANG, d.umfang) || {}).label || ''));
    items.push('Sanitärinstallation & Anschlüsse');
    items.push('Qualität: ' + ((byId(QUALITY, q.preisklasse) || {}).label || 'Mittel'));
  } else if (t === 'neubau') {
    items.push((d.baeder || 1) + ' Bad/WC über ' + (d.stockwerke || 1) + ' Stockwerk(e)');
    items.push('Komplette Sanitär-Rohinstallation & Anschlüsse');
    items.push('Sanitärapparate in Qualität: ' + ((byId(QUALITY, q.preisklasse) || {}).label || 'Mittel'));
  } else if (t === 'notfall') {
    items.push('Sofort-Einsatz & Schadenlokalisierung');
    items.push((byId(NOTFALL_ART, d.art) || {}).label + ' – Eindämmung & Reparatur');
    items.push('Anfahrt & Material (nach Aufwand)');
  } else if (t === 'wartung') {
    items.push((byId(WARTUNG_ART, d.art) || {}).label);
    items.push('Funktionsprüfung & Protokoll');
  }
  const ex = (q.extras || []).map(id => (byId(EXTRAS, id) || {}).label).filter(Boolean);
  if (RENO_TYPES.includes(t) && ex.length) items.push('Extras: ' + ex.join(', '));
  return items;
}

/* Zusammenfassungs-Chips (Icon/Label/Wert) */
function summaryRows(data) {
  const t = data.type,
    d = data.details || {},
    q = data.quality || {};
  const type = byId(CALC_TYPES, t) || {};
  const rows = [{
    icon: type.icon,
    label: 'Projekt',
    value: type.label
  }];
  if (t === 'bad') {
    rows.push({
      icon: 'ruler',
      label: 'Grösse',
      value: (d.size || 5) + ' m²'
    });
    rows.push({
      icon: 'grid',
      label: 'Umfang',
      value: (byId(BAD_FLIESEN, d.fliesen) || {}).label || '—'
    });
    rows.push({
      icon: 'star',
      label: 'Qualität',
      value: (byId(QUALITY, q.preisklasse) || {}).label || '—'
    });
  } else if (t === 'umbau') {
    rows.push({
      icon: 'layers',
      label: 'Bereich',
      value: (byId(UMBAU_BEREICH, d.bereich) || {}).label || '—'
    });
    rows.push({
      icon: 'hammer',
      label: 'Umfang',
      value: (byId(UMBAU_UMFANG, d.umfang) || {}).label || '—'
    });
    rows.push({
      icon: 'star',
      label: 'Qualität',
      value: (byId(QUALITY, q.preisklasse) || {}).label || '—'
    });
  } else if (t === 'neubau') {
    rows.push({
      icon: 'bath',
      label: 'Bäder / WC',
      value: String(d.baeder || 1)
    });
    rows.push({
      icon: 'layers',
      label: 'Stockwerke',
      value: String(d.stockwerke || 1)
    });
    rows.push({
      icon: 'star',
      label: 'Qualität',
      value: (byId(QUALITY, q.preisklasse) || {}).label || '—'
    });
  } else if (t === 'notfall') {
    rows.push({
      icon: 'droplets',
      label: 'Art',
      value: (byId(NOTFALL_ART, d.art) || {}).label || '—'
    });
    rows.push({
      icon: 'zap',
      label: 'Dringlichkeit',
      value: 'Notdienst'
    });
  } else if (t === 'wartung') {
    rows.push({
      icon: 'settings',
      label: 'Leistung',
      value: (byId(WARTUNG_ART, d.art) || {}).label || '—'
    });
  }
  rows.push({
    icon: 'map-pin',
    label: 'Ort',
    value: (data.contact || {}).ort || (data.contact || {}).plz || '—'
  });
  return rows;
}
function detailsComplete(data) {
  const t = data.type,
    d = data.details || {};
  if (t === 'bad') return (d.ersetzen || []).length > 0 && !!d.alter && !!d.fliesen;
  if (t === 'umbau') return !!d.bereich && !!d.umfang && !!d.alter;
  if (t === 'neubau') return (d.baeder || 0) >= 1 && (d.stockwerke || 0) >= 1 && !!d.ausbau;
  if (t === 'notfall') return !!d.art;
  if (t === 'wartung') return !!d.art;
  return false;
}
window.CALC_CFG = {
  CALC_TYPES,
  RENO_TYPES,
  BAD_ERSETZEN,
  ALTER_OPTS,
  BAD_FLIESEN,
  UMBAU_BEREICH,
  UMBAU_UMFANG,
  NEUBAU_AUSBAU,
  NOTFALL_ART,
  WARTUNG_ART,
  QUALITY,
  BRANDS,
  EXTRAS,
  ZEITRAHMEN,
  roundChf,
  fmtChf,
  byId,
  priceFor,
  includedSummary,
  summaryRows,
  detailsComplete
};
})();
