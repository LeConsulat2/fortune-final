'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useUserMemory } from '@/lib/useUserMemory';
import { ZODIAC_SIGNS_LABELS, ZodiacSign } from '@/lib/common-constants';
import { formatDate } from '@/lib/zodiac';
import { Settings2, Check } from 'lucide-react';
import { BlurFade } from '@/ui/blur-fade';
import { Button } from '@/ui/button';

interface CategoryItem {
  key: string;
  name: string;
  emoji: string;
  tagline: string;
  quizPath?: string;
}

const ALL_CATEGORIES: CategoryItem[] = [
  { key: 'general',      name: "Today's Fortune",  emoji: '✨',    tagline: 'Your overall reading' },
  { key: 'love',         name: 'Love / Romance',    emoji: '❤️',   tagline: 'Romance & connections',  quizPath: '/quiz/love' },
  { key: 'job',          name: 'Work / Job',        emoji: '💼',   tagline: 'Workplace & career',     quizPath: '/quiz/job' },
  { key: 'exam',         name: 'Exams',             emoji: '📝',   tagline: 'Test performance',       quizPath: '/quiz/exam' },
  { key: 'money',        name: 'Money / Finance',   emoji: '💰',   tagline: 'Financial outlook',      quizPath: '/quiz/money' },
  { key: 'mental-health',name: 'Mental Health',     emoji: '🧠',   tagline: 'Wellbeing & mood',       quizPath: '/quiz/mental-health' },
  { key: 'composure',    name: 'Composure',         emoji: '🧘',   tagline: 'Inner calm',             quizPath: '/quiz/composure' },
  { key: 'interview',    name: 'Interview',         emoji: '🎤',   tagline: 'Preparation tips',       quizPath: '/quiz/interview' },
  { key: 'assignment',   name: 'Assignment',        emoji: '💻📙', tagline: 'Focus & deadlines',      quizPath: '/quiz/assignment' },
  { key: 'golf',         name: 'Golf',              emoji: '⛳🚩', tagline: 'Predict your round',     quizPath: '/golf' },
];

export default function GeneralFortunePage() {
  const router = useRouter();
  const { userMemory, isLoaded, isComplete } = useUserMemory();
  const [selected, setSelected] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (isLoaded && !isComplete) {
      router.push('/start/step-1-personal-info');
    }
  }, [isLoaded, isComplete, router]);

  if (!isLoaded || !isComplete) return null;

  const zodiacInfo = userMemory.zodiacSign
    ? ZODIAC_SIGNS_LABELS[userMemory.zodiacSign as ZodiacSign]
    : { name: '', emoji: '' };
  const today = formatDate(new Date());
  const count = selected.size;

  const toggle = (key: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const handleGetReading = () => {
    const cats = Array.from(selected).join(',');
    router.push(`/loading?categories=${cats}`);
  };

  // stagger from center outward for the reveal feel
  const centerIdx = Math.floor(ALL_CATEGORIES.length / 2);

  return (
    <div className="min-h-screen px-4 py-8 md:py-12 pb-36 relative overflow-x-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-md md:max-w-3xl lg:max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-10"
        >
          {userMemory.name && (
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">{userMemory.name}</h1>
          )}
          <p className="text-sm md:text-base text-muted-foreground">
            {zodiacInfo.name && `${zodiacInfo.name} ${zodiacInfo.emoji} · `}{today}
          </p>
        </motion.div>

        <BlurFade delay={0.08} duration={0.4}>
          <p className="text-[11px] font-medium text-muted-foreground/60 uppercase tracking-[0.18em] mb-5 px-1">
            Choose what you want to read today
          </p>
        </BlurFade>

        {/* Category grid — staggered from center */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 md:gap-3">
          {ALL_CATEGORIES.map((cat, index) => {
            const isSelected = selected.has(cat.key);
            const distFromCenter = Math.abs(index - centerIdx);
            const delay = 0.06 + distFromCenter * 0.045;

            return (
              <BlurFade key={cat.key} delay={delay} duration={0.45} inView>
                <button
                  onClick={() => toggle(cat.key)}
                  className={`relative w-full text-center p-4 md:p-5 rounded-xl border transition-all duration-200 cursor-pointer group active:scale-[0.95] ${
                    isSelected
                      ? 'bg-primary/15 border-primary/50 shadow-lg shadow-primary/10'
                      : 'bg-card border-border hover:border-primary/25 hover:bg-card/80'
                  }`}
                >
                  {/* Checkmark */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                        className="absolute top-1.5 left-1.5 w-4 h-4 rounded-full bg-primary flex items-center justify-center"
                      >
                        <Check size={10} className="text-primary-foreground" strokeWidth={3} />
                      </motion.span>
                    )}
                  </AnimatePresence>

                  <div className={`text-2xl md:text-3xl mb-1.5 transition-transform duration-200 ${isSelected ? 'scale-110' : 'group-hover:scale-110'}`}>
                    {cat.emoji}
                  </div>
                  <div className="text-xs md:text-sm font-medium text-foreground">{cat.name}</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground/60 mt-0.5 leading-tight">{cat.tagline}</div>

                  {/* Quiz / customise gear icon */}
                  {cat.quizPath && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(cat.quizPath!);
                      }}
                      className="absolute top-1.5 right-1.5 p-1 rounded text-muted-foreground/20 hover:text-muted-foreground/60 opacity-0 group-hover:opacity-100 transition-all"
                      title={cat.key === 'golf' ? 'Golf quiz' : 'Customise answers'}
                    >
                      <Settings2 size={12} />
                    </span>
                  )}
                </button>
              </BlurFade>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="text-center mt-10 text-muted-foreground/40 text-xs"
        >
          For fun. You create your own fortune.
        </motion.p>
      </div>

      {/* Sticky floating CTA — appears when anything is selected */}
      <AnimatePresence>
        {count > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', stiffness: 380, damping: 28 }}
            className="fixed bottom-6 left-0 right-0 flex justify-center px-4 z-50"
          >
            <Button
              onClick={handleGetReading}
              size="lg"
              className="h-14 px-10 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl shadow-primary/30 rounded-full"
            >
              {count === 1 ? 'Get My Reading' : `Get ${count} Readings`}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
