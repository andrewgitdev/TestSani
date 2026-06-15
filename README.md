# Rheinquell — Sanitär-Website

Statische Website für **Rheinquell**, einen Sanitär-Notdienst in der Region Basel
(24/7 Notdienst, Installation, Sanierung, Wartung).

Umgesetzt aus einem Claude-Design-Handoff als deploybarer Produktions-Build.

## Aufbau

- **`index.html`** — Einstiegspunkt der Single-Page-App.
- **`site/dist/`** — vorkompilierte Module (`*.js`) + `tailwind.css`. Diese werden
  von `index.html` geladen.
- **`site/*.jsx`** — die Quelldateien (Quelle der Wahrheit). Nach jeder Änderung an
  einer `.jsx` muss die zugehörige `dist/*.js` neu kompiliert werden (JSX → React.createElement),
  und bei neuen Tailwind-Klassen `tailwind.css` neu erzeugt werden.
- **`.image-slots.state.json`** — Sidecar für eingefügte Bilder der Foto-Platzhalter.

React, ReactDOM und Lucide werden als Production-Builds von unpkg geladen (`defer`).

## Lokal ansehen

Die Seite lädt ihre Skripte über relative Pfade — daher über einen HTTP-Server
ausliefern, nicht die Datei direkt per `file://` öffnen:

```bash
# Python
python -m http.server 8000
# danach im Browser: http://localhost:8000
```

## Deployment

Statisch hostbar: `index.html` + den Ordner `site/` ausliefern
(z. B. GitHub Pages, Netlify, Vercel oder beliebiger Static-Host).
Für vollständige Offline-Unabhängigkeit könnten React/ReactDOM/Lucide
zusätzlich lokal abgelegt werden.
