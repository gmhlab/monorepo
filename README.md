# GMH Lab Monorepo

Design system and web applications for [Global Mental Health Lab](https://gwglobalmentalhealth.com).

## Quick Start

```bash
pnpm install
pnpm dev        # starts all three apps
```

Requires [pnpm](https://pnpm.io) 9.15+.

## Apps

| App | Port | Stack | Purpose |
|-----|------|-------|---------|
| `apps/web` | 3000 | Next.js 15 | GMH innovations app |
| `apps/docs` | 3001 | Next.js 15 | Design system documentation |
| `apps/cdn` | 3002 | Vite 6 | Static assets / SPA |

## Repository Structure

```
gmh-monorepo/
├── apps/
│   ├── web/                        # Next.js innovations app (:3000)
│   ├── docs/                       # Next.js design system docs (:3001)
│   └── cdn/                        # Vite SPA (:3002)
│
├── packages/
│   ├── ui/                         # Shared component library (raw TS, no build)
│   ├── typescript-config/          # Shared tsconfig presets
│   └── eslint-config/              # Shared ESLint configs
│
├── turbo.json                      # Turborepo pipeline
└── pnpm-workspace.yaml             # Workspace + version catalog
```

## UI Package (`@repo/ui`)

Raw TypeScript component library — apps compile it themselves, no build step required. Built on Tailwind v4, Radix UI, and shadcn conventions.

### Importing

```ts
import { Button, Card, ProfileCard, cn } from "@repo/ui"
```

```css
/* In your app's root CSS file */
@import "@repo/ui/index.css";
```

### Component Layers

**Primitives** (`components/ui/`) — headless, accessible base components built on Radix UI:

`Accordion` · `Avatar` · `Badge` · `Breadcrumb` · `Button` · `Card` · `Chart` · `Checkbox` · `Drawer` · `DropdownMenu` · `Field` · `Form` · `Input` · `Label` · `Select` · `Separator` · `Sheet` · `Sidebar` · `Skeleton` · `Sonner` · `Switch` · `Table` · `Tabs` · `Toggle` · `ToggleGroup` · `Tooltip`

**Blocks** (`components/blocks/`) — composed, page-ready sections:

| Block | Description |
|-------|-------------|
| `login-01/` | Login page with form |
| `profile-card/` | User profile card (avatar, name, badges, activity, teams) |
| `dashboard-01/` | Full dashboard layout with sidebar, data table, and charts |
| `design-system/` | Design system documentation viewer |
| `gmh/homepage/` | GMH Lab homepage |
| `gmh/innovations/` | Innovations index (hero, gallery, sections) |
| `gmh/innovation/` | Single innovation detail page |

**Utilities:**

```ts
cn(...classes)        // clsx + tailwind-merge
useIsMobile()         // responsive hook (< 768px)
ImageWithFallback     // image with error fallback
```

## Design System

### Tailwind v4

No `tailwind.config.js`. All theme tokens live in `packages/ui/src/styles/index.css` via `@theme inline`. Apps receive the full token set by importing the CSS.

### Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | Navy `#033C5A` | Brand primary |
| `secondary` | Gold `#AA9868` | Brand accent |
| `accent` | Blue `#0190db` | Interactive |

Full semantic token set: `background`, `foreground`, `card`, `muted`, `destructive`, `border`, `input`, `ring`, `sidebar-*`, `chart-1`–`chart-5`.

### Dark Mode

Class-based via `.dark` on `<html>`:

```js
document.documentElement.classList.toggle('dark')
```

## shadcn Registry

Custom shadcn-compatible registry published from this repo:

- **Theme:** `gmhlab-theme` — Navy + Gold with Sora / DM Mono typography
- **Block:** `profile-card`

Manifest: `packages/ui/registry.json` · Sources: `packages/ui/registry/` · Output: `packages/ui/public/r/`

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Monorepo | pnpm workspaces + Turborepo | pnpm 9.15 / Turbo 2.3 |
| Framework | Next.js / Vite | 15.1 / 6.0 |
| Language | TypeScript | 5.7 |
| UI | React | 19 |
| Styling | Tailwind CSS v4 | 4.0 |
| Components | Radix UI primitives | various |
| Variants | class-variance-authority | 0.7 |
| Icons | lucide-react + @tabler/icons-react | 0.487 / 3.37 |
| Animation | motion | 12 |
| Charts | Recharts | 2.15 |
| Tables | @tanstack/react-table | 8.21 |
| Forms | react-hook-form + zod | 7.55 / 4.x |
| DnD | @dnd-kit | 6/9/10 |

## Scripts

```bash
pnpm dev                         # Start all apps
pnpm build                       # Build all packages
pnpm lint                        # Lint everything
pnpm typecheck                   # Type check everything
pnpm clean                       # Clear Turborepo cache

pnpm --filter @repo/web dev      # Single app
pnpm --filter @repo/ui typecheck # Single package task
```

For agent/contributor workflow details, see [CLAUDE.md](./CLAUDE.md).
