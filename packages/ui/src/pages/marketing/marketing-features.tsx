import { forwardRef, type HTMLAttributes } from "react"
import { Section, Flex, Grid } from "../../layout"
import { FeatureCard, type FeatureCardProps } from "../../patterns/feature-card"

export interface MarketingFeaturesProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  features: FeatureCardProps[]
}

export const MarketingFeatures = forwardRef<HTMLDivElement, MarketingFeaturesProps>(
  ({ title, description, features, className, ...props }, ref) => {
    return (
      <Section padding="1600" variant="stroke" className="border-t border-b border-border" {...props} ref={ref}>
        <Flex direction="column" gap="1200" alignPrimary="center" alignSecondary="center" container>
          <Flex direction="column" gap="200" alignPrimary="stretch" alignSecondary="center">
            <h2 className="text-3xl font-bold">{title}</h2>
            {description && (
              <p className=" ">
                {description}
              </p>
            )}
            </Flex>
          <Grid columns="repeat(3, 1fr)" gap="800" className="w-full">
            {features.map((f) => (
              <FeatureCard className="text-black" key={f.title} {...f} />
            ))}
          </Grid>
        </Flex>
      </Section>
    )
  }
)
MarketingFeatures.displayName = "MarketingFeatures"
