import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter } from 'lucide-react';
import { PageHero } from '@/ui/PageHero';
import { Section } from '@/ui/Section';
import { Reveal } from '@/ui/Reveal';
import { BnccCard, Pill } from '@/ui/Badge';
import { Callout } from '@/ui/Callout';
import { cn } from '@/lib/cn';
import { eixos, habilidades, type EixoId } from '@/content/bncc';
import { lessons } from '@/content/lessons';

const anos = ['todos', '1º', '2º', '3º', '4º', '5º', '1º–5º'] as const;
type AnoFiltro = (typeof anos)[number];

const eixoBg: Record<string, string> = {
  'eixo-pc': 'bg-eixo-pc',
  'eixo-md': 'bg-eixo-md',
  'eixo-cd': 'bg-eixo-cd',
};

export function BnccPanel() {
  const [ano, setAno] = useState<AnoFiltro>('todos');
  const [eixo, setEixo] = useState<EixoId | 'todos'>('todos');

  const usoPorCodigo = useMemo(() => {
    const map = new Map<string, number[]>();
    for (const l of lessons) {
      for (const c of l.bncc) {
        map.set(c, [...(map.get(c) ?? []), l.n]);
      }
    }
    return map;
  }, []);

  const filtradas = useMemo(
    () =>
      habilidades.filter(
        (h) => (ano === 'todos' || h.anos === ano) && (eixo === 'todos' || h.eixo === eixo),
      ),
    [ano, eixo],
  );

  return (
    <>
      <PageHero
        eyebrow="Fundamentação"
        title="BNCC Computação, Anos Iniciais"
        lead="As habilidades de tecnologia da Educação Básica organizam-se em três eixos e são um complemento à BNCC. Este plano foi desenhado para ativá-las de verdade, não apenas citá-las."
      >
        <div className="flex flex-wrap gap-2">
          {eixos.map((e) => (
            <Pill key={e.id} tone="accent">
              {e.nome}
            </Pill>
          ))}
        </div>
      </PageHero>

      <Section eyebrow="O documento" title="De onde vêm estes códigos">
        <div className="grid gap-6 md:grid-cols-2">
          <Callout tone="info" title="Base legal">
            A BNCC Computação é o complemento à BNCC aprovado pelo Parecer CNE/CEB nº 2/2022 e
            instituído pela Resolução CNE/CEB nº 1/2022. Os códigos têm o formato EF (etapa), ano,
            CO (Computação) e a ordem da habilidade — por exemplo, EF01CO02.
          </Callout>
          <Callout tone="nota" title="Flexibilidade">
            Os códigos são indicativos para orientar o planejamento. Redes e municípios podem
            organizar as habilidades de tecnologia de formas próprias; use este mapa como referência
            e adapte ao currículo local.
          </Callout>
        </div>
      </Section>

      <Section tone="tint" eyebrow="Os eixos">
        <div className="grid gap-5 md:grid-cols-3">
          {eixos.map((e, i) => {
            const total = habilidades.filter((h) => h.eixo === e.id).length;
            return (
              <Reveal key={e.id} delay={i * 0.06}>
                <article className="h-full overflow-hidden rounded-card border border-line bg-surface">
                  <div className={cn('h-1.5', eixoBg[e.token])} />
                  <div className="p-6">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-display text-xl font-semibold text-ink">{e.nome}</h3>
                      <span className="font-numeric text-sm font-bold text-ink-mute">
                        {total} hab.
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{e.descricao}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Explorador"
        title="Todas as habilidades do 1º ao 5º ano"
        lead="Filtre por ano e por eixo. As habilidades usadas no plano trazem um selo com as aulas correspondentes."
      >
        <div className="mb-6 flex flex-col gap-4 rounded-card border border-line bg-surface p-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink-mute">
              <Filter size={14} /> Ano
            </span>
            {anos.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setAno(a)}
                className={cn(
                  'rounded-full px-3 py-1 text-xs font-bold transition-colors',
                  ano === a ? 'bg-ink text-paper' : 'bg-paper-deep text-ink-soft hover:text-ink',
                )}
              >
                {a === 'todos' ? 'Todos' : a}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-bold uppercase tracking-wide text-ink-mute">Eixo</span>
            <button
              type="button"
              onClick={() => setEixo('todos')}
              className={cn(
                'rounded-full px-3 py-1 text-xs font-bold transition-colors',
                eixo === 'todos' ? 'bg-ink text-paper' : 'bg-paper-deep text-ink-soft hover:text-ink',
              )}
            >
              Todos
            </button>
            {eixos.map((e) => (
              <button
                key={e.id}
                type="button"
                onClick={() => setEixo(e.id)}
                className={cn(
                  'rounded-full px-3 py-1 text-xs font-bold transition-colors',
                  eixo === e.id
                    ? 'bg-ink text-paper'
                    : 'bg-paper-deep text-ink-soft hover:text-ink',
                )}
              >
                {e.nome}
              </button>
            ))}
          </div>
        </div>

        <p className="mb-4 text-sm font-semibold text-ink-mute">
          {filtradas.length} habilidade{filtradas.length === 1 ? '' : 's'} exibida
          {filtradas.length === 1 ? '' : 's'}.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtradas.map((h) => {
            const usos = usoPorCodigo.get(h.codigo);
            return (
              <div key={h.codigo} className="flex flex-col gap-3">
                <BnccCard codigo={h.codigo} destaque={!!usos} />
                {usos && (
                  <div className="flex flex-wrap items-center gap-2 px-1">
                    <span className="text-[11px] font-bold uppercase tracking-wide text-accent">
                      Trabalhada nas aulas
                    </span>
                    {usos.map((n) => (
                      <Link
                        key={n}
                        to={`/aulas/${lessons[n - 1].slug}`}
                        className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent-soft font-numeric text-xs font-bold text-accent-deep hover:bg-accent hover:text-white"
                      >
                        {n}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      <Section tone="tint" eyebrow="Mapa do plano" title="Aula por aula, quais habilidades">
        <div className="overflow-hidden rounded-card border border-line bg-surface">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-paper-deep/60 text-xs uppercase tracking-wide text-ink-mute">
                <th className="px-4 py-3 font-bold">Aula</th>
                <th className="px-4 py-3 font-bold">Habilidades BNCC</th>
              </tr>
            </thead>
            <tbody>
              {lessons.map((l) => (
                <tr key={l.slug} className="border-b border-line last:border-0">
                  <td className="px-4 py-3 align-top">
                    <Link
                      to={`/aulas/${l.slug}`}
                      className="font-semibold text-ink hover:text-accent"
                    >
                      {String(l.n).padStart(2, '0')} · {l.title}
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1.5">
                      {l.bncc.map((c) => (
                        <span
                          key={c}
                          className="rounded-md bg-paper-deep px-2 py-0.5 font-mono text-xs font-bold text-ink"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}