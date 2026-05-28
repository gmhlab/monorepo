import { CardSection } from './sections/card-section';
import { HeroSection02 } from './sections/hero-section-02';
import { Header } from "../../composites/Headers/Headers";
import { Footer } from "../../composites/Footers/Footers";
import { BrandedTemplate } from "../../templates";

export type InnovationsProps = {
  logoSrc?: string;
  footerLogoSrc?: string;
};

export function InnovationsPage({ logoSrc, footerLogoSrc }: InnovationsProps = {}) {
  return (
    <BrandedTemplate
      header={<Header currentPath="/innovations" logoSrc={logoSrc} />}
      footer={<Footer logoSrc={footerLogoSrc} />}
    >
      <HeroSection02 />
      <CardSection />
    </BrandedTemplate>
  );
}
