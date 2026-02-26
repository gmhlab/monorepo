import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

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
    prevHref?: string;
    nextHref?: string;
    current?: number;
    total?: number;
  };
}
