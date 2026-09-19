// Render the page to static HTML at build time and write it into dist/index.html.
// Runs after `vite build` and `vite build --ssr src/entry-server.tsx --outDir dist-ssr`.
// The client bundle then hydrates the markup (see src/main.tsx). Readers and crawlers
// that do not run JavaScript get the full page.
import { readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ssrDir = path.join(root, "dist-ssr");
const indexPath = path.join(root, "dist", "index.html");
const placeholder = '<div id="root"></div>';

const entry = readdirSync(ssrDir).find((name) => /^entry-server\.m?js$/.test(name));
if (!entry) throw new Error("dist-ssr has no entry-server bundle");

const mod = await import(pathToFileURL(path.join(ssrDir, entry)).href);
const render = mod.render ?? mod.default?.render;
if (typeof render !== "function") throw new Error("entry-server exports no render()");

const html = render();
const template = readFileSync(indexPath, "utf8");
if (!template.includes(placeholder)) throw new Error(`dist/index.html has no ${placeholder}`);

writeFileSync(indexPath, template.replace(placeholder, `<div id="root">${html}</div>`));
rmSync(ssrDir, { recursive: true, force: true });
console.log(`prerendered ${html.length} characters into dist/index.html`);
