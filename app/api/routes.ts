import { NextResponse } from 'next/server';
import { general } from '@/app/general/general-prompts';
import { UserMemory } from '@/lib/common-constants';

interface OpenAIResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const userMemory: UserMemory = body;
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

    if (!OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 },
      );
    }

    // Validate the user data
    if (!userMemory || !userMemory.name || !userMemory.birthDate) {
      return NextResponse.json(
        { error: 'Missing required user information' },
        { status: 400 },
      );
    }

    // Create the system prompt from the general-prompts.ts guidance
    const systemPrompt = general.guidance;

    // Create a user prompt with the user's information
    const userPrompt = JSON.stringify({
      name: userMemory.name,
      gender: userMemory.gender || 'not specified',
      zodiacSign: userMemory.zodiacSign || 'not specified',
      birthDate: userMemory.birthDate,
      jobTitle: userMemory.jobTitle || 'not specified',
    });

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: systemPrompt },
          {
            role: 'user',
            content: `Generate a daily fortune for this person: ${userPrompt}`,
          },
        ],
        temperature: 0.7,
        max_tokens: 1000,
        response_format: { type: 'json_object' },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to generate fortune' },
        { status: 500 },
      );
    }

    const data: OpenAIResponse = await response.json();
    const content = data.choices[0]?.message?.content;

    if (!content) {
      return NextResponse.json(
        { error: 'No fortune content generated' },
        { status: 500 },
      );
    }

    // Parse the JSON response from OpenAI
    try {
      const parsedFortune = JSON.parse(content);
      return NextResponse.json(parsedFortune);
    } catch (parseError) {
      console.error('Failed to parse OpenAI response:', parseError);
      return NextResponse.json(
        { error: 'Invalid fortune format received' },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error('Error generating fortune:', error);
    return NextResponse.json(
      { error: 'Failed to process fortune request' },
      { status: 500 },
    );
  }
}
