---
name: figma-sync
description: Create, audit, and maintain Figma Code Connect mappings between Figma component sets and React components in the ui-repo design system. Use when the user asks about Code Connect, wants to sync components to/from Figma, or needs to create Figma representations of code components.
---

# Figma Code Connect Sync Skill

You manage the bridge between Figma designs and React code in this monorepo. You handle three workflows:

---

## Mode Detection

**Sync to Figma** — User has a React component that needs a Figma component set and Code Connect file
**Sync from Figma** — User has a Figma component URL that needs a Code Connect mapping to existing code
**Audit** — User wants to check Code Connect coverage or consistency across a layer

---

## Mode 1: Sync to Figma (Code → Figma)

When the user has React components that need Figma representations:

1. **Read the component** to understand its props, variants, and behavior.
2. **Check for existing Figma components** — call `search_design_system` or `get_metadata` on the relevant page before creating duplicates.
3. **Create the Figma component set** using `use_figma`:
   - Navigate to the correct page: Layouts (0:1), Patterns (8:2), Templates (10:2), Primitives (12:2), Blocks (15:2), Composites (117:5)
   - Use `await figma.setCurrentPageAsync(page)` (NEVER `figma.currentPage = page`)
   - Create individual `figma.createComponent()` instances, named with variant syntax: `prop=value, prop=value`
   - Call `figma.combineAsVariants(components, page)` to create the component set
   - Name the set `_Layer/ComponentName` (e.g., `_Layout/Stack`)
   - Set layout properties on the component set AFTER combining
   - Return the component set's node ID
4. **Write the `.figma.tsx` file** in the component's layer `.figma/` directory.
5. **Verify the build** passes with the new file.

### Plugin API Safety Rules

These are hard-won — violating them causes silent failures:

- `resize()` BEFORE `layoutMode`
- `appendChild()` BEFORE `layoutSizingHorizontal = "FILL"`
- NEVER set `description` on frames (only on components)
- NEVER use `strokeDashes` (causes "object is not extensible")
- NEVER use helper functions that construct and return paint/color objects
- Always `await figma.loadFontAsync()` before creating/editing text
- Keep code flat and inline — debug by bisecting if errors occur (no stack traces available)

---

## Mode 2: Sync from Figma (Figma → Code Connect)

When the user provides a Figma URL for an existing component:

1. **Parse the URL**: `figma.com/design/:fileKey/:fileName?node-id=X-Y` → fileKey, nodeId (convert `-` to `:`)
2. **Call `get_design_context`** to see the component's variants and structure.
3. **Find the matching React component** in the codebase.
4. **Write the `.figma.tsx` file** mapping Figma variant properties to React props:
   - `figma.enum("propName", { figmaValue: "codeValue" })` for enum/variant props
   - `figma.boolean("propName")` for toggle props
   - `figma.boolean("propName", { true: figma.children("Slot"), false: undefined })` for conditional slots
   - `figma.children("*")` for all children, `figma.children("LayerName")` for named slots
   - `figma.string("propName")` for text content
5. **Verify the build** passes.

---

## Mode 3: Audit

When the user wants to check Code Connect coverage:

1. **List all `.figma.tsx` files** with `Glob("**/*.figma.tsx")`.
2. **List all components** in the target layer's directory.
3. **Report gaps** — components without Code Connect files.
4. **Check consistency**:
   - Do Code Connect prop enums match the actual component's TypeScript types?
   - Are shared types (like Gap) reflected consistently across all Code Connect files?
   - Do the Figma node IDs still point to valid components? (Use `get_metadata` to verify)
5. **Fix issues** — update outdated files, create missing ones.

---

## Project Constants

- **Figma file key**: `ZIDu0vPHrPmPywhIAzXegB`
- **Figma pages**: Layouts (0:1), Patterns (8:2), Templates (10:2), Primitives (12:2), Blocks (15:2), Composites (117:5)
- **Code Connect config**: `packages/ui/figma.config.json`
- **Code Connect dependency**: `@figma/code-connect` (devDependency on `@repo/ui`)
- **Publishing**: Requires Figma Organization/Enterprise plan. Not available yet — files exist for documentation.
- **Component set naming**: `_Layer/ComponentName`

## Code Connect File Template

```tsx
import figma from "@figma/code-connect"
import { Component } from "../component"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=NODE_ID"

figma.connect(Component, FIGMA_URL, {
  props: {
    // Map each Figma variant property to a code prop
    variant: figma.enum("figmaPropName", {
      figmaValue1: "codeValue1",
      figmaValue2: "codeValue2",
    }),
    toggle: figma.boolean("figmaBoolName"),
    children: figma.children("*"),
  },
  example: ({ variant, toggle, children }) => (
    <Component variant={variant} toggle={toggle}>
      {children}
    </Component>
  ),
})
```

## Layer → Figma Page Mapping

| Code Layer | Figma Page | Path Convention |
|---|---|---|
| `packages/ui/src/layouts/` | Layouts (0:1) | `.figma/component.figma.tsx` |
| `packages/ui/src/patterns/` | Patterns (8:2) | `.figma/component.figma.tsx` |
| `packages/ui/src/templates/` | Templates (10:2) | `.figma/component.figma.tsx` |
| `packages/ui/src/primitives/` | Primitives (12:2) | `.figma/component.figma.tsx` |
| `packages/ui/src/blocks/` | Blocks (15:2) | `.figma/component.figma.tsx` |
| `packages/ui/src/composites/` | Composites (117:5) | `.figma/component.figma.tsx` |
