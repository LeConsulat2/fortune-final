'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useUserMemory } from '@/lib/useUserMemory';
import { Button } from '@/ui/button';
import { Progress } from '@/ui/progress';
import Link from 'next/link';
import { staggerContainerVariants } from '@/lib/animated-flow';
import { QuizOption } from '@/lib/types';

export interface Question {
  id: string;
  q: string;
  multiSelect?: boolean;
  options: QuizOption[];
}

interface QuizClientProps {
  category: string;
  questions: Question[];
}

export function QuizClient({ category, questions }: QuizClientProps) {
  const router = useRouter();
  const { updateUserMemory, userMemory, isLoaded } = useUserMemory();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [answersInitialized, setAnswersInitialized] = useState(false);

  useEffect(() => {
    if (isLoaded && !answersInitialized) {
      if (userMemory.quizAnswers && Object.keys(userMemory.quizAnswers).length > 0) {
        const questionIds = new Set(questions.map((q) => q.id));
        const saved = Object.fromEntries(
          Object.entries(userMemory.quizAnswers).filter(([id]) => questionIds.has(id)),
        );
        if (Object.keys(saved).length > 0) setAnswers(saved as Record<string, string | string[]>);
      }
      setAnswersInitialized(true);
    }
  }, [isLoaded, userMemory.quizAnswers, answersInitialized, questions]);

  const questionIds = new Set(questions.map((q) => q.id));
  const savedAnswerCount = userMemory.quizAnswers
    ? Object.keys(userMemory.quizAnswers).filter((id) => questionIds.has(id)).length
    : 0;
  const hasSavedAnswers = isLoaded && savedAnswerCount > 0;

  const handleUseSavedAnswers = () => {
    updateUserMemory({ quizAnswers: answers as Record<string, string>, category });
    router.push(`/loading?category=${category}`);
  };

  const totalQuestions = questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  const currentQuestion = questions[currentQuestionIndex];

  const multiSelect = (questionId: string, optionValue: string) => {
    setAnswers((prev) => {
      const prevSelected = (prev[questionId] as string[]) || [];
      if (prevSelected.includes(optionValue)) {
        return { ...prev, [questionId]: prevSelected.filter((v) => v !== optionValue) };
      }
      return { ...prev, [questionId]: [...prevSelected, optionValue] };
    });
  };

  const singleSelect = (questionId: string, optionValue: string) => {
    const newAnswers = { ...answers, [questionId]: optionValue };
    setAnswers(newAnswers);

    if (currentQuestionIndex === totalQuestions - 1) {
      updateUserMemory({ quizAnswers: newAnswers as Record<string, string>, category });
      router.push(`/loading?category=${category}`);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex === totalQuestions - 1) {
      updateUserMemory({ quizAnswers: answers as Record<string, string>, category });
      router.push(`/loading?category=${category}`);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const isCurrentQuestionAnswered = () => {
    const answer = answers[currentQuestion.id];
    return currentQuestion.multiSelect
      ? Array.isArray(answer) && answer.length > 0
      : answer && answer !== '';
  };

  const isOptionSelected = (optionValue: string) => {
    const answer = answers[currentQuestion.id];
    return currentQuestion.multiSelect
      ? Array.isArray(answer) && answer.includes(optionValue)
      : answer === optionValue;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-primary/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-4"
        >
          <Link href="/general" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back
          </Link>
        </motion.div>

        {/* Saved answers shortcut */}
        {hasSavedAnswers && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4"
          >
            <button
              onClick={handleUseSavedAnswers}
              className="w-full py-3 px-4 rounded-xl bg-primary/10 border border-primary/20 text-sm font-medium text-foreground hover:bg-primary/15 transition-all"
            >
              Continue with your last answers →
            </button>
          </motion.div>
        )}

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-4 text-center"
        >
          <p className="text-xs text-muted-foreground mb-2">
            {currentQuestionIndex + 1} of {totalQuestions}
          </p>
          <Progress
            value={progress}
            className="h-1 bg-muted [&>div]:bg-primary"
          />
        </motion.div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
          >
            <div className="rounded-xl bg-card border border-border p-6">
              <motion.div
                variants={staggerContainerVariants}
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
              >
                <h2 className="mb-5 text-lg font-semibold text-center text-foreground">
                  {currentQuestion.q}
                </h2>

                {currentQuestion.multiSelect && (
                  <p className="text-xs text-muted-foreground text-center mb-4">
                    Select all that apply
                  </p>
                )}

                <div className="space-y-2.5">
                  {currentQuestion.options.map((option) => {
                    const selected = isOptionSelected(option.value);
                    return (
                      <motion.div
                        key={option.value}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          onClick={() => {
                            if (currentQuestion.multiSelect) {
                              multiSelect(currentQuestion.id, option.value);
                            } else {
                              singleSelect(currentQuestion.id, option.value);
                            }
                          }}
                          className={`w-full h-auto justify-start whitespace-normal py-3 px-4 text-left border transition-all ${
                            selected
                              ? 'bg-primary/10 border-primary/40 text-foreground'
                              : 'bg-transparent border-border hover:bg-muted/50 text-foreground'
                          }`}
                        >
                          <span className="mr-3 text-xl">{option.emoji}</span>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{option.value}</p>
                            <p className="text-xs text-muted-foreground">{option.description}</p>
                          </div>
                          {selected && currentQuestion.multiSelect && (
                            <span className="ml-2 text-primary">✓</span>
                          )}
                        </Button>
                      </motion.div>
                    );
                  })}

                  {currentQuestion.multiSelect && (
                    <Button
                      onClick={goToNextQuestion}
                      disabled={!isCurrentQuestionAnswered()}
                      className="w-full mt-2 h-11 bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-40"
                    >
                      {currentQuestionIndex === totalQuestions - 1 ? 'Complete' : 'Next'}
                    </Button>
                  )}
                </div>

                {currentQuestionIndex > 0 && (
                  <Button
                    onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                    variant="ghost"
                    className="w-full mt-3 text-muted-foreground hover:text-foreground"
                  >
                    ← Previous
                  </Button>
                )}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
