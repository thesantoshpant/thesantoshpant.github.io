# Santosh Pant — Portfolio

A single-page personal portfolio for Santosh Pant — software engineer and
geospatial-ML researcher. Dark, understated, text-forward; one accent color (teal).
Built with React + TypeScript + Vite + Tailwind CSS, statically hosted on GitHub Pages.

## Stack

- **React 18 + TypeScript + Vite**
- **Tailwind CSS** — design tokens (colors, fonts, radii) live in `tailwind.config.js`
- **lucide-react** — icons
- **framer-motion** — one subtle scroll reveal (fade + 12px rise), disabled under
  `prefers-reduced-motion`

## Run locally

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Edit content

All copy, links, and metrics live in typed files under `src/content/` — edit these,
not the components:

| File | What it holds |
| --- | --- |
| `src/content/site.ts` | Name, email, social URLs, résumé paths, nav, canonical URL |
| `src/content/projects.ts` | Project cards (title, tags, description, links, icon) |
| `src/content/research.ts` | Research list (title, status pill, sentence, link) |
| `src/content/about.ts` | About paragraphs + facts panel |
| `src/content/skills.ts` | Skill groups |
| `src/content/achievements.ts` | Achievements grid |

### Résumés

`public/santosh-swe.pdf` and `public/santosh-geo.pdf` are **placeholders** — replace
them with the real PDFs (same filenames) and the Resume dropdown picks them up
automatically.

### Project screenshots

Project cards show a neutral placeholder block. To use real screenshots, drop 16:9
images into `public/thumbs/` (e.g. `vigilant-ai.png`) and render them in
`src/components/ProjectCard.tsx` in place of the icon block.

## Deploy (GitHub Pages)

This is configured for a **user site** (`thesantoshpant.github.io`), so
`vite.config.ts` uses `base: "/"`.

- Push to `main` → `.github/workflows/deploy.yml` builds and publishes to Pages.
- In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

If you instead host from a **project repo** (`<user>.github.io/<repo>/`):

1. Set `base: "/<repo>/"` in `vite.config.ts`.
2. Update the absolute URLs in `index.html`, `public/sitemap.xml`, `public/robots.txt`,
   `public/404.html`, and `src/content/site.ts`.

## Notes

- The Projects filter syncs to the URL query string — e.g.
  `/?filter=full-stack` opens pre-filtered and shareable.
- `public/og.svg` is a clean text-based social card. Some platforms (X/Twitter,
  Facebook) prefer a raster image — export it to `og.png` (1200×630) and update the
  `og:image` / `twitter:image` tags in `index.html` if you want maximum compatibility.
- Content honesty: the SIGSPATIAL paper is **under review**, never published/accepted.
  Metrics match the source content exactly — keep it that way.
