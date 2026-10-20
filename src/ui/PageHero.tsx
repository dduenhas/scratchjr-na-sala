import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function PageHero({ eyebrow, title, lead, children, className }: PageHeroProps) {
  return (
    <header className={cn('relative overflow-hidden border-b border-line bg-paper-deep/50', className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/8 blur-2xl"
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        {eyebrow && (
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" aria-hidden />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
              {eyebrow}
            </span>
          </div>
        )}
        <h1 className="max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">{lead}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </header>
  );
}