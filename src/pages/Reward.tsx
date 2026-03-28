import { ParchmentCard } from '../components/common/Card';

export const Reward = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      <h1 className="font-display text-4xl mb-8 text-glow">The Artificer's Vault</h1>
      
      <ParchmentCard className="w-full max-w-4xl p-12 flex flex-col items-center text-center">
        <div className="text-6xl mb-6 opacity-50">💎</div>
        <h2 className="font-display text-2xl text-[var(--color-ink)] mb-4">Under Construction</h2>
        <p className="font-serif text-[var(--color-ink-light)] max-w-lg">
          The vault keepers are currently organizing the artifacts. Soon, you will be able to exchange your hard-earned XP and Mana for rare items, titles, and cosmetic upgrades.
        </p>
      </ParchmentCard>
    </div>
  );
};
