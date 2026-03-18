'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useUserMemory } from '@/lib/useUserMemory';
import { ZODIAC_SIGNS_LABELS, ZodiacSign } from '@/lib/common-constants';
import { Button } from '@/ui/button';
import { formatDate } from '@/lib/zodiac';
import { NumberTicker } from '@/ui/number-ticker';
import AnimatedContent from '@/components/AnimatedContent';

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

const getCategoryTitle = (category: string) => {
  const titles: Record<string, string> = {
    general: 'Today\'s Fortune',
    love: 'Love & Romance',
    job: 'Career',
    interview: 'Interview',
    exam: 'Exam',
    assignment: 'Assignment',
    money: 'Money',
    composure: 'Composure',
    'mental-health': 'Mental Health',
    golf: 'Golf',
  };
  return titles[category] || category;
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
  const { userMemory, isLoaded } = useUserMemory();
  const searchParams = useSearchParams();
  const category = searchParams?.get('category') || 'general';
  const [fortune, setFortune] = useState<FortunePrediction | null>(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoaded) return;
    if (!userMemory?.name || !userMemory?.birthDate) {
      router.push('/start/step-1-personal-info');
      return;
    }
    try {
      const stored = sessionStorage.getItem('fortune-result');
      if (stored) {
        setFortune(JSON.parse(stored) as FortunePrediction);
      } else {
        router.push(`/loading?category=${category}`);
        return;
      }
    } catch {
      setError('Failed to load your fortune.');
    } finally {
      setReady(true);
    }
  }, [isLoaded, userMemory, router, category]);

  if (!isLoaded || !ready) return null;

  if (error || !fortune) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center space-y-4">
          <p className="text-xl font-bold text-foreground">Something went wrong</p>
          <p className="text-sm text-muted-foreground">{error}</p>
          <Button onClick={() => router.push('/general')} className="bg-primary text-primary-foreground">
            Go back
          </Button>
        </div>
      </div>
    );
  }

  const zodiacInfo = userMemory?.zodiacSign
    ? ZODIAC_SIGNS_LABELS[userMemory.zodiacSign as ZodiacSign]
    : { name: '', emoji: '' };
  const today = formatDate(new Date());
  const isGolf = category === 'golf';
  const detailParagraphs = (fortune.overall.detail ?? '').split('\n\n').filter(Boolean);

  const scoreColor = (s: number) => {
    if (s >= 70) return 'bg-emerald-500';
    if (s >= 45) return 'bg-amber-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen px-4 py-8 md:py-12 relative">
      {/* Ambient glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-md md:max-w-2xl lg:max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-[0.2em] mb-1">
            {getCategoryTitle(category)}
          </p>
          <p className="text-xs text-muted-foreground/60">
            {userMemory?.name} · {zodiacInfo.name} {zodiacInfo.emoji} · {today}
          </p>
        </motion.div>

        {/* GOLF: Show score as hero */}
        {isGolf && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, type: 'spring', damping: 20 }}
            className="text-center py-8"
          >
            <NumberTicker
              value={99}
              startValue={fortune.overall.score}
              direction="down"
              delay={0.3}
              className={`text-8xl md:text-9xl font-bold tabular-nums ${
                fortune.overall.score <= 74 ? 'text-emerald-400'
                : fortune.overall.score <= 85 ? 'text-amber-400'
                : 'text-red-400'
              }`}
            />
            <p className="text-xs text-muted-foreground mt-2">predicted score (lower = better)</p>
          </motion.div>
        )}

        {/* NON-GOLF: Hero message — the main event */}
        {!isGolf && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center py-6 md:py-10 mb-4"
          >
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-snug md:leading-tight tracking-tight px-2 md:px-8">
              &ldquo;{fortune.overall.message}&rdquo;
            </p>
          </motion.div>
        )}

        {/* Golf: also show the one-line message */}
        {isGolf && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-base md:text-lg font-medium text-foreground/90 italic mb-8 px-2"
          >
            &ldquo;{fortune.overall.message}&rdquo;
          </motion.p>
        )}

        {/* Detailed reading — larger, more readable text */}
        <AnimatedContent distance={30} duration={0.6} delay={0.1} threshold={0.05}>
          <div className="mb-8 md:mb-10 p-6 md:p-8 rounded-2xl bg-card/50 border border-border/50">
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-[0.15em] mb-4">Today&apos;s Reading</h2>
            {detailParagraphs.map((p, i) => (
              <p key={i} className="text-base md:text-lg text-foreground/85 mb-4 leading-relaxed md:leading-loose last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </AnimatedContent>

        {/* Areas */}
        {fortune.areas && fortune.areas.length > 0 && (
          <AnimatedContent distance={30} duration={0.6} delay={0.15} threshold={0.05}>
            <div className="mb-8 md:mb-10">
              <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-[0.15em] mb-4 px-1">Breakdown</h2>
              <div className={`grid gap-3 ${isGolf ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-2'}`}>
                {fortune.areas.map((area, i) => (
                  <motion.div
                    key={area.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="p-4 md:p-5 rounded-xl bg-card/50 border border-border/50"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-foreground">{area.name}</span>
                      {isGolf && <span className="text-sm font-bold text-foreground">{area.score}</span>}
                    </div>
                    {isGolf && (
                      <div className="w-full h-1 rounded-full bg-muted overflow-hidden mb-2">
                        <motion.div
                          className={`h-full rounded-full ${scoreColor(area.score)}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${area.score}%` }}
                          transition={{ duration: 0.8, delay: 0.6 + i * 0.08 }}
                        />
                      </div>
                    )}
                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{area.insight}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        )}

        {/* Caution & Opportunity */}
        {(fortune.caution || fortune.opportunity) && (
          <AnimatedContent distance={30} duration={0.6} delay={0.2} threshold={0.05}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 md:mb-10">
              {fortune.caution && (
                <div className="p-5 md:p-6 rounded-xl bg-red-500/5 border border-red-500/10">
                  <p className="text-[11px] font-bold text-red-400 uppercase tracking-[0.15em] mb-2">Watch out</p>
                  <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{fortune.caution}</p>
                </div>
              )}
              {fortune.opportunity && (
                <div className="p-5 md:p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                  <p className="text-[11px] font-bold text-emerald-400 uppercase tracking-[0.15em] mb-2">Seize this</p>
                  <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{fortune.opportunity}</p>
                </div>
              )}
            </div>
          </AnimatedContent>
        )}

        {/* Lucky elements */}
        {fortune.lucky && (
          <AnimatedContent distance={20} duration={0.5} delay={0.25} threshold={0.05}>
            <div className="mb-8 md:mb-10 p-5 md:p-6 rounded-xl bg-card/50 border border-border/50">
              <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.15em] mb-4">Lucky elements</p>
              <div className="flex justify-around text-center">
                <div>
                  <div className="text-xl mb-1">🎨</div>
                  <div className="text-xs text-muted-foreground/60 mb-0.5">Color</div>
                  <div className="text-sm md:text-base font-medium text-foreground capitalize">{fortune.lucky.color}</div>
                </div>
                <div>
                  <div className="text-xl mb-1">{isGolf ? '⛳' : '🔢'}</div>
                  <div className="text-xs text-muted-foreground/60 mb-0.5">{isGolf ? 'Hole' : 'Number'}</div>
                  <div className="text-sm md:text-base font-medium text-foreground">{isGolf ? `#${fortune.lucky.number}` : fortune.lucky.number}</div>
                </div>
                <div>
                  <div className="text-xl mb-1">⏰</div>
                  <div className="text-xs text-muted-foreground/60 mb-0.5">Time</div>
                  <div className="text-sm md:text-base font-medium text-foreground capitalize">{fortune.lucky.time}</div>
                </div>
              </div>
            </div>
          </AnimatedContent>
        )}

        {/* Personal insight */}
        {fortune.personalised_insight && (
          <AnimatedContent distance={20} duration={0.5} delay={0.3} threshold={0.05}>
            <div className="mb-8 md:mb-10 p-6 md:p-8 rounded-2xl bg-card/50 border border-border/50">
              <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-[0.15em] mb-4">Personal insight</h2>
              <p className="text-base md:text-lg text-foreground/80 italic leading-relaxed md:leading-loose">{fortune.personalised_insight}</p>
            </div>
          </AnimatedContent>
        )}

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-3 max-w-md mx-auto"
        >
          <Button
            onClick={() => router.push('/general')}
            variant="outline"
            className="flex-1 h-12 border-border text-foreground hover:bg-card cursor-pointer"
          >
            Categories
          </Button>
          <Button
            onClick={() => {
              sessionStorage.removeItem('fortune-result');
              router.push(`/loading?category=${category}`);
            }}
            className="flex-1 h-12 bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
          >
            Try again
          </Button>
        </motion.div>

      </div>
    </div>
  );
}
