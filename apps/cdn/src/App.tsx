import { HeroSection, WhatIsItSection, PartnerMarquee, HowToUseSection } from "@repo/ui";
import { equipData } from "@repo/ui";

export function App() {
  return (
    <div className="">
      <HeroSection
        title={equipData.hero.title}
        subtitle={equipData.hero.subtitle}
      />
      <WhatIsItSection {...equipData.whatIsIt} />
      <PartnerMarquee />
      <HowToUseSection {...equipData.howToUse} />
    </div>
  );
}

export default App;
