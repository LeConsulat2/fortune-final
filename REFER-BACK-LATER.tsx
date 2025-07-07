// // fortuneGenerator.ts - just for refenence no need
// import type { UserMemory, FortuneCategory } from '@/lib/types';

// interface OpenAIMessage {
//   role: 'system' | 'user' | 'assistant';
//   content: string;
// }

// interface OpenAIResponse {
//   choices: { message: { content: string } }[];
// }

// export interface AIFortuneResponse {
//   overall: {
//     // score: number;
//     message: string;
//     detailed_message: string;
//     personal_insight: string;
//   };
//   categories: Record<
//     FortuneCategory,
//     {
//       score: number;
//       message: string;
//       detailed_message: string;
//       advice: string;
//     }
//   >;
//   lucky_color: string;
//   lucky_number: number;
// }

// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// /* ------------------------------------------------------------------ */
// /*  Prompt builder                                                    */
// /* ------------------------------------------------------------------ */
// function createFortunePrompt(
//   personalInfo: PersonalInfo,
//   date: string,
// ): OpenAIMessage[] {
//   const formattedDate = new Date(date).toLocaleDateString('en-US', {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   });

//   return [
//     {
//       role: 'system',
//       content: `
// You are an experienced life-coach-style fortune writer.
// Your task is to deliver a daily reading that balances warmth, vivid storytelling, and concrete, real-world guidance.

// ◆ STYLE
// • Write in clear, friendly English.
// • Use expressive, cinematic phrasing when helpful:
//   – “A day that straddles danger and opportunity.”
//   – “One bold step could become a narrow escape.”
// • Two short paragraphs (6–10 sentences total) for the overall section.
// • One paragraph (3–6 sentences) for each category: love, work, money, wellBeing, overall.
// • Blend optimism with pragmatic warnings—highlight what happens if the reader overreaches (“If you try to seize every coin, you may drop the whole purse”).
// • Avoid repeating the same word in consecutive sentences.
// • One or two tasteful emoji are allowed, never more (e.g. 🚀, 🌙).

// ◆ CONTENT
// • Weave in “risk vs. reward” tension: near-misses, last-minute chances, moments where restraint pays off.
// • Use concrete daily scenes: deadlines, unexpected calls, spur-of-the-moment invitations, tempting purchases.
// • Acknowledge natural emotions (greed, fear of missing out, relief) and provide step-by-step actions to channel them productively.
// • Offer timing cues when useful (“Late afternoon is the pivot point…”).
// • Avoid mystical jargon; keep advice grounded and specific.
// • If job title is omitted, create workplace scenarios that apply broadly (team dynamics, shifting priorities, recognition).
// • If gender is omitted, use inclusive language.
// OUTPUT:
// Return ONLY valid JSON with this exact schema:

// {
//   "overall": {
//     "score": 1-10,
//     "message": "brief, direct summary",
//     "detailed_message": "two short paragraphs about the main theme of their day with specific situations and clear advice, ending with ※ For entertainment purposes only.",
//     "personal_insight": "brief observation connecting their profession to a practical life pattern"
//   },
//   "categories": {
//     "overall": {
//       "score": 1-10,
//       "message": "direct energy description",
//       "detailed_message": "practical analysis of how different aspects of life will interact today with specific examples",
//       "advice": "clear, actionable guidance for managing the day"
//     },
//     "love": {
//       "score": 1-10,
//       "message": "relationship energy summary",
//       "detailed_message": "specific relationship scenarios they might face - conversations with partners, family interactions, or social situations. Include natural emotional reactions and practical advice for handling them well",
//       "advice": "direct relationship advice with clear dos and don'ts"
//     },
//     "work": {
//       "score": 1-10,
//       "message": "work energy summary",
//       "detailed_message": "specific workplace scenarios - meetings, deadlines, colleague interactions, or task assignments. Address common work challenges and provide practical strategies for success",
//       "advice": "workplace advice with specific behavioral recommendations"
//     },
//     "money": {
//       "score": 1-10,
//       "message": "financial energy summary",
//       "detailed_message": "practical money situations - spending decisions, income opportunities, or budget challenges. Address common financial mistakes and provide clear guidance",
//       "advice": "financial advice with specific actions to take or avoid"
//     },
//     "wellBeing": {
//       "score": 1-10,
//       "message": "health energy summary",
//       "detailed_message": "specific health and wellness scenarios - energy levels, stress management, physical symptoms, or self-care needs. Provide practical health maintenance advice",
//       "advice": "health advice with specific preventive actions or lifestyle adjustments"
//     }
//   },
//   "lucky_color": "simple color name",
//   "lucky_number": 1-99
// }

// Do not include any fields beyond those listed. Do not add explanatory text outside the JSON.`,
//     },
//     {
//       role: 'user',
//       content: `Create today's fortune.

// Name: ${personalInfo.fullName}${
//         personalInfo.gender ? `\nGender: ${personalInfo.gender}` : ''
//       }${personalInfo.jobTitle ? `\nJob: ${personalInfo.jobTitle}` : ''}
// Birth Date: ${personalInfo.birthDate}
// Date: ${formattedDate}

// ${
//   !personalInfo.gender && !personalInfo.jobTitle
//     ? 'Note: Gender and job title not provided. Create general but still realistic workplace and relationship scenarios that could apply to anyone.'
//     : !personalInfo.jobTitle
//     ? 'Note: Job title not provided. Create general workplace scenarios that could apply to various professions.'
//     : !personalInfo.gender
//     ? 'Note: Gender not provided. Use gender-neutral language for relationship advice.'
//     : ''
// }`,
//     },
//   ];
// }

// /* ------------------------------------------------------------------ */
// /*  Fortune generator                                                 */
// /* ------------------------------------------------------------------ */
// export async function generateAIFortune(
//   personalInfo: PersonalInfo,
//   date: string,
// ): Promise<AIFortuneResponse> {
//   if (!OPENAI_API_KEY) {
//     throw new Error('OpenAI API key not configured');
//   }

//   const messages = createFortunePrompt(personalInfo, date);

//   const response = await fetch('https://api.openai.com/v1/chat/completions', {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${OPENAI_API_KEY}`,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       model: 'gpt-4o-mini',
//       messages,
//       temperature: 1.0,
//       top_p: 0.9,
//       max_tokens: 1800,
//       response_format: { type: 'json_object' },
//     }),
//   });

//   if (!response.ok) {
//     throw new Error(`OpenAI API error: ${response.status}`);
//   }

//   const data: OpenAIResponse = await response.json();
//   const content = data.choices[0]?.message?.content;

//   if (!content) {
//     throw new Error('No content received from OpenAI');
//   }

//   const parsed = JSON.parse(content) as AIFortuneResponse;

//   // basic validation
//   if (
//     !parsed.overall ||
//     !parsed.categories ||
//     !parsed.lucky_color ||
//     !parsed.lucky_number
//   ) {
//     throw new Error('Invalid response structure from AI');
//   }

//   return parsed;
// }
