# GMH Lab Monorepo

Design system and web applications for the [Global Mental Health Lab](https://gwglobalmentalhealth.com).

Built with pnpm workspaces, Turborepo, React 19, Next.js 16, Vite 6, and Tailwind CSS v4.

## Quick Start

```bash
pnpm install
pnpm dev        # starts all three apps
```

Requires [pnpm](https://pnpm.io) 9.15+ and Node.js.

## Apps

| App | Port | Stack | Purpose |
|-----|------|-------|---------|
| [`apps/web`](apps/web) | 3000 | Next.js 16 | Main GMH application — dashboard, innovations, public site |
| [`apps/docs`](apps/docs) | 3001 | Next.js 16 | Design system documentation |
| [`apps/cdn`](apps/cdn) | 3002 | Vite 6 | Static asset delivery SPA |

## Repository Structure

```
gmh-monorepo/
├── apps/
│   ├── web/                        # Next.js main app (:3000)
│   ├── docs/                       # Next.js design system docs (:3001)
│   └── cdn/                        # Vite SPA (:3002)
│
├── packages/
│   ├── ui/                         # Shared component library (raw TS, no build)
│   ├── typescript-config/          # Shared tsconfig presets
│   └── eslint-config/              # Shared ESLint flat configs
│
├── docs/                           # CDN embed snippets + pre-built assets
├── turbo.json                      # Turborepo pipeline
└── pnpm-workspace.yaml             # Workspace + version catalog
```

## UI Package (`@repo/ui`)

Raw TypeScript component library — apps compile it themselves, no build step required. Built on Tailwind v4, Radix UI, and shadcn conventions.

### Importing

```ts
import { Button, Card, ProfileCard, cn, useIsMobile } from "@repo/ui";
```

```css
/* In your app's root CSS file */
@import "@repo/ui/index.css";
```

### Component Layers

**Primitives** (`components/ui/`) — 56 headless, accessible base components built on Radix UI:

`Accordion` · `AlertDialog` · `Alert` · `AspectRatio` · `Avatar` · `Badge` · `Breadcrumb` · `Button` · `ButtonGroup` · `Calendar` · `Card` · `Carousel` · `Chart` · `Checkbox` · `Collapsible` · `Combobox` · `Command` · `ContextMenu` · `Dialog` · `Direction` · `Drawer` · `DropdownMenu` · `Empty` · `Field` · `Form` · `HoverCard` · `Input` · `InputGroup` · `InputOTP` · `Item` · `Kbd` · `Label` · `Menubar` · `NativeSelect` · `NavigationMenu` · `Pagination` · `Popover` · `Progress` · `RadioGroup` · `Resizable` · `ScrollArea` · `Select` · `Separator` · `Sheet` · `Sidebar` · `Skeleton` · `Slider` · `Sonner` · `Spinner` · `Switch` · `Table` · `Tabs` · `Textarea` · `Toggle` · `ToggleGroup` · `Tooltip`

**Blocks** (`components/blocks/`) — 15 composed, page-ready sections:

| Block | Description |
|-------|-------------|
| `dashboard-01/` | Full dashboard layout with sidebar, data table, and charts |
| `design-system-01/` | Design system documentation viewer with palettes and tokens |
| `example-01/` | Card + Form examples with AlertDialog, Combobox, DropdownMenu |
| `example-02/` | Kitchen sink page demonstrating many UI primitives |
| `example-03/` | Data dashboard with charts and data table |
| `footer-01/` | Simple footer |
| `footer-02/` | Footer with logo |
| `footer-03/` | GMH-branded footer with quick links and contact info |
| `login-03/` | Login page with form |
| `navbar-01/` | Navigation menu with mega-menu pattern |
| `navbar-02/` | Navigation with configurable data prop |
| `navbar-03/` | Navigation header variant |
| `navbar-04/` | Navigation with mode toggle and avatar |
| `navbar-05/` | GMH-branded navigation bar |
| `profile-card-01/` | User profile card (avatar, name, badges, activity, teams) |

**GMH Components** (`components/gmh/`) — domain-specific branded pages:

| Component | Description |
|-----------|-------------|
| `homepage/` | GMH Lab homepage with hero, about, news, testimonials, newsletter, map |
| `innovation/` | Single innovation detail page (EQUIP and Photovoice data included) |
| `innovations/` | Innovations index with hero, gallery, and section cards |

**Utilities:**

```ts
cn(...classes)        // clsx + tailwind-merge
useIsMobile()         // responsive hook (< 768px)
ImageWithFallback     // image with error fallback
ModeToggle            // dark/light/system theme toggle
ThemeProvider          // next-themes wrapper
Logo / LogoMark       // GMH logo SVG components
```

## Web App Routes

The main app (`apps/web`) uses Next.js App Router with four route groups:

| Route | Component | Route Group |
|-------|-----------|-------------|
| `/` | ComponentExample | `(site)` — Navbar2 + Footer2 |
| `/login` | LoginPage | `(auth)` — minimal layout |
| `/dashboard` | ComponentExample | `(app)` — Sidebar + Header |
| `/dashboard/design-system` | DesignSystem | `(app)` |
| `/dashboard/data` | Example3 | `(app)` |
| `/gmh` | HomePage | `(gmh)` — Navbar5 + Footer3 |
| `/gmh/innovations` | Innovations | `(gmh)` |
| `/gmh/innovations/equip` | Innovation (EQUIP) | `(gmh)` |
| `/gmh/innovations/photovoice` | Innovation (Photovoice) | `(gmh)` |

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

Custom shadcn-compatible registry published from this repo (51 items):

- **44 primitives** — one per `components/ui/` file
- **7 blocks** — dashboard, design-system, homepage, innovation, innovations, login, profile-card
- **1 style** — `gmhlab-theme` (Navy + Gold design tokens)

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
| Components | Radix UI + Base UI | 1.4 / 1.2 |
| Variants | class-variance-authority | — |
| Icons | lucide-react | 0.487 |
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
```

## Contributing

For detailed agent/contributor workflow, component conventions, and architectural decisions, see [CLAUDE.md](./CLAUDE.md).