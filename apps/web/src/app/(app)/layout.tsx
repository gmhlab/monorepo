"use client"

import {
  AppTemplate,
  Logo,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarNav,
  SidebarTrigger,
  type SidebarNavGroup,
} from "@repo/ui"
import {
  BarChart3,
  Bell,
  Component,
  HelpCircle,
  LayoutDashboard,
  Layout,
  Palette,
  Search,
  Settings,
  Users,
} from "lucide-react"

const navGroups: SidebarNavGroup[] = [
  {
    label: "Navigation",
    items: [
      { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { title: "DesignSystem", href: "/dashboard/design-system", icon: Palette },
      { title: "Layouts", href: "/dashboard/layouts", icon: Layout },
      { title: "Sink", href: "/dashboard/example/02", icon: Component },
      { title: "Users", href: "#", icon: Users },
      { title: "Analytics", href: "#", icon: BarChart3 },
      { title: "Settings", href: "#", icon: Settings },
    ],
  },
]

function SidebarFooterLinks() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <a href="/dashboard/help">
            <HelpCircle className="size-4" />
            <span>Help</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

function AppHeader() {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-3">
        <SidebarTrigger />
        <div className="flex items-center gap-2 rounded-md border border-border/40 bg-muted/30 px-3 py-1.5 text-sm text-muted-foreground">
          <Search className="size-3.5" />
          <span>Search...</span>
        </div>
      </div>
      <button className="rounded-md p-1.5 text-muted-foreground hover:bg-muted">
        <Bell className="size-4" />
      </button>
    </div>
  )
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppTemplate
      sidebarHeader={<Logo />}
      nav={<SidebarNav groups={navGroups} />}
      sidebarFooter={<SidebarFooterLinks />}
      header={<AppHeader />}
      content={children}
    />
  )
}
