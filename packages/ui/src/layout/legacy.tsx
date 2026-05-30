import { cn } from "../lib/utils"
import { Section } from "./Section/Section"
import { forwardRef, type ComponentPropsWithoutRef, type ElementType } from "react"

export const gapMap = { none: "100", xs: "100", sm: "200", md: "400", lg: "600", xl: "800", "2xl": "1200", "3xl": "1600" } as const
export type Gap = keyof typeof gapMap
export type CenterMax = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "7xl" | "prose" | "full"
export const centerMaxMap: Record<CenterMax, string> = { sm: "max-w-sm", md: "max-w-md", lg: "max-w-lg", xl: "max-w-xl", "2xl": "max-w-2xl", "3xl": "max-w-3xl", "4xl": "max-w-4xl", "7xl": "max-w-7xl", prose: "max-w-prose", full: "max-w-full" }
export const sectionSpacingMap = { none: "py-0", sm: "py-8", md: "py-12", lg: "py-16", xl: "py-24", "2xl": "py-32" } as const

type DivProps = ComponentPropsWithoutRef<"div">

export const Stack = forwardRef<HTMLDivElement, DivProps & { gap?: Gap; align?: "start" | "end" | "center" | "stretch"; recursive?: boolean }>(
  ({ className, gap = "md", align = "stretch", style, ...props }, ref) => <div ref={ref} className={cn("flex flex-col", className)} style={{...style, gap:`var(--sds-size-space-${gapMap[gap]})`, alignItems: align === "start" ? "flex-start" : align === "end" ? "flex-end" : align}} {...props} />,
)
Stack.displayName = "Stack"

export const Cluster = forwardRef<HTMLDivElement, DivProps & { gap?: Gap; justify?: "start" | "end" | "center" | "between"; align?: "start" | "end" | "center" | "baseline"; wrap?: boolean }>(
  ({ className, gap = "md", justify = "start", align = "center", wrap = true, ...props }, ref) => {
    const j = justify === "between" ? "space-between" : justify
    return <div ref={ref} className={cn("flex", wrap && "flex-wrap", className)} style={{...(props as any).style, gap:`var(--sds-size-space-${gapMap[gap]})`, justifyContent: j === "start" ? "flex-start" : j === "end" ? "flex-end" : j === "space-between" ? "space-between" : j, alignItems: align === "start" ? "flex-start" : align === "end" ? "flex-end" : align === "baseline" ? "baseline" : align}} {...props} />
  },
)
Cluster.displayName = "Cluster"

export const Center = forwardRef<HTMLDivElement, DivProps & { max?: CenterMax; gutter?: boolean; text?: boolean; intrinsic?: boolean }>(
  ({ className, max = "lg", gutter = true, text = false, intrinsic = false, ...props }, ref) => <div ref={ref} className={cn(centerMaxMap[max], "mx-auto", gutter && "px-4", text && "text-center", intrinsic && "w-fit", className)} {...props} />,
)
Center.displayName = "Center"

export const LegacyGrid = forwardRef<HTMLDivElement, DivProps & { columns?: number | string; gap?: Gap; min?: string }>(
  ({ className, columns = 1, gap = "md", min, ...props }, ref) => {
    const cols = typeof columns === "number" ? `repeat(${columns}, minmax(0, 1fr))` : columns === "auto-fit" || columns === "auto-fill" ? `repeat(${columns}, minmax(${min || "16rem"}, 1fr))` : columns
    return <div ref={ref} className={cn("grid", className)} style={{...(props as any).style, gridTemplateColumns: cols, gap:`var(--sds-size-space-${gapMap[gap]})`}} {...props} />
  },
)
LegacyGrid.displayName = "LegacyGrid"

export function Container<T extends ElementType = "div">({ as, className, width = "lg", section, ...props }: { as?: T; className?: string; width?: "xs" | "sm" | "md" | "lg" | "xl" | "full"; section?: keyof typeof sectionSpacingMap } & Record<string, unknown>) {
  const Comp: any = as || "div"
  const wm: Record<string, string> = { xs: "max-w-xs", sm: "max-w-sm", md: "max-w-3xl", lg: "max-w-5xl", xl: "max-w-7xl", full: "max-w-full" }
  return <Comp className={cn("mx-auto w-full px-4", wm[width], section && sectionSpacingMap[section], className)} {...props} />
}

export const Split = forwardRef<HTMLDivElement, (DivProps & { gap?: Gap; ratio?: string; fraction?: string; sideWidth?: string; noStretch?: boolean; threshold?: string }) & Record<string, unknown>>(
  ({ className, gap = "lg", style, ...props }: any, ref) => <div ref={ref} className={cn("flex flex-wrap", className)} style={{ ...(style || {}), gap: `var(--sds-size-space-${gapMap[gap as Gap]})` }} {...props} />,
)
Split.displayName = "Split"

export const Cover = forwardRef<HTMLDivElement, DivProps & { centered?: React.ReactNode; top?: React.ReactNode; bottom?: React.ReactNode; header?: React.ReactNode; footer?: React.ReactNode; minHeight?: "full" | "auto" | "screen" }>(
  ({ className, centered, top, bottom, header, footer, minHeight = "full", children }, ref) => (
    <Section className={cn((minHeight === "full" || minHeight === "screen") && "min-h-screen", className)}>
      <div ref={ref} className="flex min-h-inherit flex-col">{top || header}<div className="my-auto">{centered || children}</div>{bottom || footer}</div>
    </Section>
  ),
)
Cover.displayName = "Cover"
