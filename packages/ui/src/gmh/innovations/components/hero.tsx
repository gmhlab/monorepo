import { Flex, FlexItem, Section } from "../../../layouts";

export function InnovationsHero() {
  return (
      <Section paddingTop="1200" paddingBottom="0">
          <Flex 
            container 
            direction="column" 
            gap="100" 
            className="px-0 relative"
          >
              <div className="flex flex-row items-start justify-start p-0 relative">
                <h1 className="text-6xl md:text-8xl font-serif text-foreground leading-none tracking-tight bg-gradient-to-r from-foreground via-foreground to-muted bg-clip-text text-transparent">
                  Innovations
                </h1>
              </div>
              <div className="flex flex-row items-start justify-start p-0 relative w-full max-w-4xl">
                <p className="text-3xl leading-relaxed text-[#AA9868] font-light">
                  Tools, research, and partnerships advancing global mental health
                  care for communities the field has long overlooked.
                </p>
              </div>
          </Flex>
      </Section>
  );
}
