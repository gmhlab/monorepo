"use client"

import {
  AppShellTemplate,
  Logo,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarSeparator,
} from "@repo/ui"
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  HelpCircle,
  Bell,
  Search,
  Palette,
  Layout,
  Component,
} from "lucide-react"
import { Cluster } from "@repo/ui"

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "DesignSystem", icon: Palette, href: "/dashboard/design-system" },
  { title: "Layouts", icon: Layout, href: "/dashboard/layouts" },
  { title: "Sink", icon: Component, href: "/dashboard/example/02" },
  { title: "Users", icon: Users, href: "#" },
  { title: "Analytics", icon: BarChart3, href: "#" },
  { title: "Settings", icon: Settings, href: "#" },
]

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <a href="/" className="flex items-center gap-2">
          <Logo/>
        </a>
      </SidebarHeader>
      <SidebarSeparator className="max-w-xs" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
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
      </SidebarFooter>
    </Sidebar>
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
    <AppShellTemplate
      sidebar={<AppSidebar />}
      header={<AppHeader />}
      content={children}
    />
  )
}
