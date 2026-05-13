import { PortalNavWrapper as PortalNav } from "../../../../components/portal-nav-wrapper"

const layoutLinks = [
  { href: "/dashboard/layouts", label: "Container" },
  { href: "/dashboard/layouts", label: "Stack" },
  { href: "/dashboard/layouts", label: "Cluster" },
  { href: "/dashboard/layouts", label: "Grid" },
  { href: "/dashboard/layouts", label: "Center" },
  { href: "/dashboard/layouts", label: "Cover" },
]

export default function LayoutsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <PortalNav title="Layouts" titleHref="/layouts" links={layoutLinks} />
      <div className="flex-1 p-6">{children}</div>
    </div>
  )
}
