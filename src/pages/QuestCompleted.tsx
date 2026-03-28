import { useNavigate } from 'react-router-dom';
import { Share2, ArrowRight } from 'lucide-react';

export const QuestCompleted = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Library */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-wood-dark)] via-[var(--color-wood-dark)]/80 to-[var(--color-wood-dark)]/90 pointer-events-none" />

      {/* Central Glowing Structure */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none flex items-center justify-center opacity-60">
        <div className="absolute inset-0 border-2 border-[var(--color-cyan-glow)] rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
        <div className="absolute inset-8 border border-[var(--color-cyan-glow)] rounded-full opacity-50" />
        <div className="absolute inset-16 border-4 border-[var(--color-cyan-glow)] rounded-full border-dotted animate-[spin_40s_linear_infinite_reverse]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50 mix-blend-screen" />
        <div className="w-64 h-64 bg-[var(--color-cyan-glow)] rounded-full blur-[100px] opacity-20" />
      </div>

      <div className="z-10 flex flex-col items-center w-full max-w-4xl px-8">
        <h1 className="font-display text-7xl mb-12 text-[#d4af37] drop-shadow-[0_0_20px_rgba(212,175,55,0.8)] tracking-wider">Quest Completed!</h1>
        
        {/* Banner */}
        <div className="relative w-full max-w-2xl mb-16">
          <div className="absolute inset-0 bg-scroll transform -skew-x-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />
          <div className="absolute inset-0 border-2 border-[var(--color-wood-light)] transform -skew-x-6 m-1" />
          <div className="relative py-6 px-12 text-center">
            <h2 className="font-sans font-bold text-2xl text-[var(--color-ink)] tracking-widest uppercase">New Skill Unlocked:</h2>
            <p className="font-display text-4xl text-[var(--color-ink)] mt-2">Algorithmic Intuition</p>
          </div>
          {/* Banner Ribbons */}
          <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-12 bg-[#a68a61] -z-10 skew-y-12 shadow-lg" />
          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-16 h-12 bg-[#a68a61] -z-10 -skew-y-12 shadow-lg" />
        </div>
        
        {/* Rewards */}
        <div className="flex justify-center gap-8 w-full mb-16">
          {/* XP Reward */}
          <div className="flex-1 bg-scroll p-6 rounded-sm border-2 border-[var(--color-wood-light)] shadow-[0_5px_15px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[var(--color-cyan-glow)] opacity-0 group-hover:opacity-10 transition-opacity" />
            <span className="font-display text-3xl text-[var(--color-ink)] mb-2">+500 XP</span>
            <div className="w-full h-2 bg-[var(--color-wood-dark)] rounded-full overflow-hidden">
              <div className="h-full bg-[var(--color-cyan-glow)] w-3/4 box-glow" />
            </div>
          </div>

          {/* Item Reward */}
          <div className="flex-1 bg-scroll p-6 rounded-sm border-2 border-[var(--color-wood-light)] shadow-[0_5px_15px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[var(--color-gold)] opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="w-12 h-12 mb-2 text-3xl">📜</div>
            <span className="font-sans font-bold text-sm text-[var(--color-ink)] tracking-wider uppercase text-center">Ancient Scroll</span>
          </div>

          {/* Reputation Reward */}
          <div className="flex-1 bg-scroll p-6 rounded-sm border-2 border-[var(--color-wood-light)] shadow-[0_5px_15px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#8b0000] opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="w-12 h-12 mb-2 text-3xl">🤝</div>
            <span className="font-sans font-bold text-sm text-[var(--color-ink)] tracking-wider uppercase text-center">Guild Reputation +10</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-8 w-full max-w-2xl">
          <button className="flex-1 relative group">
            <div className="absolute inset-0 bg-scroll rounded-sm shadow-[0_5px_15px_rgba(0,0,0,0.3)] transform group-hover:-translate-y-1 transition-transform" />
            <div className="absolute inset-0 border-2 border-[var(--color-wood-light)] m-1 rounded-sm pointer-events-none" />
            <div className="relative py-4 px-6 flex items-center justify-center gap-3 transform group-hover:-translate-y-1 transition-transform">
              <div className="w-8 h-8 bg-[#8b0000] rounded-full flex items-center justify-center shadow-inner border border-[#5a0000]">
                <Share2 size={16} className="text-[var(--color-parchment)]" />
              </div>
              <span className="font-sans font-bold text-[var(--color-ink)] tracking-wider uppercase">Share to the Forum</span>
            </div>
          </button>

          <button 
            onClick={() => navigate('/dashboard')}
            className="flex-1 relative group"
          >
            <div className="absolute inset-0 bg-[var(--color-cyan-glow)] rounded-sm shadow-[0_0_20px_rgba(0,240,255,0.4)] transform group-hover:-translate-y-1 transition-transform" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay rounded-sm pointer-events-none" />
            <div className="absolute inset-0 border-2 border-white/30 m-1 rounded-sm pointer-events-none" />
            <div className="relative py-4 px-6 flex items-center justify-center gap-3 transform group-hover:-translate-y-1 transition-transform">
              <span className="font-sans font-bold text-[var(--color-wood-dark)] tracking-wider uppercase">Continue the Odyssey</span>
              <ArrowRight size={20} className="text-[var(--color-wood-dark)]" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
