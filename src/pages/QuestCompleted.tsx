import { ArrowRight, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { RewardCoreArtwork } from '../components/artwork/SceneArtworks';
import { appRoutes } from '../config/routes';
import { completionRewards } from '../data/questArc';
import {
  BrassAction,
  HeroArtifact,
  SceneHeader,
  TooltipCard,
} from '../components/primitives/ScenePrimitives';
import { CompletionStage } from '../components/stages/SceneStages';

export const QuestCompleted = () => {
  const navigate = useNavigate();
  const [experienceReward, knowledgeReward, reputationReward] = completionRewards;

  return (
    <div className="scene-page scene-page-quest">
      <SceneHeader
        eyebrow="Completion Sanctum"
        title="Quest Completed"
        lede="A seal closes, a new gift awakens, and the route carries your momentum forward."
      />

      <CompletionStage
        className="completion-shell"
        aside={(
          <div className="completion-shell__aside">
            <TooltipCard title={experienceReward.title} subtitle={experienceReward.subtitle} />
            <TooltipCard title={knowledgeReward.title} subtitle={knowledgeReward.subtitle} />
            <TooltipCard title={reputationReward.title} subtitle={reputationReward.subtitle} />
          </div>
        )}
        hero={(
          <HeroArtifact
            className="completion-shell__hero"
            artifact={<RewardCoreArtwork />}
            children={(
              <div className="completion-shell__copy">
                <p className="scene-panel__eyebrow">New Skill Unlocked</p>
                <h2>Algorithmic Intuition</h2>
                <p>The academy rewards clean understanding, disciplined repetition, and the courage to cross one more chamber.</p>
                <div className="completion-shell__actions">
                  <BrassAction>
                    <Share2 size={18} />
                    Share to the Forum
                  </BrassAction>
                  <BrassAction onClick={() => navigate(appRoutes.dashboard)}>
                    Continue the Odyssey
                    <ArrowRight size={18} />
                  </BrassAction>
                </div>
              </div>
            )}
          />
        )}
      />
    </div>
  );
};
