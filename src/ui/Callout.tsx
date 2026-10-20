import type { ReactNode } from 'react';
import { Lightbulb, Info, TriangleAlert, NotebookPen } from 'lucide-react';
import { cn } from '@/lib/cn';

type CalloutTone = 'info' | 'tip' | 'warn' | 'nota';

const tones: Record<
  CalloutTone,
  { icon: typeof Info; label: string; ring: string; icon$: string }
> = {
  info: { icon: Info, label: 'Contexto', ring: 'border-eixo-pc/30 bg-eixo-pc/5', icon$: 'text-eixo-pc' },
  tip: { icon: Lightbulb, label: 'Dica', ring: 'border-accent/30 bg-accent-tint', icon$: 'text-accent' },
  warn: {
    icon: TriangleAlert,
    label: 'Atenção',
    ring: 'border-block-control/35 bg-block-control/8',
    icon$: 'text-block-control',
  },
  nota: {
    icon: NotebookPen,
    label: 'Nota do plano',
    ring: 'border-line-strong bg-paper-deep/70',
    icon$: 'text-ink-soft',
  },
};

interface CalloutProps {
  tone?: CalloutTone;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Callout({ tone = 'tip', title, children, className }: CalloutProps) {
  const t = tones[tone];
  const Icon = t.icon;
  return (
    <div className={cn('print-break rounded-card border p-5', t.ring, className)}>
      <div className="flex gap-3">
        <Icon size={20} className={cn('mt-0.5 shrink-0', t.icon$)} aria-hidden />
        <div className="min-w-0">
          <p className={cn('mb-1 text-xs font-bold uppercase tracking-[0.16em]', t.icon$)}>
            {title ?? t.label}
          </p>
          <div className="text-[15px] leading-relaxed text-ink-soft">{children}</div>
        </div>
      </div>
    </div>
  );
}