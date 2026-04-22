import figma from "@figma/code-connect"
import { Center } from "../center"

const FIGMA_URL =
  "https://www.figma.com/design/JoFKlZFj4MXQoXxOxVqM1F?node-id=23:158"

figma.connect(Center, FIGMA_URL, {
  props: {
    max: figma.enum("max", {
      xs: "xs",
      sm: "sm",
      md: "md",
      lg: "lg",
      xl: "xl",
      "2xl": "2xl",
      "3xl": "3xl",
      "4xl": "4xl",
      "5xl": "5xl",
      "6xl": "6xl",
      "7xl": "7xl",
      prose: "prose",
      full: "full",
    }),
    gutter: figma.boolean("gutter"),
    intrinsic: figma.boolean("intrinsic"),
    children: figma.children("*"),
  },
  example: ({ max, gutter, intrinsic, children }) => (
    <Center max={max} gutter={gutter} intrinsic={intrinsic}>
      {children}
    </Center>
  ),
})
