import { oficial } from './media';

export type DemoKind =
  | 'interface'
  | 'sequencia'
  | 'eventos'
  | 'aparencia'
  | 'loop'
  | 'paralelo'
  | 'cenas'
  | 'mensagem';

export interface Passo {
  titulo: string;
  corpo: string;
  dica?: string;
}

export interface Conexao {
  area: string;
  como: string;
}

export interface Conceito {
  nome: string;
  explicacao: string;
}

export interface Atividade {
  titulo: string;
  resumo: string;
  passos: string[];
  recompensa: { titulo: string; texto: string };
}

export interface Lesson {
  n: number;
  slug: string;
  title: string;
  tagline: string;
  anoTags: string[];
  duracao: string;
  resumo: string;
  conceitos: Conceito[];
  objetivos: string[];
  bncc: string[];
  blocos: string[];
  materiais: string[];
  preparacao: string[];
  roteiro: Passo[];
  atividade: Atividade;
  dicas: string[];
  avaliacao: string[];
  conexoes: Conexao[];
  adaptacao: { iniciantes: string; avancados: string };
  demo: DemoKind;
  imagens: string[];
  nota: string;
}

export const lessons: Lesson[] = [
  {
    n: 1,
    slug: 'descobrindo-o-scratchjr',
    title: 'Descobrindo o ScratchJr',
    tagline: 'A primeira volta pela tela, pelos personagens e pelos cenários.',
    anoTags: ['1º', '2º', '3º', '4º', '5º'],
    duracao: '50 min · 1 encontro',
    resumo:
      'Uma exploração guiada do ambiente, sem ainda escrever programas complexos. O objetivo é que a turma se sinta em casa no aplicativo: onde ficam os personagens, o cenário, a paleta de blocos e as páginas. É a aula que cria o vocabulário comum de toda a sequência.',
    conceitos: [
      {
        nome: 'Artefato computacional',
        explicacao:
          'O ScratchJr é um software (app) que roda sobre um hardware (tablet, Chromebook ou computador). Explorar o app é a porta de entrada para o Mundo Digital.',
      },
      {
        nome: 'Palco, paleta e páginas',
        explicacao:
          'O palco é onde a animação acontece; a paleta reúne os blocos; as páginas guardam as cenas do projeto. Nomear cada parte é o primeiro passo.',
      },
      {
        nome: 'Personagem e cenário',
        explicacao:
          'O personagem é quem age; o cenário é o fundo. Trocar os dois é uma decisão de autoria — e toda autoria começa por escolhas.',
      },
    ],
    objetivos: [
      'Reconhecer e nomear as partes principais do ScratchJr e suas funções.',
      'Explorar, com apoio, um artefato computacional voltado a criar histórias.',
      'Diferenciar personagem, cenário e página (cena) dentro de um projeto.',
      'Salvar e reencontrar um projeto simples na tela inicial do app.',
    ],
    bncc: ['EF01CO06', 'EF02CO05', 'EF15CO06', 'EF15CO07', 'EF03CO06'],
    blocos: [],
    materiais: [
      'Tablets, Chromebooks ou computadores com o ScratchJr instalado (1 por dupla).',
      'Projetor ou TV para a demonstração coletiva.',
      'Cartaz impresso “Mapa da tela” (ver Imprimíveis).',
      'Cartões oficiais “Carro” e “Dança” impressos para a rodinha.',
    ],
    preparacao: [
      'Abra o ScratchJr antes da aula e deixe um projeto novo pronto na tela inicial, para não perder tempo.',
      'Confirme que o app abre sem pedir atualização e que o volume não é necessário (estas aulas são visuais).',
      'Imprima o “Mapa da tela” em A3 para o cartaz e em A4 para as duplas.',
      'Combine a regra de ouro do manuseio: segurar com as duas mãos e tocar com um dedo só.',
    ],
    roteiro: [
      {
        titulo: 'Roda de conversa (5 min)',
        corpo:
          'Pergunte: “Quem já viu um aplicativo? O que ele faz?”. Explique que vão usar um app em que eles são os autores das histórias, não só os espectadores.',
        dica: 'Anote no quadro as palavras que a turma já usa (“tela”, “botão”, “jogo”) e vá ligando aos nomes técnicos.',
      },
      {
        titulo: 'Demonstração no projetor (10 min)',
        corpo:
          'Com o seu dispositivo projetado, passeie pelo app apontando cada parte: palco (onde os personagens vivem), paleta de blocos (à esquerda), botão do gato “+” (adicionar personagem) e as páginas (as cenas). Faça uma troca de cenário bem devagar.',
        dica: 'Fale devagar e repita cada nome duas vezes. O objetivo é vocabulário, não velocidade.',
      },
      {
        titulo: 'Exploração em duplas (15 min)',
        corpo:
          'Cada dupla abre o app e recebe 3 missões: (1) trocar o personagem, (2) trocar o cenário, (3) tocar na bandeira verde. Circule pela sala perguntando “o que essa parte faz?”.',
        dica: 'Nas primeiras semanas, uma criança “pilota” e a outra “narra” o que acontece; depois trocam.',
      },
      {
        titulo: 'Registro no cartaz (10 min)',
        corpo:
          'Com o “Mapa da tela” impresso, as duplas apontam e nomeiam as partes: palco, paleta, personagem, cenário, páginas. Cole os cartazes no mural da sala.',
      },
      {
        titulo: 'Fechamento: cartão-postal (10 min)',
        corpo:
          'Cada dupla escolhe um personagem e um cenário e salva o projeto. Esse projeto salvo é o “cartão-postal” que será reaberto na Aula 2.',
        dica: 'Oriente a sair pelo botão de casa: o ScratchJr salva automaticamente. Volte à tela inicial para conferir.',
      },
    ],
    atividade: {
      titulo: 'Tour de descoberta + Cartão-postal',
      resumo:
        'Uma caça ao tesouro pela interface, terminando com um projeto pessoal salvo e exposto no mural.',
      passos: [
        'Escreva no quadro 3 missões: trocar personagem, trocar cenário, tocar na bandeira verde.',
        'As duplas cumprem as missões e levantam a mão ao terminar cada uma.',
        'Cada dupla escolhe personagem + cenário para o seu “cartão-postal” e salva.',
        'Exposição rápida: 3 duplas mostram o seu e dizem o nome do personagem.',
      ],
      recompensa: {
        titulo: 'Selo “Personagem Estrela”',
        texto:
          'A dupla escolhe um personagem para “apadrinhar” durante toda a unidade. Imprima o selo e cole no mural com o nome da dupla.',
      },
    },
    dicas: [
      'Se algum dispositivo travar, combine um “plano B”: a dupla se junta à vizinha por 5 minutos — colaboração também é conteúdo.',
      'Não corrija escolhas estéticas dos alunos; valorize a decisão (mesmo que repitam o mesmo personagem).',
      'Deixe o app no idioma português quando disponível; caso contrário, use o cartaz para traduzir os nomes.',
    ],
    avaliacao: [
      'A criança aponta e nomeia corretamente ao menos 3 partes do app.',
      'A dupla salva e reencontra o próprio projeto na tela inicial.',
      'A criança explica, com as próprias palavras, para que serve o cenário.',
    ],
    conexoes: [
      { area: 'Arte', como: 'Escolha de cores, personagens e cenários como decisões estéticas.' },
      { area: 'Língua Portuguesa', como: 'Ampliação de vocabulário: nomear partes e funções.' },
    ],
    adaptacao: {
      iniciantes:
        'A turma acompanha o professor passo a passo, repetindo os comandos em voz alta (“palco!”, “paleta!”). Reduza a 2 missões exploratórias.',
      avancados:
        'Desafie a abrir o editor de personagem e o editor de cenário e explicar a diferença entre “mudar o personagem” e “mudar o cenário”. Peça um pequeno relato oral do percurso realizado.',
    },
    demo: 'interface',
    imagens: [oficial('images/homegraphic.png'), oficial('images/newslide1.png')],
    nota:
      'Nesta aula não usamos os blocos de Som nem a câmera. Explique à turma que o foco é criar com imagem e movimento; a câmera fica de fora também por cuidado com a privacidade dos alunos.',
  },
  {
    n: 2,
    slug: 'meu-personagem-se-move',
    title: 'Meu personagem se move',
    tagline: 'Os primeiros blocos azuis e a ideia de sequência.',
    anoTags: ['1º', '2º', '3º', '4º', '5º'],
    duracao: '50 min · 1 encontro',
    resumo:
      'A turma encaixa os primeiros blocos de Movimento e descobre que a ordem importa. Aqui nasce a noção de algoritmo como sequência de passos para resolver um problema — fazer o personagem atravessar o palco até um alvo.',
    conceitos: [
      {
        nome: 'Algoritmo',
        explicacao:
          'Uma sequência ordenada de passos para chegar a um resultado. Trocar a ordem muda o resultado: é isso que os alunos vão sentir na pele.',
      },
      {
        nome: 'Sequência',
        explicacao:
          'Os blocos se encaixam da esquerda para a direita, como uma receita. Cada bloco só age depois do anterior.',
      },
      {
        nome: 'Gatilho',
        explicacao:
          'Todo roteiro precisa começar por um bloco amarelo. Sem gatilho, os blocos de ação não rodam — descoberta importante que será aprofundada na Aula 3.',
      },
    ],
    objetivos: [
      'Montar uma sequência de blocos de Movimento para levar o personagem a um alvo.',
      'Perceber que a ordem dos blocos altera o resultado do programa.',
      'Nomear a própria criação como um “algoritmo”.',
    ],
    bncc: ['EF01CO02', 'EF01CO03', 'EF15CO02', 'EF02CO03'],
    blocos: ['bandeira', 'mover-direita', 'mover-esquerda', 'mover-cima', 'mover-baixo', 'inicio'],
    materiais: [
      'Dispositivos com ScratchJr (1 por dupla) com o “cartão-postal” da Aula 1 reaberto.',
      'Um alvo físico no quadro (adesivo, ímã ou desenho) para a atividade analógica.',
      'Cartões de blocos de Movimento impressos (ver Imprimíveis).',
    ],
    preparacao: [
      'Prepare um “tapete-alvo” no quadro: um ponto de partida e um alvo, para a versão sem telas.',
      'Imprima os cartões de blocos azuis em quantidade suficiente para a turma montar sequências na mesa.',
      'Teste no seu dispositivo uma sequência curta (3 blocos) para demonstrar rápido.',
    ],
    roteiro: [
      {
        titulo: 'Aquecimento sem telas (8 min)',
        corpo:
          'No tapete do quadro, um aluno é o “personagem”. A turma dita comandos (“2 para a direita”, “1 para cima”) em cartões e o colega executa exatamente o que ouve.',
        dica: 'Faça de propósito um comando errado e pergunte: “foi o que a gente quis?”. O erro ensina mais que o acerto.',
      },
      {
        titulo: 'Demonstração dos blocos azuis (8 min)',
        corpo:
          'Mostre a paleta de Movimento. Apresente as setas e o bloco Início. Monte “bandeira verde + 1 direita + 1 direita” e rode. Depois troque a ordem e rode de novo.',
      },
      {
        titulo: 'Mão na tela (18 min)',
        corpo:
          'Cada dupla abre o cartão-postal da Aula 1 e cria uma sequência para levar o personagem até um alvo escolhido (um canto do palco, por exemplo).',
        dica: 'Circule pedindo que “leiam” o programa em voz alta antes de tocar na bandeira verde.',
      },
      {
        titulo: 'Desafio da ordem (8 min)',
        corpo:
          'Peça que embaralhem dois blocos e observem o que muda. Depois, que “consertem” o programa. Verbalize: “o computador faz exatamente o que mandamos”.',
      },
      {
        titulo: 'Fechamento (8 min)',
        corpo:
          'Três duplas mostram a sequência e contam quantos blocos usaram. Registre no quadro: “algoritmo = sequência de passos”.',
      },
    ],
    atividade: {
      titulo: 'Corrida até o tesouro',
      resumo:
        'O personagem precisa chegar até um alvo (o “tesouro”) usando apenas blocos de Movimento.',
      passos: [
        'Cada dupla marca um alvo no palco (com o próprio personagem ou um objeto).',
        'Monta a sequência de setas que leva o personagem até o alvo.',
        'Roda a bandeira verde; se errar, ajusta e roda de novo.',
        'Quando acertar, troca de alvo e recomeça — agora em menos blocos.',
      ],
      recompensa: {
        titulo: 'Selo “Explorador”',
        texto:
          'Ao alcançar o tesouro, a dupla recebe o selo “Explorador” e o desafio bônus: chegar ao alvo com o menor número de blocos possível.',
      },
    },
    dicas: [
      'Se o bloco não aparecer para encaixar, é porque falta o gatilho amarelo — deixe a turma descobrir isso.',
      'Incentive sequências curtas: menos blocos, mais clareza. É pensamento computacional de verdade.',
      'Para alunos que terminam rápido, sugira um “labirinto”: dois alvos em sequência.',
    ],
    avaliacao: [
      'A dupla constrói uma sequência que efetivamente move o personagem até o alvo.',
      'A criança justifica por que a ordem dos blocos importa.',
      'A criança usa a palavra “algoritmo” para nomear sua criação.',
    ],
    conexoes: [
      { area: 'Matemática', como: 'Noção de direção, posição e quantidade de passos.' },
      { area: 'Educação Física', como: 'Comandos corporais no aquecimento sem telas (corpo como personagem).' },
    ],
    adaptacao: {
      iniciantes:
        'Limite a dois tipos de bloco (direita e cima) e forneça o alvo bem próximo. Use os cartões físicos antes da tela.',
      avancados:
        'Peça um percurso com quatro direções e um registro escrito do algoritmo (desenho das setas em sequência).',
    },
    demo: 'sequencia',
    imagens: [oficial('images/rightandleft.png'), oficial('images/activitycards/card01-car.png')],
    nota:
      'Seguimos sem blocos de Som e sem câmera. O foco é movimento e ordenação de passos.',
  },
  {
    n: 3,
    slug: 'quando-eu-quero-eventos',
    title: 'Quando eu quero! Eventos',
    tagline: 'Fazer o personagem reagir ao toque e à bandeira verde.',
    anoTags: ['1º', '2º', '3º', '4º', '5º'],
    duracao: '50 min · 1 encontro',
    resumo:
      'Os gatilhos amarelos transformam o projeto em algo interativo. A turma aprende que um programa pode começar quando alguém quiser — tocando no personagem ou disparando a bandeira verde — e que cada personagem pode ter o seu próprio roteiro.',
    conceitos: [
      {
        nome: 'Evento',
        explicacao:
          'Um acontecimento que dispara uma ação: tocar, iniciar, receber uma mensagem. O evento conecta quem usa o projeto ao que acontece no palco.',
      },
      {
        nome: 'Interatividade',
        explicacao:
          'O projeto deixa de ser um vídeo e passa a responder. Isso muda a postura do aluno: de espectador para autor de uma experiência.',
      },
      {
        nome: 'Instruções de máquina',
        explicacao:
          'Máquinas diferentes executam conjuntos próprios de instruções. O mesmo gatilho pode disparar coisas distintas em personagens distintos.',
      },
    ],
    objetivos: [
      'Usar os blocos de gatilho (bandeira verde e toque) para iniciar roteiros.',
      'Criar um personagem que reage ao toque com uma ação escolhida.',
      'Reconhecer que cada personagem tem o seu próprio conjunto de instruções.',
    ],
    bncc: ['EF01CO02', 'EF02CO03', 'EF15CO02', 'EF02CO02'],
    blocos: ['bandeira', 'toque', 'mover-direita', 'pular', 'girar-horario'],
    materiais: [
      'Dispositivos com ScratchJr (1 por dupla).',
      'Cartões de blocos de Gatilho impressos.',
      'Um “botão” de papel (círculo vermelho) para brincar de evento sem telas.',
    ],
    preparacao: [
      'Prepare um exemplo com dois personagens: um reage ao toque, outro à bandeira verde.',
      'Imprima os cartões amarelos de gatilho e misture com os azuis da aula anterior.',
    ],
    roteiro: [
      {
        titulo: 'Jogo do botão (8 min)',
        corpo:
          'No quadro, um “botão” de papel. Quando a professora toca o botão, a turma faz uma ação combinada (bater palmas, pular). Introduza a palavra evento: “o toque foi o evento que disparou a ação”.',
      },
      {
        titulo: 'Da bandeira ao toque (8 min)',
        corpo:
          'Demonstre dois roteiros no mesmo personagem: um começando pela bandeira verde e outro pelo “ao tocar”. Rode os dois separadamente para a turma perceber a diferença.',
      },
      {
        titulo: 'Mão na tela (18 min)',
        corpo:
          'Cada dupla cria um personagem “vivo”: ao tocá-lo, ele se move ou pula. Em seguida, adiciona um segundo roteiro com a bandeira verde que faz outra coisa.',
        dica: 'Lembre que cada roteiro começa com um gatilho próprio. Dois gatilhos, dois roteiros.',
      },
      {
        titulo: 'Teste entre duplas (8 min)',
        corpo:
          'As duplas trocam de lugar e testam o projeto uma da outra. Quem testa precisa descobrir o que tocar para ver a reação.',
      },
      {
        titulo: 'Fechamento (8 min)',
        corpo:
          'Pergunte: “qual foi o evento do seu projeto?”. Registre as respostas e relacione com o jogo do botão do início.',
      },
    ],
    atividade: {
      titulo: 'Botão vivo',
      resumo:
        'Cada dupla cria um personagem que só se mexe quando é tocado — um brinquedo interativo feito por eles.',
      passos: [
        'Escolher um personagem e uma reação (pular, girar, andar).',
        'Montar o roteiro com o gatilho “ao tocar”.',
        'Adicionar um segundo roteiro com a bandeira verde que faz uma reação diferente.',
        'Convidar outra dupla para “apertar” o botão e experimentar a surpresa.',
      ],
      recompensa: {
        titulo: 'Selo “Interativo”',
        texto:
          'Quem cria um personagem que reage ao toque ganha o selo “Interativo” e mostra o seu “brinquedo” para a turma no fechamento.',
      },
    },
    dicas: [
      'Confunda de propósito os gatilhos: ponha um roteiro com “ao tocar” e rode a bandeira verde. A reação não virá — ótima oportunidade de discussão.',
      'Alunos ansiosos tendem a tocar várias vezes; explique que o evento acontece “na hora do toque”.',
    ],
    avaliacao: [
      'A dupla associa corretamente o gatilho à ação desejada.',
      'A criança explica, com as próprias palavras, o que é um evento.',
      'Há mais de um personagem ou mais de um roteiro com gatilhos distintos.',
    ],
    conexoes: [
      { area: 'Ciências', como: 'Relação causa e efeito: um evento provoca uma reação.' },
      { area: 'Artes', como: 'Escolha da reação como expressão do personagem.' },
    ],
    adaptacao: {
      iniciantes:
        'Trabalhe apenas com um gatilho (ao tocar) e uma reação. Use o jogo do botão como modelo concreto.',
      avancados:
        'Peça dois personagens, cada um com um gatilho diferente, e uma explicação de por que escolheram cada um.',
    },
    demo: 'eventos',
    imagens: [oficial('images/greet_project_picture.png'), oficial('images/activitycards/card08-greet.png')],
    nota:
      'Sem blocos de Som e sem câmera. O “evento” aqui é o toque ou a bandeira verde — nada de microfone.',
  },
  {
    n: 4,
    slug: 'personagem-que-fala-e-transforma',
    title: 'Personagem que fala e se transforma',
    tagline: 'Os blocos roxos de Aparência e a expressão do personagem.',
    anoTags: ['1º', '2º', '3º', '4º', '5º'],
    duracao: '50 min · 1 encontro',
    resumo:
      'Com os blocos de Aparência, o personagem ganha voz (em balão de fala) e muda de tamanho ou desaparece. É a aula da expressão: aqui o aluno percebe que também escolhe COMO o personagem se mostra, não só o que ele faz.',
    conceitos: [
      {
        nome: 'Modelagem',
        explicacao:
          'Ao decidir tamanho, fala e visibilidade, o aluno cria um modelo do personagem com atributos essenciais — e pode comparar modelos diferentes.',
      },
      {
        nome: 'Expressão digital',
        explicacao:
          'Falar e transformar são formas de expressar ideias. O balão de fala permite contar uma história mesmo sem som.',
      },
      {
        nome: 'Atributo',
        explicacao:
          'Tamanho e visibilidade são atributos: características que mudam ao longo do tempo, mas que continuam sendo do mesmo personagem.',
      },
    ],
    objetivos: [
      'Usar os blocos Dizer, Crescer, Diminuir, Mostrar e Esconder.',
      'Combinar movimento e transformação em uma pequena cena expressiva.',
      'Comparar dois personagens pelo seu tamanho e comportamento.',
    ],
    bncc: ['EF02CO01', 'EF01CD02', 'EF03CO08', 'EF15CO08'],
    blocos: ['bandeira', 'toque', 'dizer', 'crescer', 'diminuir', 'tamanho-normal', 'esconder', 'mostrar'],
    materiais: [
      'Dispositivos com ScratchJr (1 por dupla).',
      'Cartões de blocos roxos impressos.',
      'Duas imagens de tamanhos bem diferentes (um elefante e um rato) para a comparação.',
    ],
    preparacao: [
      'Envie ou desenhe um personagem “mágico” que cresce e fala ao ser iniciado.',
      'Prepare a comparação: projete dois personagens de tamanhos distintos no palco.',
    ],
    roteiro: [
      {
        titulo: 'Comparação visual (8 min)',
        corpo:
          'Mostre dois personagens: um bem grande e um bem pequeno. Pergunte o que muda e o que continua igual. Introduza “tamanho” como atributo.',
      },
      {
        titulo: 'Demonstração dos blocos roxos (8 min)',
        corpo:
          'Apresente Dizer (mostra o balão), Crescer, Diminuir, Tamanho normal, Esconder e Mostrar. Faça um personagem “crescer”, “dizer olá” e “sumir”.',
        dica: 'Escreva uma palavra curta no balão (ex.: “Oi!”) para evitar problemas de digitação longa.',
      },
      {
        titulo: 'Mão na tela (18 min)',
        corpo:
          'Cada dupla cria um “show de transformação”: o personagem entra pequeno, cresce, diz uma palavra e desaparece (ou aparece) no final.',
      },
      {
        titulo: 'Ajuste fino (8 min)',
        corpo:
          'Peça que insiram um bloco de Esperar entre as transformações para dar ritmo à cena. Rode quantas vezes precisar.',
      },
      {
        titulo: 'Mini-apresentação (8 min)',
        corpo:
          'Três duplas apresentam o “número de mágica” para a turma. Valorize o efeito, não a perfeição.',
      },
    ],
    atividade: {
      titulo: 'Show de transformação',
      resumo:
        'Um “número de mágica” no palco: o personagem muda de tamanho, fala e desaparece.',
      passos: [
        'Escolher um personagem e um efeito final (some ou reaparece).',
        'Montar a sequência: surgir pequeno → crescer → dizer → esconder.',
        'Dar ritmo com o bloco Esperar entre as etapas.',
        'Apresentar para uma dupla vizinha e depois para a turma.',
      ],
      recompensa: {
        titulo: 'Selo “Estrela da Mágica”',
        texto:
          'Ao concluir o efeito, a dupla recebe o selo “Estrela da Mágica” e ganha o direito de escolher o efeito surpresa da próxima aula.',
      },
    },
    dicas: [
      'Se o personagem “sumir para sempre”, ensine o caminho de volta com Mostrar no início do roteiro.',
      'Anime a usar palavras curtas e legíveis no balão; foco na clareza, não na quantidade.',
    ],
    avaliacao: [
      'A dupla usa corretamente ao menos dois blocos de Aparência.',
      'A criança diferencia “tamanho” como atributo que muda de “aparecer/sumir”.',
      'A cena tem ritmo (uso de Esperar) e uma intenção clara.',
    ],
    conexoes: [
      { area: 'Artes', como: 'Expressão dramática: o personagem “atua” no palco.' },
      { area: 'Língua Portuguesa', como: 'Uso do balão de fala e escolha de palavras curtas.' },
    ],
    adaptacao: {
      iniciantes:
        'Trabalhe dois blocos apenas (Crescer e Dizer) e dê um roteiro modelo desenhado no cartaz.',
      avancados:
        'Peça um diálogo com dois personagens alternando balões de fala e um registro escrito da sequência.',
    },
    demo: 'aparencia',
    imagens: [
      oficial('images/conversation_project_picture.png'),
      oficial('images/activitycards/card09-talk.png'),
    ],
    nota:
      'O balão de “Dizer” substitui propositalmente o som: a expressão acontece pela imagem, não pelo áudio, e sem uso de câmera.',
  },
  {
    n: 5,
    slug: 'repetir-e-divertido',
    title: 'Repetir é divertido!',
    tagline: 'Os blocos laranja de Controle e as primeiras repetições.',
    anoTags: ['2º', '3º', '4º', '5º'],
    duracao: '50 min · 1 encontro',
    resumo:
      'A repetição é o que dá vida à animação. A turma descobre que em vez de empilhar dez blocos iguais, basta um bloco Repetir com um número. É a primeira iteração — e o alívio de quem já estava cansado de encaixar setas.',
    conceitos: [
      {
        nome: 'Repetição (iteração definida)',
        explicacao:
          'O bloco Repetir executa os blocos de dentro um número fixo de vezes. É a primeira estrutura de controle que os alunos dominam.',
      },
      {
        nome: 'Eficiência',
        explicacao:
          'Um bloco Repetir faz o mesmo que muitos blocos iguais, ocupando menos espaço. Programar é também economizar esforço.',
      },
      {
        nome: 'Controle de fluxo',
        explicacao:
          'Os blocos laranja decidem quantas vezes e por quanto tempo as ações acontecem.',
      },
    ],
    objetivos: [
      'Usar o bloco Repetir para animar sem repetir blocos manualmente.',
      'Combinar Repetir com Esperar para dar ritmo.',
      'Explicar por que a repetição economiza blocos.',
    ],
    bncc: ['EF02CO02', 'EF15CO02', 'EF03CO02'],
    blocos: ['bandeira', 'repetir', 'esperar', 'mover-direita', 'girar-horario', 'crescer', 'diminuir'],
    materiais: [
      'Dispositivos com ScratchJr (1 por dupla).',
      'Cartões de blocos laranja impressos.',
      'Um dado grande ou um número sorteado no quadro para definir as repetições.',
    ],
    preparacao: [
      'Prepare uma animação de “dança” com Repetir envolvendo 4 blocos curtos.',
      'Separe, para a comparação, uma “pilha” de 10 cartões iguais e um único cartão Repetir.',
    ],
    roteiro: [
      {
        titulo: 'Cansaço proposital (8 min)',
        corpo:
          'Peça que a turma imagine 10 blocos de “direita” seguidos. Mostre a pilha gigante de cartões. Pergunte: “será que existe um jeito mais curto?”.',
      },
      {
        titulo: 'O bloco Repetir (8 min)',
        corpo:
          'Apresente o Repetir e mostre que os blocos dentro dele ganham uma cor de fundo. Ensine a mudar o número tocando no campo. Rode a mesma animação com 1 bloco Repetir contra 10 blocos soltos.',
      },
      {
        titulo: 'Mão na tela (18 min)',
        corpo:
          'Cada dupla cria uma “dança”: um conjunto de 2 a 4 blocos (mover, girar, crescer, diminuir) embrulhados por um Repetir de 3 a 5 vezes.',
        dica: 'Sortee o número da repetição no dado para variar as animações entre as duplas.',
      },
      {
        titulo: 'Ajuste de ritmo (8 min)',
        corpo:
          'Peça que insiram um Esperar entre os blocos dentro do Repetir. Compare a mesma dança com e sem espera.',
      },
      {
        titulo: 'Fechamento (8 min)',
        corpo:
          'Peça que contem quantos blocos usariam sem o Repetir. Celebre a economia: “menos blocos, mais dança”.',
      },
    ],
    atividade: {
      titulo: 'Dança em loop',
      resumo:
        'Uma coreografia visual que se repete sozinha, feita com poucos blocos dentro de um Repetir.',
      passos: [
        'Escolher 2 a 4 blocos de movimento/aparência para a coreografia.',
        'Embrulhar tudo em um bloco Repetir com um número sorteado (3 a 5).',
        'Ajustar o ritmo com um bloco Esperar.',
        'Apresentar a dança e contar quantos blocos “economizaram”.',
      ],
      recompensa: {
        titulo: 'Selo “Maestro Mudo”',
        texto:
          'A dupla com a coreografia mais expressiva recebe o selo “Maestro Mudo” — dança sem som, só com imagem e repetição.',
      },
    },
    dicas: [
      'Se o número do Repetir não mudar, verifique se o campo foi tocado no lugar certo; mostre devagar.',
      'Explique que Repetir tem um número fixo; o “para sempre” virá na próxima aula e é diferente.',
    ],
    avaliacao: [
      'A dupla usa Repetir em vez de blocos repetidos à mão.',
      'A criança justifica a vantagem de economizar blocos.',
      'O ritmo da dança é perceptível (uso de Esperar).',
    ],
    conexoes: [
      { area: 'Matemática', como: 'Contagem e noção de multiplicação implícita na repetição.' },
      { area: 'Educação Física', como: 'Coreografia e repetição de movimentos corporais.' },
    ],
    adaptacao: {
      iniciantes:
        'Use um único bloco dentro do Repetir (só “direita”) e comece com repetição 2.',
      avancados:
        'Peça dois blocos Repetir em sequência com números diferentes e um registro da contagem total de ações.',
    },
    demo: 'loop',
    imagens: [oficial('images/activitycards/card02-dance.png')],
    nota:
      'Dança sem som: sem blocos de Som e sem câmera. O ritmo vem de Esperar e Repetir.',
  },
  {
    n: 6,
    slug: 'todo-mundo-junto',
    title: 'Todo mundo junto!',
    tagline: 'Vários personagens animando ao mesmo tempo e o ritmo com a Velocidade.',
    anoTags: ['2º', '3º', '4º', '5º'],
    duracao: '50 min · 1 encontro',
    resumo:
      'Agora o palco ganha vida com mais de um personagem, cada um com o seu roteiro, rodando ao mesmo tempo. A turma experimenta o “repetir para sempre” e o bloco Velocidade para acertar o ritmo de um desfile animado.',
    conceitos: [
      {
        nome: 'Paralelismo',
        explicacao:
          'Vários roteiros podem rodar ao mesmo tempo, um por personagem. É como uma orquestra: cada um toca a sua parte.',
      },
      {
        nome: 'Iteração indefinida',
        explicacao:
          'O “Repetir para sempre” não tem número e nunca termina sozinho. Para usá-lo bem, é preciso pensar em como parar.',
      },
      {
        nome: 'Velocidade',
        explicacao:
          'O bloco de Velocidade muda quão rápido um personagem se move, permitindo sincronizar cenas.',
      },
    ],
    objetivos: [
      'Fazer dois ou mais personagens animarem simultaneamente.',
      'Usar “Repetir para sempre” e o bloco de Velocidade.',
      'Sincronizar um desfile animado com ritmos diferentes.',
    ],
    bncc: ['EF02CO02', 'EF15CO02'],
    blocos: ['bandeira', 'repetir-sempre', 'velocidade', 'mover-direita', 'pular', 'girar-horario'],
    materiais: [
      'Dispositivos com ScratchJr (1 por dupla).',
      'Cartões de blocos de Fim e Controle impressos.',
      'Música instrumental suave para marcar o ritmo do desfile (opcional, para o professor — não é som no app).',
    ],
    preparacao: [
      'Prepare um desfile-exemplo com 3 personagens: um lento, um médio e um rápido.',
      'Verifique se há personagens extras disponíveis na biblioteca do app.',
    ],
    roteiro: [
      {
        titulo: 'Orquestra de mãos (8 min)',
        corpo:
          'Divida a turma em 3 grupos. Cada grupo bate palmas em um ritmo diferente, ao mesmo tempo. Introduza a ideia de vários roteiros rodando em paralelo.',
      },
      {
        titulo: 'Repetir para sempre (8 min)',
        corpo:
          'Apresente o bloco vermelho “repetir para sempre” e o de Velocidade. Mostre um personagem que anda sem parar e depois ajuste a velocidade.',
      },
      {
        titulo: 'Mão na tela (18 min)',
        corpo:
          'Cada dupla adiciona 2 ou 3 personagens e dá a cada um um roteiro de repetição para sempre, com velocidades diferentes, criando um desfile.',
        dica: 'Lembre que cada personagem é selecionado ao ser tocado; só o roteiro do personagem selecionado aparece.',
      },
      {
        titulo: 'Sincronização (8 min)',
        corpo:
          'Desafie as duplas a fazer os personagens “chegarem juntos” ou em fila. Ajustes de velocidade são a chave.',
      },
      {
        titulo: 'Desfile coletivo (8 min)',
        corpo:
          'Projete 3 projetos diferentes ao mesmo tempo, ou faça um desfile de duplas pela sala, tela na mão.',
      },
    ],
    atividade: {
      titulo: 'Desfile mudo',
      resumo:
        'Um desfile animado com personagens em ritmos diferentes, todos se movendo ao mesmo tempo.',
      passos: [
        'Adicionar 2 ou 3 personagens ao palco.',
        'Dar a cada um um roteiro com “repetir para sempre”.',
        'Ajustar a Velocidade para criar ritmos distintos.',
        'Apresentar o desfile e explicar por que cada personagem anda como anda.',
      ],
      recompensa: {
        titulo: 'Selo “Diretor de Animação”',
        texto:
          'A dupla que sincroniza melhor o desfile recebe o selo “Diretor de Animação” e vira “referência técnica” da turma na aula seguinte.',
      },
    },
    dicas: [
      'Se “nada acontecer”, confira qual personagem está selecionado — o roteiro exibido é o dele.',
      'Com “repetir para sempre”, ensine a usar o botão de parar antes de trocar de personagem.',
    ],
    avaliacao: [
      'Mais de um personagem tem roteiro próprio e roda ao mesmo tempo.',
      'A criança usa a Velocidade com um propósito (sincronizar, acelerar).',
      'A dupla explica a diferença entre Repetir (com número) e Repetir para sempre.',
    ],
    conexoes: [
      { area: 'Música', como: 'Ritmo e simultaneidade: cada personagem como um instrumento.' },
      { area: 'Matemática', como: 'Relações de velocidade e tempo.' },
    ],
    adaptacao: {
      iniciantes:
        'Fique com 2 personagens e a mesma velocidade para ambos; introduza a Velocidade só no final.',
      avancados:
        'Peça 3 personagens com uma coreografia coordenada e um registro escrito das velocidades escolhidas.',
    },
    demo: 'paralelo',
    imagens: [oficial('images/activitycards/card03-race.png'), oficial('images/forest_project_picture.png')],
    nota:
      'Desfile sem som no app e sem câmera. A música, se houver, fica fora do ScratchJr, por conta do professor.',
  },
  {
    n: 7,
    slug: 'minhas-cenas',
    title: 'Minhas cenas',
    tagline: 'Páginas, cenários e a estrutura de começo, meio e fim.',
    anoTags: ['3º', '4º', '5º'],
    duracao: '50 min · 1 encontro',
    resumo:
      'A aula muda o olhar para a narrativa. Com as páginas (cenas), a turma planeja uma história em três partes e usa o bloco “ir para página” para fazer o público avançar. É onde criação de conteúdo e estrutura narrativa se encontram.',
    conceitos: [
      {
        nome: 'Cena (página)',
        explicacao:
          'Cada página é uma cena com seu próprio cenário e personagens. Um projeto pode ter várias páginas ligadas por navegação.',
      },
      {
        nome: 'Narrativa',
        explicacao:
          'Começo, meio e fim. Estruturar a história é decompor um problema maior em partes menores.',
      },
      {
        nome: 'Autoria de conteúdo',
        explicacao:
          'Ao criar cenas e cenários, o aluno produz conteúdo digital próprio, expressando-se em formatos visuais.',
      },
    ],
    objetivos: [
      'Criar um projeto com três cenas ligadas por “ir para página”.',
      'Planejar a história em começo, meio e fim antes de programar.',
      'Editar cenários para dar identidade a cada cena.',
    ],
    bncc: ['EF01CD02', 'EF03CO08', 'EF04CO06', 'EF15CO08', 'EF03CO03'],
    blocos: ['bandeira', 'toque', 'ir-pagina', 'repetir-sempre', 'dizer'],
    materiais: [
      'Dispositivos com ScratchJr (1 por dupla).',
      'Folha “Roteiro em 3 cenas” impressa (ver Imprimíveis).',
      'Lápis e borracha para o planejamento no papel antes da tela.',
    ],
    preparacao: [
      'Prepare um projeto de 3 páginas com cenários distintos e um personagem-guia.',
      'Imprima o roteiro de 3 cenas para o planejamento offline.',
    ],
    roteiro: [
      {
        titulo: 'História de três partes (8 min)',
        corpo:
          'Conte uma historinha oral em começo, meio e fim. Peça que a turma identifique as partes. Relacione cada parte a uma cena.',
      },
      {
        titulo: 'Páginas e cenários (8 min)',
        corpo:
          'Mostre como adicionar páginas e como trocar/editar o cenário de cada uma. Apresente o bloco “ir para página”.',
      },
      {
        titulo: 'Planejar no papel (10 min)',
        corpo:
          'Cada dupla preenche o roteiro de 3 cenas: cenário e ação de cada parte. Só depois de planejar, vão para a tela.',
      },
      {
        titulo: 'Mão na tela (16 min)',
        corpo:
          'As duplas montam as três cenas, ligam-nas com “ir para página” em um gatilho de toque e ajustam os cenários.',
        dica: 'Deixe claro: o bloco de ir para página costuma ser disparado por toque, para o público avançar no ritmo dele.',
      },
      {
        titulo: 'Cinema rápido (8 min)',
        corpo:
          'Duplas apresentam a história de 3 cenas. O público “assiste” tocando para avançar.',
      },
    ],
    atividade: {
      titulo: 'Minha história em 3 cenas',
      resumo:
        'Uma história interativa em três cenas que o público navega tocando no palco.',
      passos: [
        'Preencher o roteiro de 3 cenas no papel.',
        'Criar/editar o cenário de cada cena.',
        'Ligar as cenas com o bloco “ir para página” disparado por toque.',
        'Apresentar no “cinema” da turma.',
      ],
      recompensa: {
        titulo: 'Selo “Contador de Histórias”',
        texto:
          'Cada dupla recebe o selo “Contador de Histórias” e o projeto entra no mural digital da turma.',
      },
    },
    dicas: [
      'Planejar no papel primeiro evita que os alunos se percam entre páginas e personagens.',
      'Limite a três cenas: o essencial é dominar a estrutura, não a quantidade.',
    ],
    avaliacao: [
      'O projeto tem ao menos três cenas navegáveis.',
      'A história tem começo, meio e fim identificáveis.',
      'A criança edita um cenário para adequá-lo à cena.',
    ],
    conexoes: [
      { area: 'Língua Portuguesa', como: 'Estrutura narrativa: começo, meio e fim.' },
      { area: 'Geografia', como: 'Diferentes cenários e seus contextos.' },
    ],
    adaptacao: {
      iniciantes:
        'Duas cenas já bastam (antes e depois) e o professor fornece os cenários prontos.',
      avancados:
        'Peça três cenas com um personagem que reaparece em todas e um roteiro escrito detalhado.',
    },
    demo: 'cenas',
    imagens: [
      oficial('images/activitycards/card05-forest.png'),
      oficial('images/activitycards/card06-sun.png'),
      oficial('images/activitycards/card07-moon.png'),
    ],
    nota:
      'Cenas com cenários visuais, sem som e sem câmera. A narrativa é construída por imagem e toque.',
  },
  {
    n: 8,
    slug: 'projeto-autoral-interativo',
    title: 'Projeto autoral interativo',
    tagline: 'Mensagens entre personagens e a grande estreia.',
    anoTags: ['4º', '5º'],
    duracao: '50 min · 1 encontro (ou 2)',
    resumo:
      'A aula de síntese. Os alunos fazem dois personagens “conversarem” por mensagens — um envia, o outro reage — e transformam tudo num projeto autoral apresentado à turma. É o momento de celebrar o que aprenderam e de falar sobre autoria e uso responsável.',
    conceitos: [
      {
        nome: 'Mensagens',
        explicacao:
          'Um personagem pode enviar uma mensagem que dispara a ação de outro. É comunicação entre partes do programa.',
      },
      {
        nome: 'Projeto autoral',
        explicacao:
          'Todo o percurso se junta: algoritmo, eventos, repetição e cenas a serviço de uma ideia do aluno.',
      },
      {
        nome: 'Autoria e responsabilidade',
        explicacao:
          'Criar é escolher; compartilhar é responsabilizar-se. Conversamos sobre créditos e uso respeitoso do que é dos outros.',
      },
    ],
    objetivos: [
      'Usar mensagens para fazer dois personagens interagirem.',
      'Reunir eventos, repetição e cenas em um projeto autoral.',
      'Apresentar e comentar o próprio projeto de forma respeitosa.',
    ],
    bncc: ['EF02CO02', 'EF15CO02', 'EF15CO08', 'EF01CD02', 'EF03CO08', 'EF15CO09'],
    blocos: ['bandeira', 'toque', 'mensagem', 'dizer', 'repetir', 'ir-pagina'],
    materiais: [
      'Dispositivos com ScratchJr (1 por dupla).',
      'Cartões de blocos de Gatilho (mensagem) impressos.',
      'Certificados de conclusão impressos (ver Imprimíveis).',
      'Espaço preparado para a “estreia” (tapete, projetor).',
    ],
    preparacao: [
      'Prepare um exemplo curto de dois personagens trocando uma mensagem.',
      'Organize a ordem das apresentações e um tempo máximo por dupla (ex.: 2 min).',
    ],
    roteiro: [
      {
        titulo: 'Conversa encenada (8 min)',
        corpo:
          'Dois alunos representam uma conversa curta ao vivo: um “manda” um recado, o outro responde. Introduza a mensagem como recado que viaja de um personagem a outro.',
      },
      {
        titulo: 'Mensagens no ScratchJr (10 min)',
        corpo:
          'Demonstre um personagem que envia uma mensagem e outro que tem o gatilho “ao receber” essa mesma mensagem. Rode a interação.',
        dica: 'Explique que a mensagem tem uma cor/identificador: os dois personagens precisam usar a mesma.',
      },
      {
        titulo: 'Mão na tela: projeto autoral (18 min)',
        corpo:
          'Cada dupla escolhe uma ideia (uma piada, um diálogo, uma cena de aventura) e monta o projeto reunindo tudo o que aprendeu. Nada de som; nada de câmera.',
      },
      {
        titulo: 'Ensaio (6 min)',
        corpo:
          'As duplas testam o próprio projeto e preparam uma frase de apresentação: “nosso projeto fala sobre…”',
      },
      {
        titulo: 'Grande estreia (8 min)',
        corpo:
          'Cada dupla apresenta sua criação. Ao final, conversa rápida sobre autoria: de quem é o projeto e por que dar crédito é importante.',
      },
    ],
    atividade: {
      titulo: 'Cinema da turma',
      resumo:
        'Uma estreia coletiva dos projetos autorais, com conversa sobre autoria e créditos.',
      passos: [
        'Escolher a ideia do projeto e listar os blocos que serão usados.',
        'Montar a interação por mensagens entre dois personagens.',
        'Testar, ajustar e preparar a frase de apresentação.',
        'Apresentar no cinema da turma e comentar o projeto de um colega.',
      ],
      recompensa: {
        titulo: 'Certificado “Programador ScratchJr”',
        texto:
          'Todas as duplas recebem o certificado de conclusão da unidade introdutória, assinado pela professora, e o projeto entra no mural digital.',
      },
    },
    dicas: [
      'Se a mensagem não disparar, quase sempre é porque o identificador não coincide — confira com a turma.',
      'Reserve um tempo para a conversa de autoria; é um conteúdo valioso e previsto na BNCC.',
    ],
    avaliacao: [
      'Os dois personagens interagem por mensagem.',
      'O projeto reúne aprendizagens anteriores (eventos, repetição, cena).',
      'A criança apresenta e dá crédito a ideias de colegas.',
    ],
    conexoes: [
      { area: 'Língua Portuguesa', como: 'Diálogo e turnos de fala entre personagens.' },
      { area: 'Projeto de Vida / Convivência', como: 'Autoria, crédito e uso responsável.' },
    ],
    adaptacao: {
      iniciantes:
        'Comece com uma única mensagem de um personagem para outro, sem diálogo de volta.',
      avancados:
        'Peça um diálogo com réplica e tréplica e uma cena final acionada por mensagem.',
    },
    demo: 'mensagem',
    imagens: [
      oficial('images/conversation_project_picture.png'),
      oficial('images/assessments/reverse-engineer.png'),
    ],
    nota:
      'A interação acontece por mensagens e toque — sem som e sem câmera. Reforce com a turma que a escolha é intencional.',
  },
];

export const lessonBySlug = Object.fromEntries(lessons.map((l) => [l.slug, l])) as Record<
  string,
  Lesson
>;

export const lessonById = Object.fromEntries(lessons.map((l) => [String(l.n), l])) as Record<
  string,
  Lesson
>;