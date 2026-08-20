# Journal — astro-lernprojekt

Ein Eintrag am Session-Ende, vor dem Commit. Max. 10 Zeilen. Neueste Einträge nach unten
anhängen (append-only, nichts umschreiben).

Die zwei Zeilen, die nach drei Wochen Pause den Unterschied machen, sind
**NÄCHSTER SCHRITT** (imperativ, mit Dateiname) und **Startbefehl** (kopierbar).
Alles andere ist Kür.

**Format:**

```markdown
## JJJJ-MM-TT — S<n> <Thema>  (Astro <version>)
Gemacht: ...
Offen:   ...
NÄCHSTER SCHRITT: ...
Startbefehl: ...
```

---

<!-- Ab hier schreibt Jennifer. Erster Eintrag: Setup Woche 0. -->

## 2026-08-20 — S<1> "Globales Setup"  (Astro <7.2.1.>)
Gemacht: Globales CSS angelegt, Fonts integriert, Resets festgelegt, Config für Fonts angepasst

Offen:   Die Font-Tokens in global.css zeigen auf "Berkshire Swash" / "Signika Negative" als reine Namen. Seit die @font-face-Blöcke weg sind, definiert die niemand mehr — die Schriften laden aktuell nicht, du siehst die Browser-Standardschrift. Fehlt noch: <Font /> im Layout und die Tokens auf Astros cssVariables.

NÄCHSTER SCHRITT: src/layouts/BaseLayout.astro befüllen: Gerüst aus index.astro verschieben, <slot />, <Font />.

Startbefehl: npm run dev