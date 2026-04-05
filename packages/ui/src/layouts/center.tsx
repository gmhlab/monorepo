import { type ComponentPropsWithRef } from "react"
import { cn } from "../lib/utils"
import { type CenterMax, centerMaxMap, GUTTER } from "./_scale"

// ─────────────────────────────────────────────
// Center
//
// Horizontally centered column with max-width.
// ─────────────────────────────────────────────

export interface CenterProps extends ComponentPropsWithRef<"div"> {
  /** Max-width constraint. Default `"lg"` (512px). */
  max?: CenterMax
  /** Add responsive horizontal padding to prevent content touching viewport edges. */
  gutter?: boolean
  /** Center text alignment. */
  text?: boolean
  /**
   * Center the element itself, not just its content. Children size to their
   * natural content width and are horizontally centered within the max-width
   * container. Without this, children stretch to fill the full width.
   */
  intrinsic?: boolean
}

export function Center({
  max = "lg",
  gutter = true,
  text = false,
  intrinsic = false,
  className,
  ref,
  ...props
}: CenterProps) {
  return (
    <div
      ref={ref}
      className={cn(
        "mx-auto w-full",
        centerMaxMap[max],
        gutter && GUTTER,
        text && "text-center",
        intrinsic && "flex flex-col items-center",
        className
      )}
      {...props}
    />
  )
}
Center.displayName = "Center"
