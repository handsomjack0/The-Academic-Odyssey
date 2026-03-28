import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-display font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan-glow)] disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-[var(--color-wood-light)] border-2 border-[var(--color-wood-dark)] text-[var(--color-cyan-glow)] hover:box-glow hover:border-[var(--color-cyan-glow)]': variant === 'primary',
            'bg-[var(--color-parchment)] text-[var(--color-ink)] hover:bg-[var(--color-parchment-dark)] border-2 border-[var(--color-wood-dark)]': variant === 'secondary',
            'hover:bg-[var(--color-wood-light)] text-[var(--color-parchment)]': variant === 'ghost',
            'bg-red-900/80 border-2 border-red-700 text-red-200 hover:bg-red-800': variant === 'danger',
            'bg-green-900/80 border-2 border-green-700 text-green-200 hover:bg-green-800': variant === 'success',
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-8 text-base': size === 'md',
            'h-14 px-10 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
