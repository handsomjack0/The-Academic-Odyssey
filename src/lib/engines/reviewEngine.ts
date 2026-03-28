export const reviewEngine = {
  gradeQuiz: (answers: Record<string, string>) => {
    return { score: 100, feedback: "Perfect!" };
  },
  reviewAnswer: async (question: string, answer: string) => {
    try {
      const response = await fetch('/api/ai/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question, answer }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to review answer');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error reviewing answer:', error);
      return { isCorrect: false, feedback: 'Error connecting to the oracle.' };
    }
  }
};
