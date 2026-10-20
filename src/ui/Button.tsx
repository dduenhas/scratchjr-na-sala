import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'outline' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-body font-bold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary:
    'bg-ink text-paper hover:bg-accent-deep hover:-translate-y-0.5 shadow-soft hover:shadow-lift',
  outline:
    'border border-line-strong bg-surface text-ink hover:border-ink hover:-translate-y-0.5',
  ghost: 'text-ink-soft hover:text-ink hover:bg-paper-deep',
};

const sizes: Record<Size, string> = {
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-[15px]',
};

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  );
}

export function LinkButton({
  to,
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  external,
}: CommonProps & { to?: string; href?: string; external?: boolean }) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={to ?? '/'} className={classes}>
      {children}
    </Link>
  );
}