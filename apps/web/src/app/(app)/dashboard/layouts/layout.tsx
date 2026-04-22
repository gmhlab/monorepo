import { PortalNavWrapper as PortalNav } from "../../../../components/portal-nav-wrapper"

const layoutLinks = [
  { href: "/dashboard/layouts/container", label: "Container" },
  { href: "/dashboard/layouts/stack", label: "Stack" },
  { href: "/dashboard/layouts/cluster", label: "Cluster" },
  { href: "/dashboard/layouts/grid", label: "Grid" },
  { href: "/dashboard/layouts/center", label: "Center" },
  { href: "/dashboard/layouts/cover", label: "Cover" },
]

export default function LayoutsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <PortalNav title="Layouts" titleHref="/layouts" links={layoutLinks} />
      <div className="flex-1 p-6">{children}</div>
    </div>
  )
}
