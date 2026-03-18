'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import {
  fadeInUpVariants,
  staggerContainerVariants,
  zipInVariants,
  streamDownVariants,
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
            <motion.h2 variants={streamDownVariants} className="text-xl font-semibold text-foreground">
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p variants={fadeInUpVariants} className="text-muted-foreground">
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
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
      className={`space-y-5 ${className}`}
      transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
    >
      <motion.div variants={streamDownVariants} className="text-center space-y-2">
        <h3 className="text-base font-medium text-foreground leading-relaxed">{question}</h3>
        {description && (
          <p className="text-sm text-muted-foreground max-w-md mx-auto">{description}</p>
        )}
      </motion.div>
      <motion.div
        variants={staggerContainerVariants}
        className="space-y-3"
        transition={{ delayChildren: 0.3, staggerChildren: 0.1 }}
      >
        {children}
      </motion.div>
    </motion.div>
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
      variants={zipInVariants}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        w-full p-3 rounded-lg border transition-all text-left
        ${
          selected
            ? 'bg-primary/10 border-primary/30'
            : 'bg-card border-border hover:bg-muted/50'
        }
        ${className}
      `}
    >
      <div className="flex items-center space-x-3">
        {emoji && <span className="text-xl">{emoji}</span>}
        <span className="text-foreground">{children}</span>
        {selected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="ml-auto w-2 h-2 bg-primary rounded-full"
          />
        )}
      </div>
    </motion.button>
  );
}
