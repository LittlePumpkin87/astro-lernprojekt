# Design decisions — Astro build

Why this repository looks the way it does. Decisions that apply to all three builds live in
[SPEC.md](SPEC.md); this file covers the Astro side only. The cross-system findings belong
in [COMPARE.md](COMPARE.md) — that is a comparison, not a decision log.

New decisions are recorded in the closing comment of the issue they belong to and labelled
`decision`. `is:issue is:closed label:decision` lists them. The ones worth keeping are
summarised here.

---

## Static site generation, no SSR adapter

**Decision:** The site is built as static output. No adapter, no server runtime.

**Why:** Nothing on this site is personalised or request-dependent. Content comes from
files at build time. An SSR adapter would add a runtime to operate and pay for, in exchange
for a capability the specification does not ask for.

**Consequence:** This is the only one of the three builds that can be deployed cheaply, and
therefore the only one that will be deployed at all — GitHub Pages via Actions (planned;
the workflow does not exist yet). TYPO3 and WordPress stay local.

---

## Content collections with Zod, not loose frontmatter

**Decision:** Every content type from the spec is a collection with a Zod schema.

**Considered instead:** Plain Markdown files with frontmatter, read and trusted as-is.

**Why:** The spec makes alt text mandatory for blog covers. Without a schema that rule is a
sentence in a document that nobody enforces; with one, a missing alt text fails the build.
The same holds for `draft`, `order` and `featured` — the schema is where the specification
stops being prose and starts being executable.

**Consequence:** Adding a field means touching the schema, not just the content file.
Intended.

---

## Hand-written CSS, no Tailwind, no UI framework

**Decision:** Plain CSS with custom properties for the design tokens.

**Why:** This is the decision that makes the whole comparison possible. WordPress carries
its tokens in `theme.json`, TYPO3 in an SCSS map, Astro in custom properties — three ways to
express the same values. Introduce Tailwind here and the Astro build stops being comparable
to the other two, which is the only reason this repository exists.

**Consequence:** More CSS written by hand than a utility framework would need. That is the
material being studied, not overhead.

---

## The base path is part of the build

**Decision:** `base: '/astro-lernprojekt'` is set in the config, because GitHub Pages serves
project sites from a subpath.

**Why:** Without it every absolute path breaks in production while working perfectly in
development.

**Consequence:** This is a standing trap, not a solved problem. `npm run dev` serves from
`/` and hides the issue; only `build` followed by `preview` reproduces the deployed paths.
Every deploy is checked through `preview`, never through `dev`.

---

## MDX alongside Markdown

**Decision:** MDX is available, but plain Markdown stays the default for ordinary content.

**Why:** MDX earns its place where a piece of content needs a component inline. Used
everywhere by default, it turns a content file into a code file and the content model into
an implementation detail.

**Consequence:** Two content formats in one project, which needs a rule to stay coherent:
Markdown unless a specific post needs a component.
