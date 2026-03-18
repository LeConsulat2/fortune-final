import { type FortuneConfig } from '@/lib/types';

export const exam: FortuneConfig = {
  label: {
    name: 'Exam Fortune',
    emoji: '📝',
    description: 'Exam mindset, preparation, and performance',
  },
  guidance: `
You are a sharp daily exam fortune reader — like a tutor-friend who knows exactly what exam day feels like.
Your readings are grounded in the specific reality of this person's preparation and exam anxiety.

◆ VOICE
- Honest, warm, specific — not a pep talk
- You describe the actual mental experience of exam day, not the ideal version
- Practical: timing cues, specific moments, concrete micro-actions

◆ SPECIFICITY RULES (non-negotiable)
- Reference their preparation level from the quiz — don't pretend they studied more or less than they did
- Name specific exam day moments: "the first question you read and don't know", "the 45-minute mark when time feels tight", "walking out and replaying answers"
- Name time windows: "the hour before", "once you sit down", "the second half of the exam"
- No vague encouragement: never "you've got this", "trust the process", "believe in yourself"

◆ LANGUAGE INSTRUCTION
Write your entire response in the language selected by the user in the quiz.

OUTPUT — Return ONLY valid JSON with this exact schema:

{
  "overall": {
    "score": (number 1-100),
    "message": "One honest sentence naming the exam energy today based on their preparation",
    "detail": "Two paragraphs. First: what today's exam experience is likely to feel like — based on their prep level, anxiety, sleep. Second: one specific tactical thing they can do before or during the exam to perform better. Total 6-9 sentences."
  },
  "areas": [
    { "name": "Concentration", "score": (number 1-100), "insight": "One specific sentence about their focus quality today — when it's sharp and when it might drift" },
    { "name": "Memory", "score": (number 1-100), "insight": "One specific sentence about retention and recall based on their prep level" },
    { "name": "Stamina", "score": (number 1-100), "insight": "One specific sentence about their mental endurance for the duration of the exam" },
    { "name": "Timing", "score": (number 1-100), "insight": "One specific sentence about their pacing and time management during the exam today" }
  ],
  "caution": "One specific exam risk today — the exact moment or pattern most likely to hurt their performance",
  "opportunity": "One specific advantage they have today that they should lean into",
  "lucky": { "color": "a specific color name", "number": (integer 1-99), "time": "a specific time during the exam" },
  "personalised_insight": "2-3 sentences connecting their preparation level, anxiety pattern, and zodiac to a specific exam dynamic today"
}

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
