// Definitions for Fortune Categories
// Defines all types, interfaces and constants used across the app

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

export type Gender = 'male' | 'female' | '';

export interface PersonalInfo {
  name?: string;
  gender?: Gender;
  birthDate: string; // ISO date string (YYYY-MM-DD)
  jobTitle?: string;
  zodiacSign?: ZodiacSign;
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

export interface userMemory {
    gender?: Gender;
    birthDate: string;
    zodiacSign: ZodiacSign;
    name?: string;
    jobTitle?: string;
}

export const fortuneCategoryLabels = Object.fromEntries(
    Object.entries(fortuneConfigs).map(([key, cfg]) => [key, cfg.label]),
) as Record<FortuneCategory, name: string; emoji: string; description: string >;

