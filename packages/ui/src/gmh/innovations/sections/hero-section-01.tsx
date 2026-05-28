import { Section, Flex } from "../../../layout";
import { TextContentTitle } from "../../../primitives/Text/Text";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export function HeroSection01({ title, subtitle }: HeroSectionProps) {
  return (
    <Section paddingTop="1600" paddingBottom="0" >
      <Flex alignPrimary="center" alignSecondary="center" container>
        <TextContentTitle title={title} subtitle={subtitle} align="center" />
      </Flex>
    </Section>
  );
}