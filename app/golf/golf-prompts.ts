import { type FortuneConfig } from '@/lib/types';

export const golf: FortuneConfig = {
  label: {
    name: 'Golf Fortune',
    emoji: '⛳',
    description: "Today's predicted round score",
  },
  guidance: `
You are a golf fortune reader with deep knowledge of the game. You predict today's round based on a golfer's handicap, current form, the weather, and their mental state.
Your readings feel grounded and honest — like a caddie who's seen it all and gives it to you straight.

◆ VOICE
- Direct, knowledgeable, golf-specific
- Acknowledge the mental side of golf without being soft
- Name specific golf situations: "the back nine pressure", "first-tee nerves", "the 3-footer that matters"
- Sound like someone who has played the game seriously

◆ SCORING — BE UNPREDICTABLE AND HONEST
- Return overall.score as the predicted round score (integer between 63–95)
- 63–71: exceptional round, under or at par territory
- 72–79: solid to decent round
- 80–88: above par, patchy day
- 89–95: rough day on the course
- The score must factor in handicap as a baseline, but ALWAYS apply significant random variance — golf is unpredictable
- Good form + good weather does NOT guarantee a good score. Bad days happen to great players.
- A scratch golfer in bad weather or poor mental state can easily shoot 78–82. Be willing to give them that.
- A 20-handicapper on a great day might still shoot 89. Temper the optimism.
- Introduce genuine randomness: even ideal conditions should sometimes produce a surprising score in either direction
- Be cheeky — if someone says they feel "sharp and ready" sometimes the golf gods have other plans. Say so.
- Do NOT default to a middle-of-the-road score just because the inputs are average. Commit to a number.

◆ SPECIFICITY RULES
- Reference their actual handicap range in the reading
- Reference the weather conditions specifically — don't ignore a bad weather day
- Name specific parts of the game that will be affected today: driving accuracy, approach shots, putting stroke
- Name specific on-course situations: "the par 3s today", "keeping it in play off the tee", "lag putting under pressure"
- Time windows: "early holes", "the turn", "the back nine", "the closing stretch"

◆ AREAS — score these 1–100 (higher = better performance in that area today)
- Driving: off-the-tee performance today
- Iron Play: approach shot quality today
- Short Game: chipping and pitching around the green
- Putting: stroke quality and pace today

◆ LANGUAGE INSTRUCTION
Write your entire response in English.

OUTPUT — Return ONLY valid JSON with this exact schema:

{
  "overall": {
    "score": (integer between 63 and 95 — the predicted round score),
    "message": "One sharp sentence summing up the kind of round today looks like",
    "detail": "Two paragraphs. First: what kind of round today is shaping up to be — reference handicap, form, and weather specifically. Second: where to focus and what to protect against on the course today. Total 6–9 sentences."
  },
  "areas": [
    { "name": "Driving", "score": (1–100), "insight": "One specific sentence about their tee shot today — accuracy, distance, tendency" },
    { "name": "Iron Play", "score": (1–100), "insight": "One specific sentence about approach shots — how clean the strike is likely to be" },
    { "name": "Short Game", "score": (1–100), "insight": "One specific sentence about chipping and pitching around the green today" },
    { "name": "Putting", "score": (1–100), "insight": "One specific sentence about the putter — whether they'll hole the makeable ones today" }
  ],
  "caution": "One specific on-course warning today — a hole type, a situation, or a mental trap to watch for",
  "opportunity": "One specific scoring opportunity today — where the round can be saved or a birdie made",
  "lucky": { "color": "a specific color", "number": (integer 1–18 — the lucky hole number today), "time": "best window of the round (e.g. front nine, back nine, after the turn)" },
  "personalised_insight": "2–3 sentences connecting their handicap, form, mental state, and zodiac to a specific pattern in their game today"
}

Do not include any fields beyond those listed. Do not add explanatory text outside the JSON.`,
  quiz: [
    {
      id: 'handicap',
      q: "What's your handicap?",
      options: [
        { value: 'Scratch or better', emoji: '🏆', description: '0 or plus handicap' },
        { value: '1–9', emoji: '🎯', description: 'Low single figures' },
        { value: '10–18', emoji: '⛳', description: 'Mid handicap' },
        { value: '19–28', emoji: '🏌️', description: 'Higher handicap' },
        { value: '29 or above', emoji: '🌱', description: 'Just enjoying the game' },
      ],
    },
    {
      id: 'weather',
      q: "What's the weather like today?",
      options: [
        { value: 'Perfect & sunny', emoji: '☀️', description: 'Calm, clear, ideal conditions' },
        { value: 'Mild & overcast', emoji: '⛅', description: 'Soft light, no wind' },
        { value: 'Windy', emoji: '💨', description: 'Wind is a factor today' },
        { value: 'Rainy', emoji: '🌧️', description: 'Wet or damp conditions' },
        { value: 'Cold & tough', emoji: '🥶', description: 'Hard to swing freely' },
      ],
    },
    {
      id: 'recentForm',
      q: "How's your form been recently?",
      options: [
        { value: 'Striking it really well', emoji: '🔥', description: 'Ball-striking is sharp right now' },
        { value: 'Pretty solid', emoji: '👍', description: 'Decent form, no major issues' },
        { value: 'Hit and miss', emoji: '🎲', description: 'Some good, some bad holes' },
        { value: 'A bit rusty', emoji: '🔧', description: "Haven't played much lately" },
        { value: "Been a while", emoji: '💤', description: 'Not played in weeks' },
      ],
    },
    {
      id: 'mentalState',
      q: 'How do you feel heading into the round?',
      options: [
        { value: 'Sharp & ready', emoji: '⚡', description: 'Mentally locked in' },
        { value: 'Feeling confident', emoji: '😎', description: 'Relaxed and positive' },
        { value: 'A little nervous', emoji: '😬', description: 'First-tee jitters' },
        { value: 'A bit tired', emoji: '😴', description: 'Not fully switched on' },
        { value: 'Just here for the walk', emoji: '🚶', description: 'Low expectations today' },
      ],
    },
  ],
};
