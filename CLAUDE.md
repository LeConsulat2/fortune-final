# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # Development server with Turbopack
npm run build   # Production build
npm start       # Start production server
npm run lint    # Lint code
```

No test framework is configured. Known build quirk on Windows: `.next/trace` can get locked by orphaned node processes — run `taskkill //F //IM node.exe` then `rm -rf .next` before retrying.

## Environment Variables

```
GEMINI_API_KEY=   # Google Gemini API key (required) — store in .env.local, never .env
```

## Architecture

**Next.js 15 App Router** app that generates AI-powered personalized fortunes across 10 categories (general, love, job, money, mental-health, composure, interview, exam, assignment, golf).

### Data Flow

```
Landing (/) → Onboarding (3-step, first visit only) → /general
Returning users: Landing (/) → /general (one-tap per category) → /loading?category=X → /result?category=X
```

User data persists in **localStorage** (not sessionStorage). Returning users skip onboarding — the landing page CTA detects `isComplete` and routes to `/general` directly. From `/general`, tapping any category goes straight to `/loading` → `/result` (one-tap fortune). Quiz is optional — accessible via a gear icon on hover for each category.

Quiz answers are pre-filled from saved memory; a "Continue with saved answers" banner lets returning users skip the quiz in one tap.

The fortune result (`fortune-result`) is stored in **sessionStorage** separately — ephemeral, fresh each visit.

The API endpoint (`app/api/fortune/route.ts`) is edge-runtime, uses Google Gemini 2.5 Flash Lite via an OpenAI-compatible wrapper, and returns a rich JSON fortune object.

### Key Modules

| File | Purpose |
|------|---------|
| `lib/useUserMemory.ts` | Hook managing user profile in localStorage. Returns `userMemory`, `isLoaded`, `isComplete`, `updateUserMemory`, `clearUserMemory` |
| `lib/fortune-config.ts` | Registry mapping category slugs → prompt config. `getFortuneConfig(category)` used by the API |
| `lib/common-constants.ts` | `UserMemory` type, zodiac data, zodiac calculation |
| `app/api/fortune/route.ts` | Edge API: builds system prompt from `fortune-config` + `userMemory`, calls Gemini, returns JSON |
| `app/start/(onboarding)/` | 3-step onboarding: name/gender → birthdate → occupation. Only shown to new users |
| `app/page.tsx` | Landing page with TrueFocus animated title. Routes new → onboarding, returning → `/general` |
| `app/general/page.tsx` | Main hub for returning users. Featured "Today's Fortune" card + category grid. One-tap to fortune |
| `app/quiz/[category]/_components/quiz-client.tsx` | Paginated quiz (one question per page). Pre-fills from saved answers. Shows skip banner if answers exist |
| `app/golf/page.tsx` | Golf-specific single-page quiz (all questions at once, 2-col grid) — does not use quiz-client |
| `app/loading/page.tsx` | Atmospheric loading screen — calls `/api/fortune`, stores result in sessionStorage, redirects to `/result` |
| `app/result/page.tsx` | Renders fortune. **Text-focused for all categories; scores only shown for golf** |
| `app/choice/page.tsx` | Server-side redirect to `/general` (legacy route preserved) |

### Page Design Philosophy

- **No scores displayed except golf** — fortune results are text-focused with emphasis on readability and typography
- **Golf exception**: shows NumberTicker score (63–95, lower = better) as the hero element
- **Non-golf result hero**: the `overall.message` is displayed as large-format pull quote (2xl–5xl responsive)
- **Scroll-revealed sections**: result page uses `AnimatedContent` for staggered section entrances
- **Responsive layouts**: all main pages scale from `max-w-md` on mobile to `max-w-2xl`/`max-w-3xl`/`max-w-4xl` on desktop

### Fortune Output Schema

All categories return this JSON structure (defined in each `[category]-prompts.ts`):

```json
{
  "overall": {
    "score": 1-100,
    "message": "one sentence summary",
    "detail": "two paragraphs of specific, time-anchored guidance"
  },
  "areas": [
    { "name": "...", "score": 1-100, "insight": "one sentence" }
  ],
  "caution": "one specific warning",
  "opportunity": "one specific action to take today",
  "lucky": { "color": "...", "number": 1-99, "time": "..." },
  "personalised_insight": "2-3 sentences using their personal details"
}
```

**Golf exception:** `overall.score` is the predicted round score (63–95, lower = better), not a 0–100 scale. `lucky.number` is a hole number (1–18).

**Display rules:** The API still returns scores for all categories (needed for golf and internal ranking), but the result page **hides scores and progress bars for all non-golf categories**. Area insights are displayed as text-only cards.

### Prompt Writing Rules (all categories)

Every category prompt must include a **SPECIFICITY RULES** section instructing the AI to:
- Name concrete time windows ("this morning", "late afternoon")
- Name specific situation types ("a conversation you've been putting off")
- Name types of people ("a colleague", "someone from your past")
- Avoid abstract language ("the universe", "cosmic energy", "celestial alignment")

### API Configuration

- **Model:** `gemini-2.5-flash-lite` (via OpenAI-compatible endpoint)
- **max_tokens:** 4000 (richer schema requires more — do not reduce below 3500)
- **response_format:** `{ type: 'json_object' }`
- **User message** includes today's date (`new Date().toISOString().split('T')[0]`) for daily variance

### Adding a New Fortune Category

1. Create `app/[category]/[category]-prompts.ts` — follow existing pattern, include all schema fields
2. Register in `lib/fortune-config.ts` (import + add to both `fortuneCategories` and `fortuneCategoryLabels`)
3. Add to `app/general/page.tsx` `CATEGORIES` array
4. If using standard paginated quiz: link to `/quiz/[category]`
5. If using single-page form (like golf): create `app/[category]/page.tsx` with custom layout

### Golf Category Notes

- Route: `/golf` (custom single-page form, not `/quiz/golf`)
- Score range: 63–95 integer (predicted round score — lower is better)
- Areas: Driving, Iron Play, Short Game, Putting
- Lucky number = hole number (1–18)
- Prompt instructs genuine randomness — even great inputs should sometimes produce a bad score
- Result page uses `NumberTicker` counting from 99 down to the score. **NumberTicker API note:** `value` = the start number, `startValue` = the target — counterintuitive but correct per the component implementation

### UI Stack

- **ShadCN** components in `ui/` (new-york style, neutral base color)
- **Framer Motion** for page-level animations — variants in `lib/animated-flow.ts`
- **GSAP + ScrollTrigger** for scroll-based animations (AnimatedContent, ScrollReveal, SplitText)
- **React-bits components** in `components/`:
  - `AnimatedContent.tsx` — scroll-triggered content entrance (GSAP). Used on result page for section reveals. Props: `distance`, `direction`, `duration`, `ease`, `delay`, `threshold`
  - `TrueFocus.tsx` — cycling word focus with animated corner brackets (Framer Motion). Used on landing page. Props: `sentence`, `blurAmount`, `borderColor`, `glowColor`, `animationDuration`, `pauseBetweenAnimations`
  - `ScrollReveal.tsx` — word-by-word scroll reveal with blur/rotation (GSAP). Props: `children` (string), `enableBlur`, `baseOpacity`, `blurStrength`
  - `SplitText.tsx` — character/word split animation (GSAP SplitText plugin — premium). Props: `text`, `splitType`, `delay`, `duration`, `tag`
  - `Antigravity.tsx` — 3D particle system (Three.js + React Three Fiber)
  - `OrbitImages.tsx` — images orbiting in shapes (Framer Motion)
  - `Masonry.tsx` — responsive masonry grid with GSAP animations
- **Tailwind CSS v4** — configured via `app/globals.css` (no `tailwind.config.js`)
- **Lucide React** for icons
- **NumberTicker** at `ui/number-ticker.tsx` — animates number changes with spring physics

### Theme & Styling

- **Dark mode only** — `<html class="dark">`, all colors via CSS custom properties (oklch color space)
- **Primary color**: warm red `oklch(0.645 0.246 16.439)` (dark mode)
- **Color system**: ShadCN CSS variables (`--primary`, `--background`, `--card`, `--border`, `--muted-foreground`, etc.) defined in `app/globals.css`
- **Global link style**: `a` tags get `text-primary/80` except when they have `text-primary-foreground` (e.g., inside buttons using `asChild`)
- **Custom animations** defined in globals.css: `zipIn`, `pulseGlow`, `streamDown`, `warmGlow`, `floatGentle`
- **AnimatedContent caveat**: wraps children in `<div class="invisible">` and reveals via GSAP ScrollTrigger. Do **not** use for above-the-fold content that must be visible on load — use Framer Motion `initial`/`animate` instead
- `suppressHydrationWarning` on `<body>` to suppress browser extension attribute mismatches

### Code Conventions

- Prefer interfaces over types; avoid enums — use const maps
- Favor React Server Components; minimize `'use client'` directives
- Async params in layouts: `const params = await props.params`
- Event handlers prefixed with `handle`
- Directory names: lowercase with dashes
- Favor named exports for components
- Color values for non-CSS-variable contexts (e.g., TrueFocus `borderColor` prop): use raw oklch values, not `hsl(var(--primary))`
