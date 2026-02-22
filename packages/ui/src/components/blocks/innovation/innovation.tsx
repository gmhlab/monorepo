import { HeroSection } from "./components/hero-section";
import { WhatIsItSection } from "./components/what-is-it-section";
import { HowToUseSection } from "./components/how-to-section";
import { TestingSection } from "./components/test-it-section";
import { UserStorySection } from "./components/user-story-section";
import { GetItSection } from "./components/get-it-section";
import { CtaButton } from "./components/cta-button";
import { NavigationFooter } from "./components/nav-footer";


export function Innovation() {
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full flex flex-col items-center mx-auto">

      <HeroSection 
        title="Innovation Title" 
        subtitle="Innovation subtitle and description" 
      />

      <WhatIsItSection />
      <HowToUseSection />
      <TestingSection />
      <UserStorySection />
      <GetItSection />

      {/* Large CTA Button */}
      <NavigationFooter />
      </div>
    </div>
  );
}