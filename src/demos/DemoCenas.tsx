import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/cn';
import { blocoById } from '@/content/blocos';
import { BlockChip } from '@/art/BlockChip';
import { Stage, Sprite, type CenaId } from '@/art/Stage';
import { Button } from '@/ui/Button';
import { DemoShell } from './DemoShell';
import { spriteInicial } from './engine';

const paginas: { cena: CenaId; nome: string }[] = [
  { cena: 'sky', nome: 'Começo' },
  { cena: 'sunset', nome: 'Meio' },
  { cena: 'night', nome: 'Fim' },
];

export function DemoCenas() {
  const [i, setI] = useState(0);

  return (
    <DemoShell
      titulo="Navegue entre as cenas"
      descricao="Cada página é uma cena com o seu próprio cenário. Use “ir para página” para o público avançar a história."
      controls={
        <>
          <Button size="md" variant="outline" onClick={() => setI((v) => Math.max(0, v - 1))} disabled={i === 0}>
            <ChevronLeft size={15} /> Página anterior
          </Button>
          <span className="text-sm font-bold text-ink-soft">
            Cena {i + 1} de {paginas.length}
          </span>
          <Button
            size="md"
            variant="outline"
            onClick={() => setI((v) => Math.min(paginas.length - 1, v + 1))}
            disabled={i === paginas.length - 1}
          >
            Próxima página <ChevronRight size={15} />
          </Button>
        </>
      }
      rodape="Na tela real, o bloco “ir para página” costuma ser disparado por toque, para o público controlar o ritmo."
    >
      <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
        <Stage cena={paginas[i].cena} label={`Página ${i + 1} — ${paginas[i].nome}`}>
          <Sprite {...spriteInicial} x={50} y={62} />
        </Stage>
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-mute">
            Roteiro da navegação
          </p>
          <div className="flex flex-wrap gap-2">
            <BlockChip bloco={blocoById.toque} size="sm" />
            <BlockChip bloco={blocoById['ir-pagina']} size="sm" />
          </div>
          <div className="mt-4 flex gap-3">
            {paginas.map((p, idx) => (
              <button
                key={p.nome}
                type="button"
                onClick={() => setI(idx)}
                className={cn(
                  'flex-1 rounded-lg border p-2 text-xs font-bold transition-colors',
                  idx === i
                    ? 'border-accent bg-accent-soft text-accent-deep'
                    : 'border-line bg-surface text-ink-soft hover:border-ink',
                )}
              >
                {idx + 1}. {p.nome}
              </button>
            ))}
          </div>
        </div>
      </div>
    </DemoShell>
  );
}