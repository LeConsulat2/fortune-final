import { general } from '@/app/general/general-prompts';
import { job } from '@/app/job/job-prompts';
import { love } from '@/app/love/love-prompts';
import { money } from '@/app/money/money-prompts';
import { mentalHealth } from '@/app/mental-health/mental-health-prompts';
import { composure } from '@/app/composure/composure-prompts';

import type { FortuneConfig } from '@/types/fortune-config.types';

export const fortuneCategories: Record<string, FortuneConfig> = {
  general,
  job,
  love,
  money,
  mentalHealth,
  composure,
};
