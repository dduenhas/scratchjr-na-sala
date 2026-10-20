import { useState } from 'react';
import { Flag, Square, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/cn';
import { categorias } from '@/content/blocos';
import { Mascot } from '@/art/Mascot';
import { DemoShell } from './DemoShell';

interface Parte {
  id: string;
  nome: string;
  desc: string;
}

const PARTES: Parte[] = [
  {
    id: 'bandeira',
    nome: 'Bandeira verde',
    desc: 'Inicia o projeto. Todo roteiro que começa com o bloco de bandeira verde é executado quando ela é tocada.',
  },
  {
    id: 'paleta',
    nome: 'Paleta de blocos',
    desc: 'A coluna à esquerda. Reúne os blocos organizados por categoria, cada uma com a sua cor.',
  },
  {
    id: 'palco',
    nome: 'Palco',
    desc: 'O centro da tela. É onde a animação acontece e onde os personagens vivem e se movem.',
  },
  {
    id: 'personagem',
    nome: 'Personagem',
    desc: 'O ator do palco. Ao tocar nele, aparecem os seus roteiros e você pode editá-lo no editor de pintura.',
  },
  {
    id: 'cenario',
    nome: 'Cenário',
    desc: 'O fundo do palco. Toque nele para escolher ou desenhar a paisagem da cena.',
  },
  {
    id: 'paginas',
    nome: 'Páginas (cenas)',
    desc: 'A coluna à direita. Cada página é uma cena; um projeto pode ter várias, ligadas por “ir para página”.',
  },
];

export function DemoInterface() {
  const [sel, setSel] = useState<string | null>('palco');
  const ativa = (id: string) => sel === id;
  const ring = 'ring-2 ring-accent ring-offset-2 ring-offset-surface';
  const parte = PARTES.find((p) => p.id === sel);

  return (
    <DemoShell
      titulo="Tour interativo pela tela"
      descricao="Toque nas partes marcadas para conhecer cada uma. É o mesmo percurso que você fará no projetor com a turma."
      rodape="Dica: use esta simulação no projetor para ensinar o vocabulário da interface antes de soltar os alunos nos dispositivos."
    >
      <div className="overflow-hidden rounded-xl border border-line-strong bg-paper-deep">
        <div className="flex items-center justify-between border-b border-line bg-surface px-3 py-2">
          <button
            type="button"
            onClick={() => setSel('bandeira')}
            className={cn(
              'flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-bold',
              ativa('bandeira') ? cn('bg-block-trigger/25', ring) : 'hover:bg-paper-deep',
            )}
          >
            <Flag size={14} className="text-block-sound" aria-hidden />
            <span>Iniciar</span>
          </button>
          <span className="font-display text-sm font-semibold text-ink-soft">ScratchJr</span>
          <span className="flex items-center gap-1 text-ink-mute">
            <Square size={12} className="text-block-end" aria-hidden />
            <HelpCircle size={14} aria-hidden />
          </span>
        </div>

        <div className="grid grid-cols-[44px_1fr_52px] gap-2 p-2.5">
          <button
            type="button"
            onClick={() => setSel('paleta')}
            aria-label="Paleta de blocos"
            className={cn(
              'flex flex-col gap-1.5 rounded-lg bg-surface p-1.5',
              ativa('paleta') ? ring : 'hover:bg-surface',
            )}
          >
            {categorias.map((c) => (
              <span
                key={c.id}
                className="h-5 w-full rounded"
                style={{ backgroundColor: c.hex }}
                aria-hidden
              />
            ))}
          </button>

          <div
            role="button"
            tabIndex={0}
            onClick={() => setSel('palco')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setSel('palco');
            }}
            aria-label="Palco"
            className={cn(
              'relative cursor-pointer overflow-hidden rounded-lg border border-line bg-[linear-gradient(180deg,#d9ecff,#bfe0ff)]',
              ativa('palco') ? ring : '',
            )}
          >
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0 top-[78%] bg-[#8fd48a]"
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSel('personagem');
              }}
              aria-label="Personagem"
              className={cn(
                'absolute bottom-1 left-[26%] h-[42%] w-[26%] rounded-lg',
                ativa('personagem') ? ring : '',
              )}
            >
              <Mascot className="h-full w-full" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSel('cenario');
              }}
              className={cn(
                'absolute bottom-1 right-2 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide',
                ativa('cenario')
                  ? cn('bg-accent text-white', ring)
                  : 'bg-white/70 text-ink-soft hover:bg-white',
              )}
            >
              cenário
            </button>
          </div>

          <button
            type="button"
            onClick={() => setSel('paginas')}
            aria-label="Páginas"
            className={cn(
              'flex flex-col gap-1.5 rounded-lg bg-surface p-1.5',
              ativa('paginas') ? ring : '',
            )}
          >
            <span className="h-6 w-full rounded border border-line bg-paper" aria-hidden />
            <span className="h-6 w-full rounded border border-accent bg-accent-soft" aria-hidden />
            <span className="h-6 w-full rounded border border-line bg-paper" aria-hidden />
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {PARTES.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setSel(p.id)}
            aria-pressed={ativa(p.id)}
            className={cn(
              'rounded-full border px-3 py-1 text-xs font-bold transition-colors',
              ativa(p.id)
                ? 'border-accent bg-accent text-white'
                : 'border-line-strong bg-surface text-ink-soft hover:border-ink',
            )}
          >
            {p.nome}
          </button>
        ))}
      </div>

      {parte && (
        <p className="mt-3 rounded-lg bg-paper-deep/70 px-4 py-3 text-sm leading-relaxed text-ink-soft">
          <span className="font-bold text-ink">{parte.nome}: </span>
          {parte.desc}
        </p>
      )}
    </DemoShell>
  );
}