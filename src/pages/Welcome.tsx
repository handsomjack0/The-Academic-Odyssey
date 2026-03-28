import { useNavigate } from 'react-router-dom';
import { useProgressStore } from '../store/useProgressStore';

export const Welcome = () => {
  const navigate = useNavigate();
  const setCurrentPath = useProgressStore(state => state.setCurrentPath);

  const handleSelectPath = (pathId: string) => {
    setCurrentPath(pathId);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background Library */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-wood-dark)] via-[var(--color-wood-dark)]/80 to-[var(--color-wood-dark)]/90 pointer-events-none" />

      <h1 className="font-display text-6xl mb-16 text-center text-[var(--color-parchment)] tracking-wider z-10">Welcome to the Odyssey</h1>
      
      <div className="flex gap-12 max-w-6xl w-full z-10">
        <div className="flex-1 relative bg-scroll p-4 rounded-sm border-2 border-[var(--color-wood-light)] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center rounded-sm border-2 border-[var(--color-wood-dark)] opacity-80 mix-blend-multiply" />
          <div className="absolute top-1/4 left-1/4 bg-[var(--color-wood-dark)] text-[var(--color-cyan-glow)] text-sm p-4 rounded-sm border-2 border-[var(--color-cyan-glow)] box-glow font-sans font-bold tracking-wider uppercase">
            Student Population:<br/>5000 Active Questers
          </div>
        </div>
        
        <div className="w-96 flex flex-col items-center bg-scroll p-8 rounded-sm border-2 border-[var(--color-wood-light)] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <h2 className="font-display text-3xl mb-8 text-[var(--color-ink)] border-b-2 border-[var(--color-ink)] pb-2 w-full text-center">Quest Paths</h2>
          
          <div className="space-y-6 w-full">
            <button onClick={() => handleSelectPath('neural-network')} className="w-full p-6 border-2 border-[var(--color-wood-light)] rounded-sm hover:border-[var(--color-cyan-glow)] hover:box-glow transition-all flex flex-col items-center gap-3 group relative overflow-hidden bg-[var(--color-parchment-dark)]">
              <div className="absolute inset-0 bg-[var(--color-cyan-glow)] opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="text-[var(--color-wood-dark)] group-hover:text-[var(--color-cyan-glow)] transition-colors text-5xl">⚗️</div>
              <span className="font-sans font-bold text-[var(--color-ink)] tracking-wider uppercase">Master the Sciences</span>
            </button>
            
            <button onClick={() => handleSelectPath('arts')} className="w-full p-6 border-2 border-[var(--color-wood-light)] rounded-sm hover:border-[var(--color-cyan-glow)] hover:box-glow transition-all flex flex-col items-center gap-3 group relative overflow-hidden bg-[var(--color-parchment-dark)]">
              <div className="absolute inset-0 bg-[var(--color-cyan-glow)] opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="text-[var(--color-wood-dark)] group-hover:text-[var(--color-cyan-glow)] transition-colors text-5xl">📜</div>
              <span className="font-sans font-bold text-[var(--color-ink)] tracking-wider uppercase">Explore the Arts</span>
            </button>
            
            <button onClick={() => handleSelectPath('legacy')} className="w-full p-6 border-2 border-[var(--color-wood-light)] rounded-sm hover:border-[var(--color-cyan-glow)] hover:box-glow transition-all flex flex-col items-center gap-3 group relative overflow-hidden bg-[var(--color-parchment-dark)]">
              <div className="absolute inset-0 bg-[var(--color-cyan-glow)] opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="text-[var(--color-wood-dark)] group-hover:text-[var(--color-cyan-glow)] transition-colors text-5xl">🔥</div>
              <span className="font-sans font-bold text-[var(--color-ink)] tracking-wider uppercase">Forge your Legacy</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
