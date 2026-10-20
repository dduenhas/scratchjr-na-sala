import { useState } from 'react';
import { MessageCircle, Plus, Minus, Eye, EyeOff, RotateCcw, Scaling } from 'lucide-react';
import { Stage, Sprite } from '@/art/Stage';
import { Button } from '@/ui/Button';
import { DemoShell } from './DemoShell';
import { spriteInicial } from './engine';

export function DemoAparencia() {
  const [scale, setScale] = useState(1);
  const [visible, setVisible] = useState(true);
  const [say, setSay] = useState<string | null>(null);

  const reset = () => {
    setScale(1);
    setVisible(true);
    setSay(null);
  };

  return (
    <DemoShell
      titulo="Fala e transforma"
      descricao="Os blocos roxos mudam COMO o personagem se mostra. Teste cada um e observe o resultado no palco."
      controls={
        <>
          <Button size="md" variant="outline" onClick={() => setSay('Oi, turma!')}>
            <MessageCircle size={15} /> Dizer
          </Button>
          <Button size="md" variant="outline" onClick={() => setScale((s) => Math.min(2, s + 0.25))}>
            <Plus size={15} /> Crescer
          </Button>
          <Button size="md" variant="outline" onClick={() => setScale((s) => Math.max(0.5, s - 0.25))}>
            <Minus size={15} /> Diminuir
          </Button>
          <Button size="md" variant="outline" onClick={() => setScale(1)}>
            <Scaling size={15} /> Tamanho normal
          </Button>
          <Button size="md" variant="outline" onClick={() => setVisible(true)}>
            <Eye size={15} /> Mostrar
          </Button>
          <Button size="md" variant="outline" onClick={() => setVisible(false)}>
            <EyeOff size={15} /> Esconder
          </Button>
          <Button size="md" variant="ghost" onClick={reset}>
            <RotateCcw size={15} /> Reiniciar
          </Button>
        </>
      }
      rodape="O balão de fala substitui o som: aqui a expressão acontece pela imagem."
    >
      <Stage cena="sunset" label="Palco">
        <Sprite {...spriteInicial} x={50} y={60} scale={scale} visible={visible} say={say} />
      </Stage>
    </DemoShell>
  );
}