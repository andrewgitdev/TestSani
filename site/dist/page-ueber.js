// Auto-kompiliert aus site/page-ueber.jsx (kein Browser-Babel mehr).
// Quelle bleibt site/page-ueber.jsx — bei Änderungen neu kompilieren.
(function () {
// page-ueber.jsx
const VALUES = [{
  icon: 'clock',
  t: 'Immer erreichbar',
  d: 'Rund um die Uhr, 365 Tage im Jahr. Im Notfall sind wir in 30 Minuten bei Ihnen.'
}, {
  icon: 'banknote',
  t: 'Faire Festpreise',
  d: 'Sie erhalten den Preis vorab – transparent, schriftlich und ohne versteckte Kosten.'
}, {
  icon: 'shield-check',
  t: 'Geprüfte Qualität',
  d: 'Zertifizierte Fachleute, hochwertige Materialien und Garantie auf jede Arbeit.'
}, {
  icon: 'leaf',
  t: 'Nachhaltig denken',
  d: 'Wassersparende Lösungen und energieeffiziente Anlagen – gut für Sie und die Umwelt.'
}];
const TEAM = [{
  i: 'MK',
  n: 'Marco Keller',
  r: 'Geschäftsführer & Sanitär-Meister',
  tone: 'brand'
}, {
  i: 'LB',
  n: 'Lukas Brunner',
  r: 'Leiter Notdienst',
  tone: 'copper'
}, {
  i: 'SF',
  n: 'Sara Fischer',
  r: 'Projektleitung Sanierungen',
  tone: 'steel'
}, {
  i: 'TR',
  n: 'Tobias Roth',
  r: 'Heizungs-Spezialist',
  tone: 'brand'
}];
const TIMELINE = [{
  y: '2001',
  t: 'Gründung in Basel',
  d: 'Marco Keller startet als Ein-Mann-Betrieb mit einem Lieferwagen und viel Leidenschaft.'
}, {
  y: '2009',
  t: 'Eigener Notdienst',
  d: 'Aufbau des 24/7-Notdiensts – seither rund um die Uhr für die Region erreichbar.'
}, {
  y: '2016',
  t: 'Neuer Standort',
  d: 'Umzug an die Industriestrasse mit eigener Werkstatt und Materiallager.'
}, {
  y: '2025',
  t: `Über ${STATS.team} Mitarbeitende`,
  d: 'Heute ein eingespieltes Team aus Profis für Notdienst, Sanierung und Installation.'
}];
function UeberPage({
  nav,
  site
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-enter"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "\xDCber uns",
    title: "Handwerk mit Herz, seit 2001",
    sub: "Ein Familienbetrieb, der aus einem Lieferwagen zum verl\xE4sslichsten Sanit\xE4r-Partner der Region Basel gewachsen ist."
  }), /*#__PURE__*/React.createElement("section", {
    className: "bg-page py-12 md:py-28"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-20"
  }, /*#__PURE__*/React.createElement(Reveal, {
    dir: "left"
  }, /*#__PURE__*/React.createElement(ImagePlaceholder, {
    label: "Unser Team & Werkstatt",
    className: "aspect-[4/3]"
  })), /*#__PURE__*/React.createElement(Reveal, {
    dir: "right",
    delay: 80
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Unsere Geschichte"), /*#__PURE__*/React.createElement("h2", {
    className: "mt-4 font-sans text-3xl font-bold leading-tight text-navy md:text-4xl"
  }, "Vom Lieferwagen zum Team aus Profis"), /*#__PURE__*/React.createElement("p", {
    className: "mt-5 text-lg leading-relaxed text-navy/60"
  }, "Was 2001 als Ein-Mann-Betrieb begann, ist heute ein eingespieltes Team von \xFCber ", STATS.team, " Fachleuten. Geblieben ist, was uns ausmacht: ehrliches Handwerk, faire Preise und ein Versprechen, das wir halten."), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 leading-relaxed text-navy/60"
  }, "Wir behandeln jedes Zuhause so, als w\xE4re es unser eigenes \u2013 sauber, respektvoll und mit dem Anspruch, das Problem beim ersten Mal richtig zu l\xF6sen."), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 grid grid-cols-3 gap-4"
  }, [[`${STATS.years}+`, 'Jahre'], [`${STATS.team}+`, 'Profis'], [`${fmtNum(STATS.jobs)}+`, 'Einsätze']].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    key: b,
    className: "rounded-2xl bg-surface p-4 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-sans text-2xl font-bold text-navy"
  }, a), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-navy/55"
  }, b)))))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-page py-12 md:py-28"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-5xl px-6"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "text-center"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    className: "justify-center"
  }, "Meilensteine")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 70
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-4 text-center font-sans text-3xl font-bold text-navy md:text-5xl"
  }, "Unser Weg")), /*#__PURE__*/React.createElement("div", {
    className: "relative mt-10 md:mt-14"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute left-[27px] top-2 bottom-2 w-px bg-brand/25 md:left-1/2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-10"
  }, TIMELINE.map((m, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: m.y,
    delay: i * 90,
    dir: i % 2 ? 'right' : 'left'
  }, /*#__PURE__*/React.createElement("div", {
    className: `relative flex items-start gap-6 md:w-1/2 ${i % 2 ? 'md:ml-auto md:flex-row' : 'md:flex-row-reverse md:text-right'}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-navy font-sans text-sm font-bold text-white shadow-soft"
  }, m.y), /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border border-navy/8 bg-white p-5 shadow-soft"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-sans text-lg font-bold text-navy"
  }, m.t), /*#__PURE__*/React.createElement("p", {
    className: "mt-1.5 text-sm leading-relaxed text-navy/60"
  }, m.d))))))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-page py-12 md:py-28"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-7xl px-6"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "text-center"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    className: "justify-center"
  }, "Unsere Werte")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 70
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mx-auto mt-4 max-w-2xl text-center font-sans text-3xl font-bold text-navy md:text-5xl"
  }, "Woran Sie uns messen d\xFCrfen")), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
  }, VALUES.map((v, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: v.t,
    delay: i * 90,
    dir: "up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "group h-full rounded-3xl border border-navy/8 bg-surface p-5 transition-all duration-400 hover:-translate-y-1.5 hover:bg-white hover:shadow-lift sm:p-7"
  }, /*#__PURE__*/React.createElement("span", {
    className: "grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand shadow-soft transition-all duration-400 group-hover:bg-brand group-hover:text-white sm:h-14 sm:w-14"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: v.icon,
    sizeClass: "h-[22px] w-[22px] sm:h-[26px] sm:w-[26px]",
    strokeWidth: 1.8
  })), /*#__PURE__*/React.createElement("h3", {
    className: "mt-5 font-sans text-lg font-bold text-navy"
  }, v.t), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm leading-relaxed text-navy/60"
  }, v.d))))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-page py-12 md:py-28"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-7xl px-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-10 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Das Team")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 70
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-4 font-sans text-3xl font-bold text-navy md:text-5xl"
  }, "Die Profis hinter Rheinquell"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 130
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => nav('kontakt'),
    variant: "outline",
    iconRight: "arrow-right"
  }, "Werden Sie Teil des Teams"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
  }, TEAM.map((m, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: m.n,
    delay: i * 90,
    dir: "up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "group overflow-hidden rounded-3xl border border-navy/8 bg-white shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:shadow-lift"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(ImagePlaceholder, {
    label: "Foto",
    className: "aspect-square !rounded-none"
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-4 sm:p-6"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-sans text-lg font-bold text-navy"
  }, m.n), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-sm text-brand"
  }, m.r)))))))));
}
window.UeberPage = UeberPage;
})();
