import { type FortuneConfig } from '@/lib/types';

export const interview: FortuneConfig = {
  label: {
    name: 'Job Interview Fortune',
    emoji: '📝',
    description: 'Interview mindset, preparation, and success',
  },
  guidance: `
INTERVIEW FOCUS: Guidance for interview preparation, mindset, confidence, and authentic self-presentation.

SPECIFIC GUIDANCE:
- Address interview authenticity vs. strategic self-presentation
- Insights about reading interviewer cues and adapting
- Guidance on when to lead vs. when to listen
- Aligning personal values with company culture
- Recognizing real opportunities vs. red flags
- Psychology of confidence and handling nerves
- Collaboration and communication in interviews
- Managing boundaries and expectations
- Leveraging strengths and unique qualities

INTERVIEW STRATEGY:
- Different interview styles and when to use them
- Balancing confidence and humility
- Inspiring interviewers vs. focusing on achievements
- Navigating hierarchy and authority in interviews
- Building rapport and professional relationships
- Managing pressure and expectations

CAREER TRANSITIONS:
- Vision for the next step vs. immediate needs
- Skill demonstration and learning mindset
- Networking and follow-up etiquette
- Recognizing when a role is the right fit
- Balancing ambition with well-being
- Professional identity and self-worth in transitions

PRACTICAL INTERVIEW WISDOM:
- Timing for key questions and discussions
- Projecting clarity and priority setting
- Handling tough questions or challenging interviewers
- Presentation skills and communication
- Managing energy and avoiding burnout during the process

OUTPUT:
Return ONLY valid JSON with this exact schema:

{
  "overall": {
    "score": A float between 1 and 100,
    "message": "brief, direct summary",
    "detailed_message": "two short paragraphs about the main theme of their day with specific situations and clear advice",
    "personalised_insight": "brief observation connecting their profession to a practical life pattern"
  },

  Do not include any fields beyond those listed. Do not add explanatory text outside the JSON.
`,
  quiz: [
    {
      id: 'interviewStage',
      q: 'What stage of the interview process are you in?',
      options: [
        {
          value: 'First round',
          emoji: '1️⃣',
          description: 'Initial screening or phone interview',
        },
        {
          value: 'Second round',
          emoji: '2️⃣',
          description: 'In-depth or technical interview',
        },
        {
          value: 'Final round',
          emoji: '🏁',
          description: 'Final interview or offer stage',
        },
        {
          value: 'Just preparing',
          emoji: '📝',
          description: 'Getting ready for upcoming interviews',
        },
      ],
    },
    {
      id: 'interviewMotivation',
      q: 'What matters most to you in this interview?',
      options: [
        {
          value: 'Showcasing skills',
          emoji: '💡',
          description: 'Demonstrating my abilities',
        },
        {
          value: 'Cultural fit',
          emoji: '🤝',
          description: 'Finding the right team and environment',
        },
        {
          value: 'Landing the offer',
          emoji: '🎯',
          description: 'Securing the job',
        },
        {
          value: 'Learning experience',
          emoji: '📚',
          description: 'Gaining interview practice and feedback',
        },
      ],
    },
    {
      id: 'interviewStyle',
      q: 'How do you approach interviews?',
      options: [
        {
          value: 'Confident and direct',
          emoji: '🦁',
          description: 'I present myself boldly',
        },
        {
          value: 'Thoughtful and reflective',
          emoji: '🧠',
          description: 'I take time to consider my answers',
        },
        {
          value: 'Conversational',
          emoji: '💬',
          description: 'I treat it as a two-way dialogue',
        },
        {
          value: 'Adaptive',
          emoji: '🌈',
          description: 'I adjust my style to the situation',
        },
      ],
    },
    {
      id: 'interviewChallenge',
      q: "What's your biggest interview challenge?",
      options: [
        {
          value: 'Nerves and anxiety',
          emoji: '😬',
          description: 'Managing stress and staying calm',
        },
        {
          value: 'Tough questions',
          emoji: '❓',
          description: 'Handling unexpected or difficult topics',
        },
        {
          value: 'Standing out',
          emoji: '🌟',
          description: 'Differentiating myself from other candidates',
        },
        {
          value: 'Building rapport',
          emoji: '🤗',
          description: 'Connecting with interviewers',
        },
      ],
    },
    {
      id: 'interviewGoal',
      q: 'What would feel like a win in this interview?',
      options: [
        {
          value: 'Clear communication',
          emoji: '🗣️',
          description: 'Expressing myself well',
        },
        {
          value: 'Positive connection',
          emoji: '😊',
          description: 'Good rapport with interviewers',
        },
        {
          value: 'Learning something new',
          emoji: '📖',
          description: 'Gaining insight or feedback',
        },
        {
          value: 'Moving to next stage',
          emoji: '➡️',
          description: 'Progressing in the process',
        },
      ],
    },
  ],
};
