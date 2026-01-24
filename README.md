# Monorepo

> A pnpm monorepo with shared UI, Tailwind v4 everywhere, and clean TypeScript configs.

## Quick Start

```bash
pnpm install
pnpm dev
```

| App  | URL                   | Framework   |
| ---- | --------------------- | ----------- |
| web  | http://localhost:3000 | Next.js 15  |
| docs | http://localhost:3001 | Next.js 15  |
| cdn  | http://localhost:3002 | Vite 6      |

---

## Architecture

```
monorepo/
├── apps/
│   ├── cdn/                # Vite — static site
│   ├── docs/               # Next.js — documentation & design system demos
│   └── web/                # Next.js — main application (GMH innovations)
├── packages/
│   ├── eslint-config/      # Shared ESLint flat configs
│   ├── typescript-config/  # Shared TypeScript configs
│   └── ui/                 # Shared React components + Tailwind theme
├── package.json            # Hoisted dev dependencies
├── pnpm-workspace.yaml     # Workspace definition + version catalog
└── turbo.json              # Task orchestration
```

---

## Stack

| Layer               | Technology                   | Version |
| ------------------- | ---------------------------- | ------- |
| Package Manager     | pnpm (workspaces + catalog)  | 9.15    |
| Build Orchestration | Turborepo                    | 2.3     |
| Framework (web, docs) | Next.js                    | 15.1    |
| Framework (cdn)     | Vite                         | 6.0     |
| UI Library          | React                        | 19      |
| Styling             | Tailwind CSS                 | 4.0     |
| Language            | TypeScript                   | 5.7     |
| Linting             | ESLint (flat config)         | 9.17    |

---

## UI Package

### Folder Structure

```
packages/ui/src/
├── components/
│   ├── ui/             # Primitives (button, card, avatar, badge, input, etc.)
│   ├── blocks/         # Composed components (login, header, footer, profile)
│   ├── gmh-*           # GMH Innovation page components
│   └── ds-demo-*       # Design system documentation components
├── lib/
│   └── utils.ts        # cn() helper
├── styles.css          # Design tokens and Tailwind config
└── index.ts            # Barrel exports
```

### Primitives

| Component   | Features                                                    |
| ----------- | ----------------------------------------------------------- |
| `Button`    | Variants: default, secondary, outline, ghost, destructive, link. Sizes: default, sm, lg, icon. Supports `asChild` |
| `Card`      | CardHeader, CardTitle, CardDescription, CardContent, CardFooter |
| `Avatar`    | AvatarImage, AvatarFallback (Radix-based)                   |
| `Badge`     | Variants: default, secondary, outline, destructive          |
| `Input`     | Styled input with focus states                              |
| `Label`     | Radix-based for accessibility                               |
| `Tabs`      | TabsList, TabsTrigger, TabsContent (Radix-based)            |
| `Switch`    | Toggle switch (Radix-based)                                 |
| `Separator` | Visual divider (Radix-based)                                |
| `Field`     | Form field with label, description, and error states        |

### Blocks

| Component      | Description                                      |
| -------------- | ------------------------------------------------ |
| `Header01`     | Site header with navigation                      |
| `Footer01`     | Site footer                                      |
| `Login01`      | Login form with email/password fields            |
| `Profile01`    | Profile card composed from primitives            |
| `CreateAcct01` | Account creation form                            |

### Page Components

| Component             | Description                                     |
| --------------------- | ----------------------------------------------- |
| `GmhHomepage00`       | GMH main homepage layout                        |
| `GmhInnovation00`     | Innovation page shell                           |
| `GmhInnovationWhatIsIt` | "What is it" section                          |
| `GmhInnovationGetIt`  | "Get it" section                                |
| `GmhInnovationUseIt`  | "Use it" section                                |
| `GmhInnovationTestIt` | "Test it" section with charts                   |
| `GmhInnovationUserStory` | User story/testimonial section               |
| `DsDemo00`            | Design system demo shell                        |
| `DsDemoTokens`        | Interactive design token viewer                 |
| `DsdemoPalettes`      | Color palette documentation                     |

### Dependencies

| Package                        | Purpose                                |
| ------------------------------ | -------------------------------------- |
| `clsx` + `tailwind-merge`      | `cn()` utility for class merging       |
| `class-variance-authority`     | CVA for variant-based component styling |
| `lucide-react`                 | Icon library                           |
| `@radix-ui/react-*`            | Accessible unstyled primitives         |
| `motion`                       | Animation library (Framer Motion)      |
| `recharts`                     | Charts and data visualization          |
| `react-hook-form`              | Form state management                  |

---

## Apps

### Web (`apps/web`)

Main application with GMH innovations.

**Routes:**
- `/` — Homepage
- `/login` — Login page
- `/innovations` — Innovations index
- `/innovations/equip` — EQUIP program page
- `/innovations/photovoice` — PhotoVoice program page

### Docs (`apps/docs`)

Design system documentation and component demos.

### CDN (`apps/cdn`)

Vite-based static site for assets and demos.

---

## Tailwind v4

CSS-first configuration — no `tailwind.config.js`:

- `@import "tailwindcss"` — single import
- `@theme { }` — design tokens in CSS
- `@source` — content scanning directives
- `@custom-variant dark` — class-based dark mode

### Design Tokens (shadcn-style)

| Token                              | Usage                    |
| ---------------------------------- | ------------------------ |
| `background` / `foreground`        | Page background and text |
| `card` / `card-foreground`         | Card surfaces            |
| `primary` / `primary-foreground`   | Primary actions          |
| `secondary` / `secondary-foreground` | Secondary actions      |
| `muted` / `muted-foreground`       | Subtle elements          |
| `destructive` / `destructive-foreground` | Destructive actions |
| `border` / `input` / `ring`        | Borders and focus rings  |
| `sidebar-*`                        | Sidebar-specific tokens  |
| `chart-1` through `chart-5`        | Chart colors             |

### Dark Mode

```js
document.documentElement.classList.add('dark');    // Enable
document.documentElement.classList.remove('dark'); // Disable
document.documentElement.classList.toggle('dark'); // Toggle
```

---

## Scripts

```bash
pnpm dev          # Start all apps
pnpm build        # Build all packages
pnpm lint         # Lint all packages
pnpm typecheck    # Type check all packages

# Single package
pnpm --filter @repo/web dev
pnpm --filter @repo/ui typecheck
```

---

## Key Decisions

| Decision                   | Rationale                                        |
| -------------------------- | ------------------------------------------------ |
| Raw source UI              | No build complexity, instant HMR, simpler setup  |
| pnpm catalog               | Version consistency without hoisting runtime deps |
| Tailwind v4 CSS-first      | No config file bloat, theme in CSS               |
| shadcn-style tokens        | Semantic naming, light/dark mode support         |
| CVA for variants           | Type-safe, composable variant definitions        |
| Radix primitives           | Accessible, unstyled base components             |
| Primitives + Blocks        | Layered architecture for composition             |
| ESLint flat config         | Modern, composable, future-proof                 |
