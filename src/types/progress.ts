export interface UserProgress {
  userId: string;
  level: number;
  xp: number;
  mana: number;
  studyEnergy: number;
  unlockedQuests: string[];
  completedTasks: string[];
  completedQuests: string[];
  currentPathId: string | null;
  badges: string[];
  streak: number;
  lastActiveDate: string | null;
}
