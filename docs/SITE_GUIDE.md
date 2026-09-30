# Site guide

How this site is built and what each kind of page holds, so a page can be added without
reading the others.

Deployed to GitHub Pages under the `measuring-introspection` organization by
`.github/workflows/deploy.yml` on push to `main`.

## Build

```bash
npm run dev       # local preview; runs the backlinks script first
npm run build     # production build into dist/
```

- Astro + Starlight, `base: /measuring-introspection`. Internal links carry the base
  (`/measuring-introspection/papers/lindsey-2025/`).
- Math: `remark-math` + `rehype-katex` under both `markdown` and `mdx`.
- `src/plugins/remark-source-quotes.mjs` sets quotations of 25 or more characters in italics.
- `scripts/build-backlinks.mjs` writes `src/data/backlinks.json`.
- Page titles use Starlight's default `PageTitle`: the frontmatter `title` is the heading;
  do not add a `# ` heading in the body.
- The sidebar is explicit in `astro.config.mjs`. A page left out is still built.

## Sidebar

Home → **Measurement Card** (overview, then stages 1–8) → **Papers** (overview, then one
page per paper grouped by paradigm) → **Theoretical Foundations** (grouped by field) →
**Reference** (glossary, about).

## Card stages

1. Measurand
2. Procedure
3. Instrument and indication
4. Measurement model
5. Calibration (with traceability as a sub-question)
6. Uncertainty (repeatability, reproducibility, and the setting that changes the conclusion)
7. Comparability (instruments on independent principles; self versus other)
8. Validity conditions

Each stage has a general question and a self-report question. Stage names are never
paraphrased on other pages.

## Page types

### Paper page (`papers/<slug>.md`)

Model: `lindsey-2025.md`.

1. **Source.** Title, authors, year, venue or status, code and data, all linked.
2. **Description.** One paragraph: what the paper asks and how.
3. `## Measurement card`: a table `Stage | What the paper reports`, descriptive only. No
   codes and no grades; the coders assign codes independently.
4. `## Design`: the experiment in numbered steps.
5. `## Results`: the key numbers, stated plainly.
6. `## Related papers`: links.

### Card stage page (`measurement-card/<stage>.md`)

Metadata table (stage, general question, self-report question, codes, where it comes from)
→ what the stage asks, numbered → code table → examples from the papers → what the stage
does not establish → nearest stage → sources.

### Foundation page (`foundations/<field>.md`)

Opening paragraph → the field's main ideas under short noun-phrase headings → `## LLM analog`
→ `## Limits of the analogy` → `## Card stages` → `## Sources` (Source | Year | Principle).
Pages with a slide deck link it at the top: `**[Overview slides](/measuring-introspection/slides/<deck>.pdf)** (PDF)`.

## Slides

Beamer sources in `slides/<topic>/`, compiled PDFs in `public/slides/`. Metropolis theme,
16:9, clickable overview, boxed part dividers, TikZ diagrams. Never gray text: gray is for
lines and arrows only.

## Prose

Plain declarative sentences; noun-phrase headers; paraphrase with a linked citation rather
than quoting, keeping at most one or two short quotations per page where the exact words
matter; no page-number clutter in prose; every cited source linked where it is mentioned;
American spelling; every acronym defined at first use on each page; "Limits of the analogy",
never "disanalogy".
