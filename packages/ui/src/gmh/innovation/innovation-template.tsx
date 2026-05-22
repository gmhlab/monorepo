import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { HeroSection } from "./sections/hero-section";
import { WhatIsItSection } from "./sections/what-is-section";
import { HowToUseSection } from "./sections/how-to-section";
import { TestingSection } from "./sections/testing-section";
import { UserStorySection } from "./sections/user-story-section";
import { PartnerMarquee } from "./sections/partner-marquee";
import { GetItSection } from "./sections/get-it-section";
import { CtaSection } from "./sections/cta-section";
import { NavigationFooter } from "./sections/navigation-footer";
import { Header } from "../../composites/Headers/Headers";
import { Footer } from "../../composites/Footers/Footers";
import { BrandedTemplate } from "../../templates";

export interface WhatIsItData {
  headline: string;
  body: string;
  capabilities: { label: string; detail: string }[];
  highlight: string;
}

export interface HowToUseData {
  steps: {
    title: string;
    description: string;
    icon?: LucideIcon;
    graphic?: ReactNode;
  }[];
}

export interface TestingData {
  headline: string;
  body: string;
  callout: string;
  barData: { name: string; value: number }[];
  pieData1: { name: string; value: number }[];
  pieData2: { name: string; value: number }[];
}

export interface UserStoryData {
  storyIntro: string;
  paragraphs: string[];
  quote: string;
  name: string;
  role: string;
  org: string;
}

export interface GetItData {
  heading: string;
  body: string;
  resources: {
    icon: LucideIcon;
    label: string;
    href?: string;
  }[];
  highlight: string;
}

export interface InnovationData {
  hero: {
    title: string;
    subtitle: string;
  };
  whatIsIt: WhatIsItData;
  howToUse: HowToUseData;
  testing: TestingData;
  userStory: UserStoryData;
  getIt: GetItData;
  cta?: {
    label?: string;
    href?: string;
  };
  navigation?: {
    items: { href: string; label: string }[];
    current: number;
  };
}

interface InnovationTemplateProps {
  data: InnovationData;
  logoSrc?: string;
  footerLogoSrc?: string;
}

export function InnovationTemplate({ data, logoSrc, footerLogoSrc }: InnovationTemplateProps) {
  return (
    <BrandedTemplate
      header={<Header currentPath="/innovations" logoSrc={logoSrc} />}
      footer={<Footer logoSrc={footerLogoSrc} />}
    >

        <HeroSection
          title={data.hero.title}
          subtitle={data.hero.subtitle}
        />

        <WhatIsItSection {...data.whatIsIt} />
        <PartnerMarquee />
        <HowToUseSection {...data.howToUse} />
        <TestingSection />
        <UserStorySection {...data.userStory} />
        <GetItSection {...data.getIt} />

        <CtaSection
          label={data.cta?.label}
          href={data.cta?.href}
        />

        {data.navigation && (
          <NavigationFooter
            items={data.navigation.items}
            current={data.navigation.current}
          />
        )}

    </BrandedTemplate>
  );
}
