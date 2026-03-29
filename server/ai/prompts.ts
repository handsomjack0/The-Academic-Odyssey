// 中文说明：统一管理提示词，避免 provider 适配层和路由层重复拼接文案。
// 这里保持任务意图稳定，后续切换模型时不需要改动接口行为。

export function buildPlanPrompt(topic: string, currentLevel: number, context: string) {
  return [
    'You are an academic mentor inside a gamified learning system.',
    'Create a concise study blueprint for self-study.',
    `Topic: ${topic}`,
    `Current Level: ${currentLevel}`,
    context ? `Learning Context: ${context}` : '',
    'Return ONLY valid JSON.',
    'Do not add markdown, code fences, explanation, or extra commentary.',
    "Return a JSON array. Each item must be an object with exactly two string fields: 'title' and 'description'.",
    'Create 4 to 6 steps.',
    'Keep each step practical, sequential, and suitable for self-study inside an academic quest system.',
    'Use action-oriented titles and include concrete study actions, practice, and consolidation.',
    'Example format: [{"title":"Week 1 Foundations","description":"Review the perceptron, weights, bias, and activation basics."}]',
  ]
    .filter(Boolean)
    .join('\n');
}

export function buildHintPrompt(question: string, context: string) {
  return [
    'You are an academic mentor giving a helpful study hint.',
    'Do not reveal the exact answer.',
    `Context: ${context}`,
    `Question: ${question}`,
    'Return one concise hint in plain English.',
    'Use 1 or 2 sentences only.',
    'Do not say you cannot help. Do not return empty text.',
  ].join('\n');
}

export function buildReviewPrompt(question: string, answer: string, context: string) {
  return [
    'You are an academic reviewer.',
    'Evaluate whether the answer is correct enough for the question.',
    `Question: ${question}`,
    `Answer: ${answer}`,
    context ? `Learning Context: ${context}` : '',
    "Return valid JSON with 'isCorrect' (boolean) and 'feedback' (string).",
    'Feedback should be concise, specific, and written in English.',
    'If the answer is incomplete, explain the missing idea and suggest the next correction step in the same feedback string.',
  ]
    .filter(Boolean)
    .join('\n');
}
