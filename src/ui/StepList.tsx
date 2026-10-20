import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export interface StepItem {
  titulo: string;
  corpo: ReactNode;
  dica?: string;
}

/** Lista de passos numerada, com numeração em Fraunces. */
export function StepList({ steps, className }: { steps: StepItem[]; className?: string }) {
  return (
    <ol className={cn('space-y-4', className)}>
      {steps.map((s, i) => (
        <li
          key={s.titulo}
          className="print-break group relative grid grid-cols-[auto_1fr] gap-4 rounded-card border border-line bg-surface p-5 transition-shadow duration-300 hover:shadow-soft"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-display text-base font-semibold text-paper">
            {i + 1}
          </span>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-ink">{s.titulo}</h3>
            <div className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{s.corpo}</div>
            {s.dica && (
              <p className="mt-3 border-l-2 border-accent/50 pl-3 text-sm italic text-accent-deep">
                {s.dica}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}