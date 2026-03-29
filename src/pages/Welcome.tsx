import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { JourneyGatewayArtwork } from '../components/artwork/SceneArtworks';
import {
  BrassAction,
  HeroArtifact,
  PathNode,
  SceneChip,
  SceneHeader,
} from '../components/primitives/ScenePrimitives';
import { JourneyGatewayStage } from '../components/stages/SceneStages';
import { useProgressStore } from '../store/useProgressStore';
import { appRoutes } from '../config/routes';

const gatewayPaths = [
  {
    id: 'neural-network',
    title: 'Neural Network Expedition',
    summary: 'Advance the current questline through core theory, guided practice, and the halls of trial.',
  },
  {
    id: 'arts',
    title: 'Creation Workshop Branch',
    summary: 'Move into design craft, expressive studies, and the studio wing of the academy.',
  },
  {
    id: 'legacy',
    title: 'Legacy of Achievement',
    summary: 'Review your unlocked branches, long arc of honors, and the stars waiting beyond today.',
  },
] as const;

export const Welcome = () => {
  const navigate = useNavigate();
  const { level, skillPoints, streak, setCurrentPath } = useProgressStore();

  const handleSelectPath = (pathId: string) => {
    setCurrentPath(pathId);
    navigate(appRoutes.dashboard);
  };

  return (
    <div className="scene-page scene-page-entrance scene-page-gateway">
      <SceneHeader
        eyebrow="Journey Gateway"
        title="Welcome to the Odyssey"
        lede="Choose the path you will advance today, then step into the Great Hall."
        chips={(
          <>
            <SceneChip label="Scholar Rank" value={`Level ${level}`} />
            <SceneChip label="Skill Points" value={skillPoints} tone="gold" />
          </>
        )}
      />

      <JourneyGatewayStage
        className="gateway-stage"
        hero={(
          <HeroArtifact
            className="gateway-stage__hero"
            artifact={<JourneyGatewayArtwork />}
            overlay={(
              <div className="gateway-stage__nodes">
                {gatewayPaths.map((path, index) => (
                  <PathNode
                    key={path.id}
                    title={path.title}
                    subtitle={path.summary}
                    className={`gateway-stage__node gateway-stage__node-${index + 1}`}
                    active={index === 0}
                    onClick={() => handleSelectPath(path.id)}
                  >
                    <span className="gateway-stage__node-arrow">
                      Choose
                      <ArrowRight size={16} />
                    </span>
                  </PathNode>
                ))}
              </div>
            )}
            children={(
              <div className="gateway-stage__content">
                <p className="scene-panel__eyebrow">Entrance Rite</p>
                <h2>Set the route for today&apos;s advance.</h2>
                <p>The map altar reads the path you choose and opens the right chamber beyond the gate.</p>
                <div className="gateway-stage__status">
                  <div>
                    <Sparkles size={18} />
                    <span>Available skill points</span>
                    <strong>{skillPoints}</strong>
                  </div>
                  <div>
                    <Star size={18} />
                    <span>Current streak</span>
                    <strong>{streak} days</strong>
                  </div>
                </div>
                <BrassAction onClick={() => handleSelectPath('neural-network')}>Enter the Great Hall</BrassAction>
              </div>
            )}
          />
        )}
      />
    </div>
  );
};
