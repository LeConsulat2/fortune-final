import { FortuneCategory } from '@/lib/zodiac-sign-label';
import { NextResponse, NextRequest } from 'next/server';

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

export async function Post(request: Request) {
  const { messages, personalInfo } = await request.json();
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (!OPENAI_API_KEY) {
    return NextResponse.json(
      {
        error:
          'Sorry Our Fortune Service is currently down, please try again later',
      },
      { status: 500 },
    );
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: messages,
      temperature: 0.8,
      max_tokens: 2000,
      response_format: { type: 'json_object' },
    }),
  });

  if (!response.ok) {
    throw new Error(`Fortune API Error: ${response.status}`);
  }

  const data: OpenAIResponse = await response.json();
  const content = data.choices[0]?.message?.content;
  if (!content) {
    throw new Error('No Contents have been generated');
  }

  const parsed = JSON.parse(content) as AIFortuneResponse;

  if (!parsed.overall || !parsed.categories) {
    throw new Error('Invalid Response Format was received');
    // TODO: Make a sophisitacted Error message and UI
  }

  return NextResponse.json(parsed);
}
