import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface DemoShellProps {
  titulo: string;
  descricao?: string;
  children: ReactNode;
  controls?: ReactNode;
  rodape?: string;
  className?: string;
}

/** Moldura padrão de todas as simulações para o professor experimentar. */
export function DemoShell({
  titulo,
  descricao,
  children,
  controls,
  rodape,
  className,
}: DemoShellProps) {
  return (
    <div
      className={cn(
        'print-break rounded-card border border-line bg-surface p-5 shadow-soft',
        className,
      )}
    >
      <header className="mb-2 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.14em] text-accent-deep">
          Simulação
        </span>
        <h4 className="text-lg font-semibold text-ink">{titulo}</h4>
      </header>
      {descricao && <p className="mb-4 text-sm leading-relaxed text-ink-soft">{descricao}</p>}
      <div>{children}</div>
      {controls && <div className="mt-4 flex flex-wrap items-center gap-2">{controls}</div>}
      {rodape && (
        <p className="mt-3 text-xs font-semibold text-ink-mute">{rodape}</p>
      )}
    </div>
  );
}