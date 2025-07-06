'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Card } from './card';
import { pageTransitionVariants } from '@/lib/animated-flow';

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
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-30 float-gentle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-8">
        <motion.div
          variants={pageTransitionVariants}
          initial="initial"
          animate="in"
          exit="out"
          className={`w-full max-w-md mx-auto space-y-6 stream-down ${className}`}
        >
          {/* Progress indicator */}
          {currentStep && totalSteps && (
            <div className="text-center space-y-3">
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
                    transition={{ delay: i * 0.15 }}
                  />
                ))}
              </div>
              <p className="text-xs text-amber-300">
                {currentStep} / {totalSteps}
              </p>
            </div>
          )}

          {/* Title section */}
          <div className="text-center space-y-3">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-base text-amber-200"
              >
                {subtitle}
              </motion.p>
            )}
          </div>

          {/* Main content card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="zip-in"
          >
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl warm-glow">
              {children}
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
