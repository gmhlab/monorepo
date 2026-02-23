# CLAUDE.md — GMH Lab Monorepo

AI assistant reference for the GMH Lab monorepo. Covers structure, commands, conventions, and patterns needed to work effectively in this codebase.

---

## Repository Overview

This is a **pnpm + Turborepo monorepo** for the [Global Mental Health Lab](https://gwglobalmentalhealth.com) design system and web applications.

```
gmh-monorepo/
├── apps/
│   ├── web/          # Next.js 15 — main GMH innovations app (port 3000)
│   ├── docs/         # Next.js 15 — design system documentation (port 3001)
│   └── cdn/          # Vite 6 SPA — static asset delivery (port 3002)
├── packages/
│   ├── ui/           # @repo/ui — shared component library (no build step)
│   ├── typescript-config/  # shared tsconfig presets
│   └── eslint-config/      # shared ESLint flat configs
├── turbo.json        # Turborepo pipeline
├── pnpm-workspace.yaml  # workspace definition + version catalog
└── package.json      # root scripts, devDependencies
```

**Package manager:** pnpm 9.15+ (required)
**Node orchestration:** Turborepo 2.3

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

### App ports

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

The shared component library. **No build step** — apps consume raw TypeScript source directly via path aliases; Turborepo's `transpilePackages` / Vite alias handles compilation.

### Package exports

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

### Directory structure

```
packages/ui/src/
├── components/
│   ├── ui/              # Primitives — headless Radix-based components
│   ├── blocks/          # Composed page-ready sections
│   │   ├── dashboard/
│   │   ├── design-system/
│   │   ├── homepage/
│   │   ├── innovation/
│   │   ├── innovations/
│   │   ├── login/
│   │   └── profile-card/
│   ├── theme-provider.tsx
│   ├── providers.tsx
│   ├── preview.tsx
│   └── image-with-fallback.tsx
├── hooks/
│   └── use-mobile.ts
├── lib/
│   └── utils.ts         # cn() helper
├── styles/
│   └── index.css        # Tailwind v4 @theme + CSS custom properties
└── index.ts             # barrel export
```

### Available primitives (`components/ui/`)

`Accordion` · `AlertDialog` · `Alert` · `AspectRatio` · `Avatar` · `Badge` · `Breadcrumb` · `Button` · `ButtonGroup` · `Calendar` · `Card` · `Carousel` · `Chart` · `Checkbox` · `Collapsible` · `Combobox` · `Command` · `ContextMenu` · `Dialog` · `Drawer` · `DropdownMenu` · `Empty` · `Field` · `Form` · `HoverCard` · `Input` · `InputGroup` · `InputOTP` · `Item` · `Kbd` · `Label` · `Menubar` · `NativeSelect` · `NavigationMenu` · `Pagination` · `Popover` · `Progress` · `RadioGroup` · `Resizable` · `ScrollArea` · `Select` · `Separator` · `Sheet` · `Sidebar` · `Skeleton` · `Slider` · `Sonner` · `Spinner` · `Switch` · `Table` · `Tabs` · `Textarea` · `Toggle` · `ToggleGroup` · `Tooltip`

### Available blocks (`components/blocks/`)

| Export | Description |
|--------|-------------|
| `DashboardPage`, `DashboardLayout` | Full dashboard with sidebar, data table, charts |
| `DesignSystem`, `Primitives` | Design system documentation viewer |
| `Homepage` | GMH Lab homepage |
| `Innovations` | Innovations index (hero, gallery, sections) |
| `Innovation` | Single innovation detail page |
| `Login` | Login form |
| `ProfileCard` | User profile card (avatar, name, badges, activity, teams) |

### Utilities

```ts
cn(...classes)      // clsx + tailwind-merge (src/lib/utils.ts)
useIsMobile()       // responsive hook, returns true when < 768px
ImageWithFallback   // <img> with error fallback
ThemeProvider       // custom theme context (light/dark/system)
useTheme()          // access theme context
```

---

## Styling: Tailwind CSS v4

**No `tailwind.config.js`**. All configuration is CSS-first:

- Theme tokens live in `packages/ui/src/styles/index.css` via `@theme inline`
- Apps source component files via `@source` directives in their `globals.css`
- Dark mode is class-based (`.dark` on `<html>`) via `@custom-variant dark (&:is(.dark *))`

### App globals.css pattern

```css
@import "tailwindcss";
@import "@repo/ui/index.css";

@source "../**/*.tsx";
@source "../../../../packages/ui/src/**/*.tsx";
```

### Brand tokens

| Token | Hex | Usage |
|-------|-----|-------|
| `--primary` (navy) | `#033C5A` | Brand primary |
| `--secondary` (gold) | `#AA9868` | Brand accent |
| `--sidebar` | dark navy | Sidebar background |

Semantic token names: `background`, `foreground`, `card`, `muted`, `accent`, `destructive`, `border`, `input`, `ring`, `sidebar-*`, `chart-1`–`chart-5`.

Typography: `--font-sans` = Afacad Flux · `--font-serif` = Libre Baskerville · `--font-mono` = JetBrains Mono

### Dark mode toggle

```ts
// ThemeProvider handles this automatically
// To toggle programmatically:
document.documentElement.classList.toggle('dark');

// Via hook:
const { theme, setTheme } = useTheme();
setTheme("dark"); // "light" | "dark" | "system"
```

---

## TypeScript Configuration

Shared presets in `packages/typescript-config/`:

| Preset | Used by | Notes |
|--------|---------|-------|
| `base.json` | all | strict, ES2022, bundler resolution, `verbatimModuleSyntax` |
| `nextjs.json` | Next.js apps | extends base, `jsx: preserve`, Next.js plugin |
| `react-library.json` | `@repo/ui` | extends base, `jsx: react-jsx` |
| `vite.json` | Vite apps | extends base |

All apps use `paths` aliases for `@/*` → `./src/*` and resolve `@repo/ui` to the local package source.

**Strict mode is on.** All `@typescript-eslint/no-unused-vars` errors must be fixed; prefix unused params with `_`.

---

## ESLint Configuration

Shared flat configs in `packages/eslint-config/`:

| Export | Used by |
|--------|---------|
| `@repo/eslint-config/base` | base TypeScript rules |
| `@repo/eslint-config/nextjs` | Next.js apps |
| `@repo/eslint-config/vite` | Vite apps |

Each app extends with a single line:

```js
// eslint.config.mjs
import config from "@repo/eslint-config/nextjs";
export default config;
```

Rules enforced: `@typescript-eslint/recommended`, React hooks rules, unused-vars as error with `_` prefix escape.

---

## App Architecture

### `apps/web` — Next.js 15 (App Router)

Main GMH innovations application. Routes:

```
src/app/
├── layout.tsx              # root layout — ThemeProvider + TooltipProvider
├── page.tsx                # / → Login component
├── globals.css             # Tailwind imports + @source directives
├── dashboard/page.tsx      # /dashboard
├── homepage/page.tsx       # /homepage
├── innovations/
│   ├── page.tsx            # /innovations
│   ├── equip/page.tsx      # /innovations/equip
│   └── photovoice/page.tsx # /innovations/photovoice
└── preview/page.tsx        # /preview — component playground
```

Config: `next.config.ts` sets `transpilePackages: ["@repo/ui"]` so Next.js compiles the raw TS package.

Path aliases: `@/*` → `./src/*`, `@repo/ui` → `../../packages/ui/src`.

### `apps/docs` — Next.js 15 (App Router)

Design system documentation. Routes:

```
src/app/
├── layout.tsx
├── page.tsx                # / → Login
├── dashboard/page.tsx
├── design-system/page.tsx  # design system viewer
└── primitives/page.tsx     # primitives showcase
```

### `apps/cdn` — Vite 6

Static SPA for CDN delivery. Entry: `src/App.tsx` — currently renders `Innovation` component directly.

Vite config uses path aliases: `@/` → `./src`, `@repo/ui` → `../../packages/ui/src` (no transpilePackages needed — Vite handles ESM natively).

---

## Component Conventions

### Primitives (`packages/ui/src/components/ui/`)

- Built on **Radix UI** / **Base UI** primitives for accessibility
- Use **`class-variance-authority` (cva)** for variant management
- Use **`cn()`** for className merging (clsx + tailwind-merge)
- Use **`Slot.Root`** from `radix-ui` for `asChild` prop pattern
- Add `data-slot="<component-name>"` attribute for styling hooks
- Support `asChild` pattern for polymorphic rendering

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

- One folder per block: `blocks/<name>/<name>.tsx`
- Internal sub-components in `blocks/<name>/components/`
- Static data in `blocks/<name>/data.json` where appropriate
- Export named components from the block file, re-export from `blocks/index.ts`
- Add `"use client"` directive when using hooks, event handlers, or browser APIs

### Client vs Server components

- Default to **Server Components** in Next.js apps
- Add `"use client"` at the top of the file (not the component) when needed
- All components in `@repo/ui` that use hooks or interactivity need `"use client"`

---

## shadcn Registry

Custom shadcn-compatible registry published from `@repo/ui`:

- **Manifest:** `packages/ui/registry.json`
- **Sources:** `packages/ui/registry/new-york/<block-name>/`
- **Built output:** `packages/ui/public/r/`

Registered items:
- `gmhlab-theme` — Navy + Gold design tokens (type: `registry:style`)
- `profile-card` — Profile card block (type: `registry:block`)

---

## Version Catalog

All shared dependency versions are pinned in `pnpm-workspace.yaml` under `catalog:`. Reference catalog versions in `package.json` with `catalog:` instead of a version string:

```json
"react": "catalog:",
"typescript": "catalog:",
"tailwindcss": "catalog:"
```

Key versions: React 19, Next.js 15.1, Vite 6, TypeScript 5.7, Tailwind 4, Radix UI (various).

---

## Common Patterns

### Adding a new primitive component

1. Create `packages/ui/src/components/ui/<name>.tsx`
2. Follow the cva + cn + data-slot pattern
3. Export from `packages/ui/src/components/ui/index.ts`
4. The component is automatically available via `@repo/ui`

### Adding a new block

1. Create `packages/ui/src/components/blocks/<name>/` directory
2. Create `<name>.tsx` with named export (e.g., `export function MyBlock()`)
3. Add sub-components in `components/` subdirectory if needed
4. Export from `packages/ui/src/components/blocks/index.ts`
5. The block is automatically available via `@repo/ui`

### Adding a new Next.js route

1. Create `apps/<app>/src/app/<route>/page.tsx`
2. Import and render the relevant block from `@repo/ui`
3. Add `"use client"` only if the page itself needs client-side state
4. Update `layout.tsx` if new providers are needed

### Using theme tokens in components

Always use semantic CSS variables — never hardcode hex values in utility classes:

```tsx
// Correct — uses design tokens
<div className="bg-primary text-primary-foreground" />
<div className="bg-sidebar text-sidebar-foreground" />

// Avoid — hardcoded values break dark mode and theming
<div style={{ background: "#033C5A" }} />
```

Exception: the `Homepage` block uses hardcoded brand colors as an isolated branded component that doesn't follow the token system.

---

## No Test Setup

There is currently no test framework configured in this repository. No `jest`, `vitest`, or `playwright` setup exists. Do not attempt to run tests.

---

## No CI/CD

No `.github/workflows/` directory exists. There is no automated CI pipeline configured.

---

## Formatting

**Prettier** is configured as a root devDependency (v3.4). No explicit `.prettierrc` was found — default Prettier settings apply. Run formatting via your editor or:

```bash
pnpm exec prettier --write .
```
