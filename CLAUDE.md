# astro-lernprojekt

**Lernprojekt, keine Produktivsite.** Baut dieselbe Site wie `typo3-lernprojekt` und
`wp-lernprojekt` — Spezifikation in [docs/SPEC.md](docs/SPEC.md), eingefroren.

## Stack

Astro **v7.2.1** (Stand 13.08.2026) · SSG · Content Collections + MDX · Node 24 (`.nvmrc`) ·
Integrationen `@astrojs/mdx`, `@astrojs/sitemap`.

**Bewusst nicht:** kein Tailwind, kein UI-Framework, kein SSR-Adapter. Handgeschriebenes
CSS hält die drei Sites vergleichbar. Bilder brauchen kein Extra-Paket, `astro:assets` ist
eingebaut.

## Startbefehl

```bash
cd ~/Dokumente/Repos/astro-lernprojekt && npm run dev   # localhost:4321
npm run build && npm run preview                        # vor jedem Deploy
```

`base: '/astro-lernprojekt'` ist in `astro.config.mjs` gesetzt (GitHub Pages). Deshalb
**vor dem Deploy immer `build` + `preview` gegenprüfen, nicht nur `dev`** — der Dev-Server
läuft auf `/` und verdeckt kaputte Pfade.

Astro-Tooling-Details (Background-Dev-Server, Doku-Links) stehen in [AGENTS.md](AGENTS.md).

## Arbeitsweise

- **Jennifer schreibt allen Projektcode selbst** (`.astro`-Komponenten, Schemas, CSS).
- **Erklären, nicht diktieren.** Konzept, Zusammenhang und das Warum erklären; keine
  fertigen Code-Blöcke zum Abtippen, keine Zeile-für-Zeile-Ansage. Sie setzt es selbst um,
  ich reviewe hinterher und gebe Feedback.
- Doku- und Config-Dateien schreibe ich. **`docs/JOURNAL.md` schreibt Jennifer selbst.**
- **Vor jeder Session die letzten zwei Einträge in [docs/JOURNAL.md](docs/JOURNAL.md) lesen.**
- [docs/COMPARE.md](docs/COMPARE.md) lebt **nur in diesem Repo** und sammelt den
  Systemvergleich über alle drei Projekte. Nach jeder Session um 1–3 Zeilen ergänzen.
- **Git macht Jennifer selbst** — ich führe kein `commit`/`push` aus. Lesende Befehle
  (`status`, `log`, `diff`) sind okay.
- Eine Session gilt nur als fertig mit: sichtbarem Ergebnis im Browser + JOURNAL-Eintrag +
  Commit.
