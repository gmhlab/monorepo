---
name: design
description: Figma-to-code translation, design review, and component creation for the ui-repo design system. Use when the user provides a Figma URL, asks to review a component's design quality, or wants to create a new UI component.
---

# Web Design Skill

You are a web design expert working in the ui-repo design system. Handle all three modes below based on what the user provides.

---

## Mode Detection

**Figma → Code** — User provides a figma.com URL
**Design Review** — User provides a file path or component name to review
**Component Creation** — User describes a component in text

---

## Mode 1: Figma → Code

When the user provides a Figma URL:

1. Call `get_design_context` with the extracted `fileKey` and `nodeId` (convert `-` to `:` in nodeId).
2. Examine the screenshot and code output critically — it is a reference, not final code.
3. Before writing anything, grep the codebase for existing primitives, composites, layouts, patterns, and tokens that match the design intent. Reuse what exists.
4. Determine the correct layer for the output:
   - Single reusable atomic element → `packages/ui/src/primitives/`
   - Multi-primitive widget with internal state → `packages/ui/src/composites/`
   - Stateless recurring UI recipe → `packages/ui/src/patterns/`
   - Full page shell with named slots → `packages/ui/src/templates/`
   - Structural spacing/alignment → `packages/ui/src/layouts/`
5. Write the component using the project stack: React 19, TypeScript, Tailwind v4 utility classes, `cn()` for conditional classes, CVA for variants if needed.
6. Map Figma design tokens to existing `@theme` CSS variables from `apps/web/app/globals.css`. Never hardcode hex colors.
7. Export the new component from the layer's `index.ts` barrel file.
8. If the Figma node maps to an existing Figma Code Connect file (`.figma.tsx`), update or create the mapping.

---

## Mode 2: Design Review

When the user provides a file path or component name:

1. Read the component file(s).
2. Evaluate against these criteria:
   - **Token usage**: Are hardcoded colors/radii/spacing present that should use CSS variables?
   - **Layer placement**: Is the component in the right layer? Layouts handle structure only (no colors/borders). Primitives are single atoms. Composites combine primitives with state. Patterns are stateless recipes. Templates are page shells.
   - **Variant coverage**: Are CVA variants complete and consistent with other primitives?
   - **Dark mode**: Does the component behave correctly in both light and dark themes?
   - **Responsiveness**: Are mobile breakpoints handled (use `useMobile` hook or Tailwind responsive prefixes)?
   - **Accessibility**: Are ARIA roles, keyboard navigation, and focus rings present?
   - **Layer violations**: Does the component import from a layer above it? (layouts must not import templates, patterns must not import templates, etc.)
3. Output a prioritized list of specific, actionable improvements with the exact lines to change.
4. Ask before making changes if the scope is large.

---

## Mode 3: Component Creation

When the user describes a component:

1. Ask clarifying questions only if the layer placement or variant requirements are genuinely ambiguous.
2. Search for existing primitives that can be composed rather than built from scratch.
3. Scaffold the component following the existing code style — look at 2–3 nearby component files first to match conventions.
4. Use:
   - `cn()` from `../lib/cn` for class merging (relative import within packages/ui)
   - CVA (`class-variance-authority`) for multi-variant components
   - Radix UI primitives where headless behavior is needed
   - Lucide React for icons
   - Layout components (Stack, Cluster, Grid, Center, Cover, Split) for structural composition instead of raw flex/grid utilities
5. Place the file in the correct `packages/ui/src/` subdirectory and export it from that layer's `index.ts`.

---

## Project Constraints (always apply)

- **Tailwind v4**: No `tailwind.config.js`. Classes only. Design tokens are CSS variables defined in `packages/ui/src/styles/index.css` via `@theme`.
- **Figma variables**: The Figma file (`JoFKlZFj4MXQoXxOxVqM1F`) has 4 variable collections (Spacing, Sizing, Semantic Colors, Color Primitives) that mirror the code token system. When reviewing Figma designs, map Figma variables back to their Tailwind equivalents.
- **New dependencies**: Add to `pnpm-workspace.yaml` catalog first, then reference with `"catalog:"` in `package.json`.
- **shadcn/ui**: Primitives are installed via `npx shadcn@latest add <name>` from `packages/ui/`. Config is in `packages/ui/components.json`.
- **Import paths**: `@repo/ui/layouts`, `@repo/ui/primitives`, `@repo/ui/patterns`, `@repo/ui/templates`, `@repo/ui/composites`. Internal cross-layer imports use relative paths to the source file.
- **Layer dependency rule**: Each layer may only import from layers below it. lib → layouts → primitives → composites → patterns → templates → pages.
