import { FileText, Globe, ExternalLink } from 'lucide-react';
import { PageHero } from '@/ui/PageHero';
import { Section } from '@/ui/Section';
import { Reveal } from '@/ui/Reveal';
import { Callout } from '@/ui/Callout';
import { recursoGrupos } from '@/content/recursos';

export function Recursos() {
  return (
    <>
      <PageHero
        eyebrow="Para ir além"
        title="Recursos e fontes oficiais"
        lead="Este plano é uma introdução. Para aprofundar, estes são os materiais oficiais do ScratchJr e das instituições que o desenvolvem."
      />

      <Section>
        <Callout tone="info" className="mb-10">
          Os links abaixo abrem em uma nova aba e apontam para as fontes originais. Os currículos de
          referência são publicados pelo DevTech Research Group (Tufts University) e as orientações
          gerais pelo ScratchJr / Scratch Foundation.
        </Callout>

        <div className="space-y-12">
          {recursoGrupos.map((grupo) => (
            <div key={grupo.grupo}>
              <h2 className="mb-5 font-display text-2xl font-semibold text-ink">{grupo.grupo}</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {grupo.itens.map((r, i) => (
                  <Reveal key={r.href} delay={i * 0.04}>
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col rounded-card border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-lift"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent-deep">
                        {r.tipo === 'pdf' ? <FileText size={19} /> : <Globe size={19} />}
                      </span>
                      <h3 className="mt-4 flex items-start gap-1.5 text-base font-semibold text-ink">
                        {r.titulo}
                        <ExternalLink
                          size={14}
                          className="mt-1 shrink-0 text-ink-mute transition-colors group-hover:text-accent"
                        />
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                        {r.descricao}
                      </p>
                      <span className="mt-4 text-[11px] font-bold uppercase tracking-wide text-ink-mute">
                        {r.fonte} · {r.tipo.toUpperCase()}
                      </span>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}