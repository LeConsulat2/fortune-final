import type { ZodiacSign } from '@/lib/common-constants';

interface ZodiacContent {
  element: string;
  quality: string;
  rulingPlanet: string;
  symbol: string;
  strengths: string[];
  challenges: string[];
  overview: string;
  personality: string;
  loveStyle: string;
  careerStyle: string;
  fortuneConnection: string;
}

export const ZODIAC_CONTENT: Record<ZodiacSign, ZodiacContent> = {
  aries: {
    element: 'Fire',
    quality: 'Cardinal',
    rulingPlanet: 'Mars',
    symbol: 'The Ram',
    strengths: ['Courageous and determined', 'Natural-born leader', 'Energetic and enthusiastic', 'Direct and honest communicator'],
    challenges: ['Impatience with slower-paced situations', 'Tendency to act before thinking', 'Can come across as aggressive when passionate', 'Difficulty with routine and repetition'],
    overview:
      'Aries is the first sign of the zodiac, embodying the energy of new beginnings and bold action. People born under this sign carry an innate drive to pioneer, lead, and explore. They approach life with a directness that others often find refreshing — there is rarely ambiguity in what an Aries wants or where they stand. This fire sign thrives on challenge and competition, not out of hostility, but because overcoming obstacles is how they feel most alive.',
    personality:
      'Aries individuals are characterised by their confidence and willingness to take risks. They tend to be the first to volunteer, the first to speak up, and the first to act when others hesitate. This boldness is paired with a genuine warmth — Aries cares deeply about the people in their circle and will fight fiercely for those they love. However, their intensity can sometimes overwhelm more reserved personalities, and learning patience is often a lifelong journey for this sign.',
    loveStyle:
      'In relationships, Aries brings passion and spontaneity. They value honesty above all else and struggle with partners who play games or withhold feelings. An Aries in love is generous, protective, and deeply attentive — but they need a partner who can match their energy and maintain their own independence. Boredom is the greatest threat to an Aries relationship.',
    careerStyle:
      'Professionally, Aries excels in roles that offer autonomy, challenge, and visible results. They make natural entrepreneurs, project leaders, and crisis managers. Routine administrative work drains their energy, but give them a problem to solve or a goal to chase, and they become unstoppable. Their directness makes them effective but sometimes tactless in workplace communication.',
    fortuneConnection:
      'When you read your fortune as an Aries, pay particular attention to insights about timing and impulse. Your natural tendency is to act immediately, but your fortune reading often reveals whether today rewards boldness or benefits from a brief pause. The composure and career categories tend to resonate most strongly with Aries energy.',
  },
  taurus: {
    element: 'Earth',
    quality: 'Fixed',
    rulingPlanet: 'Venus',
    symbol: 'The Bull',
    strengths: ['Reliable and patient', 'Practical and grounded', 'Strong aesthetic sense', 'Loyal and devoted in relationships'],
    challenges: ['Stubbornness when pushed to change', 'Can prioritise comfort over growth', 'Difficulty letting go of grudges', 'Resistance to unfamiliar situations'],
    overview:
      'Taurus is the zodiac\'s anchor — steady, sensual, and deeply connected to the physical world. Where Aries rushes forward, Taurus takes measured steps, building things that last. This earth sign values security, beauty, and the simple pleasures that make life worth living. A Taurus doesn\'t need grand gestures to feel fulfilled; a good meal, a comfortable home, and the company of trusted people is often enough.',
    personality:
      'Taurus individuals are known for their dependability and quiet strength. They are the friend who shows up without being asked, the colleague who finishes what they start, and the partner who stays through difficulty. This reliability comes from a deep internal compass — Taurus knows what they value and rarely compromises on it. The flip side is a famous stubbornness: once a Taurus has made up their mind, changing it requires patience and compelling evidence, not pressure.',
    loveStyle:
      'In love, Taurus is devoted, sensual, and deeply loyal. They express affection through actions — cooking for you, creating a beautiful space, showing up consistently. They seek stability in relationships and can struggle with partners who thrive on drama or unpredictability. A Taurus in love wants to build something lasting, and they\'ll invest enormous effort into making that happen.',
    careerStyle:
      'Taurus thrives in careers that combine creativity with tangible outcomes. Finance, design, agriculture, culinary arts, and real estate often appeal to this sign. They work best at a steady pace with clear expectations and dislike environments where the rules change constantly. Their persistence means they often outperform flashier colleagues over the long term.',
    fortuneConnection:
      'Your fortune readings as a Taurus often highlight themes of patience and material security. Pay close attention to the financial fortune category — your natural money instincts are strong, and the reading can help you discern between wise caution and missed opportunity. Love readings tend to reveal patterns in how you express and receive affection.',
  },
  gemini: {
    element: 'Air',
    quality: 'Mutable',
    rulingPlanet: 'Mercury',
    symbol: 'The Twins',
    strengths: ['Intellectually curious and versatile', 'Excellent communicator', 'Adaptable to any social situation', 'Quick-witted and entertaining'],
    challenges: ['Difficulty with sustained focus', 'Can appear inconsistent to others', 'Tendency to overthink decisions', 'May avoid deep emotional conversations'],
    overview:
      'Gemini is the zodiac\'s communicator — quick-minded, endlessly curious, and capable of seeing multiple sides of any situation simultaneously. Represented by the Twins, this air sign embodies duality not as contradiction, but as range. A Gemini can be deeply serious one moment and playfully irreverent the next, and both versions are equally authentic.',
    personality:
      'Gemini individuals are driven by a hunger for information and connection. They are the people who read three books at once, maintain friendships across wildly different social circles, and can talk to anyone about anything. This intellectual agility is their greatest asset, but it can also lead to a sense of restlessness — Gemini often struggles with the feeling that they should be doing something else, somewhere else, with someone else. Learning to be present is their ongoing work.',
    loveStyle:
      'In relationships, Gemini needs mental stimulation above all else. They fall in love with minds before bodies and value a partner who can keep up with their rapid-fire conversation and shifting interests. Emotional depth matters to Gemini, but they access it through words and ideas rather than silence and intuition. A partner who can be both their best friend and intellectual sparring partner is Gemini\'s ideal.',
    careerStyle:
      'Gemini excels in careers that involve communication, variety, and problem-solving. Journalism, marketing, teaching, sales, and technology are natural fits. They struggle in repetitive roles but thrive when each day brings new challenges. Their ability to synthesise information quickly makes them valuable in fast-paced environments where adaptability matters more than deep specialisation.',
    fortuneConnection:
      'Fortune readings for Gemini often centre on communication and decision-making. Your tendency to see all options can make choosing feel overwhelming — the reading helps cut through mental noise and highlight what actually matters today. The career and general fortune categories tend to provide the clearest signal for your dual nature.',
  },
  cancer: {
    element: 'Water',
    quality: 'Cardinal',
    rulingPlanet: 'Moon',
    symbol: 'The Crab',
    strengths: ['Deeply intuitive and empathetic', 'Fiercely protective of loved ones', 'Strong emotional intelligence', 'Creates warmth and belonging wherever they go'],
    challenges: ['Can take things too personally', 'Tendency to retreat when hurt', 'May use emotional withdrawal as protection', 'Difficulty separating others\' emotions from their own'],
    overview:
      'Cancer is the zodiac\'s nurturer — emotionally intelligent, protective, and deeply attuned to the needs of others. Represented by the Crab, this water sign carries a hard exterior that protects a remarkably soft interior. Cancer feels everything deeply, and this emotional depth is both their greatest gift and their most significant vulnerability.',
    personality:
      'Cancer individuals navigate the world through feeling. They read rooms instinctively, sense when something is off before anyone speaks, and remember how people made them feel long after the specifics of a conversation fade. This emotional memory creates deep loyalty but can also lead to grudges. Cancer\'s protective shell isn\'t about coldness — it\'s about self-preservation. Once you\'re inside that shell, you have a friend for life.',
    loveStyle:
      'In love, Cancer is devoted, nurturing, and deeply romantic. They create homes — not just physical spaces, but emotional ones. A Cancer partner remembers your preferences, anticipates your needs, and shows love through care and consistency. They need a partner who values emotional security and can provide reassurance without being asked. Vulnerability is Cancer\'s love language, but it takes time for them to fully open up.',
    careerStyle:
      'Cancer thrives in careers that involve caring for others or creating something meaningful. Healthcare, education, hospitality, social work, and creative fields often appeal to this sign. They work best in environments where they feel emotionally safe and valued, and they struggle in cutthroat cultures that punish vulnerability. Their intuition makes them excellent managers who understand what their teams actually need.',
    fortuneConnection:
      'Your fortune readings as a Cancer often highlight emotional patterns and relationship dynamics. The love and mental health categories tend to be particularly revealing, surfacing feelings you may have been avoiding. Pay attention to the "caution" section of your reading — your intuition is strong, but sometimes your emotional sensitivity creates false alarms.',
  },
  leo: {
    element: 'Fire',
    quality: 'Fixed',
    rulingPlanet: 'Sun',
    symbol: 'The Lion',
    strengths: ['Confident and charismatic', 'Generous with time and energy', 'Creative and expressive', 'Natural ability to inspire others'],
    challenges: ['Can struggle with criticism', 'Need for recognition can feel demanding', 'Difficulty sharing the spotlight', 'May confuse confidence with being right'],
    overview:
      'Leo is the zodiac\'s performer — warm, generous, and magnetically confident. Ruled by the Sun, this fire sign radiates a natural authority that draws people in. But Leo\'s confidence isn\'t just showmanship; it comes from a genuine belief in the goodness of life and the potential of the people around them. A Leo doesn\'t just want to shine — they want everyone to shine.',
    personality:
      'Leo individuals are characterised by their warmth and their need to be seen. This isn\'t vanity — it\'s a deep human need for acknowledgement that Leo expresses more openly than most. They are generous friends, enthusiastic collaborators, and loyal partners who invest heavily in the people they care about. Their challenge is learning that not every moment requires their energy, and that stepping back can be as powerful as stepping forward.',
    loveStyle:
      'In relationships, Leo is passionate, romantic, and deeply devoted. They love grand gestures — not because they\'re superficial, but because they believe love should be celebrated openly. A Leo partner needs appreciation and will wither in a relationship where their efforts go unnoticed. In return, they offer fierce loyalty, consistent warmth, and an unwavering belief in their partner\'s potential.',
    careerStyle:
      'Leo excels in careers that involve leadership, creativity, and public presence. Entertainment, management, entrepreneurship, design, and education are natural fits. They need roles where their contributions are visible and valued, and they struggle in positions where they feel invisible or constrained. Their natural charisma makes them effective presenters and team leaders.',
    fortuneConnection:
      'Fortune readings for Leo often reveal insights about leadership and creative expression. Your natural confidence means you sometimes miss subtle signals — the reading helps surface what your self-assurance might be covering. The career and composure categories tend to offer the most actionable guidance for Leo\'s ambitious energy.',
  },
  virgo: {
    element: 'Earth',
    quality: 'Mutable',
    rulingPlanet: 'Mercury',
    symbol: 'The Maiden',
    strengths: ['Analytical and detail-oriented', 'Practical problem-solver', 'Quietly devoted to helping others', 'High standards for quality and integrity'],
    challenges: ['Tendency toward perfectionism and self-criticism', 'Can overthink to the point of paralysis', 'Difficulty accepting "good enough"', 'May suppress emotions in favour of logic'],
    overview:
      'Virgo is the zodiac\'s analyst — observant, methodical, and quietly dedicated to improvement. This earth sign notices what others miss: the typo in the document, the unspoken tension in the room, the small adjustment that makes something work perfectly. Virgo\'s attention to detail isn\'t fussiness — it\'s a form of care. They believe that doing things well is a way of respecting the people and projects they\'re involved with.',
    personality:
      'Virgo individuals are often mischaracterised as cold or overly critical, but beneath their practical exterior lies a deep desire to be useful and to help. They show love through service — fixing what\'s broken, organising what\'s chaotic, and quietly ensuring that everything runs smoothly. Their challenge is turning that analytical eye inward with compassion rather than criticism. Virgo\'s inner monologue can be harsh, and learning self-acceptance is often their most important work.',
    loveStyle:
      'In relationships, Virgo shows love through acts of service and thoughtful attention. They remember your preferences, notice when something is wrong, and work quietly to make your life easier. They need a partner who appreciates subtlety and doesn\'t mistake their reserve for disinterest. A Virgo in love is deeply committed but may struggle to express feelings in the dramatic, overt way some partners expect.',
    careerStyle:
      'Virgo thrives in careers that require precision, analysis, and systematic thinking. Data science, healthcare, editing, quality assurance, research, and project management are natural fits. They excel at improving existing systems and catching errors that others miss. Their challenge is avoiding burnout from taking on too much responsibility and learning to delegate.',
    fortuneConnection:
      'Your fortune readings as a Virgo often highlight themes of perfectionism and self-compassion. The mental health category is particularly valuable for this sign, helping surface the gap between your standards and your self-talk. Pay attention to the "opportunity" section — Virgo tends to underestimate how ready they actually are.',
  },
  libra: {
    element: 'Air',
    quality: 'Cardinal',
    rulingPlanet: 'Venus',
    symbol: 'The Scales',
    strengths: ['Natural diplomat and mediator', 'Strong sense of fairness and justice', 'Aesthetically refined', 'Skilled at seeing all perspectives'],
    challenges: ['Indecisiveness when choices conflict', 'Can avoid confrontation to maintain peace', 'May lose themselves in others\' needs', 'Difficulty setting firm boundaries'],
    overview:
      'Libra is the zodiac\'s diplomat — graceful, fair-minded, and deeply invested in harmony. Represented by the Scales, this air sign seeks balance in all things: relationships, aesthetics, ideas, and justice. Libra\'s desire for equilibrium isn\'t passive — it requires constant active calibration, which is why this sign is often more complex than their easygoing exterior suggests.',
    personality:
      'Libra individuals are natural connectors who thrive in social environments. They have an instinctive ability to make others feel heard and valued, often serving as the bridge between conflicting perspectives. This diplomatic skill comes at a cost: Libra can struggle to identify what they truly want when separated from what others need. Their journey often involves learning that choosing themselves isn\'t selfish — it\'s necessary.',
    loveStyle:
      'In love, Libra is romantic, attentive, and deeply invested in partnership. They believe in the ideal of two people becoming better together and will work tirelessly to maintain harmony in their relationships. They need a partner who values communication and mutual respect. Libra\'s challenge in love is voicing disagreement — they may suppress their own needs to avoid conflict, which eventually creates the very tension they were trying to prevent.',
    careerStyle:
      'Libra excels in careers that involve negotiation, design, and interpersonal dynamics. Law, diplomacy, human resources, interior design, public relations, and counselling are natural fits. They work best in collaborative environments and struggle in isolation. Their ability to consider multiple perspectives makes them excellent strategists and mediators.',
    fortuneConnection:
      'Fortune readings for Libra often illuminate decision-making patterns and relationship dynamics. Your tendency to weigh options endlessly means the reading\'s directness can be especially helpful — it cuts through your analysis paralysis. The love and composure categories tend to surface the tensions between what you want and what you think you should want.',
  },
  scorpio: {
    element: 'Water',
    quality: 'Fixed',
    rulingPlanet: 'Pluto',
    symbol: 'The Scorpion',
    strengths: ['Intensely perceptive and strategic', 'Emotionally courageous', 'Deeply loyal once trust is earned', 'Transformative — thrives through challenge'],
    challenges: ['Difficulty trusting others', 'Can hold grudges for extended periods', 'Tendency toward secrecy and control', 'All-or-nothing approach can be exhausting'],
    overview:
      'Scorpio is the zodiac\'s transformer — intense, perceptive, and unafraid of the depths that others avoid. This water sign operates beneath the surface, reading motivations and power dynamics with an accuracy that can be unsettling. Scorpio doesn\'t do casual — in relationships, work, or personal growth, they commit fully or not at all.',
    personality:
      'Scorpio individuals are often misunderstood because they reveal so little of themselves voluntarily. Their intensity isn\'t aggression — it\'s depth. They feel everything profoundly and have an almost instinctive understanding of human psychology. This makes them exceptional at reading people, but it also means they\'re acutely aware of betrayal and dishonesty. Trust, once broken with a Scorpio, is nearly impossible to rebuild.',
    loveStyle:
      'In relationships, Scorpio loves with a depth that can be overwhelming for lighter signs. They seek soul-level connection and have little patience for superficiality. A Scorpio partner is fiercely loyal, deeply passionate, and will fight for the relationship through any difficulty. They need a partner who can handle honesty without flinching and who values emotional depth over emotional ease.',
    careerStyle:
      'Scorpio thrives in careers that involve investigation, transformation, and strategy. Psychology, research, finance, detective work, surgery, and crisis management are natural fits. They excel in roles where depth matters more than breadth and where their ability to see what others miss provides a competitive advantage. Their intensity can make them demanding leaders, but their commitment inspires deep loyalty.',
    fortuneConnection:
      'Your fortune readings as a Scorpio often reveal hidden dynamics in your relationships and work. The mental health and love categories tend to surface what you already sense but haven\'t yet named. Trust the "caution" insights — your instincts are usually right, but the reading can help distinguish between genuine warning signs and protective paranoia.',
  },
  sagittarius: {
    element: 'Fire',
    quality: 'Mutable',
    rulingPlanet: 'Jupiter',
    symbol: 'The Archer',
    strengths: ['Optimistic and adventurous', 'Philosophical and open-minded', 'Honest and straightforward', 'Natural teacher and storyteller'],
    challenges: ['Can be tactless in pursuit of honesty', 'Difficulty with commitment and routine', 'Tendency to overcommit and underdeliver', 'May avoid emotional depth through humour'],
    overview:
      'Sagittarius is the zodiac\'s explorer — optimistic, philosophical, and endlessly drawn to the horizon. This fire sign lives for expansion: new ideas, new places, new perspectives. Represented by the Archer, Sagittarius aims high and far, driven by a genuine belief that life rewards those who stay curious and refuse to settle.',
    personality:
      'Sagittarius individuals are the optimists of the zodiac, bringing warmth and enthusiasm to everything they touch. They have a natural ability to find meaning in experience and to share that meaning with others through teaching, storytelling, or simply their infectious energy. Their challenge is depth — Sagittarius can sometimes skim the surface of many experiences without fully absorbing any of them. Learning to stay with discomfort rather than seeking the next adventure is their growth edge.',
    loveStyle:
      'In love, Sagittarius needs freedom, honesty, and shared adventure. They fall for people who expand their worldview and challenge their assumptions. A Sagittarius partner is fun, generous, and fiercely independent — they need a relationship that enhances their life without constraining it. Their challenge is balancing their need for autonomy with the vulnerability that deep partnership requires.',
    careerStyle:
      'Sagittarius excels in careers that involve travel, education, publishing, philosophy, and cross-cultural work. They thrive as professors, travel writers, entrepreneurs, consultants, and coaches. They need variety and meaning in their work and will quickly disengage from roles that feel pointless or repetitive. Their enthusiasm makes them inspiring leaders, though follow-through can be inconsistent.',
    fortuneConnection:
      'Fortune readings for Sagittarius often highlight themes of timing and commitment. Your optimism is an asset, but the reading helps surface when that optimism is masking avoidance. The general and career categories tend to provide the most grounding insights for this sign\'s expansive energy.',
  },
  capricorn: {
    element: 'Earth',
    quality: 'Cardinal',
    rulingPlanet: 'Saturn',
    symbol: 'The Sea-Goat',
    strengths: ['Disciplined and responsible', 'Strategic long-term thinker', 'Quietly ambitious', 'Reliable under pressure'],
    challenges: ['Can prioritise work over relationships', 'Difficulty asking for help', 'Tendency to suppress emotions', 'May equate self-worth with achievement'],
    overview:
      'Capricorn is the zodiac\'s builder — disciplined, strategic, and quietly relentless in pursuit of their goals. This earth sign understands that meaningful achievement requires time, effort, and sacrifice. Where other signs dream, Capricorn plans. Where others start, Capricorn finishes. Their ambition isn\'t flashy — it\'s the steady, measured kind that produces lasting results.',
    personality:
      'Capricorn individuals are often described as old souls. They carry a maturity and seriousness that can seem intimidating, but beneath the composed exterior is a dry wit and a deep capacity for loyalty. Capricorn doesn\'t open up easily, but when they do, their warmth is genuine and enduring. Their challenge is learning that productivity isn\'t the only measure of a day\'s worth, and that rest is not the same as laziness.',
    loveStyle:
      'In relationships, Capricorn is loyal, dependable, and deeply committed. They show love through stability and long-term investment rather than grand romantic gestures. They need a partner who respects their ambition while gently reminding them that connection matters as much as achievement. A Capricorn in love is protective, practical, and surprisingly tender once their guard comes down.',
    careerStyle:
      'Capricorn thrives in careers that offer structure, progression, and tangible results. Management, finance, law, architecture, engineering, and government are natural fits. They excel at climbing organisational hierarchies through competence and persistence. Their challenge is delegating and trusting others to maintain their standards.',
    fortuneConnection:
      'Your fortune readings as a Capricorn often surface the tension between ambition and wellbeing. The mental health and financial categories tend to be most revealing, helping you see where discipline has tipped into rigidity. Pay attention to the "opportunity" section — Capricorn sometimes needs permission to pursue something that doesn\'t look productive on paper.',
  },
  aquarius: {
    element: 'Air',
    quality: 'Fixed',
    rulingPlanet: 'Uranus',
    symbol: 'The Water Bearer',
    strengths: ['Original and independent thinker', 'Humanitarian and progressive', 'Intellectually fearless', 'Values authenticity over convention'],
    challenges: ['Can seem emotionally detached', 'Stubbornness disguised as open-mindedness', 'Difficulty with intimacy and vulnerability', 'May prioritise ideas over people\'s feelings'],
    overview:
      'Aquarius is the zodiac\'s visionary — independent, innovative, and deeply concerned with the collective good. This air sign thinks in systems and futures, often seeing possibilities that others won\'t recognise for years. Aquarius isn\'t contrarian for its own sake — they genuinely believe that progress requires questioning assumptions and challenging the status quo.',
    personality:
      'Aquarius individuals are characterised by their intellectual independence and their commitment to authenticity. They would rather be respected than liked and will cheerfully stand alone on a position they believe is right. This independence can sometimes read as aloofness, but Aquarius cares deeply — they just express it through ideas and actions rather than emotional displays. Their challenge is learning that emotional connection requires vulnerability, not just intellectual alignment.',
    loveStyle:
      'In love, Aquarius needs intellectual connection, personal space, and a partner who has their own life and interests. They\'re attracted to originality and repelled by possessiveness. An Aquarius partner is loyal, stimulating, and deeply supportive of their partner\'s individuality. Their challenge is letting emotional walls down — they can intellectualise feelings rather than actually feeling them.',
    careerStyle:
      'Aquarius thrives in careers that involve innovation, technology, social impact, and systemic change. Tech, science, nonprofit work, urban planning, and creative industries are natural fits. They work best in non-hierarchical environments where ideas matter more than titles. Their originality is an asset, but they can struggle with practical implementation.',
    fortuneConnection:
      'Fortune readings for Aquarius often highlight the gap between thinking and feeling. The love and mental health categories tend to surface emotional patterns that your intellectual nature might overlook. Your readings may sometimes feel uncomfortably personal — that\'s usually a sign they\'ve hit something true.',
  },
  pisces: {
    element: 'Water',
    quality: 'Mutable',
    rulingPlanet: 'Neptune',
    symbol: 'The Fish',
    strengths: ['Deeply empathetic and compassionate', 'Richly imaginative and creative', 'Intuitive understanding of others', 'Ability to find beauty in everything'],
    challenges: ['Can absorb others\' emotions as their own', 'Tendency toward escapism when overwhelmed', 'Difficulty with practical details and boundaries', 'May idealise people and situations'],
    overview:
      'Pisces is the zodiac\'s dreamer — empathetic, creative, and connected to emotional undercurrents that others can\'t perceive. As the final sign, Pisces carries a little of every sign that came before, giving them an almost universal ability to understand and connect with different types of people. This water sign lives in the space between reality and imagination, finding meaning in art, music, nature, and human connection.',
    personality:
      'Pisces individuals are characterised by their emotional porosity — they absorb the feelings of those around them, which gives them extraordinary empathy but can also be exhausting. They are the friend who cries during your story, the artist who channels collective pain into beauty, and the healer who intuitively knows what you need before you say it. Their challenge is maintaining boundaries between their own emotions and the emotional weight of the world around them.',
    loveStyle:
      'In love, Pisces is romantic, devoted, and deeply emotionally available. They love with a selflessness that can be beautiful but sometimes self-destructive. A Pisces partner creates a world of intimacy and tenderness, but they need a partner who won\'t take advantage of their giving nature. Their challenge is maintaining a clear sense of self within a relationship and not losing themselves in their partner\'s needs.',
    careerStyle:
      'Pisces thrives in careers that involve creativity, healing, and emotional depth. Music, visual arts, therapy, nursing, spiritual guidance, and film are natural fits. They struggle in rigid corporate environments but flourish when given creative freedom and a sense of purpose. Their intuition makes them excellent at reading client needs and creating work that resonates emotionally.',
    fortuneConnection:
      'Your fortune readings as a Pisces often validate feelings you\'ve been sensing but couldn\'t articulate. The mental health and love categories are particularly powerful for this sign, helping you distinguish between your own emotions and those you\'ve absorbed from others. Trust the reading when it suggests rest — Pisces tends to give until there\'s nothing left.',
  },
};
