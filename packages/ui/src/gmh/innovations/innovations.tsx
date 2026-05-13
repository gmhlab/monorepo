{/* import { InnovationsHero } from './gmh-innovations-hero'; */}
import { InnovationsSection } from './components/CardSection';
import { InnovationsHero } from './components/HeroSection';
import { Flex, FlexItem, Section } from "../../layouts";

export function Innovations() {
  return (

      <div className="w-full relative h-auto overflow-hidden">
        {/* Background decorative elements */}
        <div className="border-red-300 border-1 absolute inset-0 opacity-100">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#AA9868] to-transparent rounded-full blur-3xl" />
          <div className="border-red-300 border-1 absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#AA9868]/30 to-transparent rounded-full blur-3xl" />
        </div>
        
        {/* Side margins with subtle gradients */}
        <Flex direction="row" alignPrimary="space-between" alignSecondary='space-between' className="relative">
          <div className="border-red-300 border-1 w-24  min-h-screen bg-gradient-to-r from-[#033C5A]/100 to-transparent" />
          <Flex direction="column" gap="100" className="flex-1">
            <InnovationsHero /> 
            <InnovationsSection />
          </Flex>
          <div className="border-red-300 border-1 w-24 shrink-0 h-screen bg-gradient-to-l from-[#033C5A]/50 to-transparent" />
        </Flex>
      </div>
  );
}
