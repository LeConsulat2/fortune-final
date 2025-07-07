import { getFortuneConfig } from '@/lib/fortune-config';
import { notFound } from 'next/navigation';
import { QuizClient } from './_components/quiz-client';

export default async function QuizPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const config = getFortuneConfig(category);

  if (!config || !config.quiz || config.quiz.length === 0) {
    notFound();
  }

  return <QuizClient category={category} questions={config.quiz} />;
}
