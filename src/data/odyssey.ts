export interface DashboardQuestItem {
  id: string;
  title: string;
  reward: string;
  progress: number;
}

export interface ShowcaseBook {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  accent: string;
}

export interface CourseCard {
  id: string;
  title: string;
  mentor: string;
  summary: string;
  progress: number;
  active?: boolean;
}

export interface PlannerNode {
  id: string;
  label: string;
  detail: string;
  x: number;
  y: number;
  tone: 'cyan' | 'gold';
}

export interface ConstellationNode {
  id: string;
  title: string;
  subtitle: string;
  x: number;
  y: number;
  state: 'unlocked' | 'locked' | 'active';
  group: 'stem' | 'humanities' | 'arts';
  connectsTo: string[];
}

export const dashboardQuestLog: DashboardQuestItem[] = [
  { id: 'week-5-assignment', title: 'Complete Week 5 Assignment', reward: '500 XP', progress: 74 },
  { id: 'lecture-200', title: 'Attend Lecture', reward: '200 XP', progress: 40 },
  { id: 'lecture-100-a', title: 'Attend Lecture', reward: '100 XP', progress: 25 },
  { id: 'lecture-100-b', title: 'Attend Lecture', reward: '100 XP', progress: 55 },
  { id: 'lecture-100-c', title: 'Attend Lecture', reward: '100 XP', progress: 35 },
];

export const libraryShowcase: ShowcaseBook[] = [
  {
    id: 'cyber-alchemy-principles',
    title: 'Cyber-Alchemy Principles',
    subtitle: 'The current main quest volume',
    summary: 'A guided path through perceptrons, gradients, and the mechanical logic of neural learning.',
    accent: '#68f1ff',
  },
  {
    id: 'quantum-arcana',
    title: 'Quantum Arcana',
    subtitle: 'Cross-disciplinary branch',
    summary: 'An elective route where scientific theory is framed as ritual systems and symbolic computation.',
    accent: '#f5d17c',
  },
  {
    id: 'mechanical-ethics',
    title: 'Mechanical Ethics',
    subtitle: 'Human systems and machine judgment',
    summary: 'A branch that studies responsibility, governance, and consequence in intelligent systems.',
    accent: '#95f2d9',
  },
];

export const courseCards: CourseCard[] = [
  { id: 'quantum-arcana', title: 'QUANTUM ARCANA', mentor: 'Guild Lecturer', summary: 'Interpret quantum systems through symbolic models and computational myth.', progress: 12 },
  { id: 'mechanical-ethics', title: 'MECHANICAL ETHICS', mentor: 'The Debate Hall', summary: 'Study responsibility, trust, and machine conduct across civic systems.', progress: 22 },
  { id: 'historical-data-mining', title: 'HISTORICAL DATA MINING', mentor: 'Chief Archivist', summary: 'Extract patterns and narratives from old records and modern evidence.', progress: 18 },
  { id: 'cybernetic-renaissance', title: 'CYBERNETIC RENAISSANCE', mentor: 'Design Atelier', summary: 'Explore the meeting point of narrative media, interfaces, and technical imagination.', progress: 6 },
  { id: 'neural-network', title: 'NEURAL NETWORKS', mentor: 'AI Hologram Sage Alistair Vance', summary: 'The current major route, focused on perceptrons, backpropagation, and practice trials.', progress: 35, active: true },
  { id: 'digital-development', title: 'DIGITAL DEVELOPMENT', mentor: 'Creation Workshop', summary: 'Turn concepts into artifacts through iterative making and reflective building.', progress: 15 },
  { id: 'editorial-management', title: 'EDITORIAL MANAGEMENT', mentor: 'Academy Council', summary: 'Develop organizational judgment, critique, and collaborative stewardship.', progress: 9 },
];

export const studyMethods = [
  { id: 'deep-work', title: 'The Void of Focus', subtitle: 'Deep Work', icon: 'hourglass', color: '#72efff' },
  { id: 'alchemist-trial', title: "The Alchemist's Trial", subtitle: 'Speed Learning', icon: 'flask', color: '#ff75d8' },
  { id: 'social', title: 'The Guild Expedition', subtitle: 'Social Study', icon: 'guild', color: '#f7cb67' },
  { id: 'research', title: "The Chronicler's Dive", subtitle: 'Deep Research', icon: 'scroll', color: '#8ef6ab' },
];

export const plannerConversation = [
  {
    role: 'AI SAGE',
    content: 'What is the focus of your scholarly endeavor?',
  },
  {
    role: 'STUDENT',
    content: 'Final Exam: Neural Networks.',
  },
  {
    role: 'AI SAGE',
    content: 'The theme is locked. I will compose a multi-week blueprint with foundations, trials, milestones, and final review.',
  },
];

export const plannerBlueprint: PlannerNode[] = [
  { id: 'week1a', label: 'Week 1', detail: 'Basics', x: 12, y: 52, tone: 'cyan' },
  { id: 'week1b', label: 'Week 1', detail: 'Activation Functions', x: 28, y: 32, tone: 'cyan' },
  { id: 'week3', label: 'Week 3', detail: 'Practice Quiz', x: 44, y: 20, tone: 'gold' },
  { id: 'milestone', label: 'Week 7', detail: 'Milestones', x: 66, y: 28, tone: 'gold' },
  { id: 'week6', label: 'Week 6', detail: 'Final Exam Drill', x: 76, y: 54, tone: 'cyan' },
  { id: 'exam', label: 'Oct 20', detail: 'Final Exam', x: 92, y: 48, tone: 'cyan' },
  { id: 'review', label: 'Week 9', detail: 'Practice Quiz', x: 58, y: 72, tone: 'cyan' },
  { id: 'boost', label: 'XP', detail: 'Boost Node', x: 36, y: 74, tone: 'gold' },
];

export const constellationNodes: ConstellationNode[] = [
  { id: 'quantum-foundations', title: 'QUANTUM FOUNDATIONS', subtitle: 'STEM', x: 12, y: 36, state: 'unlocked', group: 'stem', connectsTo: ['machine-learning-basics'] },
  { id: 'machine-learning-basics', title: 'MACHINE LEARNING BASICS', subtitle: 'STEM', x: 22, y: 48, state: 'unlocked', group: 'stem', connectsTo: ['neural-networks'] },
  { id: 'neural-networks', title: 'NEURAL NETWORKS', subtitle: 'STEM', x: 36, y: 42, state: 'active', group: 'stem', connectsTo: ['historical-analysis'] },
  { id: 'rhetoric-oratory', title: 'RHETORIC & ORATORY', subtitle: 'HUMANITIES', x: 44, y: 30, state: 'unlocked', group: 'humanities', connectsTo: ['historical-analysis'] },
  { id: 'ancient-scripts', title: 'ANCIENT SCRIPTS', subtitle: 'HUMANITIES', x: 54, y: 22, state: 'unlocked', group: 'humanities', connectsTo: ['historical-analysis'] },
  { id: 'historical-analysis', title: 'HISTORICAL ANALYSIS QUEST', subtitle: 'HUMANITIES', x: 56, y: 44, state: 'active', group: 'humanities', connectsTo: ['music-theory'] },
  { id: 'literary-criticism', title: 'LITERARY CRITICISM', subtitle: 'HUMANITIES', x: 50, y: 66, state: 'locked', group: 'humanities', connectsTo: [] },
  { id: 'philosophical-debates', title: 'PHILOSOPHICAL DEBATES', subtitle: 'HUMANITIES', x: 66, y: 68, state: 'locked', group: 'humanities', connectsTo: [] },
  { id: 'digital-composition', title: 'DIGITAL COMPOSITION', subtitle: 'ARTS', x: 80, y: 30, state: 'unlocked', group: 'arts', connectsTo: ['music-theory'] },
  { id: 'music-theory', title: 'MUSIC THEORY', subtitle: 'ARTS', x: 82, y: 46, state: 'active', group: 'arts', connectsTo: ['visual-design'] },
  { id: 'visual-design', title: 'VISUAL DESIGN', subtitle: 'ARTS', x: 90, y: 28, state: 'unlocked', group: 'arts', connectsTo: [] },
  { id: 'sculpture-fundamentals', title: 'SCULPTURE FUNDAMENTALS', subtitle: 'ARTS', x: 82, y: 72, state: 'locked', group: 'arts', connectsTo: [] },
];

export const footerLinks = ['Privacy Policy', 'Terms of Service', 'Support'];
