# ScratchJr na Sala

**Guia do professor** com um plano de **8 aulas introdutórias de ScratchJr** para o Ensino Fundamental I (1º ao 5º ano), alinhado à **BNCC Computação**.

O site é material de apoio ao professor — e não uma lição para o aluno. Reúne objetivos, roteiro passo a passo, atividades vibrantes com recompensas, dicas de condução, avaliação e a correlação explícita com as habilidades de tecnologia da BNCC.

Foco em **criatividade, animação e interatividade introdutória**, **sem uso de som e sem câmera**.

## Recursos

- **As 8 aulas** em ordem de progressão, da descoberta da tela ao projeto autoral interativo.
- **Painel BNCC Computação** por aula, com os códigos oficiais e um explorador de habilidades do 1º ao 5º ano.
- **Mapa de progressão** das aulas.
- **Simulações interativas** (uma por aula) para o professor experimentar os blocos no navegador antes de ensinar.
- **Imprimíveis**: cartões de blocos, mapa da tela, roteiro em 3 cenas, rubrica de avaliação e certificado.
- **Glossário** de termos da Computação.
- **Recursos** e currículos oficiais de referência.

> As imagens do aplicativo são exibidas por hotlink a partir do site oficial [scratchjr.org](https://www.scratchjr.org/), com fallback elegante caso o recurso não esteja acessível. Os diagramas da interface, dos blocos e do palco são recriações originais em SVG.

## Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/) (code-splitting por rota)
- [Motion](https://motion.dev/) para microanimações
- [lucide-react](https://lucide.dev/) para ícones

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # tsc --noEmit
npm run build    # gera dist/
npm run preview  # serve o build localmente
```

## Deploy na Vercel

O projeto é um SPA estático. O arquivo `vercel.json` já configura o rewrite de rotas e o cache dos assets.

1. Suba o repositório no GitHub.
2. Na Vercel, importe o repositório.
3. Framework detectado automaticamente: **Vite** (build `npm run build`, output `dist`).

## Estrutura

```
src/
  content/     dados das aulas, BNCC Computação, blocos, glossário, recursos, mídia
  art/         SVGs do app (blocos, paleta, palco, mascote)
  demos/       simulações interativas (uma por aula)
  ui/          primitivos de interface (Section, Callout, Badge, StepList, ...)
  pages/       páginas (Home, Aulas, Aula, BNCC, Guia, Glossário, Imprimíveis, Recursos)
  layout/      Layout, TopNav, Footer
  styles/      design system (theme.css, fonts.css)
```

## BNCC

As habilidades usadas seguem a **BNCC Computação**, complemento à BNCC aprovado pelo **Parecer CNE/CEB nº 2/2022** e instituído pela **Resolução CNE/CEB nº 1/2022**. Os códigos são indicativos e podem variar conforme a rede ou o município.

## Créditos

- **ScratchJr** é um projeto da [Scratch Foundation](https://www.scratchfoundation.org/).
- Imagens oficiais exibidas a partir de [scratchjr.org](https://www.scratchjr.org/), com fins educacionais.
- Currículos de referência do *DevTech Research Group* (Tufts University).