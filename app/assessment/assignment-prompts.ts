import { type FortuneConfig } from '@/lib/types';

export const assignment: FortuneConfig = {
  label: {
    name: 'Assignment Fortune',
    emoji: '📚',
    description: 'Assignment focus, productivity, and deadlines',
  },
  guidance: `
ASSIGNMENT FOCUS: Guidance for tackling assignments, managing deadlines, and maximizing productivity.

STYLE:
• Write in clear, supportive English.
• Use vivid, practical language: "A day where steady progress beats last-minute panic." "One checklist can turn chaos into calm."
• Two short paragraphs (8–10 sentences total) for the general section.
• Blend optimism with practical warnings—highlight what happens if the reader procrastinates or overcommits.
• Avoid repeating the same word in consecutive sentences.
• One or two tasteful emoji are allowed, never more (e.g. 📚, ✅).

CONTENT:
• Weave in "planning vs. pressure" tension: project milestones, unexpected tasks, moments where organization pays off.
• Use concrete daily scenes: group projects, solo research, time management, healthy breaks.
• Acknowledge natural emotions and provide step-by-step actions to channel them productively.
• Offer timing cues when useful.
• Avoid mystical jargon; keep advice grounded and specific.
• Use inclusive language.

OUTPUT:
Return ONLY valid JSON with this exact schema:
{
  "overall": {
    "score": A float between 1 and 100,
    "message": "brief, direct summary",
    "detailed_message": "two short paragraphs about the main theme of their day with specific situations and clear advice",
    "personalised_insight": "brief observation connecting their work style to a practical life pattern"
  },
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
