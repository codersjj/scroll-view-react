import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig ({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.jsx"),
      name: "scroll-view-r",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "prop-types", "styled-components"],
    },
  },
});