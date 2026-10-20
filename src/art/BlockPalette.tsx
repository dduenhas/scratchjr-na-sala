import { cn } from '@/lib/cn';
import { blocos, categorias, type BlocoCategoriaId } from '@/content/blocos';
import { BlockChip } from './BlockChip';

interface BlockPaletteProps {
  /** Restringe às categorias informadas. */
  apenas?: BlocoCategoriaId[];
  /** Exibe apenas estes blocos (por id), mantendo o agrupamento por categoria. */
  blocosIds?: string[];
  className?: string;
}

/** Recriação da paleta de blocos do ScratchJr, agrupada por categoria. */
export function BlockPalette({ apenas, blocosIds, className }: BlockPaletteProps) {
  const cats = categorias.filter((c) => (apenas ? apenas.includes(c.id) : true));
  const filtro = blocosIds ? new Set(blocosIds) : null;

  return (
    <div className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-3', className)}>
      {cats.map((cat) => {
        const itens = blocos.filter(
          (b) => b.categoria === cat.id && (!filtro || filtro.has(b.id)),
        );
        if (itens.length === 0) return null;
        return (
          <div
            key={cat.id}
            className="print-break rounded-card border border-line bg-surface p-4 shadow-soft"
          >
            <header className="mb-3 flex items-start gap-3">
              <span
                className="mt-1 h-3 w-3 shrink-0 rounded-full"
                style={{ backgroundColor: cat.hex }}
                aria-hidden
              />
              <div>
                <h4 className="text-base font-semibold text-ink">{cat.nome}</h4>
                <p className="text-xs leading-snug text-ink-mute">{cat.resumo}</p>
              </div>
            </header>
            <div className="flex flex-wrap gap-2">
              {itens.map((b) => (
                <BlockChip key={b.id} bloco={b} size="sm" />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}