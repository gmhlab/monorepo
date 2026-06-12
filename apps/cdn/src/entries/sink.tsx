import { AppTemplate } from "@repo/ui";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@repo/ui";
import { SinkPage } from "@repo/ui";
import { FolderKanban, LayoutDashboard, Settings, Users } from "lucide-react";
import { mount } from "../bootstrap";

/**
 * CDN `page` entry — demo of the generic `AppTemplate` shell.
 *
 * `AppTemplate` ships its own SidebarProvider + Sidebar + SidebarInset, so
 * the slots receive *content only*: `nav` is the sidebar body (menu groups),
 * `content` is the main area. Don't pass a full <Sidebar> or a self-contained
 * page (e.g. <ShadcnDashboard />) — that would double-nest the shell.
 */
const NAV_ITEMS = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Projects", icon: FolderKanban },
  { label: "Team", icon: Users },
  { label: "Settings", icon: Settings },
];

mount(
  <AppTemplate
    sidebarHeader={<span className="px-2 font-semibold">GMH Lab</span>}
    nav={
      <SidebarGroup>
        <SidebarGroupLabel>Platform</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {NAV_ITEMS.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton isActive={item.active}>
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    }
    header={
      <div className="flex h-14 items-center gap-2">
        <SidebarTrigger />
        <h1 className="font-semibold">Dashboard</h1>
      </div>
    }
    content={<SinkPage />}
  />,
);
