# System comparison — TYPO3 · WordPress FSE · Astro

> This file lives **in this repository only** (which is public anyway). Add 1–3 lines after
> every session in any of the three projects.
>
> This is the most valuable portfolio artefact of the whole exercise — worth more than three
> live URLs. It eventually becomes the article "The same website in TYPO3, WordPress and
> Astro" on littlepumpkindesign.de.

| Concept | TYPO3 | WordPress FSE | Astro |
|---|---|---|---|
| Page layout | Fluid `Layouts/` | `parts/` + `templates/` | `layouts/*.astro` + `<slot />` |
| Reusable module | Content element | Block (`block.json`) | `.astro` component |
| Design tokens | SCSS map | `theme.json` | CSS custom properties |
| Content model | TCA / database | Post types + meta | Zod schema |
| Relation | inline/select | Post meta / term | `reference()` |
| Images | FAL + cropVariants | Media library | `astro:assets` |
| Fonts | by hand (`@font-face` in SCSS) | `theme.json` → `fontFamilies` + `fontFace` | `fonts:` in the config + `<Font />` |

## Observations

<!-- Free text: where did each system hurt, where was it pleasant, what was surprising.
     These sentences are the article later on — the table alone will not carry it. -->

**2026-08-20 (Astro S1)**

- **Layouts in Astro are not discovered, they are imported.** TYPO3 resolves them through
  the backend layout assignment in the page tree, WordPress through the template hierarchy
  and its file names — in both cases convention decides which template applies. In Astro
  every page writes the import itself. More cumbersome across seven pages, but there is no
  invisible resolution logic: reading one file is enough to know what happens. The price is
  a silent failure mode — if a page forgets the import, it renders an HTML fragment with no
  `<head>` and no warning.

- **Font handling is the first clear win for Astro.** Four lines of config, and Astro
  picks up the local files, self-hosts them, hashes the file names for cache
  busting, sets the base path, and derives a metrically adjusted fallback face from the
  generic family to prevent layout shift. In TYPO3 every one of those points is manual work;
  `theme.json` can do the declaration, but not the optimisation.

- **`src/` versus `public/` is the first real Astro hurdle.** Whatever sits in `src/` goes
  through the build and is addressed through an import — never through a URL. Whatever sits
  in `public/` is passed through unchanged and therefore does not automatically get the
  `base` path either. That is exactly what broke the first attempt at the fonts
  (`url("/fonts/…")` pointing at a file in `src/`). TYPO3 (FAL) and WordPress (media
  library) do not have this split: there, an uploaded file sits in one place and has a URL.
