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

export const love: FortuneConfig = {
  label: {
    name: 'Love Fortune',
    emoji: '💕',
    description: 'Romance and relationships',
  },
  guidance: `
  LOVE & RELATIONSHIPS FOCUS: Provide nuanced insights into romantic complexity, avoiding clichés and template responses. Each reading should feel like a conversation with an emotionally intelligent friend who understands the messy reality of modern love.
  
  SOPHISTICATED EMOTIONAL INTELLIGENCE:
  - Recognize the difference between healthy tension and toxic patterns
  - Address the psychology of "almost relationships" and situationships
  - Explore how pride and vulnerability create relationship cycles
  - Examine the gap between what we want and what we actually need
  - Address the complexity of timing in relationships - right person, wrong moment
  - Discuss how past relationships create invisible scripts for new ones
  - Explore the difference between chemistry and compatibility
  - Address how social contexts influence private emotions
  - Examine the role of miscommunication in deepening or destroying connection
  
  NUANCED RELATIONSHIP DYNAMICS:
  - Address the push-pull dynamic of wanting closeness while fearing intimacy
  - Explore how individual insecurities create relationship patterns
  - Discuss the complexity of on-again, off-again relationships
  - Address how pride prevents people from expressing their true feelings
  - Examine the fear of being "too much" or "not enough" for someone
  - Discuss how class, background, or life stage differences affect connection
  - Address the challenge of maintaining individual identity within intense connection
  - Explore how family patterns unconsciously influence romantic choices
  - Discuss the complexity of loving someone who isn't ready for what you're offering
  
  AUTHENTIC RESPONSE PATTERNS:
  - Vary sentence structure and opening phrases naturally
  - Use specific, concrete imagery rather than abstract concepts
  - Include references to subtle emotional cues people actually experience
  - Address the internal contradictions people feel about love
  - Acknowledge when there are no easy answers
  - Include insights about timing that feel realistic, not magical
  - Address how small moments can shift relationship dynamics
  - Discuss the difference between what we tell ourselves and what we actually feel
  
  GRAY AREA NAVIGATION:
  - Address relationships that exist in limbo between friendship and romance
  - Discuss how to read between the lines of someone's actions
  - Explore the complexity of still having feelings for someone from your past
  - Address how to handle relationships where communication styles clash
  - Discuss the challenge of loving someone who shows love differently
  - Address how to navigate relationships where life circumstances create barriers
  - Explore how to handle attraction to someone who might not be good for you
  - Discuss the complexity of relationships where both people care but can't make it work
  
  PRACTICAL WISDOM WITHOUT CLICHÉS:
  - Provide specific guidance on reading subtle emotional signals
  - Address when to fight for someone and when to let them go
  - Discuss how to have difficult conversations without destroying connection
  - Provide insights about creating space for someone to come to you
  - Address how to maintain dignity while being vulnerable
  - Discuss how to handle rejection without closing your heart
  - Address how to love someone without losing yourself in the process`,

  quiz: [
    {
      id: 'relationshipComplexity',
      q: 'Which situation feels most familiar to your current love life?',
      options: [
        {
          value: 'Undefined connection',
          emoji: '🌫️',
          description:
            "There's something there, but neither of you has defined it",
        },
        {
          value: 'Timing mismatch',
          emoji: '⏰',
          description: 'Right person, but life circumstances are complicated',
        },
        {
          value: 'Communication dance',
          emoji: '💃',
          description: "You both care but keep missing each other's signals",
        },
        {
          value: 'Past still present',
          emoji: '👻',
          description:
            'Previous relationship shadows are affecting your present',
        },
        {
          value: 'Clear and steady',
          emoji: '🛤️',
          description:
            'Your romantic situation feels straightforward right now',
        },
      ],
    },
    {
      id: 'emotionalPattern',
      q: 'How do you typically handle romantic uncertainty?',
      options: [
        {
          value: 'Overthink everything',
          emoji: '🧠',
          description: 'I analyze every text, every look, every interaction',
        },
        {
          value: 'Protect through distance',
          emoji: '🏰',
          description: 'I pull back to avoid getting hurt',
        },
        {
          value: 'Push for clarity',
          emoji: '🔍',
          description:
            "I need to know where I stand, even if it's uncomfortable",
        },
        {
          value: 'Go with the flow',
          emoji: '🌊',
          description: 'I try to let things unfold naturally',
        },
        {
          value: 'Seek advice constantly',
          emoji: '📞',
          description: "I talk it through with friends until I'm exhausted",
        },
      ],
    },
    {
      id: 'prideDynamics',
      q: 'When it comes to making the first move or being vulnerable:',
      options: [
        {
          value: 'Pride holds me back',
          emoji: '🦁',
          description: 'I struggle to show my cards first',
        },
        {
          value: "I'm usually the initiator",
          emoji: '🚀',
          description: 'I tend to make the first move',
        },
        {
          value: 'I drop hints and hope',
          emoji: '💫',
          description: 'I signal interest but wait for them to be direct',
        },
        {
          value: 'I mirror their energy',
          emoji: '🪞',
          description: 'I match whatever level of interest they show',
        },
        {
          value: "I'm direct when I'm sure",
          emoji: '🎯',
          description: 'Once I know how I feel, I speak up',
        },
      ],
    },
    {
      id: 'connectionStyle',
      q: 'What kind of romantic connection do you crave most?',
      options: [
        {
          value: 'Intellectual intimacy',
          emoji: '📚',
          description: 'Deep conversations and mental connection',
        },
        {
          value: 'Comfortable silence',
          emoji: '🤫',
          description: 'Being together without needing to fill every moment',
        },
        {
          value: 'Passionate intensity',
          emoji: '🔥',
          description: "Chemistry that's impossible to ignore",
        },
        {
          value: 'Steady partnership',
          emoji: '🤝',
          description: 'Someone who builds life alongside you',
        },
        {
          value: 'Playful chemistry',
          emoji: '🎭',
          description: 'Someone who brings out your fun, lighter side',
        },
      ],
    },
    {
      id: 'relationshipBarriers',
      q: 'What most often gets in the way of your romantic connections?',
      options: [
        {
          value: 'Fear of judgment',
          emoji: '👁️',
          description: 'Worrying what others think about my choices',
        },
        {
          value: 'Different life stages',
          emoji: '📅',
          description: 'Timing never seems to align with the right people',
        },
        {
          value: 'Communication styles',
          emoji: '📡',
          description: 'We care but speak completely different languages',
        },
        {
          value: 'Past relationship trauma',
          emoji: '🩹',
          description: 'Old wounds affecting new possibilities',
        },
        {
          value: 'Practical circumstances',
          emoji: '🌍',
          description: 'Distance, work, family obligations',
        },
      ],
    },
    {
      id: 'emotionalAvailability',
      q: 'How ready are you for real intimacy right now?',
      options: [
        {
          value: 'Scared but willing',
          emoji: '🦋',
          description: 'Nervous about being hurt but open to connection',
        },
        {
          value: 'Cautiously optimistic',
          emoji: '🌅',
          description: 'Ready to try again with better boundaries',
        },
        {
          value: 'Fully open',
          emoji: '🌸',
          description: 'Ready to be vulnerable and authentic',
        },
        {
          value: 'Healing in progress',
          emoji: '🌱',
          description: 'Working on myself before diving in',
        },
        {
          value: 'Conflicted',
          emoji: '⚖️',
          description: 'Want connection but afraid of losing independence',
        },
      ],
    },
    {
      id: 'loveLanguageGap',
      q: 'When someone cares about you, how do you usually recognize it?',
      options: [
        {
          value: 'Their actions toward me',
          emoji: '🤲',
          description: 'I notice what they do, not just what they say',
        },
        {
          value: 'How they remember details',
          emoji: '🧩',
          description: 'They pay attention to things that matter to me',
        },
        {
          value: 'Their presence and attention',
          emoji: '👀',
          description: 'They make me feel seen and prioritized',
        },
        {
          value: 'Physical affection',
          emoji: '🫂',
          description: 'Touch and closeness speak louder than words',
        },
        {
          value: 'Words and expression',
          emoji: '💬',
          description: 'I need to hear how they feel about me',
        },
      ],
    },
    {
      id: 'relationshipTiming',
      q: "What's your relationship with timing in love?",
      options: [
        {
          value: 'Chronically bad timing',
          emoji: '🕰️',
          description:
            'I always seem to meet the right people at the wrong moments',
        },
        {
          value: 'Impatient for clarity',
          emoji: '⚡',
          description: 'I want to know where things are heading quickly',
        },
        {
          value: 'Believer in divine timing',
          emoji: '🌌',
          description: "I trust that things happen when they're supposed to",
        },
        {
          value: 'Practical about timing',
          emoji: '📊',
          description: 'I consider life logistics when dating',
        },
        {
          value: 'Timing is everything',
          emoji: '🎯',
          description:
            'I think timing can make or break even great connections',
        },
      ],
    },
  ],
};
