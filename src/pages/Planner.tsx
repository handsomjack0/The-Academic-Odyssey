import { useState } from 'react';
import { SageCoreArtwork } from '../components/artwork/SceneArtworks';
import {
  BrassAction,
  HeroArtifact,
  ParchmentPanel,
  PathNode,
  SceneChip,
  SceneHeader,
  TooltipCard,
} from '../components/primitives/ScenePrimitives';
import { SageBlueprintStage } from '../components/stages/SceneStages';
import { plannerBlueprint, plannerConversation } from '../data/odyssey';
import { planEngine } from '../lib/engines/planEngine';
import { buildPlannerLearningContext } from '../lib/learningContext';
import { useProgressStore } from '../store/useProgressStore';

type GeneratedPlanItem = {
  title: string;
  description: string;
};

export const Planner = () => {
  const { currentPlanTopic, currentPathId, level, recommendedMethod, setCurrentPlanTopic } = useProgressStore();
  const [topic, setTopic] = useState(currentPlanTopic ?? 'Final Exam: Neural Networks');
  const [generatedPlan, setGeneratedPlan] = useState<GeneratedPlanItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setCurrentPlanTopic(topic);
    setIsLoading(true);
    try {
      const planningContext = buildPlannerLearningContext({ currentPathId, recommendedMethod });
      const result = await planEngine.generatePlan(topic, level, planningContext);
      setGeneratedPlan(Array.isArray(result) ? result : []);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="scene-page scene-page-sage">
      <SceneHeader
        eyebrow="Sage Blueprint Chamber"
        title="AI Sage Consultation & Planning"
        lede="Present your scholarly focus, hear the mentor's framing, and seal the next study blueprint."
        chips={<SceneChip label="Current Theme" value={currentPlanTopic} />}
      />

      <SageBlueprintStage
        className="sage-blueprint-stage"
        aside={
          <ParchmentPanel eyebrow="Consultation Scroll" title="Audience with the Sage" className="sage-blueprint-stage__scroll">
            <div className="sage-blueprint-stage__dialogue">
              {plannerConversation.map((item) => (
                <div key={`${item.role}-${item.content}`} className="sage-blueprint-stage__line">
                  <p className="sage-blueprint-stage__role">{item.role}</p>
                  <div className={`sage-blueprint-stage__bubble ${item.role === 'STUDENT' ? 'sage-blueprint-stage__bubble-student' : ''}`}>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            <label className="sage-blueprint-stage__theme">
              <span>Current Theme</span>
              <textarea value={topic} onChange={(event) => setTopic(event.target.value)} />
            </label>

            <BrassAction onClick={handleGenerate}>{isLoading ? 'Drafting...' : 'Generate Blueprint'}</BrassAction>

            {generatedPlan.length > 0 ? (
              <div className="sage-blueprint-stage__notes">
                {generatedPlan.map((item) => (
                  <TooltipCard key={item.title} title={item.title} subtitle={item.description} />
                ))}
              </div>
            ) : null}
          </ParchmentPanel>
        }
        hero={
          <HeroArtifact
            className="sage-blueprint-stage__hero"
            artifact={<SageCoreArtwork />}
            overlay={
              <div className="sage-blueprint-stage__network">
                {plannerBlueprint.map((node) => (
                  <PathNode
                    key={node.id}
                    className={`sage-blueprint-stage__node sage-blueprint-stage__node-${node.tone}`}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    title={`${node.label}`}
                    subtitle={node.detail}
                  />
                ))}
              </div>
            }
            children={
              <div className="sage-blueprint-stage__hero-copy">
                <p className="scene-panel__eyebrow">Live Blueprint</p>
                <h2>Scholarly Route Projection</h2>
                <p>A chamber of foundations, trials, milestones, and the final review sealing the route.</p>
                <BrassAction>Confirm Blueprint</BrassAction>
              </div>
            }
          />
        }
      />
    </div>
  );
};
