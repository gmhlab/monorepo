import { useMediaQuery } from "../src/hooks";
import { Flex, Section } from "../src/layouts";
import { Button } from "../src/primitives/Button/Button";
import { Form } from "../src/primitives/Fieldset/Fieldset";
import { Input } from "../src/primitives/Input/Input";
import { TextContentTitle } from "../src/primitives/Text/Text";

export function WelcomeHero() {
  const { isMobile } = useMediaQuery();
  const sectionPadding = isMobile ? "600" : "1600";
  const flexGap = isMobile ? "600" : "1200";

  return (
    <Section padding={sectionPadding} variant="stroke">
      <Flex
        container
        wrap
        gap={flexGap}
        direction="column"
        alignPrimary="center"
        alignSecondary="center"
        type="third"
      >
        <TextContentTitle
          align="center"
          title="Welcome Home"
          subtitle={<>We're happy to have&nbsp;you.</>}
        />
        <Form singleLine>
          <Input aria-label="Email address" placeholder="you@example.com" />
          <Button onPress={() => {}} variant="neutral">
            Get updates
          </Button>
        </Form>
      </Flex>
    </Section>
  );
}
