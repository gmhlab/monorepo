import { MarketingTemplate, MarketingFooter } from "@repo/ui";
import { MarketingNavWrapper } from "../../components/marketing-nav-wrapper";
import { Logo } from "@repo/ui";
import { footerColumns, footerLegal, footerMeta } from "@/config/footer";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <MarketingTemplate
      nav={<MarketingNavWrapper 
        links={[
          { href: "/features", label: "Features" },
          { href: "/pricing", label: "Pricing" },
          { href: "/testimonials", label: "Testimonials" },
        ]}
        logo={<Logo />}
      />}
        footer={
        <MarketingFooter
          logo={<Logo size="sm" />}
          tagline={footerMeta.tagline}
          columns={footerColumns}
          legal={footerLegal}
          companyName={footerMeta.companyName}
        />
        }
      banner={<div>Announcement banner</div>}
    >
      {children}
    </MarketingTemplate>
  )
}