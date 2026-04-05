import { type ComponentPropsWithRef } from "react"
import { cn } from "../lib/utils"
import { type Gap, gapMap } from "./_scale"

// ─────────────────────────────────────────────
// Cluster
//
// Horizontal flow that wraps naturally. For button
// groups, tag lists, navigation headers, etc.
// ─────────────────────────────────────────────

export interface ClusterProps extends ComponentPropsWithRef<"div"> {
  gap?: Gap
  align?: "start" | "center" | "end" | "baseline"
  justify?: "start" | "center" | "end" | "between" | "around"
  wrap?: boolean
}

export function Cluster({
  gap = "md",
  align = "center",
  justify = "start",
  wrap = true,
  className,
  ref,
  ...props
}: ClusterProps) {
  return (
    <div
      ref={ref}
      className={cn(
        "flex",
        gapMap[gap],
        wrap && "flex-wrap",
        align === "start" && "items-start",
        align === "center" && "items-center",
        align === "end" && "items-end",
        align === "baseline" && "items-baseline",
        justify === "start" && "justify-start",
        justify === "center" && "justify-center",
        justify === "end" && "justify-end",
        justify === "between" && "justify-between",
        justify === "around" && "justify-around",
        className
      )}
      {...props}
    />
  )
}
Cluster.displayName = "Cluster"
