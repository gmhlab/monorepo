"use client";

import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import { Flex, Grid, Section } from "../layout";
import { Separator } from "../primitives/separator";
import { cn } from "../lib/utils";

type GapToken = "100" | "200" | "300" | "400" | "600" | "800" | "1200" | "1600";
type PaddingToken = "0" | "600" | "800" | "1200" | "1600" | "4000";

export interface DashboardTemplateProps extends Omit<
  ComponentPropsWithoutRef<"section">,
  "title"
> {
  /** Small kicker above the title — section label, breadcrumb tail, status. */
  eyebrow?: ReactNode;
  /** Page title. A string is wrapped in an `<h1>`; pass a node to fully control it. */
  title?: ReactNode;
  /** Supporting line under the title. */
  description?: ReactNode;
  /** Header-aligned actions — buttons, menus, a date-range picker. */
  actions?: ReactNode;
  /** Full-width strip under the header — tabs, filters, search. */
  toolbar?: ReactNode;
  /** KPI cards. Laid out in a responsive auto-fit grid. */
  metrics?: ReactNode;
  /** Minimum width of each metric cell before the grid reflows. */
  metricsMinWidth?: string;
  /** Primary page content. */
  children: ReactNode;
  /** Optional secondary column beside the content (activity feed, summary). */
  aside?: ReactNode;
  /** Width of the aside column at the `lg` breakpoint and up. */
  asideWidth?: string;
  /** Which side the aside sits on at `lg` and up. Default `"end"`. */
  asidePlacement?: "start" | "end";
  /** Render a divider between the header and the body. Default `true`. */
  divider?: boolean;
  /** Section variant — surface treatment for the whole region. */
  variant?: "brand" | "neutral" | "stroke" | "subtle";
  /** Outer Section padding. Default `"0"` so it inherits the host shell's padding
   *  (e.g. `AppTemplate`'s `content` slot). Set e.g. `"1200"` for standalone use. */
  padding?: PaddingToken;
  /** Vertical rhythm between header, toolbar, metrics, and body. Default `"800"`. */
  gap?: GapToken;
}

/**
 * DashboardTemplate — the inner scaffold every dashboard page repeats.
 *
 * It owns no content of its own: hand it slots and it arranges them with the
 * spatial primitives (`Section` / `Grid` / `Flex`) on a single vertical rhythm.
 *
 *   ┌───────────────────────────────────────────────┐
 *   │ eyebrow                                        │
 *   │ title …………………………………………………………  actions │  ← header
 *   │ description                                    │
 *   ├───────────────────────────────────────────────┤  ← divider
 *   │ toolbar (tabs · filters · search)              │
 *   ├───────┬───────┬───────┬───────┬────────────────┤
 *   │ metric│ metric│ metric│ metric│                │  ← auto-fit grid
 *   ├───────────────────────────────┬────────────────┤
 *   │                               │                │
 *   │           children            │     aside      │  ← body (optional split)
 *   │                               │                │
 *   └───────────────────────────────┴────────────────┘
 *
 * Drops straight into `AppTemplate`'s `content` slot, or stands alone inside a
 * page (set `padding` when there's no host shell to provide it).
 */
export function DashboardTemplate({
  eyebrow,
  title,
  description,
  actions,
  toolbar,
  metrics,
  metricsMinWidth = "14rem",
  children,
  aside,
  asideWidth = "20rem",
  asidePlacement = "end",
  divider = true,
  variant = "subtle",
  padding = "0",
  gap = "800",
  className,
  ...props
}: DashboardTemplateProps) {
  const hasHeader = Boolean(eyebrow || title || description || actions);

  const content = (
    <div className="min-w-0 grow basis-full lg:basis-0">{children}</div>
  );
  const asideColumn = aside && (
    <div
      style={{ "--db-aside": asideWidth } as CSSProperties}
      className="min-w-0 shrink-0 grow basis-full lg:grow-0 lg:basis-[var(--db-aside)]"
    >
      {aside}
    </div>
  );

  return (
    <Section
      variant={variant}
      padding={padding}
      className={cn("min-w-0", className)}
      {...props}
    >
      <Flex direction="column" gap={gap} alignSecondary="stretch">
        {/* ── Header ─────────────────────────────────────────── */}
        {hasHeader && (
          <Flex
            direction="row"
            alignPrimary="space-between"
            alignSecondary="start"
            gap="400"
            wrap
          >
            <Flex direction="column" gap="100" className="min-w-0">
              {eyebrow && (
                <p className="text-sm font-medium text-muted-foreground">
                  {eyebrow}
                </p>
              )}
              {typeof title === "string" ? (
                <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {title}
                </h1>
              ) : (
                title
              )}
              {description && (
                <p className="max-w-prose text-sm text-muted-foreground sm:text-base">
                  {description}
                </p>
              )}
            </Flex>
            {actions && (
              <Flex
                direction="row"
                gap="200"
                alignSecondary="center"
                wrap
                className="shrink-0"
              >
                {actions}
              </Flex>
            )}
          </Flex>
        )}

        {hasHeader && divider && <Separator />}

        {/* ── Toolbar ────────────────────────────────────────── */}
        {toolbar && <div className="min-w-0">{toolbar}</div>}

        {/* ── Metrics ────────────────────────────────────────── */}
        {metrics && (
          <Grid
            columns={`repeat(auto-fit, minmax(${metricsMinWidth}, 1fr))`}
            gap="400"
          >
            {metrics}
          </Grid>
        )}

        {/* ── Body ───────────────────────────────────────────── */}
        {aside ? (
          <Flex direction="row" gap={gap} alignSecondary="stretch" wrap>
            {asidePlacement === "start" && asideColumn}
            {content}
            {asidePlacement === "end" && asideColumn}
          </Flex>
        ) : (
          content
        )}
      </Flex>
    </Section>
  );
}
DashboardTemplate.displayName = "DashboardTemplate";
