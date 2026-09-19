# 🎃 Pumpkin Studio — Astro Build

![Astro](https://img.shields.io/badge/Astro%207.2-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![Node.js](https://img.shields.io/badge/Node%2024-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MDX](https://img.shields.io/badge/MDX-1B1F24?style=for-the-badge&logo=mdx&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Pages-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

> **A static content site built with Astro — content collections, MDX, hand-written CSS.**
>
> This is one of **three learning projects** that implement the same fictional agency
> website, "Pumpkin Studio", three times over: once in TYPO3, once as a WordPress block
> theme, once in Astro. Same pages, same content types, same design tokens — three
> entirely different routes to get there. The point is not the site. The point is the
> comparison.

| Repository | System |
|---|---|
| [astro-lernprojekt](https://github.com/LittlePumpkin87/astro-lernprojekt) | Astro (SSG) |
| [typo3-lernprojekt](https://github.com/LittlePumpkin87/typo3-lernprojekt) | TYPO3 v13.4 |
| [wp-lernprojekt](https://github.com/LittlePumpkin87/wp-lernprojekt) | WordPress block theme (FSE) |

The shared, frozen specification lives in [docs/SPEC.md](docs/SPEC.md) and is byte-identical
in all three repositories.

**The system comparison lives in this repository:** [docs/COMPARE.md](docs/COMPARE.md) — a
growing table that puts the same concept side by side across all three systems (layout,
reusable modules, design tokens, content model, relations, images).

---

## ✨ Key Features & Technical Highlights

* **Typed content:** Content collections with Zod schemas turn the content model from
  `docs/SPEC.md` into a compile-time contract. A blog post without alt text fails the build
  instead of shipping.
* **Zero client-side JavaScript by default:** Astro ships HTML and CSS unless a component
  explicitly asks for hydration. Nothing here asks.
* **MDX where it earns its place:** Long-form content can embed components without turning
  the whole site into an application.
* **Hand-written CSS:** No Tailwind, no UI framework. Custom properties carry the design
  tokens, which keeps this build visually comparable to the other two.
* **Static output:** The build produces plain files, which is why this is the only one of
  the three that gets deployed at all.

---

## 🚀 Getting Started (Local Setup)

### Prerequisites

* Node 24

### Installation

```bash
git clone git@github.com:LittlePumpkin87/astro-lernprojekt.git
cd astro-lernprojekt
npm install
npm run dev        # http://localhost:4321
```

| Command | Effect |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the build locally |

> ⚠️ **The base path trap.** The site is served from a subpath
> (`base: '/astro-lernprojekt'`). The dev server runs at `/` and hides broken paths, so
> check `build` **and** `preview` before every deploy — not just `dev`.

---

## 📁 Project Structure

```text
astro-lernprojekt/
├── docs/
│   ├── SPEC.md          Frozen site specification (shared across all three repos)
│   ├── COMPARE.md       The cross-system comparison — lives here
│   ├── DECISIONS.md     Design decisions and rejected alternatives
│   └── JOURNAL.md       Session log
└── src/
    ├── content/         Content collections (Zod schemas)
    ├── layouts/         BaseLayout.astro — the shared page skeleton
    ├── pages/           File-based routing
    └── styles/          global.css — design tokens as custom properties
```

---

## ⚡ Feature Spotlight: The Comparison Anchor

One section of the home page carries the entire purpose of these three repositories: a
**text/image section with an editorial left/right switch**.

In Astro this is the cheapest of the three by a wide margin — a component with an `align`
prop, a few lines of CSS, done. TYPO3 needs a registered CType plus TCA plus a Fluid
template; WordPress needs a `block.json`, an editor UI and a build step.

That asymmetry is the finding, not a footnote: the effort is not in the rendering, it is in
giving an editor a control to flip it. Astro has no editor, so it has no such cost — and no
such capability either. The write-up is
[issue #7](https://github.com/LittlePumpkin87/astro-lernprojekt/issues/7).

---

## 🛠️ Roadmap & To-Dos

Tracked as issues on the shared
[Pumpkin Studio board](https://github.com/users/LittlePumpkin87/projects/3).

* [x] Project setup, integrations, deploy configuration
* [x] Global CSS, resets, font configuration
* [ ] 🐛 [Fonts do not load](https://github.com/LittlePumpkin87/astro-lernprojekt/issues/10) — font tokens have no `@font-face` definition
* [ ] [Base layout](https://github.com/LittlePumpkin87/astro-lernprojekt/issues/2) — fill `BaseLayout.astro`, move the skeleton out of `index.astro`
* [ ] [Design tokens as CSS custom properties](https://github.com/LittlePumpkin87/astro-lernprojekt/issues/1)
* [ ] [Content types](https://github.com/LittlePumpkin87/astro-lernprojekt/issues/3): service, blog post, author with a relation
* [ ] [Home page sections](https://github.com/LittlePumpkin87/astro-lernprojekt/issues/6)
* [ ] [Text/image section with a left/right switch](https://github.com/LittlePumpkin87/astro-lernprojekt/issues/7) — the comparison anchor
* [ ] [List and detail pages](https://github.com/LittlePumpkin87/astro-lernprojekt/issues/8)
* [ ] [Contact page and 404](https://github.com/LittlePumpkin87/astro-lernprojekt/issues/9)

---

## 📖 Documentation

| File | Contents |
|---|---|
| [docs/SPEC.md](docs/SPEC.md) | The frozen site specification, shared by all three repositories |
| [docs/COMPARE.md](docs/COMPARE.md) | The cross-system comparison table |
| [docs/DECISIONS.md](docs/DECISIONS.md) | Every design decision, including the alternatives that were rejected and why |
| [docs/JOURNAL.md](docs/JOURNAL.md) | Session log — the entry point after a break |
