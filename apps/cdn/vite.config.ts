import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/monorepo/" : "/",
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
        innovations: resolve(__dirname, "index.html"),
        equip: resolve(__dirname, "equip.html"),
        page: resolve(__dirname, "page.html"),
      },
      output: {
        entryFileNames: "assets/[name]/index-[hash].js",
        chunkFileNames: "assets/shared/[name]-[hash].js",
        assetFileNames: "assets/[name]/index-[hash][extname]",
      },
    },
  },
}));
 