'use client';
import { Card, CardContent } from '@/ui/card';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  Heart,
  Brain,
  Briefcase,
  CircleDollarSign,
  Sparkles,
  Hourglass,
  Gem,
  Star,
} from 'lucide-react';

export default function Choice() {
  const fortuneCategories = [
    { name: 'Love', icon: <Heart size={48} />, path: '/fortune/love' },
    {
      name: 'Mental Health',
      icon: <Brain size={48} />,
      path: '/fortune/mental-health',
    },
    { name: 'Career', icon: <Briefcase size={48} />, path: '/fortune/job' },
    {
      name: 'Money',
      icon: <CircleDollarSign size={48} />,
      path: '/fortune/money',
    },
    { name: 'General', icon: <Sparkles size={48} />, path: '/fortune/general' },
    { name: 'Future', icon: <Hourglass size={48} />, path: '/fortune/future' },
    {
      name: 'Personal Growth',
      icon: <Gem size={48} />,
      path: '/fortune/growth',
    },
    { name: 'Destiny', icon: <Star size={48} />, path: '/fortune/destiny' },
  ];

  // Framer Motion animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
      },
    },
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 py-10 px-4 text-white">
      {/* Floating particles animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-2 tracking-tight bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
          Choose Your Fortune Path
        </h1>
        <p className="text-xl text-amber-200 mb-10">
          What aspect of your future would you like to explore today?
        </p>
      </motion.div>

      <motion.div
        className="grid w-full max-w-screen-xl gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {fortuneCategories.map((category) => (
          <motion.div
            key={category.name}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={category.path} className="block h-full">
              <Card className="h-full bg-gradient-to-br from-orange-800/40 to-red-900/40 border-2 border-amber-500/30 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-amber-800/50 hover:border-amber-400/50 shadow-lg">
                <CardContent className="flex flex-col gap-4 aspect-square items-center justify-center p-6 text-center">
                  <div className="text-amber-300">{category.icon}</div>
                  <span className="text-2xl font-semibold tracking-wide text-amber-100">
                    {category.name}
                  </span>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-10 text-center text-amber-200/80 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <p>
          ✨ Choose wisely, as your path will reveal different aspects of your
          fortune ✨
        </p>
      </motion.div>
    </div>
  );
}
