import { useCallback, useEffect, useRef } from 'react';

export interface PassoTempo {
  /** Milissegundos a partir do início. */
  at: number;
  fn: () => void;
}

/**
 * Agenda uma sequência de passos no tempo, com cancelamento automático.
 * Base leve para as simulações — sem áudio e sem câmera.
 */
export function useTimeline() {
  const timers = useRef<number[]>([]);

  const clear = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  }, []);

  const run = useCallback(
    (steps: PassoTempo[], total?: number, onEnd?: () => void) => {
      clear();
      for (const s of steps) {
        timers.current.push(window.setTimeout(s.fn, s.at));
      }
      if (total !== undefined) {
        timers.current.push(window.setTimeout(() => onEnd?.(), total));
      }
    },
    [clear],
  );

  useEffect(() => clear, [clear]);

  return { run, clear };
}

export interface SpriteSim {
  x: number;
  y: number;
  rot: number;
  scale: number;
  visible: boolean;
  say: string | null;
}

export const spriteInicial: SpriteSim = {
  x: 45,
  y: 62,
  rot: 0,
  scale: 1,
  visible: true,
  say: null,
};