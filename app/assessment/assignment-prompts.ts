import { type FortuneConfig } from '@/lib/types';

export const assignment: FortuneConfig = {
  label: {
    name: 'Assignment Fortune',
    emoji: '📚',
    description: 'Assignment focus, productivity, and deadlines',
  },
  guidance: `
ASSIGNMENT FOCUS: Guidance for tackling assignments, managing deadlines, and maximizing productivity.

STYLE:
• Write in clear, supportive English.
• Use vivid, practical language: "A day where steady progress beats last-minute panic." "One checklist can turn chaos into calm."
• Two short paragraphs (8–10 sentences total) for the general section.
• Blend optimism with practical warnings—highlight what happens if the reader procrastinates or overcommits.
• Avoid repeating the same word in consecutive sentences.
• One or two tasteful emoji are allowed, never more (e.g. 📚, ✅).

CONTENT:
• Weave in "planning vs. pressure" tension: project milestones, unexpected tasks, moments where organization pays off.
• Use concrete daily scenes: group projects, solo research, time management, healthy breaks.
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
    "personalised_insight": "brief observation connecting their work style to a practical life pattern"
  },
Do not include any fields beyond those listed. Do not add explanatory text outside the JSON.`,

  quiz: [
    {
      id: 'assignmentType',
      q: 'What kind of assignment are you working on?',
      options: [
        { value: 'Essay', emoji: '📝', description: 'Essay or written report' },
        {
          value: 'Project',
          emoji: '📊',
          description: 'Project or presentation',
        },
        { value: 'Lab', emoji: '🔬', description: 'Lab or experiment' },
        {
          value: 'Homework',
          emoji: '📚',
          description: 'Homework or problem set',
        },
      ],
    },
    {
      id: 'assignmentMood',
      q: 'How do you feel about your assignment progress?',
      options: [
        {
          value: 'OnTrack',
          emoji: '✅',
          description: 'Making steady progress',
        },
        {
          value: 'Behind',
          emoji: '⏳',
          description: 'Falling behind schedule',
        },
        {
          value: 'Stressed',
          emoji: '😰',
          description: 'Feeling stressed or overwhelmed',
        },
        {
          value: 'Motivated',
          emoji: '🚀',
          description: 'Motivated to finish strong',
        },
      ],
    },
    {
      id: 'assignmentGoal',
      q: 'What would feel like a win for you on this assignment?',
      options: [
        {
          value: 'FinishEarly',
          emoji: '⏰',
          description: 'Finishing ahead of deadline',
        },
        {
          value: 'HighQuality',
          emoji: '🌟',
          description: 'Producing high-quality work',
        },
        {
          value: 'LearnSomething',
          emoji: '💡',
          description: 'Learning something new',
        },
        {
          value: 'Teamwork',
          emoji: '🤝',
          description: 'Great collaboration with others',
        },
      ],
    },
  ],
};
