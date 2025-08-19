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
  define: {
    // Shim CRA envs used in the codebase
    "process.env": {},
    // In CRA, PUBLIC_URL defaults to empty string. Keep that to avoid // in paths.
    "process.env.PUBLIC_URL": '""',
    "process.env.NODE_ENV": "import.meta.env.MODE",
  },
});
