import { lazy, Suspense, type LazyExoticComponent, type ComponentType } from 'react';
import type { DemoKind } from '@/content/lessons';

const demos: Record<DemoKind, LazyExoticComponent<ComponentType>> = {
  interface: lazy(() => import('./DemoInterface').then((m) => ({ default: m.DemoInterface }))),
  sequencia: lazy(() => import('./DemoSequencia').then((m) => ({ default: m.DemoSequencia }))),
  eventos: lazy(() => import('./DemoEventos').then((m) => ({ default: m.DemoEventos }))),
  aparencia: lazy(() => import('./DemoAparencia').then((m) => ({ default: m.DemoAparencia }))),
  loop: lazy(() => import('./DemoLoop').then((m) => ({ default: m.DemoLoop }))),
  paralelo: lazy(() => import('./DemoParalelo').then((m) => ({ default: m.DemoParalelo }))),
  cenas: lazy(() => import('./DemoCenas').then((m) => ({ default: m.DemoCenas }))),
  mensagem: lazy(() => import('./DemoMensagem').then((m) => ({ default: m.DemoMensagem }))),
};

export function Demo({ kind }: { kind: DemoKind }) {
  const Componente = demos[kind];
  return (
    <Suspense
      fallback={
        <div className="flex h-48 items-center justify-center rounded-card border border-line bg-paper-deep/50 text-sm font-semibold text-ink-mute">
          Carregando simulação…
        </div>
      }
    >
      <Componente />
    </Suspense>
  );
}