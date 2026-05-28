"use client"

import { type ComponentPropsWithRef, type ReactNode } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarSeparator,
} from "../primitives/sidebar"
import { Stack } from "../layout"
import { cn } from "../lib/"

export interface AppShellTemplateProps extends Omit<ComponentPropsWithRef<"div">, "content"> {
  /** Sidebar header slot — typically a <Logo /> or brand mark */
  sidebarHeader?: ReactNode
  /** Sidebar body — nav groups, menus, etc. Usually a <SidebarNav /> pattern. */
  nav: ReactNode
  /** Sidebar footer slot — help link, user menu, workspace switcher */
  sidebarFooter?: ReactNode
  /** Top header bar content — breadcrumbs, search, user menu */
  header?: ReactNode
  /** Main page content */
  content: ReactNode
  /** Optional bottom panel — status bar, quick actions */
  panel?: ReactNode
  /** Whether the sidebar starts open */
  defaultOpen?: boolean
}

export function AppShellTemplate({
  sidebarHeader,
  nav,
  sidebarFooter,
  header,
  content,
  panel,
  defaultOpen = true,
  className,
  ref,
  ...props
}: AppShellTemplateProps) {
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <div ref={ref} className={cn("flex min-h-screen w-full", className)} {...props}>
        <Sidebar>
          {sidebarHeader && (
            <>
              <SidebarHeader className="p-4">{sidebarHeader}</SidebarHeader>
              <SidebarSeparator className="max-w-xs" />
            </>
          )}
          <SidebarContent>{nav}</SidebarContent>
          {sidebarFooter && (
            <SidebarFooter className="p-4">{sidebarFooter}</SidebarFooter>
          )}
        </Sidebar>

        <SidebarInset>
          <Stack gap="none" className="flex-1">
            {/* ── Header ────────────────────────────────────────── */}
            {header && (
              <header className="sticky top-0 z-30 shrink-0 border-b border-sidebar-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
                <div className="flex h-14 items-center px-4 sm:px-6">
                  {header}
                </div>
              </header>
            )}

            {/* ── Main content ──────────────────────────────────── */}
            <main className="flex-1 overflow-y-auto p-4 sm:p-6">
              {content}
            </main>

            {/* ── Bottom panel ──────────────────────────────────── */}
            {panel && (
              <div className="shrink-0 border-t border-sidebar-border bg-muted/20 px-4 py-3 sm:px-6">
                {panel}
              </div>
            )}
          </Stack>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
AppShellTemplate.displayName = "AppShellTemplate"
