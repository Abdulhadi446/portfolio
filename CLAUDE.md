# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Spec-Driven Development (SDD)** portfolio site for "Trillionir" - a static Astro 5 site with a data-driven content model. The project uses SDD governance with specs, plans, and tasks in the `specs/` directory.

## Common Commands

```bash
# Development
npm run dev              # Start dev server at http://localhost:4321/

# Build and preview
npm run build            # Static build output to dist/
npm run preview          # Preview built site locally

# Testing
npm run test             # Run all Vitest tests once
npm run test:watch       # Run Vitest in watch mode
```

## Architecture Overview

### Tech Stack
- **Framework**: Astro 5.x with static output (`output: "static"`)
- **Language**: TypeScript 5.x (strict mode)
- **Validation**: Zod for content schema validation
- **Testing**: Vitest with tests in `tests/**/*.test.ts`
- **Path Aliases**: `@/*` maps to `src/*`

### Content Architecture

The site follows a **data-driven model** where all content is defined in TypeScript data files under `src/data/`:

- `src/data/profile.ts` - Hero profile (name, role, experience level)
- `src/data/social-links.ts` - Social/media links
- `src/data/projects.ts` - Project portfolio entries (1-2 must be agentic AI highlights)
- `src/data/collaborators.ts` - Collaborator entries
- `src/data/schema.ts` - Zod schemas with validation rules
- `src/data/site-config.ts` - Site-wide configuration

Content flows: **Data files** → **Zod validation** → **Astro components** → **Static HTML**

The `/admin` page provides a UI for editing a full JSON config stored in browser localStorage.

### Component Structure

All components are `.astro` files:
- `src/pages/` - Routes (`index.astro` = homepage, `admin.astro` = admin panel)
- `src/components/` - Reusable UI components
- `src/layouts/` - Base layout wrapper
- `src/lib/` - Utility functions (e.g., `content-utils.ts`)
- `src/styles/` - CSS tokens, accessibility, global styles

### SDD Governance Structure

- `.specify/memory/constitution.md` - Project principles (read before planning)
- `specs/<feature>/spec.md` - Feature requirements
- `specs/<feature>/plan.md` - Architecture decisions
- `specs/<feature>/tasks.md` - Testable tasks
- `history/prompts/` - Prompt History Records (PHRs)
- `history/adr/` - Architecture Decision Records

## SDD Workflow Requirements

This project **requires** the Spec-Driven Development workflow:

1. `/sp.specify` → Create/amend feature spec
2. `/sp.clarify` (if needed) → Clarify underspecified areas
3. `/sp.plan` → Generate architecture plan
4. `/sp.tasks` → Generate actionable tasks
5. `/sp.analyze` → Cross-validate artifacts
6. `/sp.implement` → Execute implementation

**Always read `.specify/memory/constitution.md`** before planning - it defines quality gates, workflow requirements, and non-negotiables (e.g., accessibility baseline, brand accuracy for "Trillionir", static-first delivery).

## Content Validation Rules

The schema enforces business rules:
- Profile name must be exactly "Trillionir"
- Role must be exactly "Full-Stack + Agentic AI Engineer"
- Experience level must be "intermediate"
- Projects must include 1-2 agentic AI highlights (`isAgenticAIHighlight: true`)
- Social links and collaborators require unique `order` values

## PHR and ADR Requirements

- **PHRs**: Create a Prompt History Record after every user prompt (auto-routed to `history/prompts/<feature>/`)
- **ADRs**: Suggest documenting architecturally significant decisions with `/sp.adr <title>` when impact is long-term, alternatives were considered, and scope is cross-cutting.
