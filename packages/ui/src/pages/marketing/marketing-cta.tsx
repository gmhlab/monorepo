import { forwardRef, type HTMLAttributes, type ReactNode } from "react"
import { Section, Flex } from "../../layout"
import { cn } from "../../lib/"

export interface MarketingCTAProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  action: ReactNode
}

export const MarketingCTA = forwardRef<HTMLDivElement, MarketingCTAProps>(
  ({ title, description, action, className, ...props }, ref) => {
    return (
      <Section padding="1600" variant="neutral" className={cn("text-muted-foreground", className)} >     
        <Flex gap="400" direction="column" alignPrimary="center" alignSecondary="center" container>
          <h2 className="text-3xl text-foreground font-bold">{title}</h2>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
          {action}
        </Flex>
      </Section>

    )
  }
)
MarketingCTA.displayName = "MarketingCTA"
