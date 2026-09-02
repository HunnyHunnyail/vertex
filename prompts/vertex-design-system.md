# Implementation Prompt - Vertex Design System

## Goal
Implement the full Vertex Design System in Next.js (App Router) and Tailwind CSS v4 as defined in `design/vertex-designsystem.png`.

## Skills Read
- `sanity-best-practices`
- `AGENTS.md` rules
- `node_modules/next/dist/docs/`

## Code & Config Inspected
- `package.json` (Next.js 16.3.4, React 19.2.8, Tailwind CSS v4)
- `app/layout.tsx` (Root layout setup)
- `app/globals.css` (Tailwind CSS `@import "tailwindcss";` setup)
- `design/vertex-designsystem.png` (Design specification reference)

## Decisions & Assumptions
1. Use Next.js `next/font/google` for `Inter` (sans) and `Playfair_Display` (serif) fonts.
2. Define design system tokens in `app/globals.css` using Tailwind v4 `@theme` directive.
3. Install `lucide-react` to render pixel-perfect 24x24px outline and filled icons matching section 06 of the design system.
4. Implement modular, reusable UI components in `components/ui/` (`button.tsx`, `input.tsx`, `badge.tsx`, `status-indicator.tsx`, `progress-bar.tsx`, `card.tsx`, `navigation.tsx`).
5. Render a full interactive design system showcase page at `app/page.tsx` displaying sections 01–14 matching `vertex-designsystem.png`.

## Files Expected to Touch
- `package.json`
- `app/layout.tsx`
- `app/globals.css`
- `app/page.tsx`
- `components/ui/button.tsx` [NEW]
- `components/ui/input.tsx` [NEW]
- `components/ui/badge.tsx` [NEW]
- `components/ui/status-indicator.tsx` [NEW]
- `components/ui/progress-bar.tsx` [NEW]
- `components/ui/card.tsx` [NEW]
- `components/ui/navigation.tsx` [NEW]

## Requirements
- Match layout, spacing, typography, color palettes, radiuses, shadows, and interactive states from `vertex-designsystem.png`.
- Ensure full responsiveness down to mobile viewports while keeping desktop exact.
- No public tokens or secrets exposed; client/server boundary preserved.

## Security Considerations
- Pure frontend presentation and components; no sensitive keys involved.

## Acceptance Criteria
- All 14 sections of the design system are implemented accurately and displayed on `app/page.tsx`.
- TypeScript type checks pass (`npx tsc --noEmit`).
- ESLint checks pass (`npm run lint`).
- Next.js production build succeeds (`npm run build`).

## Checks to Run
- `npx tsc --noEmit`
- `npm run lint`
- `npm run build`

## Exact Manual Test Steps
1. Navigate to `http://localhost:3000` in the browser.
2. Verify Color swatches (Primary 100-500, Neutral 50-900).
3. Verify Type Scale (Display 1 & 2 in Playfair Display, Headings 1-3 & Body styles in Inter).
4. Interact with Buttons (Primary, Secondary, Tertiary, Text) in Default, Hover, and Disabled states.
5. Test Search input (focus outline, ⌘K badge) and Select input.
6. Check Badges, Status indicators, and Progress bar.
7. Verify Course Card, Lesson Video Card, Lesson Text Card, and Resource Card rendering.
8. Verify Navigation Header, Breadcrumbs, and Pagination.
