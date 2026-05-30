# Global Mental Health Lab — Monorepo

This repository is a **pnpm + Turborepo** monorepo that powers the Global Mental Health Lab frontend ecosystem.

## What’s inside

- **`apps/web`** — Main Next.js application (App Router)
- **`apps/docs`** — Design system docs site (Next.js)
- **`apps/cdn`** — Static asset delivery app (Vite SPA)
- **`packages/ui`** — Shared UI library (raw TypeScript source, token-driven styling)

## Core architecture

- **Monorepo tooling:** pnpm workspaces + Turborepo
- **UI system:** layered component model (layout → primitives → composites → patterns → templates → pages)
- **Styling:** Tailwind CSS v4 + semantic design tokens from `index.css`
- **Design workflow:** Figma Code Connect mappings for component parity

## Why this repo exists

- Keep product apps and design system in sync
- Reuse a single source of truth for UI tokens/components
- Enable rapid iteration across web, docs, and branded experiences

## Quick Start

```bash
pnpm install
pnpm dev        # starts all three apps
```

Requires [pnpm](https://pnpm.io) 9.15+ and Node.js 18+.

## Apps

| App | Port | Stack | Purpose |
|-----|------|-------|---------|
| [`apps/web`](apps/web) | 3000 | Next.js 16 | Main GMH application — dashboard, public site, marketing |
| [`apps/docs`](apps/docs) | 3001 | Next.js 16 | Design system documentation |
| [`apps/cdn`](apps/cdn) | 3002 | Vite 6 | Static asset delivery SPA |

## Repository Structure

```
gmhlab_monorepo/
├── apps/
│   ├── web/                        # Next.js main app (:3000)
│   ├── docs/                       # Next.js design system docs (:3001)
│   └── cdn/                        # Vite SPA (:3002)
│
├── packages/
│   ├── ui/                         # Shared component library (raw TS, no build)
│   │   └── src/
│   │       ├── lib/               # Pure utilities (cn, slot)
│   │       ├── hooks/             # Shared hooks (useIsMobile, useMediaQuery)
│   │       ├── utils/             # Cross-family helpers (AnchorOrButton)
│   │       ├── icons/             # Icon component + 280+ Icon* SVG wrappers
│   │       ├── layout/            # Spatial primitives (Section, Grid, Flex) + legacy.tsx
│   │       ├── primitives/        # shadcn modules (lowercase) + react-aria-components drop-ins (PascalCase)
│   │       ├── data/              # App data: config, contexts, providers, hooks, services, types
│   │       ├── composites/        # Cards, Footers, Forms, Headers, Sections, Logo, ThemeProvider, …
│   │       ├── patterns/          # Stateless UI recipes (PageHeader, FormSection)
│   │       ├── templates/         # Full page shells (AppShell, Auth, Brand)
│   │       ├── pages/             # Page compositions, grouped (dashboards, examples, homepage, innovations, …)
│   │       ├── styles/            # Theme tokens and CSS
│   │       └── assets/            # Static assets
│   ├── typescript-config/          # Shared tsconfig presets
│   └── eslint-config/              # Shared ESLint flat configs
│
├── docs/                           # CDN embed snippets + pre-built assets
├── scripts/                        # Utility scripts (sync-cdn-to-docs.sh)
├── turbo.json                      # Turborepo pipeline
└── pnpm-workspace.yaml             # Workspace + version catalog
```

## UI Package (`@repo/ui`)

Raw TypeScript component library — apps compile it themselves, no build step required. Built on Tailwind v4, Radix UI, and shadcn conventions.

### Importing

```ts
import { Button, Card, Flex, cn, useIsMobile } from "@repo/ui";
```

```css
/* In your app's root CSS file */
@import "@repo/ui/index.css";
```

### Component Layers

**Primitives** (`src/primitives/`) — two component families that share the directory. Pick one family per component to avoid export collisions.

*shadcn modules* (lowercase files) — 56 headless components built on Radix UI / Base UI, using `cva` + `cn` + `data-slot`:

`Accordion` · `AlertDialog` · `Alert` · `AspectRatio` · `Avatar` · `Badge` · `Breadcrumb` · `Button` · `ButtonGroup` · `Calendar` · `Card` · `Carousel` · `Chart` · `Checkbox` · `Collapsible` · `Combobox` · `Command` · `ContextMenu` · `Dialog` · `Direction` · `Drawer` · `DropdownMenu` · `Empty` · `Field` · `Form` · `HoverCard` · `Input` · `InputGroup` · `InputOTP` · `Item` · `Kbd` · `Label` · `Menubar` · `NativeSelect` · `NavigationMenu` · `Pagination` · `Popover` · `Progress` · `RadioGroup` · `Resizable` · `ScrollArea` · `Select` · `Separator` · `Sheet` · `Sidebar` · `Skeleton` · `Slider` · `Sonner` · `Spinner` · `Switch` · `Table` · `Tabs` · `Textarea` · `Toggle` · `ToggleGroup` · `Tooltip`

*react-aria-components drop-ins* (PascalCase folders) — 28 primitives built on `react-aria-components` with colocated CSS:

`Accordion` · `Avatar` · `Button` · `Checkbox` · `Dialog` · `Fieldset` · `Icon` · `IconButton` · `Image` · `Input` · `Link` · `ListBox` · `Logo` · `Menu` · `Navigation` · `Notification` · `Pagination` · `Radio` · `Search` · `Select` · `Slider` · `Switch` · `Tab` · `Table` · `Tag` · `Text` · `Textarea` · `Tooltip`

Import siblings inside this family with explicit relative paths (e.g. `import { Text } from "../Text/Text"`) — not through the `primitives/index.ts` barrel.

**Layout** (`src/layout/`) — 3 spatial primitives:

`Section` · `Grid` · `Flex` (with `FlexItem`)

All three accept the numeric token scale `100` · `200` · `300` · `400` · `600` · `800` · `1200` · `1600` for `gap`/`padding`.

*Legacy:* `Stack` · `Cluster` · `Center` · `Container` · `Split` · `Cover` · `LegacyGrid` remain available from `layout/legacy.tsx` for backwards compatibility but should not be used in new code. (`LegacyGrid` was previously exported as `Grid`; the canonical `Grid` is now the spatial primitive from `layout/Grid/Grid`.)

**Data** (`src/data/`) — non-presentational app data consumed by pages:

`config/` (navigation, features, pricing, footer, portal) · `contexts/` + `providers/` (Auth, Pricing, Products) · `hooks/` · `services/` · `types/`. Not re-exported through the top-level barrel — imported via relative paths from `pages/`.

**Composites** (`src/composites/`) — multi-primitive widgets:

- *Grouped families:* `Cards/` (Card, PricingCard, ProductInfoCard + skeletons & adapters), `Footers/` (footer-02), `Forms/` (FormBox), `Sections/` (Heroes, Panels), `Headers/` (navbar-02)
- *Standalone:* `Logo` · `LogoMark` · `ModeToggle` · `ThemeProvider` · `ImageWithFallback` · `Hamburger` · `ProfileCard` · `brand-logo`

**Patterns** (`src/patterns/`) — stateless UI recipes:

`PageHeader` · `SectionHeader` · `FormSection` · `EmptyState` · `FeatureCard` · `ProfileHeader` · `SidebarNav`

**Templates** (`src/templates/`) — full page shells with named slots:

`AppShellTemplate` · `AuthTemplate` · `BrandTemplate`

**Pages** (`src/pages/`) — complete page compositions wired into route-ready views, grouped by kind:

`dashboards/` · `design-system/` · `examples/` (example-01–03) · `homepage/` · `innovations/` · `link-in-bios/` · `login/` · `marketing/` · `sds-demo/` · `tester/`

Notable exports: `DashboardPage` · `DesignSystem` · `LinkInBioTemplate` · `LinkInBio00–02`. The GMH-branded domain pages (`HomePage`, `Innovation`, `Innovations`, marketing) also live here — they may use hardcoded brand colors.

> The former `blocks/` and `gmh/` layers were dissolved: block sections moved into `composites/` and `pages/examples/`; GMH domain pages moved into `pages/`.

### Utilities

```ts
cn(...classes)        // clsx + tailwind-merge
useIsMobile()         // responsive hook (< 768px)
```

## Web App Routes

The main app (`apps/web`) uses Next.js App Router with five route groups:

| Route Group | Layout | Purpose |
|-------------|--------|---------|
| `(content)` | Navbar5 + Footer3 | GMH branded public site |
| `(marketing)` | Marketing layout | Marketing pages |
| `(home)` | Navbar2 + Footer2 | Portal landing page |
| `(auth)` | Minimal | Authentication, link-in-bio |
| `(app)` | Sidebar + Header | Dashboard area |

Key routes:

| Route | Route Group |
|-------|-------------|
| `/site` | `(content)` — GMH homepage |
| `/site/innovations` | `(content)` — Innovations index |
| `/site/innovations/equip` | `(content)` — EQUIP detail |
| `/site/innovations/photovoice` | `(content)` — Photovoice detail |
| `/marketing/01`, `/marketing/02` | `(marketing)` — Marketing pages |
| `/` | `(home)` — Portal landing |
| `/login` | `(auth)` — Login page |
| `/links` | `(auth)` — Link-in-bio page |
| `/dashboard` | `(app)` — Dashboard |
| `/dashboard/design-system` | `(app)` — Design system viewer |
| `/dashboard/example/01–03` | `(app)` — Example pages |
| `/dashboard/layouts/*` | `(app)` — Layout primitive demos |

## Design System

### Tailwind v4

No `tailwind.config.js`. `packages/ui/src/styles/index.css` is the single entry; it composes `tailwind.css` (`@import "tailwindcss"` + `@source` globs), `responsive.css`, `theme.css` (`@theme inline` semantic tokens + dark-mode block), `icons.css`, and `fonts.css`. Apps receive the full token set by importing `index.css`.

### Brand Colors

| Token | Approximate Value | Usage |
|-------|-------------------|-------|
| `primary` | Dark navy | Brand primary |
| `secondary` | Gold/tan | Brand accent |
| `accent` | Light gold | Interactive elements |

Full semantic token set: `background`, `foreground`, `card`, `popover`, `primary`, `secondary`, `muted`, `accent`, `destructive`, `border`, `input`, `ring`, `sidebar-*`, `chart-1`–`chart-5`.

### Typography

| Variable | Font | Source |
|----------|------|--------|
| `--font-sans` | Avenir Next | System / CSS default |
| `--font-serif` | Libre Baskerville | Google Fonts (Next.js) |
| `--font-mono` | JetBrains Mono | Google Fonts (Next.js) |

### Dark Mode

Class-based via `.dark` on `<html>`, managed by `next-themes`:

```ts
import { ModeToggle } from "@repo/ui";
// or programmatically:
const { setTheme } = useTheme();
setTheme("dark"); // "light" | "dark" | "system"
```

## shadcn Registry

Custom shadcn-compatible registry published from this repo:

- **Primitives** — one per `src/primitives/` file
- **Blocks** — dashboard, design-system, homepage, innovation, innovations, login, profile-card
- **Style** — `gmhlab-theme` (Navy + Gold design tokens)

Manifest: `packages/ui/registry.json` · Sources: `packages/ui/registry/` · Output: `packages/ui/public/r/`

```bash
pnpm --filter @repo/ui build:registry    # rebuild registry
```

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Monorepo | pnpm workspaces + Turborepo | pnpm 9.15 / Turbo 2.9 |
| Framework | Next.js / Vite | 16 / 6.0 |
| Language | TypeScript (strict) | 5.7 |
| UI | React | 19 |
| Styling | Tailwind CSS v4 | 4.0 |
| Components | Radix UI + Base UI + react-aria-components | 1.4 / 1.2 / 1.5 |
| Variants | class-variance-authority | — |
| Icons | lucide-react (+ local `Icon*` set) | 0.487 |
| Animation | motion | 12 |
| Charts | Recharts | 2.15 |
| Tables | @tanstack/react-table | 8.21 |
| Forms | react-hook-form + zod | 7.55 / 4.3 |
| Drag & Drop | @dnd-kit | 6/9/10 |
| Carousel | embla-carousel-react | 8.6 |
| Drawer | vaul | 1.1 |
| Toasts | sonner | 2.0 |
| Theme | next-themes | 0.4 |

## Scripts

```bash
# All apps
pnpm dev                             # Start all apps concurrently
pnpm build                           # Build all packages (Turborepo order)
pnpm lint                            # Lint everything
pnpm typecheck                       # Type check everything
pnpm clean                           # Clear Turborepo cache

# Single app/package
pnpm --filter @repo/web dev          # Start web app only
pnpm --filter @repo/docs dev         # Start docs app only
pnpm --filter @repo/cdn dev          # Start CDN app only
pnpm --filter @repo/ui typecheck     # Typecheck UI package
pnpm --filter @repo/ui lint          # Lint UI package
pnpm --filter @repo/ui build:registry # Build shadcn registry

pnpm exec prettier --write .          # Format everything
```

## Contributing

For detailed agent/contributor workflow, component conventions, and architectural decisions, see [CLAUDE.md](./CLAUDE.md).

## Agent & Contributor Docs

| File | Purpose |
|------|---------|
| [`AGENTS.md`](./AGENTS.md) | Commands, architecture, layer hierarchy, conventions, Figma integration, and skill index — the working reference for AI agents and contributors |
| [`SKILL.md`](./SKILL.md) | `layout-primitives` skill — spatial vocabulary, numeric gap scale, and rules for `Section` / `Grid` / `Flex` |
| [`CLAUDE.md`](./CLAUDE.md) | Entry point for Claude Code — a verbatim copy of `AGENTS.md` (some tools only read `CLAUDE.md`, so the two are kept in sync) |

## Appendix

### Suggested GitHub Repo Description (short)
Global Mental Health Lab monorepo (pnpm + Turborepo) with Next.js apps and a shared token-driven UI system built on composable layout primitives.

### Suggested “About” blurb (slightly longer)
A production-ready monorepo for the Global Mental Health Lab: multiple frontend apps (web, docs, cdn) powered by Next.js/Vite, plus a shared @repo/ui design system with semantic tokens, layered component architecture, and Figma Code Connect integration.