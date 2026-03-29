export const planEngine = {
  generatePlan: async (topic: string, currentLevel: number, context = '') => {
    try {
      const response = await fetch('/api/ai/plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic, currentLevel, context }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate study blueprint');
      }

      const data = await response.json();
      return data.plan;
    } catch (error) {
      console.error('Failed to generate study blueprint:', error);
      return [];
    }
  },
};
