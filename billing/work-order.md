# Work Order — GMH Lab Monorepo

**Work Order No.:** WO-2026-001
**Client:** Global Mental Health Lab (GMH Lab)
**Project:** Design System & Multi-Application Monorepo
**Project Period:** 2026-01-21 — 2026-04-30
**Total Contract Value:** $1,500.00 USD

---

## Scope of Work

### Abstract

Conception and delivery of a full-stack design system and multi-application
monorepo for the Global Mental Health Lab. The work encompasses the complete
software lifecycle: architectural planning, design token specification,
component library construction, Figma integration, and deployment of three
production-ready applications. The outcome is a cohesive, branded digital
platform that enables GMH Lab to publish interactive research content,
showcase the EQUIP methodology, and maintain a scalable, well-documented
design system — all from a single, version-controlled repository.

### Technical Summary

Implemented a **pnpm + Turborepo monorepo** containing three applications
(`apps/web`, `apps/docs`, `apps/cdn`) and a shared component library
(`@repo/ui`). The component library follows a strict 10-layer hierarchy
(lib → hooks → layouts → primitives → composites → blocks → patterns →
templates → pages → gmh) inspired by the Every Layout methodology and
headless-first Radix UI primitives. All visual tokens are expressed in
Tailwind CSS v4 using the oklch color space with full light/dark mode
support. Figma Code Connect mappings link every layout primitive to the
canonical Figma file (`JoFKlZFj4MXQoXxOxVqM1F`), keeping design and code
in sync. The CDN application delivers embeddable iframe widgets (hero,
what-is, partner-marquee, how-to) to external sites via GitHub Pages.

---

## Invoices

| # | Invoice | Description | Date | Amount |
|---|---------|-------------|------|--------|
| 1 | INV-2026-001 | Monorepo Infrastructure & Tooling | 2026-02-05 | $400.00 |
| 2 | INV-2026-002 | Design System & Component Library | 2026-03-14 | $700.00 |
| 3 | INV-2026-003 | Application Development & Deployment | 2026-04-30 | $400.00 |

**Total Invoiced:** $1,500.00

---
---

# Invoice INV-2026-001

**Invoice No.:** INV-2026-001
**Work Order:** WO-2026-001
**Date:** 2026-02-05
**Due Date:** 2026-02-19

**Bill To:**
Global Mental Health Lab
contact@gmhlab.org

---

## Monorepo Infrastructure & Tooling

| # | Item | Description | Hours | Rate | Amount |
|---|------|-------------|-------|------|--------|
| 1 | Repository scaffolding | pnpm workspaces config, `pnpm-workspace.yaml` catalog pinning, root `package.json`, `.gitignore`, `README.md` | 3.0 | $50 | $150.00 |
| 2 | Build orchestration | Turborepo config (`turbo.json`), task pipeline, remote caching, `pnpm build`/`dev`/`typecheck`/`lint` scripts | 2.0 | $50 | $100.00 |
| 3 | Shared TypeScript config | `@repo/typescript-config` package — `base.json`, `nextjs.json`, `react-library.json` presets with strict mode | 1.0 | $50 | $50.00 |
| 4 | Shared ESLint config | `@repo/eslint-config` package — flat config presets for Next.js apps and React library | 1.0 | $50 | $50.00 |
| 5 | Environment & middleware | Password-protection middleware, `SITE_PASSWORD` / `PASSWORD_PROTECTION_ENABLED` env vars, 303-redirect gate for staging | 1.0 | $50 | $50.00 |

| | | | | **Subtotal** | **$400.00** |
| | | | | Tax (0%) | $0.00 |
| | | | | **Total Due** | **$400.00** |

---

**Payment Terms:** Net 14 days
**Method:** Bank transfer or check

---
---

# Invoice INV-2026-002

**Invoice No.:** INV-2026-002
**Work Order:** WO-2026-001
**Date:** 2026-03-14
**Due Date:** 2026-03-28

**Bill To:**
Global Mental Health Lab
contact@gmhlab.org

---

## Design System & Component Library

| # | Item | Description | Hours | Rate | Amount |
|---|------|-------------|-------|------|--------|
| 1 | Token system | Tailwind CSS v4 CSS-first configuration; oklch color space; 32 semantic color tokens (light + dark), 231 color primitives (21 palettes × 11 shades), spacing/sizing/radius scales in `index.css` | 2.5 | $50 | $125.00 |
| 2 | Spatial primitive system | 7 Every Layout primitives (Stack, Center, Cluster, Grid, Container, Split, Cover); shared `_scale.ts` vocabulary (Gap, Padding, ContainerWidth, CenterMax, Measure, SectionSpacing, GridMin) | 3.5 | $50 | $175.00 |
| 3 | Headless UI component library | 57 Radix UI / Base UI primitives across form, dialog, data, and layout categories (Accordion, Calendar, Carousel, Chart, Combobox, DataTable, Drawer, Form, Sheet, Sidebar, and 47 more); cva variants + cn + data-slot pattern throughout | 5.0 | $50 | $250.00 |
| 4 | Composite & pattern layers | Composites (Logo, LogoMark, ModeToggle, ThemeProvider, Hamburger, ProfileCard); Patterns (PageHeader, SectionHeader, FormSection, EmptyState, FeatureCard, ProfileHeader); Templates (AppShellTemplate, AuthTemplate, MarketingTemplate, SplitTemplate) | 2.0 | $50 | $100.00 |
| 5 | Figma Code Connect integration | `.figma/` Code Connect files for all 7 layout primitives; variable collection bindings (Spacing 25 vars, Sizing 24 vars, Semantic Colors 32 vars); `figma.config.json`; prop mappings for Stack/Center/Cluster/Grid/Container/Split/Cover | 1.0 | $50 | $50.00 |

| | | | | **Subtotal** | **$700.00** |
| | | | | Tax (0%) | $0.00 |
| | | | | **Total Due** | **$700.00** |

---

**Payment Terms:** Net 14 days
**Method:** Bank transfer or check

---
---

# Invoice INV-2026-003

**Invoice No.:** INV-2026-003
**Work Order:** WO-2026-001
**Date:** 2026-04-30
**Due Date:** 2026-05-14

**Bill To:**
Global Mental Health Lab
contact@gmhlab.org

---

## Application Development & Deployment

| # | Item | Description | Hours | Rate | Amount |
|---|------|-------------|-------|------|--------|
| 1 | `apps/web` — Main application | Next.js 16 App Router; 5 route groups: `(content)` GMH public site with homepage + innovations + EQUIP/Photovoice detail pages, `(marketing)` campaign pages, `(home)` portal landing, `(auth)` login/link-in-bio/layout demos, `(app)` dashboard with sidebar + 3 example views + design-system viewer | 5.0 | $50 | $250.00 |
| 2 | `apps/docs` — Design system docs | Next.js 16 documentation app; component showcase and design-system reference for `@repo/ui`; port 3001 | 1.0 | $50 | $50.00 |
| 3 | `apps/cdn` — Embeddable widget CDN | Vite 6 SPA serving 4 iFrame-embeddable widgets (hero-section, what-is-section, partner-marquee, how-to-section) for Wix and external sites; GitHub Pages deployment pipeline; `docs/` pre-built assets and embed snippets | 2.0 | $50 | $100.00 |

| | | | | **Subtotal** | **$400.00** |
| | | | | Tax (0%) | $0.00 |
| | | | | **Total Due** | **$400.00** |

---

**Payment Terms:** Net 14 days
**Method:** Bank transfer or check

---

## Contract Summary

| Invoice | Description | Amount |
|---------|-------------|--------|
| INV-2026-001 | Monorepo Infrastructure & Tooling | $400.00 |
| INV-2026-002 | Design System & Component Library | $700.00 |
| INV-2026-003 | Application Development & Deployment | $400.00 |
| | **Total Contract Value** | **$1,500.00** |
