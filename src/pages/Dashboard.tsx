import { ArrowRight, BrainCircuit, Sparkles, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GreatHallArtwork } from '../components/artwork/SceneArtworks';
import {
  BrassAction,
  HeroArtifact,
  ParchmentPanel,
  SceneChip,
  SceneHeader,
  StatusRail,
} from '../components/primitives/ScenePrimitives';
import { GreatHallStage } from '../components/stages/SceneStages';
import { ScholarPortrait } from '../components/scene/Illustrations';
import { dashboardQuestLog, libraryShowcase } from '../data/odyssey';
import { useProgressStore } from '../store/useProgressStore';

const nextPortals = [
  {
    id: 'archives',
    label: 'Enter the Archives',
    detail: 'Browse the academy shelves and awaken the active course volume.',
    route: '/courses',
  },
  {
    id: 'sage',
    label: 'Consult the Sage',
    detail: 'Refine the next study cycle inside the blueprint chamber.',
    route: '/planner',
  },
  {
    id: 'constellation',
    label: 'View the Constellation',
    detail: 'Review long-arc growth, unlocked branches, and skill points.',
    route: '/reward',
  },
] as const;

export const Dashboard = () => {
  const navigate = useNavigate();
  const { xp, mana, studyEnergy, level, skillPoints, currentPlanTopic, streak } = useProgressStore();
  const activeQuest = dashboardQuestLog[0];
  const sideQuests = dashboardQuestLog.slice(1, 3);
  const activeVolume = libraryShowcase[0];
  const completion = Math.round((xp / 4000) * 100);

  return (
    <div className="scene-page scene-page-hall">
      <SceneHeader
        eyebrow="Sanctum / The Great Hall"
        title="Resume the Academic Odyssey"
        lede="The hall gathers your living quest, your current aptitude, and the next three gateways worth entering."
        chips={
          <>
            <SceneChip label="Current Path" value={currentPlanTopic} />
            <SceneChip label="Scholar Rank" value={`Level ${level}`} tone="gold" />
          </>
        }
      />

      <GreatHallStage
        className="great-hall-stage"
        aside={
          <>
            <ParchmentPanel eyebrow="Current Quest" title="Quest Ledger" className="great-hall-stage__quest">
              <div className="great-hall-stage__quest-focus">
                <span className="great-hall-stage__small-label">Main Expedition</span>
                <h3>{activeQuest.title}</h3>
                <p>Push the current route forward and unlock the next chamber of the neural network path.</p>
                <StatusRail label="Quest Progress" value={activeQuest.progress} accent="cyan" />
                <div className="great-hall-stage__meta">
                  <span>Reward {activeQuest.reward}</span>
                  <span>{activeQuest.progress}% sealed</span>
                </div>
              </div>

              <div className="great-hall-stage__side-list">
                {sideQuests.map((quest) => (
                  <button
                    key={quest.id}
                    type="button"
                    className="great-hall-stage__side-item"
                    onClick={() => navigate('/quest/neural-network')}
                  >
                    <span className="great-hall-stage__dot" />
                    <span>
                      <strong>{quest.title}</strong>
                      <em>{quest.reward}</em>
                    </span>
                  </button>
                ))}
              </div>

              <BrassAction onClick={() => navigate('/quest/neural-network')}>Open the Quest Log</BrassAction>
            </ParchmentPanel>

            <div className="great-hall-stage__status-panel">
              <p className="scene-panel__eyebrow">Scholar State</p>
              <h2>Character Status</h2>
              <div className="great-hall-stage__status-top">
                <ScholarPortrait className="great-hall-stage__portrait" />
                <div>
                  <p className="great-hall-stage__status-rank">Scholar of the Sanctum</p>
                  <p className="great-hall-stage__status-level">Level {level} expeditioner</p>
                </div>
              </div>
              <div className="great-hall-stage__status-rails">
                <StatusRail label="Experience" value={xp} max={4000} accent="cyan" />
                <StatusRail label="Mana" value={mana} accent="gold" />
                <StatusRail label="Study Energy" value={studyEnergy} accent="green" />
              </div>
              <div className="great-hall-stage__status-cells">
                <div className="great-hall-stage__status-cell">
                  <Sparkles size={17} />
                  <span>Skill Points</span>
                  <strong>{skillPoints}</strong>
                </div>
                <div className="great-hall-stage__status-cell">
                  <Star size={17} />
                  <span>Streak</span>
                  <strong>{streak} days</strong>
                </div>
                <div className="great-hall-stage__status-cell great-hall-stage__status-cell-wide">
                  <BrainCircuit size={17} />
                  <span>Academy Momentum</span>
                  <strong>{completion}% awakened</strong>
                </div>
              </div>
            </div>
          </>
        }
        hero={
          <HeroArtifact
            className="great-hall-stage__hero"
            artifact={<GreatHallArtwork />}
            children={
              <div className="great-hall-stage__hero-copy">
                <p className="scene-panel__eyebrow">The Great Library</p>
                <h2>{activeVolume.title}</h2>
                <p>{activeVolume.summary}</p>
                <div className="great-hall-stage__hero-notes">
                  <div>
                    <span>Living Volume</span>
                    <strong>{activeVolume.subtitle}</strong>
                  </div>
                  <div>
                    <span>Immediate Yield</span>
                    <strong>{activeQuest.reward}</strong>
                  </div>
                </div>
                <button
                  type="button"
                  className="hero-artifact__cta"
                  onClick={() => navigate('/quest/neural-network')}
                >
                  <span>Resume the Main Expedition</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            }
          />
        }
        footer={
          <div className="scene-route-bar">
            {nextPortals.map((portal) => (
              <button
                key={portal.id}
                type="button"
                className="scene-route-bar__item"
                onClick={() => navigate(portal.route)}
              >
                <strong>{portal.label}</strong>
                <p>{portal.detail}</p>
                <span>
                  Step Through
                  <ArrowRight size={16} />
                </span>
              </button>
            ))}
          </div>
        }
      />
    </div>
  );
};
