# AGENTS.md

This file provides guidance to AI coding agents working with code in this repository.

## Commands

```bash
pnpm install                          # install all dependencies (from repo root)
pnpm dev                              # start all apps concurrently
pnpm build                            # build everything (Turborepo handles ordering)
pnpm typecheck                        # type-check all packages
pnpm lint                             # lint all packages
pnpm clean                            # clear Turborepo cache + build artifacts

# Single package
pnpm --filter @repo/web dev           # web app only (port 3000)
pnpm --filter @repo/docs dev          # docs app only (port 3001)
pnpm --filter @repo/cdn dev           # CDN app only (port 3002)
pnpm --filter @repo/ui typecheck      # typecheck UI package
pnpm --filter @repo/ui lint           # lint UI package
pnpm --filter @repo/ui build:registry # build shadcn registry

pnpm exec prettier --write .          # format everything
```

Always run tasks from the repo root so Turborepo handles dependency ordering.

## Architecture

**pnpm + Turborepo monorepo** for the Global Mental Health Lab.

| App | Stack | Port | Purpose |
|-----|-------|------|---------|
| `apps/web` | Next.js 16 (App Router) | 3000 | Main application |
| `apps/docs` | Next.js 16 (App Router) | 3001 | Design system docs |
| `apps/cdn` | Vite 6 SPA | 3002 | Static asset delivery |

Shared packages: `@repo/ui` (component library), `packages/typescript-config`, `packages/eslint-config`.

Dependency versions are pinned in the `catalog:` section of `pnpm-workspace.yaml`. When adding or updating shared dependencies, update the catalog — not individual `package.json` files.

### `@repo/ui` — No Build Step

Apps consume raw TypeScript source via path aliases. Next.js uses `transpilePackages: ["@repo/ui"]`; Vite uses aliases. No compilation in the UI package itself.

**Import:** `import { Button, Stack, cn } from "@repo/ui"`
**CSS:** `@import "@repo/ui/index.css"` in app root CSS (required for theme tokens)

### Component Layer Hierarchy

The UI package uses a layered architecture inspired by "Every Layout":

```
lib/           Pure utilities (cn, slot) — no UI
  ↑
hooks/         Shared hooks (useIsMobile)
  ↑
layouts/       Spatial primitives — Stack, Center, Cluster, Grid, Container, Split, Cover. Shared scale in _scale.ts.
  ↑
primitives/    Headless, accessible base components (Radix/Base UI). Use cva + cn + data-slot pattern.
  ↑
composites/    Composed UI pieces — Logo, ModeToggle, ThemeProvider, ImageWithFallback, Hamburger, ProfileCard.
  ↑
blocks/        Page-ready sections (numbered: dashboard-01, login-03, etc.) + marketing blocks + navbars/footers.
  ↑
patterns/      Stateless UI recipes — PageHeader, SectionHeader, FormSection, EmptyState, FeatureCard, ProfileHeader.
  ↑
templates/     Full page shells — AppShellTemplate, AuthTemplate, MarketingTemplate, SplitTemplate, LinkInBioTemplate.
  ↑
pages/         Complete page compositions — template + blocks + patterns wired into route-ready views.
  ↑
gmh/           Domain-specific branded components (HomePage, Innovations). May use hardcoded brand colors.
```

**Each layer may only import from layers below it.** Internal cross-layer imports use relative paths.

Each layer re-exports through barrel `index.ts` files up to `ui/src/index.ts`.

### Layout Primitives

7 composable primitives based on [Every Layout](https://every-layout.dev/) by Pickering & Bell. They control **where things go** — spacing, alignment, distribution. No colors, borders, or typography.

- **Stack** — vertical flow with gap. `recursive` prop applies spacing to all descendants (for prose/CMS content).
- **Center** — horizontal centering + max-width + gutter. `intrinsic` prop centers content-width elements.
- **Cluster** — horizontal wrapping flow (tags, buttons, breadcrumbs).
- **Grid** — multi-column grid. `auto-fill`/`auto-fit` with configurable `min` column width.
- **Container** — CSS container-query context wrapper + max-width + padding.
- **Split** — two-column layout (flexbox wrapping). Columns stack when the container is too narrow.
- **Cover** — vertical centering between header/footer.

**Shared scale:** All layouts share a `Gap` type and `gapMap` from `layouts/_scale.ts`. The scale also exports `Padding`, `ContainerWidth`, `CenterMax`, `Measure`, `SectionSpacing`, and `GridMin` types.

### Route Groups (`apps/web`)

The web app uses Next.js route groups for distinct layout contexts:

- `(site)/` — GMH branded public site (homepage, innovations)
- `(marketing)/` — Marketing pages
- `(portal)/` — Portal area (root `/` landing)
- `(auth)/` — Authentication pages + layout demos
- `(app)/` — Dashboard area (Sidebar + Header)

Root layout provides ThemeProvider, TooltipProvider, Toaster, and fonts.

### Import Conventions Within `packages/ui/`

- Same-layer imports: use `./` relative paths (e.g., `import { Button } from "./button"`)
- Cross-layer imports: use `../` relative paths (e.g., `import { cn } from "../lib/cn"`)
- **Never** use absolute `src/primitives/...` paths — always `./` for same-directory, `../` for cross-layer

## Styling

**Tailwind CSS v4** — no `tailwind.config.js`. All configuration is CSS-first:

- Theme tokens: `packages/ui/src/styles/index.css` via `@theme inline`
- Dark mode: class-based (`.dark` on `<html>`) via next-themes
- Color space: oklch
- Brand: dark navy primary, gold/tan secondary
- `--radius: 0.15rem` (very tight), `--spacing: 0.25rem`

Apps must include `@source` directives in their `globals.css` pointing to both local and UI package `.tsx` files.

**Always use semantic tokens** (`bg-primary`, `text-muted-foreground`), never hardcode hex values. Exception: GMH branded components.

Use layout components (Stack, Cluster, Grid, Center, Cover, Split) for structural composition instead of raw `flex`/`grid` utilities.

## Conventions

- **Primitives** use `cva` for variants, `cn()` for className merging, `data-slot` attribute, `asChild`/`Slot.Root` pattern
- **Blocks** use numbered suffix convention: `blocks/<name>-<nn>/`
- **`"use client"`** required at file top for any component using hooks, events, or browser APIs. Default to Server Components in Next.js.
- **Unused vars** must be prefixed with `_` (strict `@typescript-eslint/no-unused-vars`)
- **Dependency versions** pinned in `pnpm-workspace.yaml` catalog — use `"catalog:"` in package.json
- **TypeScript strict mode** is on everywhere
- **Path aliases**: `@/*` → `./src/*`, `@repo/ui` → `../../packages/ui/src`
- **New components**: after adding via `npx shadcn@latest add` from `packages/ui/`, verify the file landed in the correct layer and update that layer's `index.ts` barrel export

## Figma Integration

**Figma file**: `JoFKlZFj4MXQoXxOxVqM1F` — [GMH Lab — Monorepo (Layer 1)](https://www.figma.com/design/JoFKlZFj4MXQoXxOxVqM1F)

Code Connect files live in `.figma/` directories within each UI layer. These map Figma component variants to code props.

- Config: `packages/ui/figma.config.json`
- Dependency: `@figma/code-connect` (devDependency on `@repo/ui`)

### Figma Pages

| Page | ID | Code Layer |
|------|-----|------------|
| Layouts | `0:1` | `layouts/` |
| Primitives | `9:2` | `primitives/` |
| Composites | `9:3` | `composites/` |
| Patterns | `9:4` | `patterns/` |
| Blocks | `9:5` | `blocks/` |
| Templates | `9:6` | `templates/` |
| Pages | `9:7` | `pages/` |

### Figma Variable Collections

| Collection | Type | Count | Source |
|---|---|---|---|
| **Spacing** | `FLOAT` | 25 | `_scale.ts` — Gap, Padding, Space, Section Spacing, Gutter |
| **Sizing** | `FLOAT` | 24 | `_scale.ts` — Container Width, Center Max, Measure, Grid Min, Radius |
| **Semantic Colors** | `COLOR` | 32 | `index.css` — Light + Dark modes (background, primary, secondary, muted, accent, destructive, border, ring, chart, sidebar tokens) |
| **Color Primitives** | `COLOR` | 231 | `index.css` — 21 Tailwind palettes × 11 shades |

When creating Figma components, bind properties to these variables rather than hardcoding values. Semantic Colors support mode switching (Light/Dark).

### Figma-to-Code Rules

1. Pick a **template** for the page shell
2. Use **layouts** to arrange sections — do not inline `flex`/`grid` for page structure
3. Use existing **primitives** before creating new ones
4. Use existing **patterns** where they match
5. Map colors to token system (`bg-background`, `text-muted-foreground`) — no raw hex values
6. Icons use **Lucide React** (`lucide-react`)

## Skills

Three Claude Code skills are available in this repo:

| Skill | File | Trigger |
|-------|------|---------|
| **layout-primitives** | [`SKILL.md`](SKILL.md) | Building or refactoring layout components (Stack, Cluster, Container, Grid), spacing tokens, `_scale.ts`, component taxonomy, or discussing spatial vocabulary in the design system |
| **design** | [`.claude/skills/design/skill.md`](.claude/skills/design/skill.md) | Figma-to-code translation (Figma URL provided), design review of a component, or creating a new UI component |
| **figma-sync** | [`.claude/skills/figma-sync/skill.md`](.claude/skills/figma-sync/skill.md) | Creating/auditing Figma Code Connect mappings, syncing components to/from Figma, or checking Code Connect coverage |

## Environment

- `SITE_PASSWORD`, `PASSWORD_PROTECTION_ENABLED` — global env vars (turbo.json)
- No test framework configured
- No CI/CD pipeline configured
- Prettier v3.4 with default settings (no `.prettierrc`)