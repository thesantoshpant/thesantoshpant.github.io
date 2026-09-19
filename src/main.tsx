import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error('Root element "#root" not found.');
}

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The build writes the rendered page into index.html (scripts/prerender.mjs), so the
// usual case is hydration. A dev server serves the empty shell and renders from scratch.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
