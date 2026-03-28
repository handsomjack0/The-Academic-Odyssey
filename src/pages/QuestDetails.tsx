import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { useProgressStore } from '../store/useProgressStore';
import { CheckCircle, Circle, PlayCircle, BookOpen, PenTool, Check } from 'lucide-react';
import { motion } from 'motion/react';

export const QuestDetails = () => {
  const { questId } = useParams();
  const navigate = useNavigate();
  const { completedTasks } = useProgressStore();

  const quest = {
    title: "Chapter 1: Foundations of Neural Networks",
    progress: 30,
    tasks: [
      { id: 'nn-q1-t1', title: 'Complete Quiz 1', xp: 50, type: 'quiz', stat: '+1 WIS' },
      { id: 'nn-q1-t2', title: 'Watch Lecture Video', xp: 50, type: 'video', stat: '+1 WIS' },
      { id: 'nn-q1-t3', title: 'Read Section 1.2', xp: 50, type: 'reading', stat: '+1 WIS' },
      { id: 'nn-q1-t4', title: 'Practice Problems', xp: 50, type: 'practice', stat: '+1 WIS' },
    ]
  };

  const getIcon = (type: string, completed: boolean) => {
    switch (type) {
      case 'video': return <PlayCircle size={16} className="text-[var(--color-wood-light)]" />;
      case 'reading': return <BookOpen size={16} className="text-[var(--color-wood-light)]" />;
      case 'practice': return <PenTool size={16} className="text-[var(--color-wood-light)]" />;
      default: return <BookOpen size={16} className="text-[var(--color-wood-light)]" />;
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center p-8 relative">
      {/* Background Constellations/Gears */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <h1 className="font-display text-4xl mb-8 text-[var(--color-cyan-glow)] text-glow relative z-10">Quest Log: Neural Network Path</h1>
      
      <div className="flex gap-8 w-full max-w-5xl relative z-10 h-[calc(100vh-12rem)]">
        <div className="flex-1 bg-scroll p-8 border border-[var(--color-wood-light)] shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col">
          <div className="flex justify-between items-end mb-6 border-b-2 border-[var(--color-wood-light)] pb-6">
            <h2 className="font-display text-3xl text-[var(--color-ink)]">{quest.title}</h2>
            <div className="flex gap-4">
              <div className="text-center bg-[var(--color-wood-dark)]/10 p-2 rounded border border-[var(--color-wood-light)] min-w-[4rem]">
                <div className="text-xl font-display text-[var(--color-gold)] text-glow">100</div>
                <div className="text-[10px] font-sans font-bold text-[var(--color-ink-light)] tracking-wider uppercase mt-1">XP Reward</div>
              </div>
              <div className="text-center bg-[var(--color-wood-dark)]/10 p-2 rounded border border-[var(--color-wood-light)] min-w-[4rem]">
                <div className="text-xl font-display text-[var(--color-cyan-glow)] text-glow">+2</div>
                <div className="text-[10px] font-sans font-bold text-[var(--color-ink-light)] tracking-wider uppercase mt-1">INT Bonus</div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Progress Bar */}
          <div className="mb-8 bg-[var(--color-wood-dark)]/10 p-4 rounded border border-[var(--color-wood-light)]">
            <div className="flex justify-between text-xs font-sans font-bold text-[var(--color-ink)] mb-2 tracking-wider uppercase">
              <span>Overall Quest Progress</span>
              <span className="text-[var(--color-cyan-glow)]">{quest.progress}% Completed</span>
            </div>
            <div className="h-4 bg-[var(--color-wood-dark)] rounded-full overflow-hidden border border-[var(--color-wood-light)] w-full shadow-inner relative">
              <div className="h-full bg-[var(--color-cyan-glow)] box-glow transition-all duration-1000 relative flex items-center justify-end pr-1" style={{ width: `${quest.progress}%` }}>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay" />
                <div className="w-2 h-full bg-white opacity-50 rounded-full blur-[1px]" />
              </div>
            </div>
          </div>
          
          <h3 className="font-display text-2xl mb-4 text-[var(--color-ink)]">Tasks & Objectives</h3>
          <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-2">
            {quest.tasks.map((task, idx) => {
              const completed = idx === 0 || idx === 3; // Mock completion
              return (
                <div 
                  key={task.id} 
                  className={`flex items-center justify-between p-4 border border-[var(--color-wood-light)] rounded-sm transition-all cursor-pointer group relative overflow-hidden ${completed ? 'bg-[var(--color-wood-dark)]/5' : 'bg-[var(--color-wood-dark)]/20 hover:border-[var(--color-cyan-glow)] hover:box-glow'}`}
                  onClick={() => navigate(`/task/${task.id}/study-method`)}
                >
                  {!completed && <div className="absolute inset-0 bg-[var(--color-cyan-glow)] opacity-0 group-hover:opacity-10 transition-opacity" />}
                  
                  <div className="flex items-center gap-4 relative z-10">
                    {/* Visual Indicator for Completion */}
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${completed ? 'border-[var(--color-cyan-glow)] bg-[var(--color-cyan-glow)]/20' : 'border-[var(--color-wood-light)] group-hover:border-[var(--color-cyan-glow)]'}`}>
                      {completed ? (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        >
                          <Check className="text-[var(--color-cyan-glow)] w-5 h-5" />
                        </motion.div>
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-[var(--color-wood-light)] group-hover:bg-[var(--color-cyan-glow)] group-hover:animate-pulse transition-colors" />
                      )}
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className={`font-serif text-lg transition-colors ${completed ? 'text-[var(--color-ink-light)] line-through opacity-70' : 'text-[var(--color-ink)] font-bold group-hover:text-[var(--color-cyan-glow)]'}`}>
                          {task.title}
                        </span>
                        <div className="opacity-50" title={task.type}>
                          {getIcon(task.type, completed)}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 relative z-10 opacity-80">
                    <div className="text-center">
                      <div className="font-display text-[var(--color-gold-dark)] text-lg leading-none">{task.xp}</div>
                      <div className="text-[8px] font-sans font-bold tracking-wider uppercase mt-1">XP</div>
                    </div>
                    <div className="text-center flex items-center justify-center">
                      <div className="font-display text-[var(--color-cyan-glow)] text-sm border border-[var(--color-cyan-glow)]/30 px-2 py-1 rounded bg-[var(--color-cyan-glow)]/10">{task.stat}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-6 pt-6 border-t border-[var(--color-wood-light)] flex justify-end">
             <Button variant="secondary" onClick={() => navigate('/dashboard')}>Return to Dashboard</Button>
          </div>
        </div>
        
        <div className="w-72 flex flex-col gap-6">
          <div className="bg-scroll border border-[var(--color-wood-light)] shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-6 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-cyan-glow)] to-transparent opacity-50" />
            <h3 className="font-display text-xl text-[var(--color-ink)] mb-4 w-full border-b border-[var(--color-wood-light)] pb-2">Oracle's Insight</h3>
            <div className="w-24 h-24 mb-4 relative">
              <div className="absolute inset-0 border-2 border-[var(--color-cyan-glow)] rounded-full animate-[spin_10s_linear_infinite] opacity-30 border-dashed" />
              <div className="absolute inset-2 border border-[var(--color-gold)] rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-40" />
              <img src="https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=200&auto=format&fit=crop" alt="AI Sage" className="w-full h-full object-cover rounded-full border-2 border-[var(--color-wood-dark)] shadow-[0_0_15px_rgba(0,255,255,0.2)]" referrerPolicy="no-referrer" />
            </div>
            <p className="text-sm font-serif text-[var(--color-ink)] italic bg-[var(--color-wood-dark)]/10 p-3 rounded border border-[var(--color-wood-light)]">
              "Focus on backpropagation concepts today. The flow of error is like water finding its path down a mountain."
            </p>
          </div>
          
          <div className="bg-scroll border border-[var(--color-wood-light)] shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-6">
             <h3 className="font-display text-xl text-[var(--color-ink)] mb-4 border-b border-[var(--color-wood-light)] pb-2">Path Progress</h3>
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-[var(--color-cyan-glow)]/20 border border-[var(--color-cyan-glow)] flex items-center justify-center box-glow">
                 <span className="text-xl">🏆</span>
               </div>
               <div className="flex-1">
                 <div className="flex justify-between text-[10px] font-sans font-bold tracking-wider uppercase mb-1">
                   <span className="text-[var(--color-ink)]">Neural Networks</span>
                   <span className="text-[var(--color-cyan-glow)]">100%</span>
                 </div>
                 <div className="h-2 bg-[var(--color-wood-dark)] rounded-full overflow-hidden border border-[var(--color-wood-light)]">
                   <div className="h-full bg-[var(--color-cyan-glow)] box-glow" style={{ width: `100%` }} />
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
