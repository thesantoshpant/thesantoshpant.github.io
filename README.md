# Santosh Pant, personal site

A one-page academic site at https://thesantoshpant.github.io/, written for professors and
PhD admissions readers. Light page, system fonts, one accent color, no animation.

## Stack

React 18 + TypeScript + Vite, deployed to GitHub Pages by `.github/workflows/deploy.yml` on
every push to `main`. Styling is one file, `src/styles.css`. No CSS framework, no icon
library, no web fonts.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check, build, and prerender to dist/
npm run preview   # serve the production build
```

`npm run build` type-checks, builds the client bundle, renders the page to static HTML with
`react-dom/server` (`src/entry-server.tsx` and `scripts/prerender.mjs`) and writes that
markup into `dist/index.html`. The client bundle hydrates it, so the page reads in full
without JavaScript.

## Where the content lives

Edit these files, not the components.

| File | Holds |
| --- | --- |
| `src/content/site.ts` | name, email, links, the confirming pages behind linked names and awards, nav, the "Updated" date |
| `src/content/bio.ts` | title line, intro paragraphs, the PhD callout, the upcoming line, the teaching line |
| `src/content/problem.ts` | "The problem" section and the map caption |
| `src/content/publications.ts` | publications [1] to [5] and the "Other research" entries |
| `src/content/directions.ts` | the three research directions, the "What I want to work on next" paragraph, and the current-work paragraph |
| `src/content/software.ts` | the three software entries |
| `src/content/honors.ts` | the honors lines and the News lines |
| `src/content/terai-paths.ts` | generated map paths; do not edit by hand |

Content strings may contain `[n]`, which links to publication entry n, and `[label](url)`,
which renders an ordinary link. See `src/refs.tsx`.

Status words are literal: accepted, under review.

## The map

`scripts/make_terai_svg.py` reads boundary files that live outside this repo (the 21
Terai districts from the heat-stress research, the geoBoundaries outline of Nepal, and
the Ganges Plain, Bihar and Madhesh Province files in `../portfolio-data/`) and writes
`src/content/terai-paths.ts`, `public/favicon.svg`, `public/og.svg` and `public/og.png`.
Run it with `PYTHONIOENCODING=utf-8 python scripts/make_terai_svg.py` only if the
boundaries or the social-card text change.

## Files in public/

`Pant_Santosh_CV.pdf` (the CV), `santosh-swe.pdf` (software resume), `santosh.jpg`
(headshot), `favicon.svg`, `og.svg`, `og.png`, `robots.txt`, `sitemap.xml`, `404.html`.

## Deploy

User site, so `vite.config.ts` keeps `base: "/"`. Push to `main` and the workflow builds
and publishes. In the repo settings, Pages source is GitHub Actions.
