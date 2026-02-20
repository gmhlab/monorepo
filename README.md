# GMH Lab Monorepo

Design system and web applications for [Global Mental Health Lab](https://gwglobalmentalhealth.com).

## Apps

| App | Port | Stack | Purpose |
|-----|------|-------|---------|
| `apps/web` | 3000 | Next.js 15 | GMH innovations app |
| `apps/docs` | 3001 | Next.js 15 | Design system documentation |
| `apps/cdn` | 3002 | Vite 6 | Static assets / SPA |

## Quick Start

```bash
pnpm install
pnpm dev        # starts all three apps
```

Requires [pnpm](https://pnpm.io) 9.15+.

## Repository Structure

```
gmh-monorepo/
├── apps/
│   ├── web/                        # Next.js innovations app (:3000)
│   │   └── src/app/
│   │       ├── page.tsx            #   / → LoginForm
│   │       ├── login/page.tsx      #   /login → LoginForm + ProfileCard
│   │       └── innovations/
│   │           ├── page.tsx        #   /innovations
│   │           ├── equip/          #   /innovations/equip
│   │           └── photovoice/     #   /innovations/photovoice
│   ├── docs/                       # Next.js design system docs (:3001)
│   │   └── src/app/page.tsx        #   / → ProfileCard
│   └── cdn/                        # Vite SPA (:3002)
│       └── src/App.tsx             #   / → Innovation
│
├── packages/
│   ├── ui/                         # Shared component library (no build step)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── ui/             #   Primitives
│   │   │   │   ├── blocks/         #   Composed components
│   │   │   │   └── *.tsx           #   GMH page + DS demo components
│   │   │   ├── lib/utils.ts        #   cn() — clsx + tailwind-merge
│   │   │   ├── styles/index.css    #   Tailwind v4 config + design tokens
│   │   │   └── index.ts            #   Barrel exports
│   │   ├── registry/               # shadcn registry sources
│   │   ├── public/r/               # Compiled registry output
│   │   ├── components.json         # shadcn config
│   │   └── registry.json           # Registry manifest
│   ├── typescript-config/          # Shared tsconfig presets
│   └── eslint-config/              # Shared ESLint configs
│
├── turbo.json                      # Turborepo pipeline
└── pnpm-workspace.yaml             # Workspace + version catalog
```

## UI Package

`@repo/ui` is a raw TypeScript component library — apps compile it themselves (no build step). Built on Tailwind v4, Radix UI, and shadcn conventions.

### Importing

```ts
import { Button, Card, ProfileCard, cn } from "@repo/ui"
```

```css
/* In your app's root CSS file */
@import "@repo/ui/index.css";
```

### Component Layers

**Primitives** (`components/ui/`) — accessible base components:

| Component | Exports |
|-----------|---------|
| `Accordion` | `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent` |
| `Avatar` | `Avatar`, `AvatarImage`, `AvatarFallback` |
| `Badge` | `Badge`, `badgeVariants` |
| `Button` | `Button`, `buttonVariants` (variants: default, secondary, outline, ghost, destructive, link; sizes: default, sm, lg, icon; supports `asChild`) |
| `Card` | `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` |
| `Field` | `Field` (label + description + error) |
| `Form` | Form utilities via react-hook-form |
| `Input` | `Input` |
| `Label` | `Label` |
| `Separator` | `Separator` |
| `Switch` | `Switch` |
| `Tabs` | `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` |

**Blocks** (`components/blocks/`) — composed, page-ready sections:

| Export | File | Description |
|--------|------|-------------|
| `Header` | `header-01.tsx` | Site header with navigation |
| `Footer` | `footer-01.tsx` | Site footer |
| `LoginForm` | `login-01.tsx` | Login form |
| `ProfileCard` | `profile-card.tsx` | User profile card (avatar, name, badges, activity, teams) |
| `CardsCreateAccount` | `create-acct-01.tsx` | Account creation form |
| `ImageWithFallback` | `image-with-fallback.tsx` | Image with error fallback |

**Page Components** (`components/`) — full GMH feature components:

| Export | Description |
|--------|-------------|
| `GWMentalHealthPage` | Main homepage |
| `Innovations`, `InnovationsHero`, `InnovationCard`, `InnovationsSection` | Innovations index page |
| `Innovation`, `InnovationHeader`, `WhatIsItSection`, `GetItSection`, `HowToUseSection`, `TestingSection`, `UserStorySection`, `NavigationFooter` | Single innovation detail |
| `DesignSystem`, `DesignTokens`, `TailwindColorPalettes` | Design system docs |

**Utility:**
```ts
cn(...classes)  // clsx + tailwind-merge
```

## Design System

### Tailwind v4

No `tailwind.config.js`. All theme tokens live in `packages/ui/src/styles/index.css` via `@theme inline`. Apps receive tokens by importing the CSS.

### Color Tokens

Used as Tailwind utilities — `bg-primary`, `text-muted-foreground`, `border-border`, etc.:

| Token | Light mode | Dark mode |
|-------|-----------|-----------|
| `background` / `foreground` | `#ffffff` / near-black | inverted |
| `primary` / `primary-foreground` | Gold `#aa9868` | adjusted |
| `secondary` / `secondary-foreground` | Blue `#adc9d8` | adjusted |
| `accent` | `#0190db` | adjusted |
| `muted` / `muted-foreground` | `#ececf0` / `#717182` | inverted |
| `destructive` | `#d4183d` | `red-900` |
| `border` / `input` / `ring` | `#aa9868` / neutral | neutral |
| `chart-1` – `chart-5` | Recharts palette | inverted |
| `sidebar-*` | Sidebar-specific | inverted |

Full Tailwind color scale also available as CSS vars (`--blue-500`, `--neutral-900`, etc.).

### Dark Mode

Class-based via `.dark` on `<html>`:

```js
document.documentElement.classList.toggle('dark')
```

### Shadows & Radius

- **Shadows:** `shadow-2xs` → `shadow-2xl` (plus `inset-shadow-*` and `drop-shadow-*` variants)
- **Radius:** `rounded-sm/md/lg/xl` computed from base `--radius: 0.625rem`

## shadcn Registry

Custom shadcn-compatible registry published from this repo:

- **Theme:** `gmhlab-theme` — Navy `#033C5A` + Gold `#AA9868`
- **Block:** `profile-card` — avatar, name, badges, activity, teams

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
| Icons | lucide-react | 0.487 |
| Animation | motion (Framer Motion) | 12 |
| Charts | Recharts | 2.15 |
| Forms | react-hook-form | 7.55 |
| Linting | ESLint 9 + typescript-eslint | 9.17 |

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

For agent/contributor workflow guidance, see [CLAUDE.md](./CLAUDE.md).
