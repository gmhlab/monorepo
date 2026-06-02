import { AuthTemplate } from "@repo/ui";
import { Footer2 } from "@repo/ui";
import { LogoMark } from "@repo/ui";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthTemplate
      logo={<LogoMark />}
      footer={<Footer2 />}
      background={<div className="bg-gradient-to-r from-blue-500 to-blue-600 opacity-10 w-full h-full" />}
      className="bg-background"
    >
      {children}
    </AuthTemplate>
  )
}
