import { Container, Stack } from "@repo/ui";
import { PageHeader, Separator } from "@repo/ui/"

export default function TestPage() {
  return (  
    <Container width="full">
      <Stack gap="xl">
        <PageHeader
          title="Layout Primitives"
          description="13 composable primitives based on Every Layout. They control where things go — spacing, alignment, distribution. No colors, borders, or typography."
        />
        <Separator />
        <p>
          This is a test page for the layout primitives. It is not meant to be
          a comprehensive demo of all the features of each primitive, but rather
          a place to test out new ideas and iterate on the design.
        </p>
      </Stack>
    </Container>
  )
}