import { BookOpen, Check, PlayCircle, ScrollText, Sword } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { QuestScrollArtwork } from '../components/artwork/SceneArtworks';
import {
  BrassAction,
  HeroArtifact,
  ParchmentPanel,
  SceneChip,
  SceneHeader,
  StatusRail,
  TooltipCard,
} from '../components/primitives/ScenePrimitives';
import { QuestScrollStage } from '../components/stages/SceneStages';
import { buildStudyMethodRoute, appRoutes } from '../config/routes';
import { neuralQuest } from '../data/questArc';
import { useProgressStore } from '../store/useProgressStore';

const iconMap = {
  video: PlayCircle,
  reading: BookOpen,
  practice: Sword,
  quiz: ScrollText,
};

export const QuestDetails = () => {
  const { questId } = useParams();
  const navigate = useNavigate();
  const completedTasks = useProgressStore((state) => state.completedTasks);

  const completedCount = neuralQuest.tasks.filter((task) => completedTasks.includes(task.id)).length;
  const activeTask =
    neuralQuest.tasks.find((task) => !completedTasks.includes(task.id)) ?? neuralQuest.tasks[neuralQuest.tasks.length - 1];

  return (
    <div className="scene-page scene-page-quest">
      <SceneHeader
        eyebrow="Quest Log Chamber"
        title="Quest Log Chamber"
        lede="Inspect the current chapter, measure the sealed steps, and choose the next discipline before entering execution."
        chips={
          <>
            <SceneChip label="Quest" value={questId === neuralQuest.id ? 'Neural Network Path' : 'Current Route'} />
            <SceneChip label="Seals Cleared" value={`${completedCount}/${neuralQuest.tasks.length}`} tone="gold" />
          </>
        }
      />

      <QuestScrollStage
        className="quest-shell"
        aside={
          <div className="quest-shell__aside">
            <TooltipCard title="Mentor's Whisper" subtitle={neuralQuest.mentorHint} />
            <TooltipCard
              title="Chapter Reward"
              subtitle={`${neuralQuest.chapterReward} and ${neuralQuest.insightGain} upon sealing the current chapter.`}
            />
            <BrassAction onClick={() => navigate(appRoutes.dashboard)}>Return to the Great Hall</BrassAction>
          </div>
        }
        hero={
          <HeroArtifact
            className="quest-shell__hero"
            artifact={<QuestScrollArtwork />}
            children={
              <div className="quest-shell__copy">
                <ParchmentPanel eyebrow="Current Chapter" title={neuralQuest.title} className="quest-shell__panel">
                  <p>{neuralQuest.summary}</p>
                  <StatusRail label="Chapter Progress" value={neuralQuest.progress} accent="cyan" />
                  <div className="quest-shell__tokens">
                    <SceneChip label="Chapter Reward" value={neuralQuest.chapterReward} tone="gold" />
                    <SceneChip label="Insight Gain" value={neuralQuest.insightGain} />
                  </div>
                  <div className="quest-shell__tasks">
                    {neuralQuest.tasks.map((task, index) => {
                      const completed = completedTasks.includes(task.id);
                      const Icon = iconMap[task.type];
                      const isActive = activeTask.id === task.id;

                      return (
                        <button
                          key={task.id}
                          type="button"
                          className={`quest-shell__task ${completed ? 'quest-shell__task-complete' : ''} ${isActive ? 'quest-shell__task-active' : ''}`}
                          onClick={() => navigate(buildStudyMethodRoute(task.id))}
                        >
                          <span className="quest-shell__task-index">{String(index + 1).padStart(2, '0')}</span>
                          <span className="quest-shell__task-glyph">{completed ? <Check size={16} /> : <Icon size={16} />}</span>
                          <span className="quest-shell__task-copy">
                            <strong>{task.title}</strong>
                            <em>{completed ? 'Seal completed.' : 'Choose a methodology and advance this seal.'}</em>
                          </span>
                          <span className="quest-shell__task-meta">
                            <span>{task.stat}</span>
                            <strong>{task.xp} XP</strong>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  <BrassAction onClick={() => navigate(buildStudyMethodRoute(activeTask.id))}>Choose Methodology</BrassAction>
                </ParchmentPanel>
              </div>
            }
          />
        }
      />
    </div>
  );
};
