import { StrictMode, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, TooltipProvider } from "@repo/ui";
import "./globals.css";

export function mount(app: ReactNode) {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem forcedTheme="light">
        <TooltipProvider>{app}</TooltipProvider>
      </ThemeProvider>
    </StrictMode>,
  );
}
