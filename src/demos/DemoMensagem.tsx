import { useState } from 'react';
import { Send, RotateCcw } from 'lucide-react';
import { blocoById } from '@/content/blocos';
import { BlockChip } from '@/art/BlockChip';
import { Stage, Sprite } from '@/art/Stage';
import { Button } from '@/ui/Button';
import { DemoShell } from './DemoShell';
import { useTimeline } from './engine';

export function DemoMensagem() {
  const [sayA, setSayA] = useState<string | null>(null);
  const [sayB, setSayB] = useState<string | null>(null);
  const [scaleB, setScaleB] = useState(1);
  const { run, clear } = useTimeline();

  const enviar = () => {
    clear();
    setSayA('✉');
    setSayB(null);
    run(
      [
        { at: 700, fn: () => setSayA(null) },
        {
          at: 1100,
          fn: () => {
            setSayB('Oi, tudo bem?');
            setScaleB(1.25);
            window.setTimeout(() => setScaleB(1), 240);
          },
        },
        { at: 2600, fn: () => setSayB(null) },
      ],
      2600,
    );
  };

  const reset = () => {
    clear();
    setSayA(null);
    setSayB(null);
    setScaleB(1);
  };

  return (
    <DemoShell
      titulo="Personagens que conversam"
      descricao="O personagem A envia uma mensagem; o personagem B tem o gatilho “ao receber” e reage. É a interação entre partes do programa."
      controls={
        <>
          <Button size="md" onClick={enviar}>
            <Send size={15} /> Enviar mensagem
          </Button>
          <Button size="md" variant="ghost" onClick={reset}>
            <RotateCcw size={15} /> Reiniciar
          </Button>
        </>
      }
      rodape="Os dois personagens precisam usar a mesma mensagem (mesmo identificador) para que o recado chegue."
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-3">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-mute">
              Personagem A — envia
            </p>
            <div className="flex flex-wrap gap-2">
              <BlockChip bloco={blocoById.mensagem} size="sm" />
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-mute">
              Personagem B — reage
            </p>
            <div className="flex flex-wrap gap-2">
              <BlockChip bloco={blocoById.mensagem} size="sm" />
              <BlockChip bloco={blocoById.dizer} size="sm" />
            </div>
          </div>
        </div>
        <Stage cena="sky" label="Palco">
          <Sprite x={28} y={62} color="#0e7c66" say={sayA} />
          <Sprite x={72} y={62} color="#8f5ee6" scale={scaleB} say={sayB} />
        </Stage>
      </div>
    </DemoShell>
  );
}