'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useUserMemory } from '@/lib/useUserMemory';
import {
  ZODIAC_SIGNS_LABELS,
  ZodiacSign,
} from '@/lib/common-constants';
import { formatDate } from '@/lib/zodiac';
import { Settings2 } from 'lucide-react';

interface CategoryItem {
  key: string;
  name: string;
  emoji: string;
  tagline: string;
  quizPath?: string;
}

const CATEGORIES: CategoryItem[] = [
  { key: 'love', name: 'Love / Romance', emoji: '❤️', tagline: 'Romance & connections', quizPath: '/quiz/love' },
  { key: 'job', name: 'Work / Job', emoji: '💼', tagline: 'Workplace & career', quizPath: '/quiz/job' },
  { key: 'exam', name: 'Exams', emoji: '📝', tagline: 'Test performance', quizPath: '/quiz/exam' },
  { key: 'money', name: 'Money / Finance', emoji: '💰', tagline: 'Financial outlook', quizPath: '/quiz/money' },
  { key: 'mental-health', name: 'Mental Health', emoji: '🧠', tagline: 'Wellbeing & mood', quizPath: '/quiz/mental-health' },
  { key: 'composure', name: 'Composure', emoji: '🧘', tagline: 'Inner calm', quizPath: '/quiz/composure' },
  { key: 'interview', name: 'Interview', emoji: '🎤', tagline: 'Preparation tips', quizPath: '/quiz/interview' },
  { key: 'assignment', name: 'Assignment', emoji: '💻📙', tagline: 'Focus & deadlines', quizPath: '/quiz/assignment' },
  { key: 'golf', name: 'Golf', emoji: '⛳🚩', tagline: 'Predict your round', quizPath: '/golf' },
];

export default function GeneralFortunePage() {
  const router = useRouter();
  const { userMemory, isLoaded } = useUserMemory();

  if (!isLoaded) return null;

  if (!userMemory || !userMemory.name) {
    router.push('/start/step-1-personal-info');
    return null;
  }

  const zodiacInfo = userMemory.zodiacSign
    ? ZODIAC_SIGNS_LABELS[userMemory.zodiacSign as ZodiacSign]
    : { name: '', emoji: '' };
  const today = formatDate(new Date());

  return (
    <div className="min-h-screen px-4 py-8 md:py-12 relative">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-md md:max-w-3xl lg:max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8 md:mb-12"
        >
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">{userMemory.name}</h1>
            <p className="text-sm md:text-base text-muted-foreground">
              {zodiacInfo.name} {zodiacInfo.emoji} · {today}
            </p>
          </div>
        </motion.div>

        {/* Featured: Today's Fortune */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-8 md:mb-10"
        >
          <button
            onClick={() => router.push('/loading?category=general')}
            className="w-full text-left p-6 md:p-8 rounded-2xl bg-primary/10 border border-primary/20 hover:bg-primary/15 hover:border-primary/30 active:scale-[0.99] transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl md:text-4xl mb-2">✨</div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">Today&apos;s Fortune</h2>
                <p className="text-sm md:text-base text-muted-foreground">Your overall reading for today</p>
              </div>
              <div className="text-primary/40 group-hover:text-primary/70 transition-colors text-2xl md:text-3xl">
                →
              </div>
            </div>
          </button>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-4 md:mb-5"
        >
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-[0.15em] mb-3 px-1">
            Explore by category
          </h3>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2.5 md:gap-3">
          {CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + index * 0.04 }}
            >
              <button
                onClick={() => router.push(`/loading?category=${cat.key}`)}
                className="relative w-full text-center p-4 md:p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:bg-card/80 active:scale-[0.96] transition-all duration-200 cursor-pointer group"
              >
                <div className="text-2xl md:text-3xl mb-1.5 group-hover:scale-110 transition-transform duration-200">
                  {cat.emoji}
                </div>
                <div className="text-xs md:text-sm font-medium text-foreground">{cat.name}</div>
                <div className="text-[10px] md:text-xs text-muted-foreground/60 mt-0.5 leading-tight">{cat.tagline}</div>

                {cat.quizPath && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(cat.quizPath!);
                    }}
                    className="absolute top-1.5 right-1.5 p-1 rounded text-muted-foreground/20 hover:text-muted-foreground/60 opacity-0 group-hover:opacity-100 transition-all"
                    title="Customize answers"
                  >
                    <Settings2 size={12} />
                  </span>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-10 text-muted-foreground/40 text-xs"
        >
          For fun. You create your own fortune.
        </motion.p>
      </div>
    </div>
  );
}
