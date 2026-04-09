# Data Model: Trillionir Portfolio Baseline

## Entity: Profile

**Purpose**: Canonical hero identity and presentation content.

**Fields**
- `name` (string, required) — MUST equal `Trillionir`.
- `role` (string, required) — MUST equal `Full-Stack + Agentic AI Engineer`.
- `experienceLevel` (string, required) — MUST equal `intermediate`.
- `avatarUrl` (string, optional) — image URL/path.
- `headline` (string, optional) — short supporting statement.

**Validation Rules**
- `name`, `role`, and `experienceLevel` are non-empty.
- `experienceLevel` MUST be the canonical value `intermediate`.
- If `avatarUrl` is present, it must be a valid path/URL.

## Entity: SocialLink

**Purpose**: Outbound profile/contact links rendered from data.

**Fields**
- `id` (string, required) — stable identifier.
- `label` (string, required) — visible link text.
- `url` (string, required) — outbound destination.
- `visible` (boolean, required, default `true`) — display control.
- `order` (number, required) — deterministic rendering order.

**Validation Rules**
- `url` must be absolute `https://` URL.
- `label` length: 1..60 characters.
- `order` must be unique per collection.

## Entity: Project

**Purpose**: Portfolio evidence cards.

**Fields**
- `id` (string, required)
- `name` (string, required)
- `summary` (string, required)
- `url` (string, required)
- `isAgenticAIHighlight` (boolean, required, default `false`)
- `imageUrl` (string, optional)
- `order` (number, required)

**Validation Rules**
- At least one and at most two records MUST have `isAgenticAIHighlight=true`.
- `name` length: 1..80 characters.
- `summary` length: 1..280 characters.
- `url` must be absolute `https://` URL.

## Entity: Collaborator

**Purpose**: "Other Trillionaires" cards for community/collaboration proof.

**Fields**
- `id` (string, required)
- `name` (string, required)
- `url` (string, required)
- `avatarUrl` (string, optional)
- `isPlaceholder` (boolean, required, default `false`)
- `order` (number, required)

**Validation Rules**
- Placeholders are allowed in v1 (`isPlaceholder=true`) and should render safely.
- `url` must be absolute `https://` URL.
- `name` length: 1..80 characters.

## Relationships

- A single `Profile` owns zero-to-many `SocialLink` entries.
- The portfolio page contains one ordered `Project` collection.
- The portfolio page contains one ordered `Collaborator` collection.

## State Transitions

No multi-step lifecycle transitions are required in v1. Entities are edited as
content records in version control and re-deployed as static assets.
