# Portfolio Refresh — Design Spec

Date: 2026-07-20
Owner: 이연지 (frontiyeon)
Repo: https://github.com/Panda-raccoon/Portfolio.git

## Goal

Refresh the portfolio's content and design, then export the site as a PDF for a job-application submission.

## Scope

1. Content updates (About Me copy, Skills, new project)
2. Design/layout redesign (minimal/clean direction, responsive)
3. Print stylesheet so the live site can be exported to PDF via browser print

Out of scope: separate one-page resume-style PDF layout, backend/CMS changes, Home.tsx (currently unrouted — leave as-is unless user asks).

## 1. Content Changes

### About Me copy (`src/pages/AboutMe.tsx`)

Replace the current intro paragraph. Focus: steady technical growth (not team collaboration — user clarified their team-collaboration experience isn't the strongest point to lead with).

Draft (Korean, subject to final wording pass with user before submission):

> 안녕하세요, 끝없이 배우고 성장하는 프론트엔드 개발자 이연지입니다.
> 새로운 기술을 스스로 학습하고 실제 서비스에 적용해보며 조금씩 실력을 쌓아온 개발자입니다.
> 하나의 프로젝트마다 깊이 있게 이해하고 코드로 남기는 것을 중요하게 생각합니다.

### Skills section

Add to the existing 7-icon grid (HTML, CSS, JavaScript, React, TypeScript, Git, GitHub):
- styled-components
- Supabase

Use devicon CDN icons consistent with the existing pattern where available; fall back to an inline SVG/logo if devicon has no icon for a given tech.

### Projects — new OCIAL entry (`src/pages/Projects.tsx`)

Add as the first (most recent) card in `projectData`:

- Title: "커뮤니티 스토리 플랫폼, OCIAL (2025)"
- Description/subtitle: sole frontend developer, all pages
- Tech stack: React, TypeScript, styled-components, Supabase
- Live site link: https://ocial.io/
- GitHub link: omitted (private repo) — card's GitHub button should be conditionally hidden (extend the existing `disabled={!project.media && !project.site}` pattern to also handle "no githubLink")
- Image: screenshot of ocial.io, captured during implementation (attempt automated capture via a headless browser tool if available in the environment; otherwise request a manual screenshot from the user)

## 2. Design System

Move away from the current per-page pastel colors (`#ffedcb` banner, `#727a8a` cards, etc.) to one consistent minimal system:

- Background: white / light gray (`#fafafa`)
- Text: dark gray (`#242c39`, `#3f4756` — reuse existing values, they're fine)
- Accent: single indigo accent (`#4834d4`, reused from the current divider color) for links, active nav state, and call-to-action buttons
- Typography: define a shared scale (h1/h2/body/small) instead of ad hoc `font-size` per component
- Spacing: consistent padding/margin scale across pages

Apply this system to Header, Footer, AboutMe, Projects, Contact — no functional changes to Projects' hover/lightbox behavior, only visual cleanup.

## 3. Responsive Layout

Breakpoints: desktop (current 1140px baseline), tablet (~768px), mobile (~480px).

- Replace `min-width: 1140px` (Header, Footer, App) with `max-width: 1140px; width: 100%;` so layout shrinks instead of forcing horizontal scroll.
- Header: collapse nav into a hamburger/compact menu below tablet breakpoint.
- AboutMe header (photo + intro banner): switch from row to stacked column layout below tablet breakpoint. Skills grid: 7 columns → 3–4 columns on mobile.
- Projects grid: 2 columns → 1 column on mobile.
- Contact card: reduce padding on mobile, keep single-column list layout (already responsive-friendly).

## 4. Print Stylesheet (PDF export path)

Add `@media print` rules (likely in `App.tsx`'s global styles or a new `print.css`):

- Remove sticky/fixed positioning on Header.
- Force-show elements that are normally hover-only (Projects' "More"/"GitHub" buttons under `buttonWrapper`) so they're visible in print without requiring hover state.
- Minimize large background-color fills to save ink, keep text/borders legible.
- Add `page-break-inside: avoid` on project cards and the About Me sections so they don't split awkwardly across pages.

**Export workflow** (manual, no extra tooling): open each route (`/`, `/projects`, `/contact`) in a browser, print to PDF via Ctrl+P, and either submit as three files or merge them in order (About → Projects → Contact).

## Testing

- `npm run dev` and manually verify all three pages at desktop, tablet, and mobile widths.
- Verify print preview (`Ctrl+P` → Print Preview) looks correct on all three pages before final PDF export.
- `npm run lint` should pass with no new errors.
