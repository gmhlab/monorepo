import { type ComponentPropsWithRef } from "react"
import { cn } from "../lib/"
import {
  type ContainerWidth,
  type Padding,
  type SectionSpacing,
  containerWidthMap,
  paddingXMap,
  sectionSpacingMap,
} from "./_scale"

// ─────────────────────────────────────────────
// Container
//
// The outermost spatial contract in the system.
// Constrains content width, centers it, applies
// consistent horizontal padding, and optionally
// establishes a CSS container-query context.
//
// This is NOT a generic wrapper div. It answers
// three questions that every page region must agree on:
//   1. How wide can content get?
//   2. How much horizontal breathing room is there?
//   3. Does this region respond to its own width
//      or the viewport?
//
// ┌──────────────── viewport ─────────────────┐
// │ ┌──── px ────┐              ┌──── px ────┐│
// │ │             │  max-width   │             ││
// │ │             │◄───────────►│             ││
// │ └─────────────┘              └─────────────┘│
// └───────────────────────────────────────────┘
//
// Usage:
//
//   {/* Standard page wrapper */}
//   <Container>
//     <Stack gap="lg">...</Stack>
//   </Container>
//
//   {/* Narrow form layout */}
//   <Container width="xs" px="lg">
//     <form>...</form>
//   </Container>
//
//   {/* Full-bleed section with vertical rhythm */}
//   <Container width="full" section="lg">
//     <Container width="lg">
//       <FeatureGrid />
//     </Container>
//   </Container>
//
//   {/* Container-query responsive region */}
//   <Container query="sidebar">
//     <div className="@md/sidebar:flex-row flex flex-col">
//       ...
//     </div>
//   </Container>
// ─────────────────────────────────────────────

export interface ContainerProps extends ComponentPropsWithRef<"div"> {
  /**
   * Maximum content width.
   * Maps to the `containerWidthMap` tokens in `_scale.ts`.
   *
   * - `xs`  (576px)  — auth pages, narrow forms
   * - `sm`  (672px)  — single-column content
   * - `md`  (896px)  — docs, articles
   * - `lg`  (1152px) — standard page content (default)
   * - `xl`  (1280px) — wide dashboards
   * - `2xl` (1536px) — full-bleed inner constraint
   * - `full` — no max-width
   */
  width?: ContainerWidth

  /**
   * Horizontal padding (inline-axis breathing room).
   * Keeps content from touching viewport edges on small screens.
   * Defaults to `"md"` (16px / 1rem per side).
   */
  px?: Padding

  /**
   * Section-level vertical padding.
   * Use when this Container represents a full page section
   * (hero, features, CTA) that needs vertical rhythm.
   *
   * Intentionally uses the `SectionSpacing` scale, not `Padding`,
   * because section rhythm operates at a larger range (32–128px)
   * than component-level padding (0–48px).
   *
   * Leave `undefined` (default) for inline/nested containers
   * where the parent Stack/layout owns the vertical spacing.
   */
  section?: SectionSpacing

  /**
   * Enable CSS container-query context.
   *
   * - `true` — anonymous `@container`
   * - `string` — named container (e.g. `"sidebar"`)
   *   enables `@md/sidebar:*` variants in children
   * - `undefined` (default) — no container context
   */
  query?: boolean | string

  /** Render as a semantic HTML element instead of `div` */
  as?: "div" | "section" | "main" | "article" | "aside" | "header" | "footer"
}

export function Container({
  width = "lg",
  px = "md",
  section,
  query,
  as: Tag = "div",
  className,
  style,
  ref,
  ...props
}: ContainerProps) {
  // Container-query setup
  const hasQuery = query !== undefined && query !== false
  const queryName = typeof query === "string" ? query : undefined

  return (
    <Tag
      ref={ref}
      className={cn(
        // Centering
        "mx-auto w-full",
        // Width constraint
        containerWidthMap[width],
        // Horizontal padding
        paddingXMap[px],
        // Section vertical rhythm (only when acting as a section)
        section && sectionSpacingMap[section],
        // Container-query context
        hasQuery && "@container",
        className
      )}
      style={{
        ...style,
        ...(queryName && { containerName: queryName }),
      }}
      {...props}
    />
  )
}
Container.displayName = "Container"