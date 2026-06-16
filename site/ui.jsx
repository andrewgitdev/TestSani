// ui.jsx — reusable primitives, grounded: solide Flächen, ehrliche Schatten,
// nur dezente Fade-ins. Keine Glas-/Gradient-/Blob-/Glow-Effekte mehr.
const { useState: useStateUI, useEffect: useEffectUI, useRef: useRefUI } = React;

/* ---------------------------------------------------------------------------
   Reveal — dezenter Fade-in beim Scrollen (das einzige Bewegungselement)
--------------------------------------------------------------------------- */
function Reveal({ children, as = 'div', dir = 'up', delay = 0, className = '', once = true, ...rest }) {
  const ref = useRefUI(null);
  const [shown, setShown] = useStateUI(false);
  useEffectUI(() => {
    const el = ref.current;
    if (!el) return;
    let raf1, raf2;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        if (r.top < vh * 0.92 && r.bottom > 0) setShown(true);
      });
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { setShown(true); if (once) io.unobserve(e.target); }
          else if (!once) setShown(false);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf1); cancelAnimationFrame(raf2); };
  }, [once]);
  const Tag = as;
  const dirClass = `reveal-${dir || 'up'}`;
  return (
    <Tag
      ref={ref}
      className={`reveal ${dirClass} ${shown ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ---------------------------------------------------------------------------
   CountUp — geerdet: zeigt den Endwert statisch (kein hochzählender Demo-Effekt)
--------------------------------------------------------------------------- */
function CountUp({ to = 100, suffix = '', prefix = '', decimals = 0, className = '' }) {
  const display = decimals > 0 ? Number(to).toFixed(decimals) : Math.round(to).toLocaleString('de-CH');
  return <span className={className}>{prefix}{display}{suffix}</span>;
}

/* ---------------------------------------------------------------------------
   Button — solide Flächen, klare Kanten, flacher Schatten, kein Glow/Shine/Pulse
--------------------------------------------------------------------------- */
function Button({ children, variant = 'primary', size = 'md', icon, iconRight, onClick, href, className = '', ...rest }) {
  const sizes = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-5 py-2.5 text-[15px] gap-2',
    lg: 'px-6 py-3.5 text-base gap-2.5',
  };
  const variants = {
    primary: 'bg-copper text-white hover:bg-copper-dark shadow-soft',
    brand:   'bg-brand text-white hover:bg-brand-light shadow-soft',
    navy:    'bg-navy text-white hover:bg-navy-700 shadow-soft',
    outline: 'bg-white text-navy border border-navy/20 hover:border-navy/40 hover:bg-surface',
    ghost:   'bg-transparent text-white border border-white/35 hover:bg-white/10',
  };
  const cls = `inline-flex min-h-[44px] items-center justify-center whitespace-nowrap font-semibold rounded-lg transition-[transform,background-color,box-shadow,border-color] duration-200 ease-out hover:scale-[1.02] hover:-translate-y-0.5 active:scale-100 active:translate-y-0 focus-ring select-none sm:min-h-0 ${sizes[size]} ${variants[variant]} ${className}`;
  const inner = (
    <>
      {icon && <Icon name={icon} size={size === 'lg' ? 20 : 18} />}
      <span>{children}</span>
      {iconRight && <Icon name={iconRight} size={size === 'lg' ? 20 : 18} />}
    </>
  );
  if (href) return <a href={href} onClick={onClick} className={cls} {...rest}>{inner}</a>;
  return <button type="button" onClick={onClick} className={cls} {...rest}>{inner}</button>;
}

/* ---------------------------------------------------------------------------
   SectionLabel — schlichter Kicker: kurze Linie + kleines Label (kein Mono-Spread)
--------------------------------------------------------------------------- */
function SectionLabel({ children, light = false, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.07em] ${light ? 'text-brand-glow' : 'text-brand'} ${className}`}>
      <span className={`h-px w-6 ${light ? 'bg-white/40' : 'bg-copper'}`}></span>
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------------------
   ImagePlaceholder — ehrlicher Foto-Platz: solider Rahmen + image-slot zum
   Einfügen echter Bilder (Handwerker, Werkstatt, Fahrzeug …)
--------------------------------------------------------------------------- */
function ImagePlaceholder({ id, label = 'Foto einfügen', className = '', children, ratio, fit = 'cover' }) {
  const fallback = useRefUI('slot-' + Math.random().toString(36).slice(2, 9));
  const slotId = id || fallback.current;
  return (
    <div
      className={`relative overflow-hidden border border-navy/12 bg-surface-100 shadow-soft ${className}`}
      style={ratio ? { aspectRatio: ratio } : {}}
    >
      <image-slot
        id={slotId}
        shape="rect"
        fit={fit}
        placeholder={label}
        style={{ width: '100%', height: '100%', display: 'block' }}
      ></image-slot>
      {children}
    </div>
  );
}

/* Kleiner Initialen-Avatar — solide, neutral (kein Gradient) */
function AvatarPlaceholder({ initials = 'TS', size = 80, className = '' }) {
  return (
    <div
      className={`grid place-items-center rounded-full bg-surface-200 text-navy font-semibold ring-1 ring-navy/10 ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      <span>{initials}</span>
    </div>
  );
}

/* WaveDivider — mehrschichtige, ruhig driftende Wasser-Welle als Sektionsübergang.
   Vordere Welle = `color` (Farbe der angrenzenden hellen Sektion). Dahinter zwei
   Tiefen-Wellen in helleren Navy-Tönen, die der dunklen Sektion Wasser-Tiefe geben.
   Kein Verlauf, kein grauer Streifen, keine harte Kante – die Lagen driften langsam
   gegeneinander. `flip` = Welle für den oberen Sektionsrand. */
function WaveDivider({ color = '#ffffff', flip = false, className = '' }) {
  const wave = (cls, fill, d) => <path className={`wd-lyr ${cls}`} style={{ fill }} d={d}></path>;
  return (
    <div
      className={`pointer-events-none h-12 overflow-hidden sm:h-16 md:h-20 ${className}`}
      aria-hidden="true"
      style={flip ? { transform: 'rotate(180deg)' } : undefined}
    >
      <svg className="wd-svg" viewBox="0 0 2880 90" preserveAspectRatio="none">
        {wave('wd-l3', '#34495b', 'M0,52 C 240,34 480,34 720,50 C 960,66 1200,66 1440,50 C 1680,34 1920,34 2160,50 C 2400,66 2640,66 2880,50 L2880,90 L0,90 Z')}
        {wave('wd-l2', '#4a6076', 'M0,46 C 288,66 432,66 720,44 C 1008,22 1152,22 1440,44 C 1728,66 1872,66 2160,44 C 2448,22 2592,22 2880,44 L2880,90 L0,90 Z')}
        {wave('wd-l1', color, 'M0,40 C 240,20 480,20 720,38 C 960,56 1200,56 1440,40 C 1680,24 1920,24 2160,40 C 2400,56 2640,56 2880,40 L2880,90 L0,90 Z')}
      </svg>
    </div>
  );
}

/* StarRating — schlicht, ohne Glow */
function StarRating({ value = 5, size = 18, className = '' }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} role="img" aria-label={`${value} von 5 Sternen`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className={i < value ? 'text-copper' : 'text-navy/20'}>
          <StarFill size={size} />
        </span>
      ))}
    </div>
  );
}
function StarFill({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5l2.95 5.98 6.6.96-4.78 4.66 1.13 6.57L12 17.6l-5.9 3.1 1.13-6.57L2.45 9.44l6.6-.96L12 2.5z" />
    </svg>
  );
}

/* Scroll-Progress-Stub – wird von scroll-fx.jsx überschrieben */
function ScrollProgress() { return null; }

/* Brand logo — solide Marke, kein Gradient/Glow */
function Logo({ light = false, size = 'md', onClick }) {
  const dim = size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-lg' : 'text-xl';
  return (
    <a onClick={onClick} className="inline-flex cursor-pointer items-center gap-2.5 select-none">
      <span className="grid h-9 w-9 place-items-center rounded-md bg-brand">
        <Icon name="droplets" size={20} className="text-white" strokeWidth={2} />
      </span>
      <span className={`font-sans font-bold leading-none ${dim} ${light ? 'text-white' : 'text-navy'}`}>
        Rheinquell
      </span>
    </a>
  );
}

/* ---------------------------------------------------------------------------
   PageHeader — ruhiger, solider Kopf für Unterseiten (kein Gradient/Blob/Wave)
--------------------------------------------------------------------------- */
function PageHeader({ eyebrow, title, sub }) {
  return (
    <section className="bg-navy pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionLabel light>{eyebrow}</SectionLabel>
        </Reveal>
        <Reveal delay={70}>
          <h1 className="mt-5 max-w-3xl font-sans text-3xl font-bold leading-[1.12] text-white md:text-5xl">{title}</h1>
        </Reveal>
        {sub && <Reveal delay={130}><p className="mt-4 max-w-xl text-lg leading-relaxed text-white/65">{sub}</p></Reveal>}
      </div>
    </section>
  );
}

Object.assign(window, {
  Reveal, CountUp, Button, SectionLabel, PageHeader,
  ImagePlaceholder, AvatarPlaceholder, WaveDivider, StarRating, StarFill, Logo,
  ScrollProgress,
});
