# Relatório Oficial de Auditoria Visual, UX/UI, Mobile, Segurança e Conversão — `https://psibelle.vercel.app/`

> **Data da Conclusão da Auditoria**: 25/11/2026
> **Status da Auditoria**: **100% Concluída** (Todas as páginas, artigos do blog, painel `/admin` logado, Desktop `1440x900`, Mobile `375x812` e Lighthouse auditados com 38 capturas de tela reais).
> **Escopo**: Avaliação crítica, cirúrgica e honesta de desalinhamentos, quebras de linha, recortes de fotos, parser de conteúdo, responsividade mobile, segurança do painel e oportunidades de conversão (como Carrossel de Avaliações) para elevar o site ao nível 10/10.

---

## Sumário

1. [Cobertura Completa da Auditoria (100% Auditado)](#1-cobertura-completa-da-auditoria-100-auditado)
2. [Métricas Oficiais do Google Lighthouse (Mobile & Desktop)](#2-métricas-oficiais-do-google-lighthouse-mobile--desktop)
3. [Inventário Completo dos 11 Problemas Encontrados (Visuais, Alinhamento, Mobile e Segurança)](#3-inventário-completo-dos-11-problemas-encontrados-visuais-alinhamento-mobile-e-segurança)
   - 3.1. Prioridade Crítica (P0 — Correção Imediata)
   - 3.2. Prioridade Alta (P1 — Visual, Layout e Parser de Texto)
   - 3.3. Prioridade Média (P2 — Refinamento Estético e Micro-Alinhamentos)
4. [Análise Página por Página (O que Ficou Excelente vs. O que Precisa de Ajuste)](#4-análise-página-por-página-o-que-ficou-excelente-vs-o-que-precisa-de-ajuste)
5. [Plano de Melhorias de Alto Impacto (Carrossel de Avaliações e Interatividade)](#5-plano-de-melhorias-de-alto-impacto-carrossel-de-avaliações-e-interatividade)
6. [Quadro de Notas por Critério e Nota Final (0 a 10)](#6-quadro-de-notas-por-critério-e-nota-final-0-a-10)
7. [Checklist Prático de Correção (Ordem de Execução)](#7-checklist-prático-de-correção-ordem-de-execução)

---

## 1. Cobertura Completa da Auditoria (100% Auditado)

| Item Auditado | Resolução / Ambiente | Status | Resultado Geral |
| :--- | :--- | :---: | :--- |
| **1. Header & Footer Globais** | Desktop (`1440x900`) & Mobile (`375x812`) | ✅ **100% Auditado** | Identificadas quebras de linha no Header Desktop e sobreposição do botão flutuante do WhatsApp sobre o rodapé no Mobile/Desktop. |
| **2. Homepage (`/`) — Todas as 7 Seções** | Desktop (`1440x900`) & Mobile (`375x812`) | ✅ **100% Auditado** | Paleta, copy, cards de formação e 9 demandas excelentes; micro-desnível nos 2 botões da Hero e oportunidade de Carrossel na Seção 3. |
| **3. Valor da Consulta (`/valor-da-consulta`)** | Desktop (`1440x900`) | ✅ **100% Auditado** | Estrutura de atendimento particular, pacote mensal, passo a passo de reembolso e FAQ impecáveis. |
| **4. O Consultório (`/o-consultorio`)** | Desktop (`1440x900`) | ✅ **100% Auditado** | Foto 4 recortada ficou perfeita, cards de diferenciais (café, sigilo acústico, estacionamento) e galeria de 3 fotos muito bem alinhados. |
| **5. Blog — Listagem (`/blog`)** | Desktop (`1440x900`) | ✅ **100% Auditado** | Busca e filtro funcionando; sublinhado curvo SVG curto nas pontas e repetição da mesma foto em cards vizinhos. |
| **6. Artigo Individual 1 (`/blog/dificuldade-de-dizer-nao-...`)** | Desktop (`1440x900`) — Topo ao Rodapé | ✅ **100% Auditado** | Sumário, CTAs intercalados, Card de Autoridade, Tags e Grid 2x2 *"Leia também"* ótimos; encontrado bug de lista inline e `:De` sem espaço. |
| **7. Artigo Individual 2 (`/blog/quando-procurar-uma-psicologa-...`)** | Desktop (`1440x900`) — Topo ao Rodapé | ✅ **100% Auditado** | Citação (`blockquote`) com borda bronze ficou linda; foto de capa (`isabelle-poltrona.jpg`) sofre corte horizontal severo e listas numeradas viram bolinhas (`•`). |
| **8. Painel Administrativo (`/admin`)** | Desktop (`1440x900`) — Login + 3 Abas Logadas | ✅ **100% Auditado** | Interface das 3 abas (*Meus Artigos*, *Editor*, *Depoimentos*) está impecável, mas o `placeholder` do campo de senha exibe `ex: psibelle10` publicamente! |
| **9. Experiência Mobile & Menu Hambúrguer** | Mobile (`375x812` — iPhone) | ✅ **100% Auditado** | Drawer do menu mobile é excelente; botão flutuante do WhatsApp cobre o link *"Painel da Psicóloga"* no final do rodapé mobile. |

---

## 2. Métricas Oficiais do Google Lighthouse (Mobile & Desktop)

Durante a auditoria no navegador, executamos o diagnóstico automatizado do **Google Lighthouse** diretamente na URL `https://psibelle.vercel.app/`:

- **SEO**: **100 / 100** (Nota máxima!)
- **Best Practices (Boas Práticas)**: **100 / 100** (Nota máxima!)
- **Agentic / Prontidão Web**: **100 / 100** (Nota máxima!)
- **Accessibility (Acessibilidade)**: **92 / 100**
  - *Motivo dos 8 pontos descontados em Acessibilidade*:
    1. Taxa de contraste do texto branco (`#FFFFFF`) sobre o botão verde esmeralda pequeno `Agendar` (`#059669`) ficou em `3.76:1` (o ideal WCAG AA é `4.5:1` — basta escurecer levemente o verde para `bg-emerald-700`).
    2. Taxa de contraste do badge bronze (`#C8A27A`) sobre fundo sálvia (`#2C4442`) ficou em `4.42:1` (quase `4.5:1`).
    3. Área de toque do botão de ícone de lupa na barra de busca do Header (`14x14px`).

---

## 3. Inventário Completo dos 11 Problemas Encontrados (Visuais, Alinhamento, Mobile e Segurança)

Abaixo estão todos os problemas reais detectados nas 38 capturas de tela, classificados por prioridade:

---

### 3.1. Prioridade Crítica (P0 — Correção Imediata)

#### 🔴 Problema 1 — Segurança no `/admin`: Placeholder do campo de senha revela a senha real (`ex: psibelle10`)!
- **Onde ocorre**: Página de Login do Painel Administrativo (`https://psibelle.vercel.app/admin` — [src/app/admin/page.tsx](file:///c:/Users/JonathanHenriqueMome/Desktop/psi/src/app/admin/page.tsx#L288)).
- **O que acontece**: Como colocamos um link *"Painel da Psicóloga"* no rodapé do site para facilitar o acesso da Isabelle, qualquer visitante que clicar ali vê o campo de e-mail já preenchido (`isabelle_carlamomesso@yahoo.com.br`) e o campo de senha com o texto de ajuda `placeholder="Digite sua senha (ex: psibelle10)"`. Ou seja, qualquer pessoa consegue ver a senha escrita na tela e entrar no painel!
- **Como corrigir**: Trocar imediatamente o placeholder para `"••••••••"` ou `"Digite sua senha de acesso"` sem jamais exibir a senha no código visual da tela de login.

#### 🔴 Problema 2 — Header Desktop (`1440px`): Quebras de linha feias na Logo, nos Links do Menu e no Botão de Telefone
- **Onde ocorre**: Cabeçalho global em todas as páginas no computador ([src/components/Header.tsx](file:///c:/Users/JonathanHenriqueMome/Desktop/psi/src/components/Header.tsx)).
- **O que acontece**:
  1. **Logo espremida em 4 linhas**: `"Isabelle"` (linha 1), `"Momesso"` (linha 2), `"PSICÓLOGA • CRP"` (linha 3) e `"06/85692"` (linha 4, **vazando para fora da borda inferior do Header**).
  2. **Menu torto com itens de 1 e 2 linhas misturados**: `"Sobre\nMim"`, `"Valor da\nConsulta"` e `"O\nConsultório"` quebram em 2 linhas, enquanto `"Início"`, `"Especialidades"`, `"Blog"` e `"Contato"` ficam em 1 linha.
  3. **Telefone quebrado no botão verde**: Aparece `"(15) 99123-\n0882"` em 2 linhas.
- **Nota Curiosa da Auditoria Mobile**: No celular (`375px`), como os 7 links vão para o menu hambúrguer, a logo `"Isabelle Momesso | PSICÓLOGA • CRP 06/85692"` cabe inteira e linda sem quebrar linha! O problema só ocorre no Desktop porque o input de busca empurra os links e a logo.
- **Como corrigir**:
  - Adicionar `whitespace-nowrap shrink-0` na logo, nos links do `<nav>` e no botão de WhatsApp.
  - Substituir o input largo de busca do Header por um botão circular elegante de Lupa (ou mover o campo de busca para a barra superior `top bar`), liberando espaço para todo o Header ficar em **1 única linha perfeita**.

#### 🔴 Problema 3 — Botão Flutuante do WhatsApp cobrindo textos do Rodapé (Mobile e Desktop) e o Badge da Foto (Mobile)
- **Onde ocorre**: Canto inferior direito da tela ([src/components/WhatsAppCta.tsx](file:///c:/Users/JonathanHenriqueMome/Desktop/psi/src/components/WhatsAppCta.tsx) e [src/components/Footer.tsx](file:///c:/Users/JonathanHenriqueMome/Desktop/psi/src/components/Footer.tsx)).
- **O que acontece**:
  1. **No Rodapé Mobile (`375x812`)**: Quando o usuário rola até o fim da página no celular, o botão flutuante `"ATENDIMENTO ONLINE E PRESENCIAL | Agendar Sessão"` fica exatamente em cima da frase `"Em conformidade com o Código de Ética do CFP"` e **esconde 100% o link `"Painel da Psicóloga"`**, tornando impossível clicar nele pelo celular!
  2. **No Rodapé Desktop (`1440x900`)**: Cobre metade do telefone e do e-mail da 3ª coluna do rodapé.
  3. **Na Hero Mobile (`scrollY = 0`)**: Na primeira tela do celular, o botão flutuante sobrepõe o canto direito do badge `"REGISTRO PROFISSIONAL ATIVO | CRP 06/85692 • TCC"` da foto da Isabelle, cobrindo o ícone de escudo dourado.
- **Como corrigir**:
  - Adicionar `pb-24 sm:pb-20` no final do `Footer.tsx` para que todo o conteúdo do rodapé suba acima da área do botão flutuante tanto no celular quanto no computador.
  - No celular, deixar o botão flutuante mais compacto (ou exibi-lo após o usuário rolar `150px` para baixo, já que na primeira dobra da Hero já existe o botão `"Agendar"` fixo no topo e o botão grande `"AGENDAR CONSULTA"` logo abaixo!).

---

### 3.2. Prioridade Alta (P1 — Visual, Layout e Parser de Texto)

#### 🟠 Problema 4 — Corte Horizontal Severo na Foto de Capa dos Artigos Individuais (`/blog/[slug]`)
- **Onde ocorre**: Topo das páginas de artigo individual ([src/app/blog/[slug]/page.tsx](file:///c:/Users/JonathanHenriqueMome/Desktop/psi/src/app/blog/%5Bslug%5D/page.tsx#L254)).
- **O que acontece**: Na auditoria do Artigo 1 (`isabelle-escrevendo.jpg`) e do Artigo 2 (`isabelle-poltrona.jpg`), o container da imagem de capa força um retângulo horizontal largo (`w-full h-72 sm:h-96`). Como as 4 fotos da Isabelle são retratos verticais (`4:5`), a imagem é cortada como uma faixa estreita mostrando apenas da testa até o nariz/queixo dela, perdendo as mãos, o caderno, a placa *"PSICÓLOGA"* e a poltrona.
- **Como corrigir**:
  - Redesenhar o topo do artigo individual (`[slug]`) em um **Card Editorial de 2 Colunas** (Título, categoria, tempo de leitura e resumo à esquerda + Foto Vertical `aspect-[4/5]` inteira da Isabelle à direita, sem cortar nada!), ou ajustar o container para preservar a proporção vertical/quadrada suave.

#### 🟠 Problema 5 — Bug no Parser Markdown: Lista com hifens renderizando "esmagada" na mesma linha do parágrafo
- **Onde ocorre**: Artigo `/blog/dificuldade-de-dizer-nao-culpa-e-limites-saudaveis`, na seção `## Culpa Real vs. Culpa Disfuncional` ([src/app/blog/[slug]/page.tsx](file:///c:/Users/JonathanHenriqueMome/Desktop/psi/src/app/blog/%5Bslug%5D/page.tsx#L140)).
- **O que acontece**: Quando um parágrafo no Markdown termina com dois-pontos (`:`) e na linha imediatamente abaixo começam os itens `- **Culpa proporcional**: ...` sem uma linha dupla em branco (`\n\n`), o parser atual trata tudo como um único `<p>` corrido:
  `"...da culpa disfuncional: - Culpa proporcional: Surge quando... - Culpa disfuncional (ou aprendida): Surge quando..."`.
- **Como corrigir**: Atualizar o parser em `src/app/blog/[slug]/page.tsx` para processar linha a linha quando detectar linhas iniciadas por `- ` ou `1. ` dentro de um bloco, separando automaticamente o parágrafo introdutório da lista `<ul>`/`<ol>`.

#### 🟠 Problema 6 — Listas Numeradas (`1.`, `2.`, `3.`) sendo convertidas em Bolinhas (`•`) nos Artigos
- **Onde ocorre**: No Artigo 1 (*"5 Passos da TCC para construir limites"*) e no Artigo 2 (*"7 sinais de que é o momento de iniciar a psicoterapia"*).
- **O que acontece**: O título da seção promete **"5 Passos"** ou **"7 Sinais"** e o texto no banco está numerado (`1. `, `2. `, `3. `), mas o parser em `src/app/blog/[slug]/page.tsx` (linha 142) remove o número com `.replace(/^(-|\d+\.)\s+/, "")` e renderiza tudo dentro de um `<ul className="list-disc">` (bolinhas redondas em vez de números `1, 2, 3...`).
- **Como corrigir**: Diferenciar listas com hífen (`- ` → `<ul className="list-disc">`) de listas numeradas (`^\d+\.\s` → `<ol className="list-decimal">`), mantendo a numeração elegante e coerente com títulos do tipo *"5 Passos"* e *"7 Sinais"*.

#### 🟠 Problema 7 — Sublinhado Curvo SVG curto demais na página `/blog`
- **Onde ocorre**: Cabeçalho da página `/blog` ([src/app/blog/page.tsx](file:///c:/Users/JonathanHenriqueMome/Desktop/psi/src/app/blog/page.tsx#L63)), sob a frase *"mais leve e consciente"*.
- **O que acontece**: O arco dourado SVG sublinha apenas o meio da frase (`"leve e consci"`), deixando `"mais"` e `"ente"` sem sublinhado.
- **Como corrigir**: Adicionar `preserveAspectRatio="none"` no `<svg>` para que o sublinhado acompanhe 100% da largura do texto.

---

### 3.3. Prioridade Média (P2 — Refinamento Estético e Micro-Alinhamentos)

#### 🟡 Problema 8 — Falta de espaço após dois-pontos (`:De`) no Artigo de Limites
- **Onde ocorre**: Artigo `/blog/dificuldade-de-dizer-nao-culpa-e-limites-saudaveis`, item 3 da seção *"O preço emocional de não ter limites"*.
- **O que acontece**: Está escrito `Perda de identidade e autonomia:De tanto se moldar...` sem espaço entre `:` e `De`.
- **Como corrigir**: Atualizar o texto no Supabase (e na migration/seed) para `Perda de identidade e autonomia: De tanto se moldar...`.

#### 🟡 Problema 9 — Título `<title>` duplicado na aba do navegador nos artigos do Blog
- **Onde ocorre**: `generateMetadata` em [src/app/blog/[slug]/page.tsx](file:///c:/Users/JonathanHenriqueMome/Desktop/psi/src/app/blog/%5Bslug%5D/page.tsx#L174).
- **O que acontece**: A aba do navegador exibe `"... | Psicóloga Isabelle Momesso | Psicóloga Isabelle Momesso"` duas vezes.
- **Como corrigir**: Remover o sufixo `" | Psicóloga Isabelle Momesso"` do `seo_title` ou usar `post.title` direto para que o template do `layout.tsx` adicione o nome dela apenas uma vez.

#### 🟡 Problema 10 — Desnível vertical entre os 2 botões da Hero na Homepage
- **Onde ocorre**: Seção Hero da Homepage ([src/app/page.tsx](file:///c:/Users/JonathanHenriqueMome/Desktop/psi/src/app/page.tsx#L156)).
- **O que acontece**: O botão verde `"AGENDAR CONSULTA"` tem uma legenda embaixo dele (`"Atendimento rápido pelo WhatsApp • (15) 99123-0882"`), enquanto o botão ao lado (`"Como funciona e Reembolso ->"`) não tem legenda. Como o container pai usa `sm:items-center`, o botão da direita fica deslocado `12px` para baixo em relação à caixa verde do botão da esquerda.
- **Como corrigir**: Trocar `sm:items-center` por `sm:items-start` no container dos dois botões da Hero.

#### 🟡 Problema 11 — Fotos repetidas lado a lado na mesma fileira do Blog
- **Onde ocorre**: Na primeira fileira de `/blog` e na seção *"Últimos Artigos"* da Home.
- **O que acontece**: Os dois primeiros cards (`Terapia Online funciona?` e `Ansiedade e preocupação excessiva`) usam exatamente a mesma foto (`isabelle-notebook.jpg`) lado a lado.
- **Como corrigir**: Redistribuir as 4 fotos entre os 11 artigos no Supabase para que dois artigos vizinhos nunca tenham a mesma imagem de capa.

---

## 4. Análise Página por Página (O que Ficou Excelente vs. O que Precisa de Ajuste)

### 4.1. Homepage (`/`)
- **O que ficou excelente**:
  - A paleta **Verde Sálvia + Azul-Petróleo + Bege Linho + Bronze** tem aspecto de clínica boutique de alto padrão.
  - O recorte e a moldura da foto da Isabelle na poltrona (`isabelle-poltrona.jpg`) na Hero geram empatia imediata.
  - A seção **Formação e Especializações** (fundo azul-petróleo escuro com cards de borda bronze sutil) e a seção **Principais Demandas Atendidas** (9 cards alternando fundo claro e escuro com links para os artigos e agendamento direto) estão perfeitamente alinhadas.
  - A seção **"Quem sou eu?"** com a citação destacada à esquerda e o mosaico de 3 fotos à direita ficou com equilíbrio visual impecável.
- **O que ajustar**: Header Desktop (P0), nivelamento dos 2 botões da Hero (P2), alternância das capas dos 3 últimos posts (P2) e evolução da Seção 3 para Carrossel Interativo.

### 4.2. Página Valor da Consulta (`/valor-da-consulta`)
- **O que ficou excelente**:
  - É uma das páginas mais bonitas e bem estruturadas do site.
  - O card explicando o **Atendimento Particular (50 min, 1x por semana)** e o **Pacote Mensal de 4 sessões com desconto via PIX** ao lado da foto da Isabelle escrevendo ficou muito elegante.
  - O bloco azul-petróleo do **Reembolso da Consulta em 3 passos numerados** com círculos dourados (`1`, `2`, `3`) e sublinhado em *"Reembolso da Consulta"* supera visualmente o site de referência da Dra. Jéssica.
- **O que ajustar**: Apenas o Header global no topo e o padding do Footer para o botão flutuante.

### 4.3. Página O Consultório (`/o-consultorio`)
- **O que ficou excelente**:
  - A 4ª foto da Isabelle em pé no consultório (`isabelle-consultorio.jpg`), que recortamos automaticamente para tirar as bordas de print do celular, encaixou com perfeição na proporção `3:4` ao lado do texto da Clínica Almenara.
  - Os **4 Cards de Diferenciais** (*Sala de Espera com Café e Lanches*, *Sigilo Acústico Absoluto*, *Estacionamento e Fácil Acesso*, *No Seu Tempo e Sem Julgamentos*) têm alturas idênticas e leitura limpa.
  - A galeria escura *"Conheça um pouquinho do nosso ambiente"* com as 3 fotos verticais alinhadas e o bloco *"Como Chegar"* com botão para Google Maps/Waze e mapa interativo ficaram nota 10.

### 4.4. Página Blog (`/blog`) e Artigos Individuais (`/blog/[slug]`)
- **O que ficou excelente**:
  - A barra de progresso de leitura no topo da tela funciona suavemente ao rolar o artigo.
  - O bloco **"Neste artigo você vai ler:" (Sumário / Table of Contents)** com indentação hierárquica para H2 e H3 ficou muito organizado.
  - Os **CTAs intercalados (`"Agende sua consulta!"`)** no meio do artigo, o **Bloco de Autoridade da Psicóloga Isabelle Momesso (`CRP 06/85692`)** no final do texto, as **Tags clicáveis** e o **Grid 2x2 "Leia também"** ficaram com acabamento profissional.
  - O bloco de citação (`blockquote`) com barra lateral bronze no Artigo 2 ficou lindo.
- **O que ajustar**: Enquadramento da foto de capa nos artigos individuais (P1), separação de listas inline com hífen (P1), numeração de listas `<ol>` (P1), espaço após `:De` (P2), `<title>` duplicado (P2) e `preserveAspectRatio="none"` no sublinhado SVG da listagem do blog (P1).

### 4.5. Painel Administrativo (`/admin`)
- **O que ficou excelente**:
  - Testamos o login real e navegamos pelas 3 abas (*Meus Artigos (11)*, *Escrever Novo Artigo* e *Depoimentos de Pacientes*).
  - A listagem dos 11 artigos com botões `Ver`, `Editar` e `Excluir`, o editor completo e o formulário de depoimentos (com aviso ético do CFP para usar apenas iniciais) funcionam perfeitamente e têm design digno de um SaaS profissional.
- **O que ajustar**: Remover imediatamente a dica `(ex: psibelle10)` do placeholder do campo de senha na tela de login (P0).

---

## 5. Plano de Melhorias de Alto Impacto (Carrossel de Avaliações e Interatividade)

Para deixar o site ainda mais persuasivo e dinâmico do que o site de referência da psiquiatra:

1. **Carrossel Interativo de Avaliações & Pilares (Na Seção 3 da Home)**:
   - Construir um componente `ReviewsCarousel.tsx` interativo com:
     - **Coluna Esquerda Fixa (Selo de Confiança)**: Card resumo com 5 estrelas douradas, título *"EXCELENTE • Acolhimento & Ética"*, subtítulo *"Terapia Cognitivo-Comportamental (CRP 06/85692)"* e botão para pacientes enviarem depoimento.
     - **Carrossel Deslizante à Direita**: Com botões `< Anterior` e `Próximo >`, transição suave, autoplay de 5 segundos e bolinhas indicadoras (dots), exibindo tanto os depoimentos reais cadastrados no `/admin` quanto os cards de experiência da sessão!
2. **Seção "Como Funciona a Sua 1ª Sessão (Jornada em 4 Passos)"**:
   - Adicionar um componente visual passo a passo (*1. Agendamento rápido no WhatsApp → 2. Sessão de acolhimento (50 min) → 3. Plano prático em TCC → 4. Autonomia emocional e recibo para reembolso*) para aumentar a conversão de visitantes vindos do Google Ads que nunca fizeram terapia antes.
3. **Lightbox (Ampliar Foto ao Clicar) na Galeria de `/o-consultorio`**:
   - Permitir clicar nas fotos do ambiente para vê-las ampliadas em tela cheia.

---

## 6. Quadro de Notas por Critério e Nota Final (0 a 10)

| Critério de Auditoria | Nota Atual | Meta Pós-Correção | Observação Resumida |
| :--- | :---: | :---: | :--- |
| **1. Identidade Visual, Paleta & Anti-Plágio** | **9.6 / 10** | **10 / 10** | Paleta botânica/petróleo/linho/bronze original e harmônica com as fotos. |
| **2. SEO Técnico, Performance & Lighthouse** | **9.8 / 10** | **10 / 10** | 100 em SEO, 100 em Boas Práticas, 100 em Prontidão Web (falta só tirar `<title>` duplicado). |
| **3. Conteúdo, Copywriting & Ética CFP** | **9.4 / 10** | **10 / 10** | 11 artigos ricos e páginas completas (corrigir `:De`, lista inline e `<ol>` numerada). |
| **4. Alinhamento do Header Desktop** | **7.0 / 10** | **10 / 10** | Quebra de linha na logo, menu e botão de telefone em `1440px`. |
| **5. Responsividade Mobile & Botão Flutuante** | **8.4 / 10** | **10 / 10** | Menu mobile excelente, mas botão flutuante do WhatsApp cobre o rodapé mobile. |
| **6. Enquadramento de Fotos nos Artigos** | **7.8 / 10** | **10 / 10** | Fotos ótimas na Home/Consultório, mas cortadas horizontalmente no topo de `/blog/[slug]`. |
| **7. Painel Administrativo (`/admin`)** | **8.5 / 10** | **10 / 10** | UI e funções 10/10, mas perdeu nota por expor `ex: psibelle10` no placeholder da senha. |
| **8. Interatividade & Prova Social (Carrossel)** | **8.0 / 10** | **10 / 10** | Evoluir a Seção 3 estática para Carrossel Interativo com setas e autoplay. |
| **🏆 NOTA FINAL GERAL DA AUDITORIA** | **8.6 / 10** | **10 / 10** | **Base sólida, rápida e elegante, com 11 correções mapeadas para atingir o 10/10 perfeito.** |

---

## 7. Checklist Prático de Correção (Ordem de Execução)

Quando você autorizar a execução das melhorias, faremos tudo em um único ciclo cirúrgico:
- [ ] **1. (`src/app/admin/page.tsx`)**: Remover `(ex: psibelle10)` do placeholder da senha de login.
- [ ] **2. (`src/components/Header.tsx`)**: Adicionar `whitespace-nowrap` na logo, menu e botão de WhatsApp, e compactar a busca em um botão/dropdown elegante para que o Header Desktop fique em 1 linha perfeita sem quebras.
- [ ] **3. (`src/components/Footer.tsx` & `WhatsAppCta.tsx`)**: Adicionar `pb-28` no rodapé e ajustar o botão flutuante para nunca cobrir o link `"Painel da Psicóloga"` nem o badge da foto na Hero mobile.
- [ ] **4. (`src/app/blog/[slug]/page.tsx`)**:
  - Ajustar o layout da foto de capa do artigo para não cortar o rosto da Isabelle;
  - Melhorar o parser Markdown para separar listas `- ` mesmo sem linha dupla em branco e renderizar listas numeradas (`1. `) como `<ol className="list-decimal">`;
  - Corrigir `generateMetadata` para não duplicar `| Psicóloga Isabelle Momesso` no `<title>`.
- [ ] **5. (`Supabase blog_posts`)**: Corrigir `:De tanto` para `: De tanto`, adicionar quebra de linha antes dos bullets em *"Culpa Real vs. Culpa Disfuncional"* e alternar as 4 fotos de capa entre os 11 artigos para não repetir fotos lado a lado.
- [ ] **6. (`src/app/blog/page.tsx`)**: Adicionar `preserveAspectRatio="none"` no sublinhado curvo SVG.
- [ ] **7. (`src/app/page.tsx` + `src/components/ReviewsCarousel.tsx`)**: Nivelar os 2 botões da Hero (`sm:items-start`) e implementar o **Carrossel Interativo de Avaliações & Experiência da Sessão** na Seção 3.
