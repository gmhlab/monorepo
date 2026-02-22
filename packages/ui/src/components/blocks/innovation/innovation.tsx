import { InnovationHeader } from "./components/header";
import { WhatIsItSection } from "./components/what-is-it";
import { HowToUseSection } from "./components/use-it";
import { TestingSection } from "./components/test-it";
import { UserStorySection } from "./components/user-story";
import { GetItSection } from "./components/get-it";
import { NavigationFooter } from "./components/nav-footer";
import { Download } from "lucide-react";

export function Innovation() {
  return (
    <div className="min-h-screen bg-[#033C5A]">
      <div className="w-full max-w-4xl flex flex-col items-center mx-auto">
      <InnovationHeader />
      <WhatIsItSection />
      <HowToUseSection />
      <TestingSection />
      <UserStorySection />
      <GetItSection />

      {/* Large CTA Button */}
      <div className="container mx-auto px-4 py-16">
        <button className="w-full max-w-2xl mx-auto block bg-gradient-to-r from-[#033C5A] to-[#024D75] text-white py-8 px-12 rounded-2xl shadow-2xl transition-all relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#AA9868] to-[#D4C5A0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 flex items-center justify-center gap-4">
            <Download className="w-8 h-8" />
            <span className="text-2xl">Get Innovation Materials</span>
          </div>
          <div className="absolute inset-0 bg-white opacity-0"></div>
        </button>
      </div>
      </div>

      <NavigationFooter />

    </div>
  );
}