'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useUserMemory } from '@/lib/useUserMemory';
import { Button } from '@/ui/button';
import { NumberTicker } from '@/ui/number-ticker';
import { BlurFade } from '@/ui/blur-fade';
import { Highlighter } from '@/ui/highlighter';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FortuneArea {
  name: string;
  score: number;
  insight: string;
}

interface FortunePrediction {
  overall: { score: number; message: string; detail: string };
  areas?: FortuneArea[];
  caution?: string;
  opportunity?: string;
  lucky?: { color: string; number: number; time: string };
  personalised_insight?: string;
}

interface FortuneResult {
  category: string;
  fortune: FortunePrediction;
}

const CATEGORY_META: Record<string, { title: string; emoji: string }> = {
  general:       { title: "Today's Fortune", emoji: '✨' },
  love:          { title: 'Love & Romance',  emoji: '❤️' },
  job:           { title: 'Career',          emoji: '💼' },
  interview:     { title: 'Interview',       emoji: '🎤' },
  exam:          { title: 'Exam',            emoji: '📝' },
  assignment:    { title: 'Assignment',      emoji: '💻' },
  money:         { title: 'Money',           emoji: '💰' },
  composure:     { title: 'Composure',       emoji: '🧘' },
  'mental-health': { title: 'Mental Health', emoji: '🧠' },
  golf:          { title: 'Golf',            emoji: '⛳' },
};

export default function ResultPageWithSuspense() {
  return (
    <Suspense fallback={null}>
      <ResultPage />
    </Suspense>
  );
}

function ResultPage() {
  const router = useRouter();
  const { isLoaded, isComplete } = useUserMemory();
  const searchParams = useSearchParams();
  const [results, setResults] = useState<FortuneResult[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const categoriesParam = searchParams?.get('categories');
  const categoryParam = searchParams?.get('category') || 'general';

  useEffect(() => {
    if (!isLoaded) return;
    if (!isComplete) {
      router.push('/start/step-1-personal-info');
      return;
    }
    try {
      if (categoriesParam) {
        const stored = sessionStorage.getItem('fortune-results');
        if (stored) {
          setResults(JSON.parse(stored) as FortuneResult[]);
        } else {
          router.push(`/loading?categories=${categoriesParam}`);
          return;
        }
      } else {
        const stored = sessionStorage.getItem('fortune-result');
        if (stored) {
          setResults([{ category: categoryParam, fortune: JSON.parse(stored) as FortunePrediction }]);
        } else {
          router.push(`/loading?category=${categoryParam}`);
          return;
        }
      }
    } catch {
      setError('Failed to load your reading.');
    } finally {
      setReady(true);
    }
  }, [isLoaded, isComplete, categoriesParam, categoryParam, router]);

  if (!isLoaded || !ready) return null;

  if (error || results.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center space-y-4">
          <p className="text-xl font-bold text-foreground">Something went wrong</p>
          <Button onClick={() => router.push('/general')} className="bg-primary text-primary-foreground">
            Go back
          </Button>
        </div>
      </div>
    );
  }

  const handleRetry = () => {
    sessionStorage.removeItem('fortune-results');
    sessionStorage.removeItem('fortune-result');
    if (categoriesParam) {
      router.push(`/loading?categories=${categoriesParam}`);
    } else {
      router.push(`/loading?category=${categoryParam}`);
    }
  };

  const prev = () => setActiveIndex((a) => Math.max(0, a - 1));
  const next = () => setActiveIndex((a) => Math.min(results.length - 1, a + 1));

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Ambient glow */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[500px] h-[260px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center py-8 md:py-12 px-4 flex-1">

        {/* Header label */}
        <BlurFade delay={0.05} duration={0.4} className="mb-6 text-center">
          <p className="text-[11px] font-medium text-muted-foreground/60 uppercase tracking-[0.22em]">
            {results.length === 1 ? 'Your Reading' : `${results.length} Readings`}
          </p>
        </BlurFade>

        {/* 3D carousel stage */}
        <BlurFade delay={0.12} duration={0.65} direction="up" offset={50} className="w-full">
          <div
            className="relative w-full flex items-start justify-center"
            style={{ perspective: 1200, minHeight: '60vh' }}
          >
            {results.map((result, index) => {
              const offset = index - activeIndex;
              const abs = Math.abs(offset);
              if (abs > 2) return null;

              const isActive = offset === 0;

              return (
                <motion.div
                  key={result.category + index}
                  className="absolute top-0"
                  animate={{
                    x: offset * 260,
                    rotateY: offset * -36,
                    scale: 1 - abs * 0.13,
                    opacity: abs === 0 ? 1 : abs === 1 ? 0.58 : 0.22,
                    zIndex: 10 - abs,
                  }}
                  transition={{ type: 'spring', stiffness: 290, damping: 30 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  drag={isActive ? 'x' : false}
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
                  <FortuneCard
                    result={result}
                    isActive={isActive}
                    index={index}
                    total={results.length}
                  />
                </motion.div>
              );
            })}
          </div>
        </BlurFade>

        {/* Navigation — dots + arrows */}
        {results.length > 1 && (
          <BlurFade delay={0.3} duration={0.4} className="flex flex-col items-center gap-3 mt-6">
            {/* Pill dots */}
            <div className="flex gap-2 items-center">
              {results.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? 'w-6 h-2 bg-primary'
                      : 'w-2 h-2 bg-muted-foreground/25 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex items-center gap-5">
              <button
                onClick={prev}
                disabled={activeIndex === 0}
                className="p-2 rounded-full border border-border/50 text-muted-foreground/50 hover:text-foreground hover:border-border transition-all disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-xs text-muted-foreground/40 tabular-nums min-w-[40px] text-center">
                {activeIndex + 1} / {results.length}
              </span>
              <button
                onClick={next}
                disabled={activeIndex === results.length - 1}
                className="p-2 rounded-full border border-border/50 text-muted-foreground/50 hover:text-foreground hover:border-border transition-all disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </BlurFade>
        )}

        {/* Actions */}
        <BlurFade delay={0.35} duration={0.4} className="flex gap-3 w-full max-w-sm mt-8">
          <Button
            onClick={() => router.push('/general')}
            variant="outline"
            className="flex-1 h-12 border-border text-foreground hover:bg-card cursor-pointer"
          >
            Categories
          </Button>
          <Button
            onClick={handleRetry}
            className="flex-1 h-12 bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
          >
            Try again
          </Button>
        </BlurFade>

      </div>
    </div>
  );
}

function FortuneCard({
  result,
  isActive,
  index,
  total,
}: {
  result: FortuneResult;
  isActive: boolean;
  index: number;
  total: number;
}) {
  const { category, fortune } = result;
  const isGolf = category === 'golf';
  const meta = CATEGORY_META[category] || { title: category, emoji: '🔮' };
  const detailParagraphs = (fortune.overall.detail ?? '').split('\n\n').filter(Boolean);

  return (
    <div
      className={`w-[min(440px,88vw)] rounded-2xl bg-card border transition-shadow duration-300 overflow-y-auto ${
        isActive
          ? 'border-primary/25 shadow-2xl shadow-primary/10'
          : 'border-border/40 cursor-pointer'
      }`}
      style={{ maxHeight: '68vh' }}
    >
      {/* Sticky card header */}
      <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-3.5 bg-card/95 backdrop-blur-sm border-b border-border/30">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">{meta.emoji}</span>
          <span className="text-sm font-semibold text-foreground">{meta.title}</span>
        </div>
        {total > 1 && (
          <span className="text-[10px] text-muted-foreground/35 tabular-nums">{index + 1}/{total}</span>
        )}
      </div>

      <div className="px-5 py-5 space-y-5">

        {/* GOLF: score hero */}
        {isGolf && (
          <div className="text-center py-3">
            <NumberTicker
              value={99}
              startValue={fortune.overall.score}
              direction="down"
              delay={0.3}
              className={`text-7xl font-bold tabular-nums ${
                fortune.overall.score <= 74 ? 'text-emerald-400'
                : fortune.overall.score <= 85 ? 'text-amber-400'
                : 'text-red-400'
              }`}
            />
            <p className="text-[10px] text-muted-foreground/40 mt-1">predicted score · lower is better</p>
          </div>
        )}

        {/* Overall message */}
        <div>
          <p className={`font-semibold text-foreground leading-snug tracking-tight ${
            isGolf
              ? 'text-sm italic text-foreground/75 text-center'
              : 'text-xl md:text-2xl'
          }`}>
            &ldquo;{fortune.overall.message}&rdquo;
          </p>
        </div>

        {/* Detailed reading */}
        {detailParagraphs.length > 0 && (
          <div>
            <p className="text-[10px] font-medium text-muted-foreground/45 uppercase tracking-[0.16em] mb-2.5">
              Today&apos;s Reading
            </p>
            <div className="space-y-3">
              {detailParagraphs.map((p, i) => (
                <p key={i} className="text-sm md:text-base text-foreground/72 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Watch out — Highlighter highlight */}
        {fortune.caution && (
          <div className="rounded-xl bg-red-500/5 border border-red-500/10 p-4">
            <p className="text-[10px] font-bold text-red-400/75 uppercase tracking-[0.15em] mb-2">
              ⚠ Watch out
            </p>
            <p className="text-sm md:text-base text-foreground/72 leading-relaxed">
              <Highlighter
                action="highlight"
                color="rgba(239, 68, 68, 0.18)"
                strokeWidth={1}
                animationDuration={900}
                isView={false}
              >
                {fortune.caution}
              </Highlighter>
            </p>
          </div>
        )}

        {/* Seize this — Highlighter underline */}
        {fortune.opportunity && (
          <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/10 p-4">
            <p className="text-[10px] font-bold text-emerald-400/75 uppercase tracking-[0.15em] mb-2">
              → Seize this
            </p>
            <p className="text-sm md:text-base text-foreground/72 leading-relaxed">
              <Highlighter
                action="underline"
                color="rgba(52, 211, 153, 0.65)"
                strokeWidth={1.5}
                animationDuration={700}
                isView={false}
              >
                {fortune.opportunity}
              </Highlighter>
            </p>
          </div>
        )}

        {/* Breakdown / areas */}
        {fortune.areas && fortune.areas.length > 0 && (
          <div>
            <p className="text-[10px] font-medium text-muted-foreground/45 uppercase tracking-[0.16em] mb-3">
              Breakdown
            </p>
            <div className={`grid gap-2 ${isGolf ? 'grid-cols-2' : 'grid-cols-1'}`}>
              {fortune.areas.map((area) => (
                <div key={area.name} className="rounded-lg bg-muted/20 border border-border/30 p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-foreground">{area.name}</span>
                    {isGolf && <span className="text-xs font-bold text-foreground/60">{area.score}</span>}
                  </div>
                  {isGolf && (
                    <div className="w-full h-0.5 rounded-full bg-muted overflow-hidden mb-1.5">
                      <motion.div
                        className={`h-full rounded-full ${
                          area.score >= 70 ? 'bg-emerald-500'
                          : area.score >= 45 ? 'bg-amber-500'
                          : 'bg-red-500'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${area.score}%` }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                    </div>
                  )}
                  <p className="text-xs text-foreground/58 leading-relaxed">{area.insight}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lucky elements */}
        {fortune.lucky && (
          <div className="rounded-xl bg-card/60 border border-border/40 p-4">
            <p className="text-[10px] font-medium text-muted-foreground/45 uppercase tracking-[0.16em] mb-3">
              Lucky elements
            </p>
            <div className="flex justify-around text-center">
              <div>
                <div className="text-lg mb-1">🎨</div>
                <div className="text-[10px] text-muted-foreground/45 mb-0.5">Color</div>
                <div className="text-xs font-medium text-foreground capitalize">{fortune.lucky.color}</div>
              </div>
              <div>
                <div className="text-lg mb-1">{isGolf ? '⛳' : '🔢'}</div>
                <div className="text-[10px] text-muted-foreground/45 mb-0.5">{isGolf ? 'Hole' : 'Number'}</div>
                <div className="text-xs font-medium text-foreground">
                  {isGolf ? `#${fortune.lucky.number}` : fortune.lucky.number}
                </div>
              </div>
              <div>
                <div className="text-lg mb-1">⏰</div>
                <div className="text-[10px] text-muted-foreground/45 mb-0.5">Time</div>
                <div className="text-xs font-medium text-foreground capitalize">{fortune.lucky.time}</div>
              </div>
            </div>
          </div>
        )}

        {/* Personal insight */}
        {fortune.personalised_insight && (
          <div className="rounded-xl bg-primary/5 border border-primary/10 p-4">
            <p className="text-[10px] font-medium text-muted-foreground/45 uppercase tracking-[0.16em] mb-2">
              Personal insight
            </p>
            <p className="text-sm md:text-base text-foreground/68 italic leading-relaxed">
              {fortune.personalised_insight}
            </p>
          </div>
        )}

        <div className="h-1" />
      </div>
    </div>
  );
}
