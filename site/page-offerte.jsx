// page-offerte.jsx — eigenständige Offerte-Seite: Rechner + unterstützende Sektionen
const OFFERTE_STEPS = [
  { n: '01', icon: 'calculator',      t: 'Angaben machen',       d: 'Leistung, Dringlichkeit und Umfang wählen – in unter einer Minute, ganz ohne Anruf.' },
  { n: '02', icon: 'gauge',           t: 'Richtpreis sehen',     d: 'Sie erhalten sofort eine unverbindliche Preisspanne in CHF – transparent und nachvollziehbar.' },
  { n: '03', icon: 'badge-check',     t: 'Verbindliche Offerte', d: 'Wir melden uns innert weniger Stunden mit dem schriftlichen Festpreis. Erst dann legen wir los.' },
];

const OFFERTE_TRUST = [
  { icon: 'clock',        t: 'In 30 Minuten vor Ort', d: 'Im Notfall rund um die Uhr, 365 Tage im Jahr.' },
  { icon: 'banknote',     t: 'Festpreis immer vorab', d: 'Schriftlich und verbindlich – keine versteckten Kosten.' },
  { icon: 'shield-check', t: '5 Jahre Garantie',      d: 'Zertifizierte Fachleute und Garantie auf jede Arbeit.' },
];

function OffertePage({ nav, site }) {
  return (
    <div className="page-enter">
      <CalcOffer nav={nav} site={site} />

      {/* So funktioniert's – weiße Sektion, blendet in die Wave des Rechners */}
      <section className="relative bg-page py-12 md:py-28">
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="text-center"><SectionLabel className="justify-center">So funktioniert's</SectionLabel></Reveal>
          <Reveal delay={70}>
            <h2 className="mx-auto mt-4 max-w-2xl text-center font-sans text-3xl font-bold text-navy md:text-5xl">Von der Anfrage zum Festpreis</h2>
          </Reveal>
          <Reveal delay={130}>
            <p className="mx-auto mt-4 max-w-xl text-center text-lg leading-relaxed text-navy/60">Drei einfache Schritte – Sie behalten jederzeit die Kontrolle und gehen keinerlei Verpflichtung ein.</p>
          </Reveal>

          <div className="relative mt-10 grid gap-6 md:mt-16 md:gap-8 md:grid-cols-3">
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent md:block"></div>
            {OFFERTE_STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 130} dir="up">
                <div className="group relative h-full rounded-3xl border border-navy/8 bg-white p-5 shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:shadow-lift md:p-8">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-navy text-white shadow-soft transition-transform duration-400 group-hover:scale-110 sm:h-16 sm:w-16">
                      <Icon name={s.icon} sizeClass="h-[26px] w-[26px] sm:h-[30px] sm:w-[30px]" strokeWidth={1.8} />
                    </span>
                    <span className="font-sans text-5xl font-bold text-surface-200 transition-colors group-hover:text-copper/20 md:text-6xl">{s.n}</span>
                  </div>
                  <h3 className="mt-6 font-sans text-2xl font-bold text-navy">{s.t}</h3>
                  <p className="mt-2 leading-relaxed text-navy/60">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vertrauens-Strip */}
      <section className="bg-surface py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {OFFERTE_TRUST.map((t, i) => (
              <Reveal key={t.t} delay={i * 110} dir="up">
                <div className="flex h-full items-start gap-4 rounded-3xl border border-navy/8 bg-white p-7 shadow-soft">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand"><Icon name={t.icon} size={24} strokeWidth={1.8} /></span>
                  <div>
                    <h3 className="font-sans text-lg font-bold text-navy">{t.t}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-navy/60">{t.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-[15px] leading-relaxed text-navy/55">
              Lieber persönlich? Rufen Sie uns an unter <a href={`tel:${site.telRaw}`} className="font-semibold text-brand underline-offset-4 hover:underline">{site.tel}</a> – wir beraten Sie gerne und unverbindlich.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

window.OffertePage = OffertePage;
