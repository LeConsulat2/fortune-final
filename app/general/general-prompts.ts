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
  quiz: Question[];
}

export const general: FortuneConfig = {
  label: {
    name: 'Overall Fortune',
    emoji: '✨',
    description: 'Complete daily energy flow',
  },
  guidance: `
  OVERALL FORTUNE FOCUS: Create a comprehensive reading that weaves together all life aspects into a cohesive narrative about today's energy patterns.
  
  SPECIFIC GUIDANCE:
  - Begin with the person's overall energy signature for the day
  - Address how different life areas will interact and influence each other
  - Include insights about timing - when to act, when to wait, when to reflect
  - Provide guidance on navigating any tensions between different life priorities
  - Address their core emotional state and how it will impact all decisions
  - Include wisdom about personal growth opportunities available today
  - Connect their zodiac characteristics to practical daily guidance
  - Address how their professional identity connects to personal fulfillment
  
  PSYCHOLOGICAL DEPTH:
  - Acknowledge internal contradictions they might be feeling
  - Address the interplay between ambition and contentment
  - Include guidance on managing expectations vs. reality
  - Provide insight into underlying motivational patterns
  - Address how past experiences are influencing current choices
  - Include wisdom about accepting vs. changing circumstances
  
  PRACTICAL INTEGRATION:
  - Show how morning decisions set the tone for the entire day
  - Address energy management and attention allocation
  - Include specific timing suggestions for important conversations
  - Provide guidance on balancing different responsibilities
  - Address how to recognize and act on emerging opportunities`,
  quiz: [],
};
