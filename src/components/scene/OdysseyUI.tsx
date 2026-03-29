import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { footerLinks } from '../../data/odyssey';
import { cn } from '../common/Button';

type ScrollPanelProps = HTMLAttributes<HTMLDivElement> & {
  tone?: 'paper' | 'ink';
};

type EnergyBarProps = {
  label?: string;
  value: number;
  max?: number;
  accent?: 'cyan' | 'gold' | 'pink' | 'green';
  className?: string;
};

type OrbBadgeProps = {
  value: string;
  label: string;
  accent?: 'cyan' | 'gold' | 'pink' | 'green';
  className?: string;
};

export function SceneTitle({
  title,
  subtitle,
  align = 'center',
  className,
}: {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}) {
  return (
    <div className={cn('space-y-3', align === 'center' ? 'text-center' : 'text-left', className)}>
      <div className="odyssey-heading">{title}</div>
      {subtitle ? <p className="odyssey-subheading">{subtitle}</p> : null}
    </div>
  );
}

export function ScrollPanel({ className, tone = 'paper', ...props }: ScrollPanelProps) {
  return (
    <div className={cn('scroll-panel', tone === 'ink' && 'scroll-panel-ink', className)} {...props} />
  );
}

export function BrassButton({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn('brass-button', className)} {...props}>
      <span className="brass-button__inner">{children}</span>
    </button>
  );
}

export function EnergyBar({
  label,
  value,
  max = 100,
  accent = 'cyan',
  className,
}: EnergyBarProps) {
  const width = Math.max(0, Math.min(100, (value / max) * 100));

  return (
    <div className={cn('space-y-2', className)}>
      {label ? (
        <div className="flex items-center justify-between gap-4 text-xs tracking-[0.24em] text-[var(--color-ink-soft)]">
          <span>{label}</span>
          <span>{value}/{max}</span>
        </div>
      ) : null}
      <div className="energy-track">
        <div className={cn('energy-track__fill', `energy-track__fill-${accent}`)} style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

export function OrbBadge({ value, label, accent = 'cyan', className }: OrbBadgeProps) {
  return (
    <div className={cn('orb-badge', `orb-badge-${accent}`, className)}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

export function BrassCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('brass-card', className)} {...props} />;
}

export function WoodFooter({ compact = false }: { compact?: boolean }) {
  return (
    <footer className={cn('wood-footer', compact && 'wood-footer-compact')}>
      <div className="wood-footer__brand">The Academic Odyssey</div>
      <div className="wood-footer__links">
        {footerLinks.map((label) => (
          <a key={label} href="#" className="wood-footer__link">
            {label}
          </a>
        ))}
      </div>
      <div className="wood-footer__copyright">{'\u00a9 2024 University of Nottingham Ningbo China. All rights reserved.'}</div>
    </footer>
  );
}

export function SectionChip({
  children,
  accent = 'cyan',
}: {
  children: ReactNode;
  accent?: 'cyan' | 'gold';
}) {
  return <span className={cn('section-chip', accent === 'gold' && 'section-chip-gold')}>{children}</span>;
}
