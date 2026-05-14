# Global Mental Health Lab — Monorepo

This repository is a **pnpm + Turborepo** monorepo that powers the Global Mental Health Lab frontend ecosystem.

## What’s inside

- **`apps/web`** — Main Next.js application (App Router)
- **`apps/docs`** — Design system docs site (Next.js)
- **`apps/cdn`** — Static asset delivery app (Vite SPA)
- **`packages/ui`** — Shared UI library (raw TypeScript source, token-driven styling)

## Core architecture

- **Monorepo tooling:** pnpm workspaces + Turborepo
- **UI system:** layered component model (layouts → primitives → composites → blocks → templates/pages)
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
│   │       ├── layouts/           # Spatial primitives (Section, Grid, Flex) + legacy.tsx
│   │       ├── primitives/        # shadcn modules (lowercase) + react-aria-components drop-ins (PascalCase)
│   │       ├── composites/        # Cards, Footers, Forms, Sections, Headers, Logo, ThemeProvider, …
│   │       ├── blocks/            # Page-ready sections (navbars, footers, marketing)
│   │       ├── patterns/          # Stateless UI recipes (PageHeader, FormSection)
│   │       ├── templates/         # Full page shells (AppShell, Auth, Marketing, Split)
│   │       ├── pages/             # Complete page compositions (Dashboard, DesignSystem, LinkInBio)
│   │       ├── gmh/               # Domain-specific branded components
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

**Layouts** (`src/layouts/`) — 3 spatial primitives:

`Section` · `Grid` · `Flex` (with `FlexItem`)

All three accept the numeric token scale `100` · `200` · `300` · `400` · `600` · `800` · `1200` · `1600` for `gap`/`padding`.

*Legacy:* `Stack` · `Cluster` · `Center` · `Container` · `Split` · `Cover` remain available from `layouts/legacy.tsx` for backwards compatibility but should not be used in new code.

**Blocks** (`src/blocks/`) — page-ready composed sections:

| Block | Description |
|-------|-------------|
| `marketing/` | MarketingNav, MarketingHero, MarketingFeatures, MarketingPricing, MarketingCTA, MarketingFooter |
| `portal-nav` | Portal navigation component |
| `brand-logo` | Brand logo block |
| `navbar-02` | Navigation with configurable data prop |
| `navbar-05` | GMH-branded navigation bar |
| `footer-02` | Footer with logo |
| `footer-03` | GMH-branded footer with quick links and contact info |
| `header` | Shared header block |
| `footer` | Shared footer block |
| `example-01/` | Card + Form examples with AlertDialog, Combobox, DropdownMenu |
| `example-02/` | Kitchen sink page demonstrating many UI primitives |
| `example-03/` | Data dashboard with charts and data table |
| `login-03` | Login page with form |

**Patterns** (`src/patterns/`) — stateless UI recipes:

`PageHeader` · `SectionHeader` · `FormSection` · `EmptyState` · `FeatureCard` · `ProfileHeader`

**Templates** (`src/templates/`) — full page shells with named slots:

`AppShellTemplate` · `AuthTemplate` · `MarketingTemplate` · `SplitTemplate`

**Pages** (`src/pages/`) — complete page compositions wired into route-ready views:

`DashboardPage` · `DesignSystemPage` · `LinkInBioTemplate`

**Composites** (`src/composites/`) — multi-primitive widgets:

- *Grouped families:* `Cards/` (Card, PricingCard, ProductInfoCard + skeletons & adapters), `Footers/`, `Forms/` (FormBox), `Sections/` (Hero, Panel), `Headers/`
- *Standalone:* `Logo` · `LogoMark` · `ModeToggle` · `ThemeProvider` · `ImageWithFallback` · `Hamburger` · `ProfileCard`

**GMH** (`src/gmh/`) — domain-specific branded pages:

`HomePage` · `Innovation` · `Innovations`

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
| `(auth)` | Minimal | Authentication, layout demos, link-in-bio |
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
| `/layouts/*` | `(auth)` — Layout primitive demos |
| `/dashboard` | `(app)` — Dashboard |
| `/dashboard/design-system` | `(app)` — Design system viewer |
| `/dashboard/example/01–03` | `(app)` — Example pages |
| `/dashboard/layouts/*` | `(app)` — Layout primitive demos |

## Design System

### Tailwind v4

No `tailwind.config.js`. All theme tokens live in `packages/ui/src/styles/index.css` via `@theme inline`. Apps receive the full token set by importing the CSS.

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
| Monorepo | pnpm workspaces + Turborepo | pnpm 9.15 / Turbo 2.3 |
| Framework | Next.js / Vite | 16 / 6.0 |
| Language | TypeScript (strict) | 5.7 |
| UI | React | 19 |
| Styling | Tailwind CSS v4 | 4.0 |
| Components | Radix UI + Base UI + react-aria-components | 1.4 / 1.2 / 1.17 |
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
| [`CLAUDE.md`](./CLAUDE.md) | Entry point for Claude Code; pulls in `AGENTS.md` and `SKILL.md` via `@` imports |

## Appendix

### Suggested GitHub Repo Description (short)
Global Mental Health Lab monorepo (pnpm + Turborepo) with Next.js apps and a shared token-driven UI system built on composable layout primitives.

### Suggested “About” blurb (slightly longer)
A production-ready monorepo for the Global Mental Health Lab: multiple frontend apps (web, docs, cdn) powered by Next.js/Vite, plus a shared @repo/ui design system with semantic tokens, layered component architecture, and Figma Code Connect integration.