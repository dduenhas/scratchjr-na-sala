export type BlocoCategoriaId =
  | 'gatilho'
  | 'movimento'
  | 'aparencia'
  | 'som'
  | 'controle'
  | 'fim';

export interface BlocoCategoria {
  id: BlocoCategoriaId;
  nome: string;
  token: string;
  hex: string;
  usadaNestePlano: boolean;
  resumo: string;
}

export interface Bloco {
  id: string;
  nome: string;
  categoria: BlocoCategoriaId;
  descricao: string;
}

export const categorias: BlocoCategoria[] = [
  {
    id: 'gatilho',
    nome: 'Gatilhos',
    token: 'block-trigger',
    hex: '#f2c200',
    usadaNestePlano: true,
    resumo: 'Quando a história começa. Dispara as ações dos personagens.',
  },
  {
    id: 'movimento',
    nome: 'Movimento',
    token: 'block-motion',
    hex: '#4c8bf5',
    usadaNestePlano: true,
    resumo: 'Faz o personagem andar, girar e pular pelo palco.',
  },
  {
    id: 'aparencia',
    nome: 'Aparência',
    token: 'block-looks',
    hex: '#9a6bf0',
    usadaNestePlano: true,
    resumo: 'Muda como o personagem se mostra: fala, cresce, some, aparece.',
  },
  {
    id: 'som',
    nome: 'Som',
    token: 'block-sound',
    hex: '#3fb950',
    usadaNestePlano: false,
    resumo: 'Reproduz sons. Fora do escopo destas aulas introdutórias.',
  },
  {
    id: 'controle',
    nome: 'Controle',
    token: 'block-control',
    hex: '#f5871f',
    usadaNestePlano: true,
    resumo: 'Repete ações e ajusta o tempo — é o coração da animação.',
  },
  {
    id: 'fim',
    nome: 'Fim',
    token: 'block-end',
    hex: '#e5484d',
    usadaNestePlano: true,
    resumo: 'Encerra o roteiro, repete para sempre ou troca de cena.',
  },
];

export const categoriaById = Object.fromEntries(categorias.map((c) => [c.id, c])) as Record<
  BlocoCategoriaId,
  BlocoCategoria
>;

export const blocos: Bloco[] = [
  { id: 'bandeira', nome: 'Bandeira verde', categoria: 'gatilho', descricao: 'Começa quando o projeto é iniciado.' },
  { id: 'toque', nome: 'Ao tocar', categoria: 'gatilho', descricao: 'Começa quando o personagem é tocado.' },
  { id: 'mensagem', nome: 'Ao receber', categoria: 'gatilho', descricao: 'Começa ao receber uma mensagem de outro personagem.' },
  { id: 'colisao', nome: 'Ao colidir', categoria: 'gatilho', descricao: 'Começa quando o personagem encosta em outro.' },

  { id: 'mover-direita', nome: 'Seta direita', categoria: 'movimento', descricao: 'Move para a direita.' },
  { id: 'mover-esquerda', nome: 'Seta esquerda', categoria: 'movimento', descricao: 'Move para a esquerda.' },
  { id: 'mover-cima', nome: 'Seta cima', categoria: 'movimento', descricao: 'Move para cima.' },
  { id: 'mover-baixo', nome: 'Seta baixo', categoria: 'movimento', descricao: 'Move para baixo.' },
  { id: 'girar-horario', nome: 'Girar ↻', categoria: 'movimento', descricao: 'Gira no sentido horário.' },
  { id: 'girar-antihorario', nome: 'Girar ↺', categoria: 'movimento', descricao: 'Gira no sentido anti-horário.' },
  { id: 'pular', nome: 'Pular', categoria: 'movimento', descricao: 'Dá um pulinho no lugar.' },
  { id: 'inicio', nome: 'Início', categoria: 'movimento', descricao: 'Volta à posição inicial.' },

  { id: 'dizer', nome: 'Dizer', categoria: 'aparencia', descricao: 'Mostra um balão de fala.' },
  { id: 'crescer', nome: 'Crescer', categoria: 'aparencia', descricao: 'Aumenta o personagem.' },
  { id: 'diminuir', nome: 'Diminuir', categoria: 'aparencia', descricao: 'Reduz o personagem.' },
  { id: 'tamanho-normal', nome: 'Tamanho normal', categoria: 'aparencia', descricao: 'Volta ao tamanho original.' },
  { id: 'esconder', nome: 'Esconder', categoria: 'aparencia', descricao: 'Some com o personagem.' },
  { id: 'mostrar', nome: 'Mostrar', categoria: 'aparencia', descricao: 'Faz o personagem aparecer.' },

  { id: 'pop', nome: 'Pop', categoria: 'som', descricao: 'Toca um som de estalo.' },
  { id: 'gravar', nome: 'Gravar', categoria: 'som', descricao: 'Reproduz um som gravado.' },

  { id: 'esperar', nome: 'Esperar', categoria: 'controle', descricao: 'Pausa antes de seguir.' },
  { id: 'repetir', nome: 'Repetir', categoria: 'controle', descricao: 'Repete um número fixo de vezes.' },
  { id: 'velocidade', nome: 'Velocidade', categoria: 'controle', descricao: 'Acelera ou desacelera o personagem.' },

  { id: 'fim', nome: 'Fim', categoria: 'fim', descricao: 'Termina o roteiro do personagem.' },
  { id: 'repetir-sempre', nome: 'Repetir para sempre', categoria: 'fim', descricao: 'Repete sem parar.' },
  { id: 'ir-pagina', nome: 'Ir para página', categoria: 'fim', descricao: 'Muda para outra cena.' },
];

export const blocoById = Object.fromEntries(blocos.map((b) => [b.id, b])) as Record<string, Bloco>;