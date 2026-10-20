import { Suspense, lazy, type ReactNode } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/layout/Layout';

const Home = lazy(() => import('@/pages/Home').then((m) => ({ default: m.Home })));
const Lessons = lazy(() => import('@/pages/Lessons').then((m) => ({ default: m.Lessons })));
const LessonDetail = lazy(() =>
  import('@/pages/LessonDetail').then((m) => ({ default: m.LessonDetail })),
);
const BnccPanel = lazy(() => import('@/pages/BnccPanel').then((m) => ({ default: m.BnccPanel })));
const Guia = lazy(() => import('@/pages/Guia').then((m) => ({ default: m.Guia })));
const Glossario = lazy(() => import('@/pages/Glossario').then((m) => ({ default: m.Glossario })));
const Imprimiveis = lazy(() =>
  import('@/pages/Imprimiveis').then((m) => ({ default: m.Imprimiveis })),
);
const Recursos = lazy(() => import('@/pages/Recursos').then((m) => ({ default: m.Recursos })));
const NotFound = lazy(() => import('@/pages/NotFound').then((m) => ({ default: m.NotFound })));

function Carregando() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <span className="flex items-center gap-3 text-sm font-semibold text-ink-mute">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-line-strong border-t-accent" />
        Carregando…
      </span>
    </div>
  );
}

function Page({ children }: { children: ReactNode }) {
  return <Suspense fallback={<Carregando />}>{children}</Suspense>;
}

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={
            <Page>
              <Home />
            </Page>
          }
        />
        <Route
          path="aulas"
          element={
            <Page>
              <Lessons />
            </Page>
          }
        />
        <Route
          path="aulas/:slug"
          element={
            <Page>
              <LessonDetail />
            </Page>
          }
        />
        <Route
          path="bncc"
          element={
            <Page>
              <BnccPanel />
            </Page>
          }
        />
        <Route
          path="guia"
          element={
            <Page>
              <Guia />
            </Page>
          }
        />
        <Route
          path="glossario"
          element={
            <Page>
              <Glossario />
            </Page>
          }
        />
        <Route
          path="imprimiveis"
          element={
            <Page>
              <Imprimiveis />
            </Page>
          }
        />
        <Route
          path="recursos"
          element={
            <Page>
              <Recursos />
            </Page>
          }
        />
        <Route
          path="*"
          element={
            <Page>
              <NotFound />
            </Page>
          }
        />
      </Route>
    </Routes>
  );
}