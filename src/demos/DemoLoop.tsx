import { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/cn';
import { blocoById } from '@/content/blocos';
import { BlockChip } from '@/art/BlockChip';
import { Stage, Sprite } from '@/art/Stage';
import { Button } from '@/ui/Button';
import { DemoShell } from './DemoShell';
import { spriteInicial, useTimeline, type SpriteSim } from './engine';

export function DemoLoop() {
  const [n, setN] = useState(4);
  const [acao, setAcao] = useState<'mover-direita' | 'girar-horario'>('mover-direita');
  const [sprite, setSprite] = useState<SpriteSim>(spriteInicial);
  const [contador, setContador] = useState(0);
  const [tocando, setTocando] = useState(false);
  const { run, clear } = useTimeline();

  const tocar = () => {
    clear();
    setTocando(true);
    const base = { ...spriteInicial, x: 24 };
    setSprite(base);
    const passoMs = 560;

    const steps = Array.from({ length: n }, (_, i) => ({
      at: (i + 1) * passoMs,
      fn: () => {
        setContador(i + 1);
        setSprite((s) =>
          acao === 'mover-direita'
            ? { ...s, x: Math.min(88, s.x + 13) }
            : { ...s, rot: s.rot + 90 },
        );
      },
    }));

    run(steps, (n + 1) * passoMs, () => {
      setTocando(false);
      setContador(0);
    });
  };

  const reset = () => {
    clear();
    setTocando(false);
    setContador(0);
    setSprite(spriteInicial);
  };

  return (
    <DemoShell
      titulo="Repetir em vez de empilhar"
      descricao="Um único bloco Repetir faz o trabalho de muitos. Escolha a ação e quantas vezes repetir."
      controls={
        <>
          <div className="flex items-center gap-2 rounded-full border border-line-strong bg-surface px-3 py-1.5 text-sm font-bold">
            Repetir
            <input
              type="range"
              min={2}
              max={6}
              value={n}
              onChange={(e) => setN(Number(e.target.value))}
              className="accent-[#f5871f]"
              aria-label="Número de repetições"
            />
            <span className="font-numeric text-block-control">{n}×</span>
          </div>
          <div className="flex gap-1">
            {(['mover-direita', 'girar-horario'] as const).map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setAcao(a)}
                aria-pressed={acao === a}
                className={cn(
                  'rounded-lg border px-2 py-1 transition-colors',
                  acao === a ? 'border-accent bg-accent-soft' : 'border-line-strong',
                )}
              >
                <BlockChip bloco={blocoById[a]} size="sm" />
              </button>
            ))}
          </div>
          <Button size="md" onClick={tocar} disabled={tocando}>
            <Play size={15} /> Iniciar
          </Button>
          <Button size="md" variant="ghost" onClick={reset}>
            <RotateCcw size={15} />
          </Button>
        </>
      }
      rodape="Repetir tem um número fixo. O “repetir para sempre” é diferente e vem na próxima aula."
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-mute">
            Roteiro gerado
          </p>
          <div className="flex flex-wrap items-center gap-2 rounded-lg border border-dashed border-line-strong bg-paper-deep/50 p-3">
            <BlockChip bloco={blocoById.bandeira} size="sm" />
            <BlockChip bloco={blocoById.repetir} size="sm" />
            <span className="text-sm font-bold text-block-control">{n}×</span>
            <BlockChip bloco={blocoById[acao]} size="sm" />
          </div>
          <p className="mt-4 text-sm text-ink-soft">
            Repetição atual:{' '}
            <span className="font-numeric font-bold text-ink">
              {contador}/{n}
            </span>
          </p>
        </div>
        <Stage cena="grass" label="Palco">
          <Sprite {...sprite} transitionMs={520} />
        </Stage>
      </div>
    </DemoShell>
  );
}