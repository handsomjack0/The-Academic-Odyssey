# Academic Odyssey

![Status](https://img.shields.io/badge/status-early%20validated%20prototype-6C63FF?style=for-the-badge)
![AI](https://img.shields.io/badge/AI-LLM%20guided-00C2FF?style=for-the-badge)
![Learning](https://img.shields.io/badge/learning-quest%20based-F4B400?style=for-the-badge)
![Domain](https://img.shields.io/badge/domain-edtech-34A853?style=for-the-badge)
![UI](https://img.shields.io/badge/UI-polish%20in%20progress-FF6F61?style=for-the-badge)

Academic Odyssey is a scene-first edtech prototype that reframes study as a guided scholarly expedition.
It combines quest-based learning flows, LLM-assisted study support, and a heritage-cyber visual system built around academy spaces rather than dashboard cards.

## Overview

This project explores three ideas:

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

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- Zustand
- Express
- Tailwind CSS v4
- Lucide icons
- Three / React Three Fiber for scene support

## Current Status

What is already in place:

- scene-first UI architecture
- route-group based shell and backdrop system
- centralized route, navigation, and quest content config
- AI provider abstraction
- MiniMax-first provider configuration

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

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a local `.env` file based on `.env.example`.

Example:

```env
AI_PROVIDER=minimax
MINIMAX_API_KEY=your_minimax_key
APP_URL=http://localhost:3000
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Run static type validation

```bash
npm run lint
```

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
- `sk-cp-...` and `sk-api-...` keys may use different endpoint behavior depending on account setup

## Validation Scope

The current repository is suitable for:

- internal demos
- concept validation
- route-flow validation
- prototype-level AI-assisted learning experiments

It is not yet positioned as:

- a production deployment
- a security-hardened service
- a final visual design release

## Known Gaps

- AI output quality is functional but still being tuned
- visual assets are still evolving
- some legacy styles and component paths remain in transition
- frontend chunks are still larger than ideal

## Development Notes

- user-facing runtime copy is English
- secrets must not be committed
- scene-first structure is preferred over panel-first page composition
- route behavior should stay stable while UI and provider quality continue to improve

## License

No license has been declared yet.
