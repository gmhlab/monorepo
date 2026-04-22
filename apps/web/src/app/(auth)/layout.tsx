import { AuthTemplate } from "@repo/ui";
import { MarketingFooter  } from "@repo/ui";
import { PortalNavWrapper } from "../../components/portal-nav-wrapper";
import { Logo } from "@repo/ui";
import { navigationData } from "../../config/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <PortalNavWrapper
        title="{
          <Logo />
        }"
        titleHref="/auth"
        links = {navigationData}
        className="mb-0"
    />
    <AuthTemplate
      logo={<Logo />}
      footer={<MarketingFooter />}
      background={<div className="bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 w-full h-full" />}
      className="bg-background"
    >
      {children}
    </AuthTemplate>
    </>
  )
}