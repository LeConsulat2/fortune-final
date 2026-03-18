'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useUserMemory } from '@/lib/useUserMemory';
import { Button } from '@/ui/button';
import { golf } from './golf-prompts';

type Answers = Record<string, string>;

export default function GolfQuizPage() {
  const router = useRouter();
  const { userMemory, isLoaded, updateUserMemory } = useUserMemory();
  const [answers, setAnswers] = useState<Answers>({});

  useEffect(() => {
    if (!isLoaded) return;
    if (!userMemory.name || !userMemory.birthDate) {
      router.push('/start/step-1-personal-info');
    }
  }, [isLoaded, userMemory, router]);

  useEffect(() => {
    if (isLoaded && userMemory.quizAnswers) {
      const questionIds = new Set(golf.quiz.map((q) => q.id));
      const saved = Object.fromEntries(
        Object.entries(userMemory.quizAnswers).filter(([id]) => questionIds.has(id)),
      );
      if (Object.keys(saved).length > 0) setAnswers(saved as Answers);
    }
  }, [isLoaded]); // eslint-disable-line react-hooks/exhaustive-deps

  const allAnswered = golf.quiz.every((q) => answers[q.id]);

  const handleGenerate = () => {
    updateUserMemory({ quizAnswers: answers, category: 'golf' });
    router.push('/loading?category=golf');
  };

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen py-8 px-4 relative">
      {/* Golf gets a subtle green ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-md mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="text-5xl mb-3">⛳</div>
          <h1 className="text-2xl font-bold text-foreground">Golf Fortune</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Tell us about today — we&apos;ll predict your round.
          </p>
        </motion.div>

        {/* Questions */}
        <div className="space-y-4">
          {golf.quiz.map((question, qIndex) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + qIndex * 0.06 }}
              className="p-4 rounded-xl bg-card border border-border"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                  {qIndex + 1}/{golf.quiz.length}
                </span>
                <h2 className="text-sm font-semibold text-foreground">{question.q}</h2>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {question.options.map((option) => {
                  const selected = answers[question.id] === option.value;
                  return (
                    <motion.button
                      key={option.value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setAnswers((prev) => ({ ...prev, [question.id]: option.value }))}
                      className={`flex flex-col items-center gap-1 p-3 rounded-lg border text-center transition-all cursor-pointer ${
                        selected
                          ? 'bg-emerald-500/15 border-emerald-500/40 text-foreground'
                          : 'bg-muted/30 border-border text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                      }`}
                    >
                      <span className="text-xl">{option.emoji}</span>
                      <span className="text-xs font-medium leading-tight">{option.value}</span>
                      <span className="text-[10px] text-muted-foreground/60 leading-tight">{option.description}</span>
                      {selected && <span className="text-emerald-500 text-xs font-bold">✓</span>}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress */}
        <div className="mt-4 mb-3">
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>{Object.keys(answers).length} of {golf.quiz.length}</span>
            {allAnswered && <span className="text-emerald-500 font-medium">Ready ✓</span>}
          </div>
          <div className="w-full h-1 rounded-full bg-muted overflow-hidden">
            <motion.div
              className="h-full bg-emerald-500 rounded-full"
              animate={{ width: `${(Object.keys(answers).length / golf.quiz.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Generate */}
        <Button
          onClick={handleGenerate}
          disabled={!allAnswered}
          className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white disabled:opacity-40 cursor-pointer"
        >
          Generate Golf Fortune
        </Button>

        {/* Back */}
        <div className="text-center mt-4">
          <button
            onClick={() => router.push('/general')}
            className="text-muted-foreground hover:text-foreground text-sm transition-colors cursor-pointer"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}
