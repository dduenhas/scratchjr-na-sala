import { PageHero } from '@/ui/PageHero';
import { Section } from '@/ui/Section';
import { ProgressMap } from '@/ui/ProgressMap';
import { Callout } from '@/ui/Callout';
import { lessons } from '@/content/lessons';
import { BnccChip } from '@/ui/Badge';

export function Lessons() {
  return (
    <>
      <PageHero
        eyebrow="O plano"
        title="Mapa de progressão das 8 aulas"
        lead="Uma sequência intencional para o Ensino Fundamental I. As primeiras aulas são acessíveis a todos os anos; as últimas aprofundam a autoria e a interação."
      >
        <div className="flex flex-wrap gap-2">
          {lessons.map((l) => (
            <BnccChip key={l.slug} codigo={l.bncc[0]} />
          ))}
        </div>
      </PageHero>

      <Section
        eyebrow="Visão geral"
        title="Da descoberta da tela ao projeto autoral"
        lead="Cada cartão mostra o ano sugerido, os conceitos e as categorias de blocos trabalhadas. Clique para abrir o plano completo da aula."
      >
        <ProgressMap />
      </Section>

      <Section tone="tint">
        <div className="grid gap-6 md:grid-cols-2">
          <Callout tone="info" title="Como usar a ordem">
            A ordem foi pensada para construir repertório: a Aula 2 só usa blocos de Movimento; a
            Aula 5 depende deles para demonstrar a repetição; a Aula 8 reúne eventos, repetição e
            cenas em um projeto autoral. Se sua turma já tem base, você pode compactar as aulas 1 e
            3.
          </Callout>
          <Callout tone="tip" title="Ritmo e duração">
            Cada aula foi planejada para 50 minutos. Para turmas de 1º e 2º ano, vale desdobrar as
            aulas em dois encontros mais curtos; para 4º e 5º, as aulas 7 e 8 podem render dois
            encontros cada.
          </Callout>
        </div>
      </Section>
    </>
  );
}