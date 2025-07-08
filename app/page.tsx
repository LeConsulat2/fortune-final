'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/ui/button';
import {
  streamDownVariants,
  pulseGlowVariants,
  staggerContainerVariants,
  zipInVariants,
} from '@/lib/animated-flow';
import { seededRandom } from '@/lib/seeded-random';

import Image from 'next/image';

// Custom variants for streaming down effect
const streamDownItemVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 50,
      damping: 15,
    },
  },
};

// Warm gas effect for the image with persistent subtle glow
const warmGasImageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    filter: 'blur(15px) brightness(1.2)',
  },
  visible: {
    opacity: 0.65,
    scale: 1,
    filter: 'blur(0px) brightness(1.1)',
    transition: {
      duration: 2.5,
      ease: 'easeOut' as const,
    },
  },
};

export default function Home() {
  //const router = useRouter();
  //const needsOnboarding = useNeedsOnboarding();

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
      <div className="min-h-screen flex flex-col items-center justify-center mx-auto px-2 sm:px-0">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-md mx-auto text-center"
        >
          {/* Hero text */}
          <motion.div
            variants={streamDownVariants}
            className="space-y-4 pb-10 stream-down  "
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
              Your Daily Fortune
            </h1>
          </motion.div>

          {/* Image with warm gas effect and subtle glow */}
          <motion.div
            variants={warmGasImageVariants}
            className="my-2 flex justify-center w-full"
          >
            <div className="relative w-full max-w-[320px] h-auto">
              <div className="absolute inset-0 bg-orange-300/10 rounded-xl blur-md warm-glow"></div>
              <Image
                src="/thumbnail-nextjs.png"
                alt="Fortune"
                width={320}
                height={320}
                className="rounded-xl shadow-2xl object-contain relative z-10"
                sizes="(min-width: 768px) 320px, 220px"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-red-500/5 rounded-xl mix-blend-overlay"></div>
            </div>
          </motion.div>

          {/* Description */}
          {/* <motion.p
            variants={streamDownItemVariants}
            className="text-sm md:text-md text-amber-200 leading-relaxed mt-6"
          >
            Explore your fortune for the day, while you create your own!
          </motion.p> */}

          {/* Main CTA */}
          <motion.div variants={zipInVariants} className="pt-6 zip-in">
            <motion.div
              variants={pulseGlowVariants}
              initial="initial"
              animate="animate"
              className="inline-block pulse-glow border-none"
            >
              <Button
                asChild
                size="lg"
                className="hover:cursor-pointer w-84 text-lg px-12 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700shadow-2xl"
              >
                <Link href="/start/step-1-personal-info">
                  ✨{''} Explore Your Fortune {''}✨
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Footer text */}
          <motion.div
            variants={streamDownItemVariants}
            className="pt-8 text-center text-orange-300 text-sm"
          >
            <span className="text-sm md:text-md">
              ✨ This is only for an entertainment purposes, You create your own
              fortune! ✨
            </span>
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
