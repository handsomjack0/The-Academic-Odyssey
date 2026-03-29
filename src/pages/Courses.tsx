import { Compass, Search } from 'lucide-react';
import { useState, type CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArchiveCodexArtwork } from '../components/artwork/SceneArtworks';
import {
  BrassAction,
  HeroArtifact,
  PathNode,
  SceneHeader,
  TooltipCard,
} from '../components/primitives/ScenePrimitives';
import { ArchiveStage } from '../components/stages/SceneStages';
import { courseCards } from '../data/odyssey';

const orbitVolumes = [
  { id: 'quantum-arcana', x: '11%', y: '18%' },
  { id: 'mechanical-ethics', x: '34%', y: '11%' },
  { id: 'historical-data-mining', x: '63%', y: '12%' },
  { id: 'cybernetic-renaissance', x: '83%', y: '19%' },
  { id: 'digital-development', x: '78%', y: '64%' },
  { id: 'editorial-management', x: '17%', y: '71%' },
] as const;

export const Courses = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const activeCourse = courseCards.find((course) => course.id === 'neural-network') ?? courseCards[0];
  const orbitMap = new Map<string, (typeof orbitVolumes)[number]>(orbitVolumes.map((item) => [item.id, item]));
  const floatingCourses = courseCards.filter((course) => orbitMap.has(course.id));

  return (
    <div className="scene-page scene-page-archive">
      <SceneHeader
        eyebrow="The Living Archives"
        title="Archives Course Library"
        lede="Search the living shelves for core volumes and elective branches."
      />

      <ArchiveStage
        className="archive-stage"
        hero={
          <HeroArtifact
            className="archive-stage__hero"
            artifact={<ArchiveCodexArtwork />}
            overlay={
              <>
                <label className="archive-stage__search">
                  <Search size={18} />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search courses, mentors, or active branches..."
                    aria-label="Search courses"
                  />
                </label>

                <div className="archive-stage__floating">
                  {floatingCourses.map((course) => {
                    const orbit = orbitMap.get(course.id);
                    if (!orbit) return null;

                    return (
                      <PathNode
                        key={course.id}
                        title={course.title}
                        className="archive-stage__volume"
                        style={
                          {
                            '--volume-x': orbit.x,
                            '--volume-y': orbit.y,
                          } as CSSProperties
                        }
                        onClick={() => navigate(`/quest/${course.id}`)}
                      />
                    );
                  })}
                </div>
              </>
            }
            children={
              <div className="archive-stage__hero-copy">
                <p className="scene-panel__eyebrow">Current Open Volume</p>
                <h2>{activeCourse.title}</h2>
                <p>{activeCourse.summary}</p>
                <div className="archive-stage__stats">
                  <TooltipCard title="Mentor" subtitle={activeCourse.mentor} />
                  <TooltipCard title="Progress" subtitle={`${activeCourse.progress}% awakened`} />
                </div>
                <BrassAction onClick={() => navigate(`/quest/${activeCourse.id}`)}>Enter Volume</BrassAction>
              </div>
            }
          />
        }
        aside={
          <div className="archive-stage__aside">
            <div className="archive-stage__compass">
              <div className="archive-stage__compass-head">
                <Compass size={18} />
                <span>Fast Travel Compass</span>
              </div>
              <div className="archive-stage__compass-links">
                <button type="button" onClick={() => navigate('/dashboard')}>
                  Great Hall
                </button>
                <button type="button" onClick={() => navigate('/planner')}>
                  Sage Chamber
                </button>
                <button type="button" onClick={() => navigate('/reward')}>
                  Constellation Dome
                </button>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};
