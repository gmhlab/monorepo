---
name: layout-primitives
description: >
  Architect and maintain the spatial vocabulary and layout primitives for the @repo/ui design
  system. Use this skill whenever the user is building or refactoring layout components
  (Section, Grid, Flex / FlexItem), defining spacing tokens, working with the numeric gap
  scale (100–1600), discussing how composites/blocks/templates should own their spacing,
  reviewing whether something should live in `layouts/`, `primitives/`, or `composites/`,
  or considering whether to keep the legacy primitives (Stack/Cluster/Container/Center/Split/
  Cover) in `layouts/legacy.tsx`. Also trigger when the user talks about section padding,
  variant backgrounds, FlexItem column sizes, or container max-widths inside Grid/Flex —
  even if they don't use the exact term "layout primitives." If someone is editing
  `packages/ui/src/layouts/` or asking how layout components relate to the Tailwind v4
  token system, this is the skill.
---

# Layout Primitives

A methodology for the spatial foundation of `@repo/ui`, the design system in `packages/ui/`.
The core principle: **spatial vocabulary first, layout primitives second, everything else after.**

## Why this order matters

Most design systems start with visible components (Button, Card, Input) and bolt on
spacing later. This creates entropy — every component makes its own spatial decisions,
gap values drift, and composition becomes unpredictable.

The fix is to treat spacing like a typed schema. Define the vocabulary in one file,
build layout primitives that speak that vocabulary, and then compose everything else
inside those primitives. Components never decide how much space goes *between* them —
their parent layout does.

## The authoring sequence

The taxonomy describes complexity:
`layout → primitive → composite → block → pattern → template → page`.
But the **authoring sequence** is different:

```
1. Spatial tokens (styles/index.css + layouts CSS)  — the shared contract
2. Layout primitives                                — Section, Grid, Flex (+ FlexItem)
3. Primitives                                       — Button, Input, Text, …
4. Composites                                       — Cards, Forms, Headers, Sections (Hero/Panel)
5. Blocks                                           — navbars, footers, marketing sections
6. Patterns / templates / pages                     — recipes and full shells
```

Layout comes early because you can't compose anything coherently if you haven't
decided how space works first.

## The numeric gap scale

`Section`, `Grid`, and `Flex` all accept the same numeric token scale for spacing.
The tokens map to CSS variables defined in `packages/ui/src/styles/index.css`:

| Token  | Tier   | Use |
|--------|--------|-----|
| `100`  | tight  | icon-to-label, inside composites |
| `200`  | tight  | within composites |
| `300`  | tight  | within composites |
| `400`  | normal | between composites in a pattern |
| `600`  | normal | between patterns inside a block |
| `800`  | loose  | between blocks |
| `1200` | loose  | section interiors |
| `1600` | loose  | hero/section breathing room |

`Section.padding` additionally accepts `0` and `4000` (the largest section break).
**Do not invent values outside this scale** — the whole point is constraint.

## The three primitives

All three are in `packages/ui/src/layouts/`. Each has its own folder + colocated CSS.

### Section — page region

The outermost spatial contract for a page region. Answers:

1. How much vertical rhythm does this region get? (`padding` / `paddingTop` / `paddingBottom` → numeric scale)
2. What is the region's visual treatment? (`variant`: `brand` | `neutral` | `stroke` | `subtle` | `image`)
3. What semantic element should it render? (`elementType`: `section` | `header` | `footer`)

```tsx
<Section padding="1600" variant="brand">…</Section>
<Section variant="image" src="/hero.jpg">…</Section>
```

When `variant="image"`, an `src` is required and a background `Image` is rendered behind
the content. This is the single component that owns page-region vertical rhythm — do not
reach for `py-*` utilities in composites.

### Grid — explicit grids

CSS grid with typed gap. Use when you need column/row templates:

```tsx
<Grid columns="repeat(3, 1fr)" gap="600" container>…</Grid>
<Grid columns="minmax(0, 1fr) 320px" columnGap="400" rowGap="200">…</Grid>
```

Props: `columns`, `rows`, `gap`, `columnGap`, `rowGap`, `flow`,
`justifyItems`, `alignItems`, `container`. The `container` opt-in adds the
layout's max-width — leave it off for full-bleed grids.

### Flex — flexible rows and stacks

A flex container with token-driven gap. The most-used primitive — covers both
horizontal rows and vertical stacks:

```tsx
<Flex direction="column" gap="600" alignSecondary="stretch">…</Flex>
<Flex direction="row" gap="400" alignPrimary="space-between" wrap>…</Flex>
```

Props: `direction` (`row` | `row-reverse` | `column` | `column-reverse`),
`gap`, `alignPrimary`, `alignSecondary`, `container`, `wrap`,
`type` (`quarter` | `third` | `half` | `auto`).

`alignPrimary` controls the main axis, `alignSecondary` controls the cross axis,
both accept `start | end | center | stretch | space-between`.

Pair with **FlexItem** when children need explicit column shares:

```tsx
<Flex direction="row" gap="400" wrap>
  <FlexItem size="major">…</FlexItem>
  <FlexItem size="minor">…</FlexItem>
</Flex>
```

`FlexItem.size`: `full` | `major` | `minor` | `half` | `fill`.

### Legacy primitives — do not use in new code

`Stack`, `Cluster`, `Center`, `Container`, `Split`, `Cover` are still exported from
`layouts/legacy.tsx` (and re-exported through `layouts/index.ts`) so older code keeps
compiling. They are **frozen**: don't add features, don't extend the scale they use, and
reach for `Section` / `Grid` / `Flex` in any new file. When refactoring a file that
already uses them, swap in the new primitives in the same commit when scope allows —
otherwise leave a brief note and migrate later.

## Component API guidelines

- Layout primitives accept `className` and forward the rest of the HTML props.
- They render concrete elements (`<div>`, `<section>`) — no `Slot.Root`/`asChild`. Wrap with
  `elementType` (Section) when you need different semantics.
- Don't accept new typography/color props on layout primitives. Those belong on `Text`,
  `Section.variant`, or design tokens.
- CSS lives next to the component (`Flex/flex.css`, `Grid/grid.css`, `Section/section.css`).
  Edit the CSS file when adding a new token tier — not arbitrary Tailwind classes inline.

## The cardinal rule of composition

> **Layout owns the gap between children. Children own their internal spacing.**

This is the "margin is the parent's job" principle, and it maps directly to `gap`
on the layout component. If composites or patterns start setting their own `margin-top`
or `margin-bottom`, the contract is broken and composition becomes unpredictable.

The one exception: components that genuinely own their outer breathing room
(`Section` with its `padding`, dividers/separators). Those use the same numeric scale —
never freehand Tailwind margin classes.

## Files to watch with high vigilance

In priority order, these are the files where spatial drift causes the most damage:

1. **`packages/ui/src/styles/index.css`** — defines the CSS variables every layout
   primitive consumes. A token change here ripples through every app.
2. **`packages/ui/src/layouts/{Section,Grid,Flex}/*.css`** — the layout's class-to-token
   mapping. Adding a new gap step requires touching all three.
3. **`packages/ui/src/layouts/legacy.tsx`** — frozen, but still ships. Don't extend it.
   Treat any new code referencing its exports as a migration target.
4. **CVA variant definitions with size variants** (e.g. Button `size="small" | "medium"`)
   — make implicit spatial claims. Must stay coherent with the numeric scale.
5. **Root layouts** — `apps/*/app/layout.tsx`. Inconsistency here means apps feel like
   different products.
6. **Barrel exports** — `packages/ui/src/index.ts` and `layouts/index.ts`. If an
   internal helper leaks, someone will depend on it.

## Anti-patterns

- **Gap freestyle**: hardcoding `gap-3` / `gap-5` or pixel values instead of the numeric
  tokens. The scale exists to prevent this.
- **Reaching for legacy primitives in new code**: importing `Stack` or `Cluster` in a
  new file. The legacy module is a graveyard, not a menu.
- **Margin on children**: a Card setting `mb-6` to space itself from siblings. The
  parent `Flex` / `Grid` `gap` should handle this.
- **Conflating Section with Flex**: `<Flex direction="column" gap="1600">` to fake a
  page region. Use `<Section padding="1600">` so variants and semantic element come
  along for free.
- **Container-only wrapping**: building a one-off wrapper div with bespoke max-width and
  padding when `Section` (or `Grid container` / `Flex container`) already does it.
- **Bypassing the barrel collision rule**: importing react-aria-components primitives
  through `from "@repo/ui"` or `primitives/index.ts`. Use explicit relative paths like
  `../Text/Text` inside the RAC family.
