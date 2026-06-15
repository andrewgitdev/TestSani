// Auto-kompiliert aus site/page-legal.jsx (kein Browser-Babel mehr).
// Quelle bleibt site/page-legal.jsx — bei Änderungen neu kompilieren.
(function () {
// page-legal.jsx — Rechtliche Unterseiten (Schweiz): Impressum, Datenschutz (revDSG), AGB
// Platzhalter-Inhalt — bitte vor dem Go-Live durch die echten Angaben ersetzen.

function LegalSection({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement(Reveal, {
    dir: "up",
    className: "mt-10 first:mt-0"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "font-sans text-xl font-bold text-navy md:text-2xl"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 space-y-3 text-[15px] leading-relaxed text-navy/70"
  }, children)));
}
function LegalNote() {
  return /*#__PURE__*/React.createElement("div", {
    className: "mt-12 flex items-start gap-3 rounded-2xl border border-copper/20 bg-copper/[0.05] p-5 text-sm leading-relaxed text-navy/70"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-copper/12 text-copper"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 17
  })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-navy"
  }, "Platzhalter-Dokument."), " Dieser Text dient als Vorlage f\xFCr die Demo-Website und ist ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold"
  }, "keine Rechtsberatung"), ". Bitte vor der Ver\xF6ffentlichung durch die tats\xE4chlichen Angaben und eine fachliche Pr\xFCfung ersetzen."));
}
function LegalLayout({
  eyebrow,
  title,
  sub,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-enter"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: eyebrow,
    title: title,
    sub: sub
  }), /*#__PURE__*/React.createElement("section", {
    className: "bg-page py-12 md:py-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-3xl px-6"
  }, children, /*#__PURE__*/React.createElement(LegalNote, null))));
}

/* ----------------------------- Impressum ------------------------------- */
function ImpressumPage({
  site
}) {
  return /*#__PURE__*/React.createElement(LegalLayout, {
    eyebrow: "Rechtliches",
    title: "Impressum",
    sub: "Angaben gem\xE4ss den Informationspflichten f\xFCr gewerbliche Anbieter in der Schweiz."
  }, /*#__PURE__*/React.createElement(LegalSection, {
    title: "Verantwortlich f\xFCr den Inhalt"
  }, /*#__PURE__*/React.createElement("p", null, site.name, " GmbH", /*#__PURE__*/React.createElement("br", null), site.street, /*#__PURE__*/React.createElement("br", null), site.city, /*#__PURE__*/React.createElement("br", null), "Schweiz")), /*#__PURE__*/React.createElement(LegalSection, {
    title: "Kontakt"
  }, /*#__PURE__*/React.createElement("p", null, "Telefon: ", /*#__PURE__*/React.createElement("a", {
    href: `tel:${site.telRaw}`,
    className: "text-brand hover:underline"
  }, site.tel), /*#__PURE__*/React.createElement("br", null), "E-Mail: ", /*#__PURE__*/React.createElement("a", {
    href: `mailto:${site.email}`,
    className: "text-brand hover:underline"
  }, site.email))), /*#__PURE__*/React.createElement(LegalSection, {
    title: "Handelsregister & MwSt"
  }, /*#__PURE__*/React.createElement("p", null, "Eingetragen im Handelsregister des Kantons Basel-Stadt.", /*#__PURE__*/React.createElement("br", null), "Handelsregister-Nr.: CHE-000.000.000 (Platzhalter)", /*#__PURE__*/React.createElement("br", null), "Mehrwertsteuer-Nr.: CHE-000.000.000 MWST (Platzhalter)")), /*#__PURE__*/React.createElement(LegalSection, {
    title: "Vertretungsberechtigte Person"
  }, /*#__PURE__*/React.createElement("p", null, "Gesch\xE4ftsf\xFChrung: Vorname Nachname (Platzhalter)")), /*#__PURE__*/React.createElement(LegalSection, {
    title: "Haftungsausschluss"
  }, /*#__PURE__*/React.createElement("p", null, "Die Inhalte dieser Website werden mit gr\xF6sstm\xF6glicher Sorgfalt erstellt. F\xFCr die Richtigkeit, Vollst\xE4ndigkeit und Aktualit\xE4t der Inhalte wird jedoch keine Gew\xE4hr \xFCbernommen."), /*#__PURE__*/React.createElement("p", null, "F\xFCr Inhalte externer Links sind ausschliesslich deren Betreiber verantwortlich. Zum Zeitpunkt der Verlinkung waren keine rechtswidrigen Inhalte erkennbar.")), /*#__PURE__*/React.createElement(LegalSection, {
    title: "Urheberrecht"
  }, /*#__PURE__*/React.createElement("p", null, "S\xE4mtliche Inhalte dieser Website (Texte, Bilder, Grafiken, Layout) sind urheberrechtlich gesch\xFCtzt. Jede Verwendung ausserhalb der gesetzlichen Schranken bedarf der vorherigen schriftlichen Zustimmung.")));
}

/* --------------------------- Datenschutz ------------------------------- */
function DatenschutzPage({
  site
}) {
  return /*#__PURE__*/React.createElement(LegalLayout, {
    eyebrow: "Rechtliches",
    title: "Datenschutzerkl\xE4rung",
    sub: "Informationen zur Bearbeitung Ihrer Personendaten nach dem revidierten Schweizer Datenschutzgesetz (revDSG)."
  }, /*#__PURE__*/React.createElement(LegalSection, {
    title: "1. Verantwortliche Stelle"
  }, /*#__PURE__*/React.createElement("p", null, "Verantwortlich f\xFCr die Bearbeitung von Personendaten im Sinne des revDSG ist:", /*#__PURE__*/React.createElement("br", null), site.name, " GmbH, ", site.street, ", ", site.city, ".", /*#__PURE__*/React.createElement("br", null), "Kontakt: ", /*#__PURE__*/React.createElement("a", {
    href: `mailto:${site.email}`,
    className: "text-brand hover:underline"
  }, site.email))), /*#__PURE__*/React.createElement(LegalSection, {
    title: "2. Bearbeitete Daten"
  }, /*#__PURE__*/React.createElement("p", null, "Wir bearbeiten insbesondere folgende Kategorien von Personendaten:"), /*#__PURE__*/React.createElement("ul", {
    className: "ml-5 list-disc space-y-1.5"
  }, /*#__PURE__*/React.createElement("li", null, "Kontaktangaben (Name, Adresse, Telefonnummer, E-Mail-Adresse)"), /*#__PURE__*/React.createElement("li", null, "Angaben aus Offert-Anfragen und Auftragsabwicklung"), /*#__PURE__*/React.createElement("li", null, "technische Daten beim Besuch der Website (z. B. IP-Adresse, Browsertyp)"))), /*#__PURE__*/React.createElement(LegalSection, {
    title: "3. Zweck der Bearbeitung"
  }, /*#__PURE__*/React.createElement("p", null, "Ihre Daten werden ausschliesslich zur Beantwortung von Anfragen, zur Erstellung von Offerten, zur Erbringung unserer Dienstleistungen sowie zur Erf\xFCllung gesetzlicher Pflichten bearbeitet.")), /*#__PURE__*/React.createElement(LegalSection, {
    title: "4. Weitergabe an Dritte"
  }, /*#__PURE__*/React.createElement("p", null, "Eine Weitergabe erfolgt nur, soweit dies zur Leistungserbringung erforderlich ist (z. B. an beauftragte Partnerbetriebe) oder eine gesetzliche Verpflichtung besteht. Es findet kein Verkauf von Personendaten statt.")), /*#__PURE__*/React.createElement(LegalSection, {
    title: "5. Aufbewahrung & Sicherheit"
  }, /*#__PURE__*/React.createElement("p", null, "Wir bewahren Personendaten nur so lange auf, wie es f\xFCr die genannten Zwecke oder gesetzliche Aufbewahrungsfristen erforderlich ist, und treffen angemessene technische und organisatorische Massnahmen zum Schutz Ihrer Daten.")), /*#__PURE__*/React.createElement(LegalSection, {
    title: "6. Ihre Rechte"
  }, /*#__PURE__*/React.createElement("p", null, "Sie haben im Rahmen des revDSG insbesondere das Recht auf Auskunft, Berichtigung, L\xF6schung sowie auf Herausgabe oder \xDCbertragung Ihrer Daten. Wenden Sie sich daf\xFCr an die oben genannte Adresse.")), /*#__PURE__*/React.createElement(LegalSection, {
    title: "7. Cookies"
  }, /*#__PURE__*/React.createElement("p", null, "Diese Demo-Website setzt keine Tracking-Cookies ein. Allf\xE4llige technisch notwendige Cookies dienen ausschliesslich dem Betrieb der Website.")));
}

/* ------------------------------- AGB ----------------------------------- */
function AGBPage({
  site
}) {
  return /*#__PURE__*/React.createElement(LegalLayout, {
    eyebrow: "Rechtliches",
    title: "Allgemeine Gesch\xE4ftsbedingungen",
    sub: "Diese AGB regeln das Vertragsverh\xE4ltnis zwischen der Rheinquell GmbH und ihren Kundinnen und Kunden."
  }, /*#__PURE__*/React.createElement(LegalSection, {
    title: "1. Geltungsbereich"
  }, /*#__PURE__*/React.createElement("p", null, "Diese Allgemeinen Gesch\xE4ftsbedingungen (AGB) gelten f\xFCr s\xE4mtliche Dienstleistungen der ", site.name, " GmbH, soweit nichts anderes schriftlich vereinbart wurde. Abweichende Bedingungen der Kundschaft gelten nur bei ausdr\xFCcklicher schriftlicher Anerkennung.")), /*#__PURE__*/React.createElement(LegalSection, {
    title: "2. Offerten & Festpreis"
  }, /*#__PURE__*/React.createElement("p", null, "Online-Sch\xE4tzungen sind unverbindliche Richtwerte. Die verbindliche Offerte erstellen wir nach kurzer Begutachtung; der vereinbarte Festpreis wird vorab schriftlich best\xE4tigt.")), /*#__PURE__*/React.createElement(LegalSection, {
    title: "3. Notdienst & Anfahrt"
  }, /*#__PURE__*/React.createElement("p", null, "Notdienst-Eins\xE4tze werden nach Aufwand oder zum vereinbarten Festpreis verrechnet. Anfahrts- sowie allf\xE4llige Wochenend- und Nachtzuschl\xE4ge werden vor Auftragsannahme transparent kommuniziert.")), /*#__PURE__*/React.createElement(LegalSection, {
    title: "4. Pflichten der Kundschaft"
  }, /*#__PURE__*/React.createElement("p", null, "Die Kundschaft sorgt f\xFCr den ungehinderten Zugang zum Einsatzort und stellt die f\xFCr die Arbeiten erforderlichen Informationen rechtzeitig zur Verf\xFCgung.")), /*#__PURE__*/React.createElement(LegalSection, {
    title: "5. Zahlungsbedingungen"
  }, /*#__PURE__*/React.createElement("p", null, "Rechnungen sind innert 30 Tagen netto zahlbar, sofern nichts anderes vereinbart wurde. Alle Preise verstehen sich in Schweizer Franken (CHF) inkl. gesetzlicher Mehrwertsteuer.")), /*#__PURE__*/React.createElement(LegalSection, {
    title: "6. Gew\xE4hrleistung"
  }, /*#__PURE__*/React.createElement("p", null, "Wir erbringen unsere Leistungen fachgerecht nach den anerkannten Regeln der Technik. M\xE4ngel sind unverz\xFCglich nach Feststellung schriftlich anzuzeigen; es gelten die gesetzlichen Gew\xE4hrleistungsfristen.")), /*#__PURE__*/React.createElement(LegalSection, {
    title: "7. Haftung"
  }, /*#__PURE__*/React.createElement("p", null, "Die Haftung beschr\xE4nkt sich auf direkte Sch\xE4den, die auf grobe Fahrl\xE4ssigkeit oder Absicht zur\xFCckzuf\xFChren sind, soweit gesetzlich zul\xE4ssig.")), /*#__PURE__*/React.createElement(LegalSection, {
    title: "8. Anwendbares Recht & Gerichtsstand"
  }, /*#__PURE__*/React.createElement("p", null, "Es gilt ausschliesslich Schweizer Recht. Gerichtsstand ist, soweit gesetzlich zul\xE4ssig, Basel-Stadt.")));
}
window.ImpressumPage = ImpressumPage;
window.DatenschutzPage = DatenschutzPage;
window.AGBPage = AGBPage;
})();
