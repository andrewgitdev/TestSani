# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projekt

Statische Single-Page-Website für **Rheinquell**, einen Sanitär-Notdienst in der Region Basel.
Inhalte, Kommentare und Commit-Messages sind auf Deutsch (Schweizer Schreibweise, z. B. „ss" statt „ß", Zahlen mit Hochkomma via `de-CH`).

## Lokal ansehen

Kein `package.json`, kein Bundler, keine Tests, kein Linter. Skripte werden über relative Pfade geladen, daher per HTTP-Server ausliefern (nicht `file://`):

```bash
python -m http.server 8000   # → http://localhost:8000
```

Deployment: `index.html` + Ordner `site/` auf einen beliebigen Static-Host.

## Build-Modell: `.jsx` ist Quelle, `dist/` ist committetes Artefakt

- `site/*.jsx` sind die Quelle der Wahrheit. `index.html` lädt aber **nur** `site/dist/*.js` und `site/dist/tailwind.css`.
- **Nach jeder Änderung an einer `.jsx` muss die zugehörige `site/dist/*.js` neu erzeugt und mitcommittet werden.** Format jeder dist-Datei:
  1. Kopfzeilen `// Auto-kompiliert aus site/<name>.jsx (kein Browser-Babel mehr).` / `// Quelle bleibt site/<name>.jsx — bei Änderungen neu kompilieren.`
  2. JSX → `React.createElement` (Babel, Preset „react", klassische Runtime, keine ES-Module)
  3. Der gesamte Code in eine IIFE `(function () { … })();` gewickelt.
  Im Repo ist dafür kein Skript hinterlegt; z. B. ad hoc mit `npx --yes -p @babel/cli -p @babel/core -p @babel/preset-react babel --presets @babel/preset-react site/<name>.jsx` kompilieren und Kopf + IIFE ergänzen.
- `site/image-slot.js` ist plain JS (kein dist-Pendant) und wird direkt geladen.
- `site/dist/tailwind.css` ist ein statisch vorab erzeugtes Tailwind-Utility-Set (+ Preflight). **Neue Tailwind-Klassen, die dort noch nicht vorkommen, wirken nicht**, bis die CSS-Datei neu erzeugt wird — vorher mit `grep` prüfen, ob eine Klasse existiert, oder vorhandene Klassen verwenden.
- Farb-Utilities wie `brand`/`copper` lesen CSS-Variablen als RGB-Tripel (`--brand: 31 77 115`), damit Alpha-Utilities funktionieren. Die Variablen (`--brand*`, `--copper*`, `--page-bg`, `--font-sans`) stehen im `<style>`-Block von `index.html`, nicht im Tailwind-CSS.

## Laufzeit-Architektur

- React 18, ReactDOM und Lucide kommen als UMD-Builds von unpkg (`defer`), es gibt keine Imports. Jede Datei holt sich Hooks über `const { useState, … } = React;`.
- **Module teilen sich alles über `window.*`** (z. B. `window.HomePage`, `window.Icon`, `window.CalcUI`, `window.STATS`; `ui.jsx` und `tweaks-panel.jsx` per `Object.assign(window, {…})`). Neue exportierte Komponenten müssen am Dateiende an `window` gehängt werden.
- **Die Reihenfolge der `<script defer>`-Tags in `index.html` ist die Abhängigkeitsreihenfolge**: `tweaks-panel` → `icons` → `ui` → `scroll-fx` → `calc-*` → `site-config` → `page-*` → `app` (zuletzt, rendert in `#root`). Eine neue Datei muss dort an der richtigen Stelle eingetragen werden. Werte, die auf Modulebene (nicht erst beim Rendern) gebraucht werden, müssen aus früher geladenen Dateien stammen.
- **Routing** (`app.jsx`): kein Router und keine URL-Änderung — `const [page, setPage] = useState('home')` plus eine `nav(page, anchor)`-Funktion, die Seiten-Komponenten von `window` rendert und optional zu einer Element-ID scrollt (z. B. `leistung-0`). Navigationsstrukturen: `NAV` (mobil, `MOBILE_PRIMARY` für die Bottom-Bar) und `MENU` (Desktop mit Dropdowns).
- **Zentrale Daten — nur dort pflegen:**
  - `site-config.jsx` → `STATS` (Gründungsjahr, Einsätze, Bewertungen, Rating …) und `fmtNum`.
  - `app.jsx` → `SITE` (Name, Telefon, E-Mail, Adresse, Öffnungszeiten).
  - `calc-config.jsx` → Projekttypen, Optionen und CHF-Preisspannen `[von, bis]` des Offerten-Rechners (`window.CALC_CFG`).
- **Offerten-Rechner**: `calc-config` (Daten/Preislogik) → `calc-controls` (Eingabe-Controls, `window.CalcUI`) → `calc-steps` (Schritt-Inhalte, Ergebnis) → `calc-offer` (Stepper/Flow, `window.CalcOffer`) → eingebunden in `page-offerte`.
- **Tweaks** (`tweaks-panel.jsx`, genutzt in `app.jsx`): Design-Tool-Panel (Stimmung/Schrift/Tonalität), das nur CSS-Variablen auf `:root` setzt. Kommuniziert per `postMessage` mit einem Host-Editor; der Block zwischen `/*EDITMODE-BEGIN*/ … /*EDITMODE-END*/` in `app.jsx` wird vom Host umgeschrieben — Marker nicht entfernen.
- **Bilder**: `<image-slot>`-Custom-Element (`image-slot.js`, via `ImagePlaceholder` in `ui.jsx`). Eingefügte Bilder liegen base64-kodiert in `.image-slots.state.json` (sehr gross, ~700 KB — nicht komplett lesen), Schlüssel ist die `id` des Slots.

## Duplizierte Inhalte synchron halten

Firmendaten (Telefon, Adresse, Leistungen, Bewertung „4.9★ / 320") stehen zusätzlich hart codiert in `index.html`: Meta-/OG-/Twitter-Beschreibungen, JSON-LD-Structured-Data und der `<noscript>`-Fallback für Crawler. Bei Änderungen an `SITE`, `STATS` oder dem Leistungsangebot diese Stellen mitpflegen.
