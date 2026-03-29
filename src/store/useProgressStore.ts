import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserProgress } from '../types/progress';

interface ProgressState extends UserProgress {
  addXp: (amount: number) => void;
  completeTask: (taskId: string) => void;
  completeQuest: (questId: string) => void;
  unlockQuest: (questId: string) => void;
  setCurrentPath: (pathId: string) => void;
  unlockConstellationNode: (nodeId: string) => void;
  setCurrentPlanTopic: (topic: string) => void;
  setRecommendedMethod: (methodId: string) => void;
  login: (userId: string) => void;
  logout: () => void;
}

const initialState: UserProgress = {
  userId: '',
  level: 12,
  xp: 2450,
  mana: 82,
  studyEnergy: 80,
  skillPoints: 450,
  unlockedQuests: ['nn-q1'],
  completedTasks: ['nn-q1-t1', 'nn-q1-t4'],
  completedQuests: [],
  unlockedConstellationNodes: [
    'quantum-foundations',
    'machine-learning-basics',
    'rhetoric-oratory',
    'ancient-scripts',
    'digital-composition',
    'music-theory',
  ],
  currentPathId: null,
  currentPlanTopic: 'Final Exam: Neural Networks',
  recommendedMethod: 'deep-work',
  badges: ['Perceptron Pioneer', 'Night Watch Scholar', 'Workshop Collaborator'],
  streak: 5,
  lastActiveDate: null,
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      ...initialState,
      addXp: (amount) =>
        set((state) => {
          const newXp = state.xp + amount;
          const newLevel = Math.floor(newXp / 1000) + 1;
          return { xp: newXp, level: newLevel };
        }),
      completeTask: (taskId) =>
        set((state) => ({
          completedTasks: [...new Set([...state.completedTasks, taskId])],
          xp: state.xp + 50,
          skillPoints: state.skillPoints + 10,
        })),
      completeQuest: (questId) =>
        set((state) => ({
          completedQuests: [...new Set([...state.completedQuests, questId])],
        })),
      unlockQuest: (questId) =>
        set((state) => ({
          unlockedQuests: [...new Set([...state.unlockedQuests, questId])],
        })),
      setCurrentPath: (pathId) => set({ currentPathId: pathId }),
      unlockConstellationNode: (nodeId) =>
        set((state) => ({
          unlockedConstellationNodes: [...new Set([...state.unlockedConstellationNodes, nodeId])],
        })),
      setCurrentPlanTopic: (topic) => set({ currentPlanTopic: topic }),
      setRecommendedMethod: (methodId) => set({ recommendedMethod: methodId }),
      login: (userId) => set({ ...initialState, userId }),
      logout: () => set(initialState),
    }),
    {
      name: 'academic-odyssey-storage',
    }
  )
);
