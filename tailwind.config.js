/** @type {import('tailwindcss').Config} */

// Colors are driven by CSS variables (space-separated RGB channels) so the same
// token names resolve to the dark or light palette depending on the `.dark` class
// on <html>. The `<alpha-value>` form keeps Tailwind's `/opacity` modifiers working
// (e.g. `bg-bg/80`). Palettes live in src/index.css.
const withAlpha = (variable) => `rgb(var(${variable}) / <alpha-value>)`;

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: withAlpha("--c-bg"),
        "bg-alt": withAlpha("--c-bg-alt"),
        surface: withAlpha("--c-surface"),
        hover: withAlpha("--c-hover"),
        hairline: withAlpha("--c-hairline"),
        primary: withAlpha("--c-primary"),
        secondary: withAlpha("--c-secondary"),
        muted: withAlpha("--c-muted"),
        // The one accent — teal (brighter in dark, a contrast-safe deeper teal in light).
        accent: withAlpha("--c-accent"),
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      borderRadius: {
        card: "14px",
        chip: "10px",
      },
      maxWidth: {
        content: "1200px",
      },
      letterSpacing: {
        eyebrow: "0.12em",
      },
      keyframes: {
        "fade-rise": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
