type PlannerContextInput = {
  currentPathId: string | null;
  recommendedMethod: string | null;
};

type TrialContextInput = {
  taskId?: string;
  recommendedMethod: string | null;
  referenceConcept: string;
};

export function buildPlannerLearningContext(input: PlannerContextInput) {
  return [
    `Current academy path: ${input.currentPathId ?? 'General scholarship route'}`,
    `Preferred study method: ${input.recommendedMethod ?? 'deep-work'}`,
    'Goal type: exam preparation inside a gamified academic quest system.',
    'Preferred output style: a weekly route with foundations, practice, milestones, and final review.',
  ].join(' ');
}

export function buildTrialLearningContext(input: TrialContextInput) {
  return [
    'Course focus: Neural Networks.',
    'Current chamber: Alchemist Trial.',
    `Task identifier: ${input.taskId ?? 'unknown-task'}.`,
    `Recommended study method: ${input.recommendedMethod ?? 'alchemist-trial'}.`,
    `Reference concept: ${input.referenceConcept}`,
  ].join(' ');
}
