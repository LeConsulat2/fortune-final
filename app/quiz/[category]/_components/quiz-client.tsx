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
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-amber-950 via-red-950 to-red-900 p-4 text-white">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
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
      </div>

      <div className="relative z-10 w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-center"
        >
          <p className="text-sm font-medium text-orange-300">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </p>
          <Progress
            value={progress}
            className="mt-2 h-1 bg-black/20 border border-orange-500/30 [&>div]:bg-orange-500"
          />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Card className="bg-black/20 border border-orange-500/30 rounded-xl p-6 text-white backdrop-blur-sm">
              <motion.div variants={staggerContainerVariants}>
                <motion.h2
                  variants={streamDownVariants}
                  className="mb-6 text-xl font-semibold text-center text-orange-100"
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
                        className="w-full h-auto justify-start whitespace-normal py-4 text-left bg-black/20 border border-orange-500/30 hover:bg-black/30 text-orange-100"
                      >
                        <span className="mr-4 text-2xl text-orange-400">
                          {option.emoji}
                        </span>
                        <div>
                          <p className="font-semibold">{option.value}</p>
                          <p className="text-sm text-orange-200">
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
