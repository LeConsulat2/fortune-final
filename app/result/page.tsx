'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useUserMemory } from '@/lib/useUserMemory';
import { ZODIAC_SIGNS_LABELS, ZodiacSign } from '@/lib/common-constants';
import { Card } from '@/ui/card';
import { Button } from '@/ui/button';
import { formatDate } from '@/lib/zodiac';
import { seededRandom } from '@/lib/seeded-random';
import { NumberTicker } from '@/ui/number-ticker';

// Fortune prediction interface
interface FortuneArea {
  name: string;
  score: number;
  insight: string;
}

interface FortunePrediction {
  overall: {
    score: number;
    message: string;
    detail: string;
  };
  areas?: FortuneArea[];
  caution?: string;
  opportunity?: string;
  lucky?: {
    color: string;
    number: number;
    time: string;
  };
  personalised_insight?: string;
}

const getCategoryTitles = (category: string) => {
  if (category === 'general') {
    return {
      main: 'Your Fortune Today',
      score: 'Your Fortune Score',
      reading: "Today's Reading",
      insights: 'Personal Insights',
    };
  }

  const baseTitle = category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  if (category === 'love') {
    return {
      main: 'Your Love & Romance Fortune Today',
      score: 'Your Love/Romance Score',
      reading: 'Love & Romance Reading',
      insights: 'Love & Romance Insights',
    };
  }

  if (category === 'golf') {
    return {
      main: "Today's Golf Fortune",
      score: "Today's Predicted Score",
      reading: "Today's Round Reading",
      insights: 'Course Insights',
    };
  }

  return {
    main: `Your ${baseTitle} Fortune Today`,
    score: `Your ${baseTitle} Score`,
    reading: `${baseTitle} Reading`,
    insights: `${baseTitle} Insights`,
  };
};

///// Suspense boundary added for useSearchParams requirement /////
export default function ResultPageWithSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultPage />
    </Suspense>
  );
}
///// End Suspense boundary /////

function ResultPage() {
  const router = useRouter();
  const { userMemory, isLoaded } = useUserMemory();
  const searchParams = useSearchParams();
  const category = searchParams?.get('category') || 'general';
  const [fortune, setFortune] = useState<FortunePrediction | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoaded) return;

    if (!userMemory || !userMemory.name || !userMemory.birthDate) {
      router.push('/start/step-1-personal-info');
      return;
    }

    // Try to get the fortune from sessionStorage
    try {
      const storedFortune = sessionStorage.getItem('fortune-result');
      if (storedFortune) {
        const parsedFortune = JSON.parse(storedFortune) as FortunePrediction;
        setFortune(parsedFortune);
      } else {
        // If no fortune is found, redirect to the loading page
        router.push(`/loading?category=${category}`);
        return;
      }
    } catch (error) {
      setError('Failed to load your fortune. Please try again.');
      console.error('Error loading fortune:', error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoaded, userMemory, router, category]);

  if (!isLoaded || isLoading) {
    return null;
  }

  // Show error state if needed
  if (error || !fortune) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white flex flex-col items-center justify-center p-6">
        <div className="max-w-md mx-auto w-full text-center">
          <div className="mb-8 text-5xl">😕</div>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent mb-4">
            Fortune Display Error
          </h1>
          <p className="text-amber-200 mb-6">
            {error || "Couldn't load your fortune"}
          </p>
          <Button
            onClick={() => router.push('/general')}
            className="px-6 bg-orange-500 hover:bg-orange-600 text-white"
          >
            Back to Categories
          </Button>
        </div>
      </div>
    );
  }

  const zodiacInfo = userMemory?.zodiacSign
    ? ZODIAC_SIGNS_LABELS[userMemory.zodiacSign as ZodiacSign]
    : { name: '', emoji: '' };

  const today = formatDate(new Date());
  const userName = userMemory?.name || 'User';
  const { main, score, reading, insights } = getCategoryTitles(category);

  const detailParagraphs = (fortune.overall.detail ?? '').split('\n\n').filter(Boolean);

  const scoreColor = (s: number) => {
    if (s >= 70) return 'from-yellow-500 to-orange-400';
    if (s >= 45) return 'from-orange-500 to-amber-500';
    return 'from-red-600 to-orange-600';
  };

  const isGolf = category === 'golf';

  return (
    <div className={`flex min-h-screen w-full flex-col items-center justify-start py-6 px-4 text-white ${isGolf ? 'bg-gradient-to-br from-green-950 via-emerald-950 to-teal-950' : 'bg-gradient-to-br from-amber-950 via-red-950 to-red-900'}`}>
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full opacity-30 float-gentle ${isGolf ? 'bg-emerald-400' : 'bg-orange-400'}`}
            style={{
              left: `${seededRandom(i) * 100}%`,
              top: `${seededRandom(i + 100) * 100}%`,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.1, 0.7, 0.1] }}
            transition={{
              duration: 6 + seededRandom(i + 200) * 3,
              repeat: Infinity,
              delay: seededRandom(i + 300) * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-6 py-12 w-full">
        <div className="max-w-md mx-auto">

          {/* Header */}
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.5, ease: [0.42, 0, 0.58, 1.0] } }}
            className="text-center mb-8"
          >
            <h1 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-3 ${isGolf ? 'from-green-300 via-emerald-300 to-teal-300' : 'from-yellow-300 via-orange-300 to-red-300'}`}>
              {main}
            </h1>
            <p className={`text-lg mb-1 ${isGolf ? 'text-emerald-200' : 'text-amber-200'}`}>{today}</p>
            <div className="flex items-center justify-center space-x-2 text-base">
              <span>{userName} · {zodiacInfo.name}</span>
              <span className="text-xl">{zodiacInfo.emoji}</span>
            </div>
          </motion.div>

          {/* Overall score */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            {category === 'golf' ? (
              <Card className="p-6 bg-black/30 backdrop-blur-sm border-emerald-500/30 text-center">
                <div className="text-sm font-medium text-emerald-400 mb-2">{score}</div>
                <div className="flex items-end justify-center gap-1 mb-1">
                  <NumberTicker
                    value={99}
                    startValue={fortune.overall.score}
                    direction="down"
                    delay={0.3}
                    className={`text-7xl font-bold tabular-nums ${
                      fortune.overall.score <= 74
                        ? 'text-emerald-400'
                        : fortune.overall.score <= 85
                        ? 'text-amber-400'
                        : 'text-red-400'
                    }`}
                  />
                </div>
                <div className="text-xs text-emerald-500 mb-3">lower score = better round</div>
                <p className="text-emerald-100 font-medium italic">{fortune.overall.message}</p>
              </Card>
            ) : (
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center">
                <div className="text-sm font-medium text-amber-300 mb-1">{score}</div>
                <div className="text-5xl font-bold text-white mb-3">{fortune.overall.score}<span className="text-2xl text-amber-300">/100</span></div>
                <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden mb-3">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${scoreColor(fortune.overall.score)}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${fortune.overall.score}%` }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                </div>
                <div className="flex justify-between text-xs text-amber-400 mb-4">
                  <span>Shadows Stirring</span>
                  <span>Turning Winds</span>
                  <span>Favorable Currents</span>
                </div>
                <p className="text-amber-100 font-medium italic">{fortune.overall.message}</p>
              </Card>
            )}
          </motion.div>

          {/* Detailed reading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mb-6"
          >
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <h2 className="text-lg font-bold mb-3 text-amber-200">{reading}</h2>
              {detailParagraphs.map((paragraph, index) => (
                <p key={index} className="text-amber-100 mb-3 leading-relaxed italic">
                  {paragraph}
                </p>
              ))}
            </Card>
          </motion.div>

          {/* Areas grid */}
          {fortune.areas && fortune.areas.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mb-6"
            >
              <h2 className="text-lg font-bold text-amber-200 mb-3">Today&apos;s Breakdown</h2>
              <div className="grid grid-cols-2 gap-3">
                {fortune.areas.map((area, index) => (
                  <motion.div
                    key={area.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.08 }}
                  >
                    <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20 h-full">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-semibold text-amber-300 uppercase tracking-wide">{area.name}</span>
                        <span className="text-sm font-bold text-white">{area.score}</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden mb-2">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${scoreColor(area.score)}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${area.score}%` }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 + index * 0.08 }}
                        />
                      </div>
                      <p className="text-amber-100 text-xs leading-relaxed">{area.insight}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Caution + Opportunity */}
          {(fortune.caution || fortune.opportunity) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-6 grid grid-cols-2 gap-3"
            >
              {fortune.caution && (
                <Card className="p-4 bg-red-950/40 backdrop-blur-sm border-red-500/30">
                  <div className="text-xs font-bold text-red-300 uppercase tracking-wide mb-2">⚠ Watch Out</div>
                  <p className="text-amber-100 text-sm leading-relaxed">{fortune.caution}</p>
                </Card>
              )}
              {fortune.opportunity && (
                <Card className="p-4 bg-emerald-950/40 backdrop-blur-sm border-emerald-500/30">
                  <div className="text-xs font-bold text-emerald-300 uppercase tracking-wide mb-2">✦ Seize This</div>
                  <p className="text-amber-100 text-sm leading-relaxed">{fortune.opportunity}</p>
                </Card>
              )}
            </motion.div>
          )}

          {/* Lucky elements */}
          {fortune.lucky && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68 }}
              className="mb-6"
            >
              <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wide mb-3">Today&apos;s Lucky Elements</div>
                <div className="flex justify-around text-center">
                  <div>
                    <div className="text-xl mb-1">🎨</div>
                    <div className="text-xs text-amber-400">Color</div>
                    <div className="text-sm font-medium text-white capitalize">{fortune.lucky.color}</div>
                  </div>
                  <div>
                    <div className="text-xl mb-1">{category === 'golf' ? '⛳' : '🔢'}</div>
                    <div className="text-xs text-amber-400">{category === 'golf' ? 'Lucky Hole' : 'Number'}</div>
                    <div className="text-sm font-medium text-white">{category === 'golf' ? `Hole ${fortune.lucky.number}` : fortune.lucky.number}</div>
                  </div>
                  <div>
                    <div className="text-xl mb-1">⏰</div>
                    <div className="text-xs text-amber-400">Best Time</div>
                    <div className="text-sm font-medium text-white capitalize">{fortune.lucky.time}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Personal insight */}
          {fortune.personalised_insight && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="mb-8"
            >
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <h2 className="text-lg font-bold mb-2 text-amber-200">{insights}</h2>
                <p className="text-amber-100 italic leading-relaxed">{fortune.personalised_insight}</p>
              </Card>
            </motion.div>
          )}

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="flex justify-between"
          >
            <Button
              onClick={() => router.push('/choice')}
              className="px-6 bg-red-500 hover:bg-orange-600 text-white hover:cursor-pointer hover:scale-105 transition-all duration-300"
            >
              Try Other Categories
            </Button>
            <Button
              onClick={() => {
                sessionStorage.removeItem('fortune-result');
                router.push(`/loading?category=${category}`);
              }}
              className="px-6 bg-orange-500 hover:bg-orange-600 text-white hover:cursor-pointer hover:scale-105 transition-all duration-300"
            >
              Generate Again
            </Button>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
