// page-home.jsx
const { useState: useHS, useEffect: useHE } = React;

function HeroVisual() {
  const steps = [
  { n: 1, icon: 'phone', t: 'Anruf', d: 'Sie rufen an, wir nehmen sofort ab.' },
  { n: 2, icon: 'map-pin', t: 'Anfahrt', d: `Monteur in \u2300 ${STATS.responseMin} Min. bei Ihnen.` },
  { n: 3, icon: 'check-circle', t: 'Lösung', d: 'Reparatur zum garantierten Festpreis.' }];

  return (
    <div className="relative mx-auto w-full max-w-md px-1 pt-6 pb-10 sm:pt-8">
      {/* soft platform glow */}
      <div className="pointer-events-none absolute inset-x-4 bottom-4 h-32 rounded-[50%] bg-brand/30 blur-3xl"></div>

      {/* ── 3-Schritt Ablauf-Karte ── */}
      <div className="relative z-10 overflow-hidden rounded-[20px] border border-white/15 bg-white/[0.07] p-6 shadow-[0_30px_70px_-24px_rgba(0,0,0,.6)] backdrop-blur-xl sm:p-7">
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>

        {/* header */}
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
            </span>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-200">Jetzt erreichbar</span>
          </span>
        </div>
        <h2 className="mt-3 font-sans text-2xl font-bold leading-tight text-white">In 3 Schritten zur Hilfe</h2>

        {/* timeline */}
        <ol className="relative mt-6 space-y-2">
          {/* connecting line */}
          <span className="pointer-events-none absolute left-[18px] top-7 bottom-7 w-px bg-white/15" aria-hidden="true"></span>
          {steps.map((s, i) =>
          <li key={s.n} className="hv-step group/step relative -mx-2 flex items-start gap-4 rounded-xl px-2 py-2 transition-colors duration-300 hover:bg-white/[0.05]" style={{ animationDelay: `${0.5 + i * 0.14}s` }}>
            <span className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy-900 font-sans text-sm font-bold text-white ring-1 ring-white/20 transition-all duration-300 group-hover/step:scale-105 group-hover/step:ring-white/40">{s.n}</span>
            <div className="min-w-0 pt-0.5 transition-transform duration-300 group-hover/step:translate-x-0.5">
              <div className="flex items-center gap-2">
                <Icon name={s.icon} size={17} className="text-brand-glow transition-colors duration-300 group-hover/step:text-white" strokeWidth={1.9} />
                <span className="font-sans text-[15px] font-bold text-white">{s.t}</span>
              </div>
              <p className="mt-1 text-sm leading-snug text-white/65">{s.d}</p>
            </div>
          </li>
          )}
        </ol>

        {/* footer — trust row */}
        <div className="hv-foot mt-7 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
          <div className="flex items-center gap-2">
            <Icon name="star" size={16} className="text-amber-300" strokeWidth={1.9} />
            <span className="font-sans text-sm font-semibold text-white">{STATS.rating}</span>
            <span className="text-sm text-white/55">· {fmtNum(STATS.reviews)}+ Bewertungen</span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.08] px-3 py-1.5 ring-1 ring-white/15">
            <Icon name="shield-check" size={15} className="text-brand-glow" strokeWidth={1.9} />
            <span className="font-sans text-[12px] font-semibold text-white/85">Festpreis garantiert</span>
          </span>
        </div>
      </div>
    </div>);

}

function HomeHero({ nav, site }) {
  return (
    <section className="home-hero relative overflow-hidden bg-navy pt-20 pb-20 md:pt-36 md:pb-56">
      {/* animated gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-800 to-[#06304f] gradient-pan"></div>
      {/* langsam treibende Ambient-Glows – Parallaxe-Tiefe beim Scrollen */}
      <Parallax amount={56} className="pointer-events-none absolute inset-0 z-0">
        <span className="amb-blob amb-blob-1"></span>
        <span className="amb-blob amb-blob-2"></span>
        <span className="amb-blob amb-blob-3"></span>
      </Parallax>
      {/* grid texture – driftet langsam für Tiefe */}
      <Parallax amount={70} className="absolute inset-0 z-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '54px 54px' }}></Parallax>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_.9fr] lg:gap-10">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-copper opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-copper"></span>
              </span>
              <span className="whitespace-nowrap font-sans text-xs uppercase tracking-[0.18em] text-white/80">24/7 Notdienst aktiv</span>
            </div>
          </Reveal>

          <div>
            <h1 className="mt-6 font-sans text-[2.1rem] font-bold leading-[1.07] text-white sm:text-6xl sm:leading-[1.04] lg:text-[4.1rem]">
              <span className="hl-line" style={{ animationDelay: '.12s' }}>Ihr Sanitär-</span>
              <span className="hl-line" style={{ animationDelay: '.24s' }}>Notdienst in der</span>
              <span className="hl-line" style={{ animationDelay: '.36s' }}>Region Basel<span className="text-copper">.</span></span>
            </h1>
            <div className="hl-line mt-5 h-1.5 w-32 rounded-full bg-gradient-to-r from-copper via-copper-light to-transparent" style={{ animationDelay: '.48s' }}></div>
          </div>

          <Reveal delay={170}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Rohrbruch, Verstopfung oder Heizungsausfall? Wir sind rund um die Uhr für Sie da –
              <span className="text-white font-medium"> in 30 Minuten vor Ort</span>, zum garantierten Festpreis.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Button href={`tel:${site.telRaw}`} id="hero-call-cta" variant="primary" size="lg" icon="phone-call" className="w-full sm:w-auto">Anrufen · {site.tel}</Button>
              <Button onClick={() => nav('offerte')} variant="ghost" size="lg" iconRight="arrow-right" className="w-full sm:w-auto">Offerte berechnen</Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="hero-trust mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
              {[
              { icon: 'clock', t: '24/7 erreichbar' },
              { icon: 'shield-check', t: 'Festpreis-Garantie' },
              { icon: 'star', t: `${STATS.rating} / 5 ★ (${fmtNum(STATS.reviews)}+ Bewertungen)` }].
              map((b) =>
              <div key={b.t} className="flex items-center gap-2 text-sm text-white/75">
                  <Icon name={b.icon} size={18} className="text-brand-glow" />
                  <span>{b.t}</span>
                </div>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} dir="right" className="w-full">
          <HeroVisual />
        </Reveal>
      </div>

      <WaveDivider color="var(--page-bg)" className="absolute -bottom-px left-0 w-full" />
    </section>);

}

function NotdienstBanner({ site }) {
  return (
    <Reveal>
      <div className="mx-auto -mt-20 max-w-6xl px-6 relative z-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-copper to-copper-dark p-1 shadow-[0_18px_40px_-22px_rgba(194,56,74,0.45)]">
          <div className="relative flex flex-col items-stretch justify-between gap-5 rounded-[1.35rem] bg-gradient-to-r from-copper to-copper-dark px-5 py-6 text-center md:flex-row md:items-center md:px-7 md:text-left">
            <div className="relative flex items-center justify-center gap-4 text-white md:justify-start">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/20 ring-1 ring-white/30"><Icon name="phone-call" size={28} /></span>
              <div className="text-left">
                <div className="font-sans text-xs uppercase tracking-[0.2em] text-white/80">Notfall? Wir kommen sofort</div>
                <div className="font-sans text-2xl font-bold leading-tight md:text-3xl">In 30 Min. vor Ort</div>
              </div>
            </div>
            <a href={`tel:${site.telRaw}`} className="relative flex items-center justify-center gap-3 rounded-2xl bg-white px-5 py-3.5 font-sans text-xl font-bold text-copper-dark shadow-lg transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02] sm:text-2xl md:px-6 md:text-3xl">
              <Icon name="phone" size={24} />{site.tel}
            </a>
          </div>
        </div>
      </div>
    </Reveal>);

}

const HOME_SERVICES = [
{ icon: 'droplets', t: 'Rohrbruch & Wasserschaden', d: 'Schnelle Ortung und Reparatur bei Leckagen und Rohrbrüchen – Tag und Nacht.', tone: 'brand' },
{ icon: 'waves', t: 'Verstopfung & Abfluss', d: 'Professionelle Rohrreinigung mit Kamera-Inspektion und Hochdruck.', tone: 'cool' },
{ icon: 'flame', t: 'Heizung & Boiler', d: 'Wartung, Reparatur und Ersatz von Heizungen, Boilern und Thermen.', tone: 'copper' },
{ icon: 'bath', t: 'Badsanierung', d: 'Komplette Badumbauten – von der Planung bis zur schlüsselfertigen Übergabe.', tone: 'steel' },
{ icon: 'settings', t: 'Wartung & Service', d: 'Regelmässige Kontrollen und Service-Abos für sorgenfreien Betrieb.', tone: 'navy' },
{ icon: 'hammer', t: 'Installation & Neubau', d: 'Sanitärinstallationen für Neubau, Umbau und Modernisierung.', tone: 'brand' }];


// per-service accent tones — idle icon glyph carries the colour, hover blooms the full tile
const SVC_TONE = {
  brand:  { text: 'text-brand',     fill: 'group-hover:from-brand group-hover:to-brand-light',   glow: 'group-hover:bg-brand/20',      arrow: 'text-brand',     shadow: 'group-hover:shadow-soft' },
  cool:   { text: 'text-[#2E9BD6]', fill: 'group-hover:from-brand-glow group-hover:to-brand',     glow: 'group-hover:bg-brand-glow/25', arrow: 'text-[#2E9BD6]', shadow: 'group-hover:shadow-[0_14px_44px_-12px_rgba(95,183,232,.6)]' },
  copper: { text: 'text-copper',    fill: 'group-hover:from-copper group-hover:to-copper-dark',   glow: 'group-hover:bg-copper/20',     arrow: 'text-copper',    shadow: 'group-hover:shadow-copper' },
  steel:  { text: 'text-[#3a597a]', fill: 'group-hover:from-[#3a597a] group-hover:to-navy',       glow: 'group-hover:bg-[#3a597a]/25',  arrow: 'text-[#3a597a]', shadow: 'group-hover:shadow-lift' },
  navy:   { text: 'text-navy',      fill: 'group-hover:from-navy-700 group-hover:to-navy-900',    glow: 'group-hover:bg-navy/20',       arrow: 'text-navy',      shadow: 'group-hover:shadow-lift' },
};

function ServiceCardInner({ s, i, nav }) {
  const tone = SVC_TONE[s.tone] || SVC_TONE.brand;
  return (
    <button onClick={() => nav('leistungen', `leistung-${i}`)} className="group relative h-full w-full overflow-hidden rounded-3xl border border-navy/8 bg-white p-7 text-left shadow-soft transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_30px_64px_-24px_rgba(11,83,148,0.45)]">
      {/* corner glow */}
      <span className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand/0 blur-2xl transition-colors duration-500 ${tone.glow}`}></span>
      {/* wave pattern */}
      <svg className="pointer-events-none absolute inset-x-0 bottom-0 h-20 w-full text-brand opacity-[0.05] transition-opacity duration-500 group-hover:opacity-[0.11]" viewBox="0 0 300 60" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M0 32 Q 37 10 75 32 T 150 32 T 225 32 T 300 32" />
        <path d="M0 46 Q 37 24 75 46 T 150 46 T 225 46 T 300 46" />
      </svg>
      <div className="relative">
        <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-surface to-surface-200 sm:h-14 sm:w-14 ${tone.text} shadow-soft transition-all duration-400 group-hover:-rotate-6 group-hover:scale-110 ${tone.fill} group-hover:text-white ${tone.shadow}`}>
          <Icon name={s.icon} sizeClass="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.8} />
        </span>
        <h3 className="mt-5 font-sans text-xl font-bold text-navy">{s.t}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-navy/60">{s.d}</p>
        <span className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${tone.arrow} opacity-0 transition-all duration-300 group-hover:opacity-100`}>
          Mehr erfahren <Icon name="arrow-right" size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </button>);
}

function ServicesHeading({ nav }) {
  return (
    <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end">
      <div>
        <Reveal once={false}><SectionLabel>Unsere Leistungen</SectionLabel></Reveal>
        <Reveal once={false} delay={80}><h2 className="mt-4 max-w-2xl font-sans text-3xl font-bold leading-tight text-navy md:text-5xl">Alles aus einer Hand –<br /> sauber, schnell, zuverlässig</h2></Reveal>
      </div>
      <Reveal once={false} delay={140}>
        <Button onClick={() => nav('leistungen')} variant="outline" iconRight="arrow-right">Alle Leistungen</Button>
      </Reveal>
    </div>);
}

/* Kompakte Karte fürs Handy: Icon oben, Titel darunter, keine Beschreibung.
   Tap-Feedback (kein Hover): Karte drückt sich beim Antippen, die Icon-Kachel
   blüht in die Tonfarbe und ein dezentes Tone-Glow legt sich über die Fläche.
   Navigation unverändert über nav('leistungen', `leistung-${i}`). */
function ServiceCardCompact({ s, i, nav }) {
  const tone = SVC_TONE[s.tone] || SVC_TONE.brand;
  const solid = SVC_SOLID[s.tone] || SVC_SOLID.brand;
  return (
    <button
      onClick={() => nav('leistungen', `leistung-${i}`)}
      aria-label={s.t}
      className="group relative flex h-full min-h-[132px] w-full flex-col items-start gap-3 overflow-hidden rounded-2xl border border-navy/8 bg-white p-4 text-left shadow-soft transition-transform duration-200 ease-out active:scale-[0.96]">
      {/* sanftes Tone-Glow beim Drücken – liegt hinter dem Inhalt */}
      <span className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${solid} opacity-0 transition-opacity duration-300 group-active:opacity-[0.07]`}></span>
      {/* Icon-Kachel: füllt sich beim Drücken mit dem Tonfarben-Verlauf */}
      <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl shadow-soft">
        <span className="absolute inset-0 bg-gradient-to-br from-surface to-surface-200"></span>
        <span className={`absolute inset-0 bg-gradient-to-br ${solid} opacity-0 transition-opacity duration-300 group-active:opacity-100`}></span>
        <span className={`relative z-10 ${tone.text} transition-colors duration-300 group-active:text-white`}>
          <Icon name={s.icon} sizeClass="h-[22px] w-[22px]" strokeWidth={1.8} />
        </span>
      </span>
      <h3 className="relative font-sans text-[15px] font-bold leading-snug text-navy text-balance">{s.t}</h3>
    </button>);
}

/* Fallback: gestaffeltes Grid (Mobile + reduced-motion).
   Handy: kompaktes 2×3-Sixpack. Ab sm: die vollen Karten (auch der
   reduced-motion-Fallback auf Desktop bleibt damit unverändert). */
function ServicesGrid({ nav }) {
  return (
    <section className="relative bg-page py-12 md:py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <ServicesHeading nav={nav} />
        {/* Handy: kompaktes 2-Spalten-Raster */}
        <div className="grid grid-cols-2 gap-3 sm:hidden">
          {HOME_SERVICES.map((s, i) => (
            <Reveal key={s.t} delay={Math.floor(i / 2) * 70 + (i % 2) * 35} dir="up" once={false} className="reveal-compact">
              <ServiceCardCompact s={s} i={i} nav={nav} />
            </Reveal>
          ))}
        </div>
        {/* Tablet/Desktop: volle Karten */}
        <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {HOME_SERVICES.map((s, i) => (
            <Reveal key={s.t} delay={((i % 3) + Math.floor(i / 3)) * 95} dir="up" once={false} className="reveal-card">
              <ServiceCardInner s={s} i={i} nav={nav} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>);
}

/* Solid-Gradient pro Tonfarbe für die große Showcase-Kachel */
const SVC_SOLID = {
  brand:  'from-brand to-brand-light',
  cool:   'from-brand-glow to-brand',
  copper: 'from-copper to-copper-dark',
  steel:  'from-[#3a597a] to-navy',
  navy:   'from-navy-700 to-navy-900',
};

/* Scroll-Hijacking: gepinnte Sektion, eine Leistung nach der anderen.
   Gleich lange Abschnitte pro Leistung, flüssig & ohne ruckelndes Snapping. */
function ServicesPinned({ nav }) {
  const N = HOME_SERVICES.length;
  const STEP = 34; // vh Scrollstrecke pro Leistung – gleich für alle
  const wrapRef = React.useRef(null);
  const prevRef = React.useRef(0);
  const [active, setActive] = useHS(0);
  const [dir, setDir] = useHS(1);

  useHE(() => {
    const el = wrapRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const rect = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
        const p = total > 0 ? scrolled / total : 0;
        const a = Math.min(N - 1, Math.floor(p * N));
        if (a !== prevRef.current) {
          setDir(a >= prevRef.current ? 1 : -1);
          prevRef.current = a;
          setActive(a);
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const jumpTo = (k) => {
    const el = wrapRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    // Mitte des jeweiligen Abschnitts ansteuern → bleibt sicher auf der Leistung
    const top = el.offsetTop + ((k + 0.5) / N) * total;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const s = HOME_SERVICES[active];
  const tone = SVC_TONE[s.tone] || SVC_TONE.brand;
  const solid = SVC_SOLID[s.tone] || SVC_SOLID.brand;

  return (
    <section ref={wrapRef} className="relative bg-page" style={{ height: `calc(100vh + ${N * STEP}vh)` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="relative mx-auto w-full max-w-7xl px-6">
          <ServicesHeading nav={nav} />

          <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
            {/* Showcase – wechselt pro Scroll-Abschnitt */}
            <div className="relative flex min-h-[380px] flex-col justify-center overflow-hidden rounded-3xl border border-navy/8 bg-surface/50 p-8 md:min-h-[420px] md:p-12">
              <div key={active} className={`relative ${dir >= 0 ? 'svc-enter-up' : 'svc-enter-down'}`}>
                <span className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${solid} text-white shadow-soft`}>
                  <Icon name={s.icon} sizeClass="h-8 w-8" strokeWidth={1.7} />
                </span>
                <h3 className="mt-6 font-sans text-4xl font-bold leading-[1.05] text-navy md:text-[3.25rem]">{s.t}</h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-navy/60">{s.d}</p>
                <div className="mt-8">
                  <Button onClick={() => nav('leistungen', `leistung-${active}`)} variant="primary" iconRight="arrow-right">Mehr erfahren</Button>
                </div>
              </div>
            </div>

            {/* Auswahl-/Fortschritts-Liste */}
            <div className="flex flex-col gap-2">
              {HOME_SERVICES.map((it, i) => {
                const isActive = i === active;
                const done = i < active;
                const itTone = SVC_TONE[it.tone] || SVC_TONE.brand;
                return (
                  <button
                    key={it.t}
                    onClick={() => jumpTo(i)}
                    aria-current={isActive}
                    className={`group flex items-center gap-4 rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${isActive ? 'border-brand/30 bg-brand/[0.06] shadow-soft' : 'border-transparent hover:border-navy/10 hover:bg-navy/[0.02]'}`}
                  >
                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-all duration-300 ${isActive ? `bg-gradient-to-br ${SVC_SOLID[it.tone] || SVC_SOLID.brand} text-white shadow-soft` : done ? 'bg-brand/12 text-brand' : 'bg-surface text-navy/40 group-hover:text-navy/60'}`}>
                      <Icon name={done ? 'check' : it.icon} sizeClass="h-[18px] w-[18px]" strokeWidth={2} />
                    </span>
                    <span className={`font-sans text-base font-bold transition-colors duration-300 md:text-lg ${isActive ? 'text-navy' : done ? 'text-navy/70' : 'text-navy/50 group-hover:text-navy/80'}`}>{it.t}</span>
                    <Icon name="arrow-right" size={16} className={`ml-auto transition-all duration-300 ${isActive ? `${itTone.arrow} opacity-100` : 'text-navy/30 opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0'}`} />
                  </button>);
              })}
            </div>
          </div>

          {/* Fortschritts-Rail + Scroll-Hinweis */}
          <div className="mt-9 flex items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              {HOME_SERVICES.map((it, i) => (
                <span
                  key={it.t}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i <= active ? 'w-7 bg-brand' : 'w-3 bg-navy/15'}`}
                ></span>
              ))}
            </div>
            <span className={`flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] text-navy/45 transition-opacity duration-500 ${active < N - 1 ? 'opacity-100' : 'opacity-0'}`}>
              Weiter scrollen <Icon name="arrow-down" size={14} className="anim-bounce-soft" />
            </span>
          </div>
        </div>
      </div>
    </section>);
}

function ServicesOverview({ nav }) {
  const [wide, setWide] = useHS(false);
  useHE(() => {
    const mq = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)');
    const apply = () => setWide(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);
  return wide ? <ServicesPinned nav={nav} /> : <ServicesGrid nav={nav} />;
}

function StatsSection() {
  const stats = [
  { to: STATS.years, suffix: '+', label: 'Jahre Erfahrung', icon: 'award' },
  { to: STATS.jobs, suffix: '+', label: 'Einsätze erledigt', icon: 'wrench' },
  { to: STATS.satisfaction, suffix: '%', label: 'Kundenzufriedenheit', icon: 'smile' },
  { to: STATS.responseMin, suffix: ' Min.', label: 'Ø Reaktionszeit', icon: 'clock' }];

  return (
    <section className="relative overflow-hidden bg-navy pb-20 pt-20 md:pb-48 md:pt-36">
      <WaveDivider color="var(--page-bg)" flip className="absolute -top-px left-0 w-full" />
      <Parallax amount={60} className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#fff 1px,transparent 1px)', backgroundSize: '26px 26px' }}></Parallax>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <Reveal className="text-center"><SectionLabel light>In Zahlen</SectionLabel></Reveal>
        <Reveal delay={70}><h2 className="mx-auto mt-4 max-w-2xl text-center font-sans text-3xl font-bold text-white md:text-5xl">Worauf sich die Region Basel verlässt</h2></Reveal>
        <div className="mt-12 grid grid-cols-2 gap-y-10 gap-x-6 md:mt-16 md:grid-cols-4 md:gap-y-12">
          {stats.map((s, i) =>
          <Reveal key={s.label} delay={i * 110} dir="up" className="text-center">
              <span className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-brand-glow ring-1 ring-white/15 sm:h-14 sm:w-14"><Icon name={s.icon} sizeClass="h-[22px] w-[22px] sm:h-[26px] sm:w-[26px]" /></span>
              <div className="font-sans text-[2rem] font-bold text-white sm:text-4xl md:text-5xl">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm tracking-wide text-white/55">{s.label}</div>
            </Reveal>
          )}
        </div>
      </div>
      <WaveDivider color="#f1f3f4" className="absolute -bottom-px left-0 w-full" />
    </section>);

}

function ReviewTeaser({ nav }) {
  const reviews = [
  { q: 'Innert 25 Minuten war der Monteur da und hat den Rohrbruch sofort gestoppt. Absolut empfehlenswert!', n: 'Sandra M.', o: 'Basel', i: 'SM' },
  { q: 'Faire Festpreise, saubere Arbeit, freundliches Team. So stelle ich mir Handwerk vor.', n: 'Daniel R.', o: 'Riehen', i: 'DR' }];

  return (
    <section className="relative bg-page py-12 md:py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-12">
          <div>
            <Reveal><SectionLabel>Bewertungen</SectionLabel></Reveal>
            <Reveal delay={70}><h2 className="mt-4 font-sans text-3xl font-bold leading-tight text-navy md:text-5xl">Über {STATS.reviews} Kundinnen<br /> und Kunden vertrauen uns</h2></Reveal>
            <Reveal delay={130}>
              <div className="mt-6 flex items-center gap-4">
                <StarRating value={5} size={26} />
                <span className="font-sans text-2xl font-bold text-navy">{STATS.rating}<span className="text-navy/40 text-lg font-normal">/5</span></span>
              </div>
            </Reveal>
            <Reveal delay={190}><p className="mt-5 max-w-md leading-relaxed text-navy/60">Echte Bewertungen von Privatkunden, Hausverwaltungen und Liegenschaften aus der ganzen Region Basel.</p></Reveal>
            <Reveal delay={250}><Button onClick={() => nav('referenzen')} variant="brand" className="mt-7" iconRight="arrow-right">Alle Referenzen</Button></Reveal>
          </div>
          <div className="grid gap-5">
            {reviews.map((r, i) =>
            <Reveal key={r.n} delay={i * 140} dir="right">
                <figure className="relative rounded-3xl border border-navy/8 bg-surface p-7 shadow-soft">
                  <Icon name="quote" size={34} className="text-copper/25" />
                  <blockquote className="mt-2 text-lg leading-relaxed text-navy/80">{r.q}</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <AvatarPlaceholder initials={r.i} size={46} />
                    <div>
                      <div className="font-semibold text-navy">{r.n}</div>
                      <div className="text-sm text-navy/50">{r.o}</div>
                    </div>
                    <StarRating value={5} size={15} className="ml-auto" />
                  </figcaption>
                </figure>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>);

}

function OfferteCTA({ nav, site }) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <WaveDivider color="#f1f3f4" flip className="absolute -top-px left-0 z-10 w-full" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-800 to-[#06304f] gradient-pan"></div>
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#fff 1px,transparent 1px)', backgroundSize: '28px 28px' }}></div>
      <WaveDivider color="var(--page-bg)" className="absolute -bottom-px left-0 z-10 w-full" />

      <div className="relative z-20 mx-auto max-w-3xl px-6 pt-20 pb-20 text-center md:pt-32 md:pb-32">
        <Reveal className="flex justify-center"><SectionLabel light>Offerte-Rechner</SectionLabel></Reveal>
        <Reveal delay={70}>
          <h2 className="mx-auto mt-4 max-w-2xl font-sans text-3xl font-bold leading-tight text-white md:text-5xl">
            Ihre Offerte in 60 Sekunden<span className="text-copper">.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/65 md:text-lg">
            Ein paar Klicks genügen – Sie erhalten sofort eine unverbindliche Richtpreis-Schätzung zum garantierten Festpreis.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button onClick={() => nav('offerte')} variant="primary" size="lg" iconRight="arrow-right">Offerte berechnen</Button>
            <Button href={`tel:${site.telRaw}`} variant="ghost" size="lg" icon="phone" className="!border-white/30 !bg-white/10 !text-white">{site.tel}</Button>
          </div>
        </Reveal>
      </div>
    </section>);

}

function HomePage({ nav, site }) {
  return (
    <div className="page-enter">
      <HomeHero nav={nav} site={site} />
      <NotdienstBanner site={site} />
      <ServicesOverview nav={nav} />
      <StatsSection />
      <OfferteCTA nav={nav} site={site} />
      <ReviewTeaser nav={nav} />
    </div>);

}

window.HomePage = HomePage;