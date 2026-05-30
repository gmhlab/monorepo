import { type ReactNode } from "react"
import { Section, Flex, Grid } from "../../layout"
import { cn } from "../../lib/"

export type FooterLink = {
  label: string
  href: string
  external?: boolean
}

export type FooterColumn = {
  title: string
  links: FooterLink[]
}

export type SocialLink = {
  label: string
  href: string
  icon: ReactNode
}

export interface MarketingFooterProps {
  /** Logo or brand element */
  logo?: ReactNode
  /** Tagline or short description */
  tagline?: string
  /** Link columns (Product, Company, Resources, etc.) */
  columns?: FooterColumn[]
  /** Social media links */
  social?: SocialLink[]
  /** Newsletter signup or other CTA slot */
  cta?: ReactNode
  /** Copyright text (overrides default) */
  copyright?: string
  /** Legal links (Privacy, Terms, etc.) */
  legal?: FooterLink[]
  /** Company name for copyright */
  companyName?: string
  className?: string
}

export function MarketingFooter({
  logo,
  tagline,
  columns = [],
  social,
  cta,
  copyright,
  legal,
  companyName = "Monofly Inc.",
  className,
}: MarketingFooterProps) {
  const currentYear = new Date().getFullYear()
  const copyrightText =
    copyright ?? `\u00a9 ${currentYear} ${companyName}. All rights reserved.`

  return (
    <Section padding="1600" variant="subtle" className={cn("text-muted-foreground", className)}>
      <Flex gap="1600" direction="column" container>
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_2.5fr]">
          {/* Brand column */}
          <Flex gap="400" direction="column">
            {logo && <div>{logo}</div>}

            {tagline && (
              <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
                {tagline}
              </p>
            )}

            {social && social.length > 0 && (
              <Flex gap="400" direction="row">
                {social.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.icon}
                  </a>
                ))}
              </Flex>
            )}

            {cta && <div className="max-w-sm">{cta}</div>}
          </Flex>

          {/* Link columns */}
          {columns.length > 0 && (
            <Grid
              columns="repeat(4, 1fr)"
              gap="1600"
              className="[--min-col-width:140px] grid-cols-[repeat(auto-fit,minmax(var(--min-col-width),1fr))]"
            >
              {columns.map((column) => (
                <Flex key={column.title} gap="400" direction="column">
                  <h3 className="text-sm font-semibold text-foreground">
                    {column.title}
                  </h3>
                  <Flex gap="400" direction="column">
                    {column.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        {...(link.external && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                      >
                        {link.label}
                      </a>
                    ))}
                  </Flex>
                </Flex>
              ))}
            </Grid>
          )}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">{copyrightText}</p>

            {legal && legal.length > 0 && (
              <Flex gap="400" direction="row">
                {legal.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {link.label}
                  </a>
                ))}
              </Flex>
            )}
          </div>
        </div>
      </Flex>
    </Section>
  )
}
