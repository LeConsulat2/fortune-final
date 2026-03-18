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
  const [name, setName] = useState('Anonymous');
  const [gender, setGender] = useState<Gender | undefined>(undefined);

  const handleGenderSelect = (selectedGender: Gender) => {
    setGender(selectedGender);
  };

  const handleNext = () => {
    updateUserMemory({ name: name.trim(), gender: gender });
    router.push('/start/step-2-birthdate');
  };

  const handleBack = () => {
    router.push('/');
  };

  const canContinue = name.trim().length > 0;

  return (
    <QuizFrame title="Your name" subtitle="Let's personalize your fortune" currentStep={1} totalSteps={3}>
      <div className="space-y-6">
        <QuestionSection question="What shall we call you?" description="This helps personalize your readings">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-5"
            transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Label htmlFor="name" className="text-foreground text-sm">Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 bg-input border-border text-foreground placeholder:text-muted-foreground"
                placeholder="Your Name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Label className="text-foreground text-sm">Gender (Optional)</Label>
              <div className="grid grid-cols-1 gap-2 mt-2">
                {GENDER_OPTIONS.map((option) => (
                  <ChoiceItem
                    key={option.value}
                    selected={gender === option.value}
                    onClick={() => handleGenderSelect(option.value)}
                    className="hover:cursor-pointer"
                  >
                    <span className="font-medium text-sm">{option.label}</span>
                  </ChoiceItem>
                ))}
              </div>
            </motion.div>

            {name && name !== 'Anonymous' && (
              <motion.div
                variants={zipInVariants}
                initial="hidden"
                animate="visible"
                className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20"
              >
                <p className="text-base font-medium text-foreground">Hello, {name}!</p>
                <p className="text-xs text-muted-foreground mt-1">Let&apos;s get your fortune ready</p>
              </motion.div>
            )}
          </motion.div>
        </QuestionSection>

        <div className="flex justify-between pt-2">
          <Button onClick={handleBack} variant="outline" className="border-border text-foreground hover:bg-muted cursor-pointer">
            ← Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={!canContinue}
            className="bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 cursor-pointer"
          >
            Next →
          </Button>
        </div>
      </div>
    </QuizFrame>
  );
}
