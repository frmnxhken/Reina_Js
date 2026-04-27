import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.js"],
  format: ["esm", "iife"],
  globalName: "__REINA_INTERNAL__",
  dts: true,
  clean: true,
  minify: true,
  sourcemap: true,
  footer: {
    js: `if (typeof window !== "undefined") { window.Reina = __REINA_INTERNAL__.Reina; }`,
  },
});
