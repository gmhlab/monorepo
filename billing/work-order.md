# Work Order — GMH Lab Monorepo

**Work Order No.:** WO-2026-001
**Client:** Global Mental Health Lab (GMH Lab)
**Project:** Design System & Multi-Application Monorepo
**Project Period:** 2026-01-21 — 2026-04-30
**Total Contract Value:** $4,500.00 USD

---

## Scope of Work

### Abstract

Conception and delivery of a branded design system and suite of web applications for the Global Mental Health Lab. Work covered the full project lifecycle — from initial architecture and visual identity to a library of reusable components and three production applications — resulting in a unified digital platform for publishing research content, showcasing the EQUIP methodology, and maintaining a living design system.

### Technical Summary

A shared-codebase monorepo containing three applications and a component library, built on React 19, Next.js 16, and Tailwind CSS v4. The component library is organized into ten hierarchical layers, from low-level utilities up to full page compositions, with a spatial layout system based on the Every Layout methodology. All design tokens map to a Figma file, keeping visual decisions in sync between designers and developers. A separate CDN application delivers embeddable content widgets to external partner sites.

---

## Invoices

| # | Invoice | Description | Date | Amount |
|---|---------|-------------|------|--------|
| 1 | INV-2026-001 | Foundation & Developer Tooling | 2026-02-05 | $1,500.00 |
| 2 | INV-2026-002 | Design System & Component Library | 2026-03-14 | $1,500.00 |
| 3 | INV-2026-003 | Application Development & Deployment | 2026-04-30 | $1,500.00 |

**Total Invoiced:** $4,500.00

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

## Foundation & Developer Tooling

| # | Item | Description | Amount |
|---|------|-------------|--------|
| 1 | Unified codebase structure | Set up a monorepo so all three applications and the shared component library live together, share dependencies, and can be developed and built as a single unit | $450.00 |
| 2 | Automated build pipeline | Configured task orchestration so running one command builds, checks, or starts all parts of the project in the correct order, with caching to keep builds fast | $375.00 |
| 3 | Code quality standards | Established shared TypeScript and linting configurations used by every application, enforcing consistent, type-safe code across the whole project | $300.00 |
| 4 | Staging access controls | Added password-protection middleware so preview deployments are gated — only people with the password can view the site before it goes live | $225.00 |
| 5 | Project documentation | Wrote developer-facing documentation covering commands, architecture decisions, conventions, and onboarding guidance | $150.00 |

| | | **Subtotal** | **$1,500.00** |
| | | Tax (0%) | $0.00 |
| | | **Total Due** | **$1,500.00** |

**Payment Terms:** Net 14 days | **Method:** Bank transfer or check

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

| # | Item | Description | Amount |
|---|------|-------------|--------|
| 1 | Visual identity & token system | Defined the full color palette (navy, gold, neutrals) and spacing scale as design tokens — values that flow from Figma through to every application automatically, with light and dark mode variants | $400.00 |
| 2 | Spatial layout system | Built seven composable layout primitives (Stack, Center, Cluster, Grid, Container, Split, Cover) that control how elements are arranged on the page, replacing one-off layout code with a consistent spatial vocabulary | $375.00 |
| 3 | Core UI component library | Assembled a comprehensive set of reusable interface components — forms, dialogs, tables, navigation, charts, and more — that all three applications draw from | $425.00 |
| 4 | Page-level templates & patterns | Composed higher-level building blocks (page headers, empty states, dashboard shells, auth layouts) from the core components, giving each application a consistent structural language | $225.00 |
| 5 | Figma integration | Linked every layout component to its counterpart in the Figma design file so that design decisions and code stay synchronized, and developers can see real code snippets from within Figma | $75.00 |

| | | **Subtotal** | **$1,500.00** |
| | | Tax (0%) | $0.00 |
| | | **Total Due** | **$1,500.00** |

**Payment Terms:** Net 14 days | **Method:** Bank transfer or check

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

| # | Item | Description | Amount |
|---|------|-------------|--------|
| 1 | Main web application | Built the primary GMH Lab site — including the public-facing homepage, the Innovations showcase (EQUIP, Photovoice), marketing pages, a portal landing page, login and link-in-bio pages, and a full dashboard area with sidebar navigation | $700.00 |
| 2 | Design system documentation site | Created a dedicated site where the component library is documented and showcased, serving as a living reference for designers and developers on the team | $300.00 |
| 3 | Embeddable content widgets | Developed four standalone content widgets (hero section, explainer section, partner logo marquee, step-by-step how-to section) that can be embedded in Wix or any external site as iframes | $350.00 |
| 4 | Deployment & hosting | Configured GitHub Pages publishing for the CDN widgets and wired up deployment pipelines so all three applications can be released from the same repository | $150.00 |

| | | **Subtotal** | **$1,500.00** |
| | | Tax (0%) | $0.00 |
| | | **Total Due** | **$1,500.00** |

**Payment Terms:** Net 14 days | **Method:** Bank transfer or check

---

## Contract Summary

| Invoice | Description | Amount |
|---------|-------------|--------|
| INV-2026-001 | Foundation & Developer Tooling | $1,500.00 |
| INV-2026-002 | Design System & Component Library | $1,500.00 |
| INV-2026-003 | Application Development & Deployment | $1,500.00 |
| | **Total Contract Value** | **$4,500.00** |
