import { useState } from 'react';
import { Play, RotateCcw, Trash2 } from 'lucide-react';
import { cn } from '@/lib/cn';
import { blocoById } from '@/content/blocos';
import { BlockChip } from '@/art/BlockChip';
import { Stage, Sprite } from '@/art/Stage';
import { Button } from '@/ui/Button';
import { DemoShell } from './DemoShell';
import { spriteInicial, useTimeline, type SpriteSim } from './engine';

const DISPONIVEIS = [
  'mover-direita',
  'mover-esquerda',
  'mover-cima',
  'mover-baixo',
  'pular',
  'girar-horario',
];

const passo: Record<string, { dx?: number; dy?: number; rot?: number }> = {
  'mover-direita': { dx: 16 },
  'mover-esquerda': { dx: -16 },
  'mover-cima': { dy: -14 },
  'mover-baixo': { dy: 14 },
  'girar-horario': { rot: 90 },
};

const clamp = (v: number, min = 10, max = 90) => Math.max(min, Math.min(max, v));

export function DemoSequencia() {
  const [programa, setPrograma] = useState<string[]>(['mover-direita', 'mover-cima']);
  const [sprite, setSprite] = useState<SpriteSim>(spriteInicial);
  const [ativo, setAtivo] = useState(-1);
  const [tocando, setTocando] = useState(false);
  const { run, clear } = useTimeline();

  const add = (id: string) => setPrograma((p) => [...p, id]);
  const remover = () => setPrograma((p) => p.slice(0, -1));

  const tocar = () => {
    clear();
    setTocando(true);
    setSprite(spriteInicial);
    let { x, y, rot } = spriteInicial;
    const passoMs = 640;

    const steps = programa.map((id, i) => ({
      at: (i + 1) * passoMs,
      fn: () => {
        setAtivo(i);
        if (id === 'pular') {
          setSprite((s) => ({ ...s, scale: 1.28 }));
          window.setTimeout(() => setSprite((s) => ({ ...s, scale: 1 })), 220);
          return;
        }
        const d = passo[id] ?? {};
        x = clamp(x + (d.dx ?? 0));
        y = clamp(y + (d.dy ?? 0));
        rot += d.rot ?? 0;
        setSprite((s) => ({ ...s, x, y, rot }));
      },
    }));

    run(steps, (programa.length + 1) * passoMs, () => {
      setTocando(false);
      setAtivo(-1);
    });
  };

  const limpar = () => {
    clear();
    setTocando(false);
    setAtivo(-1);
    setSprite(spriteInicial);
  };

  return (
    <DemoShell
      titulo="Monte a sequência"
      descricao="Clique nos blocos azuis para montar um algoritmo. A ordem dos blocos muda o caminho do personagem."
      controls={
        <>
          <Button size="md" onClick={tocar} disabled={tocando || programa.length === 0}>
            <Play size={15} /> Iniciar
          </Button>
          <Button size="md" variant="outline" onClick={remover} disabled={tocando || !programa.length}>
            <Trash2 size={15} /> Apagar último
          </Button>
          <Button size="md" variant="ghost" onClick={limpar}>
            <RotateCcw size={15} /> Reiniciar
          </Button>
        </>
      }
      rodape="A bandeira verde (gatilho) entra automaticamente no começo do roteiro."
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-mute">
            Blocos disponíveis
          </p>
          <div className="flex flex-wrap gap-2">
            {DISPONIVEIS.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => add(id)}
                disabled={tocando}
                className="transition-transform hover:-translate-y-0.5 disabled:opacity-50"
              >
                <BlockChip bloco={blocoById[id]} size="sm" />
              </button>
            ))}
          </div>

          <p className="mt-4 mb-2 text-xs font-bold uppercase tracking-wide text-ink-mute">
            Seu roteiro
          </p>
          <div className="flex min-h-12 flex-wrap items-center gap-2 rounded-lg border border-dashed border-line-strong bg-paper-deep/50 p-3">
            <BlockChip bloco={blocoById.bandeira} size="sm" />
            {programa.length === 0 && (
              <span className="text-xs font-semibold text-ink-mute">
                adicione blocos para começar…
              </span>
            )}
            {programa.map((id, i) => (
              <span
                key={`${id}-${i}`}
                className={cn(
                  'rounded-lg transition-shadow',
                  ativo === i && 'ring-2 ring-accent ring-offset-1',
                )}
              >
                <BlockChip bloco={blocoById[id]} size="sm" />
              </span>
            ))}
          </div>
        </div>

        <Stage cena="grass" label="Palco">
          <Sprite {...sprite} transitionMs={520} />
        </Stage>
      </div>
    </DemoShell>
  );
}