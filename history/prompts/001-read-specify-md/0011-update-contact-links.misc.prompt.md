id: "0011"
title: "Update Contact Links"
stage: "misc"
date: "2026-04-08T20:04:00Z"
surface: "cli"
model: "gpt-5.3-codex"
feature: "001-read-specify-md"
branch: "001-read-specify-md"
user: "abdulhadi"
command: "bro my github is \"https://github.com/Abdulhadi446\" my linkedin is: \"www.linkedin.com/in/abdulhadi-junaid-485795378\" and my email is: \"abdulhadijunaidahmedkhan@gmail.com\""
labels: ["misc", "contacts", "admin-runtime"]
links:
  spec: "specs/001-read-specify-md/spec.md"
  ticket: ""
  adr: ""
  pr: ""
files:
  - path: "src/data/social-links.ts"
    change: "updated default GitHub, LinkedIn, and Email links to user-provided values"
  - path: "src/data/schema.ts"
    change: "allowed social link URLs to be https:// or mailto:"
  - path: "src/lib/content-utils.ts"
    change: "allowed mailto protocol in safe URL validation"
  - path: "public/admin-runtime.js"
    change: "allowed mailto links and updated social fallback URL"
  - path: "specs/001-read-specify-md/contracts/portfolio-content.openapi.yaml"
    change: "updated SocialLink.url contract pattern to support https:// and mailto:"
tests:
  - command: "npm run test -- --run"
    result: "pass"
  - command: "npm run build"
    result: "pass"
---

## Prompt

bro my github is "https://github.com/Abdulhadi446" my linkedin is: "www.linkedin.com/in/abdulhadi-junaid-485795378" and my email is: "abdulhadijunaidahmedkhan@gmail.com"

## Response snapshot

Updated default contact links to your GitHub, LinkedIn, and email, and enabled `mailto:` support across schema/runtime/contract so the email link works in both site data and admin-applied content.

## Outcome

- ✅ Impact: Portfolio defaults now reflect the user's real contact details and email links are safely accepted end-to-end.
- 🧪 Tests: Unit tests and production build passed after the update.
- 📁 Files: 5 implementation/contract files updated.
- 🔁 Next prompts: Continue with any additional content or admin UX refinements.
- 🧠 Reflection: URL protocol constraints were centralized and aligned to avoid schema/runtime contract drift.

## Evaluation notes (flywheel)

- Failure modes observed: None in this change set.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Add inline admin validation messages for malformed social links.
