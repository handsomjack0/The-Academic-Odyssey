import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DeepStudyArtwork } from '../components/artwork/SceneArtworks';
import {
  BrassAction,
  HeroArtifact,
  ParchmentPanel,
  SceneChip,
  SceneHeader,
  TooltipCard,
} from '../components/primitives/ScenePrimitives';
import { DeepStudyStage } from '../components/stages/SceneStages';
import { appRoutes } from '../config/routes';
import { deepStudyAmbienceOptions, neuralReadingPassages } from '../data/questArc';
import { useProgressStore } from '../store/useProgressStore';

type DeepStudyAmbience = (typeof deepStudyAmbienceOptions)[number];

export const DeepWork = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(45 * 60);
  const [selectedAmbience, setSelectedAmbience] = useState<DeepStudyAmbience>(deepStudyAmbienceOptions[0]);
  const completeTask = useProgressStore((state) => state.completeTask);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((previous) => {
        if (previous <= 1) {
          clearInterval(timer);
          return 0;
        }
        return previous - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleComplete = () => {
    if (taskId) completeTask(taskId);
    navigate(appRoutes.questCompleted);
  };

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  return (
    <div className="scene-page scene-page-quest">
      <SceneHeader
        eyebrow="Deep Study Sanctum"
        title="Immersive Deep Study Sanctum"
        lede="Light the chamber, choose the ambience, and let one uninterrupted session carry the chapter deeper into memory."
        chips={<SceneChip label="Session Time" value={`${minutes}:${seconds}`} tone="gold" />}
      />

      <DeepStudyStage
        className="deep-shell"
        aside={
          <div className="deep-shell__aside">
            <ParchmentPanel eyebrow="Ambient Chamber" title="Session Atmosphere">
              <div className="deep-shell__ambience">
                {deepStudyAmbienceOptions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`deep-shell__ambience-option ${selectedAmbience === item ? 'deep-shell__ambience-option-active' : ''}`}
                    onClick={() => setSelectedAmbience(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </ParchmentPanel>

            <TooltipCard title="Hourglass" subtitle={`${minutes}:${seconds} remain before this study seal closes.`} />
          </div>
        }
        hero={
          <HeroArtifact
            className="deep-shell__hero"
            artifact={<DeepStudyArtwork />}
            children={
              <div className="deep-shell__copy">
                <ParchmentPanel eyebrow="Chapter I / Guided Reading" title="Foundations of Neural Networks" className="deep-shell__panel">
                  <div className="deep-shell__passages">
                    {neuralReadingPassages.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="deep-shell__footer">
                    <TooltipCard title="Current Ambience" subtitle={selectedAmbience} />
                    <BrassAction onClick={handleComplete}>Seal This Session</BrassAction>
                  </div>
                </ParchmentPanel>
              </div>
            }
          />
        }
      />
    </div>
  );
};
