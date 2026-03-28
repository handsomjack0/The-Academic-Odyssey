import { HTMLAttributes, forwardRef } from 'react';
import { cn } from './Button';

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-lg border-2 border-[var(--color-wood-light)] bg-[var(--color-wood-dark)]/80 backdrop-blur-sm text-[var(--color-parchment)] shadow-lg',
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
        'rounded-md bg-parchment text-[var(--color-ink)] shadow-xl relative overflow-hidden',
        className
      )}
      {...props}
    >
      <div className="relative z-10 p-6">
        {props.children}
      </div>
    </div>
  )
);
ParchmentCard.displayName = 'ParchmentCard';
