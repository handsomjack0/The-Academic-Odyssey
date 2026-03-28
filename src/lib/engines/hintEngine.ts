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
        throw new Error('Failed to get hint');
      }
      
      const data = await response.json();
      return data.hint;
    } catch (error) {
      console.error('Error getting hint:', error);
      return 'The oracle is currently silent. Try again later.';
    }
  }
};
