const BASE = 'https://www.scratchjr.org/';

/** Monta a URL absoluta de um recurso oficial do ScratchJr. */
export const oficial = (caminho: string): string => `${BASE}${caminho}`;

export interface ImagemOficial {
  src: string;
  alt: string;
  legenda: string;
  grupo: 'interface' | 'cartoes' | 'projetos' | 'material';
}

/**
 * Imagens oficiais hospedadas em scratchjr.org (uso por hotlink, conforme
 * escolha do projeto). Todas verificadas em 2026. Créditos: Scratch Foundation.
 */
export const imagensOficiais: ImagemOficial[] = [
  {
    src: oficial('images/homegraphic.png'),
    alt: 'Arte oficial do ScratchJr com personagens e blocos de programação.',
    legenda: 'Arte oficial do ScratchJr (scratchjr.org).',
    grupo: 'interface',
  },
  {
    src: oficial('images/newslide1.png'),
    alt: 'Imagem oficial do ScratchJr, disponibilizada no site oficial.',
    legenda: 'Imagem oficial do ScratchJr.',
    grupo: 'interface',
  },
  {
    src: oficial('images/newslide2.png'),
    alt: 'Imagem oficial do ScratchJr, disponibilizada no site oficial.',
    legenda: 'Imagem oficial do ScratchJr.',
    grupo: 'interface',
  },
  {
    src: oficial('images/newslide3.png'),
    alt: 'Imagem oficial do ScratchJr, disponibilizada no site oficial.',
    legenda: 'Imagem oficial do ScratchJr.',
    grupo: 'interface',
  },
  {
    src: oficial('images/newslide4.png'),
    alt: 'Imagem oficial do ScratchJr, disponibilizada no site oficial.',
    legenda: 'Imagem oficial do ScratchJr.',
    grupo: 'interface',
  },
  {
    src: oficial('images/newslide5.png'),
    alt: 'Imagem oficial do ScratchJr, disponibilizada no site oficial.',
    legenda: 'Imagem oficial do ScratchJr.',
    grupo: 'interface',
  },
  {
    src: oficial('images/rightandleft.png'),
    alt: 'Ilustração oficial sobre girar à direita e à esquerda no ScratchJr.',
    legenda: 'Material oficial: girar para a direita e para a esquerda.',
    grupo: 'material',
  },
  {
    src: oficial('images/delete_sprite.png'),
    alt: 'Ilustração oficial sobre apagar um personagem no ScratchJr.',
    legenda: 'Material oficial: apagar um personagem.',
    grupo: 'material',
  },
  {
    src: oficial('images/activitycards/card01-car.png'),
    alt: 'Cartão de atividade oficial do ScratchJr com o projeto do carro.',
    legenda: 'Cartão oficial — “Carro”.',
    grupo: 'cartoes',
  },
  {
    src: oficial('images/activitycards/card02-dance.png'),
    alt: 'Cartão de atividade oficial do ScratchJr com o projeto da dança.',
    legenda: 'Cartão oficial — “Dança”.',
    grupo: 'cartoes',
  },
  {
    src: oficial('images/activitycards/card03-race.png'),
    alt: 'Cartão de atividade oficial do ScratchJr com o projeto da corrida.',
    legenda: 'Cartão oficial — “Corrida”.',
    grupo: 'cartoes',
  },
  {
    src: oficial('images/activitycards/card04-dribble.png'),
    alt: 'Cartão de atividade oficial do ScratchJr com o projeto de quicar a bola.',
    legenda: 'Cartão oficial — “Quicar”.',
    grupo: 'cartoes',
  },
  {
    src: oficial('images/activitycards/card05-forest.png'),
    alt: 'Cartão de atividade oficial do ScratchJr com o projeto da floresta.',
    legenda: 'Cartão oficial — “Floresta”.',
    grupo: 'cartoes',
  },
  {
    src: oficial('images/activitycards/card06-sun.png'),
    alt: 'Cartão de atividade oficial do ScratchJr com o projeto do sol.',
    legenda: 'Cartão oficial — “Sol”.',
    grupo: 'cartoes',
  },
  {
    src: oficial('images/activitycards/card07-moon.png'),
    alt: 'Cartão de atividade oficial do ScratchJr com o projeto da lua.',
    legenda: 'Cartão oficial — “Lua”.',
    grupo: 'cartoes',
  },
  {
    src: oficial('images/activitycards/card08-greet.png'),
    alt: 'Cartão de atividade oficial do ScratchJr com o projeto de saudação.',
    legenda: 'Cartão oficial — “Cumprimentar”.',
    grupo: 'cartoes',
  },
  {
    src: oficial('images/activitycards/card09-talk.png'),
    alt: 'Cartão de atividade oficial do ScratchJr com o projeto de conversa.',
    legenda: 'Cartão oficial — “Conversar”.',
    grupo: 'cartoes',
  },
  {
    src: oficial('images/forest_project_picture.png'),
    alt: 'Projeto de exemplo oficial do ScratchJr com tema de floresta.',
    legenda: 'Projeto de exemplo oficial: “Floresta”.',
    grupo: 'projetos',
  },
  {
    src: oficial('images/greet_project_picture.png'),
    alt: 'Projeto de exemplo oficial do ScratchJr com personagens se cumprimentando.',
    legenda: 'Projeto de exemplo oficial: personagens se cumprimentando.',
    grupo: 'projetos',
  },
  {
    src: oficial('images/conversation_project_picture.png'),
    alt: 'Projeto de exemplo oficial do ScratchJr com dois personagens conversando.',
    legenda: 'Projeto de exemplo oficial: conversa entre personagens.',
    grupo: 'projetos',
  },
  {
    src: oficial('images/assessments/reverse-engineer.png'),
    alt: 'Material oficial de avaliação do ScratchJr sobre engenharia reversa de um projeto.',
    legenda: 'Material oficial de avaliação: “engenharia reversa”.',
    grupo: 'material',
  },
  {
    src: oficial('images/scratchjr-coding-cards.png'),
    alt: 'Cartões de programação do ScratchJr (ScratchJr Coding Cards).',
    legenda: 'ScratchJr Coding Cards — baralho oficial de atividades.',
    grupo: 'material',
  },
  {
    src: oficial('images/profdev/teachcal.png'),
    alt: 'Calendário de ensino oficial do ScratchJr para o professor.',
    legenda: 'Material oficial de formação: calendário de ensino.',
    grupo: 'material',
  },
];

export const imagemPorSrc = Object.fromEntries(imagensOficiais.map((i) => [i.src, i])) as Record<
  string,
  ImagemOficial
>;

export const imagensPorGrupo = (grupo: ImagemOficial['grupo']): ImagemOficial[] =>
  imagensOficiais.filter((i) => i.grupo === grupo);