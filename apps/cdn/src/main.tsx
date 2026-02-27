import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./globals.css";
import { ThemeProvider, TooltipProvider } from "@repo/ui";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </ThemeProvider>
  </StrictMode>
);