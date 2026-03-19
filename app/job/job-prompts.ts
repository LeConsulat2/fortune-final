import { type FortuneConfig } from '@/lib/types';

export const job: FortuneConfig = {
  label: {
    name: 'Job Fortune',
    emoji: '💼',
    description: 'Career, work, and professional growth',
  },
  guidance: `
You are a perceptive daily work fortune reader who speaks plainly — not with inspiration-poster language.
Your readings feel accurate because they name real workplace situations, not vague ambition themes.

◆ VOICE
- A sharp colleague who reads office dynamics unusually well
- Direct, practical, grounded — never motivational-poster generic
- You notice the small workplace moments that shift bigger things

◆ SPECIFICITY RULES (non-negotiable)
- Name time windows: "first thing this morning", "before lunch", "after 3pm", "end of day"
- Name real workplace situations: "a message you've been drafting but not sending", "a meeting that could go either way", "someone noticing your work more than you realize"
- Name types of people: "your manager", "a teammate", "someone senior you rarely talk to", "a client"
- No motivational vagueness: never "unleash your potential", "seize opportunities", "align with your purpose"
- Every sentence should describe something that could genuinely happen at work today
- Reference their occupation specifically to make it concrete

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
      id: 'todayMood',
      q: 'What’s your general vibe about work today?',
      options: [
        {
          value: 'Let’s Do This',
          emoji: '💪',
          description: 'Feeling ready to take things on',
        },
        {
          value: 'Caffeine and Hope',
          emoji: '☕',
          description: 'Running on nervous energy and habit',
        },
        {
          value: 'Just Survive It',
          emoji: '🫠',
          description: 'Mentally clocked out, physically present',
        },
        {
          value: 'Meh',
          emoji: '😐',
          description: 'Just doing what needs to be done — no more, no less',
        },
        {
          value: 'Quietly Optimistic',
          emoji: '🌤️',
          description: 'Hopeful something small will go well',
        },
      ],
    },
    {
      id: 'howYouThinkOthersSeeYou',
      q: 'How do you *think* you come across at work?',
      options: [
        {
          value: 'Reliable',
          emoji: '📦',
          description: 'I get things done quietly and consistently',
        },
        {
          value: 'Competent but Distant',
          emoji: '🪟',
          description: 'I do good work, but I’m not that “chatty”',
        },
        {
          value: 'Underestimated',
          emoji: '🫥',
          description: 'I feel like people don’t fully see what I bring',
        },
        {
          value: 'Helpful and Kind',
          emoji: '🧃',
          description: 'I try to make things smoother for others',
        },
        {
          value: 'Wildcard',
          emoji: '🎲',
          description: 'It really depends on the day',
        },
      ],
    },
    {
      id: 'motivationLoop',
      q: 'What’s your current motivation loop at work?',
      options: [
        {
          value: 'Up and Down',
          emoji: '↕️',
          description: 'Some days I’m on fire, others… not so much',
        },
        {
          value: 'Steady Push',
          emoji: '🚶',
          description: 'Not dramatic, just showing up and doing it',
        },
        {
          value: 'Last-Minute Hustle',
          emoji: '🔥',
          description: 'Deadlines are the only thing that move me',
        },
        {
          value: 'Just Do It',
          emoji: '💪',
          description:
            'Same, no matter what, I figure out what needs to be done and make it happen',
        },
        {
          value: 'Dragging Feet',
          emoji: '🪨',
          description: 'It’s a struggle to get momentum going',
        },
        {
          value: 'Starting to Shift',
          emoji: '🌱',
          description: 'Something in me is stirring — maybe change is coming',
        },
      ],
    },
    {
      id: 'boundaryHabits',
      q: 'How are your work boundaries lately?',
      options: [
        {
          value: 'Chair Slouch Mode',
          emoji: '💺',
          description:
            'I’m basically lying down in this chair but still replying to emails',
        },
        {
          value: 'Trying to Protect Space',
          emoji: '🪵',
          description: 'Blocking time off, even if I feel slightly guilty',
        },
        {
          value: 'Depends on the Week',
          emoji: '🌗',
          description: 'Some weeks I’m solid, others I cave',
        },
        {
          value: 'Pretty Healthy',
          emoji: '🧘',
          description: 'I know when to stop and protect my time',
        },
      ],
    },
    {
      id: 'feedbackFeelings',
      q: 'How do you usually feel after getting feedback?',
      options: [
        {
          value: 'Hyper-Critical',
          emoji: '🕵️',
          description: 'I obsess over what I could’ve done better',
        },
        {
          value: 'Quietly Encouraged',
          emoji: '📎',
          description: 'Even small praise helps me keep going',
        },
        {
          value: "Don't Care",
          emoji: '🤷',
          description: 'I know the job better than the person giving feedback',
        },
        {
          value: 'Detached',
          emoji: '🌬️',
          description: 'I hear it, but don’t feel much about it',
        },
        {
          value: 'Energized',
          emoji: '🎯',
          description: 'I take feedback and think as positive as possible',
        },
      ],
    },
    {
      id: 'conflictStyle',
      q: 'When work conflict shows up, how do you usually handle it?',
      options: [
        {
          value: 'Avoid & Simmer',
          emoji: '🥄',
          description: 'I keep it in and vent later',
        },
        {
          value: 'Talk It Out ',
          emoji: '📞',
          description: 'Only way to resolve it really eventually',
        },
        {
          value: 'Here We Go Again',
          emoji: '🔁',
          description: 'Here comes the drama again',
        },
        {
          value: 'Address Immediately',
          emoji: '🚨',
          description: 'I can’t stand tension — I speak up quickly',
        },
        {
          value: 'Let It Go',
          emoji: '🍃',
          description: 'If it’s not serious, I genuinely move on',
        },
      ],
    },
    {
      id: 'hiddenStrength',
      q: 'Which of these is one of your quiet superpowers at work?',
      options: [
        {
          value: 'Staying Calm',
          emoji: '🧊',
          description: 'Even in chaos, I keep a level head',
        },
        {
          value: 'Reading People',
          emoji: '🧠',
          description: 'I notice moods and dynamics quickly',
        },
        {
          value: 'Detail Memory',
          emoji: '📚',
          description: 'I remember the things others forget',
        },
        {
          value: 'Making People Feel Safe',
          emoji: '🌿',
          description: 'People feel steadier around me',
        },
      ],
    },
    {
      id: 'workIdentity',
      q: 'If your current job disappeared tomorrow, what would you feel first?',
      options: [
        {
          value: 'Relief',
          emoji: '😮‍💨',
          description: 'Honestly… I’d feel lighter',
        },
        {
          value: 'Fear',
          emoji: '😬',
          description: 'I’d worry about what’s next',
        },
        {
          value: 'Excitement',
          emoji: '🚀',
          description: 'A blank slate sounds amazing',
        },
        {
          value: 'Loss of Self',
          emoji: '👤',
          description: 'So much of my identity is tied to this',
        },
      ],
    },
    {
      id: 'energyRhythm',
      q: 'When do you usually feel most productive?',
      options: [
        {
          value: 'Mornings',
          emoji: '🌅',
          description: 'Fresh mind, quiet hours, clean slate',
        },
        {
          value: 'Head Start',
          emoji: '🚀',
          description: 'I start early and have a head start',
        },
        {
          value: 'Afternoons',
          emoji: '🌞',
          description: 'I warm up slowly but then lock in',
        },
        {
          value: 'Evenings',
          emoji: '🌙',
          description: 'Quiet + pressure = focus',
        },
        {
          value: 'Random Spurts',
          emoji: '🌪️',
          description: 'No pattern, just sprints when it hits',
        },
      ],
    },
    {
      id: 'whatYouWantNext',
      q: 'What do you secretly hope comes next in your career?',
      options: [
        {
          value: 'Recognition',
          emoji: '🌟',
          description: 'For people to actually see what I’ve built',
        },
        {
          value: 'Better Balance',
          emoji: '🧘‍♂️',
          description: 'Work that respects the rest of my life',
        },
        {
          value: 'Creative Freedom',
          emoji: '🎨',
          description: 'More space to make, shape, or lead my way',
        },
        {
          value: 'A Clean Exit',
          emoji: '🚪',
          description: 'A graceful way out when the time is right',
        },
        {
          value: 'More Money',
          emoji: '💰',
          description: 'More money, more money, more money',
        },
        {
          value: 'Better Manager',
          emoji: '🧑‍💼',
          description: 'A manager who knows what they are doing',
        },
      ],
    },
    {
      id: 'language',
      q: 'What language did you want the fortuner to respond to you?',
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
