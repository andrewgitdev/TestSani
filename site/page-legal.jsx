// page-legal.jsx — Rechtliche Unterseiten (Schweiz): Impressum, Datenschutz (revDSG), AGB
// Platzhalter-Inhalt — bitte vor dem Go-Live durch die echten Angaben ersetzen.

function LegalSection({ title, children }) {
  return (
    <Reveal dir="up" className="mt-10 first:mt-0">
      <div>
        <h2 className="font-sans text-xl font-bold text-navy md:text-2xl">{title}</h2>
        <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-navy/70">{children}</div>
      </div>
    </Reveal>
  );
}

function LegalNote() {
  return (
    <div className="mt-12 flex items-start gap-3 rounded-2xl border border-copper/20 bg-copper/[0.05] p-5 text-sm leading-relaxed text-navy/70">
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-copper/12 text-copper"><Icon name="file-text" size={17} /></span>
      <p>
        <span className="font-semibold text-navy">Platzhalter-Dokument.</span> Dieser Text dient als
        Vorlage für die Demo-Website und ist <span className="font-semibold">keine Rechtsberatung</span>.
        Bitte vor der Veröffentlichung durch die tatsächlichen Angaben und eine fachliche Prüfung ersetzen.
      </p>
    </div>
  );
}

function LegalLayout({ eyebrow, title, sub, children }) {
  return (
    <div className="page-enter">
      <PageHeader eyebrow={eyebrow} title={title} sub={sub} />
      <section className="bg-page py-12 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          {children}
          <LegalNote />
        </div>
      </section>
    </div>
  );
}

/* ----------------------------- Impressum ------------------------------- */
function ImpressumPage({ site }) {
  return (
    <LegalLayout
      eyebrow="Rechtliches"
      title="Impressum"
      sub="Angaben gemäss den Informationspflichten für gewerbliche Anbieter in der Schweiz."
    >
      <LegalSection title="Verantwortlich für den Inhalt">
        <p>
          {site.name} GmbH<br />
          {site.street}<br />
          {site.city}<br />
          Schweiz
        </p>
      </LegalSection>

      <LegalSection title="Kontakt">
        <p>
          Telefon: <a href={`tel:${site.telRaw}`} className="text-brand hover:underline">{site.tel}</a><br />
          E-Mail: <a href={`mailto:${site.email}`} className="text-brand hover:underline">{site.email}</a>
        </p>
      </LegalSection>

      <LegalSection title="Handelsregister & MwSt">
        <p>
          Eingetragen im Handelsregister des Kantons Basel-Stadt.<br />
          Handelsregister-Nr.: CHE-000.000.000 (Platzhalter)<br />
          Mehrwertsteuer-Nr.: CHE-000.000.000 MWST (Platzhalter)
        </p>
      </LegalSection>

      <LegalSection title="Vertretungsberechtigte Person">
        <p>Geschäftsführung: Vorname Nachname (Platzhalter)</p>
      </LegalSection>

      <LegalSection title="Haftungsausschluss">
        <p>
          Die Inhalte dieser Website werden mit grösstmöglicher Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen.
        </p>
        <p>
          Für Inhalte externer Links sind ausschliesslich deren Betreiber verantwortlich. Zum Zeitpunkt
          der Verlinkung waren keine rechtswidrigen Inhalte erkennbar.
        </p>
      </LegalSection>

      <LegalSection title="Urheberrecht">
        <p>
          Sämtliche Inhalte dieser Website (Texte, Bilder, Grafiken, Layout) sind urheberrechtlich geschützt.
          Jede Verwendung ausserhalb der gesetzlichen Schranken bedarf der vorherigen schriftlichen Zustimmung.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

/* --------------------------- Datenschutz ------------------------------- */
function DatenschutzPage({ site }) {
  return (
    <LegalLayout
      eyebrow="Rechtliches"
      title="Datenschutzerklärung"
      sub="Informationen zur Bearbeitung Ihrer Personendaten nach dem revidierten Schweizer Datenschutzgesetz (revDSG)."
    >
      <LegalSection title="1. Verantwortliche Stelle">
        <p>
          Verantwortlich für die Bearbeitung von Personendaten im Sinne des revDSG ist:<br />
          {site.name} GmbH, {site.street}, {site.city}.<br />
          Kontakt: <a href={`mailto:${site.email}`} className="text-brand hover:underline">{site.email}</a>
        </p>
      </LegalSection>

      <LegalSection title="2. Bearbeitete Daten">
        <p>Wir bearbeiten insbesondere folgende Kategorien von Personendaten:</p>
        <ul className="ml-5 list-disc space-y-1.5">
          <li>Kontaktangaben (Name, Adresse, Telefonnummer, E-Mail-Adresse)</li>
          <li>Angaben aus Offert-Anfragen und Auftragsabwicklung</li>
          <li>technische Daten beim Besuch der Website (z. B. IP-Adresse, Browsertyp)</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Zweck der Bearbeitung">
        <p>
          Ihre Daten werden ausschliesslich zur Beantwortung von Anfragen, zur Erstellung von Offerten,
          zur Erbringung unserer Dienstleistungen sowie zur Erfüllung gesetzlicher Pflichten bearbeitet.
        </p>
      </LegalSection>

      <LegalSection title="4. Weitergabe an Dritte">
        <p>
          Eine Weitergabe erfolgt nur, soweit dies zur Leistungserbringung erforderlich ist (z. B. an
          beauftragte Partnerbetriebe) oder eine gesetzliche Verpflichtung besteht. Es findet kein Verkauf
          von Personendaten statt.
        </p>
      </LegalSection>

      <LegalSection title="5. Aufbewahrung & Sicherheit">
        <p>
          Wir bewahren Personendaten nur so lange auf, wie es für die genannten Zwecke oder gesetzliche
          Aufbewahrungsfristen erforderlich ist, und treffen angemessene technische und organisatorische
          Massnahmen zum Schutz Ihrer Daten.
        </p>
      </LegalSection>

      <LegalSection title="6. Ihre Rechte">
        <p>
          Sie haben im Rahmen des revDSG insbesondere das Recht auf Auskunft, Berichtigung, Löschung sowie
          auf Herausgabe oder Übertragung Ihrer Daten. Wenden Sie sich dafür an die oben genannte Adresse.
        </p>
      </LegalSection>

      <LegalSection title="7. Cookies">
        <p>
          Diese Demo-Website setzt keine Tracking-Cookies ein. Allfällige technisch notwendige Cookies dienen
          ausschliesslich dem Betrieb der Website.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

/* ------------------------------- AGB ----------------------------------- */
function AGBPage({ site }) {
  return (
    <LegalLayout
      eyebrow="Rechtliches"
      title="Allgemeine Geschäftsbedingungen"
      sub="Diese AGB regeln das Vertragsverhältnis zwischen der Rheinquell GmbH und ihren Kundinnen und Kunden."
    >
      <LegalSection title="1. Geltungsbereich">
        <p>
          Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für sämtliche Dienstleistungen der {site.name} GmbH,
          soweit nichts anderes schriftlich vereinbart wurde. Abweichende Bedingungen der Kundschaft gelten nur
          bei ausdrücklicher schriftlicher Anerkennung.
        </p>
      </LegalSection>

      <LegalSection title="2. Offerten & Festpreis">
        <p>
          Online-Schätzungen sind unverbindliche Richtwerte. Die verbindliche Offerte erstellen wir nach kurzer
          Begutachtung; der vereinbarte Festpreis wird vorab schriftlich bestätigt.
        </p>
      </LegalSection>

      <LegalSection title="3. Notdienst & Anfahrt">
        <p>
          Notdienst-Einsätze werden nach Aufwand oder zum vereinbarten Festpreis verrechnet. Anfahrts- sowie
          allfällige Wochenend- und Nachtzuschläge werden vor Auftragsannahme transparent kommuniziert.
        </p>
      </LegalSection>

      <LegalSection title="4. Pflichten der Kundschaft">
        <p>
          Die Kundschaft sorgt für den ungehinderten Zugang zum Einsatzort und stellt die für die Arbeiten
          erforderlichen Informationen rechtzeitig zur Verfügung.
        </p>
      </LegalSection>

      <LegalSection title="5. Zahlungsbedingungen">
        <p>
          Rechnungen sind innert 30 Tagen netto zahlbar, sofern nichts anderes vereinbart wurde. Alle Preise
          verstehen sich in Schweizer Franken (CHF) inkl. gesetzlicher Mehrwertsteuer.
        </p>
      </LegalSection>

      <LegalSection title="6. Gewährleistung">
        <p>
          Wir erbringen unsere Leistungen fachgerecht nach den anerkannten Regeln der Technik. Mängel sind
          unverzüglich nach Feststellung schriftlich anzuzeigen; es gelten die gesetzlichen Gewährleistungsfristen.
        </p>
      </LegalSection>

      <LegalSection title="7. Haftung">
        <p>
          Die Haftung beschränkt sich auf direkte Schäden, die auf grobe Fahrlässigkeit oder Absicht zurückzuführen
          sind, soweit gesetzlich zulässig.
        </p>
      </LegalSection>

      <LegalSection title="8. Anwendbares Recht & Gerichtsstand">
        <p>
          Es gilt ausschliesslich Schweizer Recht. Gerichtsstand ist, soweit gesetzlich zulässig, Basel-Stadt.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

window.ImpressumPage = ImpressumPage;
window.DatenschutzPage = DatenschutzPage;
window.AGBPage = AGBPage;
