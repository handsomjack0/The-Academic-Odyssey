import { normalizeHintOutput, normalizePlanOutput, normalizeReviewOutput } from '../normalize.ts';
import { buildHintPrompt, buildPlanPrompt, buildReviewPrompt } from '../prompts.ts';
import type { AiProvider, AiTaskModels } from '../types.ts';

type MinimaxChatResponse = {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
};

type MinimaxAnthropicResponse = {
  content?: Array<{
    type?: string;
    text?: string;
  }>;
};

export function createMinimaxProvider(config: {
  apiKey?: string;
  baseUrl?: string;
  models: AiTaskModels;
}): AiProvider {
  const apiKey = config.apiKey;
  const requestMode = getMinimaxRequestMode(apiKey);
  const baseUrl = resolveMinimaxBaseUrl(config.baseUrl, requestMode);

  return {
    async generatePlan(topic, currentLevel, context) {
      const content = await callMinimax(baseUrl, apiKey, requestMode, config.models.plan, buildPlanPrompt(topic, currentLevel, context), true);
      return normalizePlanOutput(content);
    },

    async generateHint(question, context) {
      const content = await callMinimax(baseUrl, apiKey, requestMode, config.models.hint, buildHintPrompt(question, context), false);
      return normalizeHintOutput(content);
    },

    async reviewAnswer(question, answer, context) {
      const content = await callMinimax(baseUrl, apiKey, requestMode, config.models.review, buildReviewPrompt(question, answer, context), true);
      return normalizeReviewOutput(content);
    },
  };
}

async function callMinimax(
  baseUrl: string,
  apiKey: string | undefined,
  requestMode: 'token-plan' | 'api-key',
  model: string,
  prompt: string,
  expectJson: boolean,
) {
  if (!apiKey) {
    throw new Error('Missing MINIMAX_API_KEY');
  }

  const response = requestMode === 'token-plan'
    ? await fetch(`${baseUrl}/v1/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'anthropic-version': '2023-06-01',
          'x-api-key': apiKey,
        },
        body: JSON.stringify({
          model,
          system: expectJson
            ? 'You are a precise academic planning engine. Follow the output format exactly.'
            : 'You are a concise academic mentor. Always return useful plain-English guidance.',
          max_tokens: expectJson ? 900 : 450,
          temperature: expectJson ? 0.2 : 0.6,
          messages: [
            {
              role: 'user',
              content: [
                {
                  type: 'text',
                  text: prompt,
                },
              ],
            },
          ],
        }),
      })
    : await fetch(`${baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: [
            {
              role: 'user',
              content: prompt,
            },
          ],
          temperature: expectJson ? 0.2 : 0.6,
          response_format: expectJson ? { type: 'json_object' } : undefined,
        }),
      });

  if (!response.ok) {
    throw new Error(`MiniMax request failed with status ${response.status}`);
  }

  if (requestMode === 'token-plan') {
    const data = (await response.json()) as MinimaxAnthropicResponse;
    return data.content
      ?.filter((item) => typeof item.text === 'string')
      .map((item) => item.text?.trim() ?? '')
      .filter(Boolean)
      .join('\n') ?? '';
  }

  const data = (await response.json()) as MinimaxChatResponse;
  return data.choices?.[0]?.message?.content ?? '';
}

function getMinimaxRequestMode(apiKey: string | undefined) {
  return apiKey?.startsWith('sk-cp-') ? 'token-plan' : 'api-key';
}

function resolveMinimaxBaseUrl(baseUrl: string | undefined, requestMode: 'token-plan' | 'api-key') {
  // 中文注释：Token Plan 在国内控制台默认对应 minimaxi.com 域名；优先贴合用户当前控制台环境。
  const fallback = requestMode === 'token-plan' ? 'https://api.minimaxi.com/anthropic' : 'https://api.minimax.io/v1';
  return (baseUrl ?? fallback).replace(/\/$/, '');
}
