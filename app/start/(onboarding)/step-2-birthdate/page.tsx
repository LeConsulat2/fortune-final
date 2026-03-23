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
import { Calendar } from '@/ui/calendar';

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
      setError('');
    } else {
      setDisplayValue('');
      setError('');
    }
  }, [value]);

  const formatDateInput = (input: string): string => {
    const numbers = input.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 4) return `${numbers.slice(0, 2)}/${numbers.slice(2)}`;
    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)}`;
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
          if (jsDate <= maxDate) { onChange(jsDate); } else { setError('Date cannot be in the future'); onChange(null); }
        } else { onChange(null); }
      } else { onChange(null); }
    } else {
      const formatted = formatDateInput(rawValue);
      setDisplayValue(formatted);
      setError('');
      if (formatted.length === 10) {
        const parsedDate = DateTime.fromFormat(formatted, 'dd/MM/yyyy');
        if (parsedDate.isValid) {
          const jsDate = parsedDate.toJSDate();
          if (jsDate <= maxDate) { onChange(jsDate); } else { setError('Date cannot be in the future'); onChange(null); }
        } else { setError('Please enter a valid date'); onChange(null); }
      } else { onChange(null); }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ([8, 9, 27, 13, 46, 37, 38, 39, 40].includes(e.keyCode)) return;
    if (e.ctrlKey && [65, 67, 86, 88].includes(e.keyCode)) return;
    if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) return;
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
        className={`${className} ${error ? 'border-destructive' : ''}`}
        maxLength={10}
      />
      {error && <div className="text-destructive text-sm">{error}</div>}
    </div>
  );
};

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
      } else { setZodiacSign(''); }
    } else { setIsValid(false); setZodiacSign(''); }
  }, [birthDate]);

  const handleCalendarSelect = (date: Date | undefined) => {
    setBirthDate(date ?? null);
  };

  const handleNext = () => {
    if (isValid && birthDate) {
      const dt = DateTime.fromJSDate(birthDate, { zone: 'Pacific/Auckland' });
      updateUserMemory({ birthDate: dt.toISODate() });
      router.push('/general?mode=personalised');
    }
  };

  return (
    <QuizFrame title="Your Birthday" subtitle="We'll calculate your zodiac sign" currentStep={2} totalSteps={2}>
      <div className="space-y-6">
        <QuestionSection question="When were you born?" description="Your zodiac sign personalizes your readings">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
            transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
          >
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Label htmlFor="birthdate" className="text-foreground text-sm">Date of Birth</Label>
              <CustomDateInput
                id="birthdate"
                value={birthDate}
                onChange={(date) => setBirthDate(date)}
                className="mt-1 bg-input border border-border text-foreground placeholder:text-muted-foreground w-full px-3 py-2 rounded-md focus:border-primary focus:outline-none"
                placeholder="DD/MM/YYYY"
              />

              <Calendar
                mode="single"
                selected={birthDate ?? undefined}
                required={true}
                captionLayout="dropdown"
                onSelect={handleCalendarSelect}
                className="calendar-dropdown mt-4 bg-card border border-border text-foreground w-full px-3 py-2 rounded-md"
              />
            </motion.div>

            {zodiacSign && (
              <motion.div
                variants={zipInVariants}
                initial="hidden"
                animate="visible"
                className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20"
              >
                <div className="text-xl text-foreground">{zodiacSign}</div>
              </motion.div>
            )}

            {birthDate && !isValid && (
              <p className="text-destructive text-sm text-center">Please enter a valid date of birth</p>
            )}
          </motion.div>
        </QuestionSection>

        <div className="flex justify-between pt-2">
          <Button onClick={() => router.push('/start/step-1-personal-info')} variant="outline" className="border-border text-foreground hover:bg-muted cursor-pointer">
            ← Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={!isValid}
            className="bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 cursor-pointer"
          >
            Next →
          </Button>
        </div>
      </div>
    </QuizFrame>
  );
}
