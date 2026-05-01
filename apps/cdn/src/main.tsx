import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import {
  HeroSection,
  WhatIsItSection,
  PartnerMarquee,
  HowToUseSection,
  ThemeProvider,
  TooltipProvider,
} from "@repo/ui";
import { equipData } from "../../web/src/app/(content)/site/innovations/equip/data";
import "./globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <HeroSection
          title={equipData.hero.title}
          subtitle={equipData.hero.subtitle}
        />
        <WhatIsItSection {...equipData.whatIsIt} />
        <PartnerMarquee />
        <HowToUseSection {...equipData.howToUse} />
      </TooltipProvider>
    </ThemeProvider>
  </StrictMode>
);
