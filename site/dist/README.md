# site/dist — Produktions-Build

Diese Dateien werden von `Rheinquell Website.html` geladen. Sie ersetzen die
Laufzeit-Tools (Browser-Babel + Tailwind-CDN) durch fertige Artefakte.

## Was hier liegt
- `*.js` — die `site/*.jsx`-Quellen, **vorkompiliert** (JSX → React.createElement).
  Jede Datei ist in eine IIFE gekapselt, exakt wie das frühere Babel-Standalone
  jede `<script type="text/babel">` isoliert hat. Geteilt wird ausschliesslich
  über `window.*` (unverändert).
- `tailwind.css` — alle im Quellcode vorkommenden Tailwind-Utilities + Preflight,
  einmalig aus dem früheren Inline-`tailwind.config` erzeugt. Die Marken-Variablen
  (`--brand`, `--copper`, `--page-bg`, `--font-sans`) liefert weiterhin der
  `<style>`-Block im HTML; die Tweaks schreiben nur diese Variablen.

## Quelle der Wahrheit
Die `site/*.jsx`-Dateien bleiben die Quelle. **Nach jeder Änderung an einer
`.jsx` muss die zugehörige `dist/*.js` neu kompiliert werden** (JSX → JS,
Preset „react", dann in `(function(){ … })();` wickeln). Ändert sich der
Klassen-Bestand (neue Tailwind-Klassen), muss `tailwind.css` neu erzeugt werden.

## Deployment
Statisch hostbar: `Rheinquell Website.html` + den Ordner `site/` ausliefern.
Externe Abhängigkeiten (von unpkg, defer geladen): React/ReactDOM (Production)
und Lucide. Für vollständige Offline-/Self-Hosting-Unabhängigkeit könnten diese
drei Dateien zusätzlich lokal abgelegt werden.
