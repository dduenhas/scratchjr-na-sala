export type EixoId = 'pensamento-computacional' | 'mundo-digital' | 'cultura-digital';

export interface Eixo {
  id: EixoId;
  nome: string;
  apelido: string;
  descricao: string;
  /** Classe de cor do token de tema. */
  token: string;
}

export interface Habilidade {
  codigo: string;
  anos: string;
  eixo: EixoId;
  objeto: string;
  texto: string;
}

/**
 * Eixos da BNCC Computação (complemento à BNCC — Parecer CNE/CEB nº 2/2022,
 * instituído pela Resolução CNE/CEB nº 1/2022).
 */
export const eixos: Eixo[] = [
  {
    id: 'pensamento-computacional',
    nome: 'Pensamento Computacional',
    apelido: 'Pensar',
    descricao:
      'Abstração, decomposição, reconhecimento de padrões e algoritmos: a lógica que sustenta a resolução de problemas.',
    token: 'eixo-pc',
  },
  {
    id: 'mundo-digital',
    nome: 'Mundo Digital',
    apelido: 'Entender',
    descricao:
      'Como funcionam dispositivos, software, redes e a codificação da informação — do hardware ao dado.',
    token: 'eixo-md',
  },
  {
    id: 'cultura-digital',
    nome: 'Cultura Digital',
    apelido: 'Conviver',
    descricao:
      'Uso criativo, crítico, ético e seguro das tecnologias, com autoria e participação na sociedade.',
    token: 'eixo-cd',
  },
];

export const eixoById = Object.fromEntries(eixos.map((e) => [e.id, e])) as Record<EixoId, Eixo>;

/**
 * Habilidades de Computação para o Ensino Fundamental — Anos Iniciais (1º ao 5º).
 * Texto conferido contra o anexo oficial ao Parecer CNE/CEB nº 2/2022.
 */
export const habilidades: Habilidade[] = [
  {
    codigo: 'EF01CO01',
    anos: '1º',
    eixo: 'pensamento-computacional',
    objeto: 'Organização de objetos',
    texto:
      'Organizar objetos físicos ou digitais considerando diferentes características para esta organização, explicitando semelhanças (padrões) e diferenças.',
  },
  {
    codigo: 'EF01CO02',
    anos: '1º',
    eixo: 'pensamento-computacional',
    objeto: 'Conceituação de Algoritmos',
    texto:
      'Identificar e seguir sequências de passos aplicados no dia a dia para resolver problemas.',
  },
  {
    codigo: 'EF01CO03',
    anos: '1º',
    eixo: 'pensamento-computacional',
    objeto: 'Conceituação de Algoritmos',
    texto:
      'Reorganizar e criar sequências de passos em meios físicos ou digitais, relacionando essas sequências à palavra “Algoritmos”.',
  },
  {
    codigo: 'EF01CO04',
    anos: '1º',
    eixo: 'mundo-digital',
    objeto: 'Codificação da informação',
    texto:
      'Reconhecer o que é a informação, que ela pode ser armazenada, transmitida como mensagem por diversos meios e descrita em várias linguagens.',
  },
  {
    codigo: 'EF01CO05',
    anos: '1º',
    eixo: 'mundo-digital',
    objeto: 'Codificação da informação',
    texto: 'Representar informação usando diferentes codificações.',
  },
  {
    codigo: 'EF01CO06',
    anos: '1º',
    eixo: 'cultura-digital',
    objeto: 'Uso de artefatos computacionais',
    texto:
      'Reconhecer e explorar artefatos computacionais voltados a atender necessidades pessoais ou coletivas.',
  },
  {
    codigo: 'EF01CO07',
    anos: '1º',
    eixo: 'cultura-digital',
    objeto: 'Segurança e responsabilidade no uso de tecnologia computacional',
    texto:
      'Conhecer as possibilidades de uso seguro das tecnologias computacionais para proteção dos dados pessoais e para garantir a própria segurança.',
  },
  {
    codigo: 'EF02CO01',
    anos: '2º',
    eixo: 'pensamento-computacional',
    objeto: 'Modelagem de objetos',
    texto:
      'Criar e comparar modelos (representações) de objetos, identificando padrões e atributos essenciais.',
  },
  {
    codigo: 'EF02CO02',
    anos: '2º',
    eixo: 'pensamento-computacional',
    objeto: 'Algoritmos com repetições simples',
    texto:
      'Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, construídos como sequências com repetições simples (iterações definidas) com base em instruções preestabelecidas ou criadas, analisando como a precisão da instrução impacta na execução do algoritmo.',
  },
  {
    codigo: 'EF02CO03',
    anos: '2º',
    eixo: 'mundo-digital',
    objeto: 'Instrução de máquina',
    texto:
      'Identificar que máquinas diferentes executam conjuntos próprios de instruções e que podem ser usadas para definir algoritmos.',
  },
  {
    codigo: 'EF02CO04',
    anos: '2º',
    eixo: 'mundo-digital',
    objeto: 'Hardware e software',
    texto:
      'Diferenciar componentes físicos (hardware) e programas que fornecem as instruções (software) para o hardware.',
  },
  {
    codigo: 'EF02CO05',
    anos: '2º',
    eixo: 'cultura-digital',
    objeto: 'Uso de artefatos computacionais',
    texto:
      'Reconhecer as características e usos das tecnologias computacionais no cotidiano dentro e fora da escola.',
  },
  {
    codigo: 'EF02CO06',
    anos: '2º',
    eixo: 'cultura-digital',
    objeto: 'Segurança e responsabilidade no uso de tecnologia computacional',
    texto: 'Reconhecer os cuidados com a segurança no uso de dispositivos computacionais.',
  },
  {
    codigo: 'EF03CO01',
    anos: '3º',
    eixo: 'pensamento-computacional',
    objeto: 'Lógica computacional',
    texto:
      'Associar os valores “verdadeiro” e “falso” a sentenças lógicas que dizem respeito a situações do dia a dia, fazendo uso de termos que indicam negação.',
  },
  {
    codigo: 'EF03CO02',
    anos: '3º',
    eixo: 'pensamento-computacional',
    objeto: 'Algoritmos com repetições condicionais simples',
    texto:
      'Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências e repetições simples com condição (iterações indefinidas), para resolver problemas de forma independente e em colaboração.',
  },
  {
    codigo: 'EF03CO03',
    anos: '3º',
    eixo: 'pensamento-computacional',
    objeto: 'Decomposição',
    texto:
      'Aplicar a estratégia de decomposição para resolver problemas complexos, dividindo esse problema em partes menores, resolvendo-as e combinando suas soluções.',
  },
  {
    codigo: 'EF03CO04',
    anos: '3º',
    eixo: 'mundo-digital',
    objeto: 'Codificação da informação',
    texto: 'Relacionar o conceito de informação com o de dado.',
  },
  {
    codigo: 'EF03CO05',
    anos: '3º',
    eixo: 'mundo-digital',
    objeto: 'Codificação da informação',
    texto:
      'Compreender que dados são estruturados em formatos específicos dependendo da informação armazenada.',
  },
  {
    codigo: 'EF03CO06',
    anos: '3º',
    eixo: 'mundo-digital',
    objeto: 'Interface física',
    texto:
      'Reconhecer que, para um computador realizar tarefas, ele se comunica com o mundo exterior com o uso de interfaces físicas (dispositivos de entrada e saída).',
  },
  {
    codigo: 'EF03CO07',
    anos: '3º',
    eixo: 'cultura-digital',
    objeto: 'Uso de tecnologias computacionais',
    texto:
      'Utilizar diferentes navegadores e ferramentas de busca para pesquisar e acessar informações.',
  },
  {
    codigo: 'EF03CO08',
    anos: '3º',
    eixo: 'cultura-digital',
    objeto: 'Uso de tecnologias computacionais',
    texto:
      'Usar ferramentas computacionais em situações didáticas para se expressar em diferentes formatos digitais.',
  },
  {
    codigo: 'EF03CO09',
    anos: '3º',
    eixo: 'cultura-digital',
    objeto: 'Segurança e responsabilidade no uso da tecnologia',
    texto:
      'Reconhecer o potencial impacto do compartilhamento de informações pessoais ou de seus pares em meio digital.',
  },
  {
    codigo: 'EF04CO01',
    anos: '4º',
    eixo: 'pensamento-computacional',
    objeto: 'Matrizes e registros',
    texto:
      'Reconhecer objetos do mundo real e/ou digital que podem ser representados através de matrizes que estabelecem uma organização na qual cada componente está em uma posição definida por coordenadas, fazendo manipulações simples sobre estas representações.',
  },
  {
    codigo: 'EF04CO02',
    anos: '4º',
    eixo: 'pensamento-computacional',
    objeto: 'Matrizes e registros',
    texto:
      'Reconhecer objetos do mundo real e/ou digital que podem ser representados através de registros que estabelecem uma organização na qual cada componente é identificado por um nome, fazendo manipulações sobre estas representações.',
  },
  {
    codigo: 'EF04CO03',
    anos: '4º',
    eixo: 'pensamento-computacional',
    objeto: 'Algoritmos com repetições simples e aninhadas',
    texto:
      'Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências e repetições simples e aninhadas (iterações definidas e indefinidas), para resolver problemas de forma independente e em colaboração.',
  },
  {
    codigo: 'EF04CO04',
    anos: '4º',
    eixo: 'mundo-digital',
    objeto: 'Codificação da informação',
    texto:
      'Entender que para guardar, manipular e transmitir dados deve-se codificá-los de alguma forma que seja compreendida pela máquina (formato digital).',
  },
  {
    codigo: 'EF04CO05',
    anos: '4º',
    eixo: 'mundo-digital',
    objeto: 'Codificação da informação',
    texto:
      'Codificar diferentes informações para representação em computador (binária, ASCII, atributos de pixel, como RGB etc.).',
  },
  {
    codigo: 'EF04CO06',
    anos: '4º',
    eixo: 'cultura-digital',
    objeto: 'Uso de tecnologias computacionais',
    texto:
      'Usar diferentes ferramentas computacionais para criação de conteúdo (textos, apresentações, vídeos etc.).',
  },
  {
    codigo: 'EF04CO07',
    anos: '4º',
    eixo: 'cultura-digital',
    objeto: 'Segurança e responsabilidade no uso da tecnologia',
    texto: 'Demonstrar postura ética nas atividades de coleta, transferência, guarda e uso de dados.',
  },
  {
    codigo: 'EF04CO08',
    anos: '4º',
    eixo: 'cultura-digital',
    objeto: 'Segurança e responsabilidade no uso da tecnologia',
    texto:
      'Reconhecer a importância de verificar a confiabilidade das fontes de informações obtidas na Internet.',
  },
  {
    codigo: 'EF05CO01',
    anos: '5º',
    eixo: 'pensamento-computacional',
    objeto: 'Listas e grafos',
    texto:
      'Reconhecer objetos do mundo real e/ou digital que podem ser representados através de listas que estabelecem uma organização na qual há um número variável de itens dispostos em sequência, fazendo manipulações simples sobre estas representações.',
  },
  {
    codigo: 'EF05CO02',
    anos: '5º',
    eixo: 'pensamento-computacional',
    objeto: 'Listas e grafos',
    texto:
      'Reconhecer objetos do mundo real e digital que podem ser representados através de grafos que estabelecem uma organização com uma quantidade variável de vértices conectados por arestas, fazendo manipulações simples sobre estas representações.',
  },
  {
    codigo: 'EF05CO03',
    anos: '5º',
    eixo: 'pensamento-computacional',
    objeto: 'Lógica computacional',
    texto:
      'Realizar operações de negação, conjunção e disjunção sobre sentenças lógicas e valores “verdadeiro” e “falso”.',
  },
  {
    codigo: 'EF05CO04',
    anos: '5º',
    eixo: 'pensamento-computacional',
    objeto: 'Algoritmos com seleção condicional',
    texto:
      'Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências, repetições e seleções condicionais para resolver problemas de forma independente e em colaboração.',
  },
  {
    codigo: 'EF05CO05',
    anos: '5º',
    eixo: 'mundo-digital',
    objeto: 'Arquitetura de computadores',
    texto:
      'Identificar os componentes principais de um computador (dispositivos de entrada/saída, processadores e armazenamento).',
  },
  {
    codigo: 'EF05CO06',
    anos: '5º',
    eixo: 'mundo-digital',
    objeto: 'Armazenamento de dados',
    texto: 'Reconhecer que os dados podem ser armazenados em um dispositivo local ou remoto.',
  },
  {
    codigo: 'EF05CO07',
    anos: '5º',
    eixo: 'mundo-digital',
    objeto: 'Sistema Operacional',
    texto:
      'Reconhecer a necessidade de um sistema operacional para a execução de programas e gerenciamento do hardware.',
  },
  {
    codigo: 'EF05CO08',
    anos: '5º',
    eixo: 'cultura-digital',
    objeto: 'Segurança e responsabilidade no uso da tecnologia',
    texto:
      'Acessar as informações na Internet de forma crítica para distinguir os conteúdos confiáveis de não confiáveis.',
  },
  {
    codigo: 'EF05CO09',
    anos: '5º',
    eixo: 'cultura-digital',
    objeto: 'Segurança e responsabilidade no uso da tecnologia',
    texto:
      'Usar informações considerando aplicações e limites dos direitos autorais em diferentes mídias digitais.',
  },
  {
    codigo: 'EF05CO10',
    anos: '5º',
    eixo: 'cultura-digital',
    objeto: 'Uso de tecnologias computacionais',
    texto:
      'Expressar-se crítica e criativamente na compreensão das mudanças tecnológicas no mundo do trabalho e sobre a evolução da sociedade.',
  },
  {
    codigo: 'EF05CO11',
    anos: '5º',
    eixo: 'cultura-digital',
    objeto: 'Uso de tecnologias computacionais',
    texto:
      'Identificar a adequação de diferentes tecnologias computacionais na resolução de problemas.',
  },
  {
    codigo: 'EF15CO01',
    anos: '1º–5º',
    eixo: 'pensamento-computacional',
    objeto: 'Organização e representação da informação',
    texto:
      'Identificar as principais formas de organizar e representar a informação de maneira estruturada (matrizes, registros, listas e grafos) ou não estruturada (números, palavras, valores verdade).',
  },
  {
    codigo: 'EF15CO02',
    anos: '1º–5º',
    eixo: 'pensamento-computacional',
    objeto: 'Algoritmos',
    texto:
      'Construir e simular algoritmos, de forma independente ou em colaboração, que resolvam problemas simples e do cotidiano com uso de sequências, seleções condicionais e repetições de instruções.',
  },
  {
    codigo: 'EF15CO03',
    anos: '1º–5º',
    eixo: 'pensamento-computacional',
    objeto: 'Lógica computacional',
    texto:
      'Realizar operações de negação, conjunção e disjunção sobre sentenças lógicas e valores “verdadeiro” e “falso”.',
  },
  {
    codigo: 'EF15CO04',
    anos: '1º–5º',
    eixo: 'pensamento-computacional',
    objeto: 'Decomposição',
    texto:
      'Aplicar a estratégia de decomposição para resolver problemas complexos, dividindo esse problema em partes menores, resolvendo-as e combinando suas soluções.',
  },
  {
    codigo: 'EF15CO05',
    anos: '1º–5º',
    eixo: 'mundo-digital',
    objeto: 'Codificação da informação',
    texto:
      'Codificar a informação de diferentes formas, entendendo a importância desta codificação para o armazenamento, manipulação e transmissão em dispositivos computacionais.',
  },
  {
    codigo: 'EF15CO06',
    anos: '1º–5º',
    eixo: 'mundo-digital',
    objeto: 'Funcionamento de dispositivos computacionais',
    texto:
      'Conhecer os componentes básicos de dispositivos computacionais, entendendo os princípios de seu funcionamento.',
  },
  {
    codigo: 'EF15CO07',
    anos: '1º–5º',
    eixo: 'mundo-digital',
    objeto: 'Sistema Operacional',
    texto:
      'Conhecer o conceito de Sistema Operacional e sua importância na integração entre software e hardware.',
  },
  {
    codigo: 'EF15CO08',
    anos: '1º–5º',
    eixo: 'cultura-digital',
    objeto: 'Uso de artefatos computacionais',
    texto:
      'Reconhecer e utilizar tecnologias computacionais para pesquisar e acessar informações, expressar-se crítica e criativamente e resolver problemas.',
  },
  {
    codigo: 'EF15CO09',
    anos: '1º–5º',
    eixo: 'cultura-digital',
    objeto: 'Segurança e responsabilidade no uso da tecnologia computacional',
    texto:
      'Entender que as tecnologias devem ser utilizadas de maneira segura, ética e responsável, respeitando direitos autorais, de imagem e as leis vigentes.',
  },
];

export const habilidadeByCodigo = Object.fromEntries(
  habilidades.map((h) => [h.codigo, h]),
) as Record<string, Habilidade>;