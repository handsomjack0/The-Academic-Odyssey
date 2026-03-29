import { HTMLAttributes, forwardRef } from 'react';
import { cn } from './Button';

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'brass-card rounded-[1.25rem] p-6 text-[var(--color-parchment-soft)]',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

export const ParchmentCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'scroll-panel relative overflow-hidden text-[var(--color-ink)]',
        className
      )}
      {...props}
    >
      <div className="relative z-10">
        {props.children}
      </div>
    </div>
  )
);
ParchmentCard.displayName = 'ParchmentCard';
