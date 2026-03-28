import { ParchmentCard } from '../components/common/Card';
import { useProgressStore } from '../store/useProgressStore';

export const Profile = () => {
  const { level, xp, mana, studyEnergy, badges, streak } = useProgressStore();

  return (
    <div className="h-full flex flex-col items-center p-8">
      <h1 className="font-display text-4xl mb-8 text-glow">Scholar's Profile</h1>
      
      <div className="flex gap-8 w-full max-w-5xl">
        <ParchmentCard className="w-1/3 flex flex-col items-center p-8">
          <div className="w-48 h-48 rounded-full border-4 border-[var(--color-wood-dark)] overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] mb-6">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <h2 className="font-display text-2xl text-[var(--color-ink)] mb-2">Aria The Seeker</h2>
          <p className="font-serif text-[var(--color-ink-light)] mb-6">Level {level} Artificer</p>
          
          <div className="w-full space-y-4">
            <div>
              <div className="flex justify-between text-sm font-serif font-bold mb-1 text-[var(--color-ink)]">
                <span>Experience</span>
                <span>{xp} XP</span>
              </div>
              <div className="h-3 bg-[var(--color-wood-light)] rounded-full overflow-hidden border border-[var(--color-wood-dark)]">
                <div className="h-full bg-[var(--color-gold)] box-glow transition-all" style={{ width: `${(xp % 1000) / 10}%` }} />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm font-serif font-bold mb-1 text-[var(--color-ink)]">
                <span>Mana</span>
                <span>{mana} / 100</span>
              </div>
              <div className="h-3 bg-[var(--color-wood-light)] rounded-full overflow-hidden border border-[var(--color-wood-dark)]">
                <div className="h-full bg-[var(--color-cyan-glow)] box-glow transition-all" style={{ width: `${mana}%` }} />
              </div>
            </div>
          </div>
        </ParchmentCard>
        
        <div className="flex-1 flex flex-col gap-8">
          <ParchmentCard className="p-8">
            <h3 className="font-display text-2xl text-[var(--color-ink)] border-b-2 border-[var(--color-ink)] pb-2 mb-6">Stats & Streaks</h3>
            <div className="flex justify-around">
              <div className="text-center">
                <div className="text-4xl mb-2">🔥</div>
                <div className="font-display text-3xl text-[var(--color-ink)]">{streak}</div>
                <div className="font-serif text-sm text-[var(--color-ink-light)]">Day Streak</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">⚡</div>
                <div className="font-display text-3xl text-[var(--color-ink)]">{studyEnergy}%</div>
                <div className="font-serif text-sm text-[var(--color-ink-light)]">Study Energy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">📚</div>
                <div className="font-display text-3xl text-[var(--color-ink)]">12</div>
                <div className="font-serif text-sm text-[var(--color-ink-light)]">Quests Completed</div>
              </div>
            </div>
          </ParchmentCard>
          
          <ParchmentCard className="p-8 flex-1">
            <h3 className="font-display text-2xl text-[var(--color-ink)] border-b-2 border-[var(--color-ink)] pb-2 mb-6">Badges of Honor</h3>
            <div className="flex flex-wrap gap-4">
              {badges.length > 0 ? (
                badges.map((badge, idx) => (
                  <div key={idx} className="w-20 h-20 rounded-full bg-[var(--color-wood-dark)] border-2 border-[var(--color-gold)] flex items-center justify-center text-3xl shadow-[0_0_15px_rgba(212,175,55,0.4)]" title={badge}>
                    🏅
                  </div>
                ))
              ) : (
                <div className="w-full text-center py-8 text-[var(--color-ink-light)] font-serif italic">
                  No badges earned yet. Your journey begins!
                </div>
              )}
            </div>
          </ParchmentCard>
        </div>
      </div>
    </div>
  );
};
