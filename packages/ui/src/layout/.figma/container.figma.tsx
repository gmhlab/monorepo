import figma from "@figma/code-connect"
import { Container } from "../container"

const FIGMA_URL =
  "https://www.figma.com/design/JoFKlZFj4MXQoXxOxVqM1F?node-id=26:44"

figma.connect(Container, FIGMA_URL, {
  props: {
    width: figma.enum("width", {
      xs: "xs",
      sm: "sm",
      md: "md",
      lg: "lg",
      xl: "xl",
      "2xl": "2xl",
      full: "full",
    }),
    px: figma.enum("px", {
      none: "none",
      xs: "xs",
      sm: "sm",
      md: "md",
      lg: "lg",
      xl: "xl",
      "2xl": "2xl",
    }),
    section: figma.enum("section", {
      none: undefined,
      sm: "sm",
      md: "md",
      lg: "lg",
      xl: "xl",
    }),
    children: figma.children("*"),
  },
  example: ({ width, px, section, children }) => (
    <Container width={width} px={px} section={section}>
      {children}
    </Container>
  ),
})
