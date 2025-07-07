// Definitions for Fortune Categories
// Defines all types, interfaces and constants used across the app

import { z } from 'zod';
import {
  fortuneCategories as FortuneCategories,
  fortuneCategoryLabels as FortuneCategoryLabels,
  type FortuneCategory,
} from '@/lib/fortuneConfig';

export type ZodiacSign =
  | 'aries'
  | 'taurus'
  | 'gemini'
  | 'cancer'
  | 'leo'
  | 'virgo'
  | 'libra'
  | 'scorpio'
  | 'sagittarius'
  | 'capricorn'
  | 'aquarius'
  | 'pisces';

export const ZODIAC_SIGNS: ZodiacSign[] = [
  'aries',
  'taurus',
  'gemini',
  'cancer',
  'leo',
  'virgo',
  'libra',
  'scorpio',
  'sagittarius',
  'capricorn',
  'aquarius',
  'pisces',
];

export const ZODIAC_SIGNS_LABELS: Record<
  ZodiacSign,
  { name: string; emoji: string; dateRange: string }
> = {
  aries: { name: 'Aries', emoji: '♈', dateRange: 'Mar 21 - Apr 19' },
  taurus: { name: 'Taurus', emoji: '♉', dateRange: 'Apr 20 - May 20' },
  gemini: { name: 'Gemini', emoji: '♊', dateRange: 'May 21 - Jun 20' },
  cancer: { name: 'Cancer', emoji: '♋', dateRange: 'Jun 21 - Jul 22' },
  leo: { name: 'Leo', emoji: '♌', dateRange: 'Jul 23 - Aug 22' },
  virgo: { name: 'Virgo', emoji: '♍', dateRange: 'Aug 23 - Sep 22' },
  libra: { name: 'Libra', emoji: '♎', dateRange: 'Sep 23 - Oct 22' },
  scorpio: { name: 'Scorpio', emoji: '♏', dateRange: 'Oct 23 - Nov 21' },
  sagittarius: {
    name: 'Sagittarius',
    emoji: '♐',
    dateRange: 'Nov 22 - Dec 21',
  },
  capricorn: { name: 'Capricorn', emoji: '♑', dateRange: 'Dec 22 - Jan 19' },
  aquarius: { name: 'Aquarius', emoji: '♒', dateRange: 'Jan 20 - Feb 18' },
  pisces: { name: 'Pisces', emoji: '♓', dateRange: 'Feb 19 - Mar 20' },
};

// Zodiac date ranges (month-day format)
export const ZODIAC_DATE_RANGES: Record<
  ZodiacSign,
  { start: string; end: string; year?: number }[]
> = {
  capricorn: [
    { start: '12-22', end: '12-31' },
    { start: '01-01', end: '01-19' },
  ],
  aquarius: [{ start: '01-20', end: '02-18' }],
  pisces: [{ start: '02-19', end: '03-20' }],
  aries: [{ start: '03-21', end: '04-19' }],
  taurus: [{ start: '04-20', end: '05-20' }],
  gemini: [{ start: '05-21', end: '06-20' }],
  cancer: [{ start: '06-21', end: '07-22' }],
  leo: [{ start: '07-23', end: '08-22' }],
  virgo: [{ start: '08-23', end: '09-22' }],
  libra: [{ start: '09-23', end: '10-22' }],
  scorpio: [{ start: '10-23', end: '11-21' }],
  sagittarius: [{ start: '11-22', end: '12-21' }],
};

// Calculate zodiac sign from birth date
export function calculateZodiacSign(birthDate: string): ZodiacSign {
  const date = new Date(birthDate);
  const month = date.getMonth() + 1; // getMonth() returns 0-11
  const day = date.getDate();
  const monthDay = `${month.toString().padStart(2, '0')}-${day
    .toString()
    .padStart(2, '0')}`;

  for (const [sign, ranges] of Object.entries(ZODIAC_DATE_RANGES)) {
    for (const range of ranges) {
      if (monthDay >= range.start && monthDay <= range.end) {
        return sign as ZodiacSign;
      }
    }
  }

  // Default fallback - could also throw error if you prefer strict validation
  throw new Error(
    'Invalid birth date or failed to calculate zodiac sign, please try again',
  );
}

// Gender type - keep it simple and optional
export type Gender = 'male' | 'female';

// Gender options for UI
export const GENDER_OPTIONS = [
  { value: 'male' as const, label: 'Male' },
  { value: 'female' as const, label: 'Female' },
] as const;

// Zod schemas
export const personalInfoSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  gender: z.enum(['male', 'female']).optional(),
  birthDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Birth date must be in YYYY-MM-DD format'),
  jobTitle: z.string().optional(),
  zodiacSign: z.string().optional(),
  calculatedSign: z.string().optional(),
});

export interface PersonalInfo {
  name: string;
  gender?: Gender;
  birthDate: string; // ISO date string (YYYY-MM-DD)
  jobTitle?: string;
  zodiacSign?: ZodiacSign;
  calculatedSign?: ZodiacSign;
}

export interface CategoryFortune {
  score: number; //1-100
  message: string;
  detailed_message: string;
  advice: string;
}

export interface DailyFortune {
  overall: {
    score: number;
    message: string;
    detailed_message: string;
    personalised_insight: string;
  };
  categories: Record<FortuneCategory, CategoryFortune>;
  generated_date: string;
}

export interface General {
  score: number;
  message: string;
  detailed_message: string;
  personalised_insight: string;
}

export interface Job {
  score: number;
  message: string;
  detailed_message: string;
  personalised_insight: string;
}

export interface Love {
  score: number;
  message: string;
  detailed_message: string;
  personalised_insight: string;
}

export interface Money {
  score: number;
  message: string;
  detailed_message: string;
  personalised_insight: string;
}

export interface MentalHealth {
  score: number;
  message: string;
  detailed_message: string;
  personalised_insight: string;
}

export interface Composure {
  score: number;
  message: string;
  detailed_message: string;
  personalised_insight: string;
}

export interface QuizAnswer {
  [key: string]: string | number | boolean | string[] | number[];
}

export interface UserMemory {
  name: string;
  gender?: Gender;
  birthDate: string;
  zodiacSign?: ZodiacSign;
  jobTitle?: string;
}

// Fortune Category labels for UI
export const ALL_FORTUNE_CATEGORIES = Object.keys(
  FortuneCategories,
) as FortuneCategory[];
export { FortuneCategories, FortuneCategoryLabels, FortuneCategory };
