import { HeroSection } from "./components/hero-section";
import { WhatIsItSection } from "./components/what-is-it-section";
import { HowToUseSection } from "./components/how-to-section";
import { TestingSection } from "./components/test-it-section";
import { UserStorySection } from "./components/user-story-section";
import { GetItSection } from "./components/get-it-section";
import { CtaButton } from "./components/cta-button";
import { NavigationFooter } from "./components/nav-footer";
import type { InnovationData } from "./types";

interface InnovationProps {
  data: InnovationData;
}

export function Innovation({ data }: InnovationProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full flex flex-col items-center mx-auto">

        <HeroSection
          title={data.hero.title}
          subtitle={data.hero.subtitle}
        />

        <WhatIsItSection {...data.whatIsIt} />
        <HowToUseSection {...data.howToUse} />
        <TestingSection {...data.testing} />
        <UserStorySection {...data.userStory} />
        <GetItSection {...data.getIt} />

        <CtaButton
          label={data.cta?.label}
          href={data.cta?.href}
        />

        <NavigationFooter
          prevHref={data.navigation?.prevHref}
          nextHref={data.navigation?.nextHref}
          current={data.navigation?.current}
          total={data.navigation?.total}
        />
      </div>
    </div>
  );
}