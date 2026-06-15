// calc-controls.jsx — Eingabe-Bausteine des Rechners (auf dunkler Glas-Karte)

/* Auswahl-Card: Icon + Label (+ Sub). Funktioniert für Einfach- und
   Mehrfachauswahl – die Logik liegt beim Aufrufer, die Optik ist identisch. */
function OptionCard({ icon, label, sub, active, onClick, note, compact = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      style={{ backgroundColor: '#ffffff', borderColor: active ? '#1f4d73' : 'rgba(31,49,66,0.08)' }}
      className={`group relative flex w-full h-full overflow-hidden rounded-2xl border text-left transition-transform duration-300 focus-ring
        ${compact ? 'flex-col sm:flex-row sm:items-center gap-3 p-3.5 sm:gap-3.5 sm:p-4' : 'flex-row items-center gap-3 p-3 sm:gap-5 sm:p-5 sm:min-h-[118px]'}
        ${active ? 'ring-2 ring-brand/40 shadow-soft' : 'hover:-translate-y-1 hover:shadow-soft'}`}
    >
      {/* Navy-Aktiv-Fläche als eigene statische Ebene – wird frisch gemountet,
          damit das Repaint zuverlässig erfolgt (Toggle der button-eigenen
          background-color wurde von der Engine nicht neu gezeichnet). */}
      {active && <span aria-hidden="true" className="absolute inset-0 z-0" style={{ backgroundColor: '#1f3142' }}></span>}
      <span className={`relative z-10 grid shrink-0 place-items-center rounded-2xl transition-all duration-300
        ${compact ? 'h-11 w-11' : 'h-9 w-9 sm:h-[58px] sm:w-[58px]'}
        ${active ? 'bg-white/15 text-white ring-1 ring-white/25' : 'bg-surface text-brand group-hover:bg-brand/10'}`}>
        {compact
          ? <Icon name={icon} size={22} strokeWidth={1.9} />
          : <Icon name={icon} sizeClass="h-5 w-5 sm:h-[27px] sm:w-[27px]" strokeWidth={1.9} />}
      </span>
      <span className="relative z-10 min-w-0 flex-1 pr-7 sm:pr-8 sm:pt-0.5">
        <span className={`block font-sans font-bold leading-snug [text-wrap:balance] ${compact ? 'text-[15px] sm:text-base' : 'text-[15px] sm:text-lg'} ${active ? 'text-white' : 'text-navy'}`}>{label}</span>
        {sub && <span className={`mt-0.5 block leading-snug ${compact ? 'text-[13px]' : 'text-sm sm:text-[15px]'} ${active ? 'text-white/75' : 'text-navy/55'}`}>{sub}</span>}
        {note && active && (
          <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-copper px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
            <Icon name="zap" size={12} />Notdienst
          </span>
        )}
      </span>
      <span className={`pointer-events-none absolute right-2.5 top-2.5 z-20 grid h-6 w-6 shrink-0 place-items-center rounded-full ring-2 ring-navy/10 transition-all duration-300 sm:right-3 sm:top-3
        ${active ? 'scale-100 bg-white text-navy opacity-100 shadow-soft' : 'scale-50 opacity-0'}`}>
        <Icon name="check" size={15} strokeWidth={3} />
      </span>
    </button>
  );
}

/* Slider mit grossem Wert-Display und live gefülltem Track */
function CalcSlider({ value, min, max, step = 1, unit = '', onChange }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="rounded-2xl border border-white/12 bg-white/5 p-4 sm:p-5">
      <div className="flex items-baseline gap-1">
        <span className="font-sans text-4xl font-bold leading-none text-white tabular-nums">{value}</span>
        <span className="text-lg font-semibold text-white/55">{unit}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={`Wert in ${unit}`}
        className="calc-range mt-4 w-full"
        style={{ background: `linear-gradient(to right, #5b8fbf ${pct}%, rgba(255,255,255,.14) ${pct}%)` }}
      />
      <div className="mt-2 flex justify-between text-[11px] font-medium text-white/40">
        <span>{min}{unit}</span><span>{max}{unit}</span>
      </div>
    </div>
  );
}

/* Stepper +/- für Anzahlen */
function CalcStepper({ label, sub, value, min = 0, max = 99, onChange }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/12 bg-white/5 p-4">
      <div className="min-w-0">
        <div className="font-sans text-base font-bold text-white">{label}</div>
        {sub && <div className="text-sm text-white/55">{sub}</div>}
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min}
          aria-label="weniger"
          className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white transition-colors hover:bg-white/20 focus-ring disabled:cursor-not-allowed disabled:opacity-25">
          <Icon name="minus" size={20} strokeWidth={2.4} />
        </button>
        <span className="min-w-[2ch] text-center font-sans text-2xl font-bold tabular-nums text-white">{value}</span>
        <button type="button" onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max}
          aria-label="mehr"
          className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white transition-colors hover:bg-white/20 focus-ring disabled:cursor-not-allowed disabled:opacity-25">
          <Icon name="plus" size={20} strokeWidth={2.4} />
        </button>
      </div>
    </div>
  );
}

/* Gruppen-Überschrift für ein Feld im Detail-/Ausstattungs-Schritt */
function FieldGroup({ label, hint, children, className = '' }) {
  return (
    <div className={className}>
      <div className="mb-3">
        <h4 className="font-sans text-base font-bold text-white">{label}</h4>
        {hint && <p className="mt-0.5 text-sm text-white/55">{hint}</p>}
      </div>
      {children}
    </div>
  );
}

/* Marken-Pille (optionale Präferenz) */
function BrandChip({ label, active, onClick }) {
  return (
    <button type="button" onClick={onClick} aria-pressed={active}
      style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: active ? '#8aa6bd' : 'rgba(255,255,255,0.16)' }}
      className={`relative overflow-hidden rounded-full border px-4 py-2 text-sm font-semibold transition-transform focus-ring ${active ? 'text-white' : 'text-white/65 hover:text-white'}`}>
      {active && <span aria-hidden="true" className="absolute inset-0 z-0" style={{ backgroundColor: 'rgba(138,166,189,0.22)' }}></span>}
      <span className="relative z-10">{label}</span>
    </button>
  );
}

/* Beschriftetes Eingabefeld (Kontakt / Standort) */
function CalcField({ label, error, children, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-sm font-semibold text-white">{label}</span>
      {children}
      {error && <span className="mt-1 flex items-center gap-1 text-xs font-medium text-copper-light"><Icon name="x" size={13} />{error}</span>}
    </label>
  );
}

window.CalcUI = { OptionCard, CalcSlider, CalcStepper, FieldGroup, BrandChip, CalcField };
