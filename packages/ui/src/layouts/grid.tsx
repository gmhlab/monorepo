import { type ComponentPropsWithRef } from "react"
import { cn } from "../lib/utils"
import { type Gap, type GridMin, gapMap } from "./_scale"

// ─────────────────────────────────────────────
// Grid
//
// CSS grid with either fixed column counts or
// auto-fill/auto-fit intrinsic sizing.
// ─────────────────────────────────────────────

type Columns = 1 | 2 | 3 | 4 | 5 | 6 | "auto-fill" | "auto-fit"

const colsMap: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
}

export interface GridProps extends ComponentPropsWithRef<"div"> {
  /**
   * Number of columns, or `"auto-fill"` / `"auto-fit"` for
   * intrinsic sizing. Default `3`.
   */
  columns?: Columns
  /** Gap between grid cells. Default `"md"` (16px). */
  gap?: Gap
  /**
   * Minimum column width for auto-fill/auto-fit grids.
   * Ignored when `columns` is a number. Default `"15rem"` (240px).
   */
  min?: GridMin
}

export function Grid({
  columns = 3,
  gap = "md",
  min = "15rem",
  className,
  style,
  ref,
  ...props
}: GridProps) {
  const isAuto = columns === "auto-fill" || columns === "auto-fit"

  return (
    <div
      ref={ref}
      className={cn("grid", !isAuto && colsMap[columns], gapMap[gap], className)}
      style={
        isAuto
          ? {
              ...style,
              gridTemplateColumns: `repeat(${columns}, minmax(${min}, 1fr))`,
            }
          : style
      }
      {...props}
    />
  )
}
Grid.displayName = "Grid"
