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

## Beobachtungen

<!-- Freitext: wo hat welches System wehgetan, wo war es angenehm, was hat überrascht.
     Genau diese Sätze sind später der Artikel — die Tabelle allein trägt ihn nicht. -->
