export interface Recurso {
  titulo: string;
  descricao: string;
  href: string;
  tipo: 'site' | 'pdf';
  fonte: string;
}

export const recursos: Recurso[] = [
  {
    titulo: 'ScratchJr — site oficial',
    descricao:
      'Página oficial com visão geral, download para iPad, Android, Chromebook e tablets, e orientações gerais.',
    href: 'https://www.scratchjr.org/',
    tipo: 'site',
    fonte: 'ScratchJr / Scratch Foundation',
  },
  {
    titulo: 'Sobre o ScratchJr',
    descricao:
      'Contexto do projeto, público-alvo (5 a 7 anos) e a pesquisa que fundamenta a linguagem de programação por blocos.',
    href: 'https://www.scratchjr.org/about',
    tipo: 'site',
    fonte: 'ScratchJr',
  },
  {
    titulo: 'Recursos para educadores',
    descricao:
      'Materiais oficiais de apoio ao professor: cartões, atividades e orientações de implementação em sala.',
    href: 'https://www.scratchjr.org/teach/resources',
    tipo: 'site',
    fonte: 'ScratchJr',
  },
  {
    titulo: 'Currículos e planos oficiais',
    descricao:
      'Sequências didáticas completas publicadas oficialmente, úteis para ampliar esta introdução de 8 aulas.',
    href: 'https://www.scratchjr.org/teach/curricula',
    tipo: 'site',
    fonte: 'ScratchJr',
  },
  {
    titulo: 'Scratch Foundation',
    descricao:
      'Fundação que mantém o Scratch, o ScratchJr e o ScratchEd — comunidade global de educadores.',
    href: 'https://www.scratchfoundation.org/',
    tipo: 'site',
    fonte: 'Scratch Foundation',
  },
  {
    titulo: 'Currículo de Matemática e Letramento',
    descricao:
      'Currículo oficial que integra o ScratchJr à Matemática e à Alfabetização (DevTech Research Group, Tufts University).',
    href: 'https://sites.bc.edu/devtech/wp-content/uploads/sites/181/2022/10/Reinforcing-Math-and-Literacy-Curriculum.pdf',
    tipo: 'pdf',
    fonte: 'DevTech / Tufts',
  },
  {
    titulo: 'Currículo de Artes — Autorretratos',
    descricao:
      'Sequência que conecta o ScratchJr à produção artística e à expressão pessoal.',
    href: 'https://sites.bc.edu/devtech/wp-content/uploads/sites/181/2022/10/Art-Curriculum-Self-Portraits.pdf',
    tipo: 'pdf',
    fonte: 'DevTech / Tufts',
  },
  {
    titulo: 'Jogos de Pátio',
    descricao:
      'Currículo com projetos inspirados em brincadeiras e jogos tradicionais.',
    href: 'https://sites.bc.edu/devtech/wp-content/uploads/sites/181/2022/10/Playground-Games.pdf',
    tipo: 'pdf',
    fonte: 'DevTech / Tufts',
  },
  {
    titulo: 'Caça ao Tesouro',
    descricao:
      'Atividade de exploração em que a turma investiga o app e seus recursos.',
    href: 'https://sites.bc.edu/devtech/wp-content/uploads/sites/181/2022/10/Scavenger-Hunt.pdf',
    tipo: 'pdf',
    fonte: 'DevTech / Tufts',
  },
];

export const recursoGrupos = [
  {
    grupo: 'ScratchJr oficial',
    itens: recursos.filter((r) => r.fonte.startsWith('ScratchJr')),
  },
  {
    grupo: 'Comunidade e formação',
    itens: recursos.filter((r) => r.fonte === 'Scratch Foundation'),
  },
  {
    grupo: 'Currículos (DevTech / Tufts)',
    itens: recursos.filter((r) => r.fonte === 'DevTech / Tufts'),
  },
];