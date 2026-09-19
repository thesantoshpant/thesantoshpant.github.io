import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Deploy target: GitHub *user* site (thesantoshpant.github.io / Santoshpant23.github.io)
// => base "/". If this is ever hosted from a *project* repo, change base to "/<repo>/".
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
