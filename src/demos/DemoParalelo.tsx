import { useEffect, useState } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { Stage, Sprite } from '@/art/Stage';
import { Button } from '@/ui/Button';
import { DemoShell } from './DemoShell';

const atores = [
  { y: 34, cor: '#3d7ef0', ms: 900, nome: 'rápido' },
  { y: 58, cor: '#0e7c66', ms: 1500, nome: 'médio' },
  { y: 82, cor: '#8f5ee6', ms: 2400, nome: 'lento' },
];

export function DemoParalelo() {
  const [rodando, setRodando] = useState(false);
  const [fase, setFase] = useState(false);

  useEffect(() => {
    if (!rodando) return;
    const id = window.setInterval(() => setFase((f) => !f), 2400);
    return () => window.clearInterval(id);
  }, [rodando]);

  return (
    <DemoShell
      titulo="Desfile em paralelo"
      descricao="Três personagens, três roteiros rodando ao mesmo tempo. A Velocidade de cada um cria ritmos diferentes."
      controls={
        <>
          <Button size="md" onClick={() => setRodando((r) => !r)}>
            {rodando ? <Pause size={15} /> : <Play size={15} />}
            {rodando ? 'Parar' : 'Repetir para sempre'}
          </Button>
          <Button
            size="md"
            variant="ghost"
            onClick={() => {
              setRodando(false);
              setFase(false);
            }}
          >
            <RotateCcw size={15} /> Reiniciar
          </Button>
        </>
      }
      rodape="Cada personagem tem o seu próprio roteiro, e todos rodam juntos — é o paralelismo."
    >
      <Stage cena="space" label="Palco">
        {atores.map((a) => (
          <Sprite
            key={a.nome}
            x={rodando && fase ? 86 : 14}
            y={a.y}
            color={a.cor}
            scale={0.85}
            transitionMs={rodando ? a.ms : 300}
          />
        ))}
      </Stage>
      <div className="mt-3 flex flex-wrap gap-3 text-xs font-bold text-ink-mute">
        {atores.map((a) => (
          <span key={a.nome} className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: a.cor }} />
            {a.nome}
          </span>
        ))}
      </div>
    </DemoShell>
  );
}