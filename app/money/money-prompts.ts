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

export const money: FortuneConfig = {
  label: {
    name: 'Money Fortune',
    emoji: '💰',
    description: 'Financial stability, income, and wealth',
  },
  guidance: `FINANCIAL & ABUNDANCE FOCUS: Explore the deeper psychology of money, abundance mindset, and financial decision-making patterns.

SPECIFIC GUIDANCE:
- Address relationship with money and underlying financial beliefs
- Include insights about scarcity vs. abundance mindset patterns
- Provide guidance on financial decision-making and risk assessment
- Address how emotional states influence spending and saving habits
- Include wisdom about recognizing genuine financial opportunities
- Address the psychology of financial security vs. financial growth
- Provide insights about money as energy exchange and value creation
- Include guidance on balancing financial prudence with generous giving
- Address how family money patterns influence current financial choices

INVESTMENT & OPPORTUNITY:
- Acknowledge the balance between conservative and aggressive financial strategies
- Address timing for financial decisions and market awareness
- Include insights about recognizing undervalued opportunities
- Provide guidance on diversification and risk management psychology
- Address how to distinguish between genuine opportunities and get-rich-quick schemes
- Include wisdom about building sustainable wealth vs. quick gains

FINANCIAL PSYCHOLOGY:
- Address perfectionism around money management and financial decisions
- Include insights about money shame, guilt, or anxiety patterns
- Provide guidance on financial communication with partners or family
- Address how self-worth connects to financial success or struggles
- Include wisdom about money as a tool vs. money as identity
- Address the relationship between financial stress and overall life satisfaction

PRACTICAL FINANCIAL WISDOM:
- Provide specific guidance on budgeting and expense prioritization
- Include insights about negotiation and value advocacy
- Address how to research and evaluate financial decisions thoroughly
- Provide guidance on building multiple income streams and financial security
- Include wisdom about financial planning that aligns with personal values`,
  quiz: [
    {
      id: 'financialMindset',
      q: 'How do you generally feel about money?',
      options: [
        {
          value: 'Confident manager',
          emoji: '💪',
          description: 'I feel in control of my finances',
        },
        {
          value: 'Anxious worrier',
          emoji: '😰',
          description: 'Money stress keeps me up at night',
        },
        {
          value: 'Optimistic dreamer',
          emoji: '🌟',
          description: 'I believe abundance is possible',
        },
        {
          value: 'Practical planner',
          emoji: '📊',
          description: 'I focus on realistic financial goals',
        },
      ],
    },
    {
      id: 'spendingStyle',
      q: 'What best describes your spending habits?',
      options: [
        {
          value: 'Careful saver',
          emoji: '🐷',
          description: 'I prioritize saving over spending',
        },
        {
          value: 'Strategic investor',
          emoji: '📈',
          description: 'I spend money to make money',
        },
        {
          value: 'Experience seeker',
          emoji: '🎭',
          description: 'I value experiences over things',
        },
        {
          value: 'Impulse buyer',
          emoji: '🛍️',
          description: 'I sometimes buy without planning',
        },
      ],
    },
    {
      id: 'moneyGoal',
      q: "What's your primary financial focus right now?",
      options: [
        {
          value: 'Building emergency fund',
          emoji: '🛡️',
          description: 'Creating financial security and safety net',
        },
        {
          value: 'Paying off debt',
          emoji: '🔗',
          description: 'Eliminating financial obligations',
        },
        {
          value: 'Growing investments',
          emoji: '🌱',
          description: 'Building wealth for the future',
        },
        {
          value: 'Increasing income',
          emoji: '⬆️',
          description: 'Finding ways to earn more money',
        },
      ],
    },
    {
      id: 'financialChallenge',
      q: 'What money challenge affects you most?',
      options: [
        {
          value: 'Making ends meet',
          emoji: '⚖️',
          description: 'Struggling with basic expenses',
        },
        {
          value: 'Saving consistently',
          emoji: '💧',
          description: 'Having trouble putting money aside',
        },
        {
          value: 'Investment decisions',
          emoji: '🤔',
          description: 'Uncertain about where to invest',
        },
        {
          value: 'Money conversations',
          emoji: '💬',
          description: 'Discussing finances with family/partners',
        },
      ],
    },
    {
      id: 'financialOpportunity',
      q: 'How do you usually approach financial opportunities?',
      options: [
        {
          value: 'Research thoroughly',
          emoji: '🔍',
          description: 'I investigate before making decisions',
        },
        {
          value: 'Trust my instincts',
          emoji: '💫',
          description: 'I go with my gut feeling',
        },
        {
          value: 'Seek expert advice',
          emoji: '👥',
          description: 'I consult with knowledgeable people',
        },
        {
          value: 'Start small and test',
          emoji: '🧪',
          description: 'I try things on a smaller scale first',
        },
      ],
    },
  ],
};
