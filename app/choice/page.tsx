'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Heart,
  Brain,
  Briefcase,
  CircleDollarSign,
  Sparkles,
  ChevronRight,
  Stethoscope,
  LandPlot,
} from 'lucide-react';
import { streamDownVariants, zipInVariants } from '@/lib/animated-flow';

// Custom variants for streaming down effect
const streamDownItemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: 'spring' as const,
      stiffness: 50,
      damping: 15,
    },
  }),
};

// Custom variants for selection
const selectionVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

export default function Choice() {
  const fortuneCategories = [
    {
      name: 'My Today',
      icon: <Sparkles size={24} />,
      path: '/loading?category=general',
      categoryKey: 'general',
    },
    {
      name: 'Love',
      icon: <Heart size={24} />,
      path: '/quiz/love',
      categoryKey: 'love',
    },
    {
      name: 'Mental Health',
      icon: <Brain size={24} />,
      path: '/quiz/mental-health',
      categoryKey: 'mental-health',
    },
    {
      name: 'Composure',
      icon: <Stethoscope size={24} />,
      path: '/quiz/composure',
      categoryKey: 'composure',
    },
    {
      name: 'Jobs & Interviews',
      icon: <Briefcase size={24} />,
      path: '/job',
      categoryKey: 'job',
    },
    {
      name: 'Money',
      icon: <CircleDollarSign size={24} />,
      path: '/quiz/money',
      categoryKey: 'money',
    },
    {
      name: 'Exams & Assignments',
      icon: <Brain size={24} />,
      path: '/quiz/assessment',
      categoryKey: 'assessment',
    },
    {
      name: 'Golf',
      icon: <LandPlot size={24} />,
      path: '/quiz/golf',
      categoryKey: 'golf',
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start bg-gradient-to-br from-amber-950 via-red-950 to-red-900 py-6 px-4 text-white">
      {/* Progress indicator */}
      <div className="w-full max-w-md flex justify-between px-1 mb-12">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`h-1 rounded-full ${
              i === 1 ? 'bg-orange-500 w-12' : 'bg-gray-600 w-12'
            }`}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
          />
        ))}
      </div>

      <motion.div
        variants={streamDownVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md px-4 mb-8"
      >
        <h2 className="text-2xl font-semibold mb-2">
          What type of fortune are you interested in today?
        </h2>
      </motion.div>

      <div className="w-full max-w-md flex flex-col gap-3">
        {fortuneCategories.map((category, index) => (
          <motion.div
            key={category.categoryKey}
            custom={index}
            variants={streamDownItemVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            className="stream-down"
          >
            <Link href={category.path} className="block w-full">
              <motion.div
                variants={selectionVariants}
                className="flex items-center justify-between bg-black/20 border border-orange-500/30 rounded-xl p-4 hover:bg-black/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-orange-400">{category.icon}</span>
                  <span className="text-lg font-medium text-orange-100">
                    {category.name}
                  </span>
                </div>
                <ChevronRight className="text-orange-400" size={20} />
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="w-full max-w-md mt-auto pt-8 flex gap-3">
        <Link href="/start/step-3-job" className="w-full">
          <motion.button
            variants={zipInVariants}
            initial="hidden"
            animate="visible"
            className="hover:cursor-pointer hover:bg-black/80 hover:scale-105 w-full py-3 px-4 bg-black/60 text-orange-200 rounded-lg border border-orange-900/30"
          >
            Back
          </motion.button>
        </Link>
        {/* <Link href="/loading?category=general" className="w-2/3">
          <motion.button
            variants={zipInVariants}
            initial="hidden"
            animate="visible"
            className="w-full py-3 px-4 bg-gradient-to-r from-orange-700 to-red-700 text-white rounded-lg"
          >
            Continue
          </motion.button>
        </Link> */}
      </div>

      {/* Floating particles animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
