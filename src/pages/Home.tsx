import {
  Sparkles,
  Blocks,
  GraduationCap,
  Printer,
  BookOpen,
  Compass,
  Clapperboard,
  Hand,
  Palette,
  ArrowRight,
  VolumeX,
  CameraOff,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section, SectionHeading } from '@/ui/Section';
import { Reveal } from '@/ui/Reveal';
import { ProgressMap } from '@/ui/ProgressMap';
import { LinkButton } from '@/ui/Button';
import { Pill } from '@/ui/Badge';
import { Callout } from '@/ui/Callout';
import { BlockChip } from '@/art/BlockChip';
import { Mascot } from '@/art/Mascot';
import { blocoById } from '@/content/blocos';
import { eixos } from '@/content/bncc';
import { cn } from '@/lib/cn';

const stats = [
  { valor: '8', rotulo: 'aulas introdutórias' },
  { valor: '1º–5º', rotulo: 'ano do Fundamental I' },
  { valor: '3', rotulo: 'eixos da BNCC Computação' },
  { valor: '0', rotulo: 'som e câmera' },
];

const recursos = [
  {
    icon: Blocks,
    titulo: 'Plano de 8 aulas',
    texto:
      'Cada aula com objetivos, roteiro passo a passo, atividade vibrante, recompensa, dicas e avaliação.',
  },
  {
    icon: GraduationCap,
    titulo: 'Painel BNCC por aula',
    texto:
      'Os códigos oficiais da BNCC Computação em cada aula e o mapa completo de habilidades do 1º ao 5º ano.',
  },
  {
    icon: Compass,
    titulo: 'Mapa de progressão',
    texto:
      'Uma visão da evolução dos conceitos: da descoberta da tela ao projeto autoral interativo.',
  },
  {
    icon: Clapperboard,
    titulo: 'Simulações para o professor',
    texto:
      'Experimente os blocos no navegador antes de ensinar — movimento, eventos, repetição, cenas e mensagens.',
  },
  {
    icon: Printer,
    titulo: 'Imprimíveis prontos',
    texto:
      'Cartões de blocos, rubrica de avaliação, certificado e plano de uma página para levar para a sala.',
  },
  {
    icon: BookOpen,
    titulo: 'Glossário e recursos',
    texto:
      'Vocabulário comum da Computação e links para os materiais oficiais do ScratchJr e currículos de referência.',
  },
];

const pilares = [
  { icon: Sparkles, titulo: 'Criatividade', texto: 'Autoria desde a primeira aula: escolhas, cenários e histórias próprias.' },
  { icon: Clapperboard, titulo: 'Animação', texto: 'Movimento, repetição e ritmo para dar vida aos personagens.' },
  { icon: Hand, titulo: 'Interatividade', texto: 'Eventos e mensagens: o público reage e o projeto responde.' },
  { icon: Palette, titulo: 'Expressão visual', texto: 'A expressão acontece pela imagem — sem depender de som ou câmera.' },
];

const eixoBg: Record<string, string> = {
  'eixo-pc': 'bg-eixo-pc',
  'eixo-md': 'bg-eixo-md',
  'eixo-cd': 'bg-eixo-cd',
};

export function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/8 blur-3xl"
        />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <Pill tone="accent">Guia do professor</Pill>
                <Pill>BNCC Computação</Pill>
                <Pill>Ensino Fundamental I</Pill>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-balance font-display text-4xl font-semibold leading-[1.04] text-ink sm:text-6xl">
                Ensinar programação com o <span className="text-accent">ScratchJr</span> desde a
                primeira aula.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
                Um plano de 8 aulas introdutórias, escrito para o professor, que conduz a turma da
                descoberta da tela ao projeto autoral interativo — com atividades vibrantes,
                recompensas e correlação explícita com as habilidades de tecnologia da BNCC.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton to="/aulas" size="lg">
                  Ver as 8 aulas <ArrowRight size={16} />
                </LinkButton>
                <LinkButton to="/bncc" size="lg" variant="outline">
                  Ver alinhamento BNCC
                </LinkButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="relative rounded-card border border-line bg-surface p-6 shadow-lift">
              <div className="relative overflow-hidden rounded-xl border border-line-strong bg-[linear-gradient(180deg,#d9ecff,#bfe0ff)] p-6">
                <span aria-hidden className="absolute inset-x-0 bottom-0 h-1/4 bg-[#8fd48a]" />
                <div className="relative mx-auto h-40 w-40">
                  <Mascot className="h-full w-full drop-shadow-md" />
                </div>
              </div>
              <div className="mt-5 space-y-2.5">
                {['bandeira', 'mover-direita', 'repetir', 'mensagem'].map((id, i) => (
                  <div
                    key={id}
                    className="animate-float"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    <BlockChip bloco={blocoById[id]} />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="border-y border-line bg-ink text-paper">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 divide-line/15 px-5 sm:px-8 md:grid-cols-4 md:divide-x">
          {stats.map((s) => (
            <div key={s.rotulo} className="px-2 py-8 text-center md:px-6">
              <p className="font-display text-4xl font-semibold text-paper">{s.valor}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-paper/60">
                {s.rotulo}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Section
        eyebrow="Para quem é"
        title="Feito para orientar o professor, não o aluno."
        lead="Este site não é uma lição para a criança. É o seu material de preparação: o que dizer, o que demonstrar, o que observar e como avaliar — aula por aula."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {recursos.slice(0, 3).map((r, i) => (
            <Reveal key={r.titulo} delay={i * 0.06}>
              <article className="h-full rounded-card border border-line bg-surface p-6">
                <r.icon size={22} className="text-accent" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-ink">{r.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{r.texto}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Callout tone="nota" className="mt-6" title="Sem som, sem câmera">
          Todas as aulas evitam os blocos de Som e o recurso de câmera do editor. A justificativa é
          pedagógica — foco na imagem e no movimento — e também de privacidade e de confiabilidade
          entre dispositivos diferentes.
        </Callout>
      </Section>

      <Section
        tone="tint"
        eyebrow="O que você encontra"
        title="Um kit completo de preparação"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recursos.map((r, i) => (
            <Reveal key={r.titulo} delay={i * 0.04}>
              <article className="group h-full rounded-card border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-deep">
                  <r.icon size={20} aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{r.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{r.texto}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Os três eixos"
        title="Tecnologia com sentido, do jeito que a BNCC pede."
        lead="A BNCC Computação organiza as habilidades em três eixos. Cada aula do plano ativa pelo menos dois deles."
        actions={
          <LinkButton to="/bncc" variant="outline">
            Explorar o painel BNCC
          </LinkButton>
        }
      >
        <div className="grid gap-5 md:grid-cols-3">
          {eixos.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.06}>
              <article className="h-full overflow-hidden rounded-card border border-line bg-surface">
                <div className={cn('h-1.5', eixoBg[e.token])} />
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-ink-mute">
                    {e.apelido}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink">{e.nome}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{e.descricao}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        tone="tint"
        eyebrow="Os pilares das aulas"
      title="Vibrantes, recompensadoras e sem tela em excesso."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pilares.map((p, i) => (
          <Reveal key={p.titulo} delay={i * 0.05}>
            <article className="h-full rounded-card border border-line bg-surface p-6">
              <p.icon size={22} className="text-accent" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-ink">{p.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.texto}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-4 py-2 text-sm font-bold text-ink-soft">
          <VolumeX size={16} className="text-block-sound" /> Sem blocos de som
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-4 py-2 text-sm font-bold text-ink-soft">
          <CameraOff size={16} className="text-block-end" /> Sem câmera
        </span>
      </div>
      </Section>

      <Section>
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="O plano"
            title="As 8 aulas, em ordem"
            lead="Uma progressão intencional: cada aula reaproveita o que a anterior ensinou."
          />
          <LinkButton to="/aulas" className="shrink-0">
            Abrir o mapa completo <ArrowRight size={16} />
          </LinkButton>
        </div>
        <ProgressMap />
      </Section>

      <Section tone="tint">
        <div className="relative overflow-hidden rounded-card border border-line bg-ink p-10 text-paper sm:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
          />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Comece pela primeira aula e vá até a estreia.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-paper/75">
              Se quiser se ambientar antes, abra a Aula 1 e experimente o tour interativo da tela.
              É a mesma demonstração que você fará no projetor com a turma.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/aulas/descobrindo-o-scratchjr"
                className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-[15px] font-bold text-ink transition-transform hover:-translate-y-0.5"
              >
                Abrir a Aula 1 <ArrowRight size={16} />
              </Link>
              <Link
                to="/guia"
                className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-[15px] font-bold text-paper transition-colors hover:bg-paper/10"
              >
                Guia de preparação
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}