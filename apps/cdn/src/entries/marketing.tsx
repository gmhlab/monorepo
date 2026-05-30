import {
  MarketingNav,
  MarketingHero,
  MarketingFeatures,
  MarketingPricing,
  MarketingCTA,
  MarketingFooter,
  Button,
  Badge,
} from "@repo/ui";
import { mount } from "../bootstrap";

const brand = (
  <span className="text-lg font-semibold tracking-tight text-foreground">
    GMH&nbsp;Lab
  </span>
);

function MarketingDemo() {
  return (
    <div className="min-h-screen bg-background">
      {/* MarketingNav */}
      <div className="sticky top-0 z-50 border-b border-border bg-background/80 px-4 py-3 backdrop-blur md:px-8">
        <MarketingNav
          logo={brand}
          pathname="/"
          links={[
            { label: "Home", href: "/" },
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
          ]}
          groups={[
            {
              label: "Resources",
              links: [
                { label: "Documentation", href: "#docs" },
                { label: "Research", href: "#research" },
                { label: "Blog", href: "#blog" },
              ],
            },
          ]}
          actions={
            <>
              <Button variant="ghost" size="sm">
                Sign in
              </Button>
              <Button size="sm">Get started</Button>
            </>
          }
        />
      </div>

      {/* MarketingHero */}
      <MarketingHero
        badge="New — Global Mental Health toolkit"
        headline="Mental health research, ready for the world"
        description="A shared design system and data platform for clinicians, researchers, and the communities they serve."
        actions={
          <>
            <Button size="lg">Get started</Button>
            <Button size="lg" variant="outline">
              View research
            </Button>
          </>
        }
        footnote="No credit card required · Open to academic partners"
      />

      {/* MarketingFeatures */}
      <div id="features">
        <MarketingFeatures
          title="Everything your study needs"
          description="From intake to publication, the GMH Lab toolkit covers the full research lifecycle."
          columns={3}
          features={[
            {
              title: "Validated instruments",
              description:
                "Ship culturally adapted, peer-reviewed assessment scales out of the box.",
            },
            {
              title: "Secure data capture",
              description:
                "Collect responses offline and sync to encrypted, consent-aware storage.",
            },
            {
              title: "Real-time dashboards",
              description:
                "Track enrollment, adherence, and outcomes across every site live.",
            },
            {
              title: "Multilingual by default",
              description:
                "Deliver every screen and instrument in the participant's language.",
            },
            {
              title: "Interoperable exports",
              description:
                "Export to REDCap, FHIR, and CSV without leaving the platform.",
            },
            {
              title: "Built-in governance",
              description:
                "IRB-friendly audit trails and role-based access keep you compliant.",
            },
          ]}
        />
      </div>

      {/* MarketingPricing */}
      <div id="pricing">
        <MarketingPricing
          title="Plans for every study"
          description="Start free for pilot work, scale up as your trial grows."
          columns={3}
          plans={[
            {
              name: "Pilot",
              price: "$0",
              description: "For early-stage and student research.",
              features: ["1 active study", "Up to 100 participants", "Community support"],
              cta: "Start free",
              variant: "outline",
            },
            {
              name: "Lab",
              price: "$49",
              description: "For funded research groups.",
              features: [
                "10 active studies",
                "Unlimited participants",
                "Multilingual instruments",
                "Priority support",
              ],
              cta: "Choose Lab",
              variant: "default",
            },
            {
              name: "Institution",
              price: "Custom",
              description: "For universities and NGOs.",
              features: [
                "Unlimited studies",
                "SSO & advanced governance",
                "Dedicated onboarding",
                "Custom integrations",
              ],
              cta: "Contact us",
              variant: "outline",
            },
          ]}
        />
      </div>

      {/* MarketingCTA */}
      <MarketingCTA
        title="Ready to launch your study?"
        description="Join research teams in over 40 countries already building with GMH Lab."
        action={<Button size="lg">Get started today</Button>}
      />

      {/* MarketingFooter */}
      <footer className="border-t border-border px-4 py-16 md:px-8">
        <MarketingFooter
          logo={brand}
          tagline="Open infrastructure for global mental health research."
          companyName="Global Mental Health Lab"
          columns={[
            {
              title: "Product",
              links: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Integrations", href: "#integrations" },
              ],
            },
            {
              title: "Research",
              links: [
                { label: "Publications", href: "#publications" },
                { label: "Datasets", href: "#datasets" },
                { label: "Partners", href: "#partners" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "#about" },
                { label: "Careers", href: "#careers" },
                { label: "Contact", href: "#contact" },
              ],
            },
            {
              title: "Legal",
              links: [
                { label: "Privacy", href: "#privacy" },
                { label: "Terms", href: "#terms" },
              ],
            },
          ]}
          legal={[
            { label: "Privacy Policy", href: "#privacy" },
            { label: "Terms of Service", href: "#terms" },
          ]}
        />
      </footer>
    </div>
  );
}

mount(<MarketingDemo />);
