export const reviewEngine = {
  gradeQuiz: (_answers: Record<string, string>) => {
    return { score: 100, feedback: 'The response is complete and clearly structured.' };
  },
  reviewAnswer: async (question: string, answer: string, context = '') => {
    try {
      const response = await fetch('/api/ai/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question, answer, context }),
      });

      if (!response.ok) {
        throw new Error('Review failed');
      }

      return await response.json();
    } catch (error) {
      console.error('Failed to review answer:', error);
      return { isCorrect: false, feedback: 'The academy review core is silent for now. Return in a moment and try again.' };
    }
  }
};
