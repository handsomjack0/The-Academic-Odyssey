import { ConstellationAstrolabeArtwork } from '../components/artwork/SceneArtworks';
import { SkillTree } from '../components/dashboard/SkillTree';
import {
  HeroArtifact,
  SceneChip,
  SceneHeader,
  TooltipCard,
} from '../components/primitives/ScenePrimitives';
import { ConstellationStage } from '../components/stages/SceneStages';
import { useProgressStore } from '../store/useProgressStore';

export const Reward = () => {
  const skillPoints = useProgressStore((state) => state.skillPoints);

  return (
    <div className="scene-page scene-page-constellation">
      <SceneHeader
        eyebrow="Scholar's Constellation Dome"
        title="Map the Long Arc of Growth"
        lede="Survey the awakened disciplines, the branches now moving, and the distant stars waiting to be claimed."
        chips={<SceneChip label="Available Skill Points" value={skillPoints} tone="gold" />}
      />

      <ConstellationStage
        className="constellation-shell"
        aside={(
          <div className="constellation-shell__legend">
            <TooltipCard
              title="Reading the Sky"
              subtitle="STEM sharpens analytic force, Humanities frames rhetoric and interpretation, and Arts opens the studio of creation."
            />
            <TooltipCard title="Unlocked" subtitle="Ready to extend farther into the branch." />
            <TooltipCard title="Active" subtitle="Radiating influence through the current route." />
            <TooltipCard title="Locked" subtitle="Awaiting prerequisite stars before it can awaken." />
          </div>
        )}
        hero={(
          <HeroArtifact
            className="constellation-shell__hero"
            artifact={<ConstellationAstrolabeArtwork />}
            overlay={<SkillTree />}
            children={(
              <div className="constellation-shell__copy">
                <p className="scene-panel__eyebrow">Central Astrolabe</p>
                <h2>Scholar&apos;s Constellation</h2>
                <p>The academy records every discipline as a star path. Follow the illuminated routes to see what may be awakened next.</p>
              </div>
            )}
          />
        )}
      />
    </div>
  );
};
