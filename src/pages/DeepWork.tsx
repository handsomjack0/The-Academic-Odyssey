import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ParchmentCard } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { useProgressStore } from '../store/useProgressStore';

export const DeepWork = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(45 * 60);
  const completeTask = useProgressStore(state => state.completeTask);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleComplete = () => {
    if (taskId) completeTask(taskId);
    navigate(`/quest/completed`);
  };

  return (
    <div className="h-full flex flex-col items-center relative">
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div className="w-12 h-12 rounded-full border-2 border-[var(--color-cyan-glow)] flex items-center justify-center box-glow">
          <span className="text-2xl">🤖</span>
        </div>
      </div>
      
      <h1 className="font-display text-4xl mb-12 text-glow">Immersive Deep Study Sanctum</h1>
      
      <div className="flex-1 w-full max-w-4xl relative flex justify-center items-center">
        {/* Desk/Table background */}
        <div className="absolute inset-0 bg-[var(--color-wood)] rounded-lg shadow-2xl z-0" style={{ transform: 'perspective(1000px) rotateX(10deg) scale(1.05)' }} />
        
        {/* Ambient Controls */}
        <div className="absolute left-[-100px] bottom-12 flex flex-col gap-4 z-20">
          <Button variant="secondary" className="w-40 justify-start opacity-80 hover:opacity-100">Rainy Library</Button>
          <Button variant="secondary" className="w-40 justify-start opacity-80 hover:opacity-100">Cosmic Hum</Button>
          <Button variant="secondary" className="w-40 justify-start opacity-80 hover:opacity-100">Lo-Fi Lute</Button>
        </div>
        
        {/* Candle */}
        <div className="absolute left-12 top-1/4 z-10 flex flex-col items-center">
          <div className="w-2 h-4 bg-yellow-200 rounded-full blur-sm animate-pulse" />
          <div className="w-8 h-24 bg-cyan-100 rounded-sm shadow-[0_0_20px_rgba(0,240,255,0.5)]" />
        </div>
        
        {/* Hourglass */}
        <div className="absolute right-[-80px] top-12 z-20 flex flex-col items-center">
          <div className="w-24 h-48 border-4 border-[var(--color-gold)] rounded-full flex flex-col items-center justify-center relative overflow-hidden bg-[var(--color-wood-dark)]/50 backdrop-blur-sm">
            <div className="text-2xl font-display text-[var(--color-cyan-glow)] text-glow z-10 bg-[var(--color-wood-dark)]/80 px-2 rounded">{formatTime(timeLeft)}</div>
            <div className="text-xs font-serif text-[var(--color-parchment)] z-10 bg-[var(--color-wood-dark)]/80 px-2 rounded">Remaining</div>
            
            {/* Sand effect */}
            <div className="absolute bottom-0 w-full bg-[var(--color-cyan-glow)] opacity-50" style={{ height: `${((45 * 60 - timeLeft) / (45 * 60)) * 50}%` }} />
            <div className="absolute top-0 w-full bg-[var(--color-cyan-glow)] opacity-50" style={{ height: `${(timeLeft / (45 * 60)) * 50}%` }} />
          </div>
        </div>

        {/* Scroll Content */}
        <ParchmentCard className="w-full max-w-2xl min-h-[500px] z-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-12">
          <h2 className="font-display text-2xl mb-6 font-bold text-[var(--color-ink)]">Chapter 1: Foundations of Neural Networks</h2>
          
          <div className="space-y-6 font-serif text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              The <span className="bg-[var(--color-cyan-glow)]/20 px-1 rounded border border-[var(--color-cyan-glow)]">perceptron</span> is a perceptron, art equally accesses another of cord computer neuroscience prediction. This moment concludes incuter how networks using in polend on foundations of neural networks.
            </p>
            <p>
              The <span className="bg-[var(--color-cyan-glow)]/20 px-1 rounded border border-[var(--color-cyan-glow)]">activation function</span> is a wolly method of note that manearly concernation, we intercrive to rmtmernt which the false activation functions includan one computims, about prevorus session start data and is simpure; eatoextem is not the propest or concomptiove model.
            </p>
            <p>
              While sure so data bs-what a target om function that as the <span className="bg-[var(--color-cyan-glow)]/20 px-1 rounded border border-[var(--color-cyan-glow)]">backpropagation</span> is Inaining that analomes that has <strong>back propagation</strong> and erectie aor propagation and hoaz the assessing cont enremzation. twitow propositions the system whem learn more resumed top latents in renesenaments.
            </p>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button onClick={handleComplete} size="lg">Complete Study Session</Button>
          </div>
        </ParchmentCard>
      </div>
    </div>
  );
};
