import { type FortuneConfig } from '@/lib/types';

export const composure: FortuneConfig = {
  label: {
    name: 'Composure',
    emoji: '🗿',
    description: 'Inner stance and mental discipline',
  },
  guidance: `
  COMPOSURE & MENTAL DISCIPLINE FOCUS: Provide insights into how one maintains inner stability and clarity through daily pressures. Each reading should feel like guidance from someone who understands the weight of carrying oneself well through difficulty.
  
  INNER STANCE & BEARING:
  - Recognize how mental posture affects one's capacity to endure
  - Address the discipline required to maintain clarity under pressure
  - Explore how one's inner stance influences decision-making quality
  - Examine the relationship between physical bearing and mental steadiness
  - Address how consistent practices build unshakeable core stability
  - Discuss the art of remaining centered while others lose composure
  - Explore how to maintain dignity when circumstances test you
  - Address the difference between rigid control and flexible strength
  - Examine how daily choices compound into inner fortitude
  
  OPERATIONAL RESILIENCE:
  - Address how to function effectively when internal weather is stormy
  - Explore the mechanics of staying present during overwhelming periods
  - Discuss how to maintain work quality when personal foundations feel shaky
  - Address the skill of compartmentalizing without numbing
  - Explore how to make sound decisions when emotions run high
  - Discuss the practice of responding rather than reacting under stress
  - Address how to maintain standards when everything feels chaotic
  - Explore the discipline of not spreading your internal state to others
  - Discuss how to keep moving forward when motivation fails
  
  MENTAL TERRAIN NAVIGATION:
  - Address how to map your internal landscape without getting lost in it
  - Explore the difference between acknowledging difficulty and dwelling in it
  - Discuss how to observe your thoughts without being commanded by them
  - Address the practice of holding multiple truths simultaneously
  - Explore how to maintain perspective when caught in emotional weather
  - Discuss the art of sitting with discomfort without immediately acting
  - Address how to distinguish between productive reflection and rumination
  - Explore how to use adversity as information rather than identity
  - Discuss the discipline of not making permanent decisions from temporary states
  
  QUIET STRENGTH CULTIVATION:
  - Address how to build capacity for increasing levels of difficulty
  - Explore the practice of doing what needs doing regardless of internal state
  - Discuss how to maintain your center when others are reactive
  - Address the skill of holding space for others without losing yourself
  - Explore how to process experiences without being processed by them
  - Discuss the art of remaining curious about your own reactions
  - Address how to build trust in your ability to handle what comes
  - Explore the difference between enduring and merely surviving
  - Discuss how to find stillness within movement and action
  
  DAILY DISCIPLINE PRACTICES:
  - Address how morning routines establish inner architecture for the day
  - Explore how to maintain mental hygiene in overstimulating environments
  - Discuss the practice of regular self-inventory without self-judgment
  - Address how to build sustainable rhythms that support inner stability
  - Explore the discipline of saying no to preserve essential energy
  - Discuss how to maintain focus when pulled in multiple directions
  - Address the practice of completing tasks despite internal resistance
  - Explore how to end days with integrity regardless of external outcomes
  - Discuss the art of preparing mentally for known challenges
  
  RELATIONAL COMPOSURE:
  - Address how to remain yourself in the presence of others' chaos
  - Explore the skill of listening without absorbing others' emotional states
  - Discuss how to maintain boundaries without building walls
  - Address the practice of responding to conflict from your center
  - Explore how to offer support without sacrificing your own stability
  - Discuss the art of being present with others' pain without fixing
  - Address how to maintain your values when social pressure mounts
  - Explore the discipline of not explaining yourself to those who won't understand
  - Discuss how to love others without losing your own compass
  
  ADVERSITY AS TEACHER:
  - Address how difficulties reveal the quality of your inner foundation
  - Explore how to extract wisdom from experiences without being defined by them
  - Discuss the practice of viewing challenges as training rather than punishment
  - Address how to maintain curiosity about your own responses under pressure
  - Explore the difference between being shaped by adversity versus broken by it
  - Discuss how to use setbacks as information about necessary adjustments
  - Address the practice of finding meaning in suffering without romanticizing it
  - Explore how to maintain hope without denial of current reality
  - Discuss the art of letting difficulties refine rather than diminish you
  
  AUTHENTIC RESPONSE PATTERNS:
  - Use precise language that reflects actual experience rather than therapeutic concepts
  - Address the internal contradictions that arise when maintaining composure
  - Acknowledge when strength requires admitting limitation
  - Include insights about the relationship between vulnerability and true strength
  - Address how seasonal changes, life phases, and external pressures affect inner stability
  - Discuss the difference between what others see and what you carry
  - Include recognition of the ongoing nature of building and maintaining composure
  - Address the moments when composure feels like a burden rather than a gift
  
  
  OUTPUT:
Return ONLY valid JSON with this exact schema:

{
  "overall": {
    "score": 1-100,
    "message": "brief, direct summary",
    "detailed_message": "two short paragraphs about the main theme of their composure with specific situations and clear guidance",
    "personalised_insight": "brief observation connecting their quiz answers to a practical composure pattern"
  }
}

Do not include any fields beyond those listed. Do not add explanatory text outside the JSON.`,

  quiz: [
    {
      id: 'innerStance',
      q: 'How would you describe your inner stance lately?',
      options: [
        {
          value: 'Steady under pressure',
          emoji: '🗿',
          description: 'I maintain my center even when circumstances shift',
        },
        {
          value: 'Quietly rebuilding',
          emoji: '🔨',
          description:
            'I sense my foundation needs attention and am working on it',
        },
        {
          value: 'Reactive and scattered',
          emoji: '🌪️',
          description: 'External events pull me in too many directions',
        },
        {
          value: 'Testing my limits',
          emoji: '⚖️',
          description: 'I am discovering what I can actually handle',
        },
        {
          value: 'Holding but brittle',
          emoji: '🪶',
          description: 'I appear composed but feel close to breaking',
        },
      ],
    },
    {
      id: 'dailyDiscipline',
      q: 'How do you maintain your composure through daily challenges?',
      options: [
        {
          value: 'Morning rituals',
          emoji: '🌅',
          description: 'I establish my inner architecture early each day',
        },
        {
          value: 'Steady routines',
          emoji: '⚙️',
          description: 'I rely on consistent practices that ground me',
        },
        {
          value: 'Moment-to-moment awareness',
          emoji: '👁️',
          description: 'I catch myself and readjust throughout the day',
        },
        {
          value: 'Physical discipline',
          emoji: '🏃',
          description: 'I use movement and breath to maintain stability',
        },
        {
          value: 'Still learning consistency',
          emoji: '🎯',
          description: 'I know what helps but struggle to maintain it',
        },
      ],
    },
    {
      id: 'pressureResponse',
      q: 'When external pressure mounts, you tend to:',
      options: [
        {
          value: 'Narrow focus to essentials',
          emoji: '🎯',
          description: 'I cut away non-essential concerns and concentrate',
        },
        {
          value: 'Slow down deliberately',
          emoji: '🐌',
          description: 'I move more carefully to avoid mistakes',
        },
        {
          value: 'Increase effort and pace',
          emoji: '⚡',
          description: 'I push harder to meet the demands',
        },
        {
          value: 'Seek space to recalibrate',
          emoji: '🏔️',
          description: 'I need distance to regain my center',
        },
        {
          value: 'Compartmentalize sharply',
          emoji: '📦',
          description: 'I separate different areas to manage them',
        },
      ],
    },
    {
      id: 'mentalTerrain',
      q: 'How do you navigate your internal landscape?',
      options: [
        {
          value: 'Careful observation',
          emoji: '🔍',
          description: 'I notice patterns without being caught by them',
        },
        {
          value: 'Structured reflection',
          emoji: '📋',
          description: 'I have regular practices for internal review',
        },
        {
          value: 'Intuitive sensing',
          emoji: '🧭',
          description: 'I feel my way through internal weather',
        },
        {
          value: 'Analytical mapping',
          emoji: '🗺️',
          description: 'I think through my reactions and responses',
        },
        {
          value: 'Still learning the territory',
          emoji: '🔦',
          description: 'I often get lost in my own internal complexity',
        },
      ],
    },
    {
      id: 'difficultyApproach',
      q: 'How do you approach difficulty when it arises?',
      options: [
        {
          value: 'Direct engagement',
          emoji: '⚔️',
          description: 'I face challenges head-on without hesitation',
        },
        {
          value: 'Strategic patience',
          emoji: '♟️',
          description: 'I wait for the right moment to act',
        },
        {
          value: 'Steady endurance',
          emoji: '🏔️',
          description: 'I focus on outlasting rather than overpowering',
        },
        {
          value: 'Adaptive flexibility',
          emoji: '🌊',
          description:
            'I adjust my approach based on what the situation requires',
        },
        {
          value: 'Resistance then acceptance',
          emoji: '🤝',
          description: 'I struggle first, then find a way to work with what is',
        },
      ],
    },
    {
      id: 'composureGoals',
      q: 'What would most strengthen your inner composure?',
      options: [
        {
          value: 'Deeper self-knowledge',
          emoji: '🪞',
          description: 'Understanding my patterns and triggers more clearly',
        },
        {
          value: 'Better emotional regulation',
          emoji: '⚖️',
          description: 'Managing my responses without suppressing them',
        },
        {
          value: 'Stronger daily practices',
          emoji: '🔧',
          description:
            'Building more consistent routines that support stability',
        },
        {
          value: 'Increased capacity',
          emoji: '💪',
          description: 'Being able to handle more without losing center',
        },
        {
          value: 'Clearer boundaries',
          emoji: '🚪',
          description: 'Knowing when to engage and when to protect my energy',
        },
      ],
    },
    {
      id: 'overwhelmResponse',
      q: 'When you feel overwhelmed, what happens to your composure?',
      options: [
        {
          value: 'Controlled withdrawal',
          emoji: '🏠',
          description: 'I step back strategically to regain my footing',
        },
        {
          value: 'Heightened precision',
          emoji: '🎯',
          description: 'I become more careful and deliberate in my actions',
        },
        {
          value: 'Scattered attention',
          emoji: '🌪️',
          description: 'I lose focus and react to everything at once',
        },
        {
          value: 'Rigid control',
          emoji: '🔒',
          description: 'I grip tighter and try to control more',
        },
        {
          value: 'Quiet collapse',
          emoji: '🕳️',
          description: 'I maintain appearances but feel empty inside',
        },
      ],
    },
    {
      id: 'composureAwareness',
      q: 'How aware are you of your composure patterns?',
      options: [
        {
          value: 'Clear recognition',
          emoji: '🔍',
          description: 'I can see my patterns as they happen',
        },
        {
          value: 'Developing insight',
          emoji: '👁️',
          description: 'I am learning to catch myself earlier',
        },
        {
          value: 'Aftermath clarity',
          emoji: '🪞',
          description: 'I understand what happened only after it has passed',
        },
        {
          value: 'External mirrors',
          emoji: '👥',
          description: 'Others reflect my state back to me',
        },
        {
          value: 'Emerging awareness',
          emoji: '🌅',
          description: 'I am just beginning to notice these patterns',
        },
      ],
    },
  ],
};
