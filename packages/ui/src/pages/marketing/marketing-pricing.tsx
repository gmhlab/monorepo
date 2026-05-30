import { forwardRef, type HTMLAttributes } from "react"
import { Section, Flex, Grid } from "../../layout"
import { Button } from "../../primitives/button"
import { cn } from "../../utils/utils"

export interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  variant?: "default" | "outline"
}

export interface MarketingPricingProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  plans: PricingPlan[]
  columns?: 1 | 2 | 3 | 4 | 5 | 6
}

export const MarketingPricing = forwardRef<HTMLDivElement, MarketingPricingProps>(
  ({ title, description, plans, columns = 3, className, ...props }, ref) => {
    return (
      <Section padding="1600" variant="subtle">
        <Flex direction="column" gap="200" alignPrimary="center" alignSecondary="center" container>
          <Flex direction="column" gap="300" alignPrimary="center" className="text-center">
            <Flex direction="column" gap="300" alignPrimary="center" className="text-center">
              <h2 className="text-3xl font-bold">{title}</h2>
              {description && (
                <p className="text-muted-foreground">{description}</p>
              )}
            </Flex>
            <Grid columns="repeat(3, 1fr)" gap="800" className="w-full">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="flex flex-col rounded-lg border border-border bg-card text-card-foreground p-6"
                >
                  <Flex direction="column" gap="200" alignPrimary="start">
            
                      <h3 className="font-semibold">{plan.name}</h3>
                      <p className="text-3xl font-bold">{plan.price}</p>
        
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </Flex>
                  <ul className="mt-6 space-y-2 text-sm text-muted-foreground flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex w-fullitems-center gap-2">
                                <Flex gap="200" alignPrimary="start">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="color=red-800"
                          className="text-foreground shrink-0"
                          aria-hidden="true"
                        >
                          <path
                            d="M4 8L7 11L12 5"
                            stroke="text-foreground"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {f}
                          </Flex>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.variant ?? "outline"}
                    className="mt-6 w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </Grid>
          
          </Flex>
        </Flex>
      </Section>
    )
  }
)
MarketingPricing.displayName = "MarketingPricing"
