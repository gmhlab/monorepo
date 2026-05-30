"use client"

import { type ComponentPropsWithRef } from "react"
import type { LucideIcon } from "lucide-react"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../primitives/sidebar"
import { cn } from "../utils/utils"

export interface SidebarNavItem {
  title: string
  href: string
  icon?: LucideIcon
}

export interface SidebarNavGroup {
  label?: string
  items: SidebarNavItem[]
}

export interface SidebarNavProps extends ComponentPropsWithRef<"div"> {
  groups: SidebarNavGroup[]
}

export function SidebarNav({ groups, className, ref, ...props }: SidebarNavProps) {
  return (
    <div ref={ref} className={cn(className)} {...props}>
      {groups.map((group, idx) => (
        <SidebarGroup key={group.label ?? idx}>
          {group.label && <SidebarGroupLabel>{group.label}</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {group.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      {item.icon && <item.icon className="size-4" />}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </div>
  )
}
SidebarNav.displayName = "SidebarNav"
