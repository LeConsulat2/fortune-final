export interface QuizOption {
  value: string;
  emoji: string;
  description: string;
}
export interface Question {
  id: string;
  q: string;
  options: QuizOption[];
}
export interface FortuneConfig {
  label: { name: string; emoji: string; description: string };
  guidance: string;
  quiz?: Question[];
}
