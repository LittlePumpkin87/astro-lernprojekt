# astro-lernprojekt

Statische Content-Site mit Astro — Content Collections, MDX, handgeschriebenes CSS.

Dies ist eines von **drei Lernprojekten**, die dieselbe fiktive Agentur-Website
„Pumpkin Studio" umsetzen: einmal in TYPO3, einmal als WordPress-Block-Theme, einmal in
Astro. Gleiche Seiten, gleiche Inhaltstypen, gleiche Design-Tokens — drei völlig
verschiedene Wege dorthin. Die gemeinsame, eingefrorene Spezifikation liegt in
[docs/SPEC.md](docs/SPEC.md).

| Repo | System |
|---|---|
| [astro-lernprojekt](https://github.com/LittlePumpkin87/astro-lernprojekt) | Astro (SSG) |
| [typo3-lernprojekt](https://github.com/LittlePumpkin87/typo3-lernprojekt) | TYPO3 v13.4 |
| [wp-lernprojekt](https://github.com/LittlePumpkin87/wp-lernprojekt) | WordPress Block-Theme (FSE) |

**Der Systemvergleich lebt in diesem Repo:** [docs/COMPARE.md](docs/COMPARE.md) — eine
wachsende Tabelle, die dasselbe Konzept in allen drei Systemen nebeneinanderstellt
(Layout, wiederverwendbare Module, Design-Tokens, Inhaltsmodell, Relationen, Bilder).

## Stack

Astro **7.2** · Static Site Generation · Content Collections + MDX · Node 24 ·
`@astrojs/sitemap`

**Bewusst nicht:** kein Tailwind, kein UI-Framework, kein SSR-Adapter. Handgeschriebenes
CSS hält die drei Sites optisch vergleichbar — und darum geht es hier.

## Lokal starten

```bash
git clone git@github.com:LittlePumpkin87/astro-lernprojekt.git
cd astro-lernprojekt
npm install
npm run dev        # http://localhost:4321
```

| Befehl | Wirkung |
|---|---|
| `npm run dev` | Dev-Server mit Hot Reload |
| `npm run build` | Produktions-Build nach `dist/` |
| `npm run preview` | Build lokal ausliefern |

Die Seite wird unter einem Unterpfad ausgeliefert (`base: '/astro-lernprojekt'`). Deshalb
vor jedem Deploy `build` **und** `preview` prüfen — der Dev-Server läuft auf `/` und
verdeckt kaputte Pfade.

## Stand

Setup abgeschlossen: Projekt, Integrationen und Deploy-Konfiguration stehen. Als Nächstes
die Content Collections mit Zod-Schemas, danach Layout und Startseiten-Sektionen nach
[docs/SPEC.md](docs/SPEC.md).
