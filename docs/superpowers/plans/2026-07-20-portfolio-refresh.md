# Portfolio Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh the portfolio's content (About Me copy, Skills, new OCIAL project) and redesign it with a minimal/clean, responsive, print-friendly layout so the site can be exported to PDF for a job application.

**Architecture:** Introduce a single shared design-token module (`src/styles/theme.ts`) consumed by every existing component via Emotion `css` templates. No new pages, no new dependencies, no routing changes. Print support is a `@media print` block added to the existing global styles in `App.tsx`.

**Tech Stack:** React 18, TypeScript, Vite, @emotion/react (existing). No test framework is configured in this repo — verification is done by running the Vite dev server and visually checking the app at each breakpoint, plus `npm run lint`.

---

## Spec reference

This plan implements `docs/superpowers/specs/2026-07-20-portfolio-refresh-design.md`.

## File Structure

- Create: `src/styles/theme.ts` — shared colors, breakpoints, spacing, font-size tokens
- Modify: `src/App.tsx` — global styles, remove fixed `min-width` layout, add `@media print` rules
- Modify: `src/components/Header.tsx` — token colors, responsive collapse of nav
- Modify: `src/components/Footer.tsx` — token colors, responsive width
- Modify: `src/pages/AboutMe.tsx` — new intro copy, two new skill icons, token colors, responsive stacking
- Modify: `src/pages/Projects.tsx` — new OCIAL project entry, conditional GitHub button, token colors, responsive grid, print-visible buttons
- Modify: `src/pages/Contact.tsx` — token colors, responsive padding
- Create: `src/assets/ocial_img.png` — screenshot of https://ocial.io/ (captured in Task 8)

---

### Task 1: Create the shared design-token module

**Files:**
- Create: `src/styles/theme.ts`

- [ ] **Step 1: Create the theme file**

```ts
// src/styles/theme.ts
export const colors = {
  background: "#ffffff",
  backgroundAlt: "#fafafa",
  text: "#242c39",
  textMuted: "#3f4756",
  accent: "#4834d4",
  border: "#e0e0e0",
  cardBackground: "#ffffff",
};

export const breakpoints = {
  tablet: "768px",
  mobile: "480px",
};

export const media = {
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  mobile: `@media (max-width: ${breakpoints.mobile})`,
};

export const spacing = {
  xs: "8px",
  sm: "16px",
  md: "24px",
  lg: "32px",
  xl: "48px",
};

export const fontSize = {
  h1: "40px",
  h2: "32px",
  h3: "20px",
  body: "16px",
  small: "14px",
};
```

- [ ] **Step 2: Verify it compiles**

Run: `npm run build`
Expected: build succeeds (this file has no consumers yet, so it can't break anything, but confirms TS syntax is valid).

- [ ] **Step 3: Commit**

```bash
git add src/styles/theme.ts
git commit -m "Add shared design tokens for portfolio redesign"
```

---

### Task 2: Global styles — remove fixed-width layout, add print styles

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Replace the global/app/main styles**

Replace the existing `globalStyles`, `appStyle`, and `mainContentStyle`/`contentContainerStyle` constants in `src/App.tsx` with:

```tsx
import { colors, media } from "./styles/theme";

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  @media print {
    body {
      background: #ffffff;
    }
  }
`;

const appStyle = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${colors.background};
`;

const mainContentStyle = css`
  flex: 1;
  margin-top: 60px;
  padding: 20px;

  @media print {
    margin-top: 0;
  }
`;

const contentContainerStyle = css`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  ${media.mobile} {
    padding: 12px;
  }
`;
```

Note: this removes the `overflow-x: auto` and fixed `width: 1140px` that previously forced horizontal scrolling on small screens — `contentContainerStyle` now shrinks with the viewport.

- [ ] **Step 2: Start the dev server and verify no console errors**

Run: `npm run dev`
Expected: Vite prints a local URL with no compile errors. Open it in a browser — the page should render exactly as before (no visual regression yet, since child components haven't changed).

- [ ] **Step 3: Commit**

```bash
git add src/App.tsx
git commit -m "Make app shell responsive and print-friendly"
```

---

### Task 3: Header — responsive nav + token colors

**Files:**
- Modify: `src/components/Header.tsx`

- [ ] **Step 1: Replace Header styles and add a mobile menu toggle**

Replace the full contents of `src/components/Header.tsx` with:

```tsx
import { css } from "@emotion/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import pandaCloud from "../assets/panda_cloud.png";
import { colors, media } from "../styles/theme";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header css={headerStyle}>
      <div css={headerContentStyle}>
        <div css={logoContainerStyle}>
          <img src={pandaCloud} alt="logo" css={logoImageStyle} />
          <div css={logoTextStyle}>Frontiyeon Portfolio</div>
        </div>

        <button
          css={menuButtonStyle}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav css={[navbarStyle, menuOpen && navbarOpenStyle]}>
          <NavLink to="/" css={navLinkStyle} onClick={() => setMenuOpen(false)}>
            About Me
          </NavLink>
          <NavLink to="/projects" css={navLinkStyle} onClick={() => setMenuOpen(false)}>
            Project
          </NavLink>
          <NavLink to="/contact" css={navLinkStyle} onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

const headerStyle = css`
  width: 100%;
  background-color: ${colors.background};
  border-bottom: 1px solid ${colors.border};

  @media print {
    display: none;
  }
`;

const headerContentStyle = css`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  position: relative;
`;

const logoContainerStyle = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const logoImageStyle = css`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const logoTextStyle = css`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.text};

  ${media.mobile} {
    font-size: 18px;
  }
`;

const menuButtonStyle = css`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${colors.text};

  ${media.tablet} {
    display: block;
  }
`;

const navbarStyle = css`
  display: flex;
  font-size: 18px;
  gap: 20px;

  ${media.tablet} {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: ${colors.background};
    border-bottom: 1px solid ${colors.border};
    flex-direction: column;
    gap: 0;
    padding: 10px 20px;
  }
`;

const navbarOpenStyle = css`
  ${media.tablet} {
    display: flex;
  }
`;

const navLinkStyle = css`
  color: ${colors.text};
  text-decoration: none;
  padding: 8px 0;

  &.active {
    font-weight: bold;
    color: ${colors.accent};
  }
`;

export default Header;
```

- [ ] **Step 2: Manually verify in the browser**

With `npm run dev` running, resize the browser window (or use devtools device toolbar) to under 768px width. Expected: the nav links disappear and a `☰` button appears; clicking it toggles the nav open/closed, and clicking a link closes it and navigates.

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.tsx
git commit -m "Make Header responsive with collapsible nav"
```

---

### Task 4: Footer — token colors + fluid width

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Replace Footer styles**

Replace the full contents of `src/components/Footer.tsx` with:

```tsx
import { css } from "@emotion/react";
import { colors } from "../styles/theme";

function Footer() {
  return (
    <footer css={footerStyle}>
      <div css={footerContentStyle}>
        &copy; {new Date().getFullYear()} Frontiyeon. All rights reserved.
      </div>
    </footer>
  );
}

const footerStyle = css`
  width: 100%;
  background-color: ${colors.textMuted};
  text-align: center;
  color: ${colors.background};
  padding: 15px 0;

  @media print {
    display: none;
  }
`;

const footerContentStyle = css`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
`;

export default Footer;
```

- [ ] **Step 2: Manually verify**

Reload the app; the footer should still render at the bottom with no horizontal scrollbar at narrow widths.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "Make Footer fluid-width and hide it from print output"
```

---

### Task 5: About Me — new copy, new skills, responsive layout

**Files:**
- Modify: `src/pages/AboutMe.tsx`

- [ ] **Step 1: Replace the full contents of `src/pages/AboutMe.tsx`**

```tsx
import { css } from "@emotion/react";
import ProfileImage from "../assets/Character.jpg";
import { colors, media } from "../styles/theme";

function AboutMe() {
  return (
    <div css={container}>
      <div css={headerSection}>
        <div css={contentWrapper}>
          <div css={titleSection}>
            <h1 css={nameTitle}>Lee Yeonji</h1>
            <p css={jobTitle}>Front-End Developer</p>
            <hr css={divider} />
          </div>

          <div css={aboutSection}>
            <h2 css={aboutTitle}>About Me</h2>
            <p css={aboutText}>
              안녕하세요, 끝없이 배우고 성장하는 프론트엔드 개발자 이연지입니다.
              <br />
              새로운 기술을 스스로 학습하고 실제 서비스에 적용해보며 조금씩 실력을 쌓아온
              개발자입니다.
              <br />
              하나의 프로젝트마다 깊이 있게 이해하고 코드로 남기는 것을 중요하게 생각합니다.
            </p>
          </div>
        </div>
        <div css={imageWrapper}>
          <img src={ProfileImage} alt="Profile" css={profileImg} />
        </div>
      </div>

      <div css={skillsSection}>
        <h2 css={skillsTitle}>My Skills</h2>
        <div css={skillsGrid}>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML"
            />
            <p className="skill-name">HTML</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
            />
            <p className="skill-name">CSS</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
            />
            <p className="skill-name">JavaScript</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
            />
            <p className="skill-name">React</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="TypeScript"
            />
            <p className="skill-name">TypeScript</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/styledcomponents/styledcomponents-original.svg"
              alt="styled-components"
            />
            <p className="skill-name">styled-components</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg"
              alt="Supabase"
            />
            <p className="skill-name">Supabase</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="Git"
            />
            <p className="skill-name">Git</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
            />
            <p className="skill-name">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const container = css`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
`;

const headerSection = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.backgroundAlt};
  padding: 32px;
  border-radius: 20px;

  ${media.tablet} {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const contentWrapper = css`
  flex: 1;
  padding: 0 40px;

  ${media.tablet} {
    padding: 24px 0 0;
  }
`;

const titleSection = css`
  text-align: end;
  margin-bottom: 32px;

  ${media.tablet} {
    text-align: center;
  }
`;

const nameTitle = css`
  font-size: 40px;
  color: ${colors.textMuted};
  margin: 0;

  ${media.mobile} {
    font-size: 28px;
  }
`;

const jobTitle = css`
  font-size: 19px;
  color: ${colors.text};
  margin: 8px 0;
`;

const divider = css`
  border: none;
  border-top: 2px solid ${colors.accent};
  width: 100%;
  max-width: 700px;
  margin: 16px auto;
`;

const aboutSection = css`
  margin-top: 32px;
`;

const aboutTitle = css`
  font-size: 32px;
  color: ${colors.textMuted};
  margin-bottom: 16px;

  ${media.mobile} {
    font-size: 24px;
  }
`;

const aboutText = css`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.text};
`;

const imageWrapper = css`
  flex: 1;
  max-width: 300px;

  ${media.tablet} {
    max-width: 200px;
  }
`;

const profileImg = css`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

const skillsSection = css`
  text-align: center;
  padding: 32px;
`;

const skillsTitle = css`
  font-size: 32px;
  color: ${colors.textMuted};
  margin: 0 0 32px;

  ${media.mobile} {
    font-size: 24px;
  }
`;

const skillsGrid = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 32px;
  margin: 0 auto;

  ${media.tablet} {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  ${media.mobile} {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  img {
    width: 60px;
    height: 60px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    ${media.mobile} {
      width: 44px;
      height: 44px;
    }
  }

  .skill-name {
    font-size: 14px;
    color: ${colors.text};
  }
`;

export default AboutMe;
```

- [ ] **Step 2: Manually verify**

Open `/` in the browser. Expected: new intro paragraph shown, 9 skill icons in the grid including styled-components and Supabase (if either devicon URL 404s, replace it with a text-only fallback badge in the `skill-item` — devicon does not host every logo). Resize to tablet/mobile widths and confirm the header section stacks vertically and the skills grid drops to 4 then 3 columns.

- [ ] **Step 3: Commit**

```bash
git add src/pages/AboutMe.tsx
git commit -m "Update About Me copy, add skills, make layout responsive"
```

---

### Task 6: Projects — add OCIAL entry, conditional GitHub button, responsive grid, print-visible buttons

**Files:**
- Modify: `src/pages/Projects.tsx`

- [ ] **Step 1: Add the OCIAL image import and update the `Media`-adjacent project type to make `githubLink` optional**

In `src/pages/Projects.tsx`, add this import near the other asset imports:

```tsx
import ocialImage from "../assets/ocial_img.png";
```

Change the `projectData` type annotation's `githubLink` field from required to optional:

```tsx
  const projectData: {
    id: number;
    title: string;
    image: string;
    githubLink?: string;
    media?: Media[];
    site?: string;
  }[] = [
```

- [ ] **Step 2: Add the OCIAL entry as the first item in `projectData`**

```tsx
    {
      id: 0,
      title: "커뮤니티 스토리 플랫폼, OCIAL (2025)",
      image: ocialImage,
      site: "https://ocial.io/",
    },
```

(Placed before the existing `id: 1` Tradely entry so it renders first/most-recent.)

- [ ] **Step 3: Make the GitHub button conditional**

Replace the existing GitHub `<a>` block inside the `.map()`:

```tsx
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    css={githubButton}
                  >
                    GitHub
                  </a>
                )}
```

- [ ] **Step 4: Apply design tokens and responsive/print styles**

Replace these existing style constants:

```tsx
import { colors, media } from "../styles/theme";

const pageTitle = css`
  text-align: start;
  font-size: 32px;
  font-weight: bold;
  margin: 20px;
  color: ${colors.textMuted};

  ${media.mobile} {
    font-size: 24px;
  }
`;

const projectsContainer = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;

  ${media.tablet} {
    grid-template-columns: 1fr;
  }

  @media print {
    grid-template-columns: 1fr;
  }
`;

const projectCard = css`
  background-color: ${colors.textMuted};
  color: ${colors.background};
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  text-align: center;

  @media print {
    page-break-inside: avoid;
    border: 1px solid ${colors.border};
  }
`;
```

Update `buttonWrapper` so the buttons are visible when printing (they're normally hover-only, which doesn't exist in a printed page):

```tsx
const buttonWrapper = css`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;

  @media print {
    position: static;
    transform: none;
    opacity: 1;
    justify-content: center;
    padding-bottom: 10px;
  }
`;
```

Update `liveButton` and `githubButton` to use `colors.accent`:

```tsx
const liveButton = css`
  background-color: ${colors.accent};
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 14px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    background-color: #9a9cb2;
    cursor: default;
  }
`;

const githubButton = css`
  background-color: #9a9cb2;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    background-color: #7f5069;
  }
`;
```

Leave `imageWrapper`, `projectImage`, `projectTitle`, and the full-screen lightbox styles (`fullScreenContainer`, `fullScreenContent`, `mediaRow`, `sideBySideMedia`, `fullScreenMedia`, `closeButton`) unchanged — they're not part of this redesign's scope and already work correctly.

- [ ] **Step 5: Manually verify**

Open `/projects`. Expected: OCIAL card appears first, its "More" button opens `https://ocial.io/` in a new tab (via the existing `site` handling in `openFullScreen`), and it has no GitHub button. Confirm the other four project cards still render exactly as before. Resize to tablet width and confirm the grid drops to 1 column. Open print preview (Ctrl+P) and confirm the More/GitHub buttons are visible without hovering.

Note: this step will show a broken image icon for OCIAL until Task 8 supplies `src/assets/ocial_img.png` — that's expected at this point.

- [ ] **Step 6: Commit**

```bash
git add src/pages/Projects.tsx
git commit -m "Add OCIAL project, make Projects grid responsive and print-friendly"
```

---

### Task 7: Contact — token colors + responsive padding

**Files:**
- Modify: `src/pages/Contact.tsx`

- [ ] **Step 1: Replace the style constants**

Add the theme import and replace `pageTitle`, `contactPage`, `contactItem`, `iconStyle` with:

```tsx
import { colors, media } from "../styles/theme";

const pageTitle = css`
  text-align: start;
  font-size: 32px;
  font-weight: bold;
  margin: 20px;
  color: ${colors.textMuted};

  ${media.mobile} {
    font-size: 24px;
    margin: 12px;
  }
`;

const contactPage = css`
  background-color: ${colors.background};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 30px;
  width: 100%;
  max-width: 600px;
  margin: 100px auto;

  ${media.tablet} {
    margin: 40px auto;
    padding: 20px;
  }

  @media print {
    box-shadow: none;
    border: 1px solid ${colors.border};
    margin: 20px auto;
  }
`;

const contactItem = css`
  display: flex;
  align-items: center;
  gap: 40px;
  font-size: 18px;
  color: ${colors.text};

  ${media.mobile} {
    gap: 20px;
    font-size: 15px;
  }

  a {
    text-decoration: none;
    color: ${colors.textMuted};
    word-break: break-word;

    &:hover {
      color: ${colors.accent};
    }
  }
`;

const iconStyle = css`
  font-size: 28px;
  color: ${colors.text};

  ${media.mobile} {
    font-size: 22px;
  }
`;
```

- [ ] **Step 2: Manually verify**

Open `/contact`. Expected: same content, colors match the shared accent (`#4834d4`) on hover instead of the old `#99accf`. At mobile width, the card padding shrinks and text stays legible without overflow.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Contact.tsx
git commit -m "Apply shared design tokens and responsive spacing to Contact"
```

---

### Task 8: Capture the OCIAL screenshot

**Files:**
- Create: `src/assets/ocial_img.png`

- [ ] **Step 1: Attempt automated capture with Playwright**

Run:

```bash
npx --yes playwright install chromium
npx --yes playwright screenshot --viewport-size=1280,800 https://ocial.io/ src/assets/ocial_img.png
```

Expected: a PNG is written to `src/assets/ocial_img.png`. If this succeeds, skip Step 2.

- [ ] **Step 2: Fallback — manual screenshot**

If Step 1 fails (network restrictions, install failure, etc.), ask the user to manually screenshot https://ocial.io/ (browser window, ~1280px wide, top of homepage) and save it as `src/assets/ocial_img.png` in the repo. Wait for the user to confirm the file is in place before continuing.

- [ ] **Step 3: Verify the image loads in the app**

With `npm run dev` running, open `/projects` and confirm the OCIAL card now shows the real screenshot instead of a broken image icon.

- [ ] **Step 4: Commit**

```bash
git add src/assets/ocial_img.png
git commit -m "Add OCIAL project screenshot"
```

---

### Task 9: Full verification pass

**Files:** none (verification only)

- [ ] **Step 1: Lint**

Run: `npm run lint`
Expected: no errors. If there are pre-existing unrelated lint errors in the repo, confirm no *new* errors were introduced by this plan's changes.

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: build succeeds with no TypeScript errors.

- [ ] **Step 3: Manual cross-breakpoint check**

With `npm run dev` running, check all three routes (`/`, `/projects`, `/contact`) at three widths: ~1280px (desktop), ~768px (tablet), ~390px (mobile). Confirm: no horizontal scrollbar at any width, Header nav collapses correctly below 768px, Projects grid is 2 columns above 768px and 1 column below, About Me header section stacks below 768px.

- [ ] **Step 4: Manual print-preview check**

For each of the three routes, open the browser print preview (Ctrl+P). Confirm: Header/Footer are hidden, Projects' More/GitHub buttons are visible without hovering, project cards don't split awkwardly across a page break, colors/backgrounds are print-reasonable (no large dark fills wasting ink).

- [ ] **Step 5: Export the PDFs**

For each of the three routes, use the browser's print dialog to save as PDF. Combine the three PDFs in order (About → Projects → Contact) — either via the browser's "save as PDF then merge with a PDF tool" or by asking the user which merge method they prefer at this point.

- [ ] **Step 6: Final commit (if any verification step required fixes)**

```bash
git add -A
git commit -m "Fix issues found during cross-breakpoint and print verification"
```

(Skip this commit if verification found nothing to fix.)

---

## Self-review notes

- Every task's files exist in the current repo (`src/App.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/pages/AboutMe.tsx`, `src/pages/Projects.tsx`, `src/pages/Contact.tsx` — all confirmed via the initial repo exploration).
- `theme.ts` tokens (`colors`, `media`, `spacing`, `fontSize`) are defined once in Task 1 and only the fields actually used downstream (`colors.*`, `media.tablet`, `media.mobile`) are referenced in later tasks — no undefined-token references.
- `githubLink` is changed from required to optional in the same task (Task 6) that both adds the first entry without it and adds the conditional render — no intermediate broken state within a task.
- OCIAL image import (`ocialImage`) is added in Task 6 pointing at a file that doesn't exist until Task 8; Task 6's verification step explicitly calls out the expected broken-image state so it isn't mistaken for a bug.
- No automated test framework exists in this repo (`package.json` has no `test` script, no Jest/Vitest/RTL dependency), so verification steps are manual browser checks + `npm run lint` / `npm run build`, matching the spec's own Testing section.
