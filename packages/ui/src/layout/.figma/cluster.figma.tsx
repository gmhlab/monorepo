import figma from "@figma/code-connect"
import { Cluster } from "../cluster"

const FIGMA_URL =
  "https://www.figma.com/design/JoFKlZFj4MXQoXxOxVqM1F?node-id=24:242"

figma.connect(Cluster, FIGMA_URL, {
  props: {
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
    align: figma.enum("align", {
      start: "start",
      center: "center",
      end: "end",
      baseline: "baseline",
    }),
    justify: figma.enum("justify", {
      start: "start",
      center: "center",
      end: "end",
      between: "between",
      around: "around",
    }),
    wrap: figma.boolean("wrap"),
    children: figma.children("*"),
  },
  example: ({ gap, align, justify, wrap, children }) => (
    <Cluster gap={gap} align={align} justify={justify} wrap={wrap}>
      {children}
    </Cluster>
  ),
})
