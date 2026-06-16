// app.jsx — shell: routing, bottom navigation, footer, big call CTA
const { useState, useEffect, useRef } = React;

const SITE = {
  name: 'Rheinquell',
  tel: '061 123 45 67',
  telRaw: '+41611234567',
  email: 'notdienst@rheinquell.ch',
  street: 'Industriestrasse 12',
  city: '4057 Basel',
  hoursOffice: 'Mo–Fr  07:30–17:30',
  hoursEmergency: '24/7 · 365 Tage'
};

const NAV = [
{ id: 'home', label: 'Home', icon: 'home' },
{ id: 'leistungen', label: 'Leistungen', icon: 'wrench' },
{ id: 'ueber', label: 'Über uns', icon: 'users' },
{ id: 'preise', label: 'Preise', icon: 'tag' },
{ id: 'offerte', label: 'Offerte', icon: 'calculator' },
{ id: 'referenzen', label: 'Referenzen', icon: 'star' },
{ id: 'kontakt', label: 'Kontakt', icon: 'mail' }];

// primary items shown on the mobile bottom bar
const MOBILE_PRIMARY = ['home', 'leistungen', 'preise', 'kontakt'];

/* Desktop-Navigationsleiste: Top-Level-Links + Dropdowns mit Icon/Titel/Beschreibung */
const MENU = [
{ id: 'home', label: 'Home' },
{
  label: 'Leistungen', page: 'leistungen',
  items: [
  { icon: 'droplets', title: 'Rohrbruch & Wasserschaden', desc: 'Leck orten, stoppen & fachgerecht reparieren.', anchor: 'leistung-0' },
  { icon: 'waves', title: 'Verstopfung & Abfluss', desc: 'Kamera-Inspektion und Hochdruck-Spülung.', anchor: 'leistung-1' },
  { icon: 'flame', title: 'Heizung & Boiler', desc: 'Service, Reparatur und Geräte-Ersatz.', anchor: 'leistung-2' },
  { icon: 'bath', title: 'Badsanierung & Umbau', desc: 'Schlüsselfertig aus einer Hand.', anchor: 'leistung-3' },
  { icon: 'settings', title: 'Wartung & Service', desc: 'Vorsorge mit dem Wartungs-Abo.', anchor: 'leistung-4' },
  { icon: 'hammer', title: 'Installation & Neubau', desc: 'Normgerechte Sanitärinstallation.', anchor: 'leistung-5' }]

},
{ id: 'referenzen', label: 'Referenzen' },
{ id: 'ueber', label: 'Über uns' },
{ id: 'preise', label: 'Preise' },
{ id: 'offerte', label: 'Offerte' },
{ id: 'kontakt', label: 'Kontakt' }];


/* Einzelnes Dropdown / Top-Level-Link der Desktop-Navigation */
function DesktopNavItem({ item, page, nav, openMenu, setOpenMenu, closeTimer }) {
  const hasItems = !!item.items;
  const isOpen = hasItems && openMenu === item.label;
  const active = item.id ?
  page === item.id :
  item.page === page || hasItems && item.items.some((s) => s.page === page);

  const open = () => {clearTimeout(closeTimer.current);setOpenMenu(item.label);};
  const scheduleClose = () => {closeTimer.current = setTimeout(() => setOpenMenu((m) => m === item.label ? null : m), 140);};

  if (!hasItems) {
    return (
      <button
        onClick={() => nav(item.id)}
        className={`rounded-lg px-3.5 py-2 font-sans text-[15px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2
          ${active ? 'text-brand' : 'text-navy/70 hover:bg-surface hover:text-navy'}`}>
        
        {item.label}
      </button>);

  }

  return (
    <div className="relative" onMouseEnter={open} onMouseLeave={scheduleClose}>
      <button
        onClick={() => isOpen ? setOpenMenu(null) : open()}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`inline-flex items-center gap-1 rounded-lg px-3.5 py-2 font-sans text-[15px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2
          ${active || isOpen ? 'text-brand' : 'text-navy/70 hover:bg-surface hover:text-navy'}`}>
        
        {item.label}
        <Icon name="chevron-down" size={16} strokeWidth={2.2} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <div className={`absolute left-0 top-full pt-2.5 transition-all duration-200 ${isOpen ? 'visible opacity-100 translate-y-0' : 'invisible -translate-y-1 opacity-0'}`}>
        <div className="w-[420px] overflow-hidden rounded-xl border border-navy/10 bg-white p-2 shadow-nav">
          {item.items.map((sub) => {
            const subActive = sub.page && sub.page === page;
            return (
              <button
                key={sub.title}
                onClick={() => {nav(sub.page || item.page, sub.anchor);setOpenMenu(null);}}
                className={`flex w-full items-start gap-3.5 rounded-lg p-3 text-left transition-colors ${subActive ? 'bg-surface' : 'hover:bg-surface'}`}>
                
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                  <Icon name={sub.icon} size={20} strokeWidth={1.9} />
                </span>
                <span className="min-w-0">
                  <span className="block font-sans text-[15px] font-semibold leading-snug text-navy">{sub.title}</span>
                  <span className="mt-0.5 block text-[13px] leading-snug text-navy/55">{sub.desc}</span>
                </span>
              </button>);

          })}
        </div>
      </div>
    </div>);

}

/* ===========================================================================
   Header — Desktop: horizontale Navigationsleiste mit Dropdowns.
   Mobile: schlanke Leiste mit Hamburger → Drawer-Overlay.
=========================================================================== */
function Header({ page, nav, site }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {document.documentElement.style.overflow = open ? 'hidden' : '';}, [open]);
  // Escape schliesst das Menü (Tastatur-Zugänglichkeit)
  useEffect(() => {
    const onKey = (e) => {if (e.key === 'Escape') {setOpen(false);setOpenMenu(null);}};
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,backdrop-filter,border-color] duration-300 ease-out ${scrolled ? 'border-navy/10 bg-white/80 shadow-nav backdrop-blur-md' : 'border-navy/8 bg-white'}`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[70px] md:px-6">
          <div className="flex items-center gap-5 xl:gap-8">
            <Logo size="md" onClick={() => nav('home')} />
            {/* Desktop-Navigation */}
            <nav className="hidden items-center gap-0.5 lg:flex">
              {MENU.map((item) =>
              <DesktopNavItem key={item.label} item={item} page={page} nav={nav} openMenu={openMenu} setOpenMenu={setOpenMenu} closeTimer={closeTimer} />
              )}
            </nav>
          </div>

          <div className="flex items-center gap-2.5">
            <Button href={`tel:${site.telRaw}`} variant="primary" size="sm" icon="phone-call" className="hidden sm:inline-flex"><span className="md:hidden">Anrufen</span><span className="hidden md:inline">{site.tel}</span></Button>
            {/* Hamburger nur unter lg */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Menü schliessen' : 'Menü öffnen'}
              aria-haspopup="dialog"
              aria-expanded={open}
              aria-controls="hauptmenue"
              className={`group inline-flex h-11 items-center gap-2 rounded-lg border px-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:bg-copper/10 active:border-copper lg:hidden ${open ? 'border-copper bg-copper/10 text-copper' : 'border-navy/15 text-navy hover:bg-surface hover:border-navy/25'}`}>
              
              <Icon name={open ? 'x' : 'menu'} size={22} strokeWidth={2} />
              <span className="font-sans text-[15px] font-semibold">Menü</span>
            </button>
          </div>
        </div>
      </header>

      {/* ---------------- Drawer overlay ---------------- */}
      <div className={`fixed inset-0 z-[60] ${open ? '' : 'pointer-events-none'}`}>
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-navy/50 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}></div>
        <aside
          id="hauptmenue"
          role="dialog"
          aria-modal="true"
          aria-label="Hauptmenü"
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-xl transition-transform duration-300 ease-out ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          
          <div className="flex items-center justify-between border-b border-navy/10 px-5 py-4">
            <Logo size="md" onClick={() => {nav('home');setOpen(false);}} />
            <button onClick={() => setOpen(false)} aria-label="Menü schliessen" className="grid h-10 w-10 place-items-center rounded-md text-navy/55 transition-colors hover:bg-surface hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"><Icon name="x" size={20} /></button>
          </div>

          <nav className="flex flex-1 flex-col overflow-y-auto py-2">
            {NAV.map((n) => {
              const active = page === n.id;
              return (
                <button
                  key={n.id}
                  onClick={() => {nav(n.id);setOpen(false);}}
                  className={`flex items-center gap-3.5 border-l-2 px-6 py-3.5 text-left transition-colors ${active ? 'border-copper bg-surface text-brand' : 'border-transparent text-navy hover:bg-surface'}`}>
                  
                  <Icon name={n.icon} size={19} strokeWidth={1.9} className={active ? 'text-brand' : 'text-navy/45'} />
                  <span className="font-sans text-lg font-semibold">{n.label}</span>
                </button>);

            })}
          </nav>

          <div className="border-t border-navy/10 p-5">
            <div className="mb-2 flex items-center gap-2 text-navy/55">
              <Icon name="clock" size={15} className="text-copper" />
              <span className="text-xs font-medium">Notdienst {site.hoursEmergency}</span>
            </div>
            <a href={`tel:${site.telRaw}`} className="flex items-center justify-center gap-3 rounded-lg bg-copper py-3.5 font-sans text-xl font-bold text-white transition-colors hover:bg-copper-dark">
              <Icon name="phone-call" size={20} />{site.tel}
            </a>
          </div>
        </aside>
      </div>
    </>);

}

/* ===========================================================================
   Sticky call button — single fixed CTA, hides over the big closing CTA
=========================================================================== */
function StickyCallButton({ site, hideOnMobile = false }) {
  // Zurückhaltend: erst einblenden, wenn der Hero-CTA aus dem Viewport gescrollt ist,
  // und wieder ausblenden, sobald die große Schluss-CTA oder der Footer sichtbar werden.
  const [show, setShow] = useState(false);
  useEffect(() => {
    let pastHero = false;
    let overBottom = false;
    const update = () => setShow(pastHero && !overBottom);

    const bottomTargets = ['big-call-cta', 'site-footer'].map((id) => document.getElementById(id)).filter(Boolean);
    const vis = new Map();
    let io;
    if (bottomTargets.length && 'IntersectionObserver' in window) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => vis.set(e.target, e.isIntersecting));
        overBottom = [...vis.values()].some(Boolean);
        update();
      }, { rootMargin: '0px 0px -8% 0px' });
      bottomTargets.forEach((t) => io.observe(t));
    }

    const onScroll = () => {
      const hero = document.getElementById('hero-call-cta');
      // Auf der Startseite: erst zeigen, wenn der Hero-Anruf-CTA oben aus dem Bild ist.
      // Auf anderen Seiten (kein Hero-CTA): nach etwas Scrollen.
      pastHero = hero ? hero.getBoundingClientRect().bottom < 0 : window.scrollY > 520;
      update();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (io) io.disconnect();
    };
  }, []);
  return (
    <div className={`fixed bottom-5 right-5 z-40 transition-all duration-500 ${hideOnMobile ? 'max-[767px]:hidden' : ''} ${show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'}`} style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}>
      <a
        href={`tel:${site.telRaw}`}
        aria-label={`Anrufen – ${site.tel}`}
        className="pointer-events-auto flex items-center gap-2.5 rounded-lg bg-copper px-4 py-3 font-sans text-[15px] font-bold text-white shadow-lift transition-colors hover:bg-copper-dark">
        
        <Icon name="phone" size={18} />
        <span className="tabular-nums">{site.tel}</span>
      </a>
    </div>);

}

/* ===========================================================================
   Big "Ruf uns an" closing CTA — shown at the bottom of every page
=========================================================================== */
function BigCallCTA({ nav, site, suppress }) {
  if (suppress) return null;
  return (
    <section id="big-call-cta" className="bg-navy py-16 md:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal className="flex justify-center">
          <SectionLabel light>Notdienst · rund um die Uhr</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 font-sans text-3xl font-bold leading-[1.1] text-white sm:text-5xl">Wasser-Notfall? Rufen Sie uns an.</h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/65">Ein Anruf genügt – wir sind in 30 Minuten bei Ihnen. Festpreis vorab, keine versteckten Kosten.</p>
        </Reveal>
        <Reveal delay={200}>
          <a href={`tel:${site.telRaw}`} className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 rounded-lg bg-copper px-5 py-3 font-sans text-2xl font-bold text-white transition-colors hover:bg-copper-dark sm:px-7 sm:py-4 sm:text-3xl">
            <Icon name="phone" size={28} />
            {site.tel}
          </a>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-6">
            <button onClick={() => nav('kontakt')} className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-white/70 transition-colors hover:text-white md:min-h-0">
              Lieber schreiben? <Icon name="arrow-right" size={16} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>);

}

/* ===========================================================================
   Footer
=========================================================================== */
function Footer({ nav, site }) {
  return (
    <footer id="site-footer" className="bg-navy-900 pt-16 text-white/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 pb-12 md:gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Logo light size="md" onClick={() => nav('home')} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">Ihr zuverlässiger Sanitär-Partner für die Region Basel – Notdienst, Installation, Sanierung und Wartung aus einer Hand.</p>
          </div>

          <div>
            <div className="font-sans text-sm font-bold uppercase tracking-wider text-white">Navigation</div>
            <ul className="mt-5 space-y-0.5 text-sm md:space-y-3">
              {NAV.map((n) =>
              <li key={n.id}><button onClick={() => nav(n.id)} className="link-underline flex min-h-[44px] items-center transition-colors hover:text-brand-glow md:inline md:min-h-0">{n.label}</button></li>
              )}
            </ul>
          </div>

          <div>
            <div className="font-sans text-sm font-bold uppercase tracking-wider text-white">Kontakt</div>
            <ul className="mt-5 space-y-1 text-sm md:space-y-3">
              <li className="flex items-start gap-2.5"><Icon name="map-pin" size={17} className="mt-0.5 text-brand-glow" /><span>{site.street}<br />{site.city}</span></li>
              <li className="flex items-center gap-2.5"><Icon name="phone" size={17} className="text-brand-glow" /><a href={`tel:${site.telRaw}`} className="inline-flex min-h-[44px] items-center hover:text-brand-glow md:min-h-0">{site.tel}</a></li>
              <li className="flex items-center gap-2.5"><Icon name="mail" size={17} className="text-brand-glow" /><a href={`mailto:${site.email}`} className="inline-flex min-h-[44px] items-center hover:text-brand-glow md:min-h-0">{site.email}</a></li>
            </ul>
          </div>

          <div>
            <div className="font-sans text-sm font-bold uppercase tracking-wider text-white">Notdienst</div>
            <div className="mt-5 rounded-lg border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-2 text-copper-light"><Icon name="clock" size={16} /><span className="text-xs font-medium">{site.hoursEmergency}</span></div>
              <a href={`tel:${site.telRaw}`} className="mt-2 block font-sans text-2xl font-bold text-white transition-transform hover:translate-x-0.5">{site.tel}</a>
              <div className="mt-3 text-xs text-white/75">Büro: {site.hoursOffice}</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-1 border-t border-white/10 py-5 text-xs text-white/75 md:flex-row md:gap-3 md:py-6">
          <span>© {new Date().getFullYear()} {site.name} GmbH · Region Basel. Alle Rechte vorbehalten.</span>
          <div className="flex gap-3 md:gap-5">
            <button onClick={() => nav('impressum')} className="link-underline inline-flex min-h-[44px] items-center transition-colors hover:text-white/70 md:min-h-0">Impressum</button>
            <button onClick={() => nav('datenschutz')} className="link-underline inline-flex min-h-[44px] items-center transition-colors hover:text-white/70 md:min-h-0">Datenschutz</button>
            <button onClick={() => nav('agb')} className="link-underline inline-flex min-h-[44px] items-center transition-colors hover:text-white/70 md:min-h-0">AGB</button>
          </div>
        </div>
      </div>
    </footer>);

}

/* ===========================================================================
   Tweaks — drei ausdrucksstarke Regler, die das Gefühl der Seite verschieben:
   · Stimmung   → Notdienst-Akzent + Primärfarbe (rgb-Tripel für Alpha-Utilities)
   · Schrift    → typografische Stimme (neutral / warm / technisch)
   · Tonalität  → Wärme der hellen Flächen (--page-bg)
=========================================================================== */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "mood": "notruf",
  "type": "neutral",
  "surface": "rein"
}/*EDITMODE-END*/;

// Jede Stimmung setzt Akzent (copper) UND Primär (brand) als zusammengehöriges Paar.
const MOODS = [
  { id: 'notruf', sw: ['#c2384a', '#1f4d73'], vars: {
    '--copper': '194 56 74', '--copper-dark': '156 38 56', '--copper-light': '214 90 106',
    '--brand': '31 77 115', '--brand-light': '47 102 148', '--brand-glow': '138 166 189' } },
  { id: 'werkstatt', sw: ['#c2792a', '#3a4756'], vars: {
    '--copper': '194 121 42', '--copper-dark': '158 92 24', '--copper-light': '216 150 78',
    '--brand': '58 71 86', '--brand-light': '84 101 119', '--brand-glow': '150 164 181' } },
  { id: 'aqua', sw: ['#0e8a86', '#1f5f8a'], vars: {
    '--copper': '14 138 134', '--copper-dark': '9 107 104', '--copper-light': '46 168 162',
    '--brand': '31 95 138', '--brand-light': '47 120 168', '--brand-glow': '140 178 200' } },
];

// Schrift-Stimme. Google-Fonts werden bei Bedarf einmalig nachgeladen.
const TYPEFACES = {
  neutral:    { stack: "'Helvetica Neue', Helvetica, Arial, sans-serif" },
  warm:       { stack: "'Hanken Grotesk', 'Helvetica Neue', Arial, sans-serif", google: 'Hanken+Grotesk:wght@400;500;600;700;800' },
  technisch:  { stack: "'Archivo', 'Helvetica Neue', Arial, sans-serif", google: 'Archivo:wght@400;500;600;700;800' },
};

const SURFACES = { rein: '#ffffff', warm: '#f6f3ee', kuehl: '#eef2f5' };

const __loadedFonts = new Set();
function loadGoogleFontOnce(spec) {
  if (!spec || __loadedFonts.has(spec)) return;
  __loadedFonts.add(spec);
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${spec}&display=swap`;
  document.head.appendChild(link);
}

function SiteTweaks({ t, setTweak }) {
  const moodSw = (MOODS.find((m) => m.id === t.mood) || MOODS[0]).sw;
  const resolveMood = (sw) => {
    const m = MOODS.find((x) => JSON.stringify(x.sw).toLowerCase() === JSON.stringify(sw).toLowerCase());
    return m ? m.id : 'notruf';
  };
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Notdienst-Stimmung" />
      <TweakColor label="Akzent & Primär" value={moodSw}
        options={MOODS.map((m) => m.sw)}
        onChange={(sw) => setTweak('mood', resolveMood(sw))} />
      <TweakSection label="Schrift" />
      <TweakRadio label="Stimme" value={t.type}
        options={[{ value: 'neutral', label: 'Neutral' }, { value: 'warm', label: 'Warm' }, { value: 'technisch', label: 'Technisch' }]}
        onChange={(v) => setTweak('type', v)} />
      <TweakSection label="Flächen" />
      <TweakRadio label="Tonalität" value={t.surface}
        options={[{ value: 'rein', label: 'Reinweiß' }, { value: 'warm', label: 'Warm' }, { value: 'kuehl', label: 'Kühl' }]}
        onChange={(v) => setTweak('surface', v)} />
    </TweaksPanel>);
}

/* ===========================================================================
   App — instant page switching
=========================================================================== */
function App() {
  const [page, setPage] = useState('home');
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Tweak-Werte auf CSS-Variablen abbilden (live, ohne Reload).
  useEffect(() => {
    const root = document.documentElement;
    const mood = MOODS.find((m) => m.id === t.mood) || MOODS[0];
    Object.entries(mood.vars).forEach(([k, v]) => root.style.setProperty(k, v));
    const face = TYPEFACES[t.type] || TYPEFACES.neutral;
    if (face.google) loadGoogleFontOnce(face.google);
    root.style.setProperty('--font-sans', face.stack);
    root.style.setProperty('--page-bg', SURFACES[t.surface] || SURFACES.rein);
  }, [t.mood, t.type, t.surface]);

  const scrollToAnchor = (id, behavior = 'smooth') => {
    const el = document.getElementById(id);
    if (!el) {window.scrollTo({ top: 0, behavior });return;}
    const r = el.getBoundingClientRect();
    // Center the section vertically in the viewport (instead of pinning to the top).
    const y = r.top + window.scrollY - Math.max(24, (window.innerHeight - r.height) / 2);
    window.scrollTo({ top: Math.max(0, y), behavior });
  };

  const nav = (p, anchor) => {
    if (p === page) {
      if (anchor) {scrollToAnchor(anchor);return;}
      window.scrollTo({ top: 0, behavior: 'smooth' });return;
    }
    // No transition animation — switch pages instantly.
    setPage(p);
    if (anchor) {
      // Wait for the new page to render, then scroll to the target section.
      // 'instant' (not 'auto') forces an immediate jump — 'auto' would defer to the
      // CSS scroll-behavior: smooth and animate, which gets clamped to the bottom
      // of the (often shorter) new page while it swaps in.
      requestAnimationFrame(() => requestAnimationFrame(() => scrollToAnchor(anchor, 'instant')));
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };
  useEffect(() => () => {document.documentElement.style.overflow = '';}, []);

  const pages = {
    home: HomePage,
    leistungen: LeistungenPage,
    ueber: UeberPage,
    preise: PreisePage,
    offerte: OffertePage,
    referenzen: ReferenzenPage,
    kontakt: KontaktPage,
    impressum: ImpressumPage,
    datenschutz: DatenschutzPage,
    agb: AGBPage
  };
  const Page = pages[page] || HomePage;

  return (
    <div className="min-h-screen bg-page">
      <ScrollProgress />
      <Header page={page} nav={nav} site={SITE} />
      <main>
        <Page key={page} nav={nav} site={SITE} />
      </main>
      <BigCallCTA nav={nav} site={SITE} suppress={page === 'offerte'} />
      <Footer nav={nav} site={SITE} />
      <StickyCallButton site={SITE} hideOnMobile={page === 'offerte'} />
      <SiteTweaks t={t} setTweak={setTweak} />
    </div>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);