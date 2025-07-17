import { type FortuneConfig } from '@/lib/types';

export const composure: FortuneConfig = {
  label: {
    name: 'Composure',
    emoji: '🗿',
    description: 'Inner stance and mental discipline',
  },
  guidance: `
COMPOSURE & OPERATIONAL EXCELLENCE FOCUS: Provide insights into how one maintains peak performance and inner stability through complex challenges. Each reading should feel like guidance from someone who understands the weight of carrying oneself with precision through difficulty, while continuously leveling up their capabilities.

PROFESSIONAL COMPETENCY UNDER PRESSURE:
- Recognize how technical skills perform differently under stress versus controlled conditions
- Address the gap between your best training and real-world application
- Explore how to maintain quality standards when external chaos threatens execution
- Examine the relationship between preparation depth and crisis performance
- Address how to extract operational lessons from high-pressure scenarios
- Discuss the evolution from reactive competence to proactive mastery
- Explore how to maintain professional bearing when personal foundations shake
- Address the discipline of continuous improvement through adversity
- Examine how small operational adjustments compound into systemic excellence

SKILL REFINEMENT THROUGH DIFFICULTY:
- Address how challenging situations reveal the true quality of your capabilities
- Explore the difference between performing under observation versus under genuine pressure
- Discuss how to maintain learning mindset when outcomes matter most
- Address the practice of real-time skill calibration during demanding periods
- Explore how to use setbacks as diagnostic information about capability gaps
- Discuss the art of remaining curious about your own performance under stress
- Address how to build capacity through increasingly complex challenges
- Explore the relationship between technical mastery and emotional regulation under pressure
- Discuss how to maintain standards when others around you are compromising theirs

OPERATIONAL WISDOM DEVELOPMENT:
- Address how to read situations accurately when stakes are high
- Explore the skill of rapid decision-making with incomplete information
- Discuss how to maintain strategic thinking when tactical problems multiply
- Address the practice of pattern recognition across different pressure scenarios
- Explore how to balance immediate response needs with long-term positioning
- Discuss the discipline of choosing your battles based on strategic importance
- Address how to maintain perspective when caught in the intensity of execution
- Explore the art of timing interventions for maximum effectiveness
- Discuss how to build judgment that improves with each challenging experience

LEADERSHIP THROUGH PERSONAL MASTERY:
- Address how your inner state affects team performance and morale
- Explore the responsibility of maintaining composure as others depend on your stability
- Discuss how to model resilience without appearing invulnerable
- Address the skill of supporting others while processing your own challenges
- Explore how to maintain authority when facing situations beyond your direct control
- Discuss the art of transparent communication during uncertain periods
- Address how to build trust through consistent performance under varying conditions
- Explore the difference between commanding respect and demanding it
- Discuss how to influence outcomes through the quality of your presence

SYSTEMATIC EXCELLENCE BUILDING:
- Address how daily practices create the foundation for crisis performance
- Explore the relationship between routine discipline and exceptional capability
- Discuss how to design feedback loops that accelerate skill development
- Address the practice of deliberate exposure to increasing levels of complexity
- Explore how to maintain momentum through periods of apparent stagnation
- Discuss the art of productive self-criticism without undermining confidence
- Address how to balance current performance demands with future capability building
- Explore the discipline of investing in development during already busy periods
- Discuss how to measure progress in competency development over time

SOPHISTICATED PRESSURE NAVIGATION:
- Address how to distinguish between productive stress and destructive overwhelm
- Explore the skill of maintaining multiple priorities without losing focus on any
- Discuss how to calibrate effort levels to match actual requirements rather than perceived urgency
- Address the practice of energy management across extended high-demand periods
- Explore how to maintain quality while increasing speed and complexity
- Discuss the art of graceful degradation when resources become constrained
- Address how to recognize when to push through versus when to strategically retreat
- Explore the relationship between sustainable performance and peak performance
- Discuss how to maintain long-term effectiveness while handling short-term crises

INTEGRATION AND APPLICATION:
- Address how to transfer lessons learned from one domain to another
- Explore the practice of synthesizing feedback from multiple challenging experiences
- Discuss how to maintain curiosity about your own development patterns
- Address the skill of adapting proven methods to novel situations
- Explore how to build personal operating systems that evolve with increasing complexity
- Discuss the art of maintaining authenticity while continuously improving performance
- Address how to balance confidence in current abilities with openness to further development
- Explore the relationship between personal mastery and professional impact
- Discuss how to measure success in terms of capability growth rather than just outcomes

AUTHENTIC RESPONSE PATTERNS:
- Use precise language that reflects actual operational experience rather than abstract concepts
- Address the internal contradictions that arise when maintaining excellence under pressure
- Acknowledge when strength requires admitting knowledge gaps or skill limitations
- Include insights about the relationship between vulnerability and true competence
- Address how different types of challenges reveal different aspects of capability
- Discuss the difference between what others observe and what you experience internally
- Include recognition of the ongoing nature of building and maintaining operational excellence
- Address the moments when high standards feel like a burden rather than an asset

ANSWER LOOKUP INSTRUCTION:
For each quiz answer you receive, use the value to find the matching emoji and description from the quiz schema above. Incorporate all three elements (value, emoji, description) to make your response more nuanced and specific. The emoji should feel natural within the text, not forced.

LANGUAGE INSTRUCTION:
Write your entire response in the language selected by the user in the quiz. 

OUTPUT:
Return ONLY valid JSON with this exact schema:

{
  "overall": {
    "score": 1-100,
    "message": "brief, direct summary",
    "detailed_message": "two short paragraphs about the main theme of their composure with specific situations and clear guidance",
    "personalised_insight": "brief observation connecting their quiz answers to a practical composure pattern"
  }
}

Do not include any fields beyond those listed. Do not add explanatory text outside the JSON.`,

  quiz: [
    {
      id: 'performanceUnderPressure',
      q: 'How does your technical performance change under real pressure?',
      options: [
        {
          value: 'Heightened precision',
          emoji: '🎯',
          description:
            'I become more focused and execute better than in practice',
        },
        {
          value: 'Steady maintenance',
          emoji: '⚙️',
          description: 'I maintain my usual standards regardless of pressure',
        },
        {
          value: 'Calculated degradation',
          emoji: '📊',
          description: 'I consciously adjust quality to match time constraints',
        },
        {
          value: 'Inconsistent execution',
          emoji: '🌊',
          description: 'My performance varies unpredictably under stress',
        },
        {
          value: 'Significant decline',
          emoji: '📉',
          description: 'Pressure noticeably compromises my technical execution',
        },
      ],
    },
    {
      id: 'skillRefinement',
      q: 'How do you extract lessons from challenging professional situations?',
      options: [
        {
          value: 'Real-time calibration',
          emoji: '⚡',
          description:
            'I adjust my approach immediately based on what I observe',
        },
        {
          value: 'Systematic post-analysis',
          emoji: '📋',
          description:
            'I conduct thorough reviews after each challenging experience',
        },
        {
          value: 'Pattern recognition',
          emoji: '🔍',
          description:
            'I look for recurring themes across different situations',
        },
        {
          value: 'Peer consultation',
          emoji: '👥',
          description: 'I discuss challenges with others to gain perspective',
        },
        {
          value: 'Intuitive integration',
          emoji: '🧭',
          description: 'I trust my instincts to guide future improvements',
        },
      ],
    },
    {
      id: 'decisionMaking',
      q: 'When facing complex decisions with incomplete information, you:',
      options: [
        {
          value: 'Rapid assessment and action',
          emoji: '⚔️',
          description:
            'I make quick decisions and adjust as new information emerges',
        },
        {
          value: 'Strategic information gathering',
          emoji: '📡',
          description: 'I seek key data points before committing to a course',
        },
        {
          value: 'Scenario planning',
          emoji: '♟️',
          description: 'I consider multiple potential outcomes before choosing',
        },
        {
          value: 'Consensus building',
          emoji: '🤝',
          description: 'I involve others in the decision-making process',
        },
        {
          value: 'Analytical paralysis',
          emoji: '🔄',
          description: 'I struggle to act without complete information',
        },
      ],
    },
    {
      id: 'leadershipPresence',
      q: 'How does your inner state affect others during challenging periods?',
      options: [
        {
          value: 'Stabilizing influence',
          emoji: '🗿',
          description: 'Others look to me for calm and clear direction',
        },
        {
          value: 'Transparent vulnerability',
          emoji: '🪞',
          description: 'I share my uncertainty while maintaining confidence',
        },
        {
          value: 'Protective composure',
          emoji: '🛡️',
          description: 'I maintain appearances to shield others from my stress',
        },
        {
          value: 'Unintentional projection',
          emoji: '📡',
          description: 'My internal state spreads to others despite my efforts',
        },
        {
          value: 'Withdrawal tendency',
          emoji: '🏠',
          description:
            'I pull back to avoid affecting others with my uncertainty',
        },
      ],
    },
    {
      id: 'excellenceBuilding',
      q: 'How do you build and maintain your professional capabilities?',
      options: [
        {
          value: 'Systematic practice',
          emoji: '🔧',
          description: 'I have structured routines for skill development',
        },
        {
          value: 'Challenge seeking',
          emoji: '🏔️',
          description: 'I actively pursue situations that stretch my abilities',
        },
        {
          value: 'Feedback integration',
          emoji: '📈',
          description: 'I actively seek and apply input from others',
        },
        {
          value: 'Cross-domain learning',
          emoji: '🌐',
          description:
            'I study principles from different fields and apply them',
        },
        {
          value: 'Experience-based growth',
          emoji: '🌱',
          description: 'I rely primarily on learning through doing',
        },
      ],
    },
    {
      id: 'pressureCalibration',
      q: 'How do you distinguish between productive stress and destructive overwhelm?',
      options: [
        {
          value: 'Physical monitoring',
          emoji: '📊',
          description: 'I track my body signals and energy levels',
        },
        {
          value: 'Performance metrics',
          emoji: '📏',
          description: 'I measure the quality of my work output',
        },
        {
          value: 'Emotional awareness',
          emoji: '🎭',
          description: 'I notice changes in my emotional responses',
        },
        {
          value: 'Time perspective',
          emoji: '⏰',
          description:
            'I consider whether the pressure is temporary or chronic',
        },
        {
          value: 'External feedback',
          emoji: '👁️',
          description: 'Others point out when I am pushing too hard',
        },
      ],
    },
    {
      id: 'competencyGaps',
      q: 'When you encounter the limits of your current abilities, you:',
      options: [
        {
          value: 'Systematic skill building',
          emoji: '📚',
          description: 'I create a plan to develop the missing capabilities',
        },
        {
          value: 'Strategic collaboration',
          emoji: '🤝',
          description: 'I partner with others who have complementary skills',
        },
        {
          value: 'Creative adaptation',
          emoji: '🎨',
          description: 'I find alternative approaches using existing strengths',
        },
        {
          value: 'Transparent acknowledgment',
          emoji: '💬',
          description: 'I openly discuss limitations and ask for support',
        },
        {
          value: 'Push through regardless',
          emoji: '💪',
          description: 'I try to overcome gaps through extra effort',
        },
      ],
    },
    {
      id: 'operationalWisdom',
      q: 'How do you apply lessons learned from one challenging situation to future ones?',
      options: [
        {
          value: 'Principle extraction',
          emoji: '⚖️',
          description: 'I identify underlying principles that apply broadly',
        },
        {
          value: 'Pattern mapping',
          emoji: '🗺️',
          description:
            'I look for similar structures across different contexts',
        },
        {
          value: 'Scenario rehearsal',
          emoji: '🎬',
          description:
            'I mentally practice applying lessons to hypothetical situations',
        },
        {
          value: 'System refinement',
          emoji: '⚙️',
          description:
            'I update my processes and procedures based on experience',
        },
        {
          value: 'Intuitive integration',
          emoji: '🌊',
          description:
            'I trust that experiences naturally inform future responses',
        },
      ],
    },
    {
      id: 'language',
      q: 'What language did you want the fortuner to respond to you?',
      // left as single-select
      options: [
        {
          value: 'English',
          emoji: '🇬🇧',
          description: 'English',
        },
        {
          value: 'Korean',
          emoji: '🇰🇷',
          description: 'Korean',
        },
        {
          value: 'Japanese',
          emoji: '🇯🇵',
          description: 'Japanese',
        },
        {
          value: 'Chinese',
          emoji: '🇨🇳',
          description: 'Chinese',
        },
        {
          value: 'Vietnamese',
          emoji: '🇻🇳',
          description: 'Vietnamese',
        },
      ],
    },
  ],
};
