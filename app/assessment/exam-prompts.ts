import { type FortuneConfig } from '@/lib/types';

export const exam: FortuneConfig = {
  label: {
    name: 'Exam Fortune',
    emoji: '📝',
    description: 'Exam mindset, preparation, and performance',
  },
  guidance: `
EXAM FOCUS: Guidance for exam preparation, stress management, and peak performance.

STYLE:
• Write in clear, encouraging English.
• Use vivid, motivating language: "A day where focus becomes your superpower." "One calm breath can turn panic into clarity."
• Two short paragraphs (8–10 sentences total) for the general section.
• Blend optimism with practical warnings—highlight what happens if the reader overreaches or neglects self-care.
• Avoid repeating the same word in consecutive sentences.
• One or two tasteful emoji are allowed, never more (e.g. 📝, 📚).

CONTENT:
• Weave in "preparation vs. pressure" tension: last-minute review, unexpected questions, moments where calmness pays off.
• Use concrete daily scenes: exam halls, study sessions, time management, healthy breaks.
• Acknowledge natural emotions and provide step-by-step actions to channel them productively.
• Offer timing cues when useful.
• Avoid mystical jargon; keep advice grounded and specific.
• Use inclusive language.

OUTPUT:
Return ONLY valid JSON with this exact schema:
{
  "overall": {
    "score": A float between 1 and 100,
    "message": "brief, direct summary",
    "detailed_message": "two short paragraphs about the main theme of their day with specific situations and clear advice",
    "personalised_insight": "brief observation connecting their study habits to a practical life pattern"
  },
Do not include any fields beyond those listed. Do not add explanatory text outside the JSON.`,

  quiz: [
    {
      id: 'examType',
      q: 'What type of exam are you preparing for?',
      options: [
        { value: 'Midterm', emoji: '📖', description: 'Midterm exam' },
        { value: 'Final', emoji: '🏁', description: 'Final exam' },
        { value: 'Quiz', emoji: '📝', description: 'Short quiz or test' },
        {
          value: 'Standardized',
          emoji: '🎓',
          description: 'Standardized test (SAT, ACT, etc.)',
        },
      ],
    },
    {
      id: 'studyMood',
      q: 'How are you feeling about your exam prep?',
      options: [
        {
          value: 'Confident',
          emoji: '😎',
          description: 'Ready and well-prepared',
        },
        {
          value: 'Nervous',
          emoji: '😬',
          description: 'A bit anxious or stressed',
        },
        {
          value: 'Overwhelmed',
          emoji: '😵',
          description: 'Too much to cover, not enough time',
        },
        {
          value: 'Motivated',
          emoji: '💪',
          description: 'Pumped to do my best',
        },
      ],
    },
    {
      id: 'examGoal',
      q: 'What would feel like a win for you in this exam?',
      options: [
        {
          value: 'HighScore',
          emoji: '🌟',
          description: 'Achieving a top grade',
        },
        {
          value: 'PersonalBest',
          emoji: '🏅',
          description: 'Beating my own record',
        },
        {
          value: 'StayCalm',
          emoji: '🧘',
          description: 'Staying calm and focused',
        },
        {
          value: 'FinishOnTime',
          emoji: '⏰',
          description: 'Completing all questions in time',
        },
      ],
    },
  ],
};
