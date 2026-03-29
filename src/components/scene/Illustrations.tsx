import { BookOpen, BrainCircuit, Crown, FlaskConical, Hourglass, Shield, Sparkles, UserRound } from 'lucide-react';
import { cn } from '../common/Button';

export function ScholarPortrait({ className }: { className?: string }) {
  return (
    <div className={cn('portrait-medallion', className)}>
      <div className="portrait-medallion__ring" />
      <div className="portrait-medallion__core">
        <UserRound size={42} />
      </div>
    </div>
  );
}

export function AcademyCrest({ className }: { className?: string }) {
  return (
    <div className={cn('crest-badge', className)}>
      <Shield size={34} />
      <Sparkles size={18} />
    </div>
  );
}

export function ArcaneBook({ className, active = false }: { className?: string; active?: boolean }) {
  return (
    <div className={cn('arcane-book', active && 'arcane-book-active', className)}>
      <div className="arcane-book__ring">
        <BookOpen size={28} />
      </div>
      <div className="arcane-book__spine" />
    </div>
  );
}

export function PhilosopherStatue({ className }: { className?: string }) {
  return (
    <div className={cn('statue-figure', className)}>
      <div className="statue-figure__halo" />
      <div className="statue-figure__head" />
      <div className="statue-figure__torso" />
      <div className="statue-figure__pedestal" />
    </div>
  );
}

export function AlchemyFlask({ className }: { className?: string }) {
  return (
    <div className={cn('alchemy-flask', className)}>
      <div className="alchemy-flask__neck" />
      <div className="alchemy-flask__body">
        <FlaskConical size={108} />
      </div>
    </div>
  );
}

export function GlyphOrb({
  kind,
  className,
}: {
  kind: 'focus' | 'guild' | 'trial' | 'research';
  className?: string;
}) {
  const iconMap = {
    focus: Hourglass,
    guild: UserRound,
    trial: FlaskConical,
    research: BrainCircuit,
  };
  const Icon = iconMap[kind];

  return (
    <div className={cn('glyph-orb', className)}>
      <Icon size={56} />
    </div>
  );
}

export function RewardCore({ className }: { className?: string }) {
  return (
    <div className={cn('reward-core', className)}>
      <div className="reward-core__gear" />
      <div className="reward-core__sigil">
        <BrainCircuit size={84} />
      </div>
    </div>
  );
}

export function CrownSeal({ className }: { className?: string }) {
  return (
    <div className={cn('crown-seal', className)}>
      <Crown size={28} />
    </div>
  );
}
