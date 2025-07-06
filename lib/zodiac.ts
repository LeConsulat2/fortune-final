import type { ZodiacSign } from '@/lib/zodiac-sign-label';
import { DateTime } from 'luxon';

/**
 * Calculate zodiac sign from birth date
 * @param birthDate - ISO date string (YYYY-MM-DD)
 * @returns ZodiacSign
 */
export function calculateZodiacSign(birthDate: string): ZodiacSign {
  const date = new Date(birthDate);
  const month = date.getMonth() + 1; // getMonth() returns 0-11
  const day = date.getDate();

  // Zodiac date ranges
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'aries';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'taurus';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'gemini';
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'cancer';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'leo';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'virgo';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'libra';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
    return 'scorpio';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
    return 'sagittarius';
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
    return 'capricorn';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
    return 'aquarius';
  return 'pisces'; // Feb 19 - Mar 20
}

/**
 * Calculate age from birth date
 * @param birthDate - ISO date string
 * @returns number - age in years
 */
export function calculateAge(birthDate: string): number {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

/**
 * Get formatted date string for display in New Zealand format
 * @param date - Date object or ISO string
 * @returns formatted date string (e.g., "Thursday, 3 July 2025")
 */
export function formatDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const dt = DateTime.fromJSDate(dateObj).setZone('Pacific/Auckland');
  return dt.toFormat('cccc, d LLLL yyyy'); // Thursday, 3 July 2025
}

/**
 * Validate if a date string is a valid birth date (not in future, reasonable age range)
 * @param birthDate - ISO date string
 * @returns boolean
 */
export function isValidBirthDate(birthDate: string): boolean {
  const date = new Date(birthDate);
  const now = new Date();

  // Check if date is valid
  if (isNaN(date.getTime())) return false;

  // Check if date is not in the future
  if (date > now) return false;

  // Check if age is reasonable (between 1 and 120 years)
  const age = calculateAge(birthDate);
  return age >= 1 && age <= 120;
}
