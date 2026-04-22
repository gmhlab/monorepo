import { type ComponentPropsWithRef, type ReactNode } from "react"
import { Stack } from "../layouts/stack"
import { Center } from "../layouts/center"
import { Cluster } from "../layouts/cluster"
import { type CenterMax } from "../layouts/_scale"
import { cn } from "../lib/"

export interface MarketingTemplateProps extends ComponentPropsWithRef<"div"> {
  /** Navigation content — logo, links, CTA */
  nav: ReactNode
  /** Page body — hero, features, pricing, testimonials, etc. */
  children: ReactNode
  /** Footer content */
  footer?: ReactNode
  /** Max-width for nav and footer gutters */
  max?: CenterMax
  /** Optional announcement banner pinned above the nav */
  banner?: ReactNode
}

export function MarketingTemplate({
  nav,
  children,
  footer,
  banner,
  max = "7xl",
  className,
  ref,
  ...props
}: MarketingTemplateProps) {
  return (
    <Stack ref={ref} gap="none" className={cn("min-h-screen", className)} {...props}>
      {/* ── Announcement banner ─────────────────────────────────── */}
      {banner && (
        <div className="relative z-50 border-b border-border/60 bg-primary px-4 py-2 text-center text-xs font-medium tracking-wide text-primary-foreground">
          {banner}
        </div>
      )}

      {/* ── Sticky header ───────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <Center max={max} gutter>
          <Cluster gap="none" align="center" className="h-14">
            {nav}
          </Cluster>
        </Center>
      </header>

      {/* ── Main content — sections go full-width ───────────────── */}
      <main className="flex-1">{children}</main>

      {/* ── Footer ──────────────────────────────────────────────── */}
      {footer && (
        <footer className="border-t border-border/40 bg-muted/20">
          <Center max={max} gutter>
            <div className="py-12 md:py-16">{footer}</div>
          </Center>
        </footer>
      )}
    </Stack>
  )
}
MarketingTemplate.displayName = "MarketingTemplate"
