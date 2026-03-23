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
OPENAI_API_KEY=   # OpenAI API key (required) — store in .env.local, never .env
```

## Architecture

**Next.js 15 App Router** app that generates AI-powered personalized fortunes across 10 categories (general, love, job, money, mental-health, composure, interview, exam, assignment, golf).

### Data Flow

```
All users: Landing (/) → Intercept overlay (Quick | Personalised)
  Quick:        → /general?mode=quick  (no personal data required)
  Personalised: → /start/step-1-personal-info → /start/step-2-birthdate → /general?mode=personalised
                  (returning with data skips onboarding, goes straight to /general?mode=personalised)

From /general?mode=*: select categories → /loading?categories=X,Y → /result?categories=X,Y
```

**Intercept overlay** (`app/page.tsx`): clicking the main CTA (whether "Start" for new users or "See Today's Fortune" for returning) always shows a full-screen animated overlay with two side-by-side cards — Quick (left) and Personalised (right). Mode is passed as `?mode=quick` or `?mode=personalised` URL param to `/general`.

**Mode behaviour in `/general`:**
- `?mode=quick` — no onboarding required; gear icons hidden; "Quick Mode" badge shown in header
- `?mode=personalised` — requires `isPersonalised` (name + birthDate); shows user name/zodiac/date; gear icons visible for quiz customisation
- Missing `?mode` param → redirected back to `/` to pick

**Category selection limit:** max 4 categories at once. Attempting a 5th shows an amber "Max 4 at a time" alert and dims unavailable cards.

User data persists in **localStorage** (not sessionStorage). Onboarding is **2 steps** (name/gender → birthdate). Occupation is not collected.

Quiz answers are pre-filled from saved memory; a "Continue with saved answers" banner lets returning users skip the quiz in one tap.

The fortune result (`fortune-result`) is stored in **sessionStorage** separately — ephemeral, fresh each visit.

The API endpoint (`app/api/fortune/route.ts`) is edge-runtime, uses the OpenAI API (`gpt-5-nano` by default), and returns a rich JSON fortune object.

### Key Modules

| File | Purpose |
|------|---------|
| `lib/useUserMemory.ts` | Hook managing user profile in localStorage. Returns `userMemory`, `isLoaded`, `isComplete`, `updateUserMemory`, `clearUserMemory` |
| `lib/fortune-config.ts` | Registry mapping category slugs → prompt config. `getFortuneConfig(category)` used by the API |
| `lib/common-constants.ts` | `UserMemory` type, zodiac data, zodiac calculation |
| `app/api/fortune/route.ts` | Edge API: builds system prompt from `fortune-config` + `userMemory`, calls OpenAI, returns JSON |
| `app/start/(onboarding)/` | 2-step onboarding: name/gender → birthdate. Step 2 redirects to `/general?mode=personalised` on completion |
| `app/page.tsx` | Landing page with TiltedCard image, TrueFocus animated title, "How It Works" section. Single CTA always opens the Quick/Personalised intercept overlay |
| `app/general/page.tsx` | Server wrapper with sr-only crawlable content + `general-client.tsx` interactive hub. Reads `?mode` param to show mode-specific UI |
| `app/quiz/[category]/_components/quiz-client.tsx` | Paginated quiz (one question per page). Pre-fills from saved answers. Shows skip banner if answers exist |
| `app/golf/page.tsx` | Golf-specific single-page quiz (all questions at once, 2-col grid) — does not use quiz-client |
| `app/loading/page.tsx` | Atmospheric loading screen — calls `/api/fortune`, stores result in sessionStorage, redirects to `/result` |
| `app/result/page.tsx` | Renders fortune. **Text-focused for all categories; scores only shown for golf** |
| `app/choice/page.tsx` | Server-side redirect to `/general` (legacy route preserved) |
| `app/zodiac/page.tsx` | Zodiac index — links to all 12 sign guide pages with emojis + date ranges |
| `app/zodiac/[sign]/page.tsx` | Individual zodiac sign guide (statically generated via `generateStaticParams`). ~600 words each: overview, personality, strengths/challenges, love, career, fortune connection |
| `app/zodiac/zodiac-content.ts` | Content data for all 12 zodiac signs — personality, love style, career style, fortune connection |

### Page Design Philosophy

- **No scores displayed except golf** — fortune results are text-focused with emphasis on readability and typography
- **Golf exception**: shows NumberTicker score (63–95, lower = better) as the hero element
- **Non-golf result hero**: the `overall.message` is displayed as large-format pull quote (2xl–5xl responsive)
- **Responsive layouts**: all main pages scale from `max-w-md` on mobile to `max-w-2xl`/`max-w-3xl`/`max-w-4xl` on desktop

### Result Page Card Architecture (`app/result/page.tsx`)

The result page uses a **3D carousel** of fortune cards with Framer Motion.

**Card structure:**
- Fixed width `w-[min(440px,88vw)]`, max height `68vh`, `overflow-y-auto` with hidden scrollbar (`scrollbar-hide` class from globals.css)
- **Sticky header** (`sticky top-0 z-10`): emoji + category title, stays visible as card content scrolls. Uses `bg-card/95 backdrop-blur-sm` for a frosted glass effect over scrolling content
- **Content area** (`px-6 py-6 space-y-6`): overall message quote → "Today's Reading" label → reading paragraphs → bottom padding
- Golf cards additionally show a `NumberTicker` score hero above the message

**Carousel mechanics (Framer Motion):**
- Cards are absolutely positioned, animated with `x` offset, `rotateY`, `scale`, and `opacity` based on distance from active index
- `perspective: 1200` on the container for 3D depth
- Supports swipe drag on active card (`drag="x"`) and click-to-navigate on adjacent cards
- Multi-card navigation: dot indicators + arrow buttons + swipe

**Text highlights (CSS-based, not rough-notation):**
- The AI returns a `highlights` array with `{ text, type }` where type is `"caution"` or `"seize"`
- `ReadingParagraph` component finds exact substring matches and wraps them in `<mark>` elements
- Caution = red text + wavy red underline; Seize = emerald text + solid emerald underline
- **Why not rough-notation/Highlighter:** The `rough-notation` library draws SVG overlays positioned absolutely relative to the page. Inside a scrollable container (`overflow-y-auto`), the SVG highlights detach from the text and "follow the scroll" — a fundamental incompatibility. CSS underlines/colors are inline with the text flow and always stay fixed to their content. The `ui/highlighter.tsx` component still exists but is NOT used on the result page for this reason.

**Action buttons (sticky bottom bar):**
- Positioned outside the carousel as a `sticky bottom-0` bar with gradient fade from background
- "Back" button (with `ArrowLeft` icon) navigates to `/general`
- "Try again" button (with `RotateCcw` icon) clears session and re-fetches fortune
- Buttons must remain outside the card — placing them inside the scrollable card area makes them scroll out of view

**API variance seed:**
- The user message includes an "internal variance seed" (random 1–10) to shift fortune tone
- The prompt explicitly says "Do not mention this seed or any numeric rating in the reading text" — otherwise the AI echoes "X/10" scores in the prose

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

- **Model:** `gpt-5-nano` by default (`USE_GPT=false` in .env.local falls back to `gemini-2.5-flash-lite` via OpenAI-compatible endpoint)
- **max_completion_tokens:** 10000
- **response_format:** `{ type: 'json_object' }`
- **User message** includes today's date (`new Date().toISOString().split('T')[0]`) for daily variance
- **Variance seed:** random 1–10 integer in user message shifts tone; prompt instructs AI not to echo it in reading text

### Adding a New Fortune Category

1. Create `app/[category]/[category]-prompts.ts` — follow existing pattern, include all schema fields
2. Register in `lib/fortune-config.ts` (import + add to both `fortuneCategories` and `fortuneCategoryLabels`)
3. Add to `app/general/page.tsx` static category grid AND `general-client.tsx` `ALL_CATEGORIES` array
4. Create `app/[category]/page.tsx` as a **server component** with 400+ words of static content (what the reading covers, sample questions, example insight, tips). This is critical for SEO/AdSense — never create a stub page
5. If using standard paginated quiz: link to `/quiz/[category]`
6. If using single-page form (like golf): create the quiz form as a separate client component imported by the page
7. Add the category to `app/sample-results/page.tsx` with a sample fortune
8. Add to `app/sitemap.ts`

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

### SEO & AdSense Architecture

The site is structured for Google AdSense approval. Key principles:

- **Every page must have crawlable content.** Category pages (`/love`, `/money`, etc.) are server components with 400-800 words of static text. Never create empty stub pages.
- **Server/client split pattern:** Pages that need interactivity use a server component wrapper (`page.tsx` with metadata + static content) that imports a `'use client'` component for the interactive parts. See `app/general/page.tsx` + `general-client.tsx`.
- **`/general` static content is `sr-only`** — hidden visually but crawlable by search engines. Do not remove it.
- **JSON-LD structured data:** `WebApplication` schema in root `layout.tsx`, `FAQPage` schema on `/faq`. Add appropriate schemas to new content pages.
- **`noindex` on dynamic pages:** `/loading` and `/result` have `robots: { index: false }` via layout metadata — they're user-specific and provide no crawl value.
- **Zodiac content pillar:** 12 sign guide pages at `/zodiac/[sign]` provide ~8,000 words of evergreen, SEO-rich content. Content data lives in `app/zodiac/zodiac-content.ts`.
- **Sitemap:** `app/sitemap.ts` uses two date tiers (`recentDate` / `stableDate`). Update `recentDate` when content changes. All zodiac pages are auto-generated from `ZODIAC_SIGNS`.
- **robots.txt:** AdSense crawlers (`Mediapartners-Google`, `AdsBot-Google`) are explicitly allowed. `/api/`, `/loading`, `/result`, `/start/` are disallowed.
- **ads.txt:** Located at `public/ads.txt` with the Google publisher ID.

### Code Conventions

- Prefer interfaces over types; avoid enums — use const maps
- Favor React Server Components; minimize `'use client'` directives
- Async params in layouts: `const params = await props.params`
- Event handlers prefixed with `handle`
- Directory names: lowercase with dashes
- Favor named exports for components
- Color values for non-CSS-variable contexts (e.g., TrueFocus `borderColor` prop): use raw oklch values, not `hsl(var(--primary))`
