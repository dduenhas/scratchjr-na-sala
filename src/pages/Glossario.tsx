import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { PageHero } from '@/ui/PageHero';
import { Section } from '@/ui/Section';
import { Reveal } from '@/ui/Reveal';
import { glossario } from '@/content/glossario';
import { lessonBySlug } from '@/content/lessons';

export function Glossario() {
  const [busca, setBusca] = useState('');
  const termo = busca.trim().toLowerCase();

  const lista = useMemo(() => {
    if (!termo) return glossario;
    return glossario.filter(
      (t) =>
        t.termo.toLowerCase().includes(termo) || t.definicao.toLowerCase().includes(termo),
    );
  }, [termo]);

  return (
    <>
      <PageHero
        eyebrow="Vocabulário"
        title="Glossário da Computação"
        lead="Um vocabulário comum para professor e turma. Use os termos desde a primeira aula — nomear é parte de aprender."
      />

      <Section>
        <div className="mb-8 max-w-md">
          <label className="relative block">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-mute"
            />
            <input
              type="search"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar termo…"
              className="w-full rounded-full border border-line-strong bg-surface py-3 pl-11 pr-4 text-sm font-semibold text-ink placeholder:text-ink-mute focus:border-accent focus:outline-none"
            />
          </label>
        </div>

        {lista.length === 0 ? (
          <p className="text-ink-soft">Nenhum termo encontrado para “{busca}”.</p>
        ) : (
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lista.map((t, i) => {
              const aula = t.aula ? lessonBySlug[t.aula] : undefined;
              return (
                <Reveal key={t.termo} delay={Math.min(i * 0.03, 0.3)}>
                  <div className="flex h-full flex-col rounded-card border border-line bg-surface p-5">
                    <dt className="font-display text-lg font-semibold text-ink">{t.termo}</dt>
                    <dd className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                      {t.definicao}
                    </dd>
                    {aula && (
                      <Link
                        to={`/aulas/${aula.slug}`}
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-accent hover:underline"
                      >
                        Ver na Aula {aula.n}
                      </Link>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </dl>
        )}
      </Section>
    </>
  );
}