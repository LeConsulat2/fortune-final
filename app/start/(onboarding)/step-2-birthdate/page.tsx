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
import { Label } from '@/ui/label';
import { staggerContainerVariants, zipInVariants } from '@/lib/animated-flow';

///// react-datepicker and Luxon integration for birthdate /////
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DateTime } from 'luxon';
///// End react-datepicker and Luxon integration /////

export default function BirthdatePage() {
  const router = useRouter();
  const { updateUserMemory } = useUserMemory();
  // Replace string state with Date object for react-datepicker
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [isValid, setIsValid] = useState(false);
  const [zodiacSign, setZodiacSign] = useState<string>('');

  useEffect(() => {
    if (birthDate) {
      // Convert to Pacific/Auckland and format as yyyy-MM-dd for validation
      const dt = DateTime.fromJSDate(birthDate, { zone: 'Pacific/Auckland' });
      const iso = dt.toISODate();
      const valid = isValidBirthDate(iso!);
      setIsValid(valid);
      if (valid) {
        const sign = calculateZodiacSign(iso!);
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
      // Store as ISO string in Pacific/Auckland
      const dt = DateTime.fromJSDate(birthDate, { zone: 'Pacific/Auckland' });
      updateUserMemory({ birthDate: dt.toISODate() });
      router.push('/start/step-3-job');
    }
  };

  const handleBack = () => {
    router.push('/start/step-1-personal-info');
  };

  // Remove handleDateChange

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
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
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
                <Label htmlFor="birthdate" className="text-white">
                  Date of Birth
                </Label>
                {/* ///// Replaced Input with DatePicker ///// */}
                <DatePicker
                  id="birthdate"
                  selected={birthDate}
                  onChange={(date) => setBirthDate(date)}
                  dateFormat="dd/MM/yyyy"
                  showYearDropdown
                  showMonthDropdown
                  dropdownMode="select"
                  maxDate={new Date()}
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-orange-400 w-full px-3 py-2 rounded-md"
                  placeholderText="DD/MM/YYYY"
                  calendarStartDay={1} // Monday
                  popperPlacement="bottom"
                  popperClassName="z-50"
                  onChangeRaw={(event) => {
                    if (!event?.target) return;
                    const input = event.target as HTMLInputElement;
                    const rawValue = input.value.replace(/\D/g, ''); // Remove non-numeric characters

                    if (rawValue.length === 8) {
                      const formatted = `${rawValue.slice(
                        0,
                        2,
                      )}/${rawValue.slice(2, 4)}/${rawValue.slice(4, 8)}`;
                      input.value = formatted;

                      const parsedDate = DateTime.fromFormat(
                        formatted,
                        'dd/MM/yyyy',
                      );
                      if (parsedDate.isValid) {
                        setBirthDate(parsedDate.toJSDate());
                      } else {
                        console.warn('Invalid date format');
                      }
                    }
                  }}

                  // You can add more props for accessibility if needed
                />
                {/* ///// End DatePicker ///// */}
              </div>
            </motion.div>

            {/* Zodiac sign preview */}
            {zodiacSign && (
              <motion.div
                variants={zipInVariants}
                initial="hidden"
                animate="visible"
                className="text-center p-4 bg-orange-600/20 rounded-lg border border-orange-400/30 zip-in"
              >
                <div className="text-2xl text-white mb-2">{zodiacSign} ✨</div>
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
          </motion.div>
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
              className="px-6 bg-orange-500 hover:bg-orange-600 text-white hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next →
            </Button>
          </motion.div>
        </div>
      </div>
    </QuizFrame>
  );
}
