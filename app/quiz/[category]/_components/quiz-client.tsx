'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useUserMemory } from '@/lib/useUserMemory';
import { Button } from '@/ui/button';
import { Card } from '@/ui/card';
import { Progress } from '@/ui/progress';
import Link from 'next/link';
import { staggerContainerVariants } from '@/lib/animated-flow';
import { QuizOption } from '@/lib/types';

// Updated Question interface
export interface Question {
  id: string;
  q: string;
  multiSelect?: boolean; // Default: false (single select)
  options: QuizOption[];
}

interface QuizClientProps {
  category: string;
  questions: Question[];
}

export function QuizClient({ category, questions }: QuizClientProps) {
  const router = useRouter();
  const { updateUserMemory } = useUserMemory();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});

  const totalQuestions = questions.length;
  // Calculate progress based on current question index
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  const currentQuestion = questions[currentQuestionIndex];

  // Multi-select logic
  const multiSelect = (questionId: string, optionValue: string) => {
    setAnswers((prev) => {
      const prevSelected = (prev[questionId] as string[]) || [];
      if (prevSelected.includes(optionValue)) {
        // Deselect
        return {
          ...prev,
          [questionId]: prevSelected.filter(
            (prevOption: string) => prevOption !== optionValue,
          ),
        };
      } else {
        // Select
        return { ...prev, [questionId]: [...prevSelected, optionValue] };
      }
    });
  };

  const singleSelect = (questionId: string, optionValue: string) => {
    const newAnswers = { ...answers, [questionId]: optionValue };
    setAnswers(newAnswers);

    // If it's the last question, save and navigate
    if (currentQuestionIndex === totalQuestions - 1) {
      updateUserMemory({
        quizAnswers: newAnswers,
        category,
      });
      router.push(`/loading?category=${category}`);
    } else {
      // Otherwise, move to the next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex === totalQuestions - 1) {
      updateUserMemory({ quizAnswers: answers, category });
      router.push(`/loading?category=${category}`);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const isCurrentQuestionAnswered = () => {
    const answer = answers[currentQuestion.id];
    if (currentQuestion.multiSelect) {
      return Array.isArray(answer) && answer.length > 0;
    } else {
      return answer && answer !== '';
    }
  };

  const isOptionSelected = (optionValue: string) => {
    const answer = answers[currentQuestion.id];
    if (currentQuestion.multiSelect) {
      return Array.isArray(answer) && answer.includes(optionValue);
    } else {
      return answer === optionValue;
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-amber-950 via-red-950 to-red-900 p-4 text-white">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ y: -60, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.6,
                delay: 0.7 + i * 0.1,
                ease: [0.42, 0, 0.58, 1.0],
              },
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
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4"
        >
          <Link
            href="/choice"
            className="inline-flex items-center text-orange-300 hover:text-orange-200 transition-colors"
          >
            ← Back to Choices
          </Link>
        </motion.div>

        {/* Progress indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
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

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Card className="bg-black/20 border border-orange-500/30 rounded-xl p-6 text-white backdrop-blur-sm">
              <motion.div
                variants={staggerContainerVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                }}
              >
                {/* Question Title */}
                <motion.h2
                  initial={{ y: -60, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.6,
                      delay: 0.5,
                      ease: [0.42, 0, 0.58, 1.0],
                    },
                  }}
                  className="mb-6 text-xl font-semibold text-center text-orange-100 stream-down"
                >
                  {currentQuestion.q}
                </motion.h2>

                {/* Multi-select indicator */}
                {currentQuestion.multiSelect && (
                  <motion.p
                    initial={{ y: -60, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.6,
                        delay: 0.6,
                        ease: [0.42, 0, 0.58, 1.0],
                      },
                    }}
                    className="text-sm font-bold text-orange-300 text-center mb-4"
                  >
                    Select all that apply
                  </motion.p>
                )}

                {/* Options */}
                <div className="grid grid-cols-1 gap-4">
                  {currentQuestion.options.map((option, index) => {
                    const selected = isOptionSelected(option.value);

                    return (
                      <motion.div
                        key={option.value}
                        initial={{ y: -60, opacity: 0 }}
                        animate={{
                          y: 0,
                          opacity: 1,
                          transition: {
                            duration: 0.6,
                            delay: 0.7 + index * 0.1,
                            ease: [0.42, 0, 0.58, 1.0],
                          },
                        }}
                        className="stream-down"
                      >
                        <motion.div
                          whileHover={{ scale: 1.02 }}
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
                            className={`w-full h-auto justify-start whitespace-normal py-4 text-left border transition-all duration-200 ${
                              selected
                                ? 'bg-orange-500/20 border-orange-400 text-orange-100 shadow-lg'
                                : 'bg-black/20 border-orange-500/30 hover:bg-black/30 text-orange-100 hover:border-orange-400'
                            }`}
                          >
                            <span className="mr-4 text-2xl text-orange-400">
                              {option.emoji}
                            </span>
                            <div className="flex-1">
                              <p className="font-semibold">{option.value}</p>
                              <p className="text-sm text-orange-200">
                                {option.description}
                              </p>
                            </div>
                            {selected && currentQuestion.multiSelect && (
                              <span className="ml-2 text-orange-400">✓</span>
                            )}
                          </Button>
                        </motion.div>
                      </motion.div>
                    );
                  })}

                  {/* Next button for multi-select questions */}
                  {currentQuestion.multiSelect && (
                    <motion.div
                      initial={{ y: -60, opacity: 0 }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.6,
                          delay: 0.7 + currentQuestion.options.length * 0.1,
                          ease: [0.42, 0, 0.58, 1.0],
                        },
                      }}
                      className="stream-down"
                    >
                      <Button
                        onClick={goToNextQuestion}
                        className="w-full h-auto justify-center py-3 bg-orange-500/20 border border-orange-400 hover:bg-orange-500/30 text-orange-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                        disabled={!isCurrentQuestionAnswered()}
                      >
                        {currentQuestionIndex === totalQuestions - 1
                          ? 'Complete Quiz'
                          : 'Next Question'}
                      </Button>
                    </motion.div>
                  )}
                </div>

                {/* Back button */}
                {currentQuestionIndex > 0 && (
                  <motion.div
                    initial={{ y: -60, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.6,
                        delay:
                          0.7 +
                          currentQuestion.options.length * 0.1 +
                          (currentQuestion.multiSelect ? 0.1 : 0),
                        ease: [0.42, 0, 0.58, 1.0],
                      },
                    }}
                    className="stream-down mt-4"
                  >
                    <Button
                      onClick={() =>
                        setCurrentQuestionIndex(currentQuestionIndex - 1)
                      }
                      className="w-full h-auto justify-center py-3 bg-black/10 border border-orange-500/30 hover:bg-black/20 text-orange-300 transition-all duration-200"
                    >
                      ← Previous Question
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
