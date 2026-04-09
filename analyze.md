# analyze.md

## Purpose
Run a cross-artifact consistency and alignment review after `/sp.tasks` and before `/sp.implement`.

## Inputs
- `spec.md`
- `plan.md`
- `tasks.md`
- `constitution.md`

## Output
A read-only report highlighting:
1. Conflicts
2. Missing coverage
3. Ambiguities
4. Terminology drift
5. Constitution violations

## Analysis checks

### 1. Requirement coverage
- Every functional requirement in `spec.md` maps to at least one task.
- Every non-functional requirement (accessibility, responsiveness, deployability) maps to tasks.

### 2. Plan alignment
- Stack decisions in `plan.md` remain compatible with GitHub Pages static hosting.
- Task order respects dependencies defined in plan.

### 3. Scope consistency
- No task introduces out-of-scope features (auth, CMS, backend runtime).
- Section set in tasks matches spec (intro/projects/collaborators).
- Hero identity details remain consistent across artifacts:
  - Name: Trillionir
  - Role: Full-Stack + Agentic AI Engineer
  - Experience positioning: intermediate

### 4. UX and content consistency
- Naming is consistent (e.g., "Other Trillionaires" final decision).
- Content model tasks exist for socials/projects/collaborators data-driven rendering.
- Projects include at least one clear "agentic AI" proof-point requirement/task mapping.

### 5. Constitution compliance
- Static-first requirement upheld.
- Accessibility baseline represented in tasks.
- No silent scope drift between artifacts.

## Severity model
- **CRITICAL**: Constitution violation or missing core requirement coverage.
- **HIGH**: Conflicting requirements/tasks or untestable acceptance criteria.
- **MEDIUM**: Terminology drift, underspecified edge cases.
- **LOW**: Wording or minor structural issues.

## Report template
| ID | Category | Severity | Location(s) | Finding | Recommendation |
|---|---|---|---|---|---|

## Gate decision
- **Block implement** if any CRITICAL issue exists.
- **Proceed with caution** if only HIGH/MEDIUM/LOW issues.
