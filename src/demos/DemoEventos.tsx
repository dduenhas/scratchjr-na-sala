import { useState } from 'react';
import { Flag, Hand, RotateCcw } from 'lucide-react';
import { blocoById } from '@/content/blocos';
import { BlockChip } from '@/art/BlockChip';
import { Stage, Sprite } from '@/art/Stage';
import { Button } from '@/ui/Button';
import { DemoShell } from './DemoShell';
import { spriteInicial, type SpriteSim } from './engine';

export function DemoEventos() {
  const [sprite, setSprite] = useState<SpriteSim>(spriteInicial);

  const bandeira = () =>
    setSprite((s) => ({ ...s, x: Math.min(88, s.x + 20), say: 'Vamos!' }));

  const toque = () => {
    setSprite((s) => ({ ...s, scale: 1.3, say: 'Oi!' }));
    window.setTimeout(() => setSprite((s) => ({ ...s, scale: 1 })), 240);
    window.setTimeout(() => setSprite((s) => ({ ...s, say: null })), 1200);
  };

  const reset = () => setSprite(spriteInicial);

  return (
    <DemoShell
      titulo="Quem começa o quê?"
      descricao="Dois roteiros, dois gatilhos. Teste cada gatilho e veja que cada um dispara uma ação diferente."
      controls={
        <>
          <Button size="md" onClick={bandeira}>
            <Flag size={15} /> Bandeira verde
          </Button>
          <Button size="md" variant="outline" onClick={toque}>
            <Hand size={15} /> Tocar no personagem
          </Button>
          <Button size="md" variant="ghost" onClick={reset}>
            <RotateCcw size={15} /> Reiniciar
          </Button>
        </>
      }
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-3">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-mute">
              Roteiro 1 — inicia com a bandeira
            </p>
            <div className="flex flex-wrap gap-2">
              <BlockChip bloco={blocoById.bandeira} size="sm" />
              <BlockChip bloco={blocoById['mover-direita']} size="sm" />
              <BlockChip bloco={blocoById.dizer} size="sm" />
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-mute">
              Roteiro 2 — inicia com o toque
            </p>
            <div className="flex flex-wrap gap-2">
              <BlockChip bloco={blocoById.toque} size="sm" />
              <BlockChip bloco={blocoById.pular} size="sm" />
              <BlockChip bloco={blocoById.dizer} size="sm" />
            </div>
          </div>
        </div>
        <Stage cena="sky" label="Palco">
          <Sprite {...sprite} transitionMs={420} />
        </Stage>
      </div>
    </DemoShell>
  );
}