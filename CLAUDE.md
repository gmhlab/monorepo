# CLAUDE.md — GMH Lab Monorepo

AI assistant reference for the GMH Lab monorepo. Covers structure, commands, conventions, and patterns needed to work effectively in this codebase.

---

## Repository Overview

This is a **pnpm + Turborepo monorepo** for the [Global Mental Health Lab](https://gwglobalmentalhealth.com) design system and web applications.

```
gmh-monorepo/
├── apps/
│   ├── web/          # Next.js 16 — main GMH app (port 3000)
│   ├── docs/         # Next.js 16 — design system docs (port 3001)
│   └── cdn/          # Vite 6 SPA — static asset delivery (port 3002)
├── packages/
│   ├── ui/           # @repo/ui — shared component library (no build step)
│   ├── typescript-config/  # shared tsconfig presets
│   └── eslint-config/      # shared ESLint flat configs
├── docs/             # CDN embed snippets + pre-built assets
├── turbo.json        # Turborepo pipeline
├── pnpm-workspace.yaml  # workspace definition + version catalog
└── package.json      # root scripts, devDependencies
```

**Package manager:** pnpm 9.15+ (required)
**Node orchestration:** Turborepo 2.3
**Author:** Terrance E. Brunner

---

## Essential Commands

```bash
# Install all dependencies (run from repo root)
pnpm install

# Development — start all apps concurrently
pnpm dev

# Build everything (respects Turborepo dependency order)
pnpm build

# Type-check all packages
pnpm typecheck

# Lint all packages
pnpm lint

# Clear Turborepo cache + build artifacts
pnpm clean
```

### Scoped Commands (single package)

```bash
pnpm --filter @repo/web dev          # run only apps/web
pnpm --filter @repo/docs dev         # run only apps/docs
pnpm --filter @repo/cdn dev          # run only apps/cdn
pnpm --filter @repo/ui typecheck     # typecheck only the UI package
pnpm --filter @repo/ui lint          # lint only the UI package
```

### App Ports

| App | Filter | Port |
|-----|--------|------|
| `apps/web` | `@repo/web` | 3000 |
| `apps/docs` | `@repo/docs` | 3001 |
| `apps/cdn` | `@repo/cdn` | 3002 |

---

## Turborepo Pipeline

Defined in `turbo.json`:

| Task | Depends on | Cached | Notes |
|------|-----------|--------|-------|
| `build` | `^build` (upstream first) | yes | outputs: `dist/**`, `.next/**` |
| `dev` | — | no | persistent |
| `lint` | — | yes | |
| `typecheck` | `^typecheck` | yes | |
| `clean` | — | no | |

Always run tasks from the **repo root** to let Turborepo handle ordering.

---

## Package: `@repo/ui`

The shared component library. **No build step** — apps consume raw TypeScript source directly via path aliases; Next.js `transpilePackages` and Vite aliases handle compilation.

### Package Exports

```ts
// In package.json exports:
"." -> "./src/index.ts"       // all components + utilities
"./index.css" -> "./src/styles/index.css"  // Tailwind theme + CSS vars
```

### Importing

```ts
// Components and utilities
import { Button, Card, ProfileCard, cn, useIsMobile } from "@repo/ui";

// In app root CSS (required for theme tokens)
@import "@repo/ui/index.css";
```

### Directory Structure

```
packages/ui/src/
├── components/
│   ├── ui/              # Primitives — headless Radix-based components (56 files)
│   ├── blocks/          # Composed page-ready sections (15 block directories)
│   ├── gmh/             # GMH-specific branded components
│   │   ├── homepage/    # GMH Lab homepage
│   │   ├── innovation/  # Single innovation detail page + data
│   │   └── innovations/ # Innovations index page
│   ├── theme-provider.tsx
│   ├── mode-toggle.tsx
│   ├── image-with-fallback.tsx
│   └── index.ts         # re-exports blocks, gmh, ui, theme, mode-toggle
├── assets/
│   └── svg/             # Logo, LogoMark SVG components
├── hooks/
│   └── use-mobile.ts    # useIsMobile() hook
├── lib/
│   └── utils.ts         # cn() helper (clsx + tailwind-merge)
├── styles/
│   └── index.css        # Tailwind v4 @theme + CSS custom properties
└── index.ts             # top-level barrel export
```

### Barrel Export Chain

The top-level `src/index.ts` re-exports everything:

```ts
export * from "./components/ui"      // all primitives
export * from "./components/blocks"  // all blocks
export * from "./components"         // gmh components + theme + mode-toggle + image
export * from "./assets"             // Logo, LogoMark
export * from "./hooks"              // useIsMobile
export * from "./lib"                // cn
```

### Available Primitives (`components/ui/`)

56 files exporting accessible, headless components built on Radix UI / Base UI:

`Accordion` · `AlertDialog` · `Alert` · `AspectRatio` · `Avatar` · `Badge` · `Breadcrumb` · `Button` · `ButtonGroup` · `Calendar` · `Card` · `Carousel` · `Chart` · `Checkbox` · `Collapsible` · `Combobox` · `Command` · `ContextMenu` · `Dialog` · `Direction` · `Drawer` · `DropdownMenu` · `Empty` · `Field` · `Form` · `HoverCard` · `Input` · `InputGroup` · `InputOTP` · `Item` · `Kbd` · `Label` · `Menubar` · `NativeSelect` · `NavigationMenu` · `Pagination` · `Popover` · `Progress` · `RadioGroup` · `Resizable` · `ScrollArea` · `Select` · `Separator` · `Sheet` · `Sidebar` · `Skeleton` · `Slider` · `Sonner` · `Spinner` · `Switch` · `Table` · `Tabs` · `Textarea` · `Toggle` · `ToggleGroup` · `Tooltip`

### Available Blocks (`components/blocks/`)

Blocks use a numbered suffix convention (e.g., `dashboard-01`, `login-03`):

| Directory | Export(s) | Description |
|-----------|-----------|-------------|
| `dashboard-01/` | `Page` (default) | Full dashboard with sidebar, site header, data table, charts. Sub-components: `app-sidebar/`, `site-header.tsx`. Has `data.json`. |
| `design-system-01/` | `DesignSystem` | Design system viewer with palettes, tokens. Sub-components: `header.tsx`, `footer.tsx`, `palettes.tsx`, `tokens.tsx`. |
| `example-01/` | `ComponentExample` | Card + Form examples with AlertDialog, Combobox, DropdownMenu demos. |
| `example-02/` | `SinkPage` (default) | Kitchen sink page demonstrating many UI primitives. |
| `example-03/` | `Example3` | Data dashboard with SectionCards, ChartAreaInteractive, DataTable. Has `data.json`. |
| `footer-01/` | `Footer1` | Simple footer. |
| `footer-02/` | `Footer2` | Footer with logo sub-component. |
| `footer-03/` | `Footer3` | GMH-branded footer with globe icon, brand colors, quick links, contact info. |
| `login-03/` | `LoginPage` | Login page with form sub-component. |
| `navbar-01/` | `Navbar1` | Navigation menu with accordion, mega-menu pattern. |
| `navbar-02/` | `Navbar2` | Navigation accepting `navigationData` prop. Has logo + ModeToggle. |
| `navbar-03/` | `Header` | Navbar variant. |
| `navbar-04/` | *(no named export)* | JSX fragment navbar with mode toggle + avatar. Not wrapped in a component function. |
| `navbar-05/` | `Navbar5` | GMH-branded nav ("Center for Global Mental Health"). Links to `/gmh`, `/gmh/innovations`. Has ModeToggle. |
| `profile-card-01/` | `ProfileCard` | User profile card (avatar, name, badges, activity, teams). |

### GMH Components (`components/gmh/`)

These are branded, domain-specific components separate from the generic block system:

| Component | Export | Description |
|-----------|--------|-------------|
| `gmh/homepage/homepage.tsx` | `HomePage` | Self-contained GMH homepage with hardcoded brand colors (`#0a2240` navy, `#c9a227` gold). Sections: Hero, WhoWeAre, WhatWeDo, LatestNews, Testimonial, Newsletter, Map. |
| `gmh/innovation/innovation.tsx` | `Innovation`, `equipData`, `photovoiceData` | Single innovation detail page accepting `InnovationData` prop. Sub-components: hero, what-is-it, partner-marquee, how-to, testing, user-story, get-it, cta-button, nav-footer. Data files in `equip/data.tsx` and `photovoice/data.tsx`. |
| `gmh/innovations/innovations.tsx` | `Innovations` | Innovations index with hero + section + card components and decorative gradients. |

### Utilities

```ts
cn(...classes)        // clsx + tailwind-merge (src/lib/utils.ts)
useIsMobile()         // responsive hook, true when < 768px (src/hooks/use-mobile.ts)
ImageWithFallback     // <img> with error fallback SVG placeholder
ModeToggle            // dark/light/system theme toggle dropdown
ThemeProvider          // wraps next-themes ThemeProvider
Logo                  // circular GMH logo SVG component
LogoMark              // detailed GMH logo mark SVG component
```

---

## Styling: Tailwind CSS v4

**No `tailwind.config.js`**. All configuration is CSS-first:

- Theme tokens live in `packages/ui/src/styles/index.css` via `@theme inline`
- Apps source component files via `@source` directives in their `globals.css`
- Dark mode is class-based (`.dark` on `<html>`) via `@custom-variant dark (&:is(.dark *))`

### App globals.css Pattern

```css
@import "tailwindcss";
@import "@repo/ui/index.css";

@source "../**/*.tsx";
@source "../../../../packages/ui/src/**/*.tsx";
```

### Brand Tokens

Light mode `:root` values (oklch color space):

| Token | Approximate Color | Usage |
|-------|-------------------|-------|
| `--primary` | Dark navy | Brand primary |
| `--secondary` | Gold/tan | Brand accent |
| `--accent` | Light gold | Interactive elements |
| `--background` | Light blue-gray `hsl(201, 50%, 94%)` | Page background |
| `--sidebar` | Dark navy | Sidebar background |

Dark mode: `--background` becomes `#00273c` (very dark navy), `--primary` flips to gold.

Full semantic token set: `background`, `foreground`, `card`, `popover`, `primary`, `secondary`, `muted`, `accent`, `destructive`, `border`, `input`, `ring`, `sidebar-*` (8 variants), `chart-1`–`chart-5`.

### Typography

CSS defaults (in `index.css`):
- `--font-sans`: `'Avenir Next'`, ui-sans-serif, sans-serif, system-ui
- `--font-serif`: `'Hoefler Text'`, ui-serif, serif
- `--font-mono`: `JetBrains Mono`, monospace

Next.js apps load Google Fonts and override via CSS variables:
- `--font-mono`: JetBrains Mono (Google Fonts)
- `--font-serif`: Libre Baskerville (Google Fonts, weights 400/700)
- Inter is loaded but currently only assigned to `--font-sans-inter` (not applied to body)

### Custom Shadow System

Directional shadows with `-1px` x-offset and `6.5px` y-offset. Shadow color is `hsl(202, 53%, 10%)` in light mode, `hsl(0, 0%, 0%)` in dark mode.

### Other Theme Properties

- `--radius`: `0.15rem` (very tight border-radius)
- `--tracking-normal`: `0.02em` (slightly expanded letter-spacing)
- `--spacing`: `0.25rem`

### Dark Mode Toggle

```ts
// Via next-themes hook:
const { theme, setTheme } = useTheme();
setTheme("dark"); // "light" | "dark" | "system"

// Via ModeToggle component:
import { ModeToggle } from "@repo/ui";
```

---

## TypeScript Configuration

Shared presets in `packages/typescript-config/`:

| Preset | Used by | Notes |
|--------|---------|-------|
| `base.json` | all | strict, ES2022, bundler resolution, `verbatimModuleSyntax`, `isolatedModules`, `noEmit` |
| `nextjs.json` | Next.js apps | extends base, `jsx: preserve`, Next.js plugin, `allowJs` |

| `react-library.json` | `@repo/ui` | extends base, `jsx: react-jsx` |
| `vite.json` | Vite apps | extends base, `jsx: react-jsx` |

All apps use `paths` aliases:
- `@/*` → `./src/*`
- `@repo/ui` → `../../packages/ui/src`
- `@repo/ui/*` → `../../packages/ui/src/*`

**Strict mode is on.** All `@typescript-eslint/no-unused-vars` errors must be fixed; prefix unused params with `_`.

---

## ESLint Configuration

Shared flat configs in `packages/eslint-config/`:

| Export | Used by |
|--------|---------|
| `@repo/eslint-config/base` | base TypeScript rules |
| `@repo/eslint-config/nextjs` | Next.js apps (`apps/web`, `apps/docs`) |
| `@repo/eslint-config/vite` | Vite apps (`apps/cdn`, `packages/ui`) |

Each app extends with a single line:

```js
// eslint.config.mjs
import config from "@repo/eslint-config/nextjs";
export default config;
```

Rules enforced: `@eslint/js` recommended, `@typescript-eslint/recommended`, `eslint-plugin-react` (version detect), `eslint-plugin-react-hooks`. `@typescript-eslint/no-unused-vars` is an error with `^_` prefix escape pattern.

Ignored paths: `dist/`, `.next/`, `node_modules/`, `.turbo/`.

---

## App Architecture

### `apps/web` — Next.js 16 (App Router)

Main GMH application. Uses **route groups** for distinct layout contexts:

```
src/app/
├── layout.tsx                    # Root: ThemeProvider (next-themes), TooltipProvider, Toaster
│                                 # Fonts: Libre Baskerville + JetBrains Mono on <body>
│                                 # Metadata: "GMH Lab Studio"
├── globals.css                   # Tailwind + @repo/ui/index.css + @source directives
│
├── (site)/                       # Public marketing site
│   ├── layout.tsx                # Navbar2 + Footer2 wrapper
│   └── page.tsx                  # / → ComponentExample
│
├── (auth)/                       # Authentication
│   ├── layout.tsx                # Passthrough layout ({children})
│   └── login/
│       └── page.tsx              # /login → LoginPage
│
├── (app)/                        # Dashboard / app area
│   ├── layout.tsx                # SidebarProvider + AppSidebar + SiteHeader
│   └── dashboard/
│       ├── page.tsx              # /dashboard → ComponentExample
│       ├── design-system/
│       │   └── page.tsx          # /dashboard/design-system → DesignSystem
│       └── data/
│           └── page.tsx          # /dashboard/data → Example3
│
└── (gmh)/                        # GMH branded public site
    ├── layout.tsx                # Navbar5 + Footer3 wrapper
    └── gmh/
        ├── page.tsx              # /gmh → HomePage
        └── innovations/
            ├── page.tsx          # /gmh/innovations → Innovations
            ├── equip/
            │   └── page.tsx      # /gmh/innovations/equip → Innovation (equipData)
            └── photovoice/
                └── page.tsx      # /gmh/innovations/photovoice → Innovation (photovoiceData)
```

Config: `next.config.ts` sets `transpilePackages: ["@repo/ui"]`.

### `apps/docs` — Next.js 16 (App Router)

Design system documentation. Currently minimal:

```
src/app/
├── layout.tsx    # Root layout: Inter + JetBrains_Mono + Libre_Baskerville
│                 # ThemeProvider, TooltipProvider, Toaster
│                 # Metadata: "GMH Lab Studio"
└── page.tsx      # / → LoginPage
```

### `apps/cdn` — Vite 6

Static SPA for CDN delivery. Currently minimal:

```
src/
├── main.tsx       # React root → <h1>Hello!</h1> inside TooltipProvider
├── App.tsx        # Empty file
└── globals.css    # Tailwind + @repo/ui styles
```

Vite config uses `react()` + `tailwindcss()` plugins with path aliases (`@/` → `./src`, `@repo/ui` → `../../packages/ui/src`).

Public assets: `mon_logo.svg`, `teb_logo.png`.

---

## Component Conventions

### Primitives (`packages/ui/src/components/ui/`)

- Built on **Radix UI** (`radix-ui`) / **Base UI** (`@base-ui/react`) primitives for accessibility
- Use **`class-variance-authority` (cva)** for variant management
- Use **`cn()`** for className merging (clsx + tailwind-merge)
- Use **`Slot.Root`** from `radix-ui` for `asChild` prop pattern
- Add `data-slot="<component-name>"` attribute for styling hooks
- Support `asChild` pattern for polymorphic rendering
- Add `"use client"` directive when using hooks, event handlers, or browser APIs

Example pattern:

```tsx
const buttonVariants = cva("base-classes", {
  variants: { variant: { default: "...", outline: "..." }, size: { ... } },
  defaultVariants: { variant: "default", size: "default" },
})

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot.Root : "button"
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
}
```

### Blocks (`packages/ui/src/components/blocks/`)

- One folder per block with numbered suffix: `blocks/<name>-<nn>/<name>.tsx`
- Internal sub-components in `blocks/<name>-<nn>/components/`
- Static data in `blocks/<name>-<nn>/data.json` where appropriate
- Export named components from the block file, re-export from `blocks/index.ts`
- Add `"use client"` directive when using hooks, event handlers, or browser APIs

### GMH Components (`packages/ui/src/components/gmh/`)

- Domain-specific branded components for the GMH Lab website
- May use hardcoded brand colors (exception to the design token rule)
- Data files co-located in subdirectories (e.g., `innovation/equip/data.tsx`)
- Exported from `components/index.ts` (not `blocks/index.ts`)

### Client vs Server Components

- Default to **Server Components** in Next.js apps
- Add `"use client"` at the top of the file (not the component) when needed
- All components in `@repo/ui` that use hooks or interactivity need `"use client"`

---

## shadcn Registry

Custom shadcn-compatible registry published from `@repo/ui`:

- **Manifest:** `packages/ui/registry.json`
- **Sources:** `packages/ui/registry/new-york/`
- **Built output:** `packages/ui/public/r/` (66 JSON files)
- **Build script:** `packages/ui/scripts/build-registry.mjs`

Registered items (51 total):
- **44 primitives** (type: `registry:ui`) — one per `components/ui/` file
- **7 blocks** (type: `registry:block`) — dashboard, design-system, homepage, innovation, innovations, login, profile-card
- **1 style** (type: `registry:style`) — `gmhlab-theme` (Navy + Gold design tokens)

Build the registry:
```bash
pnpm --filter @repo/ui build:registry
```

---

## Version Catalog

All shared dependency versions are pinned in `pnpm-workspace.yaml` under `catalog:`. Reference catalog versions in `package.json` with `catalog:` instead of a version string:

```json
"react": "catalog:",
"typescript": "catalog:",
"tailwindcss": "catalog:"
```

Key versions: React 19, Next.js 16, Vite 6, TypeScript 5.7, Tailwind 4.0, Radix UI 1.4, lucide-react 0.487, motion 12, recharts 2.15, react-hook-form 7.55, zod 4.3.

---

## Key Dependencies (`@repo/ui`)

| Category | Packages |
|----------|----------|
| Component primitives | `radix-ui` 1.4, `@base-ui/react` 1.2 |
| Variants | `class-variance-authority`, `clsx`, `tailwind-merge` |
| Drag & drop | `@dnd-kit/core` 6.3, `@dnd-kit/sortable` 10.0 |
| Data table | `@tanstack/react-table` 8.21 |
| Charts | `recharts` 2.15 |
| Forms | `react-hook-form` 7.55, `zod` 4.3 |
| Animation | `motion` 12 |
| Date picker | `react-day-picker` 9.13, `date-fns` 4.1 |
| Carousel | `embla-carousel-react` 8.6 |
| Command palette | `cmdk` 1.1 |
| Drawer | `vaul` 1.1 |
| Toasts | `sonner` 2.0 |
| Theme | `next-themes` 0.4 |
| Icons | `lucide-react` 0.487 |

---

## Common Patterns

### Adding a New Primitive Component

1. Create `packages/ui/src/components/ui/<name>.tsx`
2. Follow the cva + cn + data-slot pattern
3. Export from `packages/ui/src/components/ui/index.ts`
4. The component is automatically available via `@repo/ui`

### Adding a New Block

1. Create `packages/ui/src/components/blocks/<name>-<nn>/` directory
2. Create the main component file (e.g., `<name>.tsx` or `page.tsx`) with a named export
3. Add sub-components in `components/` subdirectory if needed
4. Export from `packages/ui/src/components/blocks/index.ts`
5. The block is automatically available via `@repo/ui`

### Adding a New Next.js Route

1. Create `apps/<app>/src/app/(<group>)/<route>/page.tsx`
2. Import and render the relevant block or component from `@repo/ui`
3. Add `"use client"` only if the page itself needs client-side state
4. Ensure the route group layout provides the correct navigation/footer

### Using Theme Tokens in Components

Always use semantic CSS variables — never hardcode hex values:

```tsx
// Correct
<div className="bg-primary text-primary-foreground" />
<div className="bg-sidebar text-sidebar-foreground" />

// Avoid
<div style={{ background: "#033C5A" }} />
```

Exception: `HomePage` and other GMH components may use hardcoded brand colors as isolated branded components.

---

## No Test Setup

There is currently no test framework configured in this repository. No `jest`, `vitest`, or `playwright` setup exists. Do not attempt to run tests.

---

## No CI/CD

No `.github/workflows/` directory exists. There is no automated CI pipeline configured.

---

## Formatting

**Prettier** is configured as a root devDependency (v3.4). Default Prettier settings apply (no `.prettierrc`). Run formatting via:

```bash
pnpm exec prettier --write .
```

Ignored paths (`.prettierignore`): `node_modules/`, `dist/`, `.next/`, `pnpm-lock.yaml`.

---

## Editor Configuration

VS Code settings in `.vscode/settings.json`:
- Ignores CSS unknown at-rules (for Tailwind v4 `@theme`, `@source`, etc.)
- Excludes `.next/` from file watcher and search