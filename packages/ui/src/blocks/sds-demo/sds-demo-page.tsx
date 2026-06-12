import { DEFAULT_SLOT } from "react-aria-components";
import { AllProviders } from "../../data";
import { Header, Footer } from "../../composites";
import { FAQs } from "./sections/FAQs";
import { PanelSections } from "./sections/PanelSections";
import { PricingGrid } from "./sections/PricingGrid";
import { ProductDetails } from "./sections/ProductDetails";
import { ProductGrid } from "./sections/ProductGrid";
import { WelcomeHero } from "./sections/WelcomeHero";

export function SdsDemo() {
  return (
    <AllProviders>
      <Header />
      <WelcomeHero />
      <PanelSections />
      <PricingGrid />
      <FAQs />
      <ProductDetails />
      <ProductGrid />
      <Footer />
    </AllProviders>
  );
}

