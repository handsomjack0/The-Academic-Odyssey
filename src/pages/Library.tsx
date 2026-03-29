import { Compass, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ArchiveCodexArtwork } from '../components/artwork/SceneArtworks';
import { appRoutes } from '../config/routes';
import {
  HeroArtifact,
  ParchmentPanel,
  SceneHeader,
  TooltipCard,
} from '../components/primitives/ScenePrimitives';
import { ResearchStacksStage } from '../components/stages/SceneStages';

const archiveFragments = [
  {
    title: 'Research Codex',
    text: 'Annotated proofs, field notes, and recovered mechanisms from the current branch.',
  },
  {
    title: 'Lecture Marginalia',
    text: 'Condensed observations from guided sessions, preserved for later synthesis.',
  },
  {
    title: 'Recovered Proofs',
    text: 'Fragments of solved trials and refined arguments prepared for final recall.',
  },
];

export const Library = () => {
  const navigate = useNavigate();

  return (
    <div className="scene-page scene-page-archive">
      <SceneHeader
        eyebrow="Extended Archives"
        title="Research Stacks"
        lede="Follow the paper trail beyond the main curriculum through lecture fragments, companion notes, and blueprint-born research."
      />

      <ResearchStacksStage
        className="research-shell"
        aside={(
          <div className="research-shell__aside">
            <TooltipCard title="Archive Compass" subtitle="Move between the living shelves, the blueprint chamber, and the Great Hall." />
            <div className="research-shell__links">
              <button type="button" onClick={() => navigate(appRoutes.courses)}>
                <Compass size={16} />
                Return to the living shelves
              </button>
              <button type="button" onClick={() => navigate(appRoutes.planner)}>
                <Compass size={16} />
                Consult the sage blueprint
              </button>
              <button type="button" onClick={() => navigate(appRoutes.dashboard)}>
                <Compass size={16} />
                Re-enter the Great Hall
              </button>
            </div>
          </div>
        )}
        hero={(
          <HeroArtifact
            className="research-shell__hero"
            artifact={<ArchiveCodexArtwork />}
            children={(
              <div className="research-shell__copy">
                <ParchmentPanel eyebrow="Current Research Chamber" title="Neural Network Research" className="research-shell__panel">
                  <div className="research-shell__search">
                    <Search size={18} />
                    <span>Search codices, notes, or recovered references...</span>
                  </div>
                  <p>A living dossier of lecture fragments, worked derivations, and mentor notes assembled around the active expedition.</p>
                  <div className="research-shell__fragments">
                    {archiveFragments.map((item) => (
                      <TooltipCard key={item.title} title={item.title} subtitle={item.text} />
                    ))}
                  </div>
                </ParchmentPanel>
              </div>
            )}
          />
        )}
      />
    </div>
  );
};
