import { useState } from 'react';
import { useProgressStore } from '../store/useProgressStore';
import { ParchmentCard } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { planEngine } from '../lib/engines/planEngine';
import { SkillTree } from '../components/dashboard/SkillTree';

export const Dashboard = () => {
  const { level, xp, mana, studyEnergy, currentPathId, completedQuests, completedTasks, streak } = useProgressStore();
  const navigate = useNavigate();
  const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);
  const [learningPlan, setLearningPlan] = useState<{title: string, description: string}[] | null>(null);
  const [activeTab, setActiveTab] = useState<'library' | 'skills'>('skills');

  const handleGeneratePlan = async () => {
    setIsGeneratingPlan(true);
    try {
      const plan = await planEngine.generatePlan(currentPathId || 'neural-network', level);
      setLearningPlan(plan);
    } finally {
      setIsGeneratingPlan(false);
    }
  };

  return (
    <div className="h-full flex gap-8 p-8 relative">
      {/* Background Constellations/Gears */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      
      {/* Left Column: Quest Log */}
      <div className="w-1/3 flex flex-col h-full">
        <div className="bg-scroll p-8 flex-1 flex flex-col border border-[var(--color-wood-light)] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <h2 className="font-display text-4xl mb-6 text-[var(--color-ink)] text-center border-b-2 border-[var(--color-wood-light)] pb-4">Quest Log</h2>
          <div className="space-y-4 font-serif flex-1 overflow-y-auto custom-scrollbar pr-2">
            <p className="font-sans font-bold text-sm tracking-wider uppercase text-[var(--color-ink)]">Current Quests:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 p-3 bg-[var(--color-wood-dark)]/10 rounded-sm border border-[var(--color-wood-light)] hover:border-[var(--color-cyan-glow)] hover:box-glow transition-all cursor-pointer group relative overflow-hidden">
                <div className="absolute inset-0 bg-[var(--color-cyan-glow)] opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="w-6 h-6 rounded-full border-2 border-[var(--color-cyan-glow)] flex items-center justify-center mt-0.5 group-hover:bg-[var(--color-cyan-glow)]/20 transition-colors relative z-10">
                  <div className="w-2 h-2 bg-[var(--color-cyan-glow)] rounded-full animate-pulse" />
                </div>
                <div className="flex-1 relative z-10">
                  <div className="font-bold text-[var(--color-ink)] group-hover:text-[var(--color-cyan-glow)] transition-colors">Complete Week 5 Assignment</div>
                  <div className="text-xs text-[var(--color-ink-light)] mt-1 mb-2">Reward: 500 XP</div>
                  <div className="h-1.5 bg-[var(--color-wood-dark)] rounded-full overflow-hidden border border-[var(--color-wood-light)]">
                    <div className="h-full bg-[var(--color-cyan-glow)] box-glow w-3/4" />
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-[var(--color-wood-dark)]/10 rounded-sm border border-[var(--color-wood-light)] hover:border-[var(--color-cyan-glow)] hover:box-glow transition-all cursor-pointer group relative overflow-hidden">
                <div className="absolute inset-0 bg-[var(--color-cyan-glow)] opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="w-6 h-6 rounded-full border-2 border-[var(--color-wood-light)] flex items-center justify-center mt-0.5 relative z-10" />
                <div className="flex-1 relative z-10">
                  <div className="font-bold text-[var(--color-ink)] group-hover:text-[var(--color-cyan-glow)] transition-colors">Attend Lecture: Neural Nets</div>
                  <div className="text-xs text-[var(--color-ink-light)] mt-1 mb-2">Reward: 200 XP</div>
                  <div className="h-1.5 bg-[var(--color-wood-dark)] rounded-full overflow-hidden border border-[var(--color-wood-light)]">
                    <div className="h-full bg-[var(--color-cyan-glow)] box-glow w-0" />
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-[var(--color-wood-dark)]/10 rounded-sm border border-[var(--color-wood-light)] hover:border-[var(--color-cyan-glow)] hover:box-glow transition-all cursor-pointer group relative overflow-hidden">
                <div className="absolute inset-0 bg-[var(--color-cyan-glow)] opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="w-6 h-6 rounded-full border-2 border-[var(--color-wood-light)] flex items-center justify-center mt-0.5 relative z-10" />
                <div className="flex-1 relative z-10">
                  <div className="font-bold text-[var(--color-ink)] group-hover:text-[var(--color-cyan-glow)] transition-colors">Read Chapter 4: Alchemy</div>
                  <div className="text-xs text-[var(--color-ink-light)] mt-1 mb-2">Reward: 100 XP</div>
                  <div className="h-1.5 bg-[var(--color-wood-dark)] rounded-full overflow-hidden border border-[var(--color-wood-light)]">
                    <div className="h-full bg-[var(--color-cyan-glow)] box-glow w-1/4" />
                  </div>
                </div>
              </li>
            </ul>
            
            <div className="pt-8 mt-auto">
              <Button onClick={() => navigate(`/quest/${currentPathId || 'neural-network'}`)} className="w-full mb-4" variant="secondary">
                View Active Path
              </Button>
              <Button 
                onClick={handleGeneratePlan} 
                className="w-full" 
                disabled={isGeneratingPlan}
              >
                {isGeneratingPlan ? 'Consulting Oracle...' : 'Consult AI Sage'}
              </Button>
              
              {learningPlan && (
                <div className="mt-4 space-y-3 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                  <h3 className="font-display text-lg text-[var(--color-ink)]">Oracle's Guidance:</h3>
                  {learningPlan.map((item, idx) => (
                    <div key={idx} className="bg-[var(--color-parchment-dark)]/30 p-3 rounded border border-[var(--color-wood-light)]">
                      <h4 className="font-bold text-sm text-[var(--color-ink)]">{item.title}</h4>
                      <p className="text-xs text-[var(--color-ink-light)] mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Character & Content */}
      <div className="flex-1 flex flex-col gap-8">
        {/* Character Status */}
        <div className="bg-scroll p-6 flex gap-8 border border-[var(--color-wood-light)] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 rounded-full border-4 border-[#a68a61] overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] relative">
              <div className="absolute inset-0 border-2 border-inner border-[var(--color-wood-dark)] rounded-full pointer-events-none z-10" />
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="text-center">
              <div className="text-xl font-sans font-bold text-[var(--color-ink)] tracking-wider uppercase">
                Level {level}
              </div>
              <div className="text-sm font-sans font-bold text-[var(--color-cyan-glow)] tracking-wider uppercase">
                Artificer Novice
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col justify-center space-y-6">
            <div>
              <div className="flex justify-between text-xs font-sans font-bold text-[var(--color-ink)] mb-2 tracking-wider uppercase">
                <span>Experience</span>
                <span>{xp} / 1000 XP</span>
              </div>
              <div className="h-4 bg-[var(--color-wood-dark)] rounded-full overflow-hidden border border-[var(--color-wood-light)] w-full shadow-inner">
                <div className="h-full bg-[var(--color-cyan-glow)] box-glow transition-all relative" style={{ width: `${(xp % 1000) / 10}%` }}>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[var(--color-wood-dark)]/10 p-3 rounded-sm border border-[var(--color-wood-light)] text-center">
                <div className="text-2xl font-display text-[var(--color-ink)]">{completedQuests.length}</div>
                <div className="text-[10px] font-sans font-bold text-[var(--color-ink-light)] tracking-wider uppercase">Quests Completed</div>
              </div>
              <div className="bg-[var(--color-wood-dark)]/10 p-3 rounded-sm border border-[var(--color-wood-light)] text-center">
                <div className="text-2xl font-display text-[var(--color-ink)]">{completedTasks.length}</div>
                <div className="text-[10px] font-sans font-bold text-[var(--color-ink-light)] tracking-wider uppercase">Tasks Mastered</div>
              </div>
              <div className="bg-[var(--color-wood-dark)]/10 p-3 rounded-sm border border-[var(--color-wood-light)] text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[var(--color-gold)] opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="text-2xl font-display text-[var(--color-gold)] text-glow">{streak}</div>
                <div className="text-[10px] font-sans font-bold text-[var(--color-ink-light)] tracking-wider uppercase">Day Streak</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-scroll flex-1 flex flex-col border border-[var(--color-wood-light)] shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b-2 border-[var(--color-wood-light)] bg-[var(--color-wood-dark)]/10">
            <button 
              onClick={() => setActiveTab('skills')}
              className={`flex-1 py-4 font-sans font-bold tracking-wider uppercase text-sm transition-colors ${activeTab === 'skills' ? 'text-[var(--color-cyan-glow)] border-b-2 border-[var(--color-cyan-glow)] bg-[var(--color-wood-dark)]/20' : 'text-[var(--color-ink-light)] hover:text-[var(--color-ink)]'}`}
            >
              Skill Tree
            </button>
            <button 
              onClick={() => setActiveTab('library')}
              className={`flex-1 py-4 font-sans font-bold tracking-wider uppercase text-sm transition-colors ${activeTab === 'library' ? 'text-[var(--color-cyan-glow)] border-b-2 border-[var(--color-cyan-glow)] bg-[var(--color-wood-dark)]/20' : 'text-[var(--color-ink-light)] hover:text-[var(--color-ink)]'}`}
            >
              The Great Library
            </button>
          </div>

          <div className="flex-1 p-8 relative">
            {activeTab === 'skills' ? (
              <SkillTree />
            ) : (
              <div className="h-full flex flex-col items-center justify-center relative">
                <div className="flex items-center justify-center gap-8 w-full">
                  <button className="text-[var(--color-cyan-glow)] hover:text-white transition-colors text-5xl">⟨</button>
                  <div className="flex items-end justify-center gap-1 h-64 flex-1">
                    {/* Books Left */}
                    <div className="w-12 h-40 bg-[#5c4033] rounded-sm border-l-4 border-[#3e2723] shadow-md transform -skew-y-6 translate-y-2" />
                    <div className="w-10 h-44 bg-[#4a5d23] rounded-sm border-l-4 border-[#2e3b16] shadow-md transform -skew-y-3 translate-y-1" />
                    <div className="w-14 h-48 bg-[#8b0000] rounded-sm border-l-4 border-[#5c0000] shadow-md" />
                    <div className="w-12 h-46 bg-[#2f4f4f] rounded-sm border-l-4 border-[#1c2f2f] shadow-md" />
                    
                    {/* Active Book */}
                    <div 
                      onClick={() => navigate('/courses')} 
                      className="w-48 h-64 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] bg-[#3e2723] rounded-md border-2 border-[var(--color-cyan-glow)] box-glow flex items-center justify-center p-6 cursor-pointer transform -translate-y-4 hover:-translate-y-6 transition-transform mx-4 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 border-4 border-double border-[#8b7355] m-2 rounded-sm pointer-events-none" />
                      <span className="font-display text-center text-[var(--color-cyan-glow)] text-2xl text-glow leading-tight">Cyber-Alchemy<br/>Principles</span>
                    </div>
                    
                    {/* Books Right */}
                    <div className="w-12 h-46 bg-[#8b4513] rounded-sm border-r-4 border-[#5c2e0c] shadow-md" />
                    <div className="w-14 h-48 bg-[#556b2f] rounded-sm border-r-4 border-[#38471f] shadow-md" />
                    <div className="w-10 h-44 bg-[#800000] rounded-sm border-r-4 border-[#4d0000] shadow-md transform skew-y-3 translate-y-1" />
                    <div className="w-12 h-40 bg-[#2f4f4f] rounded-sm border-r-4 border-[#1c2f2f] shadow-md transform skew-y-6 translate-y-2" />
                  </div>
                  <button className="text-[var(--color-cyan-glow)] hover:text-white transition-colors text-5xl">⟩</button>
                </div>
                
                <div className="flex gap-3 mt-12">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className={`w-3 h-3 rounded-full ${i === 3 ? 'bg-[var(--color-cyan-glow)] box-glow' : 'bg-[var(--color-ink-light)]'}`} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
