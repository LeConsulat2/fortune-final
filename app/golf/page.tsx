'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useUserMemory } from '@/lib/useUserMemory';
import { Card } from '@/ui/card';
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

  // Pre-fill from saved answers
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
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-emerald-950 to-teal-950 text-white py-8 px-4">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-20"
            style={{ left: `${(i * 8.3) % 100}%`, top: `${(i * 13.7) % 100}%` }}
            animate={{ y: [0, -18, 0], opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 5 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-md mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="text-5xl mb-3">⛳</div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent mb-1">
            Golf Fortune
          </h1>
          <p className="text-emerald-300 text-sm">
            Tell us about today — we&apos;ll predict your round.
          </p>
        </motion.div>

        {/* All questions on one page */}
        <div className="space-y-5">
          {golf.quiz.map((question, qIndex) => (
            <motion.div
              key={question.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 + qIndex * 0.08 }}
            >
              <Card className="bg-black/25 border border-emerald-500/30 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    {qIndex + 1} / {golf.quiz.length}
                  </span>
                  <h2 className="text-base font-semibold text-white">{question.q}</h2>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {question.options.map((option) => {
                    const selected = answers[question.id] === option.value;
                    return (
                      <motion.button
                        key={option.value}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() =>
                          setAnswers((prev) => ({ ...prev, [question.id]: option.value }))
                        }
                        className={`flex flex-col items-center justify-center gap-1 p-3 rounded-lg border text-center transition-all duration-150 ${
                          selected
                            ? 'bg-emerald-500/25 border-emerald-400 text-white shadow-md shadow-emerald-900/40'
                            : 'bg-black/20 border-emerald-500/25 text-emerald-100 hover:bg-black/30 hover:border-emerald-400/50'
                        }`}
                      >
                        <span className="text-2xl">{option.emoji}</span>
                        <span className="text-xs font-semibold leading-tight">{option.value}</span>
                        <span className="text-[10px] text-emerald-300 leading-tight opacity-80">
                          {option.description}
                        </span>
                        {selected && (
                          <span className="text-emerald-400 text-xs font-bold">✓</span>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Progress indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-5 mb-4"
        >
          <div className="flex justify-between text-xs text-emerald-400 mb-1">
            <span>{Object.keys(answers).length} of {golf.quiz.length} answered</span>
            {allAnswered && <span className="text-emerald-300 font-medium">Ready ✓</span>}
          </div>
          <div className="w-full bg-white/10 rounded-full h-1.5">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
              animate={{ width: `${(Object.keys(answers).length / golf.quiz.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Generate button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <Button
            onClick={handleGenerate}
            disabled={!allAnswered}
            className="w-full h-14 text-base font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:cursor-pointer transition-all duration-200 shadow-lg shadow-emerald-900/40"
          >
            🏌️ Generate My Golf Fortune
          </Button>
        </motion.div>

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center mb-6"
        >
          <button
            onClick={() => router.push('/choice')}
            className="text-emerald-400 hover:text-emerald-300 text-sm transition-colors hover:cursor-pointer"
          >
            ← Back to categories
          </button>
        </motion.div>
      </div>
    </div>
  );
}
