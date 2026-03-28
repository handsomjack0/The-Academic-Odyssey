import { ParchmentCard } from '../components/common/Card';

export const Library = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      <h1 className="font-display text-4xl mb-8 text-glow">The Great Archive</h1>
      
      <ParchmentCard className="w-full max-w-4xl p-12 flex flex-col items-center text-center">
        <div className="text-6xl mb-6 opacity-50">📚</div>
        <h2 className="font-display text-2xl text-[var(--color-ink)] mb-4">Under Construction</h2>
        <p className="font-serif text-[var(--color-ink-light)] max-w-lg">
          The librarians are currently cataloging the ancient scrolls and modern tomes. Soon, you will have access to a vast repository of knowledge, research papers, and reference materials to aid your quests.
        </p>
      </ParchmentCard>
    </div>
  );
};
