export interface Task {
  id: string;
  title: string;
  xp: number;
  type: 'quiz' | 'video' | 'reading' | 'practice';
  completed?: boolean;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  prerequisites: string[];
  tasks: Task[];
  reward: {
    xp: number;
    item?: string;
    badge?: string;
  };
}

export interface SkillPath {
  id: string;
  name: string;
  category: 'STEM' | 'Humanities' | 'Arts';
  quests: Quest[];
}
