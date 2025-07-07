'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useUserMemory } from '@/lib/useUserMemory';
import { calculateZodiacSign, isValidBirthDate } from '@/lib/zodiac';
import { ZODIAC_SIGNS_LABELS } from '@/lib/common-constants';
import { QuizFrame } from '@/ui/quiz-frame';
import { QuestionSection } from '@/ui/section';
import { Button } from '@/ui/button';
import { Input } from '@/ui/input';
import { Label } from '@/ui/label';

export default function BirthdatePage() {
  const router = useRouter();
  const { updateUserMemory } = useUserMemory();
  const [birthDate, setBirthDate] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [zodiacSign, setZodiacSign] = useState<string>('');

  useEffect(() => {
    if (birthDate) {
      const valid = isValidBirthDate(birthDate);
      setIsValid(valid);
      if (valid) {
        const sign = calculateZodiacSign(birthDate);
        const signInfo = ZODIAC_SIGNS_LABELS[sign];
        setZodiacSign(`${signInfo.name} ${signInfo.emoji}`);
      } else {
        setZodiacSign('');
      }
    } else {
      setIsValid(false);
      setZodiacSign('');
    }
  }, [birthDate]);

  const handleNext = () => {
    if (isValid && birthDate) {
      updateUserMemory({ birthDate });
      router.push('/start/step-3-job');
    }
  };

  const handleBack = () => {
    router.push('/start/step-1-personal-info');
  };

  // Auto-focus and format input
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDate(e.target.value);
  };

  return (
    <QuizFrame
      title="Your Birth Information"
      subtitle="We will automatically calculate your zodiac sign for you"
      currentStep={2}
      totalSteps={3}
    >
      <div className="space-y-8">
        <QuestionSection
          question="When were you born?"
          description="We calculate your zodiac sign based on your birthdate and provide personalized fortune readings"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="birthdate" className="text-white">
                Date of Birth
              </Label>
              <Input
                id="birthdate"
                type="date"
                value={birthDate}
                onChange={handleDateChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-purple-400"
                placeholder="YYYY-MM-DD"
                max={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Zodiac sign preview */}
            {zodiacSign && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center p-4 bg-orange-400/5 rounded-lg border border-orange-400/30"
              >
                <div className="text-2xl text-slate-300 mb-2">
                  {zodiacSign} ✨
                </div>
              </motion.div>
            )}

            {/* Validation message */}
            {birthDate && !isValid && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm text-center"
              >
                Please enter a valid date of birth
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isValid ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              onClick={handleNext}
              disabled={!isValid}
              size="lg"
              className="px-6 bg-orange-500 hover:bg-orange-600 text-white hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed:cursor-not-allowed"
            >
              Next →
            </Button>
          </motion.div>
        </div>
      </div>
    </QuizFrame>
  );
}
