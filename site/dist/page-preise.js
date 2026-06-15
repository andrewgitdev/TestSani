// Auto-kompiliert aus site/page-preise.jsx (kein Browser-Babel mehr).
// Quelle bleibt site/page-preise.jsx — bei Änderungen neu kompilieren.
(function () {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// page-preise.jsx
const TIERS = [{
  name: 'Notfall-Einsatz',
  icon: 'zap',
  tone: 'brand',
  price: '149',
  unit: '/ Anfahrt',
  tagline: 'Wenn es schnell gehen muss',
  desc: 'Soforthilfe rund um die Uhr – transparenter Festpreis, bevor wir loslegen.',
  features: ['Anfahrt in der Region Basel', 'Reaktion in 30 Minuten', '24/7 verfügbar', 'Festpreis vorab', 'Material nach Aufwand'],
  cta: 'Notdienst rufen',
  highlight: false
}, {
  name: 'Wartungs-Abo',
  icon: 'shield-check',
  tone: 'copper',
  price: '29',
  unit: '/ Monat',
  tagline: 'Vorbeugen statt reparieren',
  desc: 'Ihre Anlagen bleiben in Topform – und im Notfall werden Sie priorisiert behandelt.',
  features: ['Jährliche Komplett-Kontrolle', 'Priorisierte Notfall-Termine', '–15 % auf alle Einsätze', 'Digitales Wartungsprotokoll', 'Keine Anfahrtspauschale'],
  cta: 'Abo abschliessen',
  highlight: true
}, {
  name: 'Komplett-Sanierung',
  icon: 'crown',
  tone: 'steel',
  price: 'auf Anfrage',
  unit: '',
  tagline: 'Ihr Projekt, schlüsselfertig',
  desc: 'Von der Planung bis zur Übergabe – ein Ansprechpartner für Ihr ganzes Projekt.',
  features: ['Kostenlose 3D-Planung', 'Fixe Termin- & Kostengarantie', 'Alle Gewerke koordiniert', 'Schlüsselfertige Übergabe', '5 Jahre Garantie'],
  cta: 'Beratung anfragen',
  highlight: false
}];
const FAQ = [{
  q: 'Sind die Preise wirklich fix?',
  a: 'Ja. Sie erhalten den Festpreis schriftlich, bevor wir mit der Arbeit beginnen. Was wir nennen, gilt – keine bösen Überraschungen.'
}, {
  q: 'Was kostet der Notdienst nachts?',
  a: 'Auch nachts und am Wochenende gilt ein transparenter Festpreis. Allfällige Zuschläge nennen wir Ihnen vorab am Telefon.'
}, {
  q: 'Wie funktioniert das Wartungs-Abo?',
  a: 'Sie zahlen monatlich, wir kümmern uns um die jährliche Kontrolle und priorisieren Ihre Notfälle. Jederzeit monatlich kündbar.'
}, {
  q: 'Übernehmen Sie die Versicherungs-Abwicklung?',
  a: 'Bei Wasserschäden dokumentieren wir alles sauber und koordinieren direkt mit Ihrer Gebäude- oder Hausratversicherung.'
}];
function FaqItem({
  q,
  a,
  i
}) {
  const [open, setOpen] = React.useState(i === 0);
  return /*#__PURE__*/React.createElement(Reveal, {
    delay: i * 60
  }, /*#__PURE__*/React.createElement("div", {
    className: `overflow-hidden rounded-2xl border transition-colors ${open ? 'border-brand/30 bg-white' : 'border-navy/8 bg-white'}`
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    className: "flex w-full items-center justify-between gap-4 p-5 text-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-sans text-lg font-semibold text-navy"
  }, q), /*#__PURE__*/React.createElement("span", {
    className: `grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${open ? 'bg-brand text-white rotate-45' : 'bg-surface text-navy/60'}`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid transition-all duration-400",
    style: {
      gridTemplateRows: open ? '1fr' : '0fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden"
  }, /*#__PURE__*/React.createElement("p", {
    className: "px-5 pb-5 leading-relaxed text-navy/60"
  }, a)))));
}
function PreisePage({
  nav,
  site
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-enter"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Preise & Pakete",
    title: "Transparente Preise, klare Pakete",
    sub: "Sie wissen immer, woran Sie sind: Festpreis vorab, keine versteckten Kosten. W\xE4hlen Sie das Paket, das zu Ihnen passt."
  }), /*#__PURE__*/React.createElement("section", {
    className: "bg-white py-12 md:py-28"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-7xl px-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid items-stretch gap-7 lg:grid-cols-3"
  }, TIERS.map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t.name,
    delay: i * 110,
    dir: "up",
    className: t.highlight ? 'lg:-mt-5 lg:mb-0' : ''
  }, /*#__PURE__*/React.createElement("div", {
    className: `relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-7 transition-all duration-400 sm:p-8 ${t.highlight ? 'bg-navy text-white shadow-lift ring-2 ring-copper' : 'border border-navy/10 bg-white text-navy shadow-soft hover:-translate-y-1.5 hover:shadow-lift'}`
  }, t.highlight && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-br from-navy via-navy-800 to-[#06304f] gradient-pan"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute right-6 top-6 z-10 inline-flex items-center gap-1.5 rounded-full bg-copper px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-wider text-white shadow-copper"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 13
  }), "Beliebt")), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 flex h-full flex-col"
  }, /*#__PURE__*/React.createElement("span", {
    className: `grid h-12 w-12 place-items-center rounded-2xl sm:h-14 sm:w-14 ${t.highlight ? 'bg-white/15 text-brand-glow ring-1 ring-white/20' : 'bg-surface text-brand'}`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t.icon,
    sizeClass: "h-6 w-6 sm:h-7 sm:w-7",
    strokeWidth: 1.8
  })), /*#__PURE__*/React.createElement("h3", {
    className: "mt-5 font-sans text-2xl font-bold"
  }, t.name), /*#__PURE__*/React.createElement("p", {
    className: `mt-1 text-sm ${t.highlight ? 'text-white/60' : 'text-navy/55'}`
  }, t.tagline), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex items-end gap-1"
  }, t.price !== 'auf Anfrage' && /*#__PURE__*/React.createElement("span", {
    className: `font-sans text-sm ${t.highlight ? 'text-white/60' : 'text-navy/50'}`
  }, "CHF"), /*#__PURE__*/React.createElement("span", {
    className: `font-sans font-bold leading-none ${t.price === 'auf Anfrage' ? 'text-3xl' : 'text-5xl'}`
  }, t.price), /*#__PURE__*/React.createElement("span", {
    className: `pb-1 text-sm ${t.highlight ? 'text-white/55' : 'text-navy/50'}`
  }, t.unit)), /*#__PURE__*/React.createElement("p", {
    className: `mt-4 text-[15px] leading-relaxed ${t.highlight ? 'text-white/65' : 'text-navy/60'}`
  }, t.desc), /*#__PURE__*/React.createElement("ul", {
    className: "mt-6 flex flex-col gap-3"
  }, t.features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    className: "flex items-start gap-2.5 text-[15px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: `mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${t.highlight ? 'bg-copper text-white' : 'bg-brand/12 text-brand'}`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13,
    strokeWidth: 3
  })), /*#__PURE__*/React.createElement("span", {
    className: t.highlight ? 'text-white/85' : 'text-navy/75'
  }, f)))), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 pt-2"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => nav('kontakt'),
    variant: t.highlight ? 'primary' : 'navy',
    className: "w-full",
    iconRight: "arrow-right"
  }, t.cta))))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-8 text-center text-sm text-navy/45"
  }, "Alle Preise in CHF inkl. MwSt. \xB7 Material und Entsorgung nach Aufwand \xB7 Festpreis immer vorab schriftlich.")))), /*#__PURE__*/React.createElement("section", {
    className: "bg-white py-12 md:py-28"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-3xl px-6"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "text-center"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    className: "justify-center"
  }, "H\xE4ufige Fragen")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 70
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-4 text-center font-sans text-3xl font-bold text-navy md:text-5xl"
  }, "Gut zu wissen")), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 flex flex-col gap-3 md:mt-12"
  }, FAQ.map((f, i) => /*#__PURE__*/React.createElement(FaqItem, _extends({
    key: f.q
  }, f, {
    i: i
  })))))));
}
window.PreisePage = PreisePage;
})();
