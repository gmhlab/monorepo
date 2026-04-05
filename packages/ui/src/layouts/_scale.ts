/**
 * _scale.ts — Spatial vocabulary for all layout primitives.
 *
 * This is the single source of truth for every spacing decision
 * in the design system. Treat changes here like schema migrations:
 * every layout component depends on these types and maps.
 *
 * ┌─────────────────────────────────────────────────────────┐
 * │  TIER MODEL                                             │
 * │                                                         │
 * │  tight  (xs–sm)  → within composites (icon↔label)       │
 * │  normal (md–lg)  → between composites in a pattern      │
 * │  loose  (xl–3xl) → between patterns/sections in layout  │
 * └─────────────────────────────────────────────────────────┘
 */

// ─────────────────────────────────────────────
// GAP — flex/grid gap between children
// ─────────────────────────────────────────────

export type Gap = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"

export const gapMap: Record<Gap, string> = {
  none: "gap-0",
  xs: "gap-1", // 4px  — tight
  sm: "gap-2", // 8px  — tight
  md: "gap-4", // 16px — normal
  lg: "gap-6", // 24px — normal
  xl: "gap-8", // 32px — loose
  "2xl": "gap-12", // 48px — loose
  "3xl": "gap-16", // 64px — loose (section-level)
}

// ─────────────────────────────────────────────
// PADDING — internal spacing (Container, Card, Section)
// ─────────────────────────────────────────────

export type Padding = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

export const paddingMap: Record<Padding, string> = {
  none: "p-0",
  xs: "p-1",
  sm: "p-2",
  md: "p-4",
  lg: "p-6",
  xl: "p-8",
  "2xl": "p-12",
}

/** Axis-specific padding for asymmetric layouts (e.g. Container with px but no py) */
export const paddingXMap: Record<Padding, string> = {
  none: "px-0",
  xs: "px-1",
  sm: "px-2",
  md: "px-4",
  lg: "px-6",
  xl: "px-8",
  "2xl": "px-12",
}

export const paddingYMap: Record<Padding, string> = {
  none: "py-0",
  xs: "py-1",
  sm: "py-2",
  md: "py-4",
  lg: "py-6",
  xl: "py-8",
  "2xl": "py-12",
}

// ─────────────────────────────────────────────
// SPACE — external spacing / margin
//
// Use sparingly. Prefer parent `gap` over child `margin`.
// ─────────────────────────────────────────────

export type Space = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"

export const spaceYMap: Record<Space, string> = {
  none: "my-0",
  xs: "my-1",
  sm: "my-2",
  md: "my-4",
  lg: "my-6",
  xl: "my-8",
  "2xl": "my-12",
  "3xl": "my-16",
}

// ─────────────────────────────────────────────
// CONTAINER WIDTHS — max-width constraints
// ─────────────────────────────────────────────

export type ContainerWidth = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"

export const containerWidthMap: Record<ContainerWidth, string> = {
  xs: "max-w-xl", // 576px  — narrow forms, auth pages
  sm: "max-w-2xl", // 672px  — single-column content
  md: "max-w-4xl", // 896px  — docs, articles
  lg: "max-w-6xl", // 1152px — standard page content
  xl: "max-w-7xl", // 1280px — wide dashboards
  "2xl": "max-w-screen-2xl", // 1536px — full bleed sections
  full: "max-w-none", // no constraint
}

// ─────────────────────────────────────────────
// CENTER MAX-WIDTH — fine-grained max-width for Center
// ─────────────────────────────────────────────

export type CenterMax =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "prose"
  | "full"

export const centerMaxMap: Record<CenterMax, string> = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  prose: "max-w-prose",
  full: "max-w-full",
}

// ─────────────────────────────────────────────
// CONTENT MEASURE — max-width for readable text
// ─────────────────────────────────────────────

export type Measure = "narrow" | "prose" | "wide"

export const measureMap: Record<Measure, string> = {
  narrow: "max-w-[45ch]",
  prose: "max-w-prose",
  wide: "max-w-[85ch]",
}

// ─────────────────────────────────────────────
// SECTION SPACING — vertical rhythm between
// major page regions (hero → features → CTA)
// ─────────────────────────────────────────────

export type SectionSpacing = "sm" | "md" | "lg" | "xl"

export const sectionSpacingMap: Record<SectionSpacing, string> = {
  sm: "py-8", // 32px
  md: "py-16", // 64px
  lg: "py-24", // 96px
  xl: "py-32", // 128px
}

// ─────────────────────────────────────────────
// AUTO-GRID MINIMUMS — constrained min-width
// values for auto-fill / auto-fit grids
// ─────────────────────────────────────────────

export type GridMin = "12rem" | "15rem" | "20rem" | "25rem" | "30rem"

export const gridMinValues: readonly GridMin[] = [
  "12rem",
  "15rem",
  "20rem",
  "25rem",
  "30rem",
] as const

// ─────────────────────────────────────────────
// GUTTER — responsive horizontal padding for
// viewport-edge breathing room
// ─────────────────────────────────────────────

export const GUTTER = "px-4 sm:px-6"

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

export function resolveGap(gap: Gap): string {
  return gapMap[gap]
}

export function resolvePadding(padding: Padding, axis?: "x" | "y"): string {
  if (axis === "x") return paddingXMap[padding]
  if (axis === "y") return paddingYMap[padding]
  return paddingMap[padding]
}
