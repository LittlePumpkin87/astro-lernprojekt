# Systemvergleich — TYPO3 · WordPress FSE · Astro

> Diese Datei lebt **nur in diesem Repo** (das ohnehin öffentlich geht). Nach jeder Session
> in irgendeinem der drei Projekte um 1–3 Zeilen ergänzen.
>
> Das ist das wichtigste Bewerbungs-Artefakt der ganzen Übung — mehr wert als drei Live-URLs.
> Aus dieser Tabelle wird am Ende der Artikel „Dieselbe Website in TYPO3, WordPress und Astro"
> auf littlepumpkindesign.de.

| Konzept | TYPO3 | WordPress FSE | Astro |
|---|---|---|---|
| Seiten-Layout | Fluid `Layouts/` | `parts/` + `templates/` | `layouts/*.astro` + `<slot />` |
| Wiederverwendbares Modul | Content Element | Block (`block.json`) | `.astro`-Komponente |
| Design-Tokens | TypoScript / Site Set | `theme.json` | CSS Custom Properties |
| Inhaltsmodell | TCA / Datenbank | Post Types + Meta | Zod-Schema |
| Relation | inline/select | Post-Meta / Term | `reference()` |
| Bilder | FAL + cropVariants | Media Library | `astro:assets` |
| Schriften | Handarbeit (`@font-face` im SCSS) | `theme.json` → `fontFamilies` + `fontFace` | `fonts:` in der Config + `<Font />` |

## Beobachtungen

<!-- Freitext: wo hat welches System wehgetan, wo war es angenehm, was hat überrascht.
     Genau diese Sätze sind später der Artikel — die Tabelle allein trägt ihn nicht. -->

**2026-08-20 (Astro S1)**

- **Layouts sind in Astro nicht auffindbar, sondern importiert.** TYPO3 löst über die
  Backend-Layout-Zuweisung im Seitenbaum auf, WordPress über die Template-Hierarchie und
  ihre Dateinamen — in beiden Fällen entscheidet Konvention, welches Template greift. In
  Astro schreibt jede Seite den Import selbst hin. Umständlicher bei sieben Seiten, dafür
  gibt es keine unsichtbare Auflösungslogik: eine Datei lesen genügt, um zu wissen, was
  passiert. Der Preis ist ein stiller Fehlerfall — vergisst eine Seite den Import, rendert
  sie ein HTML-Fragment ohne `<head>`, ohne Warnung.

- **Schrift-Einbindung ist der erste klare Astro-Vorsprung.** Vier Zeilen Config, und
  Astro lädt die Dateien beim Build, hostet sie selbst, hasht die Dateinamen fürs
  Cache-Busting, setzt den Base-Pfad und erzeugt aus der generischen Fallback-Familie eine
  metrisch angepasste Ersatzschrift gegen Layout-Shift. In TYPO3 ist jeder dieser Punkte
  Handarbeit; `theme.json` kann die Deklaration, aber nicht die Optimierung.

- **`src/` gegen `public/` ist die erste echte Astro-Hürde.** Was in `src/` liegt, geht
  durch den Build und wird über einen Import angesprochen — nie über eine URL. Was in
  `public/` liegt, wird unverändert durchgereicht und bekommt deshalb auch den `base`-Pfad
  nicht automatisch. Genau daran ist der erste Font-Versuch gescheitert (`url("/fonts/…")`
  auf eine Datei in `src/`). TYPO3 (FAL) und WordPress (Media Library) kennen diese
  Trennung nicht: dort liegt eine hochgeladene Datei an einem Ort und hat eine URL.
