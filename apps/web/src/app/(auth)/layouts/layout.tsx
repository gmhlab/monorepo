import { MarketingTemplate } from "@repo/ui/templates"
import { MarketingNavWrapper } from "@/components/marketing-nav-wrapper"
import { Container } from "@repo/ui"
import { Logo } from "@repo/ui/assets"
import { ModeToggle } from "@repo/ui/"

const layoutLinks = [
  { href: "/layouts/container", label: "Container" },
  { href: "/layouts/stack", label: "Stack" },
  { href: "/layouts/cluster", label: "Cluster" },
  { href: "/layouts/grid", label: "Grid" },
  { href: "/layouts/center", label: "Center" },
  { href: "/layouts/split", label: "Split" },
  { href: "/layouts/cover", label: "Cover" },
]

export default function LayoutsLayout({ children }: { children: React.ReactNode }) {
  return (
    <MarketingTemplate
      nav={
        <MarketingNavWrapper
          logo={<div className="flex items-center gap-1"><Logo className="w-12 h-12"/><span className="font-bold text-2xl">GMH Lab / Studio</span></div>}
          links={layoutLinks}
          actions={<ModeToggle />}
        />
      }
      footer={
        <>
          <a href="/terms" className="underline">Terms of Service</a>
          {" | "}
          <a href="/privacy" className="underline">Privacy Policy</a>
        </>
      }
    >
      <Container width="full" px="sm" as="main" section="sm" >                                                                                                                       
        {children}                                                                                                                                                      
      </Container>
    </MarketingTemplate>
  )
}
