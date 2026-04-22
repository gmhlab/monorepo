import {
  MarketingHero,
  MarketingFeatures,
  MarketingPricing,
  MarketingCTA,
} from "@repo/ui/blocks"
import { Button } from "@repo/ui/primitives"

import { features } from "../../../../config/features"
import { pricingPlans } from "../../../../config/pricing"

export default function MarketingTemplatePage() {
  return (
    <>
      <MarketingHero
        badge="Now in public beta"
        headline={<>Build better products, ship them faster</>}
        description="MonoFly gives your team the tools to design, build, and deploy modern applications. No more stitching together a dozen services."
        actions={
          <>
            <Button size="lg">Start for Free</Button>
            <Button variant="outline" size="lg">View Demo</Button>
          </>
        }
        footnote="Free for up to 5 users. No credit card required."
      />
      <MarketingFeatures
        id="features"
        title="Everything you need"
        description="A complete platform for building, deploying, and scaling your applications."
        features={features}
      />
      <MarketingPricing
        id="pricing"
        title="Simple pricing"
        description="Start free, scale as you grow."
        plans={pricingPlans}
      />
      <MarketingCTA
        title="Ready to get started?"
        description="Join thousands of teams already building with MonoFly."
        action={<Button size="lg">Start Building for Free</Button>}
      />
    </>
  )
}
