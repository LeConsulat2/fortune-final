// app/api/fortune/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { getFortuneConfig } from '@/lib/fortune-config';
import { type UserMemory } from '@/lib/common-constants';
// Enable edge runtime for better performance
export const runtime = 'edge';
// Initialize OpenAI client with API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
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
  prompt += '\\n\\n--- User Information ---\\n';
  prompt += `Name: ${userMemory.name || 'Not provided'}\\n`;
  prompt += `Birth Date: ${userMemory.birthDate || 'Not provided'}\\n`;
  prompt += `Occupation: ${userMemory.occupation || 'Not provided'}\\n`;
  prompt += `Zodiac Sign: ${userMemory.zodiacSign || 'Not provided'}\\n`;
  // Add quiz answers if they exist
  if (
    userMemory.quizAnswers &&
    Object.keys(userMemory.quizAnswers).length > 0
  ) {
    prompt += '\\n--- Quiz Answers ---\\n';
    // Iterate through quiz answers and add them to the prompt
    for (const [questionId, answer] of Object.entries(userMemory.quizAnswers)) {
      prompt += `${questionId}: ${answer}\\n`;
    }
  }
  return prompt;
}
/**
 * POST handler for generating personalized fortunes
 * Accepts user memory data and returns a streamed fortune response
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
    // Create OpenAI chat completion with streaming enabled
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      stream: false, // No streaming
      response_format: { type: 'json_object' },
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'user',
          content:
            'Based on my information, generate my fortune for today. Ensure you follow the system instructions precisely.',
        },
      ],
    });
    const content = response.choices[0].message.content;
    if (!content) {
      return NextResponse.json(
        { error: 'No content received from AI.' },
        { status: 500 },
      );
    }
    const fortuneData = JSON.parse(content);
    return NextResponse.json(fortuneData);
  } catch (error) {
    console.error('Error in fortune API:', error);
    // Handle OpenAI-specific errors
    if (error instanceof OpenAI.APIError) {
      return NextResponse.json(
        { error: error.message, name: error.name },
        { status: error.status || 500 },
      );
    }
    // Handle general JavaScript errors
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
