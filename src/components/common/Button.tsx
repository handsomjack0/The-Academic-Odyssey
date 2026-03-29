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
          'inline-flex items-center justify-center rounded-full font-serif font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan)] disabled:pointer-events-none disabled:opacity-50',
          {
            'border border-[rgba(209,166,90,0.72)] bg-[linear-gradient(180deg,rgba(118,79,34,0.95),rgba(59,34,17,0.95))] text-[var(--color-cyan)] shadow-[0_0_18px_rgba(120,239,255,0.16)]': variant === 'primary',
            'border border-[rgba(110,72,39,0.86)] bg-[rgba(255,248,228,0.74)] text-[var(--color-ink)]': variant === 'secondary',
            'text-[var(--color-parchment-soft)] hover:bg-white/6': variant === 'ghost',
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
