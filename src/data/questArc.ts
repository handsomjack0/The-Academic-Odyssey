export const neuralQuest = {
  id: 'neural-network',
  title: 'Chapter I: Foundations of Neural Networks',
  summary:
    'The chamber records every seal of the current expedition, from the first quiz to the final stretch of guided practice.',
  progress: 30,
  chapterReward: '100 XP',
  insightGain: '+2 INT',
  mentorHint: 'Trace the movement of error through backpropagation as if every adjustment were a visible mechanism.',
  tasks: [
    { id: 'nn-q1-t1', title: 'Complete Quiz I', xp: 50, type: 'quiz', stat: '+1 Insight' },
    { id: 'nn-q1-t2', title: 'Watch the Lecture Archive', xp: 50, type: 'video', stat: '+1 Insight' },
    { id: 'nn-q1-t3', title: 'Read Section 1.2', xp: 50, type: 'reading', stat: '+1 Insight' },
    { id: 'nn-q1-t4', title: 'Finish the Practice Set', xp: 50, type: 'practice', stat: '+1 Insight' },
  ],
} as const;

export const studyMethodRoutes: Record<string, 'deep-work' | 'alchemist-trial'> = {
  'deep-work': 'deep-work',
  'alchemist-trial': 'alchemist-trial',
  social: 'deep-work',
  research: 'deep-work',
};

export const studyMethodCopy: Record<string, { summary: string; yield: string; note: string }> = {
  'deep-work': {
    summary: 'A silent descent into a single chapter. Use this route when uninterrupted absorption matters more than speed.',
    yield: 'Calm retention and stronger conceptual endurance.',
    note: 'Best before a major reading block or concept reconstruction.',
  },
  'alchemist-trial': {
    summary: 'A pressure chamber for speed. The academy measures your clarity under time and rewards decisive command.',
    yield: 'Fast feedback and accelerated correction.',
    note: 'Best when the chapter is familiar and you need a hard test.',
  },
  social: {
    summary: 'Advance the route through shared reasoning, comparison, and guild-like exchange between scholars.',
    yield: 'Collective insight and broader perspective.',
    note: 'Best when the route benefits from discussion and alternate views.',
  },
  research: {
    summary: 'A chronicler path focused on references, annotations, and long-form synthesis before you return to the quest.',
    yield: 'Deep context and stronger written articulation.',
    note: 'Best when the concept needs historical or theoretical framing.',
  },
};

export const deepStudyAmbienceOptions = ['Rainy Library', 'Cosmic Hum', 'Lo-Fi Lute'] as const;

export const neuralReadingPassages = [
  'The perceptron is the smallest oath in the language of neural networks. It receives signals, weighs them, sums them, and decides whether the pattern before it should awaken or remain silent.',
  'Activation functions keep the route from collapsing into plain arithmetic. They bend the path so the network can describe thresholds, shape transitions, and the surprising curves hidden inside the data.',
  'Backpropagation is the academy’s mechanism of revision. Error moves backward through the chain, and each parameter is adjusted with the discipline of an engraver refining brass.',
];

export const alchemistTrialContent = {
  question: 'What is a perceptron in a neural network?',
  referenceContext:
    'A perceptron is a foundational neural unit that weights inputs, sums them, and produces a simple decision or output signal.',
} as const;

export const completionRewards = [
  {
    title: '+500 XP',
    subtitle: 'The completed chapter deposits new experience into your scholarly route.',
  },
  {
    title: 'Ancient Scroll',
    subtitle: 'Deep Learning Basics has been added to your archive of unlocked knowledge.',
  },
  {
    title: '+10 Reputation',
    subtitle: 'The guild records this completed chamber as a visible mark of trust.',
  },
] as const;
