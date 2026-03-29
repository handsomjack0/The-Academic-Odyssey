import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MethodologyAltarArtwork } from '../components/artwork/SceneArtworks';
import {
  BrassAction,
  HeroArtifact,
  ParchmentPanel,
  PathNode,
  SceneHeader,
  TooltipCard,
} from '../components/primitives/ScenePrimitives';
import { MethodologyStage } from '../components/stages/SceneStages';
import { studyMethods } from '../data/odyssey';
import { buildQuestRoute, buildDeepWorkRoute, buildAlchemistTrialRoute } from '../config/routes';
import { studyMethodCopy, studyMethodRoutes } from '../data/questArc';
import { useProgressStore } from '../store/useProgressStore';

export const StudyMethod = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const setRecommendedMethod = useProgressStore((state) => state.setRecommendedMethod);
  const recommendedMethod = useProgressStore((state) => state.recommendedMethod);
  const [selectedMethod, setSelectedMethod] = useState(recommendedMethod ?? 'deep-work');

  const activeMethod = useMemo(
    () => studyMethods.find((method) => method.id === selectedMethod) ?? studyMethods[0],
    [selectedMethod],
  );

  const handleEnter = (methodId: string) => {
    setRecommendedMethod(methodId);
    const route = studyMethodRoutes[methodId];
    navigate(route === 'alchemist-trial' ? buildAlchemistTrialRoute(taskId ?? '') : buildDeepWorkRoute(taskId ?? ''));
  };

  return (
    <div className="scene-page scene-page-quest">
      <SceneHeader
        eyebrow="Methodology Hall"
        title="Choose Your Methodology"
        lede="The academy does not offer one path to knowledge. Select the discipline that should govern this next seal."
      />

      <MethodologyStage
        className="method-shell"
        aside={(
          <ParchmentPanel eyebrow="Guidance Scroll" title={activeMethod.title} className="method-shell__aside">
            <p>{studyMethodCopy[activeMethod.id].summary}</p>
            <TooltipCard title="Yield" subtitle={studyMethodCopy[activeMethod.id].yield} />
            <TooltipCard title="Academy Note" subtitle={studyMethodCopy[activeMethod.id].note} />
            <BrassAction onClick={() => handleEnter(activeMethod.id)}>Enter This Method</BrassAction>
            <BrassAction onClick={() => navigate(buildQuestRoute('neural-network'))} className="method-shell__secondary">
              Return to the Quest Log
            </BrassAction>
          </ParchmentPanel>
        )}
        hero={(
          <HeroArtifact
            className="method-shell__hero"
            artifact={<MethodologyAltarArtwork />}
            overlay={(
              <div className="method-shell__nodes">
                {studyMethods.map((method, index) => (
                  <PathNode
                    key={method.id}
                    title={method.title}
                    subtitle={method.subtitle}
                    active={selectedMethod === method.id}
                    className={`method-shell__node method-shell__node-${index + 1}`}
                    onClick={() => setSelectedMethod(method.id)}
                  />
                ))}
              </div>
            )}
            children={(
              <div className="method-shell__copy">
                <p className="scene-panel__eyebrow">Selected Discipline</p>
                <h2>{activeMethod.title}</h2>
                <p>{studyMethodCopy[activeMethod.id].summary}</p>
              </div>
            )}
          />
        )}
      />
    </div>
  );
};
