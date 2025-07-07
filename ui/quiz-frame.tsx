'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Card } from './card';
import {
  streamDownVariants,
  zipInVariants,
  staggerContainerVariants,
  fadeInUpVariants,
} from '@/lib/animated-flow';
import { seededRandom } from '@/lib/seeded-random';

interface QuizFrameProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  currentStep?: number;
  totalSteps?: number;
  className?: string;
}

export function QuizFrame({
  children,
  title,
  subtitle,
  currentStep,
  totalSteps,
  className = '',
}: QuizFrameProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white">
      {/* Background particles - softer and more random */}
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
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: 6 + seededRandom(i + 200) * 4,
              repeat: Infinity,
              delay: seededRandom(i + 300) * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-8">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className={`w-full max-w-sm mx-auto space-y-6 ${className}`}
        >
          {/* Progress indicator with softer animation */}
          {currentStep && totalSteps && (
            <motion.div
              variants={streamDownVariants}
              className="text-center space-y-3"
            >
              <div className="flex justify-center space-x-2">
                {[...Array(totalSteps)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-colors duration-500 ${
                      i + 1 <= currentStep
                        ? 'bg-orange-400 warm-glow'
                        : 'bg-amber-800'
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: i * 0.5,
                      duration: 1.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  />
                ))}
              </div>
              <motion.p
                variants={fadeInUpVariants}
                className="text-xs text-amber-300"
              >
                {currentStep} / {totalSteps}
              </motion.p>
            </motion.div>
          )}

          {/* Title section with stream down effect */}
          <motion.div
            variants={streamDownVariants}
            className="text-center space-y-3 stream-down"
          >
            <motion.h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p className="text-base text-amber-200">
                {subtitle}
              </motion.p>
            )}
          </motion.div>

          {/* Main content card with zip-in effect */}
          <motion.div variants={zipInVariants} className="zip-in">
            <motion.div
              variants={{
                initial: {
                  scale: 1,
                  boxShadow: '0 0 20px rgba(251, 146, 60, 0.3)',
                },
                animate: {
                  scale: [1, 1.02, 1],
                  boxShadow: [
                    '0 0 20px rgba(251, 146, 60, 0.3)',
                    '0 0 30px rgba(251, 146, 60, 0.5)',
                    '0 0 20px rgba(251, 146, 60, 0.3)',
                  ],
                  transition: {
                    duration: 3,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatDelay: 1,
                  },
                },
              }}
              initial="initial"
              //animate="animate"
              //className="pulse-glow"
            >
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl warm-glow">
                {children}
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
