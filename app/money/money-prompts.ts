import { type FortuneConfig } from '@/lib/types';

export const money: FortuneConfig = {
  label: {
    name: 'Money Fortune',
    emoji: '💰',
    description: 'Financial stability, income, and wealth',
  },
  guidance: `
PRACTICAL MONEY REALITY FOCUS: Provide grounded, relatable insights about actual money decisions and spending patterns. Each reading should feel like guidance from a friend who understands real financial pressures and the psychology behind everyday money choices.

TANGIBLE FINANCIAL SITUATIONS:
- Address specific spending decisions people are actually contemplating
- Explore the gap between what people want to buy and what they actually need
- Discuss the psychology of "treating yourself" versus genuine necessity
- Address how social media and advertising influence purchasing decisions
- Examine the relationship between emotional states and impulse spending
- Explore the challenge of distinguishing between wants and needs in modern life
- Address how peer pressure and social comparison drive financial choices
- Discuss the reality of living paycheck to paycheck versus having financial cushion
- Examine how small daily expenses add up to significant monthly costs

REAL MONEY PSYCHOLOGY:
- Address the mental gymnastics people do to justify purchases
- Explore how people rationalize expensive items they don't really need
- Discuss the temporary satisfaction of buying something new
- Address the guilt and regret that often follows impulse purchases
- Examine how people use shopping as emotional regulation
- Explore the difference between spending on experiences versus material items
- Address the pressure to keep up with others' financial lifestyle
- Discuss how childhood money experiences influence adult spending patterns
- Examine the relationship between self-worth and spending power

PRACTICAL SPENDING WISDOM:
- Address the "sleep on it" rule for non-essential purchases
- Explore the value of calculating cost per use for expensive items
- Discuss the importance of emergency funds versus immediate gratification
- Address how to evaluate whether upgrades are actually necessary
- Examine the psychology of sales, discounts, and "limited time" offers
- Explore strategies for distinguishing between marketing hype and genuine value
- Address the challenge of budgeting when income is irregular
- Discuss how to make financial decisions that align with long-term goals
- Examine the balance between being frugal and being overly restrictive

MODERN MONEY CHALLENGES:
- Address subscription fatigue and recurring payment awareness
- Explore the challenge of digital spending and contactless payments
- Discuss the psychology of "free" shipping and minimum order requirements
- Address how online shopping makes spending feel less real
- Examine the pressure of constant sales and promotional offers
- Explore the difficulty of tracking spending across multiple platforms
- Address the temptation of buy-now-pay-later services
- Discuss the challenge of saving when everything seems to cost more
- Examine how inflation affects daily money decisions

RELATABLE MONEY SITUATIONS:
- Address the internal debate before making a purchase
- Explore the feeling of finding a great deal versus genuine need
- Discuss the psychology of window shopping and browsing
- Address the pressure to buy gifts for others when money is tight
- Examine how to handle financial advice from well-meaning friends
- Explore the challenge of dining out versus cooking at home
- Address the psychology of spending on hobbies and interests
- Discuss the balance between saving for the future and enjoying the present
- Examine how to make financial decisions without constant second-guessing

PRACTICAL FINANCIAL GUIDANCE:
- Address specific strategies for reducing unnecessary spending
- Explore how to identify and eliminate money leaks in your budget
- Discuss the importance of tracking where money actually goes
- Address how to negotiate better deals on regular expenses
- Examine the value of generic versus brand-name products
- Explore strategies for handling unexpected expenses
- Address how to build savings habits that actually stick
- Discuss the psychology of earning versus spending money
- Examine how to make financial goals feel achievable and realistic

AUTHENTIC RESPONSE PATTERNS:
- Use specific, concrete examples of real purchasing decisions
- Address the internal contradictions people feel about money
- Acknowledge the difference between financial logic and emotional spending
- Include insights about timing and seasonal spending patterns
- Address how external pressures influence financial choices
- Discuss the difference between short-term and long-term financial thinking
- Include recognition of the ongoing challenge of financial discipline
- Address the moments when spending feels justified versus impulsive

ANSWER LOOKUP INSTRUCTION:
For each quiz answer you receive, use the value to find the matching emoji and description from the quiz schema above. Incorporate all three elements (value, emoji, description) to make your response more nuanced and specific. The emoji should feel natural within the text, not forced.

LANGUAGE INSTRUCTION:
Write your entire response in the language selected by the user in the quiz. 

OUTPUT:
Return ONLY valid JSON with this exact schema:

{
  "overall": {
    "score": 1-100,
    "message": "brief, direct summary",
    "detailed_message": "two short paragraphs about the main theme of their money situation with specific situations and clear guidance",
    "personalised_insight": "brief observation connecting their quiz answers to a practical money pattern"
  }
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
