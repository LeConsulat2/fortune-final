'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/ui/button';
import {
  streamDownVariants,
  zipInVariants,
  pulseGlowVariants,
  staggerContainerVariants,
  fadeInUpVariants,
} from '@/lib/animated-flow';
import { seededRandom } from '@/lib/seeded-random';

export default function Home() {
  const router = useRouter();
  const needsOnboarding = useNeedsOnboarding();

  const handleStartJourney = () => {
    if (needsOnboarding) {
      router.push('/onboarding/gender');
    } else {
      router.push('/fortune/general');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full warm-glow"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 0.8 }}
          className="absolute top-40 right-32 w-1 h-1 bg-orange-400 rounded-full float-gentle"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 1.5 }}
          className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-amber-400 rounded-full warm-glow"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 2 }}
          className="absolute bottom-20 right-20 w-1 h-1 bg-red-400 rounded-full float-gentle"
        />
      </div>

      {/* Main content */}
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-md mx-auto text-center"
        >
          {/* Hero text */}
          <motion.div
            variants={streamDownVariants}
            className="space-y-6 pb-64 stream-down"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
              Today&apos;s Daily Fortune
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUpVariants}
            className="text-base md:text-lg text-amber-200 leading-relaxed"
          >
            Feel your fortune for the day, while you create your own fortune!
          </motion.p>

          {/* Main CTA */}
          <motion.div variants={zipInVariants} className="pt-6 zip-in">
            <motion.div
              variants={pulseGlowVariants}
              initial="initial"
              animate="animate"
              className="inline-block pulse-glow"
            >
              <Button
                onClick={handleStartJourney}
                size="lg"
                className="w-84 text-lg px-12 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 border-0 shadow-2xl"
              >
                ✨{''} Start Your Fortune {''}✨
              </Button>
            </motion.div>
          </motion.div>

          {/* Footer text */}
          <motion.div
            variants={fadeInUpVariants}
            className="pt-8 text-center text-orange-300 text-sm"
          >
            <p>
              ✨ It&apos;s your fortune for the day! But Remember, this is only
              for an entertainment purposes ok?, you create your own fortunes
              ok? ✨
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full"
            style={{
              left: `${seededRandom(i) * 100}%`,
              top: `${seededRandom(i + 100) * 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + seededRandom(i + 200) * 3,
              repeat: Infinity,
              delay: seededRandom(i + 300) * 3,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
