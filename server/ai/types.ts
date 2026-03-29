export type PlanItem = {
  title: string;
  description: string;
};

export type ReviewResult = {
  isCorrect: boolean;
  feedback: string;
};

export type AiTaskModels = {
  plan: string;
  hint: string;
  review: string;
};

export type AiProviderName = 'gemini' | 'minimax';

export type AiTaskInput = {
  topic?: string;
  currentLevel?: number;
  question?: string;
  context?: string;
  answer?: string;
};

export interface AiProvider {
  generatePlan(topic: string, currentLevel: number, context: string): Promise<PlanItem[]>;
  generateHint(question: string, context: string): Promise<string>;
  reviewAnswer(question: string, answer: string, context: string): Promise<ReviewResult>;
}
