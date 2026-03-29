import { DossierDeskArtwork } from '../components/artwork/SceneArtworks';
import {
  HeroArtifact,
  SceneChip,
  SceneHeader,
  SealBadge,
  StatusRail,
  TooltipCard,
} from '../components/primitives/ScenePrimitives';
import { ScholarDossierStage } from '../components/stages/SceneStages';
import { useProgressStore } from '../store/useProgressStore';

export const Profile = () => {
  const { level, xp, mana, studyEnergy, badges, streak, skillPoints } = useProgressStore();

  return (
    <div className="scene-page scene-page-hall">
      <SceneHeader
        eyebrow="Scholar Dossier"
        title="Scholar Dossier"
        lede="The dossier preserves your rank, reserves, honors, and the long record of your academy journey."
        chips={(
          <>
            <SceneChip label="Level" value={level} />
            <SceneChip label="Academy Seals" value={badges.length} tone="gold" />
          </>
        )}
      />

      <ScholarDossierStage
        className="dossier-shell"
        aside={(
          <div className="dossier-shell__aside">
            <TooltipCard title="Study Streak" subtitle={`${streak} days of sustained work through the academy routes.`} />
            <TooltipCard title="Skill Points" subtitle={`${skillPoints} points waiting to be invested in the constellation.`} />
            <div className="dossier-shell__badges">
              {badges.map((badge, index) => (
                <SealBadge key={badge} label={badge} tone={index % 2 === 0 ? 'gold' : 'cyan'} />
              ))}
            </div>
          </div>
        )}
        hero={(
          <HeroArtifact
            className="dossier-shell__hero"
            artifact={<DossierDeskArtwork />}
            children={(
              <div className="dossier-shell__copy">
                <p className="scene-panel__eyebrow">Academy Standing</p>
                <h2>Scholar of the Sanctum</h2>
                <p>Level {level} expeditioner on the major route, carrying both field discipline and the marks of the long arc.</p>
                <div className="dossier-shell__rails">
                  <StatusRail label="Experience" value={xp % 1000} max={1000} accent="cyan" />
                  <StatusRail label="Mana" value={mana} accent="gold" />
                  <StatusRail label="Study Energy" value={studyEnergy} accent="green" />
                </div>
              </div>
            )}
          />
        )}
      />
    </div>
  );
};
