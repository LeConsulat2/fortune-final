# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # Development server with Turbopack
npm run build   # Production build
npm start       # Start production server
npm run lint    # Lint code
```

No test framework is configured.

## Environment Variables

```
GEMINI_API_KEY=   # Google Gemini API key (required) — store in .env.local, never .env
```

## Architecture

**Next.js 15 App Router** app that generates AI-powered personalized fortunes across 10 categories (general, love, job, money, mental-health, composure, interview, exam, assignment, golf).

### Data Flow

```
Onboarding (3-step, first visit only) → localStorage → /quiz/[category] or /golf → /loading?category=X → /result?category=X
```

User data persists in **localStorage** (not sessionStorage). Returning users skip onboarding — the landing page CTA detects `isComplete` and routes to `/general` directly. Quiz answers are pre-filled from saved memory; a "Continue with saved answers" banner lets returning users skip the quiz in one tap.

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
| `app/quiz/[category]/_components/quiz-client.tsx` | Paginated quiz (one question per page). Pre-fills from saved answers. Shows skip banner if answers exist |
| `app/golf/page.tsx` | Golf-specific single-page quiz (all questions at once, 2-col grid) — does not use quiz-client |
| `app/loading/page.tsx` | Calls `/api/fortune`, stores result in sessionStorage, redirects to `/result` |
| `app/result/page.tsx` | Renders fortune. Golf category gets distinct green theme + NumberTicker score display |

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
3. Add to `app/choice/page.tsx` category list
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
- **Framer Motion** for animations — variants in `lib/animated-flow.ts`
- **Tailwind CSS v4** — configured via `app/globals.css` (no `tailwind.config.js`)
- **Lucide React** for icons
- **NumberTicker** at `ui/number-ticker.tsx` — animates number changes with spring physics

### Code Conventions

- Prefer interfaces over types; avoid enums — use const maps
- Favor React Server Components; minimize `'use client'` directives
- Async params in layouts: `const params = await props.params`
- Event handlers prefixed with `handle`
- Directory names: lowercase with dashes
- Favor named exports for components
