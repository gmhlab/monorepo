import { InnovationsSection } from './components/CardSection';
import { InnovationsHero } from './components/HeroSection';
import { Header } from "../../composites/Headers/Headers";
import { Footer } from "../../composites/Footers/Footers";
import { BrandedTemplate } from "../../templates";

export type InnovationsProps = {
  logoSrc?: string;
  footerLogoSrc?: string;
};

export function Innovations({ logoSrc, footerLogoSrc }: InnovationsProps = {}) {
  return (
    <BrandedTemplate
      header={<Header currentPath="/innovations" logoSrc={logoSrc} />}
      footer={<Footer logoSrc={footerLogoSrc} />}
    >
      <InnovationsHero />
      <InnovationsSection />
    </BrandedTemplate>
  );
}
