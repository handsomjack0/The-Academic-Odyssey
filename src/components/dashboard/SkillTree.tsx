import { Cpu, Feather, LockKeyhole, Palette, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { ArcaneCanvas } from '../scene/ArcaneCanvas';
import { constellationNodes } from '../../data/odyssey';
import { useProgressStore } from '../../store/useProgressStore';

const groupMeta = {
  stem: {
    label: 'STEM',
    title: 'The Tower of Logic',
    Icon: Cpu,
  },
  humanities: {
    label: 'HUMANITIES',
    title: 'The Archive of Tongues',
    Icon: Feather,
  },
  arts: {
    label: 'ARTS',
    title: 'The Studio of Creation',
    Icon: Palette,
  },
} as const;

const tooltipCopy = {
  locked: 'Awaiting prerequisite stars before this branch can be awakened.',
  active: 'This star is currently progressing and radiating influence across the chamber.',
  unlocked: 'This star has already been awakened and can extend farther into its branch.',
} as const;

export const SkillTree = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const unlocked = useProgressStore((state) => state.unlockedConstellationNodes);

  return (
    <section className="constellation-stage">
      <ArcaneCanvas variant="constellation" className="odyssey-scene__effects" />
      <div className="constellation-stage__backdrop constellation-stage__backdrop-left" />
      <div className="constellation-stage__backdrop constellation-stage__backdrop-right" />
      <div className="constellation-stage__glow" />
      <div className="constellation-stage__astrolabe constellation-stage__astrolabe-outer" />
      <div className="constellation-stage__astrolabe constellation-stage__astrolabe-inner" />
      <div className="constellation-stage__axis constellation-stage__axis-horizontal" />
      <div className="constellation-stage__axis constellation-stage__axis-vertical" />

      <div className="constellation-stage__branch constellation-stage__branch-left">
        <span>{groupMeta.stem.title}</span>
        <em>{groupMeta.stem.label}</em>
      </div>
      <div className="constellation-stage__branch constellation-stage__branch-center">
        <span>{groupMeta.humanities.title}</span>
        <em>{groupMeta.humanities.label}</em>
      </div>
      <div className="constellation-stage__branch constellation-stage__branch-right">
        <span>{groupMeta.arts.title}</span>
        <em>{groupMeta.arts.label}</em>
      </div>

      <svg className="constellation-stage__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {constellationNodes.flatMap((node) =>
          node.connectsTo.map((targetId) => {
            const target = constellationNodes.find((item) => item.id === targetId);
            if (!target) return [];

            const activeLine =
              (unlocked.includes(node.id) || node.state !== 'locked') &&
              (unlocked.includes(targetId) || target.state !== 'locked');

            return (
              <line
                key={`${node.id}-${targetId}`}
                x1={node.x}
                y1={node.y}
                x2={target.x}
                y2={target.y}
                stroke={activeLine ? 'rgba(120,239,255,0.72)' : 'rgba(255,255,255,0.12)'}
                strokeWidth={activeLine ? '0.5' : '0.22'}
              />
            );
          }),
        )}
      </svg>

      {constellationNodes.map((node) => {
        const active = node.state === 'active';
        const unlockedState = unlocked.includes(node.id) || node.state === 'unlocked';
        const locked = !unlockedState && !active;
        const { Icon } = groupMeta[node.group];
        const stateKey = locked ? 'locked' : active ? 'active' : 'unlocked';

        return (
          <div
            key={node.id}
            className="constellation-stage__node-wrap"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <button
              type="button"
              className={`constellation-stage__node ${active ? 'constellation-stage__node-active' : unlockedState ? 'constellation-stage__node-unlocked' : 'constellation-stage__node-locked'}`}
            >
              {locked ? <LockKeyhole size={28} /> : <Icon size={28} />}
            </button>

            <div className={`constellation-stage__tooltip ${hoveredNode === node.id ? 'constellation-stage__tooltip-visible' : ''}`}>
              <p className="constellation-stage__tooltip-title">{node.title}</p>
              <p className="constellation-stage__tooltip-subtitle">{node.subtitle}</p>
              <p className="constellation-stage__tooltip-copy">{tooltipCopy[stateKey]}</p>
            </div>
          </div>
        );
      })}

      <div className="constellation-stage__centerpiece">
        <div className="constellation-stage__center-ring constellation-stage__center-ring-outer" />
        <div className="constellation-stage__center-ring constellation-stage__center-ring-inner" />
        <div className="constellation-stage__center-core">
          <Sparkles size={34} />
        </div>
      </div>
    </section>
  );
};
