import type { ReactNode } from 'react';
import { BrassButton, EnergyBar, OrbBadge } from '../scene/OdysseyUI';
import { cn } from '../common/Button';

export function SceneHeader({
  eyebrow,
  title,
  lede,
  chips,
  className,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  chips?: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn('scene-header', className)}>
      <div className="scene-header__copy">
        <p className="scene-header__eyebrow">{eyebrow}</p>
        <h1 className="scene-header__title">{title}</h1>
        {lede ? <p className="scene-header__lede">{lede}</p> : null}
      </div>
      {chips ? <div className="scene-header__chips">{chips}</div> : null}
    </header>
  );
}

export function HeroArtifact({
  className,
  artifact,
  overlay,
  children,
}: {
  className?: string;
  artifact: ReactNode;
  overlay?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className={cn('hero-artifact', className)}>
      <div className="hero-artifact__canvas">{artifact}</div>
      {overlay ? <div className="hero-artifact__overlay">{overlay}</div> : null}
      {children ? <div className="hero-artifact__content">{children}</div> : null}
    </section>
  );
}

export function ParchmentPanel({
  title,
  eyebrow,
  children,
  className,
}: {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('parchment-panel', className)}>
      {(eyebrow || title) && (
        <div className="parchment-panel__head">
          {eyebrow ? <p className="parchment-panel__eyebrow">{eyebrow}</p> : null}
          {title ? <h2 className="parchment-panel__title">{title}</h2> : null}
        </div>
      )}
      <div className="parchment-panel__body">{children}</div>
    </section>
  );
}

export function BrassAction({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BrassButton>) {
  return (
    <BrassButton className={cn('scene-action', className)} {...props}>
      {children}
    </BrassButton>
  );
}

export function StatusRail(props: React.ComponentProps<typeof EnergyBar>) {
  return <EnergyBar className={cn('scene-status-rail', props.className)} {...props} />;
}

export function SceneChip({
  label,
  value,
  tone = 'cyan',
  className,
}: {
  label: string;
  value: ReactNode;
  tone?: 'cyan' | 'gold';
  className?: string;
}) {
  return (
    <div className={cn('scene-chip', tone === 'gold' && 'scene-chip-gold', className)}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export function PathNode({
  title,
  subtitle,
  active = false,
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  subtitle?: string;
  active?: boolean;
}) {
  return (
    <button className={cn('path-node', active && 'path-node-active', className)} {...props}>
      <div className="path-node__halo" />
      <div className="path-node__copy">
        <strong>{title}</strong>
        {subtitle ? <span>{subtitle}</span> : null}
      </div>
      {children ? <div className="path-node__extra">{children}</div> : null}
    </button>
  );
}

export function SealBadge({
  label,
  tone = 'cyan',
  className,
}: {
  label: string;
  tone?: 'cyan' | 'gold';
  className?: string;
}) {
  return (
    <div className={cn('seal-badge', tone === 'gold' && 'seal-badge-gold', className)}>
      <OrbBadge value={tone === 'gold' ? 'G' : 'A'} label={label} />
      <span>{label}</span>
    </div>
  );
}

export function TooltipCard({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn('tooltip-card', className)}>
      <strong>{title}</strong>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}
