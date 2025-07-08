import { type FortuneConfig } from '@/lib/types';
import { love } from '@/app/love/love-prompts';
import { mentalHealth } from '@/app/mental-health/mental-health-prompts';
import { general } from '@/app/general/general-prompts';
import { job } from '@/app/job/job-prompts';
import { money } from '@/app/money/money-prompts';
import { composure } from '@/app/composure/composure-prompts';
//import { assessment } from '@/app/assessment/assessment-prompts';
import { interview } from '@/app/interview/interview-prompts';
import { exam } from '@/app/assessment/exam-prompts';
import { assignment } from '@/app/assessment/assignment-prompts';

export type FortuneCategory = keyof typeof fortuneCategories;

export const fortuneCategoryLabels: Record<
  FortuneCategory,
  { name: string; emoji: string; description: string }
> = {
  general: general.label,
  job: job.label,
  love: love.label,
  money: money.label,
  'mental-health': mentalHealth.label,
  composure: composure.label,
  //assessment: assessment.label,
  interview: interview.label,
  exam: exam.label,
  assignment: assignment.label,
};

export const fortuneCategories = {
  general,
  job,
  love,
  money,
  'mental-health': mentalHealth,
  composure,
  //assessment,
  interview,
  exam,
  assignment,
};

export const getFortuneConfig = (category: string): FortuneConfig | null => {
  if (category in fortuneCategories) {
    return fortuneCategories[category as FortuneCategory];
  }
  return null;
};
