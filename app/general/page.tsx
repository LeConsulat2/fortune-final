'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useUserMemory } from '@/lib/useUserMemory';
import {
  FortuneCategoryLabels,
  ZODIAC_SIGNS_LABELS,
  ZodiacSign,
  FortuneCategory,
} from '@/lib/common-constants';
import { seededRandom } from '@/lib/seeded-random';

import { Button } from '@/ui/button';
import { Card } from '@/ui/card';
import { formatDate } from '@/lib/zodiac';

export default function GeneralFortunePage() {
  const router = useRouter();
  const { userMemory, isLoaded } = useUserMemory();

  if (!isLoaded) {
    return null;
  }

  if (!userMemory || !userMemory.name) {
    router.push('/start/step-1-personal-info');
    return null;
  }

  const zodiacInfo = userMemory.zodiacSign
    ? ZODIAC_SIGNS_LABELS[userMemory.zodiacSign as ZodiacSign]
    : { name: '', emoji: '' };
  const today = formatDate(new Date());

  const handleCategorySelect = (category: FortuneCategory) => {
    router.push(`/choice?category=${category}`);
  };

  const handleOverallFortune = () => {
    // Go to loading page first, then to result
    router.push('/loading?category=general');
  };

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
            className="text-center mb-12 stream-down"
          >
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent mb-4">
              {userMemory.name}&apos;s Fortune
            </h1>
            <p className="text-lg text-amber-200 mb-2">{today}</p>
            <div className="flex items-center justify-center space-x-2 text-base">
              <span>{zodiacInfo.name}</span>
              <span className="text-xl">{zodiacInfo.emoji}</span>
            </div>
          </motion.div>

          {/* Overall fortune CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8 zip-in"
          >
            <Card className="w-full h-full p-6 bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm border-orange-400/30 text-center hover:shadow-2xl transition-all duration-500 warm-glow">
              <div className="text-3xl mb-1">✨</div>
              <h2 className="text-xl font-bold mb-1">Overall Fortune</h2>
              <p className="text-amber-200 mb-1 text-sm">
                Check your general daily fortune for the day
              </p>
              <Button
                onClick={handleOverallFortune}
                size="lg"
                className="w-full px-6 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold"
              >
                View General Fortune for today 🔮
              </Button>
            </Card>
          </motion.div>

          {/* Category selection */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Fortunes by Category
              </h3>
              <p className="text-amber-300 text-sm">
                See what it tells you today!
              </p>
            </div>

            <div className="space-y-3">
              {Object.keys(FortuneCategoryLabels).map((category, index) => {
                const categoryInfo =
                  FortuneCategoryLabels[category as FortuneCategory];
                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.15 }}
                    className="zip-in"
                    style={{ animationDelay: `${0.7 + index * 0.15}s` }}
                  >
                    <Card
                      className="p-4 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-orange-500/15 hover:border-orange-400/50 hover:scale-110 transition-all duration-500 cursor-pointer group"
                      onClick={() =>
                        handleCategorySelect(category as FortuneCategory)
                      }
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-500 float-gentle">
                          {categoryInfo.emoji}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-1">
                            {categoryInfo.name}
                          </h4>
                          <p className="text-amber-300 text-sm">
                            {categoryInfo.description}
                          </p>
                        </div>
                        <div className="text-amber-300 group-hover:text-orange-300 transition-colors duration-500">
                          →
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Footer info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-center mt-8 text-orange-400 text-sm"
          >
            <p className="text-accent">
              ✨ Explore your fortune of the day for fun! Remember, take this
              lightly, it&apos;s not a fortune destiny. You create your own
              fortune! ✨
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
