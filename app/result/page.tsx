'use client';

import { useEffect, useState } from 'react';
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

export default function ResultPage() {
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

  // Format the detailed message for display (split paragraphs)
  const detailedParagraphs = fortune.overall.detailed_message.split('\n\n');

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white">
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent mb-4">
              Your Fortune Today
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
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <div className="mb-4">
                <div className="text-2xl mb-1">Your Fortune Score</div>
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"
                    style={{ width: `${(fortune.overall.score / 10) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex justify-between text-sm text-amber-300 mb-2">
                <span>Challenging</span>
                <span>Balanced</span>
                <span>Favorable</span>
              </div>

              <div className="text-2xl font-semibold mb-3 text-white">
                {fortune.overall.score}/10
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
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <h2 className="text-xl font-bold mb-4">Today&apos;s Reading</h2>

              {detailedParagraphs.map((paragraph, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="text-amber-100 mb-4 leading-relaxed"
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
            className="mb-8"
          >
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <h2 className="text-xl font-bold mb-2">Personal Insight</h2>
              <p className="text-amber-100 italic">
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
              onClick={() => router.push('/general')}
              className="px-6 bg-orange-500 hover:bg-orange-600 text-white"
            >
              Back to Categories
            </Button>

            <Button
              onClick={() => {
                sessionStorage.removeItem('fortune-result');
                router.push(`/loading?category=${category}`);
              }}
              className="px-6 bg-orange-500 hover:bg-orange-600 text-white"
            >
              Generate Again
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
