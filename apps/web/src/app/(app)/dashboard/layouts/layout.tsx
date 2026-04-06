import { PortalNavWrapper as PortalNav } from "../../../../components/portal-nav-wrapper"

const layoutLinks = [
  { href: "/dashboard/layouts/container", label: "Container" },
  { href: "/dashboard/layouts/stack", label: "Stack" },
  { href: "/dashboard/layouts/cluster", label: "Cluster" },
  { href: "/dashboard/layouts/grid", label: "Grid" },
  { href: "/dashboard/layouts/center", label: "Center" },
  { href: "/dashboard/layouts/split", label: "Split" },
  { href: "/dashboard/layouts/cover", label: "Cover" },
  { href: "/dashboard/layouts/box", label: "Box" },
  { href: "/dashboard/layouts/switcher", label: "Switcher" },
  { href: "/dashboard/layouts/frame", label: "Frame" },
  { href: "/dashboard/layouts/reel", label: "Reel" },
  { href: "/dashboard/layouts/imposter", label: "Imposter" },
  { href: "/dashboard/layouts/icon", label: "Icon" },
]

export default function LayoutsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <PortalNav title="Layouts" titleHref="/layouts" links={layoutLinks} />
      <div className="flex-1 p-6">{children}</div>
    </div>
  )
}
