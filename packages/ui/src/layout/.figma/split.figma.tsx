import figma from "@figma/code-connect"
import { Split } from "../split"

const FIGMA_URL =
  "https://www.figma.com/design/JoFKlZFj4MXQoXxOxVqM1F?node-id=27:98"

figma.connect(Split, FIGMA_URL, {
  props: {
    ratio: figma.enum("ratio", {
      sidebar: "sidebar",
      aside: "aside",
      half: "half",
      golden: "golden",
    }),
    gap: figma.enum("gap", {
      none: "none",
      xs: "xs",
      sm: "sm",
      md: "md",
      lg: "lg",
      xl: "xl",
      "2xl": "2xl",
      "3xl": "3xl",
    }),
    children: figma.children("*"),
  },
  example: ({ ratio, gap, children }) => (
    <Split ratio={ratio} gap={gap}>
      {children}
    </Split>
  ),
})
