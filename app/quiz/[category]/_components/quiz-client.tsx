'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useUserMemory } from '@/lib/useUserMemory';
import { type Question } from '@/app/general/general-prompts';
import { Button } from '@/ui/button';
import { Card } from '@/ui/card';
import { Progress } from '@/ui/progress';
import {
  staggerContainerVariants,
  streamDownVariants,
} from '@/lib/animated-flow';

interface QuizClientProps {
  category: string;
  questions: Question[];
}

export function QuizClient({ category, questions }: QuizClientProps) {
  const router = useRouter();
  const { updateUserMemory } = useUserMemory();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const totalQuestions = questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  const currentQuestion = questions[currentQuestionIndex];

  const handleSelectOption = (questionId: string, optionValue: string) => {
    const newAnswers = { ...answers, [questionId]: optionValue };
    setAnswers(newAnswers);

    // If it's the last question, save and navigate
    if (currentQuestionIndex === totalQuestions - 1) {
      updateUserMemory({ quizAnswers: newAnswers, category });
      router.push(`/loading?category=${category}`);
    } else {
      // Otherwise, move to the next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-zinc-900 to-black p-4">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-center"
        >
          <p className="text-sm font-medium text-amber-400">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </p>
          <Progress value={progress} className="mt-2 h-2 bg-white/10" />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Card className="bg-white/5 p-6 text-white backdrop-blur-sm border-white/10">
              <motion.div variants={staggerContainerVariants}>
                <motion.h2
                  variants={streamDownVariants}
                  className="mb-6 text-xl font-semibold text-center"
                >
                  {currentQuestion.q}
                </motion.h2>

                <div className="grid grid-cols-1 gap-4">
                  {currentQuestion.options.map((option) => (
                    <motion.div
                      key={option.value}
                      variants={streamDownVariants}
                    >
                      <Button
                        onClick={() =>
                          handleSelectOption(currentQuestion.id, option.value)
                        }
                        className="w-full h-auto justify-start whitespace-normal py-4 text-left bg-white/5 hover:bg-white/10 border border-white/10"
                      >
                        <span className="mr-4 text-2xl">{option.emoji}</span>
                        <div>
                          <p className="font-semibold">{option.value}</p>
                          <p className="text-sm text-slate-300">
                            {option.description}
                          </p>
                        </div>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
