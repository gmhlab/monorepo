import { type ComponentPropsWithRef } from "react"
import { cn } from "../lib/utils"
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
// ─────────────────────────────────────────────

export interface ContainerProps extends ComponentPropsWithRef<"div"> {
  /** Maximum content width. Default `"lg"` (1152px). */
  width?: ContainerWidth
  /** Horizontal padding. Default `"md"` (16px per side). */
  px?: Padding
  /**
   * Section-level vertical padding. Use when this Container
   * represents a full page section (hero, features, CTA).
   */
  section?: SectionSpacing
  /**
   * Enable CSS container-query context.
   * - `true` — anonymous `@container`
   * - `string` — named container (e.g. `"sidebar"`)
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
  const hasQuery = query !== undefined && query !== false
  const queryName = typeof query === "string" ? query : undefined

  return (
    <Tag
      ref={ref}
      className={cn(
        "mx-auto w-full",
        containerWidthMap[width],
        paddingXMap[px],
        section && sectionSpacingMap[section],
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
