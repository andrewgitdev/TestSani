# DemoSani — Seitenstruktur & Inhalts-Bestandsaufnahme

**Stand:** 2026-09-07 · **Status:** reine Bestandsaufnahme

Dieses Dokument hält fest, was für DemoSani bereits festgelegt ist und was offen
ist. Es erfindet bewusst keine Texte, Leistungen, Preise oder Referenzen. Was
inhaltlich nicht entschieden ist, steht unter „Offen" und bleibt dort stehen.

---

## 0. Projektrahmen

**Festgelegt**

- Projektname: DemoSani
- Typ: Portfolio-Demo des eigenen Webdesign-Business — kein Auftrag eines realen Betriebs
- Zweck: Akquise-Referenz, um echte Sanitärbetriebe in der Region Basel als Kunden zu gewinnen
- Qualitätsanspruch: muss hochwertig wirken und ausdrücklich **nicht** wie eine
  08/15-Branchenvorlage aussehen
- Adressat der Demo: Sanitärbetriebe in der Region Basel

**Offen**

- Ob DemoSani mit fiktiven Betriebsdaten (Firmenname, Adresse, Telefon) auftritt
  oder als erkennbare Demo ohne Firmenidentität
- Sprache/Lokalisierung (de-CH angenommen? nicht festgelegt)
- Technischer Stack, Hosting, Domain

---

## 1. Seiten- / Sektionsstruktur

Sechs Einheiten laut Nav-Konzept:

| Nr. | Bezeichnung | Inhalt festgelegt |
|-----|-------------|-------------------|
| 01 | Home | nein |
| 02 | Leistungen | nein |
| 03 | Referenzen | nein |
| 04 | Über uns | nein |
| 05 | Preise | nein |
| 06 | Kontakt | nein |

Für **keine** dieser sechs Einheiten existieren bisher fertige Texte oder Inhalte.
Festgelegt ist bislang ausschliesslich ihre Anzahl, ihre Reihenfolge und ihre
Benennung.

### Navigation — Darstellung

**Festgelegt**

- Grund: fast schwarz
- Beschriftung: gebrochen weisse Grotesk-Versalien
- Ziffern 01–06: klein, blauviolett
- Trennlinien: dünn

**Offen**

- Ob es sich um sechs eigenständige Seiten oder sechs Sektionen einer
  durchgehenden Seite handelt („Seiten/Sektionen" ist offen; die über die ganze
  Seite laufende Scroll-Sequenz deutet auf einen One-Pager, ist aber nicht
  entschieden)
- Nav-Form: dauerhaft sichtbar, sticky, Overlay/Fullscreen-Menü oder Burger
- Zustandsdarstellung (aktive Sektion, Hover)
- Verhalten und Darstellung auf Mobile
- Ob es über die sechs Punkte hinaus weitere Seiten gibt (Impressum,
  Datenschutz, 404)

---

## 2. Design-Stil

**Referenz:** Awwwards „Noomo Showcase"

**Festgelegt**

- Grundton: dunkel bis fast schwarz
- Akzentfarbe: tiefes elektrisches Blau
- Leitmotiv: grosses facettiertes Glas-/Kristallobjekt mit Lichtbrechung
- Display-Typografie: grosse weisse Grotesk-Versalien
- Sekundär-Typografie: kleine gesperrte Mono-Labels

**Offen**

- Konkrete Farbwerte (Schwarzton, elektrisches Blau, Blauviolett der Nav-Ziffern)
- Konkrete Schriften und deren Lizenzierung (Grotesk, Mono)
- Herkunft des Glas-/Kristallobjekts: 3D-Render, Fotografie oder Echtzeit-3D
- Wo das Glasobjekt auftritt (nur Home oder durchgehend) und wie es sich zur
  Scroll-Sequenz verhält
- Layoutraster, Weissraum-System, Verhalten auf Mobile

---

## 3. Durchgehende Scroll-Sequenz

**Festgelegt**

- Eine scroll-gebundene Bild-/Videosequenz läuft über die ganze Seite
- Sie hält bei jeder Sektion kurz an — diese Haltepunkte heissen „Stufen" —
  und läuft danach zur nächsten weiter
- Jede Sektion erhält ein eigenes, dazu passendes Sanitärteil-Motiv

**Offen**

- Umsetzung als Einzelbild-Frames oder als Video
- Zuordnung Motiv → Sektion (welches Sanitärteil zu welcher der sechs Einheiten
  gehört, ist nicht festgelegt)
- Dauer und Verhalten der Haltepunkte (harter Stopp, Rückwärts-Scroll, Skip)
- Frameanzahl, Auflösung, Dateigrösse, Ladestrategie
- Fallback für Mobile, langsame Verbindungen und `prefers-reduced-motion`
- Technische Umsetzung (Bibliothek, Canvas, Video-Scrubbing)

---

## 4. Abschluss-Bereich

**Festgelegt**

- Ganz unten gibt es einen Übergang von der Animation zu einem
  Kontaktformular-/Offerte-Bereich

**Offen**

- Ob Kontaktformular, Offerten-Rechner oder beides
- Formularfelder und -logik
- Was beim Absenden passiert (Demo-Modus, echter Versand, Empfänger)
- Gestaltung des Übergangs von der Animation in diesen Bereich
- Ob darunter ein Footer folgt und was darin steht

---

## 5. Asset-Bestand

**Vorhanden**

- Hero-Bilder, davon benannt: Chrom-Wasserhahn, Messing-Winkelfitting,
  Kupfer-T-Verbindung — „u. a.", weitere existieren, sind aber nicht benannt

**Nicht vorhanden**

- Fertige Texte/Inhalte für Leistungen, Referenzen, Über uns, Preise, Kontakt
- Das Glas-/Kristallobjekt als Asset
- Die Frames/Clips der Scroll-Sequenz

**Offen**

- Vollständige Liste und Anzahl der vorhandenen Hero-Bilder
- Ob die Hero-Bilder zugleich die Motive der Scroll-Sequenz sind oder davon
  getrennt

---

## 6. Bewusst nicht Teil dieser Bestandsaufnahme

Die folgenden Punkte werden in einem separaten Schritt von einer anderen KI
erarbeitet und hier deshalb weder vorgeschlagen noch vorbelegt:

- Konkrete Texte (Headlines, Copy, Microcopy)
- Leistungsliste
- Preismodell
- Referenzbeispiele

---

## 7. Offene Punkte auf einen Blick

1. Sechs eigenständige Seiten oder sechs Sektionen eines One-Pagers?
2. Zuordnung der Sanitärteil-Motive zu den sechs Sektionen
3. Scroll-Sequenz als Bildfolge oder als Video
4. Abschluss-Bereich: Kontaktformular, Offerte oder beides
5. Konkrete Farbwerte und Schriften des Design-Systems
6. Herkunft und Rolle des Glas-/Kristallobjekts
7. Fiktive Betriebsidentität ja/nein
8. Technischer Stack und Verhältnis zum bestehenden Repository-Inhalt (siehe 8.)

---

## 8. Repository-Befund

Zum Zeitpunkt dieser Bestandsaufnahme enthält das Repository `andrewgitdev/TestSani`
kein DemoSani-Material:

- Kein Vorkommen von „DemoSani" in irgendeiner Datei
- Der Branch `claude/demosani-website-structure-5wqte0` ist inhaltlich identisch
  mit `main`
- Vorhanden ist stattdessen **Rheinquell**, eine fertige, helle React-Single-Page-App
  (Weiss/Navy/Kupfer) für einen Sanitär-Notdienst Region Basel, mit sieben
  Nav-Punkten (Home, Leistungen, Über uns, Preise, Offerte, Referenzen, Kontakt)
  und vollständig ausformulierten Inhalten inklusive Offerten-Rechner
- Die genannten Hero-Bilder (Chrom-Wasserhahn, Messing-Winkelfitting,
  Kupfer-T-Verbindung) liegen nicht im Repository. Das einzige eingebettete Bild
  in `.image-slots.state.json` ist ein Rohbau-Foto mit Kupferleitungen und gehört
  zum Rheinquell-Build

Ob DemoSani ein eigenständiges neues Projekt neben Rheinquell ist, Rheinquell
ablöst oder dessen Inhalte weiterverwendet, ist **offen**.
