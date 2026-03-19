// app/api/fortune/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { getFortuneConfig } from '@/lib/fortune-config';
import { type UserMemory } from '@/lib/common-constants';

export const runtime = 'edge';

// ---------------------------------------------------------------------------
// Model selection
// Set USE_GPT=false in .env.local to fall back to Gemini
// Default: GPT (gpt-4.1-nano)
// ---------------------------------------------------------------------------
const USE_GPT = process.env.USE_GPT !== 'false';

const openai = USE_GPT
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY ?? '',
    })
  : new OpenAI({
      apiKey: process.env.GEMINI_API_KEY ?? '',
      baseURL: 'https://generativelanguage.googleapis.com/v1beta/openai/',
    });

const MODEL = USE_GPT ? 'gpt-5-nano' : 'gemini-2.5-flash-lite';

function buildSystemPrompt(guidance: string, userMemory: UserMemory): string {
  let prompt = guidance;
  prompt += '\\n\\n--- User Information ---\\n';
  prompt += `Name: ${userMemory.name || 'Not provided'}\\n`;
  prompt += `Birth Date: ${userMemory.birthDate || 'Not provided'}\\n`;
  prompt += `Occupation: ${userMemory.occupation || 'Not provided'}\\n`;
  prompt += `Zodiac Sign: ${userMemory.zodiacSign || 'Not provided'}\\n`;
  if (
    userMemory.quizAnswers &&
    Object.keys(userMemory.quizAnswers).length > 0
  ) {
    prompt += '\\n--- Quiz Answers ---\\n';
    for (const [questionId, answer] of Object.entries(userMemory.quizAnswers)) {
      prompt += `${questionId}: ${answer}\\n`;
    }
  }
  return prompt;
}

export async function POST(req: NextRequest) {
  try {
    const userMemory: UserMemory = await req.json();
    const category = userMemory.category || 'general';
    const config = getFortuneConfig(category);

    if (!config) {
      return NextResponse.json(
        { error: `Invalid category: ${category}` },
        { status: 400 },
      );
    }

    const systemPrompt = buildSystemPrompt(config.guidance, userMemory);

    const messages = [
      {
        role: 'system' as const,
        content: systemPrompt,
      },
      {
        role: 'user' as const,
        content: `Based on my information, generate my fortune for today (${new Date().toISOString().split('T')[0]}). Internal variance seed: ${Math.floor(Math.random() * 10) + 1} out of 10 — use this to genuinely shift the fortune's tone and outcome. A low seed means things go sideways despite good conditions; a high seed means surprising upside despite bad ones. Do not mention this seed or any numeric rating in the reading text. Ensure you follow the system instructions precisely.`,
      },
    ];

    // 2 attempts — retry once on 429
    let response;
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        response = await openai.chat.completions.create({
          model: MODEL,
          stream: false,
          response_format: { type: 'json_object' },
          messages,
          max_completion_tokens: 10000,
        });
        break;
      } catch (err: unknown) {
        const status = (err as { status?: number }).status;
        if (status === 429 && attempt < 1) {
          await new Promise((r) => setTimeout(r, 5000));
          continue;
        }
        throw err;
      }
    }

    const content = response!.choices[0].message.content;
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
    if (error instanceof OpenAI.APIError) {
      return NextResponse.json(
        { error: error.message, name: error.name },
        { status: error.status || 500 },
      );
    }
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 },
    );
  }
}
