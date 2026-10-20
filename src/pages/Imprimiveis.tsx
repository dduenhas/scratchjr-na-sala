import { Printer, GraduationCap } from 'lucide-react';
import { PageHero } from '@/ui/PageHero';
import { Section } from '@/ui/Section';
import { Callout } from '@/ui/Callout';
import { Button } from '@/ui/Button';
import { BlockChip } from '@/art/BlockChip';
import { blocos, categorias } from '@/content/blocos';
import { cn } from '@/lib/cn';

const rubrica = [
  { criterio: 'Reconhece a interface', niveis: ['Aponta 1 parte', 'Aponta 2 a 3 partes', 'Nomeia e explica as partes', 'Ensina um colega'] },
  { criterio: 'Monta sequências', niveis: ['Segue o modelo', 'Monta com apoio', 'Cria sequência própria', 'Otimiza a sequência'] },
  { criterio: 'Usa eventos', niveis: ['Observa', 'Usa 1 gatilho', 'Usa 2 gatilhos', 'Combina gatilhos'] },
  { criterio: 'Cria com repetição', niveis: ['Reconhece', 'Usa Repetir com apoio', 'Usa Repetir sozinho', 'Ajusta ritmo e velocidade'] },
  { criterio: 'Colaboração', niveis: ['Participa com apoio', 'Alterna papéis', 'Colabora e espera a vez', 'Ajuda a turma'] },
];

const niveisTitulo = ['Iniciando', 'Em desenvolvimento', 'Esperado', 'Avançado'];

export function Imprimiveis() {
  return (
    <>
      <PageHero
        eyebrow="Para imprimir"
        title="Imprimíveis do professor"
        lead="Materiais prontos para levar à sala. Use o botão de impressão (ou Ctrl + P) — o layout foi preparado para o papel."
      >
        <Button onClick={() => window.print()}>
          <Printer size={16} /> Imprimir esta página
        </Button>
      </PageHero>

      <Section>
        <Callout tone="tip" className="mb-10">
          Dica de impressão: imprima os <strong>cartões de blocos</strong> em papel firme e recorte
          para atividades manuais sem telas. O <strong>mapa da tela</strong> funciona bem em A3 para
          o mural. O <strong>certificado</strong> fica melhor em paisagem.
        </Callout>

        <div className="space-y-16">
          <article>
            <h2 className="font-display text-2xl font-semibold text-ink">1 · Cartões de blocos</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Todos os blocos do plano, agrupados por categoria. Recorte e use para planejar
              sequências na mesa antes de ir para a tela.
            </p>
            <div className="mt-6 space-y-8">
              {categorias.map((cat) => {
                const itens = blocos.filter((b) => b.categoria === cat.id);
                return (
                  <div key={cat.id}>
                    <div className="mb-3 flex items-center gap-2">
                      <span
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: cat.hex }}
                        aria-hidden
                      />
                      <h3 className="text-sm font-bold uppercase tracking-wide text-ink-mute">
                        {cat.nome}
                        {!cat.usadaNestePlano && ' (fora do plano)'}
                      </h3>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {itens.map((b) => (
                        <div
                          key={b.id}
                          className="print-break flex items-center gap-3 rounded-lg border border-dashed border-line-strong p-3"
                        >
                          <BlockChip bloco={b} size="sm" />
                          <span className="text-xs leading-snug text-ink-soft">{b.descricao}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="print-page">
            <h2 className="font-display text-2xl font-semibold text-ink">2 · Mapa da tela</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Diagrama para o mural e para as duplas. Reproduz a organização da tela do ScratchJr.
            </p>
            <div className="mt-6 grid gap-6 rounded-card border border-line bg-surface p-6 md:grid-cols-[64px_1fr_72px]">
              <div className="rounded-lg border border-line bg-paper-deep p-2">
                <p className="mb-2 text-center text-[10px] font-bold uppercase text-ink-mute">
                  Paleta
                </p>
                <div className="flex flex-col gap-1.5">
                  {categorias.map((c) => (
                    <span
                      key={c.id}
                      className="h-6 rounded"
                      style={{ backgroundColor: c.hex }}
                      title={c.nome}
                    />
                  ))}
                </div>
              </div>
              <div className="relative rounded-lg border border-line bg-[linear-gradient(180deg,#d9ecff,#bfe0ff)] p-4">
                <p className="text-[10px] font-bold uppercase text-ink-mute">Palco (a animação)</p>
                <span aria-hidden className="absolute inset-x-0 bottom-0 h-1/4 bg-[#8fd48a]" />
                <div className="absolute bottom-2 left-4 rounded bg-white/80 px-2 py-0.5 text-[10px] font-bold text-ink-soft">
                  personagem
                </div>
                <div className="absolute bottom-2 right-4 rounded bg-white/80 px-2 py-0.5 text-[10px] font-bold text-ink-soft">
                  cenário
                </div>
              </div>
              <div className="rounded-lg border border-line bg-paper-deep p-2">
                <p className="mb-2 text-center text-[10px] font-bold uppercase text-ink-mute">
                  Páginas
                </p>
                <div className="flex flex-col gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-8 rounded border border-line bg-surface" />
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-xs font-semibold text-ink-mute">
              Bandeira verde (iniciar) no topo · paleta à esquerda · páginas (cenas) à direita
            </p>
          </article>

          <article className="print-page">
            <h2 className="font-display text-2xl font-semibold text-ink">3 · Roteiro em 3 cenas</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Planeje a história no papel antes de programar (Aula 7).
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {['Começo', 'Meio', 'Fim'].map((parte) => (
                <div key={parte} className="rounded-card border border-line-strong p-4">
                  <p className="font-display text-lg font-semibold text-ink">{parte}</p>
                  <p className="mt-1 text-xs text-ink-mute">Cenário:</p>
                  <div className="mt-1 h-5 rounded border-b border-dashed border-line-strong" />
                  <p className="mt-3 text-xs text-ink-mute">O que acontece:</p>
                  <div className="mt-1 space-y-2">
                    <div className="h-4 rounded border-b border-dashed border-line-strong" />
                    <div className="h-4 rounded border-b border-dashed border-line-strong" />
                    <div className="h-4 rounded border-b border-dashed border-line-strong" />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="print-page">
            <h2 className="font-display text-2xl font-semibold text-ink">
              4 · Rubrica de avaliação
            </h2>
            <p className="mt-2 text-sm text-ink-soft">
              Avaliação formativa ao longo das 8 aulas. Marque o nível observado por aluno ou dupla.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-line-strong text-xs uppercase tracking-wide text-ink-mute">
                    <th className="px-3 py-3 font-bold">Critério</th>
                    {niveisTitulo.map((n) => (
                      <th key={n} className="px-3 py-3 font-bold">
                        {n}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rubrica.map((r) => (
                    <tr key={r.criterio} className="border-b border-line">
                      <td className="px-3 py-3 font-semibold text-ink">{r.criterio}</td>
                      {r.niveis.map((n) => (
                        <td key={n} className="px-3 py-3 text-ink-soft">
                          <span className="mr-1.5 inline-block h-3 w-3 rounded-full border border-line-strong" />
                          {n}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="print-page">
            <h2 className="font-display text-2xl font-semibold text-ink">5 · Certificado</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Entregue ao final da Aula 8. Imprima em paisagem para um efeito melhor.
            </p>
            <div className="mt-6 rounded-card border-2 border-accent/40 bg-accent-tint p-8 text-center sm:p-12">
              <GraduationCap size={36} className="mx-auto text-accent" aria-hidden />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                Certificado
              </p>
              <h3 className="mt-2 font-display text-3xl font-semibold text-ink">
                Programador ScratchJr
              </h3>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
                Certificamos que
              </p>
              <div className="mx-auto mt-2 h-8 w-full max-w-sm border-b-2 border-dashed border-accent/50" />
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
                concluiu a unidade introdutória de ScratchJr (8 aulas), criando histórias,
                animações e projetos interativos com criatividade.
              </p>
              <div className="mt-10 flex items-end justify-center gap-10 text-left">
                <div>
                  <div className="h-8 w-48 border-b border-ink" />
                  <p className="mt-1 text-xs font-semibold text-ink-mute">Professor(a)</p>
                </div>
                <div>
                  <div className="h-8 w-40 border-b border-ink" />
                  <p className="mt-1 text-xs font-semibold text-ink-mute">Data</p>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className={cn('mt-12 flex justify-center')}>
          <Button onClick={() => window.print()}>
            <Printer size={16} /> Imprimir esta página
          </Button>
        </div>
      </Section>
    </>
  );
}