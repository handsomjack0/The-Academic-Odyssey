import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/demo-login", (req, res) => {
    // Mock login
    res.json({ success: true, user: { id: "user-1", name: "Demo User" } });
  });

  app.post("/api/ai/plan", async (req, res) => {
    try {
      const { topic, currentLevel } = req.body;
      const prompt = `Create a learning plan for ${topic} for a student at level ${currentLevel}. Format as a JSON array of objects with 'title' and 'description'.`;
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        }
      });
      
      res.json({ plan: JSON.parse(response.text || "[]") });
    } catch (error) {
      console.error("AI Plan Error:", error);
      res.status(500).json({ error: "Failed to generate plan" });
    }
  });

  app.post("/api/ai/hint", async (req, res) => {
    try {
      const { question, context } = req.body;
      const prompt = `Provide a helpful hint for the following question, without giving away the exact answer. Context: ${context}. Question: ${question}`;
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });
      
      res.json({ hint: response.text });
    } catch (error) {
      console.error("AI Hint Error:", error);
      res.status(500).json({ error: "Failed to generate hint" });
    }
  });

  app.post("/api/ai/review", async (req, res) => {
    try {
      const { answer, question } = req.body;
      const prompt = `Review the following answer to the question. Is it correct? Provide feedback. Question: ${question}. Answer: ${answer}. Format as JSON with 'isCorrect' (boolean) and 'feedback' (string).`;
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        }
      });
      
      res.json(JSON.parse(response.text || "{}"));
    } catch (error) {
      console.error("AI Review Error:", error);
      res.status(500).json({ error: "Failed to review answer" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
