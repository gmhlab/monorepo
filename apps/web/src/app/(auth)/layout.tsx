import { AuthTemplate } from "@repo/ui";
import { MarketingFooter  } from "@repo/ui";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthTemplate
      footer={<MarketingFooter />}
      maxWidth="lg"
      className="bg-background"
    >
      {children}
    </AuthTemplate>
  )
}