import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        // Silence Sass deprecations coming from Bootstrap
        silenceDeprecations: [
          "legacy-js-api",
          "global-builtin",
          "import",
          "color-functions",
          "abs-percent",
          "mixed-decls",
        ],
      },
    },
  },
});
