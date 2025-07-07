import { NextResponse } from 'next/server';
import { general } from '@/app/general/general-prompts';
import { UserMemory } from '@/lib/common-constants';

export async function POST(request: Request) {
  // Declare userMemory outside the try block so it's accessible in catch
  let userMemory: UserMemory | null = null;

  try {
    const body = await request.json();
    userMemory = body; // Assign the value here
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

    console.log('=== DEBUG INFO ===');
    console.log('API Key exists:', !!OPENAI_API_KEY);
    console.log('API Key starts with sk-:', OPENAI_API_KEY?.startsWith('sk-'));
    console.log('User memory received:', JSON.stringify(userMemory, null, 2));

    // Return fallback immediately for testing
    if (!OPENAI_API_KEY || !OPENAI_API_KEY.startsWith('sk-')) {
      console.log('API key issue detected, returning fallback');
      const fallbackFortune = {
        overall: {
          score: 8,
          message: 'A day of steady progress and hidden opportunities',
          detailed_message: `Hello ${userMemory?.name}! Today brings a blend of familiar routines and unexpected possibilities. The morning hours favor careful planning, while afternoon presents chances to connect with others in meaningful ways. Your natural instincts will guide you toward the right choices, but remember that patience often yields better results than rushing. Take time to appreciate small victories and trust that your consistent efforts are building toward something significant.`,
          personalised_insight: userMemory?.occupation
            ? `Your role as ${userMemory?.occupation} gives you unique insight into timing - use this skill in all areas of life today.`
            : 'Your professional experience has taught you to balance ambition with wisdom - apply this lesson beyond work today.',
        },
      };
      return NextResponse.json(fallbackFortune);
    }

    // Validate the user data
    if (!userMemory || !userMemory.name || !userMemory.birthDate) {
      console.error('Missing required user information:', userMemory);
      return NextResponse.json(
        { error: 'Missing required user information' },
        { status: 400 },
      );
    }

    // Test OpenAI API connection first
    console.log('Testing OpenAI API connection...');

    try {
      const testResponse = await fetch('https://api.openai.com/v1/models', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('Models API Response Status:', testResponse.status);
      console.log(
        'Models API Response Headers:',
        Object.fromEntries(testResponse.headers.entries()),
      );

      const testResponseText = await testResponse.text();
      console.log(
        'Models API Response (first 200 chars):',
        testResponseText.substring(0, 200),
      );

      if (!testResponse.ok) {
        console.error('OpenAI API authentication failed');
        // Return fallback on auth failure
        const fallbackFortune = {
          overall: {
            score: 7,
            message: 'A day of steady progress and hidden opportunities',
            detailed_message: `Hello ${userMemory.name}! Today brings a blend of familiar routines and unexpected possibilities. The morning hours favor careful planning, while afternoon presents chances to connect with others in meaningful ways. Your natural instincts will guide you toward the right choices, but remember that patience often yields better results than rushing. Take time to appreciate small victories and trust that your consistent efforts are building toward something significant.`,
            personalised_insight: userMemory.occupation
              ? `Your role as ${userMemory.occupation} gives you unique insight into timing - use this skill in all areas of life today.`
              : 'Your professional experience has taught you to balance ambition with wisdom - apply this lesson beyond work today.',
          },
        };
        return NextResponse.json(fallbackFortune);
      }

      console.log(
        'OpenAI API authentication successful, proceeding with fortune generation...',
      );
    } catch (testError) {
      console.error('Failed to test OpenAI API:', testError);
      // Return fallback on network error
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

    // Create the system prompt from the general-prompts.ts guidance
    const systemPrompt = general.guidance;

    // Create a user prompt with the user's information
    const userPrompt = `Generate a daily fortune for this person:
    
Name: ${userMemory.name}
Gender: ${userMemory.gender || 'not specified'}
Zodiac Sign: ${userMemory.zodiacSign || 'not specified'}
Birth Date: ${userMemory.birthDate}
Job Title: ${userMemory.occupation || 'not specified'}

Please follow the guidance exactly and return only the JSON with the object containing score, message, detailed_message, and personalised_insight fields.`;

    console.log('Making fortune generation request to OpenAI...');

    // Call OpenAI API for fortune generation
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
          { role: 'user', content: userPrompt },
        ],
        temperature: 0.7,
        max_tokens: 1000,
        response_format: { type: 'json_object' },
      }),
    });

    console.log('Fortune Generation Response Status:', response.status);
    console.log(
      'Fortune Generation Response Headers:',
      Object.fromEntries(response.headers.entries()),
    );

    // Get the raw response text first
    const responseText = await response.text();
    console.log(
      'Raw Fortune Response (first 500 chars):',
      responseText.substring(0, 500),
    );

    if (!response.ok) {
      console.error('OpenAI fortune generation failed:', responseText);
      // Return fallback on generation failure
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

    // Try to parse the successful response
    try {
      const data = JSON.parse(responseText);

      if (data.error) {
        console.error('OpenAI API returned error in response:', data.error);
        // Return fallback on API error
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

      const content = data.choices[0]?.message?.content;

      if (!content) {
        console.error('No content in OpenAI response:', data);
        // Return fallback on no content
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
    } catch (jsonParseError) {
      console.error('Failed to parse OpenAI response as JSON:', jsonParseError);
      console.error('Response text:', responseText);
      // Return fallback on JSON parse error
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
    console.error('Unexpected error in fortune generation:', error);

    // Fallback fortune generation matching the expected schema
    // Now userMemory is accessible here since it's declared outside the try block
    const fallbackFortune = {
      overall: {
        score: 8,
        message: 'A day of steady progress and hidden opportunities',
        detailed_message: `Hello ${
          userMemory?.name || 'friend'
        }! Today brings a blend of familiar routines and unexpected possibilities. The morning hours favor careful planning, while afternoon presents chances to connect with others in meaningful ways. Your natural instincts will guide you toward the right choices, but remember that patience often yields better results than rushing. Take time to appreciate small victories and trust that your consistent efforts are building toward something significant.`,
        personalised_insight: userMemory?.occupation
          ? `Your role as ${userMemory.occupation} gives you unique insight into timing - use this skill in all areas of life today.`
          : 'Your professional experience has taught you to balance ambition with wisdom - apply this lesson beyond work today.',
      },
    };

    console.log('Returning fallback fortune due to error');
    return NextResponse.json(fallbackFortune);
  }
}
