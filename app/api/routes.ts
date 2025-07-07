import { NextResponse } from 'next/server';
import { general } from '@/app/general/general-prompts';
import { UserMemory } from '@/lib/common-constants';

interface OpenAIResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
  error?: {
    message: string;
    type: string;
    code: string;
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const userMemory: UserMemory = body;
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

    console.log('API Key present:', !!OPENAI_API_KEY);
    console.log('User memory:', userMemory);

    if (!OPENAI_API_KEY) {
      console.error('OpenAI API key not configured');
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 },
      );
    }

    // Validate the user data
    if (!userMemory || !userMemory.name || !userMemory.birthDate) {
      console.error('Missing required user information:', userMemory);
      return NextResponse.json(
        { error: 'Missing required user information' },
        { status: 400 },
      );
    }

    // Create the system prompt from the general-prompts.ts guidance
    const systemPrompt = general.guidance;

    // Create a user prompt with the user's information
    const userPrompt = `Generate a daily fortune for this person:
    
Name: ${userMemory.name}
Gender: ${userMemory.gender || 'not specified'}
Zodiac Sign: ${userMemory.zodiacSign || 'not specified'}
Birth Date: ${userMemory.birthDate}
Job Title: ${userMemory.jobTitle || 'not specified'}

Please follow the guidance exactly and return only the JSON with the "overall" object containing score, message, detailed_message, and personalised_insight fields.`;

    console.log('Making request to OpenAI API...');

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          {
            role: 'user',
            content: userPrompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 1000,
        response_format: { type: 'json_object' },
      }),
    });

    console.log('OpenAI API Response Status:', response.status);
    console.log(
      'OpenAI API Response Headers:',
      Object.fromEntries(response.headers.entries()),
    );

    // Get the raw response text first
    const responseText = await response.text();
    console.log('Raw OpenAI Response:', responseText.substring(0, 500) + '...');

    if (!response.ok) {
      console.error('OpenAI API error response:', responseText);

      // Try to parse as JSON to get error details
      try {
        const errorData = JSON.parse(responseText);
        console.error('OpenAI API error details:', errorData);
        return NextResponse.json(
          {
            error: `OpenAI API Error: ${
              errorData.error?.message || 'Unknown error'
            }`,
          },
          { status: response.status },
        );
      } catch (parseError) {
        console.error('Failed to parse error response as JSON:', parseError);
        return NextResponse.json(
          {
            error: `OpenAI API Error: ${
              response.status
            } - ${responseText.substring(0, 200)}`,
          },
          { status: response.status },
        );
      }
    }

    // Try to parse the successful response
    try {
      const data: OpenAIResponse = JSON.parse(responseText);

      if (data.error) {
        console.error('OpenAI API returned error in response:', data.error);
        return NextResponse.json(
          { error: `OpenAI Error: ${data.error.message}` },
          { status: 500 },
        );
      }

      const content = data.choices[0]?.message?.content;

      if (!content) {
        console.error('No content in OpenAI response:', data);
        return NextResponse.json(
          { error: 'No fortune content generated' },
          { status: 500 },
        );
      }

      console.log('OpenAI Content:', content);

      // Parse the JSON response from OpenAI
      try {
        const parsedFortune = JSON.parse(content);
        console.log('Parsed Fortune:', parsedFortune);
        return NextResponse.json(parsedFortune);
      } catch (parseError) {
        console.error(
          'Failed to parse OpenAI response content as JSON:',
          parseError,
        );
        console.error('Content that failed to parse:', content);
        return NextResponse.json(
          { error: 'Invalid fortune format received from OpenAI' },
          { status: 500 },
        );
      }
    } catch (jsonParseError) {
      console.error('Failed to parse OpenAI response as JSON:', jsonParseError);
      console.error('Response text:', responseText);
      return NextResponse.json(
        { error: 'Invalid JSON response from OpenAI API' },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error('Unexpected error in fortune generation:', error);

    // Fallback fortune generation matching the expected schema
    // const fallbackFortune = {
    //   overall: {
    //     score: Math.floor(Math.random() * 3) + 7, // 7-9 range
    //     message: 'A day of steady progress and hidden opportunities',
    //     detailed_message: `Hello ${userMemory?.name}! Today brings a blend of familiar routines and unexpected possibilities. The morning hours favor careful planning, while afternoon presents chances to connect with others in meaningful ways. Your natural instincts will guide you toward the right choices, but remember that patience often yields better results than rushing. Take time to appreciate small victories and trust that your consistent efforts are building toward something significant.`,
    //     personalised_insight: userMemory?.jobTitle
    //       ? `Your role as ${userMemory?.jobTitle} gives you unique insight into timing - use this skill in all areas of life today.`
    //       : 'Your professional experience has taught you to balance ambition with wisdom - apply this lesson beyond work today.',
    //   },
    // };

    // console.log('Returning fallback fortune due to error');
    // return NextResponse.json(fallbackFortune);
  }
}
