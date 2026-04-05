import { type ComponentPropsWithRef } from "react"
import { cn } from "../lib/utils"
import { type Gap, gapMap } from "./_scale"

// ─────────────────────────────────────────────
// Stack
//
// Vertical flow with consistent gap.
// The parent Stack owns the gap between its children.
// Children should never set margin-top/margin-bottom
// to space themselves — that breaks composition.
// ─────────────────────────────────────────────

/**
 * Recursive spacing via the "lobotomized owl" selector (* + *).
 * USE ONLY FOR PROSE / ARTICLE CONTENT. The descendant selector
 * will reach into nested layout components and fight their own
 * gap values.
 */
const recursiveGapMap: Record<Gap, string> = {
  none: "[&_*+*]:mt-0",
  xs: "[&_*+*]:mt-1",
  sm: "[&_*+*]:mt-2",
  md: "[&_*+*]:mt-4",
  lg: "[&_*+*]:mt-6",
  xl: "[&_*+*]:mt-8",
  "2xl": "[&_*+*]:mt-12",
  "3xl": "[&_*+*]:mt-16",
}

export interface StackProps extends ComponentPropsWithRef<"div"> {
  /** Vertical gap between children. Default `"md"` (16px). */
  gap?: Gap
  /** Cross-axis alignment. Default `"stretch"`. */
  align?: "start" | "center" | "end" | "stretch"
  /** Apply spacing to ALL descendants, not just direct children. Prose only. */
  recursive?: boolean
}

export function Stack({
  gap = "md",
  align = "stretch",
  recursive = false,
  className,
  ref,
  ...props
}: StackProps) {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col",
        recursive ? recursiveGapMap[gap] : gapMap[gap],
        align === "start" && "items-start",
        align === "center" && "items-center",
        align === "end" && "items-end",
        align === "stretch" && "items-stretch",
        className
      )}
      {...props}
    />
  )
}
Stack.displayName = "Stack"
