import { type FortuneConfig, type Question } from '@/lib/types';

export { type FortuneConfig, type Question } from '@/lib/types';

export interface QuizOption {
  value: string;
  emoji: string;
  description: string;
}

export const mentalHealth: FortuneConfig = {
  label: {
    name: 'Mental Health Fortune',
    emoji: '🧠',
    description: 'Mind, emotions, and inner well-being',
  },
  guidance: `
MENTAL HEALTH & EMOTIONAL WELLNESS FOCUS: Provide nuanced insights into psychological patterns, emotional processing, and mental well-being without clinical language. Each reading should feel like guidance from someone who understands the complex landscape of modern mental health.

SOPHISTICATED PSYCHOLOGICAL AWARENESS:
- Recognize the difference between temporary mood shifts and deeper patterns
- Address how perfectionism and high-functioning anxiety manifest in daily life
- Explore the psychology of comparison and social media's impact on mental health
- Examine how childhood patterns influence adult emotional responses
- Address the complexity of imposter syndrome and self-worth struggles
- Discuss how trauma responses can be subtle and persistent
- Explore the relationship between creativity and mental health
- Address how life transitions trigger unexpected emotional responses
- Examine the difference between healthy solitude and isolation

EMOTIONAL INTELLIGENCE & REGULATION:
- Address the challenge of feeling emotions without being overwhelmed by them
- Explore how to sit with discomfort without immediately trying to fix it
- Discuss the complexity of being sensitive in a world that often feels harsh
- Address how to maintain empathy without absorbing others' emotions
- Explore the psychology of emotional boundaries and energy protection
- Discuss how to process grief that doesn't follow traditional timelines
- Address the challenge of feeling "too much" or "not enough"
- Explore how to handle criticism without internalized shame
- Discuss the complexity of healing while still functioning in daily life

MODERN MENTAL HEALTH CHALLENGES:
- Address decision fatigue and the overwhelming nature of modern choices
- Explore how digital overwhelm affects attention and peace of mind
- Discuss the pressure to be constantly productive and optimized
- Address how to find meaning in work that doesn't fulfill you
- Explore the loneliness epidemic and difficulty forming deep connections
- Discuss how to maintain hope during uncertain times
- Address the challenge of aging parents and shifting family dynamics
- Explore how to handle success anxiety and fear of failure equally
- Discuss the complexity of living authentically in performative culture

AUTHENTIC RESPONSE PATTERNS:
- Avoid therapeutic jargon and clinical terminology
- Use metaphors and imagery that resonate with emotional experience
- Address the internal contradictions people feel about their mental health
- Acknowledge when healing isn't linear or predictable
- Include insights about the relationship between mental health and creativity
- Address how seasonal changes, hormonal cycles, and life phases affect mood
- Discuss the difference between what we project and what we actually feel
- Include recognition of high-functioning struggles that others might not see

NUANCED COPING & GROWTH:
- Address how to build resilience without toxic positivity
- Explore how to accept help without feeling like a burden
- Discuss the challenge of maintaining boundaries with family patterns
- Address how to find therapists and support that actually fit
- Explore how to handle medication decisions and treatment complexity
- Discuss how to maintain mental health during major life changes
- Address the challenge of loving someone with mental health struggles
- Explore how to support others without losing yourself
- Discuss how to recognize when professional help is needed

PRACTICAL WISDOM FOR DAILY LIFE:
- Provide specific guidance on managing morning anxiety or evening rumination
- Address how to create mental space in overstimulated environments
- Discuss how to handle social situations when you're struggling internally
- Provide insights about recognizing and interrupting negative thought spirals
- Address how to maintain mental health during busy or stressful periods
- Discuss how to find authentic ways to practice self-compassion
- Address how to handle the gap between who you are and who you want to be
- Provide guidance on building sustainable mental health practices

OUTPUT:
Return ONLY valid JSON with this exact schema:

{
  "overall": {
    "score": 1-10,
    "message": "brief, direct summary",
    "detailed_message": "two short paragraphs about the main theme of their day with specific situations and clear advice",
    "personalised_insight": "brief observation connecting their quiz answers to a practical life pattern"
  }
}

Do not include any fields beyond those listed. Do not add explanatory text outside the JSON.`,

  quiz: [
    {
      id: 'mentalHealthPattern',
      q: 'Which pattern best describes your mental health experience lately?',
      options: [
        {
          value: 'High-functioning struggle',
          emoji: '🎭',
          description: 'I appear fine on the outside but struggle internally',
        },
        {
          value: 'Seasonal sensitivity',
          emoji: '🌦️',
          description: 'My mood shifts with weather, seasons, or life phases',
        },
        {
          value: 'Anxiety spiral cycles',
          emoji: '🌀',
          description: 'I get caught in worry loops that are hard to break',
        },
        {
          value: 'Emotional overwhelm',
          emoji: '🌊',
          description: "I feel everything deeply and sometimes it's too much",
        },
        {
          value: 'Steady but fragile',
          emoji: '🪶',
          description: "I'm doing okay but feel like I could tip easily",
        },
      ],
    },
    {
      id: 'emotionalRegulation',
      q: 'How do you typically process difficult emotions?',
      options: [
        {
          value: 'Analyze and intellectualize',
          emoji: '🔍',
          description: 'I try to think my way through feelings',
        },
        {
          value: 'Feel fully then move on',
          emoji: '🌊',
          description: 'I let myself experience emotions completely',
        },
        {
          value: 'Distract until it passes',
          emoji: '📱',
          description: 'I stay busy to avoid sitting with difficult feelings',
        },
        {
          value: 'Talk it out with others',
          emoji: '💬',
          description: 'I process by sharing with trusted people',
        },
        {
          value: 'Body-based processing',
          emoji: '🏃',
          description: 'I move, breathe, or use physical practices',
        },
      ],
    },
    {
      id: 'anxietyTriggers',
      q: 'What tends to trigger your anxiety or stress most?',
      options: [
        {
          value: 'Uncertainty about future',
          emoji: '🔮',
          description: "Not knowing what's coming next unsettles me",
        },
        {
          value: 'Social performance pressure',
          emoji: '🎪',
          description: 'Feeling like I need to be "on" around others',
        },
        {
          value: 'Perfectionism and control',
          emoji: '🎯',
          description: "When things don't go according to plan",
        },
        {
          value: 'Comparison and inadequacy',
          emoji: '📊',
          description: "Measuring myself against others' success",
        },
        {
          value: 'Conflict and confrontation',
          emoji: '⚔️',
          description: 'Disagreements or tension with others',
        },
      ],
    },
    {
      id: 'mentalHealthSupport',
      q: 'How do you currently support your mental health?',
      options: [
        {
          value: 'Professional therapy',
          emoji: '🛋️',
          description: 'I work with a therapist regularly',
        },
        {
          value: 'Medication and monitoring',
          emoji: '💊',
          description: 'I use medication as part of my mental health care',
        },
        {
          value: 'Self-directed practices',
          emoji: '📚',
          description: 'I use books, apps, or personal practices',
        },
        {
          value: 'Friend and family support',
          emoji: '👥',
          description: 'I rely on my personal support network',
        },
        {
          value: 'Still figuring it out',
          emoji: '🧩',
          description: "I'm exploring what works for me",
        },
      ],
    },
    {
      id: 'selfCompassion',
      q: "How do you treat yourself when you're struggling?",
      options: [
        {
          value: 'Harsh internal critic',
          emoji: '⚖️',
          description: "I'm harder on myself than I would be on others",
        },
        {
          value: 'Gentle but realistic',
          emoji: '🌸',
          description: 'I try to be kind while acknowledging reality',
        },
        {
          value: 'Avoidance and numbing',
          emoji: '🌫️',
          description: 'I tend to escape or distract from difficult feelings',
        },
        {
          value: 'Practical problem-solving',
          emoji: '🛠️',
          description: 'I focus on what I can do to improve things',
        },
        {
          value: 'Inconsistent compassion',
          emoji: '🎲',
          description: "Sometimes I'm kind, sometimes I'm cruel to myself",
        },
      ],
    },
    {
      id: 'mentalHealthGoals',
      q: 'What would most improve your mental health right now?',
      options: [
        {
          value: 'Better anxiety management',
          emoji: '🧘',
          description: 'Tools to handle worry and overwhelm',
        },
        {
          value: 'Improved self-worth',
          emoji: '💎',
          description: 'Feeling more confident and secure in myself',
        },
        {
          value: 'Healthier relationships',
          emoji: '🤝',
          description: 'Better boundaries and communication skills',
        },
        {
          value: 'Life direction clarity',
          emoji: '🧭',
          description: 'Feeling more purposeful and aligned',
        },
        {
          value: 'Emotional stability',
          emoji: '⚖️',
          description: 'Less extreme mood swings and more balance',
        },
      ],
    },
    {
      id: 'stressResponse',
      q: "When you're overwhelmed, what happens to you?",
      options: [
        {
          value: 'Shutdown and withdraw',
          emoji: '🏠',
          description: 'I isolate and need space to recharge',
        },
        {
          value: 'Hyperactive and scattered',
          emoji: '🌪️',
          description: "I become restless and can't focus",
        },
        {
          value: 'Irritable and reactive',
          emoji: '🌋',
          description: 'Small things trigger disproportionate responses',
        },
        {
          value: 'Physical symptoms',
          emoji: '🤕',
          description: 'I feel it in my body - headaches, tension, fatigue',
        },
        {
          value: 'Emotional numbness',
          emoji: '🧊',
          description: 'I disconnect from feelings entirely',
        },
      ],
    },
    {
      id: 'mentalHealthAwareness',
      q: 'How aware are you of your mental health patterns?',
      options: [
        {
          value: 'Highly self-aware',
          emoji: '🔍',
          description: 'I notice patterns and triggers clearly',
        },
        {
          value: 'Learning to recognize',
          emoji: '👁️',
          description: "I'm developing better self-awareness",
        },
        {
          value: 'Others notice first',
          emoji: '👥',
          description: 'Friends or family point out changes before I do',
        },
        {
          value: 'Hindsight clarity',
          emoji: '🪞',
          description: "I understand patterns only after they've passed",
        },
        {
          value: 'Still discovering',
          emoji: '🗺️',
          description: "I'm just beginning to understand my mental health",
        },
      ],
    },
  ],
};
