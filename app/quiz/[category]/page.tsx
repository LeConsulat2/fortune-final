import { getFortuneConfig } from '@/lib/fortune-config';
import { notFound } from 'next/navigation';
import { QuizClient } from './_components/quiz-client';

interface QuizPageProps {
  params: {
    category: string;
  };
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { category } = params;
  const config = getFortuneConfig(category);

  if (!config || !config.quiz || config.quiz.length === 0) {
    notFound();
  }

  return <QuizClient category={category} questions={config.quiz} />;
}
