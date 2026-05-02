import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider, TooltipProvider } from "@repo/ui";
import App from "./App";
import "./globals.css";

function reportHeight() {
  const height = document.documentElement.scrollHeight;
  window.parent.postMessage({ type: "resize", height }, "*");
}

let debounceTimer: ReturnType<typeof setTimeout>;
const debouncedReport = () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(reportHeight, 100);
};

window.addEventListener("load", reportHeight);
new ResizeObserver(debouncedReport).observe(document.documentElement);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </ThemeProvider>
  </StrictMode>
);
