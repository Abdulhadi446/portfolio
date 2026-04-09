# Trillionir Portfolio

Static-first portfolio implementation aligned with the SDD artifacts in `specs/001-read-specify-md/`.

## Local development

```bash
npm install
npm run dev
```

Open:

- Site: `http://localhost:4321/`

## Build for GitHub Pages

```bash
npm run build
```

Generated static output is emitted to `dist/`.

## Content updates (data-driven model)

Update content only in:

- `src/data/profile.ts`
- `src/data/social-links.ts`
- `src/data/projects.ts`
- `src/data/collaborators.ts`

Schema constraints are defined in `src/data/schema.ts` and aligned with:

- `specs/001-read-specify-md/data-model.md`
- `specs/001-read-specify-md/contracts/portfolio-content.openapi.yaml`

## Quality checks

```bash
npm run test
```

## Public repo security baseline

- CSP, Referrer-Policy, and Permissions-Policy are set in `src/layouts/BaseLayout.astro`
- Dependency audit is automated in `.github/workflows/security.yml`
- Secret scanning is automated via Gitleaks in `.github/workflows/security.yml`

Core expectations:

- Hero includes name, role, and intermediate experience positioning
- Projects include 1-2 agentic AI highlights
- Accessibility baseline is preserved (focus visibility + semantic landmarks)

## Support

### [US](https://ko-fi.com/sodeom)
