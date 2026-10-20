export interface Termo {
  termo: string;
  definicao: string;
  /** Slug da aula em que o termo aparece, quando aplicável. */
  aula?: string;
}

export const glossario: Termo[] = [
  {
    termo: 'Algoritmo',
    definicao:
      'Uma sequência ordenada de passos para resolver um problema ou realizar uma tarefa. A receita de bolo é um algoritmo do dia a dia.',
    aula: 'meu-personagem-se-move',
  },
  {
    termo: 'Bloco',
    definicao:
      'Peça colorida que representa uma instrução. Os blocos se encaixam uns nos outros formando o roteiro de um personagem.',
  },
  {
    termo: 'Gatilho / Evento',
    definicao:
      'Bloco amarelo que decide quando um roteiro começa: ao iniciar (bandeira verde), ao tocar, ao receber uma mensagem ou ao colidir.',
    aula: 'quando-eu-quero-eventos',
  },
  {
    termo: 'Personagem (sprite)',
    definicao:
      'O ator do palco, que executa os roteiros. Cada cena pode ter vários personagens, e cada um tem os seus próprios blocos.',
    aula: 'descobrindo-o-scratchjr',
  },
  {
    termo: 'Cenário',
    definicao:
      'O fundo onde a história acontece. Pode ser escolhido na biblioteca ou editado no editor de pintura.',
    aula: 'minhas-cenas',
  },
  {
    termo: 'Palco',
    definicao:
      'A área onde a animação acontece. É o “mundo” onde os personagens se movem e interagem.',
    aula: 'descobrindo-o-scratchjr',
  },
  {
    termo: 'Paleta de blocos',
    definicao:
      'A faixa à esquerda da tela que reúne todos os blocos, organizados por cor e categoria.',
    aula: 'descobrindo-o-scratchjr',
  },
  {
    termo: 'Página / Cena',
    definicao:
      'Cada “folha” de um projeto, com o seu próprio cenário e personagens. Trocar de página é trocar de cena.',
    aula: 'minhas-cenas',
  },
  {
    termo: 'Repetição (loop)',
    definicao:
      'Estrutura de controle que executa blocos várias vezes. No ScratchJr, aparece como “Repetir” (com número) ou “Repetir para sempre”.',
    aula: 'repetir-e-divertido',
  },
  {
    termo: 'Iteração definida',
    definicao:
      'Repetição com um número fixo de vezes, como um “Repetir 4 vezes”. O aluno sabe exatamente quando termina.',
    aula: 'repetir-e-divertido',
  },
  {
    termo: 'Iteração indefinida',
    definicao:
      'Repetição que não termina sozinha, como “Repetir para sempre”. Exige planejar como parar.',
    aula: 'todo-mundo-junto',
  },
  {
    termo: 'Paralelismo',
    definicao:
      'Vários roteiros rodando ao mesmo tempo, um por personagem. É o que faz o palco ganhar vida com diversos atores.',
    aula: 'todo-mundo-junto',
  },
  {
    termo: 'Mensagem',
    definicao:
      'Recado que um personagem envia e que dispara o roteiro de outro. Permite a interação entre personagens.',
    aula: 'projeto-autoral-interativo',
  },
  {
    termo: 'Editor de pintura',
    definicao:
      'Ferramenta para criar e editar personagens e cenários: pincel, formas, letras, preenchimento e borracha. Nesta unidade não usamos a câmera.',
    aula: 'personagem-que-fala-e-transforma',
  },
  {
    termo: 'Projeto',
    definicao:
      'O conjunto de cenas, personagens e roteiros criados pelo aluno. É salvo no aplicativo e pode ser reaberto depois.',
    aula: 'descobrindo-o-scratchjr',
  },
  {
    termo: 'Interface',
    definicao:
      'O conjunto de telas, botões e áreas com que a pessoa interage em um aplicativo.',
    aula: 'descobrindo-o-scratchjr',
  },
  {
    termo: 'Hardware e Software',
    definicao:
      'Hardware é a parte física (o tablet, o computador). Software é o programa que dá as instruções ao hardware (o ScratchJr).',
    aula: 'descobrindo-o-scratchjr',
  },
  {
    termo: 'Autoria',
    definicao:
      'Ser o autor do que se cria. Implica responsabilidade e o dever de dar crédito às ideias dos outros.',
    aula: 'projeto-autoral-interativo',
  },
];