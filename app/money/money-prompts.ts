import { type FortuneConfig } from '@/lib/types';

export const money: FortuneConfig = {
  label: {
    name: 'Money Fortune',
    emoji: '💰',
    description: 'Financial stability, income, and wealth',
  },
  guidance: `
You are a sharp, honest daily money fortune reader — like a financially savvy friend who tells you the truth.
Your readings name real financial situations and psychology, not generic "be mindful of spending" advice.

◆ VOICE
- Straight-talking, warm, and specific
- You understand how emotion drives money decisions
- Practical over mystical — every insight should be actionable today

◆ SPECIFICITY RULES (non-negotiable)
- Name concrete situations from their quiz answers: what they're tempted to buy, their spending trigger, their money anxiety level
- Name time windows: "today before checkout", "this weekend", "before end of month"
- Name real psychological moments: "the internal debate right before tapping your card", "opening your banking app and looking away"
- No vague wealth language: never "abundance mindset", "financial energy", "manifest prosperity"
- Every sentence should describe something they will recognize from their own money life

◆ LANGUAGE INSTRUCTION
Write your entire response in the language selected by the user in the quiz.

OUTPUT — Return ONLY valid JSON with this exact schema:

{
  "overall": {
    "score": (number 1-100),
    "message": "One honest sentence naming the financial theme today — what to lean into or watch",
    "detail": "Two paragraphs. First: the specific money dynamic in play today based on their quiz answers — name the purchase temptation, the anxiety pattern, the saving habit. Second: concrete guidance — what to do, what to delay, what mindset shift is useful right now. Total 6-9 sentences."
  },
  "areas": [
    { "name": "Cash Flow", "score": (number 1-100), "insight": "One specific sentence about their money coming in versus going out today or this week" },
    { "name": "Spending", "score": (number 1-100), "insight": "One specific sentence about their spending impulses or discipline today — name the specific temptation from their quiz" },
    { "name": "Opportunity", "score": (number 1-100), "insight": "One specific sentence about a financial opening or smart move available today" },
    { "name": "Risk", "score": (number 1-100), "insight": "One specific sentence about a financial pitfall or impulse to watch today" }
  ],
  "caution": "One specific financial warning today — name the exact situation from their quiz answers",
  "opportunity": "One concrete money move or decision they should make today — name it specifically",
  "lucky": { "color": "a specific color name", "number": (integer 1-99), "time": "a specific time of day" },
  "personalised_insight": "2-3 sentences connecting their quiz answers (spending habits, triggers, anxiety level) to a specific financial pattern relevant today"
}

Do not include any fields beyond those listed. Do not add explanatory text outside the JSON.`,

  quiz: [
    {
      id: 'plannedPurchase',
      q: 'Are you planning to buy something right now?',
      options: [
        {
          value: 'Yes, this week',
          emoji: '🛒',
          description: 'I have something specific in mind to buy soon',
        },
        {
          value: 'Yes, this month',
          emoji: '📅',
          description: 'Planning a purchase but not urgently',
        },
        {
          value: 'Maybe, browsing',
          emoji: '👀',
          description: 'Looking around but not committed',
        },
        {
          value: 'No, not at the moment',
          emoji: '🚫',
          description: 'Not planning any purchases right now',
        },
        {
          value: 'Trying not to',
          emoji: '🤐',
          description: 'Want to buy things but restraining myself',
        },
      ],
    },
    {
      id: 'whatToBuy',
      q: 'What are you most tempted to spend money on lately?',
      options: [
        {
          value: 'New phone/laptop',
          emoji: '📱',
          description: "Tech upgrade that I probably don't need yet",
        },
        {
          value: 'Clothes/shoes',
          emoji: '👗',
          description: 'Fashion items for my wardrobe',
        },
        {
          value: 'Food/dining out',
          emoji: '🍕',
          description: 'Restaurants, takeout, or fancy groceries',
        },
        {
          value: 'Hobbies/entertainment',
          emoji: '🎮',
          description: 'Games, books, streaming services, or hobby gear',
        },
        {
          value: 'Home stuff',
          emoji: '🏠',
          description: 'Furniture, decorations, or household items',
        },
        {
          value: 'Beauty/self-care',
          emoji: '💄',
          description: 'Skincare, makeup, or wellness products',
        },
      ],
    },
    {
      id: 'needVsWant',
      q: 'Be honest - do you actually NEED the thing you want to buy?',
      options: [
        {
          value: 'Definitely need it',
          emoji: '✅',
          description: "It's actually necessary and I can justify it",
        },
        {
          value: 'Probably need it',
          emoji: '🤔',
          description: "I can convince myself it's necessary",
        },
        {
          value: 'Want it badly',
          emoji: '😍',
          description: "I just really want it even if I don't need it",
        },
        {
          value: "It's complicated",
          emoji: '🤷',
          description: 'The line between want and need is blurry',
        },
        {
          value: 'Total want',
          emoji: '🛍️',
          description: "It's pure desire, not necessity",
        },
      ],
    },
    {
      id: 'spendingTrigger',
      q: 'What usually makes you spend money impulsively?',
      options: [
        {
          value: 'Feeling stressed',
          emoji: '😵',
          description: 'Shopping helps me feel better temporarily',
        },
        {
          value: 'Seeing a good deal',
          emoji: '🏷️',
          description: 'Sales and discounts are hard to resist',
        },
        {
          value: 'Genuinely need it',
          emoji: '🤔',
          description:
            'I genuinely need it and having been thinking to purchase it for a while',
        },
        {
          value: 'Social pressure',
          emoji: '👥',
          description: 'Friends buying things or social media influence',
        },
        {
          value: 'Celebrating something',
          emoji: '🎉',
          description: 'Rewarding myself for accomplishments',
        },
        {
          value: 'Just because',
          emoji: '🤪',
          description: 'Sometimes I buy things for no real reason',
        },
      ],
    },
    {
      id: 'moneyAnxiety',
      q: 'How do you feel about your current money situation?',
      options: [
        {
          value: 'Pretty comfortable',
          emoji: '😌',
          description: 'I can buy most things I want without worry',
        },
        {
          value: 'Tight but manageable',
          emoji: '😅',
          description: "I have to be careful but I'm okay",
        },
        {
          value: 'Constantly worried',
          emoji: '😰',
          description: 'Money stress affects my daily decisions',
        },
        {
          value: 'Unpredictable',
          emoji: '🎢',
          description: 'Sometimes flush, sometimes broke',
        },
        {
          value: 'Avoiding thinking about it',
          emoji: '🙈',
          description: 'I prefer not to look at my bank account',
        },
      ],
    },
    {
      id: 'savingHabits',
      q: 'What happens to your money between paychecks?',
      options: [
        {
          value: 'Save first, spend later',
          emoji: '🏦',
          description: 'I put money aside before I can spend it',
        },
        {
          value: 'Spend first, save leftover',
          emoji: '💸',
          description: 'I save whatever is left at the end',
        },
        {
          value: 'Spend it all',
          emoji: '🎯',
          description: 'Money comes and goes, nothing left over',
        },
        {
          value: 'Emergency savings only',
          emoji: '🚨',
          description: 'I only save for unexpected expenses',
        },
        {
          value: 'What savings?',
          emoji: '🤷',
          description: 'I live paycheck to paycheck',
        },
      ],
    },
    {
      id: 'purchaseRegret',
      q: 'How often do you regret buying something?',
      options: [
        {
          value: 'Rarely regret',
          emoji: '👍',
          description: 'I usually make good purchasing decisions',
        },
        {
          value: 'Sometimes regret',
          emoji: '😬',
          description: "Occasionally buyer's remorse kicks in",
        },
        {
          value: 'Often regret',
          emoji: '🤦',
          description: "I frequently wish I hadn't bought things",
        },
        {
          value: 'Always second-guess',
          emoji: '🔄',
          description: 'I question every purchase after I make it',
        },
        {
          value: 'Immediate regret',
          emoji: '😱',
          description: 'I often regret purchases right after buying',
        },
      ],
    },
    {
      id: 'moneyAdvice',
      q: 'What money advice do you need to hear right now?',
      options: [
        {
          value: 'Just buy it',
          emoji: '🛒',
          description: 'Stop overthinking and treat yourself',
        },
        {
          value: 'Sleep on it',
          emoji: '😴',
          description: 'Wait before making any big purchases',
        },
        {
          value: 'Make more money',
          emoji: '💪',
          description:
            'Focus on increasing income instead of restricting spending',
        },
        {
          value: 'Track your spending',
          emoji: '📊',
          description: 'Actually know where your money goes',
        },
        {
          value: "You're doing fine",
          emoji: '👌',
          description: 'Stop stressing about money so much',
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
      ],
    },
  ],
};
