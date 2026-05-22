import { InnovationsSection } from './components/CardSection';
import { InnovationsHero } from './components/HeroSection';
import { Header } from "../../composites/Headers/Headers";
import { BrandedTemplate } from "../../templates";

export type InnovationsProps = {
  logoSrc?: string;
};

export function Innovations({ logoSrc }: InnovationsProps = {}) {
  return (
    <BrandedTemplate header={<Header currentPath="/innovations" logoSrc={logoSrc} />}>
      <InnovationsHero />
      <InnovationsSection />
    </BrandedTemplate>
  );
}
