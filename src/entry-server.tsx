import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

/** Server entry for the build-time prerender. See scripts/prerender.mjs. */
export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
