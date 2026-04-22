import { MarketingHero } from "@repo/ui";
import { Cluster } from "@repo/ui/layouts/cluster";
import { Button } from "@repo/ui";



export default function MarketingPage() {
  return (
    <>
      <MarketingHero
        badge="Now in public beta"
        headline={<>Build better products, ship them faster</>}
        description="MonoFly gives your team the tools to design, build, and deploy modern applications. No more stitching together a dozen services."
        actions={<Cluster gap="sm"><Button size="lg">Get Started</Button><Button size="lg" variant="secondary">Login</Button></Cluster>}
        footnote="Join thousands of satisfied customers"
      />
    </>
  )
}