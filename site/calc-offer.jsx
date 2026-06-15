// calc-offer.jsx — projekttyp-getriebener Offerten-Rechner (mehrstufig, mit Live-Schätzung)
const { useState: useCS, useRef: useCR, useMemo: useCM } = React;

const {
  CALC_TYPES, RENO_TYPES, BAD_ERSETZEN, ALTER_OPTS, BAD_FLIESEN,
  UMBAU_BEREICH, UMBAU_UMFANG, NEUBAU_AUSBAU, NOTFALL_ART, WARTUNG_ART,
  QUALITY, BRANDS, EXTRAS, ZEITRAHMEN,
  fmtChf, byId, priceFor, includedSummary, summaryRows, detailsComplete,
} = window.CALC_CFG;
const { OptionCard, CalcSlider, CalcStepper, FieldGroup, BrandChip, CalcField } = window.CalcUI;
const { DetailsBody, QualityBody, ContactBody, ResultView, ResultSent } = window.CalcSteps;

const STEP_META = {
  type:    'Projekt',
  details: 'Details',
  quality: 'Ausstattung',
  contact: 'Standort & Kontakt',
};
function flowFor(type) {
  const f = ['type', 'details'];
  if (RENO_TYPES.includes(type)) f.push('quality');
  f.push('contact');
  return f;
}

const INITIAL = {
  type: '',
  details: { size: 5, ersetzen: [], alter: '', fliesen: '', bereich: '', umfang: '', baeder: 2, stockwerke: 1, ausbau: '', art: '' },
  quality: { preisklasse: 'mittel', marke: '', extras: [] },
  contact: { plz: '', ort: '', zeitrahmen: 'monate', name: '', phone: '', email: '', rueckruf: true },
};

function CalcOffer({ site, nav }) {
  const SITE = site || window.SITE || { tel: '061 123 45 67', telRaw: '+41611234567' };

  const [step, setStep] = useCS(0);
  const [data, setData] = useCS(INITIAL);
  const [errors, setErrors] = useCS({});
  const [sent, setSent] = useCS(false);

  const flow = flowFor(data.type || 'bad');
  const RESULT = flow.length;
  const stepKey = step < RESULT ? flow[step] : 'result';
  const est = useCM(() => priceFor(data), [data]);
  const typeObj = byId(CALC_TYPES, data.type);
  const isEmergency = data.type === 'notfall';

  /* nested updaters */
  const setType = (id) => setData((s) => ({ ...s, type: id }));
  const setDetail = (k, v) => setData((s) => ({ ...s, details: { ...s.details, [k]: v } }));
  const toggleDetail = (k, v) => setData((s) => {
    const arr = s.details[k] || []; const has = arr.includes(v);
    return { ...s, details: { ...s.details, [k]: has ? arr.filter((x) => x !== v) : [...arr, v] } };
  });
  const setQuality = (k, v) => setData((s) => ({ ...s, quality: { ...s.quality, [k]: v } }));
  const toggleExtra = (v) => setData((s) => {
    const arr = s.quality.extras || []; const has = arr.includes(v);
    return { ...s, quality: { ...s.quality, extras: has ? arr.filter((x) => x !== v) : [...arr, v] } };
  });
  const setC = (k) => (e) => {
    const val = e && e.target ? (e.target.type === 'checkbox' ? e.target.checked : e.target.value) : e;
    setData((s) => ({ ...s, contact: { ...s.contact, [k]: val } }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: null }));
  };

  const inputCls = (k) => `w-full rounded-xl border bg-surface px-4 py-3 text-navy placeholder-navy/35 transition-colors focus-ring focus:bg-white ${errors[k] ? 'border-copper' : 'border-navy/10 focus:border-brand'}`;

  const validateContact = () => {
    const c = data.contact, er = {};
    if (!c.name.trim()) er.name = 'Bitte Ihren Namen angeben.';
    if (!c.phone.trim()) er.phone = 'Bitte Telefonnummer angeben.';
    else if (!new RegExp('^[+\\d][\\d\\s/().-]{6,}$').test(c.phone)) er.phone = 'Bitte gültige Nummer eingeben.';
    if (!c.email.trim()) er.email = 'Bitte E-Mail angeben.';
    else if (!new RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$').test(c.email)) er.email = 'Bitte gültige E-Mail eingeben.';
    if (!c.plz.trim()) er.plz = 'Bitte PLZ angeben.';
    return er;
  };

  const canNext = (
    stepKey === 'type' ? !!data.type :
    stepKey === 'details' ? detailsComplete(data) :
    stepKey === 'quality' ? !!data.quality.preisklasse :
    true
  );

  const handleNext = () => {
    if (stepKey === 'contact') {
      const er = validateContact();
      setErrors(er);
      if (Object.keys(er).length) return;
      setStep(RESULT);
      return;
    }
    if (!canNext) return;
    setStep(step + 1);
  };
  const handleBack = () => { if (step > 0) setStep(step - 1); };
  const reset = () => { setData(INITIAL); setErrors({}); setSent(false); setStep(0); };

  const progress = step / RESULT;

  return (
    <section id="offerten-rechner" className="relative overflow-hidden bg-navy">
      <WaveDivider color="var(--page-bg)" flip className="absolute -top-px left-0 z-10 w-full" />
      <div className="absolute inset-0" style={{
        background: '#111e2b',
        backgroundImage: `
          radial-gradient(ellipse 80% 60% at 20% 30%, rgba(31,77,115,0.55) 0%, transparent 70%),
          radial-gradient(ellipse 60% 80% at 80% 70%, rgba(28,55,90,0.50) 0%, transparent 65%),
          radial-gradient(ellipse 70% 40% at 10% 80%, rgba(6,48,79,0.45) 0%, transparent 65%)
        `,
        backgroundSize: '160% 160%',
        animation: 'mesh-pan 20s ease-in-out infinite',
      }}></div>
      <style>{`
        @keyframes mesh-pan { 0%,100%{background-position:0% 50%} 33%{background-position:60% 20%} 66%{background-position:40% 80%} }
        /* Mobile/Reduced-Motion: schwere Dauerbewegung des Hintergrunds anhalten */
        @media (max-width:767px){ [style*="mesh-pan"]{animation:none !important} }
        @media (prefers-reduced-motion:reduce){ [style*="mesh-pan"]{animation:none !important} }
        .calc-range{-webkit-appearance:none;appearance:none;height:8px;border-radius:9999px;outline:none;cursor:pointer}
        .calc-range::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;height:26px;width:26px;border-radius:9999px;background:#fff;border:3px solid #2f6694;box-shadow:0 2px 6px rgba(0,0,0,.35);cursor:pointer}
        .calc-range::-moz-range-thumb{height:24px;width:24px;border:3px solid #2f6694;border-radius:9999px;background:#fff;box-shadow:0 2px 6px rgba(0,0,0,.35);cursor:pointer}
        .calc-range:focus-visible{outline:2px solid rgba(138,166,189,.8);outline-offset:3px}
      `}</style>
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#fff 1px,transparent 1px)', backgroundSize: '28px 28px' }}></div>

      <div className="relative z-20 mx-auto max-w-4xl px-5 pt-20 pb-20 sm:px-6 md:pt-32 md:pb-32">
        <div className="text-center">
          <Reveal className="flex justify-center"><SectionLabel light>Offerte-Rechner</SectionLabel></Reveal>
          <Reveal delay={70}>
            <h2 className="mx-auto mt-4 max-w-2xl font-sans text-3xl font-bold leading-tight text-white md:text-5xl">
              Ihre Offerte in 60 Sekunden<span className="text-copper">.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/60 md:text-lg">
              Projekt wählen, ein paar Angaben machen – Sie sehen sofort einen Richtpreis und fragen unverbindlich eine Offerte an.
            </p>
          </Reveal>
        </div>

        <Reveal delay={180} dir="up" once>
          <div className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-white/12 shadow-lift" style={{ background: 'linear-gradient(160deg, #16293c 0%, #0f2031 55%, #0c1a29 100%)' }}>
            <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#fff 1px,transparent 1px)', backgroundSize: '28px 28px' }}></div>
            <div className="relative z-10 p-4 sm:p-7 md:p-9">
              {sent ? (
                <ResultSent contact={data.contact} site={SITE} onReset={reset} />
              ) : (
                <>
                  {/* Progress header */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/70">
                      {stepKey === 'result' ? 'Ergebnis' : `Schritt ${step + 1} von ${RESULT}`}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {flow.map((s, i) => (
                        <span key={s} className={`h-1.5 rounded-full transition-all duration-400 ${i <= step ? 'w-6 bg-brand-glow' : 'w-2.5 bg-white/20'}`}></span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
                    <div className="h-full rounded-full bg-gradient-to-r from-brand via-brand-glow to-copper transition-[width] duration-500 ease-out" style={{ width: `${Math.max(8, progress * 100)}%` }}></div>
                  </div>

                  {/* Live-Schätzung */}
                  {est && step >= 1 && step < RESULT && (
                    <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-brand-glow/25 bg-brand-glow/10 px-4 py-2.5">
                      <span className="flex items-center gap-2 text-[13px] font-medium text-white/70"><Icon name="gauge" size={15} className="text-brand-glow" />Aktuelle Schätzung</span>
                      <span className="font-sans text-base font-bold tabular-nums text-white sm:text-lg">CHF {fmtChf(est.lo)}<span className="px-1 text-white/45">–</span>{fmtChf(est.hi)}</span>
                    </div>
                  )}

                  {/* Step body */}
                  <div className="min-h-0 pt-5 flex flex-col sm:min-h-[420px] sm:pt-7">
                    <div key={stepKey} className="calc-step flex-1 flex flex-col">
                      {stepKey === 'type' && (
                        <StepBlock title="Worum geht es bei Ihrem Projekt?" hint="Der erste Schritt gibt die Richtung vor.">
                          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                            {CALC_TYPES.map((t) => (
                              <OptionCard key={t.id} icon={t.icon} label={t.label} sub={t.sub} note={t.emergency} active={data.type === t.id} onClick={() => setType(t.id)} />
                            ))}
                          </div>
                        </StepBlock>
                      )}

                      {stepKey === 'details' && (
                        <StepBlock title={detailTitle(data.type)} hint="Schätzwerte genügen – Sie können alles anpassen.">
                          <DetailsBody data={data} setDetail={setDetail} toggleDetail={toggleDetail} site={SITE} />
                        </StepBlock>
                      )}

                      {stepKey === 'quality' && (
                        <StepBlock title="Ausstattung & Qualität" hint="Bestimmt Materialien und Preisklasse.">
                          <QualityBody data={data} setQuality={setQuality} toggleExtra={toggleExtra} />
                        </StepBlock>
                      )}

                      {stepKey === 'contact' && (
                        <StepBlock title="Standort & Kontakt" hint="Wir melden uns innert weniger Stunden mit der Offerte.">
                          <ContactBody data={data} setC={setC} errors={errors} inputCls={inputCls} />
                        </StepBlock>
                      )}

                      {stepKey === 'result' && est && (
                        <ResultView data={data} est={est} site={SITE} isEmergency={isEmergency} onConfirm={() => setSent(true)} onReset={reset} />
                      )}
                    </div>
                  </div>

                  {/* Footer nav */}
                  {step < RESULT && (
                    <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/15 pt-5 sm:mt-7 sm:pt-6">
                      <button type="button" onClick={handleBack} disabled={step === 0}
                        className={`inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-4 py-3 text-sm font-semibold transition-all focus-ring sm:py-2.5 ${step === 0 ? 'cursor-not-allowed text-white/20' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
                        <Icon name="arrow-right" size={17} className="rotate-180" />Zurück
                      </button>
                      <Button onClick={handleNext} variant="primary" size="md" iconRight="arrow-right" className={`min-h-[44px] ${canNext ? '' : 'pointer-events-none opacity-40'}`}>
                        {stepKey === 'contact' ? 'Offerte berechnen' : 'Weiter'}
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-lg text-center text-xs leading-relaxed text-white/60">
            Alle Beträge sind unverbindliche Richtwerte in CHF inkl. MwSt. Die finale Offerte erstellen wir nach kurzer Begutachtung – Festpreis immer vorab und schriftlich.
          </p>
        </Reveal>
      </div>

      <WaveDivider color="var(--page-bg)" className="absolute -bottom-px left-0 z-10 w-full" />
    </section>
  );
}

function detailTitle(type) {
  return {
    bad: 'Ihr Badezimmer',
    umbau: 'Küche · WC · Waschküche',
    neubau: 'Ihr Neubau-Projekt',
    notfall: 'Was ist passiert?',
    wartung: 'Welche Leistung brauchen Sie?',
  }[type] || 'Projektdetails';
}

function StepBlock({ title, hint, children }) {
  return (
    <div className="flex flex-col flex-1">
      <h3 className="font-sans text-lg font-bold text-white sm:text-xl md:text-2xl">{title}</h3>
      {hint && <p className="mt-1 text-sm text-white/60">{hint}</p>}
      <div className="mt-4 flex-1 sm:mt-6">{children}</div>
    </div>
  );
}

window.CalcOffer = CalcOffer;
window.__calcParts = { detailTitle, StepBlock };
