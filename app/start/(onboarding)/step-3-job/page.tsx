'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useUserMemory } from '@/lib/useUserMemory';
import { QuizFrame } from '@/ui/quiz-frame';
import { QuestionSection } from '@/ui/section';
import { Button } from '@/ui/button';
import { Input } from '@/ui/input';
import { Label } from '@/ui/label';
import { zipInVariants } from '@/lib/animated-flow';

const COMMON_JOBS = [
  'Enter Your Own',
  'Student',
  'Administrator',
  'Counsellor',
  'Teacher',
  'Doctor',
  'Developer',
  'Designer',
  'Marketer',
  'Self-Employed',
  'Model',
];

export default function Job() {
  const router = useRouter();
  const { updateUserMemory } = useUserMemory();
  const [occupation, setOccupation] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleJobSelect = (job: string) => {
    if (job === 'Enter Your Own') {
      setShowCustomInput(true);
      setOccupation('');
    } else {
      setShowCustomInput(false);
      setOccupation(job);
    }
  };

  const handleComplete = () => {
    updateUserMemory({ occupation: occupation.trim() });
    router.push('/general');
  };

  const canProceed = occupation.trim().length > 0;

  return (
    <QuizFrame title="Last step!" currentStep={3} totalSteps={3}>
      <div className="space-y-6">
        <QuestionSection question="What do you do?" description="Your occupation helps personalize insights">
          <div className="space-y-3">
            <Label className="text-foreground text-sm">Occupation</Label>
            <div className="flex flex-wrap gap-2">
              {COMMON_JOBS.map((job) => (
                <motion.button
                  key={job}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleJobSelect(job)}
                  className={`py-1.5 px-3 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    (occupation === job && job !== 'Enter Your Own')
                      ? 'bg-primary text-primary-foreground'
                      : (job === 'Enter Your Own' && showCustomInput)
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {job}
                </motion.button>
              ))}
            </div>

            {showCustomInput && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <Input
                  type="text"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  placeholder="Enter your occupation"
                  autoFocus
                />
              </motion.div>
            )}
          </div>

          {occupation && (
            <motion.div
              variants={zipInVariants}
              initial="hidden"
              animate="visible"
              className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20"
            >
              <p className="font-medium text-foreground">{occupation}!</p>
              <p className="text-xs text-muted-foreground mt-1">Ready for your fortune</p>
            </motion.div>
          )}
        </QuestionSection>

        <div className="space-y-2 pt-2">
          <Button
            onClick={handleComplete}
            disabled={!canProceed}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 cursor-pointer"
          >
            See My Fortune
          </Button>
          <Button
            onClick={() => router.push('/start/step-2-birthdate')}
            variant="outline"
            className="w-full border-border text-foreground hover:bg-muted cursor-pointer"
          >
            ← Back
          </Button>
        </div>

        <p className="text-center text-xs text-muted-foreground/50">
          Saved on your device only. Never shared.
        </p>
      </div>
    </QuizFrame>
  );
}
