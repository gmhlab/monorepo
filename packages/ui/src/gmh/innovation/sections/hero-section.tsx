import { Section, Flex } from "../../../layouts";
import { TextContentTitle } from "../../../primitives";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <Section paddingTop="1600" paddingBottom="0" >
      <Flex alignPrimary="center" alignSecondary="center" container>
        <TextContentTitle title={title} subtitle={subtitle} align="center" />
      </Flex>
    </Section>
  );
}