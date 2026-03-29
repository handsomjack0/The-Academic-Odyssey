export const hintEngine = {
  getHint: async (question: string, context: string) => {
    try {
      const response = await fetch('/api/ai/hint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question, context }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch hint');
      }

      const data = await response.json();
      return data.hint;
    } catch (error) {
      console.error('Failed to fetch hint:', error);
      return 'The academy lens is quiet for the moment. Try summoning a hint again shortly.';
    }
  }
};
