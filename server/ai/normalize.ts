import type { PlanItem, ReviewResult } from './types';

const fallbackReview: ReviewResult = {
  isCorrect: false,
  feedback: 'The academy review core is silent for now. Return in a moment and try again.',
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function coerceString(value: unknown, fallback = ''): string {
  return typeof value === 'string' ? value.trim() : fallback;
}

// 中文说明：模型输出经常带有 markdown code fences 或额外包裹文本，这里先做轻量清洗，
// 避免 route handler 里直接 JSON.parse 导致不可控异常。
export function extractJsonPayload(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return '';

  const fencedMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const candidate = fencedMatch?.[1]?.trim() ?? trimmed;

  const arrayStart = candidate.indexOf('[');
  const objectStart = candidate.indexOf('{');
  const start =
    arrayStart === -1 ? objectStart : objectStart === -1 ? arrayStart : Math.min(arrayStart, objectStart);

  if (start === -1) return candidate;

  const arrayEnd = candidate.lastIndexOf(']');
  const objectEnd = candidate.lastIndexOf('}');
  const end = Math.max(arrayEnd, objectEnd);

  return end > start ? candidate.slice(start, end + 1) : candidate.slice(start);
}

export function normalizePlanOutput(raw: unknown): PlanItem[] {
  const parsed = typeof raw === 'string' ? safeParseJson(raw) : raw;
  const items = Array.isArray(parsed)
    ? parsed
    : isRecord(parsed) && Array.isArray(parsed.plan)
      ? parsed.plan
      : isRecord(parsed) && Array.isArray(parsed.items)
        ? parsed.items
        : isRecord(parsed) && Array.isArray(parsed.steps)
          ? parsed.steps
          : null;

  if (!Array.isArray(items)) {
    if (typeof raw === 'string') {
      return normalizePlanFromPlainText(raw);
    }
    return [];
  }

  return items
    .map((item) => {
      if (!isRecord(item)) return null;
      const title = coerceString(item.title);
      const description = coerceString(item.description);
      if (!title || !description) return null;
      return { title, description };
    })
    .filter((item): item is PlanItem => item !== null);
}

export function normalizeHintOutput(raw: unknown): string {
  if (typeof raw !== 'string') return '';

  const trimmed = raw.trim();
  if (!trimmed) return '';

  const unfenced = trimmed.replace(/```(?:text|markdown)?\s*([\s\S]*?)```/i, '$1').trim();
  const unquoted = unfenced.replace(/^["'`\s]+|["'`\s]+$/g, '').trim();
  return unquoted;
}

export function normalizeReviewOutput(raw: unknown): ReviewResult {
  const parsed = typeof raw === 'string' ? safeParseJson(raw) : raw;
  if (!isRecord(parsed)) return fallbackReview;

  return {
    isCorrect: typeof parsed.isCorrect === 'boolean' ? parsed.isCorrect : false,
    feedback: coerceString(parsed.feedback, fallbackReview.feedback),
  };
}

export function safeParseJson(raw: string): unknown {
  const candidate = extractJsonPayload(raw);
  if (!candidate) return null;

  try {
    return JSON.parse(candidate);
  } catch {
    return null;
  }
}

export function getFallbackReview(): ReviewResult {
  return fallbackReview;
}

function normalizePlanFromPlainText(raw: string): PlanItem[] {
  const lines = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const items: PlanItem[] = [];

  for (const line of lines) {
    const cleaned = line.replace(/^[-*•\d.)\s]+/, '').trim();
    const parts = cleaned.split(/\s[-:]\s|:\s/);
    if (parts.length < 2) continue;

    const [first, ...rest] = parts;
    const title = first?.trim() ?? '';
    const description = rest.join(': ').trim();
    if (!title || !description) continue;

    items.push({ title, description });
  }

  return items;
}
