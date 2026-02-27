import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@repo/ui": resolve(__dirname, "../../packages/ui/src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "hero-section": resolve(__dirname, "src/entries/hero-section.tsx"),
        "what-is-section": resolve(__dirname, "src/entries/what-is-section.tsx"),
        "how-to-section": resolve(__dirname, "src/entries/how-to-section.tsx"),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === "main"
            ? "assets/[name]-[hash].js"
            : "widgets/[name].js";
        },
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});