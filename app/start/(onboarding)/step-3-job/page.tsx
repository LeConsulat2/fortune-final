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
import { zipInVariants, staggerContainerVariants } from '@/lib/animated-flow';

// Common job titles that users can select from
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

  const handleBack = () => {
    router.push('/start/step-2-birthdate');
  };

  const handleComplete = () => {
    updateUserMemory({
      occupation: occupation.trim(),
    });
    router.push('/choice');
  };

  const canProceed = occupation.trim().length > 0;

  return (
    <QuizFrame title="Final Step!" currentStep={3} totalSteps={3}>
      <div className="space-y-8">
        <QuestionSection
          question="What do you do?"
          description="Your occupation helps the fortuner to provide with more personalized insights"
        >
          <div className="space-y-3">
            <Label className="text-white">Occupation</Label>
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-1 gap-2"
              transition={{
                staggerChildren: 0.3,
                delayChildren: 0.4,
              }}
            >
              {COMMON_JOBS.map((job, index) => (
                <motion.div
                  key={job}
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
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleJobSelect(job)}
                    className={`w-full py-2 px-3 hover:cursor-pointer font-medium rounded-full text-sm transition-all duration-200 ${
                      occupation === job && job !== 'Enter Your Own'
                        ? 'bg-orange-500 text-white'
                        : 'bg-white/10 text-amber-200 hover:bg-white/20'
                    } ${
                      job === 'Enter Your Own' && showCustomInput
                        ? 'bg-orange-500 text-white'
                        : ''
                    }`}
                  >
                    {job}
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>

            {showCustomInput && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
                className="mt-3"
              >
                <Input
                  type="text"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-amber-400 focus:border-orange-400"
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
              className="text-center p-4 bg-orange-600/20 rounded-lg border border-orange-400/30 zip-in"
            >
              <div className="text-lg font-medium text-white mb-1">
                Wow, {occupation}! 👋
              </div>
              <p className="text-sm text-amber-300 mt-2">
                You&apos;re all set to receive your personalized fortune ✨
              </p>
            </motion.div>
          )}
        </QuestionSection>

        <div className="grid grid-cols-1 gap-2 pt-4">
          <Button
            onClick={handleComplete}
            disabled={!canProceed}
            className="px-6 mb-4 w-full h-12 bg-orange-500 hover:bg-orange-600 text-white hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed:cursor-not-allowed"
          >
            ✨ Go To Choices of My Fortune Today ✨
          </Button>
          <Button
            onClick={handleBack}
            variant="outline"
            className="px-6 w-full bg-sky-500/10 hover:bg-sky-600/10 text-white hover:cursor-pointer"
          >
            ← Previous
          </Button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: canProceed ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>

        <div className="text-center text-xs text-amber-400">
          * Your information is used only for fortune generation and is deleted
          once you refresh or finish the quiz.
        </div>
      </div>
    </QuizFrame>
  );
}
