'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import {
  fadeInUpVariants,
  staggerContainerVariants,
} from '@/lib/animated-flow';

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  stagger?: boolean;
  delay?: number;
}

export function Section({
  children,
  title,
  subtitle,
  className = '',
  stagger = false,
  delay = 0,
}: SectionProps) {
  const variants = stagger ? staggerContainerVariants : fadeInUpVariants;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      className={`space-y-6 ${className}`}
    >
      {(title || subtitle) && (
        <div className="space-y-2">
          {title && (
            <motion.h2
              variants={fadeInUpVariants}
              className="text-xl font-semibold text-white"
            >
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p variants={fadeInUpVariants} className="text-slate-400">
              {subtitle}
            </motion.p>
          )}
        </div>
      )}
      <motion.div
        variants={stagger ? staggerContainerVariants : fadeInUpVariants}
        className="space-y-4"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

interface QuestionSectionProps {
  question: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function QuestionSection({
  question,
  description,
  children,
  className = '',
}: QuestionSectionProps) {
  return (
    <Section className={className}>
      <motion.div variants={fadeInUpVariants} className="text-center space-y-3">
        <h3 className="text-lg font-medium text-white leading-relaxed">
          {question}
        </h3>
        {description && (
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            {description}
          </p>
        )}
      </motion.div>
      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-3"
      >
        {children}
      </motion.div>
    </Section>
  );
}

interface ChoiceItemProps {
  children: ReactNode;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  emoji?: string;
}

export function ChoiceItem({
  children,
  selected = false,
  onClick,
  className = '',
  emoji,
}: ChoiceItemProps) {
  return (
    <motion.button
      variants={fadeInUpVariants}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        w-full p-4 rounded-lg border transition-all duration-200 text-left
        ${
          selected
            ? 'bg-purple-600/20 border-purple-400 shadow-lg shadow-purple-400/20'
            : 'bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30'
        }
        ${className}
      `}
    >
      <div className="flex items-center space-x-3">
        {emoji && <span className="text-2xl">{emoji}</span>}
        <span className="text-white">{children}</span>
        {selected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="ml-auto w-2 h-2 bg-purple-400 rounded-full"
          />
        )}
      </div>
    </motion.button>
  );
}
