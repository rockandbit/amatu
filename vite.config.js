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
        // Valid Sass deprecations to silence for Bootstrap 4 and old syntax
        silenceDeprecations: ["legacy-js-api", "global-builtin", "import"],
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
