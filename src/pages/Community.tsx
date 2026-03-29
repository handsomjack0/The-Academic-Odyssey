import { MessageSquareMore, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GuildSealArtwork } from '../components/artwork/SceneArtworks';
import {
  BrassAction,
  HeroArtifact,
  SceneHeader,
  TooltipCard,
} from '../components/primitives/ScenePrimitives';
import { GuildHallStage } from '../components/stages/SceneStages';

const guildModules = [
  {
    title: 'Study Guilds',
    text: 'Small circles for weekly accountability, rapid recall, and companion practice.',
  },
  {
    title: 'Challenge Board',
    text: 'Shared objectives, rival expeditions, and public progress markers for the hall.',
  },
  {
    title: 'War Reports',
    text: 'Recovered notes, mentor dispatches, and peer reflections from finished quests.',
  },
];

export const Community = () => {
  const navigate = useNavigate();

  return (
    <div className="scene-page scene-page-guild">
      <SceneHeader
        eyebrow="Guild Hall"
        title="Guild Hall"
        lede="Gather with allied scholars, review shared challenges, and prepare coordinated expeditions before the next descent into study."
      />

      <GuildHallStage
        className="guild-shell"
        aside={(
          <div className="guild-shell__aside">
            <TooltipCard title="Guild Readiness" subtitle="Shared quest boards and guild circles are being prepared for the allied wing." />
            <TooltipCard title="Dispatches" subtitle="Peer reports and mentor notices will arrive through this chamber." />
            <BrassAction onClick={() => navigate('/dashboard')}>Return to the Great Hall</BrassAction>
          </div>
        )}
        hero={(
          <HeroArtifact
            className="guild-shell__hero"
            artifact={<GuildSealArtwork />}
            children={(
              <div className="guild-shell__copy">
                <p className="scene-panel__eyebrow">Assembly Chamber</p>
                <h2>The allied wing of the Academy is awakening.</h2>
                <p>New circles of practice, challenge-led collaboration, and companion records will emerge here as the Guild Hall opens in full.</p>
                <div className="guild-shell__modules">
                  {guildModules.map((module) => (
                    <div key={module.title} className="guild-shell__module">
                      <MessageSquareMore size={16} />
                      <div>
                        <strong>{module.title}</strong>
                        <span>{module.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="guild-shell__footnote">
                  <ShieldCheck size={16} />
                  <span>The guild tracks allied momentum and public challenge marks.</span>
                </div>
              </div>
            )}
          />
        )}
      />
    </div>
  );
};
