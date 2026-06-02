import { Section, Flex } from "../../../layout";
import { TextContentTitle } from "../../../primitives/Text/Text";

export function HeroSection02() {
  return (
    <Section paddingTop="1200" paddingBottom="0">
      <Flex container direction="column" gap="100"> 
        <TextContentTitle
          title="Innovations"
          subtitle="Tools, research, and partnerships advancing global mental health care for communities the field has long overlooked."
        />
      </Flex>
    </Section>
  );
}
