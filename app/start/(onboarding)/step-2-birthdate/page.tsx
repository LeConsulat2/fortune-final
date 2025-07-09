'use client';

import { useState, useEffect, useRef } from 'react';
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
import { DateTime } from 'luxon';

///// Custom Date Input Component /////
interface CustomDateInputProps {
  value?: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  className?: string;
  maxDate?: Date;
  id?: string;
}

const CustomDateInput: React.FC<CustomDateInputProps> = ({
  value,
  onChange,
  placeholder = 'DD/MM/YYYY',
  className = '',
  maxDate = new Date(),
  id,
}) => {
  const [displayValue, setDisplayValue] = useState(() =>
    value ? DateTime.fromJSDate(value).toFormat('dd/MM/yyyy') : '',
  );
  const [error, setError] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value) {
      setDisplayValue(DateTime.fromJSDate(value).toFormat('dd/MM/yyyy'));
    } else {
      setDisplayValue('');
    }
  }, [value]);

  const formatDateInput = (input: string): string => {
    const numbers = input.replace(/\D/g, '');

    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 4) {
      return `${numbers.slice(0, 2)}/${numbers.slice(2)}`;
    } else {
      return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(
        4,
        8,
      )}`;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const isDeleting = rawValue.length < displayValue.length;

    if (isDeleting) {
      setDisplayValue(rawValue);
      setError('');

      if (rawValue.length === 10) {
        const parsedDate = DateTime.fromFormat(rawValue, 'dd/MM/yyyy');
        if (parsedDate.isValid) {
          const jsDate = parsedDate.toJSDate();
          if (jsDate <= maxDate) {
            onChange(jsDate);
          } else {
            setError('Date cannot be in the future');
            onChange(null);
          }
        } else {
          onChange(null);
        }
      } else {
        onChange(null);
      }
    } else {
      const formatted = formatDateInput(rawValue);
      setDisplayValue(formatted);
      setError('');

      if (formatted.length === 10) {
        const parsedDate = DateTime.fromFormat(formatted, 'dd/MM/yyyy');
        if (parsedDate.isValid) {
          const jsDate = parsedDate.toJSDate();
          if (jsDate <= maxDate) {
            onChange(jsDate);
          } else {
            setError('Date cannot be in the future');
            onChange(null);
          }
        } else {
          setError('Please enter a valid date');
          onChange(null);
        }
      } else {
        onChange(null);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ([8, 9, 27, 13, 46, 37, 38, 39, 40].includes(e.keyCode)) return;
    if (e.ctrlKey && [65, 67, 86, 88].includes(e.keyCode)) return;
    if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 105)
    )
      return;

    e.preventDefault();
  };

  return (
    <div className="space-y-2">
      <input
        ref={inputRef}
        id={id}
        type="text"
        value={displayValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={`${className} ${error ? 'border-red-500' : ''}`}
        maxLength={10}
      />
      {error && <div className="text-red-400 text-sm">{error}</div>}
    </div>
  );
};
///// End Custom Date Input Component /////

///// BirthdatePage Component /////
export default function BirthdatePage() {
  const router = useRouter();
  const { updateUserMemory } = useUserMemory();
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [isValid, setIsValid] = useState(false);
  const [zodiacSign, setZodiacSign] = useState<string>('');

  useEffect(() => {
    if (birthDate) {
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
      const dt = DateTime.fromJSDate(birthDate, { zone: 'Pacific/Auckland' });
      updateUserMemory({ birthDate: dt.toISODate() });
      router.push('/start/step-3-job');
    }
  };

  const handleBack = () => {
    router.push('/start/step-1-personal-info');
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
                <CustomDateInput
                  id="birthdate"
                  value={birthDate}
                  onChange={(date) => setBirthDate(date)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-orange-400 w-full px-3 py-2 rounded-md"
                  placeholder="DD/MM/YYYY"
                />
              </div>
            </motion.div>

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
