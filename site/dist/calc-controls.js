// Auto-kompiliert aus site/calc-controls.jsx (kein Browser-Babel mehr).
// Quelle bleibt site/calc-controls.jsx — bei Änderungen neu kompilieren.
(function () {
// calc-controls.jsx — Eingabe-Bausteine des Rechners (auf dunkler Glas-Karte)

/* Auswahl-Card: Icon + Label (+ Sub). Funktioniert für Einfach- und
   Mehrfachauswahl – die Logik liegt beim Aufrufer, die Optik ist identisch. */
function OptionCard({
  icon,
  label,
  sub,
  active,
  onClick,
  note,
  compact = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    "aria-pressed": active,
    style: {
      backgroundColor: '#ffffff',
      borderColor: active ? '#1f4d73' : 'rgba(31,49,66,0.08)'
    },
    className: `group relative flex w-full h-full overflow-hidden rounded-2xl border text-left transition-transform duration-300 focus-ring
        ${compact ? 'flex-col sm:flex-row sm:items-center gap-3 p-3.5 sm:gap-3.5 sm:p-4' : 'flex-row items-center gap-3 p-3 sm:gap-5 sm:p-5 sm:min-h-[118px]'}
        ${active ? 'ring-2 ring-brand/40 shadow-soft' : 'hover:-translate-y-1 hover:shadow-soft'}`
  }, active && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "absolute inset-0 z-0",
    style: {
      backgroundColor: '#1f3142'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: `relative z-10 grid shrink-0 place-items-center rounded-2xl transition-all duration-300
        ${compact ? 'h-11 w-11' : 'h-9 w-9 sm:h-[58px] sm:w-[58px]'}
        ${active ? 'bg-white/15 text-white ring-1 ring-white/25' : 'bg-surface text-brand group-hover:bg-brand/10'}`
  }, compact ? /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22,
    strokeWidth: 1.9
  }) : /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    sizeClass: "h-5 w-5 sm:h-[27px] sm:w-[27px]",
    strokeWidth: 1.9
  })), /*#__PURE__*/React.createElement("span", {
    className: "relative z-10 min-w-0 flex-1 pr-7 sm:pr-8 sm:pt-0.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: `block font-sans font-bold leading-snug [text-wrap:balance] ${compact ? 'text-[15px] sm:text-base' : 'text-[15px] sm:text-lg'} ${active ? 'text-white' : 'text-navy'}`
  }, label), sub && /*#__PURE__*/React.createElement("span", {
    className: `mt-0.5 block leading-snug ${compact ? 'text-[13px]' : 'text-sm sm:text-[15px]'} ${active ? 'text-white/75' : 'text-navy/55'}`
  }, sub), note && active && /*#__PURE__*/React.createElement("span", {
    className: "mt-2 inline-flex items-center gap-1.5 rounded-full bg-copper px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 12
  }), "Notdienst")), /*#__PURE__*/React.createElement("span", {
    className: `pointer-events-none absolute right-2.5 top-2.5 z-20 grid h-6 w-6 shrink-0 place-items-center rounded-full ring-2 ring-navy/10 transition-all duration-300 sm:right-3 sm:top-3
        ${active ? 'scale-100 bg-white text-navy opacity-100 shadow-soft' : 'scale-50 opacity-0'}`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    strokeWidth: 3
  })));
}

/* Slider mit grossem Wert-Display und live gefülltem Track */
function CalcSlider({
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const pct = (value - min) / (max - min) * 100;
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border border-white/12 bg-white/5 p-4 sm:p-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-sans text-4xl font-bold leading-none text-white tabular-nums"
  }, value), /*#__PURE__*/React.createElement("span", {
    className: "text-lg font-semibold text-white/55"
  }, unit)), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value)),
    "aria-label": `Wert in ${unit}`,
    className: "calc-range mt-4 w-full",
    style: {
      background: `linear-gradient(to right, #5b8fbf ${pct}%, rgba(255,255,255,.14) ${pct}%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 flex justify-between text-[11px] font-medium text-white/40"
  }, /*#__PURE__*/React.createElement("span", null, min, unit), /*#__PURE__*/React.createElement("span", null, max, unit)));
}

/* Stepper +/- für Anzahlen */
function CalcStepper({
  label,
  sub,
  value,
  min = 0,
  max = 99,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-4 rounded-2xl border border-white/12 bg-white/5 p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-sans text-base font-bold text-white"
  }, label), sub && /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-white/55"
  }, sub)), /*#__PURE__*/React.createElement("div", {
    className: "flex shrink-0 items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onChange(Math.max(min, value - 1)),
    disabled: value <= min,
    "aria-label": "weniger",
    className: "grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white transition-colors hover:bg-white/20 focus-ring disabled:cursor-not-allowed disabled:opacity-25"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "minus",
    size: 20,
    strokeWidth: 2.4
  })), /*#__PURE__*/React.createElement("span", {
    className: "min-w-[2ch] text-center font-sans text-2xl font-bold tabular-nums text-white"
  }, value), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onChange(Math.min(max, value + 1)),
    disabled: value >= max,
    "aria-label": "mehr",
    className: "grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white transition-colors hover:bg-white/20 focus-ring disabled:cursor-not-allowed disabled:opacity-25"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 20,
    strokeWidth: 2.4
  }))));
}

/* Gruppen-Überschrift für ein Feld im Detail-/Ausstattungs-Schritt */
function FieldGroup({
  label,
  hint,
  children,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-sans text-base font-bold text-white"
  }, label), hint && /*#__PURE__*/React.createElement("p", {
    className: "mt-0.5 text-sm text-white/55"
  }, hint)), children);
}

/* Marken-Pille (optionale Präferenz) */
function BrandChip({
  label,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    "aria-pressed": active,
    style: {
      backgroundColor: 'rgba(255,255,255,0.05)',
      borderColor: active ? '#8aa6bd' : 'rgba(255,255,255,0.16)'
    },
    className: `relative overflow-hidden rounded-full border px-4 py-2 text-sm font-semibold transition-transform focus-ring ${active ? 'text-white' : 'text-white/65 hover:text-white'}`
  }, active && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "absolute inset-0 z-0",
    style: {
      backgroundColor: 'rgba(138,166,189,0.22)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "relative z-10"
  }, label));
}

/* Beschriftetes Eingabefeld (Kontakt / Standort) */
function CalcField({
  label,
  error,
  children,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `block ${className}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "mb-1.5 block text-sm font-semibold text-white"
  }, label), children, error && /*#__PURE__*/React.createElement("span", {
    className: "mt-1 flex items-center gap-1 text-xs font-medium text-copper-light"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 13
  }), error));
}
window.CalcUI = {
  OptionCard,
  CalcSlider,
  CalcStepper,
  FieldGroup,
  BrandChip,
  CalcField
};
})();
