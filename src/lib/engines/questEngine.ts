import { useProgressStore } from '../../store/useProgressStore';
import { Quest, SkillPath } from '../../types/skill';

export const questEngine = {
  isTaskCompleted: (taskId: string) => {
    return useProgressStore.getState().completedTasks.includes(taskId);
  },
  isQuestCompleted: (questId: string) => {
    return useProgressStore.getState().completedQuests.includes(questId);
  },
  isQuestUnlocked: (questId: string) => {
    return useProgressStore.getState().unlockedQuests.includes(questId);
  },
  getQuestProgress: (quest: Quest) => {
    const completedTasks = quest.tasks.filter(t => questEngine.isTaskCompleted(t.id));
    return quest.tasks.length === 0 ? 0 : (completedTasks.length / quest.tasks.length) * 100;
  },
  checkUnlocks: (path: SkillPath) => {
    const state = useProgressStore.getState();
    const completedQuests = state.completedQuests;
    
    path.quests.forEach(quest => {
      if (!state.unlockedQuests.includes(quest.id)) {
        const canUnlock = quest.prerequisites.every(pre => completedQuests.includes(pre));
        if (canUnlock) {
          state.unlockQuest(quest.id);
        }
      }
    });
  }
};
