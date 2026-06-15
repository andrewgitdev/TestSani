// page-leistungen.jsx
const SERVICES_DETAIL = [
  {
    icon: 'droplets', tone: 'brand', label: 'Rohrbruch-Reparatur',
    t: 'Rohrbruch & Wasserschaden',
    d: 'Bei einem Rohrbruch zählt jede Minute. Wir orten das Leck präzise, stoppen den Wasseraustritt und reparieren fachgerecht – bevor grösserer Schaden entsteht.',
    ex: ['Leckage-Ortung mit Messtechnik', 'Soforthilfe & Notabdichtung', 'Trocknung & Schadensbegrenzung', 'Koordination mit Versicherung'],
  },
  {
    icon: 'waves', tone: 'cool', label: 'Rohrreinigung',
    t: 'Verstopfung & Abfluss',
    d: 'Vom verstopften Lavabo bis zur Hauptleitung: Mit Kamera-Inspektion und Hochdruck-Spülung lösen wir jede Verstopfung – nachhaltig und ohne Chemie-Keule.',
    ex: ['Kamera-Inspektion der Leitungen', 'Hochdruck-Spülung', 'Mechanische Rohrreinigung', 'Wurzeleinwuchs-Entfernung'],
  },
  {
    icon: 'flame', tone: 'copper', label: 'Heizungs-Service',
    t: 'Heizung & Boiler',
    d: 'Damit es warm bleibt: Wir warten, reparieren und ersetzen Heizungen, Boiler und Wärmepumpen – effizient und mit Blick auf Ihre Energiekosten.',
    ex: ['Heizungswartung & Entlüftung', 'Boiler-Entkalkung & Ersatz', 'Wärmepumpen-Service', 'Notfall-Reparatur Heizungsausfall'],
  },
  {
    icon: 'bath', tone: 'steel', label: 'Badsanierung',
    t: 'Badsanierung & Umbau',
    d: 'Ihr Traumbad aus einer Hand: von der 3D-Planung über Demontage und Installation bis zur schlüsselfertigen Übergabe – termingerecht und sauber.',
    ex: ['3D-Planung & Beratung', 'Komplette Demontage', 'Sanitär-, Platten- & Malerarbeiten', 'Schlüsselfertige Übergabe'],
  },
  {
    icon: 'settings', tone: 'navy', label: 'Wartungs-Abo',
    t: 'Wartung & Service',
    d: 'Vorbeugen statt reparieren: Mit unserem Wartungs-Abo halten wir Ihre Anlagen in Topform – regelmässig kontrolliert, dokumentiert und priorisiert im Notfall.',
    ex: ['Jährliche Kontrolle aller Anlagen', 'Priorisierte Notfall-Termine', 'Digitales Wartungsprotokoll', 'Vergünstigte Ersatzteile'],
  },
  {
    icon: 'hammer', tone: 'brand', label: 'Neuinstallation',
    t: 'Installation & Neubau',
    d: 'Für Neubau, Umbau und Modernisierung: normgerechte Sanitärinstallationen mit hochwertigen Materialien und sauberer Ausführung.',
    ex: ['Sanitär-Rohinstallation', 'Apparate- & Armaturenmontage', 'Wasseraufbereitung & Enthärtung', 'Abnahme & Dokumentation'],
  },
];

function ServiceRow({ s, i, nav }) {
  const flip = i % 2 === 1;
  return (
    <div id={`leistung-${i}`} className="grid items-center gap-7 lg:grid-cols-2 lg:gap-16 scroll-mt-28">
      <Reveal dir={flip ? 'right' : 'left'} className={flip ? 'lg:order-2' : ''}>
        <ImagePlaceholder label={s.label} className="aspect-[5/4]" />
      </Reveal>
      <Reveal dir={flip ? 'left' : 'right'} delay={80} className={flip ? 'lg:order-1' : ''}>
        <div>
          <SectionLabel>{`0${i + 1} · ${s.label}`}</SectionLabel>
          <h2 className="mt-4 font-sans text-3xl font-bold leading-tight text-navy md:text-4xl">{s.t}</h2>
          <p className="mt-4 text-lg leading-relaxed text-navy/60">{s.d}</p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {s.ex.map((e) => (
              <li key={e} className="flex items-start gap-2.5 text-[15px] text-navy/75">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand/12 text-brand"><Icon name="check" size={13} strokeWidth={3} /></span>
                {e}
              </li>
            ))}
          </ul>
          <Button onClick={() => nav('offerte')} variant="outline" className="mt-8" iconRight="arrow-right">Offerte anfragen</Button>
        </div>
      </Reveal>
    </div>
  );
}

function LeistungenPage({ nav, site }) {
  return (
    <div className="page-enter">
      <PageHeader
        eyebrow="Unsere Leistungen"
        title="Sanitär-Kompetenz für jeden Fall"
        sub="Von der Notfall-Reparatur bis zur kompletten Badsanierung – alles aus einer Hand, von zertifizierten Fachleuten aus der Region Basel."
      />
      <section className="bg-page py-12 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-14 px-6 md:gap-32">
          {SERVICES_DETAIL.map((s, i) => (
            <ServiceRow key={s.t} s={s} i={i} nav={nav} />
          ))}
        </div>
      </section>
    </div>
  );
}

window.LeistungenPage = LeistungenPage;
