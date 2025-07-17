import { type FortuneConfig } from '@/lib/types';

export const interview: FortuneConfig = {
  label: {
    name: 'Job Interview Fortune',
    emoji: '📝',
    description: 'Interview mindset, preparation, and success',
  },
  guidance: `
INTERVIEW FOCUS: Guidance for interview preparation, mindset, confidence, and authentic self-presentation.

SPECIFIC GUIDANCE:
- Address interview authenticity vs. strategic self-presentation
- Insights about reading interviewer cues and adapting
- Guidance on when to lead vs. when to listen
- Aligning personal values with company culture
- Recognizing real opportunities vs. red flags
- Psychology of confidence and handling nerves
- Collaboration and communication in interviews
- Managing boundaries and expectations
- Leveraging strengths and unique qualities

INTERVIEW STRATEGY:
- Different interview styles and when to use them
- Balancing confidence and humility
- Inspiring interviewers vs. focusing on achievements
- Navigating hierarchy and authority in interviews
- Building rapport and professional relationships
- Managing pressure and expectations

CAREER TRANSITIONS:
- Vision for the next step vs. immediate needs
- Skill demonstration and learning mindset
- Networking and follow-up etiquette
- Recognizing when a role is the right fit
- Balancing ambition with well-being
- Professional identity and self-worth in transitions

PRACTICAL INTERVIEW WISDOM:
- Timing for key questions and discussions
- Projecting clarity and priority setting
- Handling tough questions or challenging interviewers
- Presentation skills and communication
- Managing energy and avoiding burnout during the process

ANSWER LOOKUP INSTRUCTION:
For each quiz answer you receive, use the value to find the matching emoji and description from the quiz schema above. Incorporate all three elements (value, emoji, description) to make your response more nuanced and specific. The emoji should feel natural within the text, not forced.

LANGUAGE INSTRUCTION:
Write your entire response in the language selected by the user in the quiz. 

OUTPUT:
Return ONLY valid JSON with this exact schema:

{
  "overall": {
    "score": A float between 1 and 100,
    "message": "brief, direct summary",
    "detailed_message": "two short paragraphs about the main theme of their day with specific situations and clear advice",
    "personalised_insight": "brief observation connecting their profession to a practical life pattern"
  },

  Do not include any fields beyond those listed. Do not add explanatory text outside the JSON.
`,
  quiz: [
    {
      id: 'applicationIntent',
      q: 'Why did you apply for this role?',
      options: [
        {
          value: 'Clear Fit',
          emoji: '🎯',
          description:
            'I knew what the role was and it fits what I’ve been looking for',
        },
        {
          value: 'Curious but Unsure',
          emoji: '🔍',
          description:
            'It looked interesting, but I’m still figuring out if it really fits me',
        },
        {
          value: 'Let’s Be Real',
          emoji: '💸',
          description:
            'I saw the title, skimmed the description, checked the salary — applied',
        },
        {
          value: 'Applied in Flow',
          emoji: '📤',
          description:
            'I was in a job-search rhythm and this one felt “worth a shot”',
        },
      ],
    },
    {
      id: 'roleUnderstanding',
      q: 'How well do you actually understand the role you’re interviewing for?',
      options: [
        {
          value: 'Very Clearly',
          emoji: '🧭',
          description:
            'I’ve done my research and can describe it better than the ad did',
        },
        {
          value: 'Somewhat',
          emoji: '🗺️',
          description:
            'I get the general direction, but I’ll know more once we talk',
        },
        {
          value: 'Still Fuzzy',
          emoji: '🌫️',
          description:
            'I’m hoping the interview gives me more clarity than the posting did',
        },
        {
          value: 'Basically Guessing',
          emoji: '🎲',
          description:
            'I’m just connecting the dots based on the title and vibes',
        },
      ],
    },
    {
      id: 'energyBeforeInterview',
      q: 'How are you usually feeling in the 10 minutes before an interview?',
      options: [
        {
          value: 'Locked In',
          emoji: '🔒',
          description: 'Notes reviewed, camera checked, inner monologue calm',
        },
        {
          value: 'Managing Nerves',
          emoji: '🌊',
          description: 'Breathing through it, trying not to overthink',
        },
        {
          value: 'Almost Too Chill',
          emoji: '🛋️',
          description: 'Weirdly relaxed — maybe too much?',
        },
        {
          value: 'Caffeine-Panic Combo',
          emoji: '☕😬',
          description: 'Running on last-minute prep and adrenaline',
        },
      ],
    },
    {
      id: 'questionStyle',
      q: 'When it’s your turn to ask questions, what’s your usual approach?',
      options: [
        {
          value: 'Insightful and Strategic',
          emoji: '📈',
          description: 'I prep thoughtful questions that show how I think',
        },
        {
          value: 'Genuine Curiosity',
          emoji: '🧃',
          description: 'I ask what I actually want to know',
        },
        {
          value: 'Vibe Checker',
          emoji: '🎭',
          description:
            'I ask questions just to feel out their personality and energy',
        },
        {
          value: 'Scrambling for One',
          emoji: '🌀',
          description: 'Sometimes I blank and end up asking something basic',
        },
      ],
    },
    {
      id: 'storyStrength',
      q: 'What type of story do you feel most confident telling in interviews?',
      options: [
        {
          value: 'Problem Solving',
          emoji: '🧩',
          description:
            'I shine when I walk through how I fixed or built something',
        },
        {
          value: 'Team Dynamics',
          emoji: '🤝',
          description:
            'I can talk about collaboration, conflict, and people stuff',
        },
        {
          value: 'Growth Arc',
          emoji: '🌱',
          description: 'Stories about how I’ve grown or changed over time',
        },
        {
          value: 'None Really',
          emoji: '😶',
          description: 'Still figuring out how to package my experiences',
        },
      ],
    },
    {
      id: 'truthLevel',
      q: 'How much of your real self do you show in interviews?',
      options: [
        {
          value: '80% Me',
          emoji: '🔓',
          description: 'I stay authentic but filter with care',
        },
        {
          value: 'Just Enough',
          emoji: '🔍',
          description: 'I give what I need to, and protect the rest',
        },
        {
          value: 'All Polished',
          emoji: '🧼',
          description: 'This is a professional performance, fully edited',
        },
        {
          value: 'Almost Too Honest',
          emoji: '🫣',
          description: 'I sometimes overshare when I drop my guard',
        },
      ],
    },
    {
      id: 'interviewFocus',
      q: 'Where does most of your mental focus go during interviews?',
      options: [
        {
          value: 'Delivering Clearly',
          emoji: '🗣️',
          description: 'Trying to communicate ideas clearly and calmly',
        },
        {
          value: 'Reading the Room',
          emoji: '🧠',
          description: 'Watching how they’re reacting to everything I say',
        },
        {
          value: 'Remembering Talking Points',
          emoji: '📝',
          description: 'Running through things I need to mention',
        },
        {
          value: 'Staying Grounded',
          emoji: '🧘',
          description: 'Trying to breathe, listen, and not overperform',
        },
      ],
    },
    {
      id: 'companyFamiliarity',
      q: 'How familiar are you with the company?',
      options: [
        {
          value: 'Well-Acquainted',
          emoji: '🏢',
          description:
            'I know their product, culture, and why I’d want to work here',
        },
        {
          value: 'Enough to Talk',
          emoji: '📚',
          description:
            'I read through their site and recent news — I’m prepared',
        },
        {
          value: 'Not Much',
          emoji: '👀',
          description: 'I know the name, but not much else yet',
        },
        {
          value: 'Just Found Out',
          emoji: '🆕',
          description: 'This was my first real look at them',
        },
      ],
    },
    {
      id: 'interviewOutcomeExpectation',
      q: 'What outcome are you realistically expecting from this interview?',
      options: [
        {
          value: 'Hopeful',
          emoji: '🌤️',
          description: 'I think it went/will go well',
        },
        {
          value: 'No Idea Yet',
          emoji: '🎲',
          description: 'Can’t tell — depends how they interpreted me',
        },
        {
          value: 'Neutral',
          emoji: '🪵',
          description:
            'Just treating it as practice unless it turns into something',
        },
        {
          value: 'Probably Not This One',
          emoji: '📪',
          description: 'I showed up, but I don’t expect it to go anywhere',
        },
      ],
    },
    {
      id: 'whatYouWantOutOfIt',
      q: 'What do you honestly want out of this interview?',
      options: [
        {
          value: 'Alignment',
          emoji: '🧭',
          description: 'To know if this is a place I could belong',
        },
        {
          value: 'Breakthrough',
          emoji: '💥',
          description: 'A role that takes me into the next phase',
        },
        {
          value: 'Validation',
          emoji: '✅',
          description: 'To be seen as capable and worth investing in',
        },
        {
          value: 'Options',
          emoji: '🌱',
          description: 'Even if it’s not “the one,” I want more possibilities',
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
