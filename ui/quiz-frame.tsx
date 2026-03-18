'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import {
  streamDownVariants,
  zipInVariants,
  staggerContainerVariants,
  fadeInUpVariants,
} from '@/lib/animated-flow';

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
    <div className="min-h-screen text-foreground relative">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-8">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className={`w-full max-w-sm mx-auto space-y-6 ${className}`}
        >
          {/* Progress dots */}
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
                      i + 1 <= currentStep ? 'bg-primary' : 'bg-muted'
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
                className="text-xs text-muted-foreground"
              >
                {currentStep} / {totalSteps}
              </motion.p>
            </motion.div>
          )}

          {/* Title */}
          <motion.div
            variants={streamDownVariants}
            className="text-center space-y-2"
          >
            <motion.h1 className="text-2xl md:text-3xl font-bold text-foreground">
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p className="text-sm text-muted-foreground">
                {subtitle}
              </motion.p>
            )}
          </motion.div>

          {/* Content card */}
          <motion.div variants={zipInVariants}>
            <div className="p-6 rounded-xl bg-card border border-border shadow-lg">
              {children}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
