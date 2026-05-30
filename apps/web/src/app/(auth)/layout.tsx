import { AuthTemplate } from "@repo/ui";
import { MarketingFooter  } from "@repo/ui";
import { Logo } from "@repo/ui";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>

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