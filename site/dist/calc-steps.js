// Auto-kompiliert aus site/calc-steps.jsx (kein Browser-Babel mehr).
// Quelle bleibt site/calc-steps.jsx — bei Änderungen neu kompilieren.
(function () {
// calc-steps.jsx — Schritt-Inhalte des Rechners: Details, Ausstattung, Kontakt, Ergebnis
const {
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
  fmtChf,
  byId,
  includedSummary,
  summaryRows
} = window.CALC_CFG;
const {
  OptionCard,
  CalcSlider,
  CalcStepper,
  FieldGroup,
  BrandChip,
  CalcField
} = window.CalcUI;

/* =========================================================================
   DETAILS — verzweigt nach Projekttyp
========================================================================= */
function DetailsBody({
  data,
  setDetail,
  toggleDetail,
  site
}) {
  const t = data.type,
    d = data.details;
  if (t === 'bad') return /*#__PURE__*/React.createElement("div", {
    className: "space-y-7"
  }, /*#__PURE__*/React.createElement(FieldGroup, {
    label: "Wie gross ist das Bad?",
    hint: "Grobe Sch\xE4tzung gen\xFCgt."
  }, /*#__PURE__*/React.createElement(CalcSlider, {
    value: d.size,
    min: 2,
    max: 16,
    step: 1,
    unit: " m\xB2",
    onChange: v => setDetail('size', v)
  })), /*#__PURE__*/React.createElement(FieldGroup, {
    label: "Was soll ersetzt werden?",
    hint: "Mehrfachauswahl m\xF6glich."
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2.5 sm:grid-cols-3"
  }, BAD_ERSETZEN.map(o => /*#__PURE__*/React.createElement(OptionCard, {
    key: o.id,
    compact: true,
    icon: o.icon,
    label: o.label,
    active: (d.ersetzen || []).includes(o.id),
    onClick: () => toggleDetail('ersetzen', o.id)
  })))), /*#__PURE__*/React.createElement(FieldGroup, {
    label: "Alter der bestehenden Installation"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2.5 sm:grid-cols-3"
  }, ALTER_OPTS.map(o => /*#__PURE__*/React.createElement(OptionCard, {
    key: o.id,
    compact: true,
    icon: o.icon,
    label: o.label,
    sub: o.sub,
    active: d.alter === o.id,
    onClick: () => setDetail('alter', o.id)
  })))), /*#__PURE__*/React.createElement(FieldGroup, {
    label: "Umfang der Arbeiten"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2.5 sm:grid-cols-2"
  }, BAD_FLIESEN.map(o => /*#__PURE__*/React.createElement(OptionCard, {
    key: o.id,
    compact: true,
    icon: o.icon,
    label: o.label,
    sub: o.sub,
    active: d.fliesen === o.id,
    onClick: () => setDetail('fliesen', o.id)
  })))));
  if (t === 'umbau') return /*#__PURE__*/React.createElement("div", {
    className: "space-y-7"
  }, /*#__PURE__*/React.createElement(FieldGroup, {
    label: "Welcher Bereich?"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2.5 sm:grid-cols-4"
  }, UMBAU_BEREICH.map(o => /*#__PURE__*/React.createElement(OptionCard, {
    key: o.id,
    compact: true,
    icon: o.icon,
    label: o.label,
    sub: o.sub,
    active: d.bereich === o.id,
    onClick: () => setDetail('bereich', o.id)
  })))), /*#__PURE__*/React.createElement(FieldGroup, {
    label: "Wie umfangreich?"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2.5 sm:grid-cols-3"
  }, UMBAU_UMFANG.map(o => /*#__PURE__*/React.createElement(OptionCard, {
    key: o.id,
    compact: true,
    icon: o.icon,
    label: o.label,
    sub: o.sub,
    active: d.umfang === o.id,
    onClick: () => setDetail('umfang', o.id)
  })))), /*#__PURE__*/React.createElement(FieldGroup, {
    label: "Alter der bestehenden Installation"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2.5 sm:grid-cols-3"
  }, ALTER_OPTS.map(o => /*#__PURE__*/React.createElement(OptionCard, {
    key: o.id,
    compact: true,
    icon: o.icon,
    label: o.label,
    sub: o.sub,
    active: d.alter === o.id,
    onClick: () => setDetail('alter', o.id)
  })))));
  if (t === 'neubau') return /*#__PURE__*/React.createElement("div", {
    className: "space-y-5"
  }, /*#__PURE__*/React.createElement(CalcStepper, {
    label: "Anzahl B\xE4der / WC",
    sub: "Inkl. G\xE4ste-WC",
    value: d.baeder,
    min: 1,
    max: 8,
    onChange: v => setDetail('baeder', v)
  }), /*#__PURE__*/React.createElement(CalcStepper, {
    label: "Anzahl Stockwerke",
    sub: "Mit Sanit\xE4r-Installation",
    value: d.stockwerke,
    min: 1,
    max: 5,
    onChange: v => setDetail('stockwerke', v)
  }), /*#__PURE__*/React.createElement(FieldGroup, {
    label: "Bauphase"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2.5 sm:grid-cols-2"
  }, NEUBAU_AUSBAU.map(o => /*#__PURE__*/React.createElement(OptionCard, {
    key: o.id,
    compact: true,
    icon: o.icon,
    label: o.label,
    sub: o.sub,
    active: d.ausbau === o.id,
    onClick: () => setDetail('ausbau', o.id)
  })))));
  if (t === 'notfall') return /*#__PURE__*/React.createElement("div", {
    className: "space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2.5 sm:grid-cols-2"
  }, NOTFALL_ART.map(o => /*#__PURE__*/React.createElement(OptionCard, {
    key: o.id,
    icon: o.icon,
    label: o.label,
    sub: o.sub,
    active: d.art === o.id,
    onClick: () => setDetail('art', o.id)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3 rounded-2xl border border-copper/40 bg-copper/15 p-4 sm:flex-row sm:items-center sm:justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-copper text-white shadow-copper"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 20
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-medium text-white/90"
  }, "Akuter Notfall? Am besten sofort anrufen \u2013 wir sind in der Regel in 30\xA0Minuten vor Ort.")), /*#__PURE__*/React.createElement(Button, {
    href: `tel:${site.telRaw}`,
    variant: "primary",
    size: "sm",
    icon: "phone",
    className: "w-full sm:w-auto"
  }, site.tel)));
  if (t === 'wartung') return /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2.5 sm:grid-cols-3"
  }, WARTUNG_ART.map(o => /*#__PURE__*/React.createElement(OptionCard, {
    key: o.id,
    icon: o.icon,
    label: o.label,
    sub: o.sub,
    active: d.art === o.id,
    onClick: () => setDetail('art', o.id)
  })));
  return null;
}

/* =========================================================================
   AUSSTATTUNG & QUALITÄT
========================================================================= */
function QualityBody({
  data,
  setQuality,
  toggleExtra
}) {
  const q = data.quality;
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-7"
  }, /*#__PURE__*/React.createElement(FieldGroup, {
    label: "Preisklasse",
    hint: "Bestimmt Materialien und Apparate."
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2.5 sm:grid-cols-3"
  }, QUALITY.map(o => /*#__PURE__*/React.createElement(OptionCard, {
    key: o.id,
    compact: true,
    icon: o.icon,
    label: o.label,
    sub: o.sub,
    active: q.preisklasse === o.id,
    onClick: () => setQuality('preisklasse', o.id)
  })))), /*#__PURE__*/React.createElement(FieldGroup, {
    label: "Marken-Pr\xE4ferenz",
    hint: "Optional \u2013 wir beraten Sie gerne."
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, BRANDS.map(b => /*#__PURE__*/React.createElement(BrandChip, {
    key: b,
    label: b,
    active: q.marke === b,
    onClick: () => setQuality('marke', q.marke === b ? '' : b)
  })))), /*#__PURE__*/React.createElement(FieldGroup, {
    label: "Extras",
    hint: "Mehrfachauswahl m\xF6glich."
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2.5 sm:grid-cols-4"
  }, EXTRAS.map(o => /*#__PURE__*/React.createElement(OptionCard, {
    key: o.id,
    compact: true,
    icon: o.icon,
    label: o.label,
    active: (q.extras || []).includes(o.id),
    onClick: () => toggleExtra(o.id)
  })))));
}

/* =========================================================================
   STANDORT & KONTAKT
========================================================================= */
function ContactBody({
  data,
  setC,
  errors,
  inputCls
}) {
  const c = data.contact;
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-7"
  }, /*#__PURE__*/React.createElement(FieldGroup, {
    label: "Wo befindet sich das Objekt?",
    hint: "F\xFCr Anfahrt und regionale Planung."
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-4 sm:grid-cols-[140px_1fr]"
  }, /*#__PURE__*/React.createElement(CalcField, {
    label: "PLZ *",
    error: errors.plz
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "numeric",
    value: c.plz,
    onChange: setC('plz'),
    placeholder: "4057",
    className: inputCls('plz')
  })), /*#__PURE__*/React.createElement(CalcField, {
    label: "Ort"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: c.ort,
    onChange: setC('ort'),
    placeholder: "Basel",
    className: inputCls('ort')
  })))), /*#__PURE__*/React.createElement(FieldGroup, {
    label: "Wunsch-Zeitrahmen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2.5 sm:grid-cols-3"
  }, ZEITRAHMEN.map(o => /*#__PURE__*/React.createElement(OptionCard, {
    key: o.id,
    compact: true,
    icon: o.icon,
    label: o.label,
    sub: o.sub,
    active: c.zeitrahmen === o.id,
    onClick: () => setC('zeitrahmen')(o.id)
  })))), /*#__PURE__*/React.createElement(FieldGroup, {
    label: "Ihre Kontaktdaten"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-4 sm:grid-cols-2"
  }, /*#__PURE__*/React.createElement(CalcField, {
    label: "Name *",
    error: errors.name
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: c.name,
    onChange: setC('name'),
    placeholder: "Vor- und Nachname",
    className: inputCls('name')
  })), /*#__PURE__*/React.createElement(CalcField, {
    label: "Telefon *",
    error: errors.phone
  }, /*#__PURE__*/React.createElement("input", {
    type: "tel",
    value: c.phone,
    onChange: setC('phone'),
    placeholder: "079 123 45 67",
    className: inputCls('phone')
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/React.createElement(CalcField, {
    label: "E-Mail *",
    error: errors.email
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: c.email,
    onChange: setC('email'),
    placeholder: "ihre@email.ch",
    className: inputCls('email')
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setC('rueckruf')(!c.rueckruf),
    className: "mt-4 flex w-full items-center gap-3 rounded-xl border border-white/12 bg-white/5 p-3.5 text-left transition-colors hover:bg-white/10 focus-ring"
  }, /*#__PURE__*/React.createElement("span", {
    className: `relative grid h-6 w-6 shrink-0 place-items-center overflow-hidden rounded-md border transition-colors ${c.rueckruf ? 'border-brand-glow text-navy' : 'border-white/30'}`
  }, c.rueckruf && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "absolute inset-0 z-0",
    style: {
      backgroundColor: '#8aa6bd'
    }
  }), c.rueckruf && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    strokeWidth: 3,
    className: "relative z-10"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-white/85"
  }, "Bitte rufen Sie mich innerhalb von 24\xA0Stunden zur\xFCck.")), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-xs text-white/55"
  }, "* Pflichtfeld \xB7 Ihre Daten behandeln wir vertraulich und unverbindlich.")));
}

/* =========================================================================
   ERGEBNIS
========================================================================= */
function ResultView({
  data,
  est,
  site,
  isEmergency,
  onConfirm,
  onReset
}) {
  const included = includedSummary(data);
  const rows = summaryRows(data);
  return /*#__PURE__*/React.createElement("div", null, isEmergency && /*#__PURE__*/React.createElement("div", {
    className: "mb-5 flex flex-col gap-3 rounded-2xl bg-copper p-4 text-white shadow-copper sm:flex-row sm:flex-wrap sm:items-center sm:justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/20"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-sans text-sm font-bold uppercase tracking-wide"
  }, "Notdienst \u2013 rund um die Uhr"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-white/80"
  }, "Bei akuten Sch\xE4den z\xE4hlt jede Minute. Rufen Sie uns direkt an."))), /*#__PURE__*/React.createElement(Button, {
    href: `tel:${site.telRaw}`,
    variant: "ghost",
    size: "sm",
    icon: "phone-call",
    className: "w-full !border-white/40 !bg-white/15 sm:w-auto"
  }, site.tel)), /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-navy-800 to-[#06304f] p-6 text-center shadow-lift md:p-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative z-10"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-sans text-[11px] uppercase tracking-[0.22em] text-brand-glow"
  }, "Unverbindliche Richtpreis-Sch\xE4tzung"), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex flex-wrap items-baseline justify-center gap-x-2 font-sans font-bold leading-tight text-white"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-lg font-semibold text-white/55 sm:text-2xl md:text-3xl"
  }, "ca. CHF"), /*#__PURE__*/React.createElement("span", {
    className: "whitespace-nowrap text-[2rem] sm:text-4xl sm:leading-none md:text-6xl"
  }, fmtChf(est.lo), " ", /*#__PURE__*/React.createElement("span", {
    className: "text-white/45"
  }, "\u2013"), " ", fmtChf(est.hi))), /*#__PURE__*/React.createElement("p", {
    className: "mx-auto mt-3 max-w-md text-sm text-white/55"
  }, "Spanne abh\xE4ngig von Material, Zug\xE4nglichkeit und tats\xE4chlichem Aufwand. Endg\xFCltige Offerte nach kurzer Begutachtung."))), included.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mt-5 rounded-2xl border border-white/12 bg-white/5 p-5"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-sans text-sm font-bold uppercase tracking-wide text-white/85"
  }, "Das ist enthalten"), /*#__PURE__*/React.createElement("ul", {
    className: "mt-3 grid gap-2 sm:grid-cols-2"
  }, included.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "flex items-start gap-2.5 text-sm text-white/75"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    strokeWidth: 2.6,
    className: "mt-0.5 shrink-0 text-brand-glow"
  }), /*#__PURE__*/React.createElement("span", null, it))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 grid gap-3 sm:grid-cols-2"
  }, rows.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "flex items-center gap-3 rounded-xl border border-navy/8 bg-surface p-3.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-brand shadow-soft"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-sans text-[10px] uppercase tracking-wider text-navy/45"
  }, c.label), /*#__PURE__*/React.createElement("div", {
    className: "truncate text-sm font-semibold text-navy"
  }, c.value))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-7 flex flex-col gap-3 sm:flex-row"
  }, /*#__PURE__*/React.createElement(Button, {
    href: `tel:${site.telRaw}`,
    variant: "outline",
    size: "lg",
    icon: "phone",
    className: "w-full sm:flex-1"
  }, "Anrufen \xB7 ", site.tel), /*#__PURE__*/React.createElement(Button, {
    onClick: onConfirm,
    variant: "primary",
    size: "lg",
    iconRight: "send",
    className: "w-full sm:flex-1"
  }, "Jetzt unverbindliche Offerte anfordern")), data.contact.rueckruf && /*#__PURE__*/React.createElement("p", {
    className: "mt-3 flex items-center justify-center gap-2 text-sm text-white/60"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone-incoming",
    size: 15,
    className: "text-brand-glow"
  }), "Wir rufen Sie innerhalb von 24\xA0Stunden zur\xFCck."), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onReset,
    className: "mx-auto mt-4 block text-sm font-medium text-white/55 underline-offset-4 transition-colors hover:text-white hover:underline"
  }, "Neue Berechnung starten"));
}
function ResultSent({
  contact,
  site,
  onReset
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-center py-6 text-center",
    style: {
      minHeight: 360
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid h-20 w-20 place-items-center rounded-full bg-white/10 text-brand-glow ring-1 ring-white/15"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 44,
    strokeWidth: 1.8
  })), /*#__PURE__*/React.createElement("h3", {
    className: "mt-6 font-sans text-2xl font-bold text-white md:text-3xl"
  }, "Anfrage erhalten, ", (contact.name || '').split(' ')[0] || 'gerne', "!"), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 max-w-md leading-relaxed text-white/65"
  }, "Wir pr\xFCfen Ihre Angaben und melden uns innert weniger Stunden mit einer verbindlichen Festpreis-Offerte", contact.rueckruf ? ' – und rufen Sie wie gewünscht innerhalb von 24 Stunden zurück.' : '.', " Bei einem Notfall rufen Sie uns bitte direkt an."), /*#__PURE__*/React.createElement("div", {
    className: "mt-7 flex flex-wrap justify-center gap-3"
  }, /*#__PURE__*/React.createElement(Button, {
    href: `tel:${site.telRaw}`,
    variant: "primary",
    icon: "phone"
  }, site.tel), /*#__PURE__*/React.createElement(Button, {
    onClick: onReset,
    variant: "outline"
  }, "Neue Offerte berechnen")));
}
window.CalcSteps = {
  DetailsBody,
  QualityBody,
  ContactBody,
  ResultView,
  ResultSent
};
})();
