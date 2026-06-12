import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// Inject <meta name="robots" content="noindex, nofollow"> into every HTML
// entry at build time. GitHub Pages project sites can't host an effective
// /robots.txt (it's only read from the org root domain), so a per-page meta
// tag is the reliable way to keep the deployed CDN pages out of search indexes.
function noindexMeta(): Plugin {
  return {
    name: "inject-noindex",
    transformIndexHtml() {
      return [
        {
          tag: "meta",
          attrs: { name: "robots", content: "noindex, nofollow" },
          injectTo: "head",
        },
      ];
    },
  };
}

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/monorepo/" : "/",
  plugins: [react(), tailwindcss(), noindexMeta()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@repo/ui": resolve(__dirname, "../../packages/ui/src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        innovations: resolve(__dirname, "innovations.html"),
        equip: resolve(__dirname, "equip.html"),
        page: resolve(__dirname, "index.html"),
        globals: resolve(__dirname, "globals.html"),
        dashboard: resolve(__dirname, "dashboard.html"),
        demo: resolve(__dirname, "demo.html"),
        homepage: resolve(__dirname, "homepage.html"),
        designsystem: resolve(__dirname, "/modules/design-system.html"),  
        sink: resolve(__dirname, "/modules/sink.html"),              
      },
      output: {
        entryFileNames: "assets/[name]/index-[hash].js",
        chunkFileNames: "assets/shared/[name]-[hash].js",
        assetFileNames: "assets/[name]/index-[hash][extname]",
      },
    },
  },
}));
 