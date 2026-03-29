import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TrialApparatusArtwork } from '../components/artwork/SceneArtworks';
import {
  BrassAction,
  HeroArtifact,
  ParchmentPanel,
  SceneChip,
  SceneHeader,
  TooltipCard,
} from '../components/primitives/ScenePrimitives';
import { TrialStage } from '../components/stages/SceneStages';
import { appRoutes } from '../config/routes';
import { alchemistTrialContent } from '../data/questArc';
import { hintEngine } from '../lib/engines/hintEngine';
import { buildTrialLearningContext } from '../lib/learningContext';
import { reviewEngine } from '../lib/engines/reviewEngine';
import { useProgressStore } from '../store/useProgressStore';

export const AlchemistTrial = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(45);
  const [answer, setAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; feedback: string } | null>(null);
  const [hint, setHint] = useState<string | null>(null);
  const [isGettingHint, setIsGettingHint] = useState(false);
  const completeTask = useProgressStore((state) => state.completeTask);
  const recommendedMethod = useProgressStore((state) => state.recommendedMethod);

  const { question, referenceContext } = alchemistTrialContent;
  const learningContext = buildTrialLearningContext({
    taskId,
    recommendedMethod,
    referenceConcept: referenceContext,
  });

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

  const handleSubmit = async () => {
    if (!answer.trim()) return;
    setIsSubmitting(true);
    setFeedback(null);
    try {
      const result = await reviewEngine.reviewAnswer(question, answer, learningContext);
      setFeedback(result);
      if (result.isCorrect) {
        setTimeout(() => {
          if (taskId) completeTask(taskId);
          navigate(appRoutes.questCompleted);
        }, 1600);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGetHint = async () => {
    setIsGettingHint(true);
    try {
      const result = await hintEngine.getHint(question, learningContext);
      setHint(result);
    } finally {
      setIsGettingHint(false);
    }
  };

  return (
    <div className="scene-page scene-page-quest">
      <SceneHeader
        eyebrow="Alchemist Trial Chamber"
        title="The Alchemist's Trial"
        lede="State the concept clearly before the burner consumes the final seconds."
        chips={
          <>
            <SceneChip label="Burner Countdown" value={`00:${String(timeLeft).padStart(2, '0')}`} tone="gold" />
            <SceneChip label="Streak Multiplier" value="X5" />
          </>
        }
      />

      <TrialStage
        className="trial-shell"
        aside={
          <div className="trial-shell__aside">
            <TooltipCard title="Alchemist's Flask" subtitle="A vessel for rapid correction and concentrated clarity under time pressure." />
            {hint ? <TooltipCard title="Academy Hint" subtitle={hint} /> : null}
            {feedback ? <TooltipCard title={feedback.isCorrect ? 'Correct' : 'Not Yet'} subtitle={feedback.feedback} /> : null}
          </div>
        }
        hero={
          <HeroArtifact
            className="trial-shell__hero"
            artifact={<TrialApparatusArtwork />}
            children={
              <div className="trial-shell__copy">
                <ParchmentPanel eyebrow="Current Question" title={question} className="trial-shell__panel">
                  <textarea
                    className="trial-shell__answer"
                    placeholder="Write your answer in clear academic language..."
                    value={answer}
                    onChange={(event) => setAnswer(event.target.value)}
                    disabled={isSubmitting || feedback?.isCorrect}
                  />
                  <div className="trial-shell__actions">
                    <BrassAction onClick={handleGetHint} disabled={isGettingHint || feedback?.isCorrect}>
                      {isGettingHint ? 'Summoning Hint...' : 'Summon Hint'}
                    </BrassAction>
                    <BrassAction onClick={handleSubmit} disabled={isSubmitting || !answer.trim() || feedback?.isCorrect}>
                      {isSubmitting ? 'Reviewing Answer...' : 'Submit Answer'}
                    </BrassAction>
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
