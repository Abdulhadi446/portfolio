# specify.md

## Goal
Create the baseline specification for **Trillionir**'s portfolio, positioned for an
**intermediate-level Full-Stack + Agentic AI Engineer** profile.

## Inputs
- User profile: Trillionir, role/title "Full-Stack + Agentic AI Engineer", experience:
  intermediate.
- Visual references for color mood and sketch-like card layout.
- GitHub Pages/GitHub Actions static hosting constraint.
- Project constitution constraints.

## Output
A spec that clearly defines:
1. Prioritized user scenarios and acceptance intent.
2. Functional and non-functional requirements.
3. Edge and fallback behavior.
4. Measurable outcomes.
5. Structured content entities.

## Baseline Specification (personalized)

### Product summary
A personal portfolio site for Trillionir that communicates technical breadth
(full-stack + agentic AI), showcases projects, and makes outbound contact/social
navigation fast and clear.

### Target visitor outcomes
1. Quickly understand who Trillionir is and what he builds.
2. Review featured projects with direct links.
3. Discover collaborator/community ("Other Trillioniars") profiles.
4. Navigate to GitHub/LinkedIn/contact links without friction.

### Core sections
1. **Hero/Profile card**
   - Name: Trillionir
   - Title: Full-Stack + Agentic AI Engineer
   - Avatar area
   - Social links (GitHub, LinkedIn, optional X/email)
2. **Projects**
   - Repeating project cards (name + short context + link)
3. **Other Trillioniars**
   - Repeating collaborator cards (name + link + optional avatar)

### Functional requirements (baseline)
- Site MUST build and deploy as static assets for GitHub Pages.
- Hero MUST show Trillionir's name and the selected role/title.
- Users MUST be able to open every social/project/collaborator link from visible cards.
- Projects and collaborators MUST be rendered from structured data collections.
- Layout MUST preserve readability and interaction on mobile, tablet, and desktop.
- Visual language MUST reflect dark high-contrast mood and rounded sketch-style cards.

### Non-functional requirements (baseline)
- Accessibility: keyboard focus visibility, semantic landmarks, descriptive link labels.
- Performance: core content appears without blocking interactions on typical network/device
  conditions.
- Maintainability: adding a project/collaborator entry should only require data edits.

### Edge cases (baseline)
- Missing avatar or missing project/collaborator image.
- Empty projects list.
- Empty collaborators list.
- Long names, long URLs, or long project titles.
- Broken/unavailable external links.

### Success criteria (baseline)
- Visitors can identify Trillionir's role and core focus in under 10 seconds.
- Users can reach at least one external social link and one project link in two interactions
  or fewer.
- No horizontal scrolling is required on common mobile viewports.
- Visual hierarchy and theme are recognizably aligned with provided references.

### Out of scope (v1)
- Auth/login systems.
- CMS/editor dashboard.
- Server-rendered personalization or backend APIs.
