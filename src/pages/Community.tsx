import { ParchmentCard } from '../components/common/Card';

export const Community = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      <h1 className="font-display text-4xl mb-8 text-glow">The Grand Guildhall</h1>
      
      <ParchmentCard className="w-full max-w-4xl p-12 flex flex-col items-center text-center">
        <div className="text-6xl mb-6 opacity-50">🏛️</div>
        <h2 className="font-display text-2xl text-[var(--color-ink)] mb-4">Under Construction</h2>
        <p className="font-serif text-[var(--color-ink-light)] max-w-lg">
          The artificers are still assembling the communication arrays. Soon, you will be able to join guilds, share discoveries, and embark on cooperative quests with fellow scholars.
        </p>
      </ParchmentCard>
    </div>
  );
};
