import { type FortuneConfig } from '@/lib/types';

export const assignment: FortuneConfig = {
  label: {
    name: 'Assignment Fortune',
    emoji: '📚',
    description: 'Assignment focus, productivity, and deadlines',
  },
  guidance: `
You are a sharp daily assignment fortune reader — like a study-partner who knows exactly where the work-wall hits.
Your readings describe the real productivity experience of this person's assignment situation, not the ideal version.

◆ VOICE
- Honest and practical — you name the procrastination, the blank-page feeling, the 2am panic
- Specific to where they are in the assignment process
- Concrete: you give timing cues and specific work tactics, not motivation

◆ SPECIFICITY RULES (non-negotiable)
- Reference their timeline status and blockers from the quiz directly
- Name specific work moments: "the paragraph you keep rewriting", "the section you're avoiding", "two hours of productive flow before it drops off"
- Name time windows: "this morning before anything distracts you", "the 2-hour window in the afternoon", "the final hour before the deadline"
- No generic productivity advice: never "just start", "one step at a time", "you can do it"

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
      id: 'timelineStatus',
      q: 'Where are you in your assignment timeline?',
      options: [
        {
          value: 'Just Started',
          emoji: '🌱',
          description:
            'Fresh start - outline phase, gathering ideas and resources',
        },
        {
          value: 'Making Progress',
          emoji: '🔄',
          description:
            'Steady momentum - working through the main content consistently',
        },
        {
          value: 'Halfway Through',
          emoji: '⚡',
          description: 'Midpoint grind - pushing through the bulk of the work',
        },
        {
          value: 'Final Push',
          emoji: '🏃',
          description: 'Sprint mode - wrapping up, editing, and polishing',
        },
        {
          value: 'Crunch Time',
          emoji: '🚨',
          description:
            'Last-minute hustle - deadline is breathing down my neck',
        },
      ],
    },
    {
      id: 'assignmentType',
      q: 'What kind of assignment are you wrestling with?',
      options: [
        {
          value: 'Research Paper',
          emoji: '📄',
          description: 'Deep dive essay or research report requiring analysis',
        },
        {
          value: 'Creative Project',
          emoji: '🎨',
          description: 'Presentation, design work, or creative portfolio piece',
        },
        {
          value: 'Problem Sets',
          emoji: '🧮',
          description:
            'Math problems, coding assignments, or technical exercises',
        },
        {
          value: 'Lab Work',
          emoji: '🔬',
          description:
            'Experiments, data collection, or hands-on practical work',
        },
      ],
    },
    {
      id: 'currentMood',
      q: 'How are you feeling about this assignment right now?',
      options: [
        {
          value: 'In the Zone',
          emoji: '🎯',
          description:
            'Flow state activated - ideas are connecting, words are flowing',
        },
        {
          value: 'Grinding It Out',
          emoji: '💪',
          description:
            'Not inspired, but pushing through with discipline and effort',
        },
        {
          value: 'Hitting Walls',
          emoji: '🧱',
          description:
            'Stuck on concepts, struggling to find the right approach',
        },
        {
          value: 'Stress Spiral',
          emoji: '🌪️',
          description:
            'Overwhelmed by scope, paralyzed by perfectionism or time pressure',
        },
        {
          value: 'Procrastination Loop',
          emoji: '🔄',
          description:
            'Avoiding it entirely - scrolling, cleaning, doing literally anything else',
        },
      ],
    },
    {
      id: 'workStyle',
      q: 'What describes your natural work rhythm?',
      options: [
        {
          value: 'Steady Pacer',
          emoji: '🐢',
          description:
            'Consistent daily progress - slow and steady wins the race',
        },
        {
          value: 'Burst Worker',
          emoji: '⚡',
          description:
            'Intense focused sessions followed by breaks or other tasks',
        },
        {
          value: 'Night Owl',
          emoji: '🦉',
          description:
            'Peak productivity happens after everyone else is asleep',
        },
        {
          value: 'Deadline Warrior',
          emoji: '⚔️',
          description:
            'Pressure creates diamonds - I do my best work under time constraints',
        },
        {
          value: 'Collaborative Spirit',
          emoji: '🤝',
          description:
            'Bounce ideas off others, work better with accountability partners',
        },
      ],
    },
    {
      id: 'biggestChallenge',
      q: "What's your biggest obstacle right now?",
      options: [
        {
          value: 'Getting Started',
          emoji: '🚀',
          description: 'Blank page syndrome - the hardest part is beginning',
        },
        {
          value: 'Staying Focused',
          emoji: '🎯',
          description:
            'Distractions everywhere - phone, social media, random thoughts',
        },
        {
          value: 'Understanding Material',
          emoji: '🤔',
          description: 'Complex concepts that need more time to click',
        },
        {
          value: 'Time Management',
          emoji: '⏰',
          description:
            'Balancing this with other responsibilities and commitments',
        },
        {
          value: 'Perfectionism',
          emoji: '🔍',
          description:
            'Getting stuck tweaking details instead of moving forward',
        },
      ],
    },
    {
      id: 'successVision',
      q: 'What would make this assignment feel like a genuine win?',
      options: [
        {
          value: 'Personal Growth',
          emoji: '🌱',
          description:
            'Learning something that genuinely expands my understanding',
        },
        {
          value: 'Quality Work',
          emoji: '💎',
          description:
            "Producing something I'm actually proud to put my name on",
        },
        {
          value: 'Efficient Process',
          emoji: '⚡',
          description:
            'Finishing without burnout, maintaining balance and sanity',
        },
        {
          value: 'Grade Achievement',
          emoji: '🎯',
          description: 'Hitting the grade target I need for my academic goals',
        },
        {
          value: 'Just Surviving',
          emoji: '🏥',
          description:
            'Getting it done and submitted - any passing grade is victory',
        },
      ],
    },
  ],
};
