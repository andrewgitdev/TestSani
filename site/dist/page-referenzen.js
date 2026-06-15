// Auto-kompiliert aus site/page-referenzen.jsx (kein Browser-Babel mehr).
// Quelle bleibt site/page-referenzen.jsx — bei Änderungen neu kompilieren.
(function () {
// page-referenzen.jsx
const REVIEWS = [{
  q: 'Innert 25 Minuten war der Monteur da und hat den Rohrbruch sofort gestoppt. Freundlich, sauber, fairer Preis. Absolut empfehlenswert!',
  n: 'Sandra Meier',
  o: 'Basel',
  i: 'SM',
  tone: 'brand',
  v: 5
}, {
  q: 'Unsere Heizung fiel mitten im Winter aus – am selben Abend lief sie wieder. So muss Service sein.',
  n: 'Daniel Roth',
  o: 'Riehen',
  i: 'DR',
  tone: 'copper',
  v: 5
}, {
  q: 'Komplette Badsanierung termingerecht und genau zum vereinbarten Festpreis abgeschlossen. Tolles Team.',
  n: 'Familie Brunner',
  o: 'Allschwil',
  i: 'FB',
  tone: 'steel',
  v: 5
}, {
  q: 'Als Hausverwaltung arbeiten wir seit Jahren zusammen. Zuverlässig, erreichbar und immer korrekt dokumentiert.',
  n: 'M. Steiner',
  o: 'Immo Basel AG',
  i: 'MS',
  tone: 'brand',
  v: 5
}, {
  q: 'Verstopfter Abfluss am Sonntagmorgen – kein Problem. Schnell, kompetent und ohne versteckte Kosten.',
  n: 'Petra Huber',
  o: 'Münchenstein',
  i: 'PH',
  tone: 'copper',
  v: 4
}, {
  q: 'Die Beratung für unsere neue Wasseraufbereitung war top. Ehrlich, ohne Verkaufsdruck, mit echtem Know-how.',
  n: 'Thomas Wyss',
  o: 'Binningen',
  i: 'TW',
  tone: 'steel',
  v: 5
}];
const PARTNERS = ['GEBERIT', 'LAUFEN', 'HANSGROHE', 'GROHE', 'V-ZUG', 'SIKA'];
function ReviewCard({
  r,
  i
}) {
  return /*#__PURE__*/React.createElement(Reveal, {
    delay: i % 3 * 90,
    dir: "up"
  }, /*#__PURE__*/React.createElement("figure", {
    className: "flex h-full flex-col rounded-3xl border border-navy/8 bg-white p-7 shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:shadow-lift"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "quote",
    size: 32,
    className: "text-copper/30"
  }), /*#__PURE__*/React.createElement(StarRating, {
    value: r.v,
    size: 16
  })), /*#__PURE__*/React.createElement("blockquote", {
    className: "mt-3 flex-1 text-[15px] leading-relaxed text-navy/80"
  }, r.q), /*#__PURE__*/React.createElement("figcaption", {
    className: "mt-6 flex items-center gap-3 border-t border-navy/8 pt-5"
  }, /*#__PURE__*/React.createElement(AvatarPlaceholder, {
    initials: r.i,
    size: 44
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-semibold text-navy"
  }, r.n), /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-navy/50"
  }, r.o)))));
}
function ReferenzenPage({
  nav,
  site
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-enter"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Referenzen",
    title: "Was unsere Kundschaft sagt",
    sub: `Über ${STATS.reviews} Bewertungen mit einem Schnitt von ${STATS.rating} von 5 Sternen – von Privatkunden, Hausverwaltungen und Liegenschaften aus der ganzen Region.`
  }), /*#__PURE__*/React.createElement("section", {
    className: "bg-white py-12 md:py-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-7xl px-6"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-6 rounded-3xl border border-navy/8 bg-surface p-8 sm:grid-cols-3"
  }, [{
    big: /*#__PURE__*/React.createElement(CountUp, {
      to: STATS.rating,
      decimals: 1
    }),
    sub: '★ Durchschnitt',
    extra: /*#__PURE__*/React.createElement(StarRating, {
      value: 5,
      size: 16,
      className: "mt-2 justify-center"
    })
  }, {
    big: /*#__PURE__*/React.createElement(CountUp, {
      to: STATS.reviews,
      suffix: "+"
    }),
    sub: 'Bewertungen'
  }, {
    big: /*#__PURE__*/React.createElement(CountUp, {
      to: STATS.recommend,
      suffix: "%"
    }),
    sub: 'Weiterempfehlung'
  }].map((s, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-sans text-4xl font-bold text-navy md:text-5xl"
  }, s.big), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-sm text-navy/55"
  }, s.sub), s.extra)))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-white pb-16 md:pb-28"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-7xl px-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
  }, REVIEWS.map((r, i) => /*#__PURE__*/React.createElement(ReviewCard, {
    key: r.n,
    r: r,
    i: i
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-white py-12 md:py-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-7xl px-6"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "text-center"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    className: "justify-center"
  }, "Wir arbeiten mit")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 70
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mx-auto mt-4 max-w-xl text-center font-sans text-2xl font-bold text-navy md:text-4xl"
  }, "Marken, denen wir vertrauen")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 130
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-12 lg:grid-cols-6"
  }, PARTNERS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    className: "group grid h-20 place-items-center rounded-2xl border border-navy/8 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-sans text-lg font-bold tracking-wide text-navy/35 transition-colors group-hover:text-navy/70"
  }, p))))))));
}
window.ReferenzenPage = ReferenzenPage;
})();
