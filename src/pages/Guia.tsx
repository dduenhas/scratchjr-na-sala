import { Link } from 'react-router-dom';
import {
  Tablet,
  Laptop,
  Smartphone,
  Wifi,
  Users,
  Timer,
  HandHeart,
  VolumeX,
  CameraOff,
  ShieldCheck,
  ClipboardList,
  Download,
} from 'lucide-react';
import { PageHero } from '@/ui/PageHero';
import { Section } from '@/ui/Section';
import { Reveal } from '@/ui/Reveal';
import { Callout } from '@/ui/Callout';
import { Pill } from '@/ui/Badge';
import { LinkButton } from '@/ui/Button';
import { StepList } from '@/ui/StepList';

const dispositivos = [
  {
    icon: Tablet,
    nome: 'iPad / tablet Android',
    nota: 'Experiência mais completa e recomendada. App gratuito nas lojas oficiais.',
  },
  {
    icon: Laptop,
    nome: 'Chromebook',
    nota: 'Instale o ScratchJr pela Play Store. Ótimo para salas com Chromebooks.',
  },
  {
    icon: Smartphone,
    nome: 'Celular',
    nota: 'Funciona, mas a tela pequena atrapalha o encaixe de blocos. Prefira tablets.',
  },
  {
    icon: Wifi,
    nome: 'Uso offline',
    nota: 'Depois de instalado, o ScratchJr funciona sem internet — ótimo para redes instáveis.',
  },
];

const rotina = [
  {
    titulo: 'Abertura ritual (2 min)',
    corpo:
      'Comece sempre com a mesma frase e o mesmo gesto (“acender a tela”). Previsibilidade reduz a ansiedade com os aparelhos.',
  },
  {
    titulo: 'Combinado de manuseio (1 min)',
    corpo:
      'Duas mãos no dispositivo, um dedo para tocar, tela baixa sobre a mesa. Combine antes de entregar os aparelhos.',
  },
  {
    titulo: 'Foco do dia (1 min)',
    corpo:
      'Anuncie o objetivo da aula em uma frase (“hoje o personagem vai se mover até o alvo”). Deixe no quadro.',
  },
  {
    titulo: 'Fechamento e guarda (5 min)',
    corpo:
      'Três duplas mostram, todos salvam e saem pelo botão de casa. Guarde os aparelhos com calma para não perder projetos.',
  },
];

export function Guia() {
  return (
    <>
      <PageHero
        eyebrow="Preparação"
        title="Guia do professor"
        lead="Instalação, gestão da sala, ritmo, acessibilidade e avaliação — os bastidores que fazem uma aula de ScratchJr dar certo."
      >
        <div className="flex flex-wrap gap-2">
          <Pill tone="accent">Instalação</Pill>
          <Pill>Gestão da sala</Pill>
          <Pill>Acessibilidade</Pill>
          <Pill>Avaliação</Pill>
        </div>
      </PageHero>

      <Section
        eyebrow="Instalação"
        title="Onde e como rodar o ScratchJr"
        lead="O ScratchJr é gratuito e existe para iPad, tablets Android e Chromebook. Confirme sempre a versão atual no site oficial antes de orientar as famílias."
        actions={
          <LinkButton href="https://www.scratchjr.org/" external variant="outline">
            <Download size={15} /> Site oficial
          </LinkButton>
        }
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dispositivos.map((d, i) => (
            <Reveal key={d.nome} delay={i * 0.05}>
              <article className="h-full rounded-card border border-line bg-surface p-6">
                <d.icon size={22} className="text-accent" aria-hidden />
                <h3 className="mt-4 text-base font-semibold text-ink">{d.nome}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d.nota}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-6">
          <StepList
            steps={[
              {
                titulo: 'Instale antes da primeira aula',
                corpo:
                  'Baixe o app e abra uma vez em cada aparelho. Assim você evita contas, atualizações e downloads durante a aula.',
                dica: 'Se a escola gerencia os dispositivos, peça apoio ao responsável de TI com antecedência.',
              },
              {
                titulo: 'Prepare um projeto-semente',
                corpo:
                  'Deixe um projeto simples já criado (um personagem em um cenário) para acelerar a Aula 1.',
              },
              {
                titulo: 'Teste o projetor',
                corpo:
                  'Você vai demonstrar bastante no projetor. Faça um ensaio rápido de espelhamento de tela.',
              },
            ]}
          />
        </div>
      </Section>

      <Section tone="tint" eyebrow="Gestão da sala" title="Como organizar a turma">
        <div className="grid gap-5 md:grid-cols-3">
          <article className="rounded-card border border-line bg-surface p-6">
            <Users size={22} className="text-accent" aria-hidden />
            <h3 className="mt-4 text-lg font-semibold text-ink">Trabalho em duplas</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Sempre em duplas, com papéis que se alternam: quem “pilota” e quem “narra”. Trocar os
              papéis a cada 10 minutos garante participação equilibrada.
            </p>
          </article>
          <article className="rounded-card border border-line bg-surface p-6">
            <Timer size={22} className="text-accent" aria-hidden />
            <h3 className="mt-4 text-lg font-semibold text-ink">Blocos de tempo curtos</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Demonstração no projetor, depois tempo na tela, depois uma pausa sem telas para
              conversar. Evite blocos longos diante dos aparelhos.
            </p>
          </article>
          <article className="rounded-card border border-line bg-surface p-6">
            <ShieldCheck size={22} className="text-accent" aria-hidden />
            <h3 className="mt-4 text-lg font-semibold text-ink">Cuidado e conservação</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Definam juntos as regras de uso. Um “contrato da turma” impresso e assinado ajuda a
              cuidar dos equipamentos ao longo do ano.
            </p>
          </article>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 font-display text-xl font-semibold text-ink">
            A rotina de cada encontro
          </h3>
          <StepList steps={rotina} />
        </div>
      </Section>

      <Section eyebrow="Decisão pedagógica" title="Por que sem som e sem câmera">
        <div className="grid gap-5 md:grid-cols-3">
          <Callout tone="tip" title="Foco na imagem">
            <span className="inline-flex items-center gap-1.5 font-bold text-ink">
              <VolumeX size={15} /> Som
            </span>{' '}
            fica de fora nestas aulas introdutórias. A expressão acontece pelo balão de “Dizer” e
            pelo movimento, o que mantém o foco no visual e evita dependência de fones.
          </Callout>
          <Callout tone="tip" title="Privacidade">
            <span className="inline-flex items-center gap-1.5 font-bold text-ink">
              <CameraOff size={15} /> Câmera
            </span>{' '}
            não é usada por cuidado com a imagem dos alunos. Isso também simplifica a gestão de
            consentimentos e o uso responsável de dados.
          </Callout>
          <Callout tone="tip" title="Confiabilidade">
            Sem áudio e sem câmera, a aula funciona igual em qualquer aparelho, mesmo nos mais
            antigos ou com menos recursos. Menos imprevistos técnicos, mais tempo de criação.
          </Callout>
        </div>
      </Section>

      <Section tone="tint" eyebrow="Inclusão" title="Acessibilidade na prática">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-card border border-line bg-surface p-6">
            <HandHeart size={22} className="text-accent" aria-hidden />
            <h3 className="mt-4 text-lg font-semibold text-ink">Para todos</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
              <li>• Aproxime o dispositivo de quem tem baixa visão e use os cenários de alto contraste.</li>
              <li>• Ofereça o cartaz da tela impresso como apoio visual permanente.</li>
              <li>• Para alunos com dificuldade motora, comece apenas com blocos de seta e alvos próximos.</li>
              <li>• Permita respostas orais no lugar de registros escritos no planejamento da história.</li>
            </ul>
          </article>
          <article className="rounded-card border border-line bg-surface p-6">
            <ClipboardList size={22} className="text-accent" aria-hidden />
            <h3 className="mt-4 text-lg font-semibold text-ink">Avaliação formativa</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Avalie pelo processo: observar as escolhas, ouvir a explicação do aluno e guardar as
              evidências (fotos da tela, projetos salvos). Os selos e certificados das aulas são
              registros afetivos que ajudam a manter o engajamento — use-os como observação, não
              como nota.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <LinkButton to="/imprimiveis" variant="outline" size="md">
                Ver rubrica e certificado
              </LinkButton>
            </div>
          </article>
        </div>
      </Section>

      <Section>
        <Callout tone="warn" title="Checklist do professor">
          <ul className="space-y-1.5">
            <li>☐ App instalado e testado em todos os aparelhos.</li>
            <li>☐ Projetor espelhando a tela do professor.</li>
            <li>☐ Imprimíveis da aula separados (cartões, mapa da tela, roteiro).</li>
            <li>☐ Projeto-semente criado para acelerar a demonstração.</li>
            <li>☐ Combinados de manuseio revisados com a turma.</li>
          </ul>
        </Callout>
        <p className="mt-6 text-sm text-ink-soft">
          Quer os arquivos oficiais? Veja a página de{' '}
          <Link to="/recursos" className="font-bold text-accent hover:underline">
            recursos
          </Link>{' '}
          com links para o site do ScratchJr e os currículos de referência.
        </p>
      </Section>
    </>
  );
}