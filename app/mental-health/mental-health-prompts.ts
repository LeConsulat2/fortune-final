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

export const wellBeing: FortuneConfig = {
  label: {
    name: 'Wellness Fortune',
    emoji: '🧘',
    description: 'Mind and body health',
  },
  guidance: `
HEALTH & WELLBEING FOCUS: Connect physical vitality to emotional states, stress patterns, mind-body integration, and holistic wellness.

SPECIFIC GUIDANCE:
- Address the connection between emotional states and physical energy
- Include insights about stress patterns and their manifestation in the body
- Provide guidance on energy management and sustainable self-care practices
- Address how life transitions affect overall health and vitality
- Include wisdom about recognizing early warning signs of imbalance
- Address the psychology of health habits and sustainable lifestyle changes
- Provide insights about rest, recovery, and energy restoration
- Include guidance on mind-body practices and conscious movement
- Address how relationships and environment impact overall wellbeing

MENTAL & EMOTIONAL HEALTH:
- Acknowledge the complexity of maintaining emotional balance
- Address anxiety, stress, or overwhelm patterns and coping strategies
- Include insights about emotional regulation and processing difficult feelings
- Provide guidance on mental clarity and cognitive function optimization
- Address how perfectionism or high standards impact mental health
- Include wisdom about setting healthy boundaries for emotional protection

PHYSICAL VITALITY:
- Address how daily choices accumulate into long-term health patterns
- Include insights about nutrition, movement, and body awareness
- Provide guidance on sleep quality and energy cycles
- Address how to listen to body wisdom and internal signals
- Include wisdom about preventive care and health maintenance
- Address the relationship between physical activity and mental clarity

HOLISTIC WELLNESS:
- Provide specific guidance on integrating wellness practices into busy schedules
- Include insights about creating supportive environments for health
- Address how to balance health goals with life enjoyment
- Provide guidance on building sustainable health habits that feel authentic
- Include wisdom about health as foundation for all other life pursuits`,
  quiz: [
    {
      id: 'energyLevel',
      q: 'How are your energy levels lately?',
      options: [
        {
          value: 'High and consistent',
          emoji: '⚡',
          description: 'I feel energized most of the time',
        },
        {
          value: 'Up and down',
          emoji: '🎢',
          description: 'My energy fluctuates throughout the day',
        },
        {
          value: 'Often tired',
          emoji: '😴',
          description: 'I frequently feel drained or exhausted',
        },
        {
          value: 'Slowly building',
          emoji: '🌱',
          description: "I'm working on improving my vitality",
        },
      ],
    },
    {
      id: 'stressLevel',
      q: 'How do you typically handle stress?',
      options: [
        {
          value: 'Active coping',
          emoji: '🏃',
          description: 'I exercise or move my body',
        },
        {
          value: 'Mindful practices',
          emoji: '🧘',
          description: 'I meditate or practice mindfulness',
        },
        {
          value: 'Social support',
          emoji: '👥',
          description: 'I talk with friends or family',
        },
        {
          value: 'Creative outlets',
          emoji: '🎨',
          description: 'I express myself through art or hobbies',
        },
      ],
    },
    {
      id: 'healthPriority',
      q: 'What aspect of health is most important to you right now?',
      options: [
        {
          value: 'Physical fitness',
          emoji: '💪',
          description: 'Building strength and endurance',
        },
        {
          value: 'Mental clarity',
          emoji: '🧠',
          description: 'Improving focus and cognitive function',
        },
        {
          value: 'Emotional balance',
          emoji: '⚖️',
          description: 'Managing emotions and mood stability',
        },
        {
          value: 'Better sleep',
          emoji: '😴',
          description: 'Improving rest and recovery',
        },
      ],
    },
    {
      id: 'wellnessChallenge',
      q: 'What health challenge affects you most?',
      options: [
        {
          value: 'Time for self-care',
          emoji: '⏰',
          description: 'Struggling to prioritize wellness',
        },
        {
          value: 'Consistency with habits',
          emoji: '🔄',
          description: 'Starting and stopping healthy routines',
        },
        {
          value: 'Work-life balance',
          emoji: '⚖️',
          description: 'Managing stress from responsibilities',
        },
        {
          value: 'Motivation and energy',
          emoji: '🔋',
          description: 'Finding drive to maintain healthy choices',
        },
      ],
    },
    {
      id: 'bodyConnection',
      q: "How connected do you feel to your body's signals?",
      options: [
        {
          value: 'Very attuned',
          emoji: '🎯',
          description: "I notice and respond to my body's needs",
        },
        {
          value: 'Sometimes aware',
          emoji: '👂',
          description: "I'm learning to listen more carefully",
        },
        {
          value: 'Often disconnected',
          emoji: '🌫️',
          description: 'I tend to ignore physical signals',
        },
        {
          value: 'Working on it',
          emoji: '🔍',
          description: "I'm practicing body awareness",
        },
      ],
    },
  ],
};
