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

// Fortune prediction interface
interface FortunePrediction {
  overall: {
    score: number;
    message: string;
    detailed_message: string;
    personalised_insight: string;
  };
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

  // Format the detailed message for display (split paragraphs)
  const detailedParagraphs = fortune.overall.detailed_message.split('\n\n');

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start bg-gradient-to-br from-amber-950 via-red-950 to-red-900 py-6 px-4 text-white">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-30 float-gentle"
            style={{
              left: `${seededRandom(i) * 100}%`,
              top: `${seededRandom(i + 100) * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.7, 0.1],
            }}
            transition={{
              duration: 6 + seededRandom(i + 200) * 3,
              repeat: Infinity,
              delay: seededRandom(i + 300) * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-6 py-12">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.6,
                delay: 0.7,
                ease: [0.42, 0, 0.58, 1.0],
              },
            }}
            className="text-center mb-8 stream-down"
          >
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent mb-4">
              {main}
            </h1>
            <p className="text-lg text-amber-200 mb-2">{today}</p>
            <div className="flex items-center justify-center space-x-2 text-base">
              <span>
                {userName} · {zodiacInfo.name}
              </span>
              <span className="text-xl">{zodiacInfo.emoji}</span>
            </div>
          </motion.div>

          {/* Score visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center stream-down italic">
              <div className="mb-4">
                <div className="text-2xl font-medium mb-2">{score} Today</div>

                {/* Animated progress bar */}
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 font-semibold"
                    initial={{ width: 0 }}
                    animate={{ width: `${fortune.overall.score}%` }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                </div>
              </div>

              <div className="flex justify-between text-sm text-amber-300 mb-2">
                <span className="font-medium">Shadows Stirring</span>
                <span className="font-medium">Turning Winds</span>
                <span className="font-medium">Favorable Currents</span>
              </div>

              {/* Updated label to show /100 */}
              <div className="text-2xl font-semibold mb-3 text-white">
                {fortune.overall.score}/100
              </div>

              <p className="text-amber-200 font-medium">
                {fortune.overall.message}
              </p>
            </Card>
          </motion.div>

          {/* Detailed reading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 italic">
              <h2 className="text-xl font-bold mb-0">{reading}</h2>

              {detailedParagraphs.map((paragraph, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="text-amber-100 mb-4 leading-loose stream-down"
                >
                  {paragraph}
                </motion.div>
              ))}
            </Card>
          </motion.div>

          {/* Personal insight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8 stream-down"
          >
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 italic">
              <h2 className="text-xl font-bold mb-0">{insights}</h2>
              <p className="text-amber-100 italic leading-loose stream-down">
                {fortune.overall.personalised_insight}
              </p>
            </Card>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-between"
          >
            <Button
              onClick={() => router.push('/choice')}
              className="px-6 bg-red-500 hover:bg-orange-600 text-white hover:cursor-pointer hover:scale-105 transition-all duration-300 focus:scale-105"
            >
              Try Other Categories
            </Button>

            <Button
              onClick={() => {
                sessionStorage.removeItem('fortune-result');
                router.push(`/loading?category=${category}`);
              }}
              className="px-6 bg-orange-500 hover:bg-orange-600 text-white hover:cursor-pointer hover:scale-105 transition-all duration-300 focus:scale-105"
            >
              Generate Again
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
