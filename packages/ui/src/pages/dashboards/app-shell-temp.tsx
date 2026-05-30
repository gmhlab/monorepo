"use client"

import { AppShellTemplate } from "../../templates";
import { SidebarTrigger } from "../../primitives/sidebar";

/**
 * Minimal AppShellTemplate demo.
 *
 * AppShellTemplate is a pure layout shell — it owns NO content of its own.
 * You hand it content through six props (slots) and it arranges them:
 *
 *   ┌─────────────┬───────────────────────────────┐
 *   │sidebarHeader│            header             │  ← sticky top bar
 *   ├─────────────┼───────────────────────────────┤
 *   │             │                               │
 *   │     nav     │           content             │  ← scrolls
 *   │             │                               │
 *   ├─────────────┼───────────────────────────────┤
 *   │sidebarFooter│            panel              │  ← optional bottom bar
 *   └─────────────┴───────────────────────────────┘
 *
 * The left column is the collapsible <Sidebar>; the right column is the
 * <SidebarInset> (header + scrolling main + optional panel).
 *
 * Slots:
 *   sidebarHeader — top of the sidebar (brand mark / logo). Optional.
 *   nav           — sidebar body (your nav menu). Required.
 *   sidebarFooter — bottom of the sidebar (help link, user menu). Optional.
 *   header        — sticky top bar of the main area. Optional.
 *   content       — the main scrolling page area. Required.
 *   panel         — fixed strip below the content (status bar). Optional.
 *   defaultOpen   — whether the sidebar starts expanded (default true).
 */
export function TesterAppShell() {
  return (
    <AppShellTemplate
      // ── Sidebar (left column) ─────────────────────────────
      sidebarHeader={<div className="font-semibold">sidebarHeader</div>}
      nav={
        <nav className="flex flex-col gap-1 p-2 text-sm">
          <div className="rounded-md bg-muted/50 px-3 py-2">nav · item one</div>
          <div className="rounded-md px-3 py-2 hover:bg-muted/50">nav · item two</div>
          <div className="rounded-md px-3 py-2 hover:bg-muted/50">nav · item three</div>
        </nav>
      }
      sidebarFooter={<div className="text-sm text-muted-foreground">sidebarFooter</div>}
      // ── Main area (right column) ──────────────────────────
      header={
        <div className="flex w-full items-center gap-3">
          {/* SidebarTrigger toggles the sidebar open/closed */}
          <SidebarTrigger />
          <span className="text-sm font-medium">header</span>
        </div>
      }
      content={
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">content</h1>
          <p className="text-muted-foreground">
            This is the main scrolling area. Drop any page UI here.
          </p>
          <div className="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
            content slot
          </div>
        </div>
      }
      panel={<div className="text-sm text-muted-foreground">panel · optional bottom strip</div>}
    />
  );
}
