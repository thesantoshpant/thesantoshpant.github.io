# Build Prompt - Santosh Pant Personal Portfolio (React)

> Paste this whole file into your build AI (Claude Code / Cursor / etc.). A Stitch design mockup exists as the visual reference; THIS file is the source of truth for content, behavior, and the final look. Where the mockup and this file differ, follow this file.
>
> Design direction in one line: **understated, plain, honest, text-forward.** Dark, clean, one accent color, no flash. The opposite of a generated-looking template. Let the work speak.

---

## 0. Role, objective, acceptance criteria
You are a senior front-end engineer. Build a single-page, statically-hosted personal portfolio for Santosh Pant, deployable on GitHub Pages. He is a software engineer AND geospatial-ML researcher targeting BOTH general SWE roles and geospatial/climate/ML roles - so the site is engineer-and-researcher balanced (neither side dominates).

Build until all pass:
1. It reads as understated and professional - NO marketing flash. A skeptical engineer should not roll their eyes.
2. A general SWE recruiter sees real shipped software (Projects) and strong signals (Achievements) without scrolling past research; a geo/ML recruiter sees the research depth. Balanced, not geo-tilted.
3. No fabricated content; every claim/number matches Section 4 exactly.
4. Lighthouse >= 95 on Performance, Accessibility, Best Practices, SEO.
5. Fully responsive and keyboard-accessible.

## 1. Tech stack
- React + TypeScript + Vite. Tailwind CSS (implement the tokens in Section 2 as theme values). lucide-react for icons. framer-motion only for a subtle scroll-reveal (fade + small rise); honor `prefers-reduced-motion`.
- No backend/CMS. All content in a typed `src/content/*.ts` file so it is trivial to edit.
- Deploy: GitHub Pages. Set `vite.config.ts` `base` correctly (assume USER site `thesantoshpant.github.io` -> base `/`; if a project repo, `/<repo>/`). Include `.github/workflows/deploy.yml` and a `404.html` SPA fallback.
- Optional: a lightweight privacy-friendly analytics snippet (Plausible/Umami), easy to remove.

## 2. Design system (UNDERSTATED - this matters)
- Base background `#0A0E14`; alt section bg `#0D121B`; surface/card `#121A26`; hover `#18222F`; hairline border `#222C3A` (1px).
- Text: primary `#E6EDF3`, secondary `#9AA7B6`, muted `#6B7785`.
- **Exactly ONE accent color: teal `#2DD4BF`**, used ONLY for links, active nav, focus states, and small active toggles. Nothing else is colored.
- **Do NOT use:** gradients (anywhere, including text), glows, drop shadows, a "thermal raster"/animated hero graphic, AI-generated illustrations, color blocks, more than one accent, or any rainbow/teal-to-amber effect. Surfaces are flat with 1px hairline borders only.
- Fonts: Space Grotesk (headings), Inter (body), JetBrains Mono (eyebrows, tags, small labels, the Achievements/About mono details). Eyebrows = uppercase, letter-spaced, muted.
- Generous negative space; 1200px max content width; 14px card radius, 10px chips/buttons.
- Buttons: flat. Solid = teal background, navy text. Ghost = 1px teal border, transparent. Hover = subtle background shift only (no glow).

## 3. Sections and order (single page, anchored nav)
Nav -> Hero -> Projects -> Research -> About -> Skills -> Achievements -> Contact/Footer.
- Nav: mono wordmark "santosh pant" with a small teal dot; links Work / Research / About / Skills / Contact; right side GitHub + LinkedIn icons + a "Resume" dropdown (Section 5).

## 4. CONTENT (verified and honest - use exactly; plain language, no marketing words)

### Hero (flat, no emphasis color)
- Headline, entirely in primary text color (NO gradient, NO colored phrase): "I build software and research geospatial machine learning."
- Sub-line (secondary text): "CS + Data Science at Knox College, graduating 2027. Break Through Tech AI Fellow at Cornell Tech. First-author paper under review at ACM SIGSPATIAL 2026."
- No "proof row" of tokens, no hero graphic. Keep it clean text.

### Projects (4 cards). Heading: "Projects". Filter pills (mono): All / Full-stack / Computer Vision / LLM, active pill = teal fill; sync the active filter to the URL query string (e.g. `?filter=full-stack`) so a link can open pre-filtered. Each card: a small monochrome line-icon (lucide) in a neutral 16:9 placeholder block (surface color + 1px border, NO illustration, NO gradient) reserved for a real screenshot from `public/thumbs/` when available; tag chips (mono outline); title; one plain line; footer links.
- Vigilant AI - tags Full-stack, Computer Vision, LLM. "Makes CCTV footage searchable - object detection, image-embedding search, and a vision-language model running together. Built in 48 hours; won its track at HackIllinois 2026." Link: GitHub (github.com/Santoshpant23/vigilant-ai).
- bhasha-js - tags Full-stack, LLM. "A published npm package that translates a website with no per-language work: it reads the text on each component, fills in AI translations on first load, and caches them." Links: npm (npmjs.com/package/bhasha-js), GitHub (github.com/Santoshpant23/bhashajs).
- Yaar - tags Full-stack, LLM. "An AI study-abroad counselor with real-time voice (WebSocket), a multi-step agent flow with a human-approval step, Google login, Stripe payments, and spend limits." Link: GitHub (github.com/Santoshpant23/yaar).
- CropScan - tags Full-stack, Computer Vision. "A crop-disease checker for farmers: two CNNs classify a leaf photo and the app returns treatment guidance. Shipped with login, Docker, and CI." Links: Live (cropscan.tech), GitHub (github.com/Santoshpant23/cropscan).

### Research (4 items, plain list - NOT cards, and do NOT add a stats row). Heading: "Research". Each item: title, a mono status/venue pill, one sentence, link.
- Satellite Heat-Stress Forecasting - Nepal Terai. Pill: "Under review / ACM SIGSPATIAL 2026". "Early-season vegetation heat-stress pipeline over 21 Terai rice districts; honest finding - previous-year persistence beats fold-safe XGBoost (macro-F1 0.476 vs 0.362)." Link: live app terai-heat-forecaster.streamlit.app.
- RGB-to-Thermal Urban Heat Mapping. Pill: "UMich / Center for Global Health Equity". "Predicts street-level urban heat from RGB drone imagery (no thermal camera); ensembled CNN/GAN/physically-structured models to 19.3 dB PSNR / 0.71 SSIM (constant-prediction baseline 10.7)." Link: GitHub (github.com/Santoshpant23/rgb-to-thermal).
- scaleshift-bench - Geospatial Foundation-Model Benchmark. Pill: "In prep". "Benchmarked four Earth-observation foundation models (Clay, Prithvi, TerraMind, AnySat) across Nepal, India, and Mozambique; the evaluation protocol (per-polygon vs per-pixel) reorders model rankings."
- Smallholder Burn-Detection Audit - Nepal Terai. Pill: "Independent research". "Audited MODIS/VIIRS/Sentinel-2 BAIS2 against 250+ PlanetScope 3 m reference chips; the BAIS2 index over-detects burned area by roughly three orders of magnitude."
> Note: do NOT add the old stat row ("79,782 pixel-years | 19.3 dB PSNR..."). Those numbers already live inside the items above; a context-free stat strip is not wanted.

### About. Heading: "About". Two columns. Left, two short paragraphs:
"I'm a software engineer and geospatial-ML researcher from Nepal. I build full-stack and AI applications, and I publish machine-learning research for climate and earth observation.
I'm a CS + Data Science senior at Knox College (graduating June 2027) and a Break Through Tech AI Fellow at Cornell Tech. I'm looking for 2027 new-grad software-engineering and geospatial-ML roles."
Right, a mono facts panel: Education: B.S. Computer Science & Data Science, Knox College (2027); Fellowship: Break Through Tech AI, Cornell Tech; Location: Hillsboro, OR; Focus: full-stack, computer vision, geospatial ML, remote sensing.

### Skills. Heading: "Skills". Grouped chip clusters, teal mono group labels, 1px hairline chips (no fill):
- Languages: Python, TypeScript, JavaScript, Go, Java, SQL, R
- Frontend: React, Next.js, Tailwind CSS
- Backend: Node.js/Express, FastAPI, Flask, PostgreSQL, MongoDB, Redis
- ML / AI: PyTorch, scikit-learn, XGBoost, computer vision (CNNs, CLIP, YOLO), LLM APIs, Hugging Face
- Geospatial & Remote Sensing: Google Earth Engine, Rasterio, geopandas, MODIS/Landsat/Sentinel/PlanetScope, ERA5, EO foundation models
- DevOps: Docker, AWS, CI/CD, Git, Linux

### Achievements. Heading: "Achievements". A 3-column grid of hairline-bordered cells (mono labels, no glow, no badges). Each cell: bold short title + small muted context line:
- HackIllinois 2026 - 1st place (sponsor track), UIUC
- UMich AI for Heat Resilience - 2nd place ($2K)
- HackAugie 2026 - Best Gaming Hack, Augustana
- ASA DataFest 2026 - Best Insights
- ICPC North Central - Participant (UIUC site, 2025)
- Break Through Tech AI Fellow - Cornell Tech (2025-26)
- Richter Research Scholar
- Dean's List - 6 of 6 terms
- Published npm package author (bhasha-js)

### Contact / Footer
- Line: "Open to 2027 software and geospatial-ML roles." + a plain teal "Email me" link (mailto:spant@knox.edu).
- Footer (mono, minimal): "(c) 2026 Santosh Pant. All rights reserved." Social links: LinkedIn (linkedin.com/in/the-santosh-pant), GitHub (github.com/Santoshpant23), npm (npmjs.com/package/bhasha-js). No Scholar/Twitter. Back-to-top optional.

(If the GitHub handle becomes `thesantoshpant`, use it everywhere instead.)

## 5. Resume downloads
Put the two PDFs in `public/`. The "Resume" dropdown: "For software roles" -> santosh-swe.pdf; "For geospatial-ML roles" -> santosh-geo.pdf. (Provided separately.)

## 6. Hard requirements
- Responsive, mobile-first (perfect at 360 / 768 / 1280+). On mobile: single column, nav collapses to a menu, filter pills horizontally scrollable.
- Accessibility WCAG 2.1 AA: semantic HTML, keyboard nav, visible teal focus states, alt text, AA contrast, reduced-motion.
- SEO/social: title, meta description, Open Graph + Twitter card image (clean, text-based), favicon, sitemap.
- HONESTY (critical): SIGSPATIAL paper is "under review," never published/accepted. Use only the exact metrics above. Do NOT invent download counts, user counts, stars, or paper titles. bhasha-js stack is TypeScript/React/npm only (no Cloudflare/edge). UMich role is "Research Collaborator," not "intern." Use plain language - no marketing words ("seamless", "cutting-edge", "intelligence", "powerful", "passionate", "revolutionary").
- Clean, typed, componentized code; README with run + edit-content + deploy instructions.

## 7. Deliverables
1. Vite + React + TS + Tailwind project, componentized, content in `src/content/`.
2. `.github/workflows/deploy.yml` + correct `vite base` + `404.html`.
3. README. 4. A clean text-based OG image. 5. Lighthouse >= 95. 6. URL-synced Projects filter. 7. Neutral screenshot-ready placeholders on project cards (no AI illustrations).
