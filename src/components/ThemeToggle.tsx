import { useState } from "react";
import { Moon, Sun } from "lucide-react";

/** Reads the theme already resolved by the inline boot script in index.html. */
function isDark(): boolean {
  return typeof document !== "undefined" && document.documentElement.classList.contains("dark");
}

const META_LIGHT = "#F7F9FB";
const META_DARK = "#0A0E14";

/**
 * Sun/moon toggle. Flips `.dark` on <html>, persists the explicit choice in
 * localStorage, and keeps the browser theme-color in sync. Until the user clicks,
 * the boot script's prefers-color-scheme resolution stands (nothing persisted).
 */
export function ThemeToggle() {
  const [dark, setDark] = useState(isDark);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* localStorage unavailable — fine, theme still applies for this session */
    }
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next ? META_DARK : META_LIGHT);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={dark}
      className="-m-2 p-2 text-secondary transition-colors hover:text-accent"
    >
      {dark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
    </button>
  );
}
