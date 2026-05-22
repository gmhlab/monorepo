import figma from "@figma/code-connect"
import { LegacyGrid as Grid } from "../legacy"

const FIGMA_URL =
  "https://www.figma.com/design/JoFKlZFj4MXQoXxOxVqM1F?node-id=25:136"

figma.connect(Grid, FIGMA_URL, {
  props: {
    columns: figma.enum("columns", {
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "auto-fill": "auto-fill",
      "auto-fit": "auto-fit",
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
    min: figma.enum("min", {
      "12rem": "12rem",
      "15rem": "15rem",
      "20rem": "20rem",
      "25rem": "25rem",
      "30rem": "30rem",
    }),
    children: figma.children("*"),
  },
  example: ({ columns, gap, min, children }) => (
    <Grid columns={columns} gap={gap} min={min}>
      {children}
    </Grid>
  ),
})
