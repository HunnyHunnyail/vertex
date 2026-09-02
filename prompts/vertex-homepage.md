# Implementation Prompt - Vertex Homepage

## Goal
Implement the Vertex homepage in Next.js (App Router) with Tailwind CSS v4 to match the design specification in `design/vertex-home.png` exactly.

## Skills Read
- `sanity-best-practices`
- `AGENTS.md` rules
- `node_modules/next/dist/docs/`

## Code & Config Inspected
- `AGENTS.md` (Design reproduction, tech stack, and workflow rules)
- `design/vertex-home.png` (Reference UI screenshot for the homepage)
- `app/globals.css` (Tailwind v4 tokens, font variables, utility classes)
- `app/layout.tsx` (Root layout setup with Playfair Display and Inter fonts)
- `components/ui/navigation.tsx` (`HeaderNav`, `VertexLogoIcon`, etc.)
- `components/ui/card.tsx` (`CourseCard`, `LessonVideoCard`, etc.)
- `components/ui/button.tsx` (`Button`)
- `components/ui/input.tsx` (`SearchInput`)
- `components/ui/badge.tsx` (`Badge`)

## Decisions & Assumptions
1. **Layout & Grid**:
   - Re-use and refine the header navigation bar (`HeaderNav`) with `Vertex` logo, `Courses` & `My Learning` links, notification bell icon, and user profile avatar image.
   - Hero section: Center-aligned badge ("INTELLIGENT LEARNING"), display heading ("Search your learning in plain English."), subtitle ("Vertex understands what you want to learn and finds the exact lessons across all your courses."), primary button ("Explore Courses →"), and prominent search bar with magnifying glass icon and `⌘ K` keyboard shortcut badge.
   - "All Courses" section: Header with title and "View all courses →" link. 3-column responsive course card grid.
   - Render 3 featured course cards using `CourseCard` / exact layout:
     1. "Next.js for Production" (Next.js "N" logo, description, level: Intermediate, duration: 18h 24m, modules: 12 modules)
     2. "Docker Essentials" (Docker whale logo, description, level: Beginner, duration: 10h 12m, modules: 8 modules)
     3. "TypeScript Deep Dive" (TypeScript "TS" logo, description, level: Intermediate, duration: 14h 36m, modules: 10 modules)
   - Sub-footer banner: Horizontal divider with star icon and text "New courses and lessons added every week.", accompanied by the warm terracotta bar gradient bottom graphic.
2. **Styling & Aesthetics**:
   - Utilize existing Tailwind v4 variables (`--color-neutral-50`, `--color-primary-500`, `--font-serif`, `--font-sans`) and subtle warm background colors.
   - Ensure pixel-perfect visual fidelity matching `design/vertex-home.png` for desktop, with responsive stacking for tablet/mobile viewports.

## Files Expected to Touch
- `app/page.tsx` [MODIFY]
- `components/ui/navigation.tsx` [MODIFY] (Add notification bell & avatar user profile trigger if needed)
- `components/ui/card.tsx` [MODIFY] (Ensure course cards match exact metadata icons/layout)

## Requirements
- Reproduce `design/vertex-home.png` visual design, typography, spacing, colors, and layout accurately.
- Fully responsive across desktop, tablet, and mobile breakpoints.
- Maintain clean client/server boundaries and TypeScript type safety.

## Security Considerations
- Pure presentational component/page; no sensitive client-side secrets or tokens involved.

## Acceptance Criteria
- Homepage at `http://localhost:3000` matches `design/vertex-home.png` visual specification.
- All interactive controls (nav links, buttons, search input, course cards) render correctly without errors.
- `npx tsc --noEmit` passes with 0 errors.
- `npm run lint` passes with 0 errors.
- `npm run build` succeeds.

## Checks to Run
- `npx tsc --noEmit`
- `npm run lint`
- `npm run build`

## Exact Manual Test Steps
1. Start local dev server (`npm run dev`) or check running dev server at `http://localhost:3000`.
2. Open `http://localhost:3000` in the browser.
3. Verify top navigation bar: check Vertex logo, `Courses` link, `My Learning` link, bell icon, and user profile avatar.
4. Verify hero section: inspect "INTELLIGENT LEARNING" pill badge, Playfair Display heading "Search your learning in plain English.", subtitle text, "Explore Courses →" button, and search input with `⌘ K` badge.
5. Verify "All Courses" section: check 3 course cards ("Next.js for Production", "Docker Essentials", "TypeScript Deep Dive") with proper icons, badges, titles, descriptions, level, duration, and module count metrics.
6. Check bottom section: verify "New courses and lessons added every week." star divider and terracotta bar background graphic.
7. Test viewport resizing to verify mobile responsiveness.
