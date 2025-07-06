// /app/libs/fortuneConfig.ts
import { general } from '@/app/general/general-prompts';
import { job } from '@/app/job/job-prompts';
import { love } from '@/app/love/love-prompts';
import { money } from '@/app/money/money-prompts';
import { mentalHealth } from '@/app/mental-health/mental-health-prompts';
import { composure } from '@/app/composure/composure-prompts';

export const fortuneCategories = {
  general,
  job,
  love,
  money,
  mentalHealth,
  composure,
} as const;

export type FortuneCategory = keyof typeof fortuneCategories;

export const fortuneCategoryLabels = Object.fromEntries(
  Object.entries(fortuneCategories).map(([key, cfg]) => [key, cfg.label]),
) as Record<
  FortuneCategory,
  { name: string; emoji: string; description: string }
>;
