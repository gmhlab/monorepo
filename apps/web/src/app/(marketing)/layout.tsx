import { MarketingTemplate, MarketingFooter } from "@repo/ui";
import { MarketingNavWrapper as MarketingNav} from "../../components/marketing-nav-wrapper";
import { Logo } from "@repo/ui";
import { Button } from "@repo/ui";

import { marketingLinks } from "../../config/navigation"
import { footerColumns, footerLegal, footerMeta } from "../../config/footer"

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <MarketingTemplate
      nav={
        <MarketingNav
          logo={<Logo size="md" href="/" />}
          links={marketingLinks}
          actions={
            <>
              <Button variant="ghost" size="sm">
                Sign in
              </Button>
              <Button size="sm">Get Started</Button>
            </>
          }
        />
      }
      footer={
        <MarketingFooter
          logo={<Logo size="sm" />}
          tagline={footerMeta.tagline}
          columns={footerColumns}
          legal={footerLegal}
          companyName={footerMeta.companyName}
        />
      }
    >
      {children}
    </MarketingTemplate>
  )
}