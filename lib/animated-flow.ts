'use client';

import { Variants } from 'framer-motion';

/**
 * Animation variants for the wrtn.ai style fortune app
 */

// Zip in animation - bouncy entrance
export const zipInVariants: Variants = {
  hidden: {
    scale: 0.8,
    y: 20,
    opacity: 0,
  },
  visible: {
    scale: [0.8, 1.05, 1],
    y: [20, -5, 0],
    opacity: [0, 0.8, 1],
    transition: {
      duration: 0.6,
      ease: [0.175, 0.885, 0.32, 1.275],
      times: [0, 0.5, 1],
    },
  },
};

// Stream down animation - smooth entrance from top
export const streamDownVariants: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Pulse glow animation - breathing effect
export const pulseGlowVariants: Variants = {
  initial: {
    scale: 1,
    boxShadow: '0 0 20px rgba(251, 146, 60, 0.3)',
  },
  animate: {
    scale: [1, 1.05, 1],
    boxShadow: [
      '0 0 20px rgba(251, 146, 60, 0.3)',
      '0 0 40px rgba(251, 146, 60, 0.6)',
      '0 0 20px rgba(251, 146, 60, 0.3)',
    ],
    transition: {
      duration: 1,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

// Fade in from bottom with stagger
export const fadeInUpVariants: Variants = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Container for staggered children animations
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Slide in from left
export const slideInLeftVariants: Variants = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Slide in from right
export const slideInRightVariants: Variants = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Scale up with elastic effect
export const scaleUpVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 15,
    },
  },
};

// Button hover animations
export const buttonHoverVariants: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

// Card hover animations
export const cardHoverVariants: Variants = {
  initial: {
    y: 0,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
  hover: {
    y: -4,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

// Page transition variants
export const pageTransitionVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  out: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: 'easeIn',
    },
  },
};

// Progress indicator animation
export const progressVariants: Variants = {
  initial: {
    scaleX: 0,
  },
  animate: (progress: number) => ({
    scaleX: progress / 100,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

/**
 * Custom hook for managing animation states
 */
export function useAnimationControls() {
  return {
    // Helper function to create staggered animations
    createStaggered: (delay = 0.1) => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: delay,
        },
      },
    }),

    // Helper for entrance animations based on direction
    createEntrance: (direction: 'up' | 'down' | 'left' | 'right' = 'up') => {
      const directions = {
        up: { y: 30 },
        down: { y: -30 },
        left: { x: -30 },
        right: { x: 30 },
      };

      return {
        hidden: {
          ...directions[direction],
          opacity: 0,
        },
        visible: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            ease: 'easeOut',
          },
        },
      };
    },

    // Helper for exit animations
    createExit: (direction: 'up' | 'down' | 'left' | 'right' = 'up') => {
      const directions = {
        up: { y: -30 },
        down: { y: 30 },
        left: { x: -30 },
        right: { x: 30 },
      };

      return {
        exit: {
          ...directions[direction],
          opacity: 0,
          transition: {
            duration: 0.3,
            ease: 'easeIn',
          },
        },
      };
    },
  };
}
