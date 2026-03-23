# 3D Carousel Effect — How It Works

This documents the "rotating card carousel" effect on the fortune result page, so you can reuse it in other projects.

---

## Files Involved

| File | Role |
|------|------|
| `app/result/page.tsx` | **All the carousel logic lives here.** State, animation, drag, cards. |
| `ui/blur-fade.tsx` | Entrance animation wrapper (blur + slide in on mount). Used to reveal the carousel stage. |
| `framer-motion` (npm) | The animation engine. `motion.div` handles all 3D transforms. |

---

## How the 3D Carousel Works (in `app/result/page.tsx`)

### 1. State — which card is "active"

```tsx
const [activeIndex, setActiveIndex] = useState(0);
const prev = () => setActiveIndex((a) => Math.max(0, a - 1));
const next = () => setActiveIndex((a) => Math.min(results.length - 1, a + 1));
```

Just a single integer. Everything else is derived from it.

---

### 2. Perspective container — enables CSS 3D depth

```tsx
<div
  className="relative w-full flex items-start justify-center"
  style={{ perspective: 1200, minHeight: '60vh' }}
>
```

`perspective: 1200` on the **parent** is what makes child `rotateY` look 3D.
Without this, `rotateY` looks flat. Higher value = more subtle depth; lower = more dramatic.

---

### 3. Card positioning — each card is `absolute`, offset by index

```tsx
{results.map((result, index) => {
  const offset = index - activeIndex;  // -2, -1, 0, 1, 2
  const abs = Math.abs(offset);
  if (abs > 2) return null;            // only render ±2 cards from active

  const isActive = offset === 0;

  return (
    <motion.div
      key={result.category + index}
      className="absolute top-0"
      animate={{
        x: offset * 260,           // horizontal spread (px)
        rotateY: offset * -36,     // rotation angle per step (degrees)
        scale: 1 - abs * 0.13,    // shrink cards further away
        opacity: abs === 0 ? 1 : abs === 1 ? 0.58 : 0.22,  // fade out
        zIndex: 10 - abs,          // active card on top
      }}
      transition={{ type: 'spring', stiffness: 290, damping: 30 }}
      style={{ transformStyle: 'preserve-3d' }}
      ...
    >
```

Key values you can tune for other projects:
- `offset * 260` → horizontal gap between cards (increase for wider spread)
- `offset * -36` → rotation per step in degrees (increase for more dramatic tilt)
- `1 - abs * 0.13` → scale falloff (increase 0.13 to shrink side cards more)
- `stiffness: 290, damping: 30` → spring feel (lower stiffness = bouncier)

---

### 4. Swipe drag on the active card

```tsx
drag={isActive ? 'x' : false}
dragConstraints={{ left: 0, right: 0 }}
dragElastic={0.1}
onDragEnd={(_, info) => {
  if (info.offset.x < -80) next();   // swipe left → next card
  if (info.offset.x > 80) prev();    // swipe right → previous card
}}
```

Only the active card is draggable. `dragConstraints` snaps it back after release.
`80` is the threshold in px — below this the swipe is ignored.

---

### 5. Click side cards to navigate

```tsx
onClick={() => {
  if (offset === 1) next();
  if (offset === -1) prev();
}}
```

Clicking a visible side card advances the carousel toward it.

---

### 6. Dot indicators + arrow buttons

```tsx
{results.map((_, i) => (
  <button
    key={i}
    onClick={() => setActiveIndex(i)}
    className={`rounded-full transition-all duration-300 ${
      i === activeIndex
        ? 'w-6 h-2 bg-primary'       // active: pill shape
        : 'w-2 h-2 bg-muted-foreground/25'  // inactive: dot
    }`}
  />
))}
```

Active dot stretches to a pill (`w-6 h-2`). Standard pill-dot pattern.

---

### 7. Entrance animation — `BlurFade` wrapper (`ui/blur-fade.tsx`)

```tsx
<BlurFade delay={0.12} duration={0.65} direction="up" offset={50}>
  {/* carousel stage */}
</BlurFade>
```

`BlurFade` uses Framer Motion `AnimatePresence` + `useInView`.
On mount it slides the whole carousel up 50px + fades from `blur(6px)` to clear.
This is purely cosmetic entrance animation, separate from the carousel mechanics.

---

## Minimal Reusable Version (no app-specific code)

```tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ITEMS = ['Card A', 'Card B', 'Card C', 'Card D'];

export default function Carousel3D() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prev = () => setActiveIndex((a) => Math.max(0, a - 1));
  const next = () => setActiveIndex((a) => Math.min(ITEMS.length - 1, a + 1));

  return (
    <div style={{ perspective: 1200, position: 'relative', height: 300 }}>
      {ITEMS.map((item, index) => {
        const offset = index - activeIndex;
        const abs = Math.abs(offset);
        if (abs > 2) return null;

        return (
          <motion.div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              marginLeft: -110,    // half of card width
              width: 220,
              transformStyle: 'preserve-3d',
            }}
            animate={{
              x: offset * 260,
              rotateY: offset * -36,
              scale: 1 - abs * 0.13,
              opacity: abs === 0 ? 1 : abs === 1 ? 0.58 : 0.22,
              zIndex: 10 - abs,
            }}
            transition={{ type: 'spring', stiffness: 290, damping: 30 }}
            drag={offset === 0 ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) next();
              if (info.offset.x > 80) prev();
            }}
            onClick={() => {
              if (offset === 1) next();
              if (offset === -1) prev();
            }}
          >
            <div style={{
              background: '#1a1a1a',
              border: '1px solid #333',
              borderRadius: 16,
              padding: 32,
              cursor: offset !== 0 ? 'pointer' : 'default',
            }}>
              {item}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
```

**Dependencies:** only `framer-motion` (or `motion/react`).

---

## Summary of the Effect

1. All cards are `absolute` inside a `perspective` container — they stack on the same spot.
2. Each card's `x`, `rotateY`, `scale`, and `opacity` are driven by its distance from `activeIndex`.
3. Framer Motion spring-animates between states when `activeIndex` changes.
4. Drag on the active card + click on side cards + dot/arrow buttons all update `activeIndex`.
5. That's it. No canvas, no WebGL, no complex library — just CSS 3D + spring animation.
