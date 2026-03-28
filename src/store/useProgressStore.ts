import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserProgress } from '../types/progress';

interface ProgressState extends UserProgress {
  addXp: (amount: number) => void;
  completeTask: (taskId: string) => void;
  completeQuest: (questId: string) => void;
  unlockQuest: (questId: string) => void;
  setCurrentPath: (pathId: string) => void;
  login: (userId: string) => void;
  logout: () => void;
}

const initialState: UserProgress = {
  userId: '',
  level: 1,
  xp: 0,
  mana: 100,
  studyEnergy: 80,
  unlockedQuests: ['nn-q1'],
  completedTasks: [],
  completedQuests: [],
  currentPathId: null,
  badges: [],
  streak: 0,
  lastActiveDate: null,
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      ...initialState,
      addXp: (amount) => set((state) => {
        const newXp = state.xp + amount;
        const newLevel = Math.floor(newXp / 1000) + 1;
        return { xp: newXp, level: newLevel };
      }),
      completeTask: (taskId) => set((state) => ({
        completedTasks: [...new Set([...state.completedTasks, taskId])]
      })),
      completeQuest: (questId) => set((state) => ({
        completedQuests: [...new Set([...state.completedQuests, questId])]
      })),
      unlockQuest: (questId) => set((state) => ({
        unlockedQuests: [...new Set([...state.unlockedQuests, questId])]
      })),
      setCurrentPath: (pathId) => set({ currentPathId: pathId }),
      login: (userId) => set({ ...initialState, userId }),
      logout: () => set(initialState),
    }),
    {
      name: 'academic-odyssey-storage',
    }
  )
);
