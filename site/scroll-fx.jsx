// scroll-fx.jsx — scroll-Erlebnis-Schicht (ohne externe Lib)
// ---------------------------------------------------------------------------
// Bewusst zurückhaltend, aber spürbar: Tiefe durch Parallax, ein feiner
// Fortschrittsbalken oben, hochzählende Statistiken. Kein Glow/Blob/Slop.
// Alles respektiert prefers-reduced-motion: dann statisch & sofort sichtbar.
//
// Lädt NACH ui.jsx und überschreibt dessen Stubs (ScrollProgress, CountUp)
// gezielt via window-Zuweisung. Eine einzige rAF-gedrosselte Scroll-Schleife
// treibt alle parallaxen Ebenen + den Fortschrittsbalken (performant, smooth).
// ---------------------------------------------------------------------------
const { useRef: useFXRef, useState: useFXState, useEffect: useFXEffect } = React;

/* ---- gemeinsame, gedrosselte Scroll-Engine ---- */
const fxItems = new Set();
let fxTicking = false;
function fxTick() {
  fxTicking = false;
  const vh = window.innerHeight || document.documentElement.clientHeight;
  fxItems.forEach((fn) => fn(vh));
}
function fxOnScroll() {
  if (fxTicking) return;
  fxTicking = true;
  requestAnimationFrame(fxTick);
}
let fxBound = false;
function fxEnsureBound() {
  if (fxBound) return;
  fxBound = true;
  window.addEventListener('scroll', fxOnScroll, { passive: true });
  window.addEventListener('resize', fxOnScroll, { passive: true });
}
function fxRegister(fn) {
  fxEnsureBound();
  fxItems.add(fn);
  fxOnScroll();
  return () => fxItems.delete(fn);
}

/* ---- prefers-reduced-motion (reaktiv) ---- */
function useReducedMotion() {
  const [reduced, setReduced] = useFXState(
    () => typeof window !== 'undefined' && window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  useFXEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const on = () => setReduced(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return reduced;
}

/* ---------------------------------------------------------------------------
   Parallax — verschiebt children vertikal abhängig von der eigenen Position im
   Viewport. `amount` = Pixel-Versatz an den Enden (positiv = wirkt „tiefer/
   langsamer", negativ = „näher/schneller"). Direkt an den Scroll gekoppelt.
--------------------------------------------------------------------------- */
function Parallax({ children, amount = 60, className = '', style = {}, as = 'div' }) {
  const ref = useFXRef(null);
  const reduced = useReducedMotion();
  useFXEffect(() => {
    const el = ref.current;
    if (!el || reduced) { if (el) el.style.transform = ''; return; }
    const update = (vh) => {
      const r = el.getBoundingClientRect();
      const total = vh + r.height;
      const p = Math.max(0, Math.min(1, (vh - r.top) / total)); // 0 → 1
      const y = amount - p * amount * 2;                          // amount → -amount
      el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
    };
    const off = fxRegister(update);
    return off;
  }, [reduced, amount]);
  const Tag = as;
  return (
    <Tag ref={ref} className={className} style={{ ...style, willChange: reduced ? undefined : 'transform' }}>
      {children}
    </Tag>
  );
}

/* ---------------------------------------------------------------------------
   ScrollProgress — feiner Fortschrittsbalken am oberen Rand (brand → copper).
   Überschreibt den neutralisierten Stub aus ui.jsx.
--------------------------------------------------------------------------- */
function ScrollProgressFX() {
  const ref = useFXRef(null);
  const reduced = useReducedMotion();
  useFXEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? (window.scrollY || doc.scrollTop) / max : 0;
      el.style.transform = `scaleX(${Math.max(0, Math.min(1, p)).toFixed(4)})`;
    };
    const off = fxRegister(update);
    return off;
  }, [reduced]);
  if (reduced) return null;
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-gradient-to-r from-brand via-brand-light to-copper"
      style={{ transformOrigin: '0% 50%', transform: 'scaleX(0)' }}
    ></div>
  );
}

/* ---------------------------------------------------------------------------
   CountUp — zählt beim ersten Sichtbarwerden hoch (eased). Reduced-motion
   zeigt den Endwert sofort. Überschreibt den statischen Stub aus ui.jsx.
--------------------------------------------------------------------------- */
function CountUpFX({ to = 100, suffix = '', prefix = '', decimals = 0, duration = 1500, className = '' }) {
  const ref = useFXRef(null);
  const reduced = useReducedMotion();
  const fired = useFXRef(false);
  const [val, setVal] = useFXState(0);

  useFXEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) { setVal(to); return; }
    let raf = 0;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !fired.current) {
          fired.current = true;
          io.disconnect();
          const start = performance.now();
          const ease = (t) => 1 - Math.pow(1 - t, 3); // easeOutCubic
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            setVal(to * ease(p));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });
    io.observe(el);
    return () => { io.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, [reduced, to, duration]);

  const display = decimals > 0
    ? Number(val).toFixed(decimals)
    : Math.round(val).toLocaleString('de-CH');
  return <span ref={ref} className={className}>{prefix}{display}{suffix}</span>;
}

// gezielte Overrides (keine Neu-Deklaration → keine "already declared"-Fehler)
window.Parallax = Parallax;
window.ScrollProgress = ScrollProgressFX;
window.CountUp = CountUpFX;
window.useReducedMotion = useReducedMotion;
