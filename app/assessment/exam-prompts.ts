import { type FortuneConfig } from '@/lib/types';

export const exam: FortuneConfig = {
  label: {
    name: 'Exam Fortune',
    emoji: '📝',
    description: 'Exam mindset, preparation, and performance',
  },
  guidance: `
EXAM FOCUS: Guidance for exam preparation, stress management, and peak performance.

STYLE:
• Write in clear, encouraging English.
• Use vivid, motivating language: "A day where focus becomes your superpower." "One calm breath can turn panic into clarity."
• Two short paragraphs (8–10 sentences total) for the general section.
• Blend optimism with practical warnings—highlight what happens if the reader overreaches or neglects self-care.
• Avoid repeating the same word in consecutive sentences.
• One or two tasteful emoji are allowed, never more (e.g. 📝, 📚).

CONTENT:
• Weave in "preparation vs. pressure" tension: last-minute review, unexpected questions, moments where calmness pays off.
• Use concrete daily scenes: exam halls, study sessions, time management, healthy breaks.
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
    "personalised_insight": "brief observation connecting their study habits to a practical life pattern"
  },
Do not include any fields beyond those listed. Do not add explanatory text outside the JSON.`,

  quiz: [
    {
      id: 'prepTimeline',
      q: 'How much have you honestly prepared for this?',
      options: [
        {
          value: 'Early Bird',
          emoji: '📅',
          description: 'I started from early in the semester or term',
        },
        {
          value: 'Solid Head Start',
          emoji: '🗂️',
          description: 'I began , but not super early',
        },
        {
          value: 'Midpoint Hustler',
          emoji: '⏳',
          description: 'Started around just before the halfway mark',
        },
        {
          value: 'Late Push',
          emoji: '🌘',
          description: 'Started preparing pretty late',
        },
        {
          value: 'Just Now, Honestly',
          emoji: '🫣',
          description: 'I’m basically cramming as we speak',
        },
      ],
    },
    {
      id: 'examType',
      q: 'What type of exam are you preparing for?',
      options: [
        {
          value: 'Pass or Fail',
          emoji: '🎓',
          description: 'Pass or Fail test ',
        },
        { value: 'Quiz', emoji: '📝', description: 'Short quiz or test' },
        { value: 'Midterm', emoji: '📖', description: 'Midterm exam' },
        { value: 'Final', emoji: '🏁', description: 'Final exam' },
      ],
    },
    {
      id: 'studyMood',
      q: 'How are you feeling about your exam prep?',
      options: [
        {
          value: 'Confident',
          emoji: '😎',
          description: 'Ready and well-prepared',
        },
        {
          value: 'Nervous',
          emoji: '😬',
          description:
            'No matter how much prepare, it doens not change my anxiety',
        },
        {
          value: 'Unsure',
          emoji: '🤔',
          description: 'Not sure if I am ready or not',
        },
        {
          value: 'Overwhelmed',
          emoji: '😵',
          description: 'Too much to cover, not enough time',
        },
        {
          value: 'Motivated',
          emoji: '💪',
          description:
            'Pumped to do my best, although they tell me humble is the key',
        },
      ],
    },
    {
      id: 'energyManagement',
      q: 'How are you managing your physical energy while studying?',
      options: [
        {
          value: 'Well-Rested',
          emoji: '😴',
          description:
            'Getting solid sleep. Recovery is the best source for my memory',
        },
        {
          value: 'Caffeine-Boosted',
          emoji: '☕',
          description:
            "Caffeine x 1000. I'm not sure if it's helping or not at this point",
        },
        {
          value: 'Trying to Stay Balanced',
          emoji: '🍵',
          description:
            'Trying to keep a good rhythm, need to still work part-time and workout!',
        },
        {
          value: 'Running on Empty',
          emoji: '🔋',
          description:
            'Somehow pushing through, I mean, I have no choice right now',
        },
        {
          value: 'On Edge',
          emoji: '📉',
          description: 'Restless, jittery — stress is showing up in my body',
        },
      ],
    },
    {
      id: 'mentalBlock',
      q: 'What tends to block your focus the most when studying?',
      options: [
        {
          value: 'Phone or Distraction',
          emoji: '📱',
          description: 'I keep checking my phone or doing something else',
        },
        {
          value: 'Stress Spiral',
          emoji: '🌀',
          description:
            'I overthink or imagine about no questions coming out from what I have studied',
        },
        {
          value: 'Near No Idea',
          emoji: '❓',
          description: 'Not sure what or how to study  ',
        },
        {
          value: 'Motivation Dips',
          emoji: '😩',
          description:
            'I just can’t find the will to focus, I normally focus the best near towards last minute',
        },
        {
          value: 'None in Particular',
          emoji: '🧘',
          description: 'I’ve been able to focus fairly well',
        },
      ],
    },
    {
      id: 'examGoal',
      q: 'What would feel like a win for you in this exam?',
      options: [
        {
          value: 'Highest Score',
          emoji: '🌟',
          description: 'Achieving the highest score possible',
        },
        {
          value: 'Personal Best',
          emoji: '🏅',
          description: 'Beating my own record',
        },
        {
          value: 'Stay Calm',
          emoji: '🧘',
          description:
            'Staying calm. Focus on context of what I learnt and just execute in the exam',
        },
        {
          value: 'Minimum Pass',
          emoji: '⏰',
          description: 'C- or 49.5% is goal at this point',
        },
      ],
    },
  ],
};
