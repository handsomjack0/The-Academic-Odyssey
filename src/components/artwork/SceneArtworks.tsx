import { ArcaneBook, CrownSeal, PhilosopherStatue, RewardCore, ScholarPortrait } from '../scene/Illustrations';
import { cn } from '../common/Button';

export function GreatHallArtwork({ className }: { className?: string }) {
  return (
    <div className={cn('scene-artwork scene-artwork-hall', className)}>
      <div className="scene-artwork__halo scene-artwork__halo-hall" />
      <div className="scene-artwork__column scene-artwork__column-left" />
      <div className="scene-artwork__column scene-artwork__column-right" />
      <div className="scene-artwork__beam scene-artwork__beam-hall" />
      <div className="scene-artwork__lectern">
        <div className="scene-artwork__lectern-light" />
        <div className="scene-artwork__book-arc">
          <ArcaneBook className="scene-artwork__book-side" />
          <ArcaneBook active className="scene-artwork__book-main" />
          <ArcaneBook className="scene-artwork__book-side" />
        </div>
        <div className="scene-artwork__base" />
      </div>
    </div>
  );
}

export function ArchiveCodexArtwork({ className }: { className?: string }) {
  return (
    <div className={cn('scene-artwork scene-artwork-archive', className)}>
      <div className="scene-artwork__halo scene-artwork__halo-archive" />
      <div className="scene-artwork__shelf scene-artwork__shelf-left" />
      <div className="scene-artwork__shelf scene-artwork__shelf-right" />
      <div className="scene-artwork__codex">
        <div className="scene-artwork__codex-glow" />
        <div className="scene-artwork__codex-page scene-artwork__codex-page-left" />
        <div className="scene-artwork__codex-page scene-artwork__codex-page-right" />
        <div className="scene-artwork__codex-bind" />
      </div>
      <div className="scene-artwork__archive-books">
        <ArcaneBook className="scene-artwork__archive-book scene-artwork__archive-book-a" />
        <ArcaneBook className="scene-artwork__archive-book scene-artwork__archive-book-b" />
        <ArcaneBook className="scene-artwork__archive-book scene-artwork__archive-book-c" />
        <ArcaneBook className="scene-artwork__archive-book scene-artwork__archive-book-d" />
      </div>
    </div>
  );
}

export function SageCoreArtwork({ className }: { className?: string }) {
  return (
    <div className={cn('scene-artwork scene-artwork-sage', className)}>
      <div className="scene-artwork__halo scene-artwork__halo-sage" />
      <div className="scene-artwork__beam scene-artwork__beam-sage" />
      <PhilosopherStatue className="scene-artwork__sage-statue" />
      <div className="scene-artwork__orbital scene-artwork__orbital-outer" />
      <div className="scene-artwork__orbital scene-artwork__orbital-inner" />
    </div>
  );
}

export function MethodologyAltarArtwork({ className }: { className?: string }) {
  return (
    <div className={cn('scene-artwork scene-artwork-method', className)}>
      <div className="scene-artwork__halo scene-artwork__halo-method" />
      <div className="scene-artwork__method-ring scene-artwork__method-ring-outer" />
      <div className="scene-artwork__method-ring scene-artwork__method-ring-inner" />
      <div className="scene-artwork__method-altar">
        <div className="scene-artwork__method-core" />
        <div className="scene-artwork__method-base" />
      </div>
    </div>
  );
}

export function ConstellationAstrolabeArtwork({ className }: { className?: string }) {
  return (
    <div className={cn('scene-artwork scene-artwork-constellation', className)}>
      <div className="scene-artwork__halo scene-artwork__halo-constellation" />
      <div className="scene-artwork__astrolabe-ring scene-artwork__astrolabe-ring-outer" />
      <div className="scene-artwork__astrolabe-ring scene-artwork__astrolabe-ring-mid" />
      <div className="scene-artwork__astrolabe-ring scene-artwork__astrolabe-ring-inner" />
      <RewardCore className="scene-artwork__astrolabe-core" />
    </div>
  );
}

export function QuestScrollArtwork({ className }: { className?: string }) {
  return (
    <div className={cn('scene-artwork scene-artwork-quest', className)}>
      <div className="scene-artwork__halo scene-artwork__halo-quest" />
      <div className="scene-artwork__quest-scroll">
        <div className="scene-artwork__scroll-roller scene-artwork__scroll-roller-top" />
        <div className="scene-artwork__scroll-sheet" />
        <div className="scene-artwork__scroll-roller scene-artwork__scroll-roller-bottom" />
      </div>
    </div>
  );
}

export function TrialApparatusArtwork({ className }: { className?: string }) {
  return (
    <div className={cn('scene-artwork scene-artwork-trial', className)}>
      <div className="scene-artwork__halo scene-artwork__halo-trial" />
      <div className="scene-artwork__trial-flask" />
      <div className="scene-artwork__trial-rig" />
      <div className="scene-artwork__trial-fire" />
    </div>
  );
}

export function DeepStudyArtwork({ className }: { className?: string }) {
  return (
    <div className={cn('scene-artwork scene-artwork-deep', className)}>
      <div className="scene-artwork__halo scene-artwork__halo-deep" />
      <div className="scene-artwork__deep-table" />
      <div className="scene-artwork__deep-scroll" />
      <div className="scene-artwork__deep-candle" />
      <div className="scene-artwork__deep-hourglass" />
    </div>
  );
}

export function RewardCoreArtwork({ className }: { className?: string }) {
  return (
    <div className={cn('scene-artwork scene-artwork-completion', className)}>
      <div className="scene-artwork__halo scene-artwork__halo-reward" />
      <RewardCore className="scene-artwork__completion-core" />
      <div className="scene-artwork__completion-rays" />
    </div>
  );
}

export function GuildSealArtwork({ className }: { className?: string }) {
  return (
    <div className={cn('scene-artwork scene-artwork-guild', className)}>
      <div className="scene-artwork__halo scene-artwork__halo-guild" />
      <div className="scene-artwork__guild-dais" />
      <CrownSeal className="scene-artwork__guild-seal" />
    </div>
  );
}

export function IdentityGateArtwork({ className }: { className?: string }) {
  return (
    <div className={cn('scene-artwork scene-artwork-login', className)}>
      <div className="scene-artwork__halo scene-artwork__halo-login" />
      <div className="scene-artwork__gate-scroll">
        <div className="scene-artwork__scroll-roller scene-artwork__scroll-roller-top" />
        <div className="scene-artwork__scroll-sheet scene-artwork__scroll-sheet-login" />
        <div className="scene-artwork__scroll-roller scene-artwork__scroll-roller-bottom" />
      </div>
    </div>
  );
}

export function JourneyGatewayArtwork({ className }: { className?: string }) {
  return (
    <div className={cn('scene-artwork scene-artwork-gateway', className)}>
      <div className="scene-artwork__halo scene-artwork__halo-gateway" />
      <div className="scene-artwork__gateway-map" />
      <div className="scene-artwork__gateway-node scene-artwork__gateway-node-a" />
      <div className="scene-artwork__gateway-node scene-artwork__gateway-node-b" />
      <div className="scene-artwork__gateway-node scene-artwork__gateway-node-c" />
    </div>
  );
}

export function DossierDeskArtwork({ className }: { className?: string }) {
  return (
    <div className={cn('scene-artwork scene-artwork-dossier', className)}>
      <div className="scene-artwork__halo scene-artwork__halo-dossier" />
      <div className="scene-artwork__desk-surface" />
      <ScholarPortrait className="scene-artwork__desk-portrait" />
    </div>
  );
}
