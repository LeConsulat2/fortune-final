import { z } from 'zod';

export const zodiacSigns = [
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
] as const;

export type ZodiacSign = (typeof zodiacSigns)[number];

export const zodiacSignLabels: Record<ZodiacSign, string> = {
  aries: 'Aries ♈',
  taurus: 'Taurus ♉',
  gemini: 'Gemini ♊',
  cancer: 'Cancer ♋',
  leo: 'Leo ♌',
  virgo: 'Virgo ♍',
  libra: 'Libra ♎',
  scorpio: 'Scorpio ♏',
  sagittarius: 'Sagittarius ♐',
  capricorn: 'Capricorn ♑',
  aquarius: 'Aquarius ♒',
  pisces: 'Pisces ♓',
};

// Zodiac date ranges (month-day format)
export const zodiacDateRanges: Record<
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

export const fortuneCategories = [
  'overall',
  'love',
  'work',
  'money',
  'wellBeing',
] as const;

export type FortuneCategory = (typeof fortuneCategories)[number];

export const fortuneCategoryLabels: Record<
  FortuneCategory,
  { label: string; icon: string; color: string }
> = {
  overall: { label: 'Overall', icon: '🌟', color: 'text-yellow-600' },
  love: { label: 'Love', icon: '💖', color: 'text-pink-600' },
  work: { label: 'Work', icon: '💼', color: 'text-blue-600' },
  money: { label: 'Money', icon: '💰', color: 'text-green-600' },
  wellBeing: { label: 'Well-being', icon: '🏥', color: 'text-red-600' },
};

export interface PersonalInfo {
  fullName: string;
  birthDate: string; // YYYY-MM-DD format
  gender?: 'male' | 'female';
  jobTitle?: string;
  calculatedSign: ZodiacSign;
  lifePathNumber: number;
  birthDayNumber: number;
}

export interface DailyFortune {
  personalInfo: PersonalInfo;
  date: string;
  overall: {
    score: number; // 1-10
    message: string;
    detailed_message: string; // Long, detailed Korean-style fortune
    lucky_color: string;
    lucky_number: number;
    personal_insight: string;
  };
  categories: Record<
    FortuneCategory,
    {
      score: number; // 1-10
      message: string;
      detailed_message: string; // Long, detailed category-specific fortune
      advice: string;
    }
  >;
}

export const fortuneInputSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(50, 'Full name must be less than 50 characters')
    .regex(
      /^[a-zA-Z\s'-]+$/,
      'Full name can only contain letters, spaces, hyphens, and apostrophes',
    ),
  birthDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Birth date must be in YYYY-MM-DD format')
    .refine((date) => {
      const d = new Date(date);
      const now = new Date();
      const minDate = new Date(now.getFullYear() - 120, 0, 1); // 120 years ago
      return d <= now && d >= minDate;
    }, 'Please enter a valid birth date'),
  gender: z.enum(['male', 'female']).optional(),
});

// Calculate zodiac sign from birth date
export function calculateZodiacSign(birthDate: string): ZodiacSign {
  const date = new Date(birthDate);
  const month = date.getMonth() + 1; // getMonth() returns 0-11
  const day = date.getDate();
  const monthDay = `${month.toString().padStart(2, '0')}-${day
    .toString()
    .padStart(2, '0')}`;

  for (const [sign, ranges] of Object.entries(zodiacDateRanges)) {
    for (const range of ranges) {
      if (monthDay >= range.start && monthDay <= range.end) {
        return sign as ZodiacSign;
      }
    }
  }

  return 'capricorn'; // Default fallback
}

// Calculate life path number from birth date (numerology)
export function calculateLifePathNumber(birthDate: string): number {
  const date = new Date(birthDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // Add all digits of birth date
  const allDigits = [
    ...year.toString(),
    ...month.toString(),
    ...day.toString(),
  ];
  let sum = allDigits.reduce((acc, digit) => acc + parseInt(digit), 0);

  // Reduce to single digit (except master numbers 11, 22, 33)
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum
      .toString()
      .split('')
      .reduce((acc, digit) => acc + parseInt(digit), 0);
  }

  return sum;
}

// Calculate birth day number (day of month)
export function calculateBirthDayNumber(birthDate: string): number {
  const date = new Date(birthDate);
  return date.getDate();
}

// Calculate name number (numerology)
export function calculateNameNumber(fullName: string): number {
  const letterValues: Record<string, number> = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 1,
    k: 2,
    l: 3,
    m: 4,
    n: 5,
    o: 6,
    p: 7,
    q: 8,
    r: 9,
    s: 1,
    t: 2,
    u: 3,
    v: 4,
    w: 5,
    x: 6,
    y: 7,
    z: 8,
  };

  const cleanName = fullName.toLowerCase().replace(/[^a-z]/g, '');
  let sum = cleanName
    .split('')
    .reduce((acc, char) => acc + (letterValues[char] || 0), 0);

  // Reduce to single digit
  while (sum > 9) {
    sum = sum
      .toString()
      .split('')
      .reduce((acc, digit) => acc + parseInt(digit), 0);
  }

  return sum;
}
