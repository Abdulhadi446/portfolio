# Research: Trillionir Portfolio Baseline

## Decision 1: Static Framework Choice

- **Decision**: Use Astro static output for page composition.
- **Rationale**: It preserves static-first deployment, supports componentized UI,
  and keeps runtime minimal for GitHub Pages.
- **Alternatives considered**:
  - Pure HTML/CSS/JS hand-authored pages (simpler but weaker content/model scaling).
  - Next.js static export (heavier framework footprint for current scope).

## Decision 2: Content Modeling Strategy

- **Decision**: Store portfolio content in version-controlled structured files
  (JSON/TS modules) validated by lightweight schemas.
- **Rationale**: Enables reusable, non-duplicated rendering while keeping edits
  focused on data updates.
- **Alternatives considered**:
  - Hardcoded content in page markup (violates reusable content principle).
  - External CMS integration (out of scope for v1).

## Decision 3: Contracts for Read-Only Data

- **Decision**: Define read-only OpenAPI contracts for content resources
  (`/profile`, `/social-links`, `/projects`, `/collaborators`) as implementation
  boundaries.
- **Rationale**: Provides precise interface expectations and supports future
  migration to API-backed content without changing consumer assumptions.
- **Alternatives considered**:
  - No explicit contract (faster initially, higher drift risk).
  - GraphQL schema (flexible but unnecessary complexity for v1).

## Decision 4: Accessibility Validation Baseline

- **Decision**: Treat keyboard navigation, visible focus, and semantic landmarks
  as mandatory acceptance checks in quickstart and tests.
- **Rationale**: Accessibility is a constitutional gate and must be explicit.
- **Alternatives considered**:
  - Manual visual checks only (insufficient consistency).
  - Deferring accessibility checks to polish phase (conflicts with release gate).

## Decision 5: Clarification Outcomes Applied

- **Decision**: Keep projects as static card list (no filtering/carousel), allow
  collaborator placeholders in v1, and correct section label to
  "Other Trillionaires."
- **Rationale**: Protects v1 scope while improving clarity and professionalism.
- **Alternatives considered**:
  - Interactive project browsing in v1 (larger scope).
  - Hiding collaborator section until all profiles are final.
