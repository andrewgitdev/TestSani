// page-referenzen.jsx
const REVIEWS = [
  { q: 'Innert 25 Minuten war der Monteur da und hat den Rohrbruch sofort gestoppt. Freundlich, sauber, fairer Preis. Absolut empfehlenswert!', n: 'Sandra Meier', o: 'Basel', i: 'SM', tone: 'brand', v: 5 },
  { q: 'Unsere Heizung fiel mitten im Winter aus – am selben Abend lief sie wieder. So muss Service sein.', n: 'Daniel Roth', o: 'Riehen', i: 'DR', tone: 'copper', v: 5 },
  { q: 'Komplette Badsanierung termingerecht und genau zum vereinbarten Festpreis abgeschlossen. Tolles Team.', n: 'Familie Brunner', o: 'Allschwil', i: 'FB', tone: 'steel', v: 5 },
  { q: 'Als Hausverwaltung arbeiten wir seit Jahren zusammen. Zuverlässig, erreichbar und immer korrekt dokumentiert.', n: 'M. Steiner', o: 'Immo Basel AG', i: 'MS', tone: 'brand', v: 5 },
  { q: 'Verstopfter Abfluss am Sonntagmorgen – kein Problem. Schnell, kompetent und ohne versteckte Kosten.', n: 'Petra Huber', o: 'Münchenstein', i: 'PH', tone: 'copper', v: 4 },
  { q: 'Die Beratung für unsere neue Wasseraufbereitung war top. Ehrlich, ohne Verkaufsdruck, mit echtem Know-how.', n: 'Thomas Wyss', o: 'Binningen', i: 'TW', tone: 'steel', v: 5 },
];

const PARTNERS = ['GEBERIT', 'LAUFEN', 'HANSGROHE', 'GROHE', 'V-ZUG', 'SIKA'];

function ReviewCard({ r, i }) {
  return (
    <Reveal delay={(i % 3) * 90} dir="up">
      <figure className="flex h-full flex-col rounded-3xl border border-navy/8 bg-white p-7 shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:shadow-lift">
        <div className="flex items-center justify-between">
          <Icon name="quote" size={32} className="text-copper/30" />
          <StarRating value={r.v} size={16} />
        </div>
        <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-navy/80">{r.q}</blockquote>
        <figcaption className="mt-6 flex items-center gap-3 border-t border-navy/8 pt-5">
          <AvatarPlaceholder initials={r.i} size={44} />
          <div>
            <div className="font-semibold text-navy">{r.n}</div>
            <div className="text-sm text-navy/50">{r.o}</div>
          </div>
        </figcaption>
      </figure>
    </Reveal>
  );
}

function ReferenzenPage({ nav, site }) {
  return (
    <div className="page-enter">
      <PageHeader
        eyebrow="Referenzen"
        title="Was unsere Kundschaft sagt"
        sub={`Über ${STATS.reviews} Bewertungen mit einem Schnitt von ${STATS.rating} von 5 Sternen – von Privatkunden, Hausverwaltungen und Liegenschaften aus der ganzen Region.`}
      />

      {/* rating summary */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid gap-6 rounded-3xl border border-navy/8 bg-surface p-8 sm:grid-cols-3">
              {[
                { big: <CountUp to={STATS.rating} decimals={1} />, sub: '★ Durchschnitt', extra: <StarRating value={5} size={16} className="mt-2 justify-center" /> },
                { big: <CountUp to={STATS.reviews} suffix="+" />, sub: 'Bewertungen' },
                { big: <CountUp to={STATS.recommend} suffix="%" />, sub: 'Weiterempfehlung' },
              ].map((s, k) => (
                <div key={k} className="text-center">
                  <div className="font-sans text-4xl font-bold text-navy md:text-5xl">{s.big}</div>
                  <div className="mt-1 text-sm text-navy/55">{s.sub}</div>
                  {s.extra}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* review grid */}
      <section className="bg-white pb-16 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r, i) => <ReviewCard key={r.n} r={r} i={i} />)}
          </div>
        </div>
      </section>

      {/* partners */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center"><SectionLabel className="justify-center">Wir arbeiten mit</SectionLabel></Reveal>
          <Reveal delay={70}><h2 className="mx-auto mt-4 max-w-xl text-center font-sans text-2xl font-bold text-navy md:text-4xl">Marken, denen wir vertrauen</h2></Reveal>
          <Reveal delay={130}>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-12 lg:grid-cols-6">
              {PARTNERS.map((p) => (
                <div key={p} className="group grid h-20 place-items-center rounded-2xl border border-navy/8 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <span className="font-sans text-lg font-bold tracking-wide text-navy/35 transition-colors group-hover:text-navy/70">{p}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

window.ReferenzenPage = ReferenzenPage;
