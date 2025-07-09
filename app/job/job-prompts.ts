import { type FortuneConfig } from '@/lib/types';

export const job: FortuneConfig = {
  label: {
    name: 'Job Fortune',
    emoji: '💼',
    description: 'Career, work, and professional growth',
  },
  guidance: `
 CAREER & PROFESSIONAL FOCUS: Explore workplace dynamics, professional growth, leadership presence, and authentic career expression.

SPECIFIC GUIDANCE:
- Address professional authenticity vs. strategic presentation
- Include insights about workplace relationships and political navigation
- Provide guidance on when to speak up vs. when to observe
- Address how personal values align with professional responsibilities
- Include wisdom about recognizing growth opportunities vs. energy drains
- Address the psychology of ambition and sustainable success
- Provide insights about collaboration styles and team dynamics
- Include guidance on managing professional boundaries
- Address how to leverage natural strengths in work contexts

LEADERSHIP & INFLUENCE:
- Acknowledge different leadership styles and when to apply them
- Address the balance between confidence and humility
- Include insights about inspiring others vs. individual achievement
- Provide guidance on navigating hierarchy and authority dynamics
- Address how to build authentic professional relationships
- Include wisdom about managing professional pressure and expectations

CAREER DEVELOPMENT:
- Address long-term vision vs. immediate practical needs
- Include insights about skill development and learning opportunities
- Provide guidance on networking and professional relationship building
- Address how to recognize when it's time for career changes or evolution
- Include wisdom about balancing professional growth with personal life
- Address the psychology of professional identity and self-worth

PRACTICAL WORKPLACE WISDOM:
- Provide specific guidance on timing for important professional conversations
- Include insights about project management and priority setting
- Address how to handle workplace conflicts or challenging colleagues
- Provide guidance on presentation skills and professional communication
- Include wisdom about managing energy and avoiding burnout

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
      id: 'todayMood',
      q: 'What’s your general vibe about work today?',
      options: [
        {
          value: 'Let’s Do This',
          emoji: '💪',
          description: 'Feeling ready to take things on',
        },
        {
          value: 'Caffeine and Hope',
          emoji: '☕',
          description: 'Running on nervous energy and habit',
        },
        {
          value: 'Just Survive It',
          emoji: '🫠',
          description: 'Mentally clocked out, physically present',
        },
        {
          value: 'Meh',
          emoji: '😐',
          description: 'Just doing what needs to be done — no more, no less',
        },
        {
          value: 'Quietly Optimistic',
          emoji: '🌤️',
          description: 'Hopeful something small will go well',
        },
      ],
    },
    {
      id: 'howYouThinkOthersSeeYou',
      q: 'How do you *think* you come across at work?',
      options: [
        {
          value: 'Reliable',
          emoji: '📦',
          description: 'I get things done quietly and consistently',
        },
        {
          value: 'Competent but Distant',
          emoji: '🪟',
          description: 'I do good work, but I’m not that “chatty”',
        },
        {
          value: 'Underestimated',
          emoji: '🫥',
          description: 'I feel like people don’t fully see what I bring',
        },
        {
          value: 'Helpful and Kind',
          emoji: '🧃',
          description: 'I try to make things smoother for others',
        },
        {
          value: 'Wildcard',
          emoji: '🎲',
          description: 'It really depends on the day',
        },
      ],
    },
    {
      id: 'motivationLoop',
      q: 'What’s your current motivation loop at work?',
      options: [
        {
          value: 'Up and Down',
          emoji: '↕️',
          description: 'Some days I’m on fire, others… not so much',
        },
        {
          value: 'Steady Push',
          emoji: '🚶',
          description: 'Not dramatic, just showing up and doing it',
        },
        {
          value: 'Last-Minute Hustle',
          emoji: '🔥',
          description: 'Deadlines are the only thing that move me',
        },
        {
          value: 'Just Do It',
          emoji: '💪',
          description:
            'Same, no matter what, I figure out what needs to be done and make it happen',
        },
        {
          value: 'Dragging Feet',
          emoji: '🪨',
          description: 'It’s a struggle to get momentum going',
        },
        {
          value: 'Starting to Shift',
          emoji: '🌱',
          description: 'Something in me is stirring — maybe change is coming',
        },
      ],
    },
    {
      id: 'boundaryHabits',
      q: 'How are your work boundaries lately?',
      options: [
        {
          value: 'Chair Slouch Mode',
          emoji: '💺',
          description:
            'I’m basically lying down in this chair but still replying to emails',
        },
        {
          value: 'Trying to Protect Space',
          emoji: '🪵',
          description: 'Blocking time off, even if I feel slightly guilty',
        },
        {
          value: 'Depends on the Week',
          emoji: '🌗',
          description: 'Some weeks I’m solid, others I cave',
        },
        {
          value: 'Pretty Healthy',
          emoji: '🧘',
          description: 'I know when to stop and protect my time',
        },
      ],
    },
    {
      id: 'feedbackFeelings',
      q: 'How do you usually feel after getting feedback?',
      options: [
        {
          value: 'Hyper-Critical',
          emoji: '🕵️',
          description: 'I obsess over what I could’ve done better',
        },
        {
          value: 'Quietly Encouraged',
          emoji: '📎',
          description: 'Even small praise helps me keep going',
        },
        {
          value: "Don't Care",
          emoji: '🤷',
          description: 'I know the job better than the person giving feedback',
        },
        {
          value: 'Detached',
          emoji: '🌬️',
          description: 'I hear it, but don’t feel much about it',
        },
        {
          value: 'Energized',
          emoji: '🎯',
          description: 'I take feedback and think as positive as possible',
        },
      ],
    },
    {
      id: 'conflictStyle',
      q: 'When work conflict shows up, how do you usually handle it?',
      options: [
        {
          value: 'Avoid & Simmer',
          emoji: '🥄',
          description: 'I keep it in and vent later',
        },
        {
          value: 'Talk It Out ',
          emoji: '📞',
          description: 'Only way to resolve it really eventually',
        },
        {
          value: 'Here We Go Again',
          emoji: '🔁',
          description: 'Here comes the drama again',
        },
        {
          value: 'Address Immediately',
          emoji: '🚨',
          description: 'I can’t stand tension — I speak up quickly',
        },
        {
          value: 'Let It Go',
          emoji: '🍃',
          description: 'If it’s not serious, I genuinely move on',
        },
      ],
    },
    {
      id: 'hiddenStrength',
      q: 'Which of these is one of your quiet superpowers at work?',
      options: [
        {
          value: 'Staying Calm',
          emoji: '🧊',
          description: 'Even in chaos, I keep a level head',
        },
        {
          value: 'Reading People',
          emoji: '🧠',
          description: 'I notice moods and dynamics quickly',
        },
        {
          value: 'Detail Memory',
          emoji: '📚',
          description: 'I remember the things others forget',
        },
        {
          value: 'Making People Feel Safe',
          emoji: '🌿',
          description: 'People feel steadier around me',
        },
      ],
    },
    {
      id: 'workIdentity',
      q: 'If your current job disappeared tomorrow, what would you feel first?',
      options: [
        {
          value: 'Relief',
          emoji: '😮‍💨',
          description: 'Honestly… I’d feel lighter',
        },
        {
          value: 'Fear',
          emoji: '😬',
          description: 'I’d worry about what’s next',
        },
        {
          value: 'Excitement',
          emoji: '🚀',
          description: 'A blank slate sounds amazing',
        },
        {
          value: 'Loss of Self',
          emoji: '👤',
          description: 'So much of my identity is tied to this',
        },
      ],
    },
    {
      id: 'energyRhythm',
      q: 'When do you usually feel most productive?',
      options: [
        {
          value: 'Mornings',
          emoji: '🌅',
          description: 'Fresh mind, quiet hours, clean slate',
        },
        {
          value: 'Head Start',
          emoji: '🚀',
          description: 'I start early and have a head start',
        },
        {
          value: 'Afternoons',
          emoji: '🌞',
          description: 'I warm up slowly but then lock in',
        },
        {
          value: 'Evenings',
          emoji: '🌙',
          description: 'Quiet + pressure = focus',
        },
        {
          value: 'Random Spurts',
          emoji: '🌪️',
          description: 'No pattern, just sprints when it hits',
        },
      ],
    },
    {
      id: 'whatYouWantNext',
      q: 'What do you secretly hope comes next in your career?',
      options: [
        {
          value: 'Recognition',
          emoji: '🌟',
          description: 'For people to actually see what I’ve built',
        },
        {
          value: 'Better Balance',
          emoji: '🧘‍♂️',
          description: 'Work that respects the rest of my life',
        },
        {
          value: 'Creative Freedom',
          emoji: '🎨',
          description: 'More space to make, shape, or lead my way',
        },
        {
          value: 'A Clean Exit',
          emoji: '🚪',
          description: 'A graceful way out when the time is right',
        },
        {
          value: 'More Money',
          emoji: '💰',
          description: 'More money, more money, more money',
        },
        {
          value: 'Better Manager',
          emoji: '🧑‍💼',
          description: 'A manager who knows what they are doing',
        },
      ],
    },
  ],
};
