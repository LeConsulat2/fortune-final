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
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-amber-400 focus:border-orange-400"
                placeholder="Your Name"
                autoFocus
              />
            </div>

            <div className="space-y-3">
              <Label className="text-white">Gender (Optional)</Label>
              <div className="grid grid-cols-1 gap-2">
                {GENDER_OPTIONS.map((option) => (
                  <ChoiceItem
                    key={option.value}
                    selected={gender === option.value}
                    onClick={() => handleGenderSelect(option.value)}
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
                ))}
              </div>
            </div>

            {/* Preview */}
            {name && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center p-4 bg-orange-600/20 rounded-lg border border-orange-400/30"
              >
                <div className="text-lg font-medium text-white mb-1">
                  Hello, {name}! 👋
                </div>
                <p className="text-sm text-amber-200">
                  Great! You have begun your personalized fortune! 🎉
                </p>
              </motion.div>
            )}
          </div>
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
