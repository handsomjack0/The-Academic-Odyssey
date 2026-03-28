import { useNavigate, useParams } from 'react-router-dom';
import { ParchmentCard } from '../components/common/Card';
import { Hourglass, Zap, Users, ScrollText } from 'lucide-react';

const methods = [
  { 
    id: 'deep-work', 
    title: 'The Void of Focus', 
    subtitle: 'Deep Work', 
    Icon: Hourglass, 
    color: 'text-[var(--color-cyan-glow)]', 
    borderColor: 'border-[var(--color-cyan-glow)]',
    bgColor: 'bg-[var(--color-cyan-glow)]',
    shadow: 'shadow-[0_0_30px_rgba(0,240,255,0.4)]'
  },
  { 
    id: 'alchemist-trial', 
    title: "The Alchemist's Trial", 
    subtitle: 'Speed Learning', 
    Icon: Zap, 
    color: 'text-[var(--color-gold)]', 
    borderColor: 'border-[var(--color-gold)]',
    bgColor: 'bg-[var(--color-gold)]',
    shadow: 'shadow-[0_0_30px_rgba(212,175,55,0.4)]'
  },
  { 
    id: 'social', 
    title: 'The Guild Expedition', 
    subtitle: 'Social Study', 
    Icon: Users, 
    color: 'text-[#ec4899]', 
    borderColor: 'border-[#ec4899]',
    bgColor: 'bg-[#ec4899]',
    shadow: 'shadow-[0_0_30px_rgba(236,72,153,0.4)]'
  },
  { 
    id: 'research', 
    title: "The Chronicler's Dive", 
    subtitle: 'Deep Research', 
    Icon: ScrollText, 
    color: 'text-[#4ade80]', 
    borderColor: 'border-[#4ade80]',
    bgColor: 'bg-[#4ade80]',
    shadow: 'shadow-[0_0_30px_rgba(74,222,128,0.4)]'
  },
];

export const StudyMethod = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col relative items-center justify-center p-8">
      {/* Background Constellations/Gears */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <h1 className="font-display text-5xl mb-16 text-[var(--color-cyan-glow)] text-glow relative z-10">Choose Your Methodology</h1>
      
      <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center z-10">
        {/* Center Hologram */}
        <div className="absolute z-10 flex flex-col items-center">
          <div className="w-56 h-72 bg-[url('https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=200&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-screen" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }} />
          <div className="w-40 h-10 bg-[var(--color-cyan-glow)] rounded-[100%] blur-md opacity-50 mt-[-20px]" />
          <div className="w-28 h-4 bg-[var(--color-cyan-glow)] rounded-[100%] box-glow mt-[-10px]" />
        </div>

        {/* Methods */}
        {methods.map((method, idx) => {
          const positions = [
            'top-0 left-10',
            'bottom-0 left-10',
            'top-0 right-10',
            'bottom-0 right-10'
          ];
          
          return (
            <div key={method.id} className={`absolute ${positions[idx]} flex flex-col items-center gap-6 cursor-pointer group z-20`} onClick={() => navigate(`/task/${taskId}/${method.id}`)}>
              <div className="text-center bg-[var(--color-wood-dark)]/80 p-3 rounded border border-[var(--color-wood-light)] shadow-[0_5px_15px_rgba(0,0,0,0.5)] backdrop-blur-sm group-hover:border-[var(--color-cyan-glow)] transition-colors">
                <h3 className={`font-display text-2xl ${method.color} text-glow mb-1`}>{method.title}</h3>
                <p className="font-sans font-bold text-xs tracking-wider uppercase text-[var(--color-parchment-dark)]">{method.subtitle}</p>
              </div>
              
              <div className={`w-36 h-36 rounded-full border-4 ${method.borderColor} flex items-center justify-center bg-[var(--color-wood-dark)]/90 backdrop-blur-md ${method.shadow} group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
                {/* Inner glowing ring */}
                <div className={`absolute inset-2 rounded-full border border-dashed ${method.borderColor} opacity-50 animate-[spin_10s_linear_infinite]`} />
                
                {/* Background tint */}
                <div className={`absolute inset-0 ${method.bgColor} opacity-10 group-hover:opacity-20 transition-opacity`} />
                
                {/* Icon */}
                <method.Icon size={56} className={`${method.color} relative z-10 drop-shadow-[0_0_10px_currentColor] group-hover:scale-110 transition-transform`} />
              </div>
              
              {idx === 2 && (
                <div className="absolute top-1/2 left-full ml-6 w-56 p-4 z-30 bg-scroll border border-[var(--color-wood-light)] shadow-[0_10px_30px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <h4 className="font-display text-[var(--color-ink)] text-lg mb-2 border-b border-[var(--color-wood-light)] pb-1">Guild Intel</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-sans font-bold tracking-wider uppercase">
                      <span className="text-[var(--color-ink-light)]">Est. Gain</span>
                      <span className="text-[var(--color-gold-dark)]">1200 XP</span>
                    </div>
                    <div className="flex justify-between text-xs font-sans font-bold tracking-wider uppercase">
                      <span className="text-[var(--color-ink-light)]">Multiplier</span>
                      <span className="text-[var(--color-cyan-glow)]">x1.5</span>
                    </div>
                    <div className="flex justify-between text-xs font-sans font-bold tracking-wider uppercase">
                      <span className="text-[var(--color-ink-light)]">Difficulty</span>
                      <span className="text-[#ec4899]">Hard</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" style={{ zIndex: 0 }}>
          <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="var(--color-cyan-glow)" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="var(--color-cyan-glow)" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="var(--color-cyan-glow)" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="var(--color-cyan-glow)" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      </div>
    </div>
  );
};
