import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  tone?: 'plain' | 'tint';
  actions?: ReactNode;
}

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className,
  innerClassName,
  tone = 'plain',
  actions,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20',
        tone === 'tint' && 'bg-paper-deep/60',
        className,
      )}
    >
      <div className={cn('mx-auto w-full max-w-6xl', innerClassName)}>
        {(eyebrow || title || lead || actions) && (
          <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              {eyebrow && (
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-8 bg-accent" aria-hidden />
                  <span className="font-body text-xs font-bold uppercase tracking-[0.22em] text-accent">
                    {eyebrow}
                  </span>
                </div>
              )}
              {title && (
                <h2 className="text-balance text-3xl font-semibold text-ink sm:text-4xl">
                  {title}
                </h2>
              )}
              {lead && (
                <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-soft">{lead}</p>
              )}
            </div>
            {actions && <div className="shrink-0">{actions}</div>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
}

export function SectionHeading({ eyebrow, title, lead, className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', className)}>
      {eyebrow && (
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-8 bg-accent" aria-hidden />
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-balance text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {lead && <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-soft">{lead}</p>}
    </div>
  );
}