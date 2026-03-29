import { createGeminiProvider } from './providers/gemini.ts';
import { createMinimaxProvider } from './providers/minimax.ts';
import { getFallbackReview } from './normalize.ts';
import type { AiProvider, AiProviderName, AiTaskInput, AiTaskModels, PlanItem, ReviewResult } from './types.ts';

const defaultGeminiModel = 'gemini-2.5-flash';
const defaultMinimaxModel = 'MiniMax-M2.7';

export function createAiProvider(env: NodeJS.ProcessEnv = process.env): AiProvider {
  const config = resolveAiConfig(env);
  const provider = config.provider === 'minimax'
    ? createMinimaxProvider({
        apiKey: config.minimaxApiKey,
        baseUrl: config.minimaxBaseUrl,
        models: config.models,
      })
    : createGeminiProvider({
        apiKey: config.geminiApiKey,
        models: config.models,
      });

  // 中文说明：统一在 provider 边界做兜底，保证 route handler 不需要关心具体模型异常。
  return {
    async generatePlan(topic: string, currentLevel: number, context: string): Promise<PlanItem[]> {
      try {
        return await provider.generatePlan(topic, currentLevel, context);
      } catch (error) {
        console.error('AI plan provider error:', error);
        return [];
      }
    },
    async generateHint(question: string, context: string): Promise<string> {
      try {
        return await provider.generateHint(question, context);
      } catch (error) {
        console.error('AI hint provider error:', error);
        return 'The academy lens is quiet for the moment. Try summoning a hint again shortly.';
      }
    },
    async reviewAnswer(question: string, answer: string, context: string): Promise<ReviewResult> {
      try {
        return await provider.reviewAnswer(question, answer, context);
      } catch (error) {
        console.error('AI review provider error:', error);
        return getFallbackReview();
      }
    },
  };
}

export function resolveAiConfig(env: NodeJS.ProcessEnv = process.env) {
  const provider = normalizeProviderName(env.AI_PROVIDER);
  const baseModel = provider === 'minimax' ? defaultMinimaxModel : defaultGeminiModel;

  return {
    provider,
    geminiApiKey: env.GEMINI_API_KEY,
    minimaxApiKey: env.MINIMAX_API_KEY,
    minimaxBaseUrl: env.MINIMAX_BASE_URL,
    models: {
      plan: env.AI_MODEL_PLAN || baseModel,
      hint: env.AI_MODEL_HINT || baseModel,
      review: env.AI_MODEL_REVIEW || baseModel,
    } satisfies AiTaskModels,
  };
}

export function normalizeProviderName(value: string | undefined): AiProviderName {
  return value?.toLowerCase() === 'gemini' ? 'gemini' : 'minimax';
}

export function validateAiTaskInput(input: AiTaskInput) {
  const topic = normalizeInputString(input.topic, 200);
  const question = normalizeInputString(input.question, 500);
  const context = normalizeInputString(input.context, 4000);
  const answer = normalizeInputString(input.answer, 4000);
  const currentLevel =
    typeof input.currentLevel === 'number' && Number.isFinite(input.currentLevel)
      ? Math.max(1, Math.min(100, Math.floor(input.currentLevel)))
      : 1;

  return {
    topic,
    question,
    context,
    answer,
    currentLevel,
  };
}

function normalizeInputString(value: string | undefined, maxLength: number) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}
