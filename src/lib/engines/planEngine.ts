export const planEngine = {
  generatePlan: async (topic: string, currentLevel: number) => {
    try {
      const response = await fetch('/api/ai/plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic, currentLevel }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate plan');
      }
      
      const data = await response.json();
      return data.plan;
    } catch (error) {
      console.error('Error generating plan:', error);
      return [];
    }
  }
};
