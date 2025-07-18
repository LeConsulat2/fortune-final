import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

import { getFortuneConfig } from '@/lib/fortune-config';
import { type UserMemory } from '@/lib/common-constants';

// Enable edge runtime for better performance
export const runtime = 'edge';

// Initialize Google AI client with API key from environment variables
const genAI = new GoogleGenAI({
  apiKey: process.env.GOOGLE_AI_API_KEY || '',
});

/**
 * Builds a comprehensive system prompt by combining guidance with user information
 * @param guidance - The base guidance/instructions for the AI
 * @param userMemory - User's personal information and quiz answers
 * @returns Complete system prompt string
 */
function buildSystemPrompt(guidance: string, userMemory: UserMemory): string {
  let prompt = guidance;

  // Add user's personal information to the prompt
  prompt += '\n\n--- User Information ---\n';
  prompt += `Name: ${userMemory.name || 'Not provided'}\n`;
  prompt += `Birth Date: ${userMemory.birthDate || 'Not provided'}\n`;
  prompt += `Occupation: ${userMemory.occupation || 'Not provided'}\n`;
  prompt += `Zodiac Sign: ${userMemory.zodiacSign || 'Not provided'}\n`;

  // Add quiz answers if they exist
  if (
    userMemory.quizAnswers &&
    Object.keys(userMemory.quizAnswers).length > 0
  ) {
    prompt += '\n--- Quiz Answers ---\n';
    // Iterate through quiz answers and add them to the prompt
    for (const [questionId, answer] of Object.entries(userMemory.quizAnswers)) {
      prompt += `${questionId}: ${answer}\n`;
    }
  }

  return prompt;
}

/**
 * POST handler for generating personalized fortunes
 * Accepts user memory data and returns a fortune response
 */
export async function POST(req: NextRequest) {
  try {
    // Parse user memory data from request body
    const userMemory: UserMemory = await req.json();

    // Default to 'general' category if none specified
    const category = userMemory.category || 'general';

    // Get configuration for the specified fortune category
    const config = getFortuneConfig(category);

    // Validate that the category exists
    if (!config) {
      return NextResponse.json(
        { error: `Invalid category: ${category}` },
        { status: 400 },
      );
    }

    // Build the complete system prompt with user information
    const systemPrompt = buildSystemPrompt(config.guidance, userMemory);

    // Create Gemini model instance (using Flash model for speed and cost-effectiveness)
    const result = await genAI.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: [
        {
          parts: [
            {
              text: `${systemPrompt}

Based on my information, generate my fortune for today. Ensure you follow the system instructions precisely and return ONLY valid JSON.`,
            },
          ],
        },
      ],
    });

    // Extract content from response
    const content = result.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!content) {
      return NextResponse.json(
        { error: 'No content received from AI.' },
        { status: 500 },
      );
    }

    // Parse the JSON response from Gemini
    try {
      const fortuneData = JSON.parse(content);
      return NextResponse.json(fortuneData);
    } catch (parseError) {
      console.error('Failed to parse Gemini response as JSON:', parseError);
      console.error('Content that failed to parse:', content);

      // Return fallback on parse error
      const fallbackFortune = {
        overall: {
          score: 8,
          message: 'A day of steady progress and hidden opportunities',
          detailed_message: `Hello ${userMemory.name}! Today brings a blend of familiar routines and unexpected possibilities. The morning hours favor careful planning, while afternoon presents chances to connect with others in meaningful ways. Your natural instincts will guide you toward the right choices, but remember that patience often yields better results than rushing. Take time to appreciate small victories and trust that your consistent efforts are building toward something significant.`,
          personalised_insight: userMemory.occupation
            ? `Your role as ${userMemory.occupation} gives you unique insight into timing - use this skill in all areas of life today.`
            : 'Your professional experience has taught you to balance ambition with wisdom - apply this lesson beyond work today.',
        },
      };
      return NextResponse.json(fallbackFortune);
    }
  } catch (error) {
    console.error('Error in fortune API:', error);

    // Handle Google AI-specific errors
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Handle unexpected errors
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 },
    );
  }
}
