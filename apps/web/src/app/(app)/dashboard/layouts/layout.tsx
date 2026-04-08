import { PortalNavWrapper as PortalNav } from "../../../../components/portal-nav-wrapper"

const layoutLinks = [
  { href: "/app/layouts/container", label: "Container" },
  { href: "/app/layouts/stack", label: "Stack" },
  { href: "/app/layouts/cluster", label: "Cluster" },
  { href: "/app/layouts/grid", label: "Grid" },
  { href: "/app/layouts/center", label: "Center" },
  { href: "/app/layouts/split", label: "Split" },
  { href: "/app/layouts/cover", label: "Cover" },
]

export default function LayoutsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <PortalNav title="Layouts" titleHref="/layouts" links={layoutLinks} />
      <div className="flex-1 p-6">{children}</div>
    </div>
  )
}
