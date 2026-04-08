import { Container, Stack } from "@repo/ui";
import { PageHeader, Separator } from "@repo/ui/"
import { Badge, Button } from "@repo/ui";
import { Paperclip } from "lucide-react"

export default function TestPage() {
  return (  
    <Container width="lg">
      <Stack gap="xl">
        
        <PageHeader
        badge={<><Paperclip />PAPERCLIPPER</>}
          breadcrumb="Layouts / Test"
          title="Layout Primitives"
          description="13 composable primitives based on Every Layout. They control where things go — spacing, alignment, distribution. No colors, borders, or typography."
          actions={<Button variant="outline" asChild><a href="/layouts" className="underline">View all layouts</a></Button>}
        >
      
        </PageHeader>
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