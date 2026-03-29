import { GoogleGenAI } from '@google/genai';
import { normalizeHintOutput, normalizePlanOutput, normalizeReviewOutput } from '../normalize.ts';
import { buildHintPrompt, buildPlanPrompt, buildReviewPrompt } from '../prompts.ts';
import type { AiProvider, AiTaskModels } from '../types.ts';

export function createGeminiProvider(config: {
  apiKey?: string;
  models: AiTaskModels;
}): AiProvider {
  return {
    async generatePlan(topic, currentLevel, context) {
      const ai = getClient(config.apiKey);
      const response = await ai.models.generateContent({
        model: config.models.plan,
        contents: buildPlanPrompt(topic, currentLevel, context),
        config: { responseMimeType: 'application/json' },
      });

      return normalizePlanOutput(response.text ?? '');
    },

    async generateHint(question, context) {
      const ai = getClient(config.apiKey);
      const response = await ai.models.generateContent({
        model: config.models.hint,
        contents: buildHintPrompt(question, context),
      });

      return normalizeHintOutput(response.text ?? '');
    },

    async reviewAnswer(question, answer, context) {
      const ai = getClient(config.apiKey);
      const response = await ai.models.generateContent({
        model: config.models.review,
        contents: buildReviewPrompt(question, answer, context),
        config: { responseMimeType: 'application/json' },
      });

      return normalizeReviewOutput(response.text ?? '');
    },
  };
}

function getClient(apiKey?: string) {
  if (!apiKey) {
    throw new Error('Missing GEMINI_API_KEY');
  }

  return new GoogleGenAI({ apiKey });
}
