import type { PersonalInfo, DailyFortune, FortuneCategory } from '../schema';
import { zodiacSignLabels } from '../schema';

interface OpenAIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface OpenAIResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

interface AIFortuneResponse {
  overall: {
    score: number;
    message: string;
    detailed_message: string;
    personal_insight: string;
  };
  categories: Record<
    FortuneCategory,
    {
      score: number;
      message: string;
      detailed_message: string;
      advice: string;
    }
  >;
}

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

function createFortunePrompt(
  personalInfo: PersonalInfo,
  date: string,
): OpenAIMessage[] {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return [
    {
      role: 'system',
      content: `You are a master fortune reader with deep understanding of life's subtle currents and human nature. Your readings combine ancient wisdom with modern psychological insights to provide meaningful guidance that resonates on multiple levels.

WRITING STYLE REQUIREMENTS:
- Write with sophisticated, nuanced language that acknowledges human complexity
- Use flowing, contemplative sentences that feel like wise observations
- Include psychological depth and emotional intelligence in every reading
- Acknowledge contradictions and mixed feelings naturally ("You may not feel inclined to... but...")
- Balance optimism with realistic human psychology and natural resistance
- Use specific, vivid scenarios that readers can immediately visualize
- Connect immediate actions to deeper meaning and long-term character development
- Make predictions feel like natural consequences of human behavior, not mystical pronouncements
- Include subtle internal conflicts and the wisdom to navigate them

CONTENT PHILOSOPHY:
- Draw from universal human experiences: cycles of growth, relationship dynamics, professional challenges, inner wisdom
- Focus on the interplay between internal states and external circumstances
- Acknowledge both light and shadow aspects of each day
- Provide actionable wisdom that feels both practical and spiritually meaningful
- Consider how different life aspects influence each other holistically
- Use their personal details to create genuine resonance without being obvious

FORTUNE STRUCTURE:
- Each detailed_message should be 5-7 sophisticated sentences with rich psychological depth
- Begin with a specific emotional or situational observation
- Include very specific scenarios readers can immediately relate to and visualize
- Acknowledge natural human resistance or mixed feelings about situations
- Show how seemingly small actions connect to larger character development
- Address the psychology behind behaviors and decisions
- End with wisdom that feels both immediately practical and profoundly meaningful
- Use specific details like "looking through old photos," "reaching for a pen that isn't there," "volunteering for tasks others avoid"

AUTHENTICITY MARKERS:
- Mix scores realistically (not all high or low)
- Include subtle contradictions that reflect life's complexity
- Balance optimism with realism
- Make challenges feel surmountable rather than threatening
- Ensure each category feels interconnected with others

RESPONSE FORMAT: Return ONLY a valid JSON object with this exact structure:
{
  "overall": {
    "score": 1-10,
    "message": "elegant brief summary",
    "detailed_message": "4-6 sophisticated sentences weaving together the day's primary themes, challenges, and opportunities with poetic yet practical language",
    "personal_insight": "profound observation connecting their name, age, and profession to deeper life patterns"
  },
  "categories": {
    "overall": {
      "score": 1-10, 
      "message": "refined energy description", 
      "detailed_message": "sophisticated analysis of the day's overarching currents, how various life aspects will interact, and the deeper meaning behind surface events", 
      "advice": "wise, actionable guidance that feels both practical and spiritually grounded"
    },
    "love": {
      "score": 1-10, 
      "message": "romantic energy essence", 
      "detailed_message": "deeply nuanced exploration of relationship dynamics with specific emotional scenarios - acknowledge natural human contradictions like feeling overwhelmed by love yet craving more connection, include vivid details like reviewing old photos or feeling every moment of affection intensely, address the psychology behind romantic behaviors", 
      "advice": "relationship wisdom that addresses both immediate emotional impulses and long-term relationship growth patterns"
    },
    "work": {
      "score": 1-10, 
      "message": "professional energy flow", 
      "detailed_message": "psychologically sophisticated analysis of workplace dynamics - include scenarios like being assigned mundane tasks when craving creativity, the internal resistance to helping others with undesirable work, but how these moments build character and reputation when approached with grace and maturity", 
      "advice": "strategic professional guidance that acknowledges natural human reluctance while showing the deeper value in challenging moments"
    },
    "money": {
      "score": 1-10, 
      "message": "financial energy climate", 
      "detailed_message": "psychologically nuanced exploration of relationship with money and perfectionism - address the tendency to over-prepare versus trusting that effort combined with fortune will suffice, the stress that comes from perfectionist tendencies, and the wisdom of recognizing current capabilities while remaining open to future growth", 
      "advice": "financial wisdom that addresses both practical money decisions and the psychological patterns that drive financial stress or success"
    },
    "wellBeing": {
      "score": 1-10, 
      "message": "wellness energy signature", 
      "detailed_message": "holistic examination connecting physical vitality to emotional states - address how weather changes affect mood and energy, the connection between psychological stress and digestive health, specific vulnerabilities like stomach/digestive issues during stressful periods, and how mental clarity affects physical preparation for daily tasks", 
      "advice": "health wisdom that connects emotional intelligence to physical well-being and includes very specific preventive care suggestions"
    }
  },
  "lucky_color": "sophisticated color name",
  "lucky_number": 1-99
}`,
    },
    {
      role: 'user',
      content: `Craft a profound daily fortune reading for:

PERSONAL DETAILS:
- Name: ${personalInfo.fullName}
- Gender: ${personalInfo.gender}
- Professional Role: ${personalInfo.jobTitle}
- Birth Date: ${personalInfo.birthDate}

READING DATE: ${formattedDate}

Create a reading that feels like it emerged from deep contemplation of this person's unique life patterns. Weave their personal details into observations about broader life currents. Use sophisticated language that conveys both ancient wisdom and contemporary insight. Make each prediction feel like a natural extension of universal principles rather than arbitrary fortune-telling. Balance encouragement with realistic acknowledgment of life's complexities. Let the reading feel like a conversation with a wise mentor who truly understands their journey.`,
    },
  ];
}

export async function generateAIFortune(
  personalInfo: PersonalInfo,
  date: string,
): Promise<AIFortuneResponse> {
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI API key not configured');
  }

  try {
    const messages = createFortunePrompt(personalInfo, date);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages,
        temperature: 0.8, // Add some creativity
        max_tokens: 1500,
        response_format: { type: 'json_object' },
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data: OpenAIResponse = await response.json();
    const content = data.choices[0]?.message?.content;

    if (!content) {
      throw new Error('No content received from OpenAI');
    }

    const parsed = JSON.parse(content) as AIFortuneResponse;

    // Validate the response structure
    if (!parsed.overall || !parsed.categories) {
      throw new Error('Invalid response structure from AI');
    }

    return parsed;
  } catch (error) {
    console.error('AI Fortune generation error:', error);
    throw error;
  }
}

// Fallback fortune generator (in case AI fails) DO NOT REALLY WANT TO USE THIS THOUGH
export function generateFallbackFortune(
  personalInfo: PersonalInfo,
): AIFortuneResponse {
  const baseScore = Math.floor(Math.random() * 10) + 1;

  return {
    overall: {
      score: baseScore,
      message: `Today brings a mix of opportunities and gentle challenges for you, ${personalInfo.fullName}. Your natural intuition is particularly strong.`,
      detailed_message: `Most situations will unfold according to your wishes today, but you should be cautious not to let inappropriate words or actions derail your progress. During the course of events, seemingly insignificant comments from you might cause others to question your role significantly. You could leave a negative impression on people around you. Wisdom is needed to assess situations carefully, and you should be thoughtful with every word and action, as this is a sensitive time.`,
      personal_insight: `Your creative energy and determination make you naturally equipped to handle whatever comes your way today. Trust your instincts and embrace the possibilities ahead.`,
    },
    categories: {
      overall: {
        score: baseScore,
        message:
          'The cosmic energy around you feels balanced and purposeful today.',
        detailed_message: `Most situations will unfold according to your wishes today, but you should be cautious not to let inappropriate words or actions derail your progress. During the course of events, seemingly insignificant comments from you might cause others to question your role significantly. Wisdom is needed to assess situations carefully, and you should be thoughtful with every word and action.`,
        advice: 'Trust your instincts and stay true to your authentic self.',
      },
      love: {
        score: Math.floor(Math.random() * 10) + 1,
        message: 'Your heart is open to meaningful connections today.',
        detailed_message: `You might feel some boredom with your partner today. This feeling stems from not yet fully understanding your partner's characteristics. Take time to remember the initial feelings you had when you first liked your partner. You'll be able to discover another charm in your partner that you hadn't noticed before. Also, try to appeal your own charm to your partner. Short periods of disconnection can actually strengthen long-term bonds when handled with wisdom.`,
        advice: 'Be genuine in your interactions and listen with empathy.',
      },
      work: {
        score: Math.floor(Math.random() * 10) + 1,
        message:
          'Professional opportunities may present themselves in unexpected ways.',
        detailed_message: `Today seems to offer you an opportunity to be recognized at work${
          personalInfo.jobTitle
            ? ` in your role as a ${personalInfo.jobTitle}`
            : ''
        }. Your job is progressing smoothly, and previous work will receive high evaluation, allowing you to be acknowledged for your contributions. If you're trying to increase your value at work, it looks like it will happen smoothly today. As long as you don't act excessively due to overwhelming joy, you can feel at ease.`,
        advice: 'Stay alert to new possibilities and trust your expertise.',
      },
      money: {
        score: Math.floor(Math.random() * 10) + 1,
        message: 'Your financial intuition is heightened today.',
        detailed_message: `How about approaching investments with a different method than before? You might need to consider whether you've been too rigid and only sticking to conventional approaches${
          personalInfo.jobTitle
            ? `. Your work as a ${personalInfo.jobTitle} might offer unique financial insights you haven't fully explored`
            : ''
        }. You need an attitude that broadens your perspective and encompasses the situation. Sticking to just one conviction isn't always the best method. Identify what you lack and open your eyes to new methods.`,
        advice: 'Make thoughtful decisions and avoid impulsive purchases.',
      },
      wellBeing: {
        score: Math.floor(Math.random() * 10) + 1,
        message: 'Your body and mind are seeking balance and harmony.',
        detailed_message: `You should be careful as you might experience anxiety or insomnia${
          personalInfo.jobTitle
            ? ` which might be influenced by your work as a ${personalInfo.jobTitle}`
            : ''
        }. When insomnia occurs, rather than depending on medication or alcohol, it would be better to get enough sunlight during the day or consume warm tea. Focus on natural remedies and maintaining a healthy daily routine to support your overall wellbeing. Consider how your work schedule affects your sleep patterns.`,
        advice: "Listen to your body's needs and prioritize self-care.",
      },
    },
  };
}
