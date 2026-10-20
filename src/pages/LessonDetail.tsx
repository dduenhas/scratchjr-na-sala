import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Printer,
  Clock,
  CheckCircle2,
  Package,
  Target,
  Lightbulb,
  ClipboardCheck,
  Link2,
  Users,
  Sparkles,
  Layers,
} from 'lucide-react';
import { PageHero } from '@/ui/PageHero';
import { Section } from '@/ui/Section';
import { Reveal } from '@/ui/Reveal';
import { BnccChip, BnccCard, Pill } from '@/ui/Badge';
import { Callout } from '@/ui/Callout';
import { StepList } from '@/ui/StepList';
import { ImageFigure } from '@/ui/ImageFigure';
import { BlockChip } from '@/art/BlockChip';
import { Button } from '@/ui/Button';
import { Demo } from '@/demos';
import { lessons, lessonBySlug } from '@/content/lessons';
import { imagemPorSrc } from '@/content/media';
import { blocoById } from '@/content/blocos';

const toc = [
  { id: 'resumo', label: 'Resumo e conceitos' },
  { id: 'objetivos', label: 'Objetivos' },
  { id: 'bncc', label: 'BNCC Computação' },
  { id: 'simulacao', label: 'Simulação' },
  { id: 'materiais', label: 'Materiais e preparação' },
  { id: 'roteiro', label: 'Roteiro da aula' },
  { id: 'atividade', label: 'Atividade e recompensa' },
  { id: 'imagens', label: 'Imagens oficiais' },
  { id: 'dicas', label: 'Dicas' },
  { id: 'avaliacao', label: 'Avaliação' },
  { id: 'conexoes', label: 'Conexões' },
  { id: 'adaptacao', label: 'Adaptação por ano' },
];

export function LessonDetail() {
  const { slug } = useParams();
  const lesson = slug ? lessonBySlug[slug] : undefined;

  if (!lesson) {
    return (
      <Section>
        <div className="mx-auto max-w-lg text-center">
          <h1 className="font-display text-3xl font-semibold text-ink">Aula não encontrada</h1>
          <p className="mt-3 text-ink-soft">
            O endereço que você tentou abrir não corresponde a nenhuma aula.
          </p>
          <Link
            to="/aulas"
            className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-bold text-paper"
          >
            Voltar para as aulas
          </Link>
        </div>
      </Section>
    );
  }

  const prev = lessons[lesson.n - 2];
  const next = lessons[lesson.n];

  return (
    <>
      <PageHero
        eyebrow={`Aula ${String(lesson.n).padStart(2, '0')} · ${lesson.duracao}`}
        title={lesson.title}
        lead={lesson.tagline}
      >
        <div className="flex flex-wrap items-center gap-2">
          <Pill tone="accent">
            <Clock size={13} /> {lesson.duracao}
          </Pill>
          <Pill>{lesson.anoTags.join(' · ')} ano</Pill>
          <span className="mx-1 hidden h-4 w-px bg-line-strong sm:block" />
          {lesson.bncc.map((c) => (
            <BnccChip key={c} codigo={c} />
          ))}
        </div>
      </PageHero>

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[220px_1fr]">
        <aside className="no-print hidden lg:block">
          <nav className="sticky top-24">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-ink-mute">
              Nesta aula
            </p>
            <ul className="space-y-1 border-l border-line">
              {toc.map((t) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm font-semibold text-ink-soft transition-colors hover:border-accent hover:text-ink"
                  >
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              variant="outline"
              size="md"
              className="mt-6 w-full"
              onClick={() => window.print()}
            >
              <Printer size={15} /> Imprimir aula
            </Button>
          </nav>
        </aside>

        <div className="min-w-0 space-y-14">
          <section id="resumo" className="scroll-mt-24">
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-ink-soft">{lesson.resumo}</p>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {lesson.conceitos.map((c, i) => (
                <Reveal key={c.nome} delay={i * 0.05}>
                  <article className="h-full rounded-card border border-line bg-surface p-5">
                    <span className="text-xs font-bold uppercase tracking-wide text-accent">
                      Conceito-chave
                    </span>
                    <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">{c.nome}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.explicacao}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="objetivos" className="scroll-mt-24">
            <h2 className="flex items-center gap-2.5 font-display text-2xl font-semibold text-ink">
              <Target size={20} className="text-accent" /> Objetivos de aprendizagem
            </h2>
            <ul className="mt-5 space-y-3">
              {lesson.objetivos.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-[15px] leading-relaxed text-ink-soft">{o}</span>
                </li>
              ))}
            </ul>

            {lesson.blocos.length > 0 && (
              <div className="mt-7">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-ink-mute">
                  <Layers size={15} /> Blocos usados nesta aula
                </h3>
                <div className="flex flex-wrap gap-2">
                  {lesson.blocos.map((id) => (
                    <BlockChip key={id} bloco={blocoById[id]} size="sm" />
                  ))}
                </div>
              </div>
            )}
          </section>

          <section id="bncc" className="scroll-mt-24">
            <h2 className="flex items-center gap-2.5 font-display text-2xl font-semibold text-ink">
              <Sparkles size={20} className="text-accent" /> BNCC Computação atendida
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              As habilidades abaixo são da BNCC Computação (complemento à BNCC) e são mobilizadas
              pela atividade desta aula. Os códigos são indicativos e podem variar conforme a rede.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {lesson.bncc.map((c) => (
                <BnccCard key={c} codigo={c} destaque />
              ))}
            </div>
          </section>

          <section id="simulacao" className="scroll-mt-24">
            <h2 className="flex items-center gap-2.5 font-display text-2xl font-semibold text-ink">
              <Sparkles size={20} className="text-accent" /> Simulação para você experimentar
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              Antes de ensinar, teste você mesmo. A simulação recria a mecânica dos blocos — sem
              som e sem câmera — para você se sentir seguro na demonstração.
            </p>
            <div className="mt-5">
              <Demo kind={lesson.demo} />
            </div>
          </section>

          <section id="materiais" className="scroll-mt-24">
            <h2 className="flex items-center gap-2.5 font-display text-2xl font-semibold text-ink">
              <Package size={20} className="text-accent" /> Materiais e preparação
            </h2>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-ink-mute">
                  Materiais
                </h3>
                <ul className="space-y-2">
                  {lesson.materiais.map((m) => (
                    <li key={m} className="flex items-start gap-2.5 text-[15px] text-ink-soft">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-ink-mute">
                  Antes da aula
                </h3>
                <ol className="space-y-2">
                  {lesson.preparacao.map((p, i) => (
                    <li key={p} className="flex items-start gap-2.5 text-[15px] text-ink-soft">
                      <span className="font-numeric text-xs font-bold text-accent">{i + 1}.</span>
                      {p}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          <section id="roteiro" className="scroll-mt-24">
            <h2 className="flex items-center gap-2.5 font-display text-2xl font-semibold text-ink">
              <Clock size={20} className="text-accent" /> Roteiro da aula
            </h2>
            <StepList steps={lesson.roteiro} className="mt-5" />
          </section>

          <section id="atividade" className="scroll-mt-24">
            <h2 className="flex items-center gap-2.5 font-display text-2xl font-semibold text-ink">
              <Sparkles size={20} className="text-accent" /> {lesson.atividade.titulo}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              {lesson.atividade.resumo}
            </p>
            <ol className="mt-5 space-y-3">
              {lesson.atividade.passos.map((p, i) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-bold text-accent-deep">
                    {i + 1}
                  </span>
                  <span className="text-[15px] leading-relaxed text-ink-soft">{p}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6">
              <Callout tone="tip" title={`Recompensa — ${lesson.atividade.recompensa.titulo}`}>
                {lesson.atividade.recompensa.texto}
              </Callout>
            </div>
          </section>

          <section id="imagens" className="scroll-mt-24">
            <h2 className="flex items-center gap-2.5 font-display text-2xl font-semibold text-ink">
              <Layers size={20} className="text-accent" /> Imagens oficiais do ScratchJr
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              Recursos exibidos a partir do site oficial (scratchjr.org), para você projetar e
              contextualizar com a turma.
            </p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {lesson.imagens.map((src) => {
                const img = imagemPorSrc[src];
                return (
                  <ImageFigure
                    key={src}
                    src={src}
                    alt={img?.alt ?? 'Imagem oficial do ScratchJr'}
                    legenda={img?.legenda}
                  />
                );
              })}
            </div>
          </section>

          <section id="dicas" className="scroll-mt-24">
            <h2 className="flex items-center gap-2.5 font-display text-2xl font-semibold text-ink">
              <Lightbulb size={20} className="text-accent" /> Dicas de condução
            </h2>
            <div className="mt-5 space-y-3">
              {lesson.dicas.map((d) => (
                <Callout key={d} tone="tip">
                  {d}
                </Callout>
              ))}
            </div>
            <div className="mt-5">
              <Callout tone="nota" title="Sobre som e câmera">
                {lesson.nota}
              </Callout>
            </div>
          </section>

          <section id="avaliacao" className="scroll-mt-24">
            <h2 className="flex items-center gap-2.5 font-display text-2xl font-semibold text-ink">
              <ClipboardCheck size={20} className="text-accent" /> Evidências de aprendizagem
            </h2>
            <ul className="mt-5 space-y-3">
              {lesson.avaliacao.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-[15px] leading-relaxed text-ink-soft">{a}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="conexoes" className="scroll-mt-24">
            <h2 className="flex items-center gap-2.5 font-display text-2xl font-semibold text-ink">
              <Link2 size={20} className="text-accent" /> Conexões interdisciplinares
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {lesson.conexoes.map((c) => (
                <article key={c.area} className="rounded-card border border-line bg-surface p-5">
                  <h3 className="text-base font-semibold text-ink">{c.area}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{c.como}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="adaptacao" className="scroll-mt-24">
            <h2 className="flex items-center gap-2.5 font-display text-2xl font-semibold text-ink">
              <Users size={20} className="text-accent" /> Adaptação por ano
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <article className="rounded-card border border-line bg-surface p-5">
                <Pill>1º e 2º ano</Pill>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {lesson.adaptacao.iniciantes}
                </p>
              </article>
              <article className="rounded-card border border-line bg-surface p-5">
                <Pill>3º ao 5º ano</Pill>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {lesson.adaptacao.avancados}
                </p>
              </article>
            </div>
          </section>

          <nav className="no-print flex items-center justify-between gap-4 border-t border-line pt-8">
            {prev ? (
              <Link
                to={`/aulas/${prev.slug}`}
                className="group inline-flex items-center gap-2 text-sm font-bold text-ink-soft hover:text-ink"
              >
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
                <span>
                  <span className="block text-[11px] uppercase tracking-wide text-ink-mute">
                    Anterior
                  </span>
                  {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                to={`/aulas/${next.slug}`}
                className="group inline-flex items-center gap-2 text-right text-sm font-bold text-ink-soft hover:text-ink"
              >
                <span>
                  <span className="block text-[11px] uppercase tracking-wide text-ink-mute">
                    Próxima
                  </span>
                  {next.title}
                </span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}