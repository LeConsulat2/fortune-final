// export const fortuneCategoryLabels: Record<
//   FortuneCategory,
//   { label: string; icon: string; color: string }
// > = {
//   overall: { label: 'Overall', icon: '🌟', color: 'text-yellow-600' },
//   love: { label: 'Love', icon: '💖', color: 'text-pink-600' },
//   work: { label: 'Work', icon: '💼', color: 'text-blue-600' },
//   money: { label: 'Money', icon: '💰', color: 'text-green-600' },
//   wellBeing: { label: 'Well-being', icon: '🏥', color: 'text-red-600' },
// };

// export interface PersonalInfo {
//   fullName: string;
//   birthDate: string; // YYYY-MM-DD format
//   gender?: 'male' | 'female';
//   jobTitle?: string;
//   calculatedSign: ZodiacSign;
//   lifePathNumber: number;
//   birthDayNumber: number;
// }

// export interface DailyFortune {
//   personalInfo: PersonalInfo;
//   date: string;
//   overall: {
//     score: number; // 1-10
//     message: string;
//     detailed_message: string; // Long, detailed Korean-style fortune
//     lucky_color: string;
//     lucky_number: number;
//     personal_insight: string;
//   };
//   categories: Record<
//     FortuneCategory,
//     {
//       score: number; // 1-10
//       message: string;
//       detailed_message: string; // Long, detailed category-specific fortune
//       advice: string;
//     }
//   >;
// }
