import { MarketingFeatures, MarketingCTA, MarketingHero, MarketingPricing } from "@repo/ui";
import { Cluster } from "@repo/ui/layouts/cluster";
import { Button } from "@repo/ui";

export default function MarketingPage() {
  return (
    <>
      <MarketingHero
        badge="New & Improved"
        headline="Welcome to Our Marketing Page"
        description="Discover the power of our marketing solutions"
        actions={<Cluster gap="sm"><Button size="lg">Get Started</Button><Button size="lg" variant="secondary">Login</Button></Cluster>}
        footnote="Join thousands of satisfied customers"
      />
    </>
  )
}