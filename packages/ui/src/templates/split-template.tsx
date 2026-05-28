import { type ComponentPropsWithRef, type ReactNode } from "react"
import { Split } from "../layout"
import { Cover } from "../layout"
import { cn } from "../lib/"

export interface SplitTemplateProps extends ComponentPropsWithRef<"div"> {
  /** Primary side content — marketing copy, hero, illustration */
  primary: ReactNode
  /** Secondary side content — form, signup, details */
  secondary: ReactNode
  /**
   * Which side is sticky when scrolling (the other side scrolls freely).
   * Set to `"none"` for both sides to scroll with the page.
   */
  sticky?: "primary" | "secondary" | "none"
  /** Flip the visual order — puts secondary on the left */
  reversed?: boolean
}

export function SplitTemplate({
  primary,
  secondary,
  sticky = "primary",
  reversed = false,
  className,
  ref,
  ...props
}: SplitTemplateProps) {
  const stickyClass = "sticky top-0 h-screen overflow-y-auto"

  const primaryPanel = (
    <div className={cn("flex-1 min-w-0", sticky === "primary" && stickyClass)}>
      <Cover minHeight={sticky === "primary" ? "full" : "auto"}>
        {primary}
      </Cover>
    </div>
  )

  const secondaryPanel = (
    <div className={cn("flex-1 min-w-0", sticky === "secondary" && stickyClass)}>
      <Cover minHeight={sticky === "secondary" ? "full" : "auto"}>
        {secondary}
      </Cover>
    </div>
  )

  return (
    <Split
      ref={ref}
      ratio="half"
      gap="none"
      className={cn(
        "min-h-screen",
        reversed && "flex-row-reverse",
        className
      )}
      {...props}
    >
      {primaryPanel}
      {secondaryPanel}
    </Split>
  )
}
SplitTemplate.displayName = "SplitTemplate"