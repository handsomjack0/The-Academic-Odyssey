# Academic Odyssey

![Status](https://img.shields.io/badge/status-early%20validated%20prototype-6C63FF?style=for-the-badge)
![AI](https://img.shields.io/badge/AI-LLM%20guided-00C2FF?style=for-the-badge)
![Learning](https://img.shields.io/badge/learning-quest%20based-F4B400?style=for-the-badge)
![UI](https://img.shields.io/badge/UI-polish%20in%20progress-FF6F61?style=for-the-badge)

Academic Odyssey is a scene-first edtech prototype that reframes study as a guided scholarly expedition.  
It combines quest-based learning flows, LLM-assisted study support, and a heritage-cyber visual system built around academic spaces rather than dashboard cards.

---

## Overview

This project is built around three ideas:

- quest-based learning instead of flat task management
- AI-guided planning, hinting, and review
- scene-led product design for an immersive academic experience

The current prototype includes:

- identity entry and journey gateway flows
- a Great Hall dashboard
- archive and research library routes
- an AI planning chamber
- a constellation-based growth route
- a complete quest arc:
  - quest details
  - study method selection
  - deep study
  - trial
  - completion

---

## Core Flow

Academic Odyssey turns study into a guided loop:

**goal → plan → quest → focused study → trial / review → progress feedback**

The intended user flow is:

1. define a study goal and current context  
2. receive an AI-generated learning plan  
3. enter the next quest step  
4. complete focused study or trial-based practice  
5. receive progress feedback and the next recommendation  

## 

### Scholar Login

<img src="https://pan.nova.zz.ac/public/file/BQACAgUAAyEGAATJBRGbAAIC_WnIyjCZ0OlC6FBg8Y9BDZvdGzjcAAKRIAACtbpIVsh1r5Csqg7mOgQ" alt="image.png" style="zoom:50%;" />

### Welcome Map

<img src="https://pan.nova.zz.ac/public/file/BQACAgUAAyEGAATJBRGbAAIC_mnIyrNaa3LF_zhSfQcG6fVTOm7sAAKSIAACtbpIVgn8v8RTH1rTOgQ" alt="image.png" style="zoom: 50%;" />

### Great Hall Dashboard

<img src="https://pan.nova.zz.ac/public/file/BQACAgUAAyEGAATJBRGbAAIC_2nIyzsGPVCTup0_DLV1IZ5P252xAAKTIAACtbpIVgSSXRqrlWB1OgQ" alt="image.png" style="zoom:50%;" />

### AI Planning Chamber

<img src="https://pan.nova.zz.ac/public/file/BQACAgUAAyEGAATJBRGbAAIC9mnIim3WY6Wt38kpjc1g6yB2CyyvAALIIwACtbpAVkiMIck5ob61OgQ" alt="image.png" style="zoom:50%;" />

### Quest Arc

<img src="https://pan.nova.zz.ac/public/file/BQACAgUAAyEGAATJBRGbAAIC-WnIivn-z0xYxnVC-PSUb1SqT0wvAALLIwACtbpAVm8EbQe7ykJFOgQ" alt="image.png" style="zoom:50%;" />

### Constellation Growth Route

![image.png](https://pan.nova.zz.ac/public/file/BQACAgUAAyEGAATJBRGbAAIC-mnIpCC1rkn-550RMAFsNMuYgLXxAAI0IAACtbpIVizoTNdf0GJSOgQ)

### Achievement Celebration

![image.png](https://pan.nova.zz.ac/public/file/BQACAgUAAyEGAATJBRGbAAIC92nIirOoPjFx0qXvW3IZl1l1-M4gAALJIwACtbpAVoZGa3VB7nC2OgQ)

---

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- Zustand
- Express
- Tailwind CSS v4
- Lucide icons
- Three.js / React Three Fiber

---

## Current Status

What is already in place:

- scene-first UI architecture
- route-group based shell and backdrop system
- centralized route, navigation, and quest content config
- AI provider abstraction
- MiniMax-first provider configuration

What still needs work:

- interface polish and consistency
- motion and transition refinement
- stronger visual alignment with the target experience

---

## AI Provider Configuration

The current backend supports provider-based AI integration through server-side endpoints:

- `POST /api/ai/plan`
- `POST /api/ai/hint`
- `POST /api/ai/review`

Supported provider values:

- `minimax`
- `gemini`

Environment variables:

- `AI_PROVIDER`
- `GEMINI_API_KEY`
- `MINIMAX_API_KEY`
- `MINIMAX_BASE_URL`
- `AI_MODEL_PLAN`
- `AI_MODEL_HINT`
- `AI_MODEL_REVIEW`

Notes:

- provider secrets stay server-side only
- MiniMax is the default provider in the current setup
- different API key formats may behave differently depending on provider account setup

**[ADD IMAGE: AI planning loop diagram here]**  
**Suggested file:** `./docs/screenshots/ai-planning-loop.png`

---

## Project Structure

```text
server/                     AI provider and server-side integration
src/
  components/
    artwork/                visual anchor components
    layout/                 shell, backdrop, lighting, nav
    primitives/             low-level reusable scene UI
    stages/                 page master stage containers
  config/                   routes, navigation, scene metadata
  data/                     quest and content definitions
  lib/                      client engines and shared helpers
  pages/                    route-level page shells
  styles/                   scene system styles
```

