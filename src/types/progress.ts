export interface UserProgress {
  userId: string;
  level: number;
  xp: number;
  mana: number;
  studyEnergy: number;
  skillPoints: number;
  unlockedQuests: string[];
  completedTasks: string[];
  completedQuests: string[];
  unlockedConstellationNodes: string[];
  currentPathId: string | null;
  currentPlanTopic: string | null;
  recommendedMethod: string | null;
  badges: string[];
  streak: number;
  lastActiveDate: string | null;
}
