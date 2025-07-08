import { type FortuneConfig } from '@/lib/types';

export const mentalHealth: FortuneConfig = {
  label: {
    name: 'Mental Health Fortune',
    emoji: '🧠',
    description: 'Mind, emotions, and inner well-being',
  },
  guidance: `
MENTAL HEALTH & EMOTIONAL WELLNESS FOCUS: Provide nuanced insights into psychological patterns and emotional well-being. Each reading should feel like guidance from an emotionally intelligent friend who understands the complex reality of modern mental health.

SOPHISTICATED EMOTIONAL INTELLIGENCE:
- Recognize the difference between temporary mood shifts and deeper patterns
- Address how perfectionism and high-functioning anxiety show up in daily life
- Explore the psychology of comparison and social media's impact on mental health
- Examine how childhood patterns influence adult emotional responses
- Address the complexity of imposter syndrome and self-worth struggles
- Discuss how trauma responses can be subtle and persistent
- Explore the relationship between creativity and mental health
- Address how life transitions trigger unexpected emotional responses
- Examine the difference between healthy solitude and isolation

NUANCED MENTAL HEALTH DYNAMICS:
- Address the challenge of feeling emotions without being overwhelmed by them
- Explore how to sit with discomfort without immediately trying to fix it
- Discuss the complexity of being sensitive in a world that often feels harsh
- Address how to maintain empathy without absorbing others' emotions
- Explore the psychology of emotional boundaries and energy protection
- Discuss how to process grief that doesn't follow traditional timelines
- Address the challenge of feeling "too much" or "not enough"
- Explore how to handle criticism without internalized shame
- Discuss the complexity of healing while still functioning in daily life

AUTHENTIC RESPONSE PATTERNS:
- Vary sentence structure and opening phrases naturally
- Use specific, concrete imagery rather than abstract psychological concepts
- Include references to subtle emotional cues people actually experience
- Address the internal contradictions people feel about their mental health
- Acknowledge when healing isn't linear or predictable
- Include insights about timing that feel realistic, not prescriptive
- Address how small moments can shift mental health patterns
- Discuss the difference between what we project and what we actually feel

MODERN MENTAL HEALTH REALITY:
- Address decision fatigue and the overwhelming nature of modern choices
- Explore how digital overwhelm affects attention and peace of mind
- Discuss the pressure to be constantly productive and optimized
- Address how to find meaning in work that doesn't fulfill you
- Explore the loneliness epidemic and difficulty forming deep connections
- Discuss how to maintain hope during uncertain times
- Address the challenge of aging parents and shifting family dynamics
- Explore how to handle success anxiety and fear of failure equally
- Discuss the complexity of living authentically in performative culture

PRACTICAL WISDOM WITHOUT CLINICAL LANGUAGE:
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
    "score": 1-100,
    "message": "brief, direct summary",
    "detailed_message": "two short paragraphs about the main theme of their mental health with specific situations and clear guidance",
    "personalised_insight": "brief observation connecting their quiz answers to a practical mental health pattern"
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
      id: 'dailyMentalState',
      q: 'How do you typically start your mornings?',
      options: [
        {
          value: 'Anxious awakening',
          emoji: '⏰',
          description: 'I wake up with worry or dread about the day',
        },
        {
          value: 'Slow to surface',
          emoji: '🌅',
          description: 'It takes me a while to feel mentally clear',
        },
        {
          value: 'Optimistic energy',
          emoji: '☀️',
          description: 'I generally feel hopeful and ready',
        },
        {
          value: 'Neutral processing',
          emoji: '🤖',
          description: 'I feel emotionally flat or disconnected',
        },
        {
          value: 'Mood lottery',
          emoji: '🎲',
          description: 'It varies completely from day to day',
        },
      ],
    },
    {
      id: 'stressResponse',
      q: 'When you hit your emotional limit, what happens?',
      options: [
        {
          value: 'Shutdown mode',
          emoji: '🏠',
          description: 'I withdraw and need complete solitude',
        },
        {
          value: 'Scattered energy',
          emoji: '🌪️',
          description: "I become restless and can't focus on anything",
        },
        {
          value: 'Irritable reactor',
          emoji: '🌋',
          description: 'Small things trigger big emotional responses',
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
      id: 'socialBattery',
      q: 'How do social situations affect your mental energy?',
      options: [
        {
          value: 'Energizing connection',
          emoji: '⚡',
          description: 'Being around people generally lifts my mood',
        },
        {
          value: 'Selective socializing',
          emoji: '🔍',
          description: 'Only certain people or situations feel good',
        },
        {
          value: 'Performance anxiety',
          emoji: '🎪',
          description: 'I worry about how I come across to others',
        },
        {
          value: 'Draining but necessary',
          emoji: '🔋',
          description: 'I need social time but it exhausts me',
        },
        {
          value: 'Overwhelming crowds',
          emoji: '🌊',
          description: 'Too many people make me feel lost or anxious',
        },
      ],
    },
    {
      id: 'selfTalk',
      q: 'What does your inner voice sound like lately?',
      options: [
        {
          value: 'Harsh critic',
          emoji: '⚖️',
          description: "I'm harder on myself than I'd be on others",
        },
        {
          value: 'Gentle guide',
          emoji: '🌸',
          description: 'I try to be kind and encouraging to myself',
        },
        {
          value: 'Anxious narrator',
          emoji: '📢',
          description: 'Constantly pointing out what could go wrong',
        },
        {
          value: 'Confused observer',
          emoji: '❓',
          description: "I'm not sure what I think or feel about things",
        },
        {
          value: 'Inconsistent companion',
          emoji: '🎭',
          description: 'Sometimes supportive, sometimes cruel',
        },
      ],
    },
    {
      id: 'copingMechanism',
      q: 'When you need to feel better, what do you reach for?',
      options: [
        {
          value: 'Movement and nature',
          emoji: '🚶',
          description: 'Physical activity or time outdoors',
        },
        {
          value: 'Creative expression',
          emoji: '🎨',
          description: 'Art, music, writing, or other creative outlets',
        },
        {
          value: 'Social connection',
          emoji: '🤗',
          description: 'Talking with friends or family',
        },
        {
          value: 'Comfort behaviors',
          emoji: '🛋️',
          description: 'Food, screens, shopping, or other soothing habits',
        },
        {
          value: 'Solitude and reflection',
          emoji: '🧘',
          description: 'Quiet time alone to process and recharge',
        },
      ],
    },
    {
      id: 'mentalHealthGoals',
      q: 'What would most improve your mental health right now?',
      options: [
        {
          value: 'Anxiety management',
          emoji: '🧘',
          description: 'Better tools for handling worry and overwhelm',
        },
        {
          value: 'Self-worth boost',
          emoji: '💎',
          description: 'Feeling more confident and secure in myself',
        },
        {
          value: 'Relationship skills',
          emoji: '🤝',
          description: 'Better boundaries and communication',
        },
        {
          value: 'Life direction',
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
      id: 'mentalHealthSupport',
      q: 'How do you currently take care of your mental health?',
      options: [
        {
          value: 'Professional help',
          emoji: '🛋️',
          description: 'Therapy, counseling, or medical support',
        },
        {
          value: 'Self-directed practices',
          emoji: '📚',
          description: 'Books, apps, meditation, or personal routines',
        },
        {
          value: 'Friend network',
          emoji: '👥',
          description: 'I rely on my personal support system',
        },
        {
          value: 'Trial and error',
          emoji: '🧩',
          description: "I'm still figuring out what works for me",
        },
        {
          value: 'Minimal attention',
          emoji: '🤷',
          description: "I don't actively focus on my mental health much",
        },
      ],
    },
  ],
};
