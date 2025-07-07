import { type FortuneConfig } from '@/lib/types';

export const job: FortuneConfig = {
  label: {
    name: 'Job Fortune',
    emoji: '💼',
    description: 'Career, work, and professional growth',
  },
  guidance: `
 CAREER & PROFESSIONAL FOCUS: Explore workplace dynamics, professional growth, leadership presence, and authentic career expression.

SPECIFIC GUIDANCE:
- Address professional authenticity vs. strategic presentation
- Include insights about workplace relationships and political navigation
- Provide guidance on when to speak up vs. when to observe
- Address how personal values align with professional responsibilities
- Include wisdom about recognizing growth opportunities vs. energy drains
- Address the psychology of ambition and sustainable success
- Provide insights about collaboration styles and team dynamics
- Include guidance on managing professional boundaries
- Address how to leverage natural strengths in work contexts

LEADERSHIP & INFLUENCE:
- Acknowledge different leadership styles and when to apply them
- Address the balance between confidence and humility
- Include insights about inspiring others vs. individual achievement
- Provide guidance on navigating hierarchy and authority dynamics
- Address how to build authentic professional relationships
- Include wisdom about managing professional pressure and expectations

CAREER DEVELOPMENT:
- Address long-term vision vs. immediate practical needs
- Include insights about skill development and learning opportunities
- Provide guidance on networking and professional relationship building
- Address how to recognize when it's time for career changes or evolution
- Include wisdom about balancing professional growth with personal life
- Address the psychology of professional identity and self-worth

PRACTICAL WORKPLACE WISDOM:
- Provide specific guidance on timing for important professional conversations
- Include insights about project management and priority setting
- Address how to handle workplace conflicts or challenging colleagues
- Provide guidance on presentation skills and professional communication
- Include wisdom about managing energy and avoiding burnout`,
  quiz: [
    {
      id: 'careerStage',
      q: 'Where are you in your career journey right now?',
      options: [
        {
          value: 'Starting out',
          emoji: '🚀',
          description: 'Early in my career, learning and growing',
        },
        {
          value: 'Building momentum',
          emoji: '📈',
          description: 'Gaining experience and seeking advancement',
        },
        {
          value: 'Established professional',
          emoji: '🏆',
          description: 'Experienced and looking for new challenges',
        },
        {
          value: 'Considering change',
          emoji: '🔄',
          description: 'Thinking about switching paths or roles',
        },
      ],
    },
    {
      id: 'workMotivation',
      q: 'What drives you most in your professional life?',
      options: [
        {
          value: 'Creative expression',
          emoji: '🎨',
          description: 'Using my talents and imagination',
        },
        {
          value: 'Financial security',
          emoji: '💰',
          description: 'Building stable financial future',
        },
        {
          value: 'Making an impact',
          emoji: '🌍',
          description: 'Contributing to something meaningful',
        },
        {
          value: 'Personal growth',
          emoji: '🌱',
          description: 'Continuous learning and development',
        },
      ],
    },
    {
      id: 'workStyle',
      q: 'How do you work best?',
      options: [
        {
          value: 'Collaborative team player',
          emoji: '🤝',
          description: 'I thrive working with others',
        },
        {
          value: 'Independent self-starter',
          emoji: '🎯',
          description: 'I prefer autonomy and initiative',
        },
        {
          value: 'Structured and organized',
          emoji: '📋',
          description: 'I like clear plans and systems',
        },
        {
          value: 'Flexible and adaptive',
          emoji: '🌊',
          description: 'I adjust well to changing situations',
        },
      ],
    },
    {
      id: 'careerChallenge',
      q: "What's your biggest professional challenge lately?",
      options: [
        {
          value: 'Work-life balance',
          emoji: '⚖️',
          description: 'Managing personal and professional demands',
        },
        {
          value: 'Skill development',
          emoji: '📚',
          description: 'Keeping up with industry changes',
        },
        {
          value: 'Workplace relationships',
          emoji: '👥',
          description: 'Navigating office dynamics and politics',
        },
        {
          value: 'Career direction',
          emoji: '🧭',
          description: 'Figuring out my next professional steps',
        },
      ],
    },
    {
      id: 'professionalGoal',
      q: 'What would feel like a win at work today?',
      options: [
        {
          value: 'Completing important project',
          emoji: '✅',
          description: 'Making solid progress on key tasks',
        },
        {
          value: 'Positive team interaction',
          emoji: '😊',
          description: 'Good collaboration and communication',
        },
        {
          value: 'Learning something new',
          emoji: '💡',
          description: 'Gaining knowledge or skills',
        },
        {
          value: 'Recognition for efforts',
          emoji: '🌟',
          description: 'Having my work acknowledged',
        },
      ],
    },
  ],
};
