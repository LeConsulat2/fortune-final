import { type FortuneConfig } from '@/lib/types';

export const mentalHealth: FortuneConfig = {
  label: {
    name: 'Mental Health Fortune',
    emoji: '🧠',
    description: 'Mind, emotions, and inner well-being',
  },
  guidance: `
You are a grounded daily mental health fortune reader — like an emotionally intelligent friend who notices your patterns.
Your readings feel accurate because they name the specific psychological experience this person is having — not clinical advice or wellness clichés.

◆ VOICE
- Honest, warm, observant — you see the inner experience they don't always say out loud
- Non-clinical: no therapy-speak, no "practice self-care", no "set boundaries"
- You describe what it feels like from the inside — specific and real

◆ SPECIFICITY RULES (non-negotiable)
- Use their quiz answers directly: morning pattern, inner narrative, stress response, coping mechanism
- Name time-specific emotional moments: "the 3pm slump", "waking up before your alarm", "the quiet after a draining conversation"
- Name real psychological experiences: "the gap between how you look online and how you feel at 10pm", "the thought loop that starts small and then takes over"
- No wellness clichés: never "practice gratitude", "just breathe", "be kind to yourself" as standalone advice
- Every sentence should describe something they recognize from their own inner life today

◆ LANGUAGE INSTRUCTION
Write your entire response in the language selected by the user in the quiz.

OUTPUT — Return ONLY valid JSON with this exact schema:

{
  "overall": {
    "score": (number 1-100),
    "message": "One sharp sentence summing up today's dominant theme",
    "reading": "Your full reading as a single flowing narrative — 4 to 7 sentences. Speak as a real fortune teller: name specific situations, time windows, and people. Weave in any warnings, opportunities, or lucky moments only when they genuinely belong — not as a checklist, but naturally, the way a perceptive reader would. Some readings have a caution. Some have a moment to seize. Some have both. Some have neither. Let the day dictate it."
  },
  "highlights": [
    { "text": "exact phrase copied verbatim from the reading", "type": "caution" }
  ]
}

HIGHLIGHTS RULES:
- Include 0 to 3 highlights maximum — only when something genuinely needs attention
- "caution" type: warnings, watch-outs, things that could go wrong if ignored
- "seize" type: specific opportunities, actions, or lucky moments to act on
- The "text" value MUST be an exact verbatim substring of the reading field — copy it character-for-character
- If nothing stands out strongly, return an empty array: []

Do not include any fields beyond those listed. Do not add explanatory text outside the JSON.`,

  quiz: [
    {
      id: 'mentalHealthPattern',
      q: 'Which pattern best describes your mental health experience lately?',
      multiSelect: true,
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
        {
          value: 'Multiple patterns apply',
          emoji: '🧩',
          description: 'More than one of these feels true for me right now',
        },
      ],
    },
    {
      id: 'dailyMentalState',
      q: 'How do you typically start your mornings?',
      multiSelect: true,
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
        {
          value: 'Multiple patterns apply',
          emoji: '🧩',
          description: 'More than one of these feels true for me right now',
        },
      ],
    },
    {
      id: 'innerNarrative',
      q: 'Lately, what’s the main story running through your head?',
      multiSelect: true,
      options: [
        {
          value: 'Trying to Keep Up',
          emoji: '🏃',
          description: 'I feel like I’m constantly behind or catching up',
        },
        {
          value: 'What’s the Point?',
          emoji: '🌀',
          description: 'I keep questioning the purpose of it all',
        },
        {
          value: 'I Should Be Better',
          emoji: '🧭',
          description: 'There’s a quiet pressure to “improve” myself',
        },
        {
          value: 'Small Wins Matter',
          emoji: '🌼',
          description: 'I’m learning to value tiny moments of progress',
        },
        {
          value: 'Multiple patterns apply',
          emoji: '🧩',
          description: 'More than one of these feels true for me right now',
        },
      ],
    },
    {
      id: 'stressResponse',
      q: 'When you hit your emotional limit, what happens?',
      multiSelect: true,
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
        {
          value: 'Multiple patterns apply',
          emoji: '🧩',
          description: 'More than one of these feels true for me right now',
        },
      ],
    },
    {
      id: 'socialBattery',
      q: 'How do social situations affect your mental energy?',
      multiSelect: true,
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
        {
          value: 'Multiple patterns apply',
          emoji: '🧩',
          description: 'More than one of these feels true for me right now',
        },
      ],
    },
    {
      id: 'selfTalk',
      q: 'What does your inner voice sound like lately?',
      multiSelect: true,
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
        {
          value: 'Multiple patterns apply',
          emoji: '🧩',
          description: 'More than one of these feels true for me right now',
        },
      ],
    },
    {
      id: 'emotionalLoneliness',
      q: 'When you feel low, what’s the hardest part?',
      multiSelect: true,
      options: [
        {
          value: 'Feeling Invisible',
          emoji: '👻',
          description: 'Like no one notices or truly sees me',
        },
        {
          value: 'Feeling Unreachable',
          emoji: '📡',
          description: 'Even when people care, I feel far away from them',
        },
        {
          value: 'Feeling Too Much',
          emoji: '🌊',
          description: 'I wish I could feel less deeply — it’s exhausting',
        },
        {
          value: 'Not Feeling Anything',
          emoji: '🧊',
          description: 'Emotional flatness that feels like numbness',
        },
        {
          value: 'Multiple patterns apply',
          emoji: '🧩',
          description: 'More than one of these feels true for me right now',
        },
      ],
    },
    {
      id: 'copingMechanism',
      q: 'When you need to feel better, what do you reach for?',
      multiSelect: true,
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
        {
          value: 'Multiple patterns apply',
          emoji: '🧩',
          description: 'More than one of these feels true for me right now',
        },
      ],
    },
    {
      id: 'mentalHealthGoals',
      q: 'What would most improve your mental health right now?',
      multiSelect: true,
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
      multiSelect: true,
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
        {
          value: 'Multiple patterns apply',
          emoji: '🧩',
          description: 'More than one of these feels true for me right now',
        },
      ],
    },
    {
      id: 'language',
      q: 'What language did you want the fortuner to respond to you?',
      // left as single-select
      options: [
        {
          value: 'English',
          emoji: '🇬🇧',
          description: 'English',
        },
        {
          value: 'Korean',
          emoji: '🇰🇷',
          description: 'Korean',
        },
        {
          value: 'Japanese',
          emoji: '🇯🇵',
          description: 'Japanese',
        },
        {
          value: 'Chinese',
          emoji: '🇨🇳',
          description: 'Chinese',
        },
        {
          value: 'Vietnamese',
          emoji: '🇻🇳',
          description: 'Vietnamese',
        },
      ],
    },
  ],
};
