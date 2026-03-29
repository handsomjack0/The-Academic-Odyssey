import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { createAiProvider, validateAiTaskInput } from './server/ai/provider.ts';

dotenv.config();

const aiProvider = createAiProvider();

async function startServer() {
  const app = express();
  const port = 3000;

  app.use(express.json());

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  app.post('/api/demo-login', (_req, res) => {
    res.json({ success: true, user: { id: 'user-1', name: 'Demo User' } });
  });

  app.post('/api/ai/plan', async (req, res) => {
    const { topic, currentLevel, context } = validateAiTaskInput(req.body ?? {});
    if (!topic) {
      res.status(400).json({ error: 'Topic is required', plan: [] });
      return;
    }

    const plan = await aiProvider.generatePlan(topic, currentLevel, context);
    res.json({ plan });
  });

  app.post('/api/ai/hint', async (req, res) => {
    const { question, context } = validateAiTaskInput(req.body ?? {});
    if (!question) {
      res.status(400).json({ error: 'Question is required', hint: '' });
      return;
    }

    const hint = await aiProvider.generateHint(question, context);
    res.json({ hint });
  });

  app.post('/api/ai/review', async (req, res) => {
    const { question, answer, context } = validateAiTaskInput(req.body ?? {});
    if (!question || !answer) {
      res.status(400).json({
        error: 'Question and answer are required',
        isCorrect: false,
        feedback: 'The academy review core needs both the question and your answer before it can respond.',
      });
      return;
    }

    const review = await aiProvider.reviewAnswer(question, answer, context);
    res.json(review);
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

startServer();
