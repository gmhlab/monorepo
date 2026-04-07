"use client"

import { type ComponentPropsWithRef, type ReactNode } from "react"
import {
  SidebarInset,
  SidebarProvider,
} from "../primitives/sidebar"
import { Stack } from "../layouts/stack"
import { cn } from "../lib/"

export interface AppShellTemplateProps extends Omit<ComponentPropsWithRef<"div">, "content"> {
  /** Sidebar element — typically an <AppSidebar /> or <Sidebar /> */
  sidebar: ReactNode
  /** Top header bar — breadcrumbs, search, user menu */
  header?: ReactNode
  /** Main page content */
  content: ReactNode
  /** Optional bottom panel — status bar, quick actions */
  panel?: ReactNode
  /** Whether the sidebar starts open */
  defaultOpen?: boolean
}

export function AppShellTemplate({
  sidebar,
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
        {sidebar}

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