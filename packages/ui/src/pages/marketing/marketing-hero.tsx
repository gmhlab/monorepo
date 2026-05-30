import { forwardRef, type HTMLAttributes, type ReactNode } from "react"
import { Flex, Section } from "../../layout"
import { Badge } from "../../primitives"

export interface MarketingHeroProps extends HTMLAttributes<HTMLDivElement> {
  badge?: ReactNode
  headline: ReactNode
  description?: string
  actions?: ReactNode
  footnote?: string
}

export const MarketingHero = forwardRef<HTMLDivElement, MarketingHeroProps>(
  ({ badge, headline, description, actions, footnote, className, ...props }, ref) => {
    return (
      <Section padding="1600" variant="subtle"  >
        <Flex direction="column" gap="800" alignPrimary="center" alignSecondary="center" container>
          {badge && ( <a href="/"> <Badge variant="secondary" > {badge} </Badge></a> )}
          <Flex direction="column" gap="200" alignPrimary="stretch" alignSecondary="center">
            <h1 className="text-5xl text-center font-bold leading-14 tracking-tight md:text-6xl md:leading-16 lg:text-7xl xl:leading-18 max-w-4xl">{headline}</h1>
            {description && ( 
              <p className="text-xl text-center text-muted-foreground max-w-2xl"> {description} </p> 
            )}
          </Flex>
          {actions && <Flex gap="200">{actions}</Flex>}
          {footnote && ( <p className="text-sm text-muted-foreground">{footnote}</p> )} 
          </Flex>
      </Section>
    )
  }
)

MarketingHero.displayName = "MarketingHero"
