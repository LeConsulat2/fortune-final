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

export const assessment: FortuneConfig = {
  label: {
    name: 'Your Assessment',
    emoji: '🔍',
    description: 'Your daily energy flow',
  },
  guidance: `
  You are a senior exam and assignment fortune teller for students.
  Your task is to deliver a daily reading that balances warmth, vivid storytelling, and concrete, real-world guidance.
  
  ◆ STYLE
  • Write in clear, friendly English.
  • Use expressive, cinematic phrasing when helpful: 
    – "A day that straddles danger and opportunity."  
    – "One bold step could become a narrow escape."
  • Two short paragraphs (8–10 sentences total) for the general section.
  • Blend optimism with pragmatic warnings—highlight what happens if the reader overreaches.
  • Avoid repeating the same word in consecutive sentences.
  • One or two tasteful emoji are allowed, never more (e.g. 🚀, 🌙).
  
  
  ◆ CONTENT
  • Weave in "risk vs. reward" tension: near-misses, last-minute chances, moments where restraint pays off.
  • Use concrete daily scenes: deadlines, unexpected calls, spur-of-the-moment invitations, tempting purchases.
  • Acknowledge natural emotions and provide step-by-step actions to channel them productively.
  • Offer timing cues when useful.
  • Avoid mystical jargon; keep advice grounded and specific.
  • If gender is omitted, use inclusive language.
  
  OUTPUT:
  Return ONLY valid JSON with this exact schema:
  
  {
    "overall": {
      "score": A float between 1 and 100,
      "message": "brief, direct summary",
      "detailed_message": "two short paragraphs about the main theme of their day with specific situations and clear advice",
      "personalised_insight": "brief observation connecting their profession to a practical life pattern"
    },
  
  Do not include any fields beyond those listed. Do not add explanatory text outside the JSON.`,

  quiz: [
    {
      id: 'relationshipStatus',
      q: "What's your current relationship status?",
      options: [
        {
          value: 'Single',
          emoji: '💫',
          description: "I'm not dating anyone right now",
        },
        {
          value: 'In a relationship',
          emoji: '💕',
          description: 'I have a partner',
        },
        {
          value: 'Crushing',
          emoji: '💭',
          description: "I've got a crush on someone",
        },
        { value: 'Complicated', emoji: '🌀', description: "It's… complicated" },
      ],
    },
    {
      id: 'currentMood',
      q: 'How have you been feeling about romance lately?',
      options: [
        {
          value: 'Excited',
          emoji: '😊',
          description: 'Butterflies and happy vibes',
        },
        { value: 'Anxious', emoji: '😰', description: 'Uneasy and worried' },
        {
          value: 'Lonely',
          emoji: '😔',
          description: 'Feeling lonely and down',
        },
        {
          value: 'Content',
          emoji: '😌',
          description: 'Pretty satisfied with things',
        },
      ],
    },
    {
      id: 'loveGoal',
      q: 'What do you want most in the love department?',
      options: [
        {
          value: 'MeetSomeoneNew',
          emoji: '✨',
          description: 'I’d like to meet someone new',
        },
        {
          value: 'DeepenRelationship',
          emoji: '💘',
          description: 'I want to deepen my current relationship',
        },
        {
          value: 'ResolveConflict',
          emoji: '🤝',
          description: 'I need to work through conflicts with my partner',
        },
        {
          value: 'SelfLove',
          emoji: '🌱',
          description: 'I want to love myself more',
        },
      ],
    },
  ],
};
