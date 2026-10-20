import { cn } from '@/lib/cn';
import { categoriaById, type Bloco } from '@/content/blocos';
import { blocoIcon } from './icons';

interface BlockChipProps {
  bloco: Bloco;
  className?: string;
  size?: 'sm' | 'md';
}

/**
 * Representação de um bloco do ScratchJr: peça arredondada na cor da sua
 * categoria, com ícone e rótulo. Os gatilhos ganham uma “orelha” à esquerda.
 */
export function BlockChip({ bloco, className, size = 'md' }: BlockChipProps) {
  const cat = categoriaById[bloco.categoria];
  const Icon = blocoIcon(bloco.id);
  const isGatilho = bloco.categoria === 'gatilho';
  const disabled = !cat.usadaNestePlano;

  return (
    <span
      className={cn(
        'relative inline-flex items-center gap-2 rounded-lg font-bold text-white shadow-sm',
        size === 'md' ? 'px-3 py-1.5 text-[13px]' : 'px-2.5 py-1 text-xs',
        isGatilho ? 'rounded-l-md pl-4' : '',
        disabled && 'opacity-45 saturate-50',
        className,
      )}
      style={{ backgroundColor: cat.hex }}
      title={bloco.descricao}
    >
      {isGatilho && (
        <span
          aria-hidden
          className="absolute -left-1.5 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full"
          style={{ backgroundColor: cat.hex }}
        />
      )}
      <Icon size={size === 'md' ? 15 : 13} strokeWidth={2.6} aria-hidden />
      <span className="whitespace-nowrap">{bloco.nome}</span>
      <span
        aria-hidden
        className="absolute -right-1 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-surface"
        style={{ backgroundColor: cat.hex }}
      />
    </span>
  );
}