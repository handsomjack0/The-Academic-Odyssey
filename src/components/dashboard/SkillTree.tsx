import { useState } from 'react';

interface SkillNode {
  id: string;
  title: string;
  status: 'locked' | 'in-progress' | 'completed';
  x: number;
  y: number;
  icon: string;
  connections: string[];
}

const SKILL_NODES: SkillNode[] = [
  { id: 'core', title: 'Core Mechanics', status: 'completed', x: 50, y: 10, icon: '⚙️', connections: ['algo', 'data'] },
  { id: 'algo', title: 'Algorithmic Intuition', status: 'completed', x: 30, y: 40, icon: '🧠', connections: ['ml', 'ai'] },
  { id: 'data', title: 'Data Mining', status: 'in-progress', x: 70, y: 40, icon: '📊', connections: ['ai', 'crypto'] },
  { id: 'ml', title: 'Machine Learning', status: 'locked', x: 15, y: 70, icon: '🤖', connections: ['quantum'] },
  { id: 'ai', title: 'Neural Networks', status: 'locked', x: 50, y: 70, icon: '🕸️', connections: ['quantum'] },
  { id: 'crypto', title: 'Cryptography', status: 'locked', x: 85, y: 70, icon: '🔐', connections: ['quantum'] },
  { id: 'quantum', title: 'Quantum Arcana', status: 'locked', x: 50, y: 100, icon: '🌌', connections: [] },
];

export const SkillTree = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="relative w-full h-full min-h-[400px] bg-[var(--color-wood-dark)] rounded-md border-2 border-[var(--color-wood-light)] overflow-hidden p-8 shadow-inner">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay pointer-events-none" />
      
      {/* SVG for drawing connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        {SKILL_NODES.map(node => 
          node.connections.map(targetId => {
            const target = SKILL_NODES.find(n => n.id === targetId);
            if (!target) return null;
            
            const isCompleted = node.status === 'completed' && target.status === 'completed';
            const isActive = node.status === 'completed' && target.status === 'in-progress';
            
            return (
              <line 
                key={`${node.id}-${targetId}`}
                x1={`${node.x}%`} 
                y1={`${node.y}%`} 
                x2={`${target.x}%`} 
                y2={`${target.y}%`} 
                stroke={isCompleted ? 'var(--color-gold)' : isActive ? 'var(--color-cyan-glow)' : 'var(--color-wood-light)'}
                strokeWidth={isCompleted || isActive ? "4" : "2"}
                strokeDasharray={isActive ? "5,5" : "none"}
                className={isActive ? "animate-[dash_20s_linear_infinite]" : ""}
                opacity={isCompleted || isActive ? 0.8 : 0.3}
              />
            );
          })
        )}
      </svg>

      {/* Nodes */}
      {SKILL_NODES.map(node => {
        const isLocked = node.status === 'locked';
        const isCompleted = node.status === 'completed';
        const isInProgress = node.status === 'in-progress';

        return (
          <div 
            key={node.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ left: `${node.x}%`, top: `${node.y}%`, zIndex: 10 }}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className={`
              w-16 h-16 rounded-full flex items-center justify-center text-2xl relative transition-all duration-300
              ${isLocked ? 'bg-[var(--color-wood-dark)] border-2 border-[var(--color-wood-light)] opacity-50 grayscale' : ''}
              ${isCompleted ? 'bg-[var(--color-wood-dark)] border-2 border-[var(--color-gold)] shadow-[0_0_15px_rgba(212,175,55,0.6)]' : ''}
              ${isInProgress ? 'bg-[var(--color-wood-dark)] border-2 border-[var(--color-cyan-glow)] shadow-[0_0_20px_rgba(0,240,255,0.6)] animate-pulse' : ''}
            `}>
              {/* Inner decorative ring */}
              {!isLocked && (
                <div className={`absolute inset-1 rounded-full border border-dashed ${isCompleted ? 'border-[var(--color-gold)]' : 'border-[var(--color-cyan-glow)]'} opacity-50`} />
              )}
              <span className="relative z-10">{node.icon}</span>
            </div>

            {/* Tooltip */}
            <div className={`
              absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-48 bg-scroll p-3 rounded-sm border border-[var(--color-wood-light)] shadow-xl transition-all duration-200 pointer-events-none z-20
              ${hoveredNode === node.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
            `}>
              <h4 className={`font-sans font-bold text-sm tracking-wider uppercase text-center mb-1 ${isCompleted ? 'text-[var(--color-gold)]' : isInProgress ? 'text-[var(--color-cyan-glow)]' : 'text-[var(--color-ink-light)]'}`}>
                {node.title}
              </h4>
              <p className="font-serif text-xs text-center text-[var(--color-ink)]">
                {isCompleted ? 'Mastered' : isInProgress ? 'Currently Studying' : 'Requires Prerequisites'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
