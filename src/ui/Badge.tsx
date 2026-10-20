import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { eixoById, habilidadeByCodigo, type EixoId } from '@/content/bncc';

export function Pill({
  children,
  className,
  tone = 'neutral',
}: {
  children: ReactNode;
  className?: string;
  tone?: 'neutral' | 'accent';
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.12em]',
        tone === 'accent'
          ? 'bg-accent-soft text-accent-deep'
          : 'bg-paper-deep text-ink-soft',
        className,
      )}
    >
      {children}
    </span>
  );
}

const eixoDot: Record<EixoId, string> = {
  'pensamento-computacional': 'bg-eixo-pc',
  'mundo-digital': 'bg-eixo-md',
  'cultura-digital': 'bg-eixo-cd',
};

interface BnccChipProps {
  codigo: string;
  expandable?: boolean;
  className?: string;
}

/** Mostra um código da BNCC Computação com o eixo correspondente. */
export function BnccChip({ codigo, expandable = false, className }: BnccChipProps) {
  const hab = habilidadeByCodigo[codigo];
  if (!hab) {
    return (
      <span className={cn('font-mono text-xs font-bold text-ink', className)}>{codigo}</span>
    );
  }
  const eixo = eixoById[hab.eixo];
  return (
    <span
      className={cn(
        'inline-flex flex-wrap items-center gap-2 rounded-lg border border-line bg-surface px-2.5 py-1.5',
        className,
      )}
      title={expandable ? undefined : hab.texto}
    >
      <span className={cn('h-2 w-2 shrink-0 rounded-full', eixoDot[hab.eixo])} aria-hidden />
      <span className="font-mono text-xs font-bold tracking-tight text-ink">{hab.codigo}</span>
      <span className="text-[11px] font-semibold uppercase tracking-wide text-ink-mute">
        {eixo.nome}
      </span>
    </span>
  );
}

/** Bloco de habilidade BNCC com texto completo — usado no painel BNCC. */
export function BnccCard({
  codigo,
  destaque = false,
}: {
  codigo: string;
  destaque?: boolean;
}) {
  const hab = habilidadeByCodigo[codigo];
  if (!hab) return null;
  const eixo = eixoById[hab.eixo];
  return (
    <article
      className={cn(
        'print-break rounded-card border bg-surface p-5',
        destaque ? 'border-accent/40 shadow-soft' : 'border-line',
      )}
    >
      <header className="mb-2 flex flex-wrap items-center gap-2">
        <span className="font-mono text-sm font-bold text-ink">{hab.codigo}</span>
        <span className="text-xs font-semibold uppercase tracking-wide text-ink-mute">
          {hab.anos} · {eixo.nome}
        </span>
      </header>
      <p className="text-[15px] leading-relaxed text-ink-soft">{hab.texto}</p>
      <footer className="mt-3 text-xs font-semibold uppercase tracking-wide text-ink-mute">
        {hab.objeto}
      </footer>
    </article>
  );
}