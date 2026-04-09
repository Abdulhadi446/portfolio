# Quickstart: Trillionir Portfolio Baseline

## Objective

Validate that the portfolio baseline satisfies spec goals for identity clarity,
project discoverability, collaborator visibility, static deployability, and
accessibility baseline.

## Prerequisites

- Node.js 20 LTS available locally
- Package dependencies installed
- Structured content records present for profile, social links, projects,
  collaborators

## Validation Steps

1. Run the local dev server and open the homepage.
2. Confirm hero content displays exact identity values:
   - `Trillionir`
   - `Full-Stack + Agentic AI Engineer`
   - `intermediate` experience positioning
3. Navigate all primary links with keyboard only:
   - Hero social links
   - Project links
   - Collaborator links
4. Confirm visual behavior:
   - Dark, high-contrast mood retained
   - Sketch-inspired card style applied consistently
   - No horizontal scrolling on common mobile viewport sizes
5. Confirm project section behavior:
   - Static card list/grid only (no filters, no carousel)
   - 1-2 AI/automation-highlight projects present
6. Confirm collaborator behavior:
   - Section label uses `Other Trillionaires`
   - Placeholder cards render safely when present
7. Build static output and verify deployable artifact generation for GitHub Pages.

## Pass Criteria

- All spec acceptance scenarios remain satisfiable.
- Accessibility baseline checks pass (keyboard, focus, semantic structure).
- No scope-increasing interactions appear in v1 (filters/carousels).

## Validation Run Notes

- Date: 2026-04-08
- `npm run test -- --run`: pass (2/2 tests)
- `npm run build`: pass (Astro static output generated in `dist/`)
- Contract/schema alignment reviewed between:
  - `specs/001-read-specify-md/contracts/portfolio-content.openapi.yaml`
  - `src/data/schema.ts`
