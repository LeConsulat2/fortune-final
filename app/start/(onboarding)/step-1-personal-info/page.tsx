'use client';

import { useUserMemory } from '@/lib/useUserMemory';
import { Button } from '@/ui/button';
import { Input } from '@/ui/input';
import { Label } from '@/ui/label';
import { QuizFrame } from '@/ui/quiz-frame';
import { ChoiceItem, QuestionSection } from '@/ui/section';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { GENDER_OPTIONS } from '@/lib/common-constants';
import { Gender } from '@/lib/common-constants';
import { staggerContainerVariants, zipInVariants } from '@/lib/animated-flow';

export default function PersonalInfoPage() {
  const router = useRouter();
  const { updateUserMemory } = useUserMemory();
  const [name, setName] = useState('');
  const [gender, setGender] = useState<Gender | undefined>(undefined);

  const handleGenderSelect = (selectedGender: Gender) => {
    setGender(selectedGender);
  };

  const handleNext = () => {
    updateUserMemory({
      name: name.trim(),
      gender: gender,
    });
    router.push('/start/step-2-birthdate');
  };

  const handleBack = () => {
    router.push('/');
  };

  const canContinue = name.trim().length > 0;

  return (
    <QuizFrame
      title="Your name"
      subtitle="Let's begin personalizing your fortune 🎉"
      currentStep={1}
      totalSteps={3}
    >
      <div className="space-y-8">
        <QuestionSection
          question="What shall Fortuner call you?"
          description="Let Fortuner know who you are to personalize your fortune reading"
        >
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
            transition={{
              staggerChildren: 0.3,
              delayChildren: 0.4,
            }}
          >
            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  delay: 0.7,
                  ease: [0.42, 0, 0.58, 1.0],
                },
              }}
              className="stream-down"
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-amber-400 focus:border-orange-400 w-full"
                  placeholder="Your Name"
                  autoFocus
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  delay: 0.8,
                  ease: [0.42, 0, 0.58, 1.0],
                },
              }}
              className="stream-down"
            >
              <div className="space-y-3">
                <Label className="text-white">Gender (Optional)</Label>
                <motion.div
                  variants={staggerContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 gap-2 w-full"
                  transition={{
                    staggerChildren: 0.15,
                    delayChildren: 0.1,
                  }}
                >
                  {GENDER_OPTIONS.map((option, index) => (
                    <motion.div
                      key={option.value}
                      initial={{ y: -40, opacity: 0 }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.6,
                          delay: 0.9 + index * 0.1,
                          ease: [0.42, 0, 0.58, 1.0],
                        },
                      }}
                      className="w-full"
                    >
                      <ChoiceItem
                        key={option.value}
                        selected={gender === option.value}
                        onClick={() => handleGenderSelect(option.value)}
                        className="w-full"
                      >
                        <div className="flex items-center gap-3">
                          <div>
                            <div className="font-medium text-amber-300">
                              {option.label}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-amber-300/50 mt-1">
                          (Optional)
                        </div>
                      </ChoiceItem>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Preview */}
            {name && (
              <motion.div
                variants={zipInVariants}
                initial="hidden"
                animate="visible"
                className="text-center p-4 bg-orange-600/20 rounded-lg border border-orange-400/30 zip-in"
              >
                <div className="text-lg font-medium text-white mb-1">
                  Hello, {name}! 👋
                </div>
                <p className="text-sm text-amber-200">
                  Great! You have begun your personalized fortune! 🎉
                </p>
              </motion.div>
            )}
          </motion.div>
        </QuestionSection>

        <div className="flex justify-between pt-4">
          <Button
            onClick={handleBack}
            className="px-6 bg-orange-500 hover:bg-orange-600 text-white hover:cursor-pointer"
          >
            ← Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={!canContinue}
            className="px-6 bg-orange-500 hover:bg-orange-600 text-white hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next →
          </Button>
        </div>
      </div>
    </QuizFrame>
  );
}
