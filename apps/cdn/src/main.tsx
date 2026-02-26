import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./globals.css";
import { TooltipProvider, TooltipTrigger } from "@repo/ui";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TooltipProvider>
      <h1>Hello!</h1>
    </TooltipProvider>
  </StrictMode>
);