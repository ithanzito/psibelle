# Documentação Master do Projeto — Site Psicóloga Isabelle Momesso (`psibelle`)

> **Propósito deste Documento (`doc.md`)**: Este arquivo é a "memória viva" e enciclopédia completa do projeto. Aqui estão registrados **100% dos aprendizados da engenharia reversa do site de referência (`drajessicaalmenara.com.br`)**, o **formulário original respondido pela Psicóloga Isabelle Momesso**, todas as **decisões estratégicas de design, SEO, conformidade ética (CFP/CFM), arquitetura de código, banco de dados Supabase, deploy na Vercel, repositório GitHub e manual de uso do Painel Administrativo**.

---

## Sumário

1. [Visão Geral e Links Oficiais do Projeto](#1-visão-geral-e-links-oficiais-do-projeto)
2. [Parte 1: Engenharia Reversa Completa do Site de Referência (`drajessicaalmenara.com.br`)](#2-parte-1-engenharia-reversa-completa-do-site-de-referência-drajessicaalmenaracombr)
   - 2.1. Stack Tecnológica Original
   - 2.2. Design Tokens Originais (Fontes, Cores e Botões)
   - 2.3. Mapa de Navegação e Anatomia de Todas as Páginas e Seções
   - 2.4. O Segredo Comercial da Página "Valor da Consulta" & Reembolso
   - 2.5. A Engenharia de SEO e Conversão dos Artigos do Blog
   - 2.6. Falhas Técnicas Encontradas no Site Original (e Corrigidas no Nosso)
3. [Parte 2: Formulário de Briefing Integral Respondido pela Psicóloga Isabelle Momesso](#3-parte-2-formulário-de-briefing-integral-respondido-pela-psicóloga-isabelle-momesso)
4. [Parte 3: Estratégia Anti-Plágio & Identidade Visual Autoral ("Serenidade & Ciência")](#4-parte-3-estratégia-anti-plágio--identidade-visual-autoral-serenidade--ciência)
   - 4.1. Por que a Diferenciação Visual era Crítica (Ambas Atendem na Clínica Almenara!)
   - 4.2. Paleta de Cores Extraída das Fotos Reais da Isabelle
   - 4.3. Tipografia Editorial e Monograma `IM`
   - 4.4. Processamento e Tratamento das 4 Fotos do Projeto
5. [Parte 4: Arquitetura Técnica do Nosso Sistema (Next.js + Tailwind + Supabase + Vercel + PWA)](#5-parte-4-arquitetura-técnica-do-nosso-sistema-nextjs--tailwind--supabase--vercel--pwa)
   - 5.1. Estrutura de Pastas e Arquivos do Projeto
   - 5.2. Banco de Dados Supabase (`psibelle` — `wmfgygofrgptchbcecul`)
   - 5.3. Os 11 Artigos de SEO pré-cadastrados no Banco
   - 5.4. Recursos para Google Ads, Mobile First e PWA (Progressive Web App)
6. [Parte 5: Manual do Painel Administrativo (`/admin`) e Manutenção Futura](#6-parte-5-manual-do-painel-administrativo-admin-e-manutenção-futura)
   - 6.1. Credenciais e Como Publicar Novos Artigos no Blog
   - 6.2. Como Adicionar Depoimentos de Pacientes
   - 6.3. Como Conectar o Domínio Próprio (`www.psibelle10.com.br`) na Vercel

---

## 1. Visão Geral e Links Oficiais do Projeto

| Recurso | Informação / Link Oficial |
| :--- | :--- |
| **Profissional** | **Psicóloga Isabelle Momesso** (`@psi.isabellemomesso` / `@psibelle10`) |
| **Registro Profissional** | **CRP 06/85692** (Conselho Regional de Psicologia de São Paulo - 6ª Região) |
| **Abordagem Clínica** | Terapia Cognitivo-Comportamental (TCC), Terapia Familiar e PNL |
| **Público Atendido** | Adolescentes, Adultos, Idosos e Casais |
| **Modalidades** | Presencial em Sorocaba/SP (Clínica Almenara) e Online (Brasil e Exterior) |
| **URL em Produção (Vercel)** | `https://psibelle.vercel.app` |
| **Painel Administrativo do Blog** | `https://psibelle.vercel.app/admin` |
| **Domínio Planejado** | `https://www.psibelle10.com.br` |
| **Repositório GitHub** | `https://github.com/ithanzito/psibelle` (Branch principal: `main`) |
| **Projeto Vercel** | `psibelle` (`prj_Kuv3R6oN1l4Zy1H44cMQIYX57NXh` — Team: `team_8ViCJZASvGFO0xnNypgrB6rL`) |
| **Projeto Supabase** | `psibelle` (`wmfgygofrgptchbcecul` — Região: `us-east-2` — Postgres 17) |
| **URL da API Supabase** | `https://wmfgygofrgptchbcecul.supabase.co` |

---

## 2. Parte 1: Engenharia Reversa Completa do Site de Referência (`drajessicaalmenara.com.br`)

Antes de desenvolver o site da Psicóloga Isabelle Momesso, realizamos uma varredura completa do site da psiquiatra **Dra. Jéssica Almenara** (`https://drajessicaalmenara.com.br/`) para extrair toda a inteligência de estrutura, páginas, copywriting e conversão.

### 2.1. Stack Tecnológica Original do Site de Referência
- **CMS & Servidor**: WordPress rodando sobre `PHP 7.4.33` em servidor `netuno` com suporte a HTTP/3 e Brotli.
- **Tema e Construtor Visual**: Tema base `Hello Elementor` (v3.3.0) com `Elementor` + `Elementor Pro` (v3.34.0), container padrão de `1140px`.
- **Plugins Utilizados**:
  1. `Header Footer Elementor (HFE)`: Gerencia o cabeçalho global (`post-45`) e o rodapé (`post-61`).
  2. `Happy Elementor Addons` (v3.20.4): Utilizado principalmente para a **barra de progresso de leitura** (`Reading Progress Bar`) no topo dos artigos do blog.
  3. `Essential Addons for Elementor Lite` (v6.5.5).
  4. `Essential Blocks` (Gutenberg): Utilizado dentro dos posts do blog para gerar o **Sumário (Table of Contents)** clicável e os botões de CTA intermediários (`#101828`).
  5. `WP Rocket` (v3.19.4): Cache agressivo, `RocketLazyLoadScripts` e placeholders SVG inline para imagens.
  6. `Trustindex.io`: Carrossel de avaliações verificadas do Google Meu Negócio.
- **Rastreamento de Tráfego Pago**:
  - Google Tag Manager (`GTM-K22NRVWG`), Google Tag (`GT-K46PX8TZ`), Google Analytics 4 (`G-8RFG1EGW62`) e Conversion Linker do Google Ads (`_gcl_au`).

### 2.2. Design Tokens Originais do Site de Referência
- **Fontes**:
  - `Poppins` (ExtraBold `800` em títulos de `35px` e `25px`; Bold `700` em botões de `21px`; Regular `400` em listas).
  - `Roboto` (SemiBold `600` no menu de `23px`; Regular `400` no corpo de texto).
  - `Roboto Slab` (Regular `400` em metadados e paginação do blog).
- **Cores Originais**:
  - Roxo Escuro Berinjela (`#442F56`): Fundo do Header, seção Formação, cards pares de patologias e Footer.
  - Bege Quente / Areia (`#E9E4DE`): Fundo da Hero, fundo da seção de cards e seção de Contato/Mapa.
  - Roxo Médio / Ameixa (`#733870`): Fundo de Avaliações e Últimos Posts; cor de títulos H2/H3 em fundos claros.
  - Roxo Intenso (`#450D43`): H1 da Hero.
  - Lilás Pastel (`#E9B7E7`): Cards ímpares de patologias (Depressão e TOC).
  - Gradiente das páginas internas: `linear-gradient(180deg, #FFFFFF 0%, #CDBDD5 100%)`.
  - Botões CTA Verdes: `linear-gradient(180deg, #008D12 0%, #05BE13 100%)` na Home e `#1D6E54` nas páginas internas, com `border-radius: 12px 5px 12px 4px` e efeito `elementor-animation-grow`.

### 2.3. Mapa de Navegação e Anatomia de Todas as Páginas e Seções do Site de Referência

#### Header Global
- **3 Colunas**:
  1. Esquerda (`16%`): Logotipo circular com monograma.
  2. Centro (`64%`): Menu com 6 links — 3 âncoras para a própria Home (`Home` → `/#home`, `Sobre` → `/#sobre`, `Contato` → `/#contato`) e 3 páginas dedicadas (`Valor da Consulta` → `/valor-da-consulta/`, `Clínica Almenara` → `/clinica-almenara/`, `Blog` → `/blog/`).
  3. Direita (`20%`): Barra de pesquisa interna (`"Pesquisar..."`) + Botão com ícone do WhatsApp e número de telefone visível.

#### Página 1: Homepage (`/`) — 7 Seções de Topo a Base
1. **Seção 1 — Hero Banner (`#home`)**:
   - Fundo bege com foto da profissional sorrindo sem jaleco (roupa elegante de consultório), H1 com nome, subtítulo com registro oficial no conselho (`CRM / RQE`), 3 bullets de proposta de valor (*Atendimento particular humanizado*, *Consultas presenciais em Sorocaba*, *Consultas online para todo o Brasil*) e botão verde `"AGENDAR CONSULTA"` com link direto para o WhatsApp e mensagem pré-preenchida (`"Olá, vim pelo site e gostaria de mais informações."`).
2. **Seção 2 — Formação Acadêmica**:
   - Fundo escuro institucional, título `"Formação"`, lista de bullet points destacando Graduação, Especializações/Pós-graduações (incluindo TCC) e botão `"AGENDAR CONSULTA"` centralizado.
3. **Seção 3 — Prova Social / Avaliações**:
   - Título `"O que dizem os pacientes..."`, carrossel de avaliações 5 estrelas e botão `"AGENDAR CONSULTA"`.
4. **Seção 4 — Cards de Principais Transtornos / Demandas**:
   - Fundo bege com cards verticais alternando cores claras e escuras. Cada card traz o nome da condição (*Depressão, Pânico, TOC, TAG/Ansiedade*), um texto empático descrevendo os sintomas que a pessoa sente na pele e o convite para buscar tratamento, seguido por botão `"AGENDAR CONSULTA"`.
5. **Seção 5 — "Quem sou eu?" (`#sobre`)**:
   - Fundo branco em 2 colunas (`50% / 50%`): à esquerda, texto em primeira pessoa contando a formação, a experiência prática tanto na rede pública (SUS/CAPS) quanto no consultório particular, o olhar integrativo e o acolhimento em cada consulta; à direita, foto vertical humanizada no consultório.
6. **Seção 6 — Últimos Posts do Blog**:
   - Grade de 3 cards brancos mostrando os 3 artigos mais recentes com imagem de capa, título, resumo, link `"SAIBA MAIS »"` e botão `"IR AO BLOG"`.
7. **Seção 7 — Detalhes para Contato e Mapa (`#contato`)**:
   - Fundo bege em 2 colunas (`50% / 50%`): à esquerda, endereço completo da Clínica Almenara, e-mail e WhatsApp clicável; à direita, `<iframe>` do Google Maps interativo.

### 2.4. O Segredo Comercial da Página "Valor da Consulta" & Reembolso (`/valor-da-consulta/`)
- **Por que ela existe**: Pacientes pesquisam diariamente no Google *"valor consulta psiquiatra/psicóloga em Sorocaba"*. Tanto o CFM (Medicina) quanto o CFP (Psicologia — Art. 20 do Código de Ética) proíbem divulgar preços em reais abertamente como propaganda.
- **Como a página converte esse visitante**:
  1. **Não exibe o preço em R$ na tela**: Em vez disso, explica que o atendimento de saúde mental de excelência exige **tempo de escuta sem pressa**, motivo pelo qual o atendimento é exclusivamente particular (sem a pressa imposta pelos planos de saúde), e coloca um botão `"AGENDAR CONSULTA"` para a pessoa consultar os valores diretamente no WhatsApp.
  2. **Ensina o Passo a Passo do Reembolso do Plano de Saúde**: Explica em destaque que quem possui convênio pode se consultar normalmente solicitando o **Recibo / Nota Fiscal com o registro profissional (CRM/CRP)** e enviando ao plano de saúde para receber o reembolso, exercendo o direito de livre escolha do profissional.

### 2.5. A Engenharia de SEO e Conversão dos Artigos do Blog (`/blog/`)
- O Blog não serve apenas para leitura; cada artigo funciona como um **funil de captação orgânica no Google**:
  1. **Barra de Progresso de Leitura** fixa no topo da tela.
  2. **Sumário Navegável (Table of Contents)** logo no início do texto com links âncora para cada subtítulo H2/H3.
  3. **Conteúdo Escaneável de Identificação**: Explica sintomas, causas e como o tratamento funciona na prática.
  4. **4 a 6 Botões de CTA Intercalados (`"Agende sua consulta!"`)**: Espalhados estrategicamente entre as seções do artigo para converter o leitor no exato momento em que ele se identifica com um sintoma.
  5. **Bloco Recorrente de Autoridade no Final do Artigo**: Um card fixo apresentando a profissional, sua formação, atendimento presencial em Sorocaba e online para todo o país.
  6. **Seção "Leia também"**: 4 links internos para outros artigos do blog, aumentando o tempo de permanência no site.

### 2.6. Falhas Técnicas Encontradas no Site Original (e Corrigidas no Nosso)
Durante a auditoria do site da Dra. Jéssica, encontramos 3 falhas de construção que **corrigimos e aprimoramos** no site da Isabelle:
1. Na página `/clinica-almenara/` do site original, o desenvolvedor cometeu um erro no Elementor e renderizou o cabeçalho (`#masthead`) **no meio da página**, abaixo das fotos e do título `"A equipe"`. No nosso site (`/o-consultorio`), a hierarquia semântica e visual é 100% limpa e consistente.
2. Na página `/blog/` do site original, o rodapé de contato ainda mostrava um endereço antigo (*Av. Washington Luiz, 831*), divergindo do endereço novo da Clínica Almenara (*Av. Cel. Nogueira Padilha, 1100*). No nosso site, todos os componentes consomem uma única fonte da verdade ([src/lib/constants.ts](file:///c:/Users/JonathanHenriqueMome/Desktop/psi/src/lib/constants.ts)).
3. O site original em WordPress + Elementor dependia de dezenas de plugins pesados e não possuía suporte a **PWA (Progressive Web App)** nem botão flutuante mobile otimizado para campanhas de Google Ads.

---

## 3. Parte 2: Formulário de Briefing Integral Respondido pela Psicóloga Isabelle Momesso

Abaixo está o registro exato e literal de todas as respostas enviadas pela **Psicóloga Isabelle Momesso**, que serviram de base para toda a construção do site:

```text
==================================================
1. IDENTIFICAÇÃO PROFISSIONAL (Obrigatório pelo CFP)
==================================================
1.1. Como você quer que seu nome apareça no topo do site?
R: Isabelle Momesso / psi.isabellemomesso

1.2. Qual o seu número de CRP ativo (e região)?
R: 06/85692

1.3. Qual é a sua abordagem terapêutica principal?
R: Terapia Cognitivo Comportamental

1.4. Qual público você atende?
R: Adolescentes, adultos, idosos, casais

1.5. Modalidades de atendimento:
(x) Presencial e Online
- Se atende presencial, em qual Cidade e Estado você atende?
R: Sorocaba

==================================================
2. FORMAÇÃO E QUALIFICAÇÕES (Seção "Formação")
==================================================
- Graduação em Psicologia (Nome da Faculdade): UNIP – Universidade Paulista de Sorocaba
- Pós-graduação / Especialização 1: Terapia Cognitivo Comportamental
- Pós-graduação / Especialização 2: Terapia Familiar
- Pós-graduação / Especialização 3: PNL – Programação Neurolinguística

==================================================
3. "QUEM SOU EU?" (Sua história e forma de trabalhar)
==================================================
"Cuidar de pessoas nunca foi apenas uma profissão para mim. Sempre foi uma escolha".
Eu sou Isabelle Momesso, psicóloga e atuo sob a perspectiva da cognitivo-comportamental.
Antes mesmo de estar no consultório, minha história já era construída ao lado de pessoas que enfrentavam desafios, recomeços e momentos de muita vulnerabilidade. Como Assistente Social, Conselheira Tutelar e participante de projetos sociais, aprendi que cada pessoa carrega uma história que merece ser ouvida com respeito, acolhimento e humanidade.
Hoje, na Psicologia, encontrei uma forma ainda mais profunda de exercer esse cuidado.
Acredito que muitas das dificuldades que enfrentamos na vida adulta, seja nos relacionamentos, na autoestima ou na forma como lidamos com nós mesmos, são mantidas por padrões de pensamento que aprendemos ao longo da nossa história. E a boa notícia é que esses padrões podem ser compreendidos e transformados.
É por isso que escolhi a Terapia Cognitivo-Comportamental (TCC), uma abordagem baseada em evidências científicas que ajuda a identificar pensamentos, emoções e comportamentos que alimentam o sofrimento, permitindo construir respostas mais saudáveis e uma vida com mais equilíbrio.
Meu trabalho é caminhar ao lado de cada paciente para que ele desenvolva autonomia emocional, aprenda a respeitar seus próprios limites e descubra que é possível viver de forma mais leve, sem deixar de ser quem é.
Além da profissão, sou uma pessoa que acredita no valor da família, cultiva amizades de longa data, encontra na leitura uma forma de crescimento, ama cozinhar, dançar e fortalece diariamente sua fé em Deus.
Acredito que cuidar da saúde emocional não significa buscar uma vida perfeita, mas construir uma vida mais consciente, com escolhas que façam sentido para quem você deseja ser.
Se este conteúdo chegou até você, espero que este perfil seja um espaço de aprendizado, acolhimento e reflexão. Seja muito bem-vindo(a). Psicóloga Isabelle Momesso. CRP: 06/85692

==================================================
4. PRINCIPAIS DEMANDAS QUE VOCÊ TRATA (Cards de Especialidades)
==================================================
(x) Ansiedade (TAG) e Preocupação Excessiva
(x) Depressão, Tristeza Persistente e Desânimo
(x) TDAH (Falta de foco, procrastinação, desorganização)
(x) Burnout e Esgotamento no Trabalho
(x) Autoestima, Autoconhecimento e Insegurança
(x) Relacionamentos Afetivos, Familiares e Dependência Emocional
(x) Insônia e Estresse
(x) Luto e Grandes Mudanças de Vida (carreira, maternidade, morar no exterior)
- Alguma outra demanda específica que você ama atender?
R: Limites

==================================================
5. COMO FUNCIONA A SESSÃO, VALORES E REEMBOLSO
==================================================
5.1. Qual a duração média de cada sessão e a frequência habitual?
R: 50 minutos, 1 vez por semana

5.2. Você emite Recibo / Nota Fiscal para o paciente pedir REEMBOLSO no Plano de Saúde?
(x) Sim

5.3. Quais formas de pagamento você aceita para as sessões?
(x) PIX  (x) Sessão Avulsa
- Quer mencionar alguma facilidade?
R: Pacote mensal de 4 sessões com desconto

5.4. Sobre o Atendimento Online:
- Por qual aplicativo você realiza a videochamada?
R: WhatsApp
- Você também atende brasileiros que moram no exterior?
(x) Sim

==================================================
6. O SEU CONSULTÓRIO / ESPAÇO FÍSICO
==================================================
6.1. O seu consultório ou clínica tem um nome específico?
R: Clínica Almenara

6.2. Conte 1 ou 2 parágrafos sobre o seu espaço físico:
R: *Um espaço pensado para acolher você.*
Meu consultório particular foi cuidadosamente planejado para oferecer conforto, privacidade e acolhimento desde a sua chegada.
Contamos com uma sala de espera confortável, café, água e pequenos lanches para tornar sua experiência ainda mais agradável. Durante a sessão, você também pode desfrutar de um café, se desejar.
O ambiente oferece *sigilo acústico*, respeitando sua privacidade e garantindo a discrição necessária para que você possa falar livremente e se sentir seguro.
Além disso, dispomos de estacionamento e fácil acesso, para proporcionar mais praticidade no seu atendimento.
Mais do que um consultório, um espaço preparado para receber você com respeito, cuidado e acolhimento.
*Aqui, você encontra um lugar onde pode ser você, no seu tempo e sem julgamentos.*
“Um espaço onde você se sente acolhido, com conforto, privacidade e cuidado em cada detalhe.”

==================================================
7. PROVA SOCIAL (Avaliações e Depoimentos)
==================================================
7.1. Perfil Google Meu Negócio / Doctoralia:
R: Não tenho ainda
7.2. Depoimentos iniciais:
R: Não tenho ainda (criamos o gerenciador dinâmico no /admin para ela adicionar quando quiser + seção "Pilares do Atendimento")

==================================================
8. BLOG E ARTIGOS INICIAIS
==================================================
8.1. Temas selecionados:
[x] Quando procurar uma psicóloga e como a terapia pode mudar sua vida
[x] Ansiedade: como lidar com o peso da preocupação constante
[x] Burnout e esgotamento emocional: sinais de alerta
[x] Autoestima e relacionamentos: como construir limites saudáveis
[x] TOC: entendendo pensamentos intrusivos e compulsões
[x] Insônia e ansiedade noturna: dicas práticas de higiene do sono
[x] Terapia Online funciona? Veja como se preparar para sua sessão online
+ Tema adicional pedido: "Limites, culpa, dificuldade de falar não" (e também adicionamos Depressão, TDAH e Luto/Mudanças de Vida para cobrir todas as 9 demandas que ela marcou no item 4, totalizando 11 artigos completos!)

8.2. E-mail de LOGIN do Painel do Blog:
R: isabelle_carlamomesso@yahoo.com.br

==================================================
9. CONTATOS, ENDEREÇO E HORÁRIOS
==================================================
9.1. Número de WhatsApp oficial para agendamentos:
R: (15) 99123-0882
9.2. Mensagem automática:
R: "Olá! Vim pelo seu site e gostaria de informações para agendar uma sessão."
9.3. Telefone fixo: Não
9.4. E-mail profissional: isabelle_carlamomesso@yahoo.com.br
9.5. Endereço completo: Avenida Coronel Nogueira Padilha N° 1100 – Vila Hortência, Sorocaba/SP – CEP 18020-000
9.6. Dias e horários: Segunda a Sexta das 8h às 20h (presencial e online)
9.7. Redes Sociais:
- Instagram: @psi.isabellemomesso
- Facebook: isabelle carla
- TikTok: @psibelle10

==================================================
10. IDENTIDADE VISUAL, FOTOS E DOMÍNIO (.COM.BR)
==================================================
10.1. Logotipo:
(x) Não tenho logo ainda (criamos o monograma tipográfico elegante "IM")
10.2. Cores escolhidas:
(x) Opção 1: Verde Sálvia, Bege Linho/Areia e Dourado Suave
(x) Opção 3: Azul Petróleo Sereno, Creme Champagne e Bronze
10.4. Domínio desejado:
R: www.psibelle10.com.br
```

---

## 4. Parte 3: Estratégia Anti-Plágio & Identidade Visual Autoral ("Serenidade & Ciência")

### 4.1. Por que a Diferenciação Visual era Crítica
Ao analisar o formulário, identificamos que a **Psicóloga Isabelle Momesso atende exatamente na mesma Clínica Almenara** (*Av. Coronel Nogueira Padilha, 1100 – Vila Hortência, Sorocaba/SP*) onde atende a **Dra. Jéssica Almenara**.
Por isso, mantivemos **100% da arquitetura comercial e de conteúdo que funciona**, mas criamos uma linguagem visual completamente nova, editorial e superior.

### 4.2. Paleta de Cores Extraída das Fotos Reais da Isabelle
A Isabelle marcou as Opções 1 (*Verde Sálvia + Bege Linho + Dourado*) e 3 (*Azul Petróleo + Creme Champagne + Bronze*), que coincidem exatamente com as cores das roupas e do consultório nas 4 fotos dela:
- **Verde Sálvia (`sage-500: #5B8276` / `sage-600: #46685E`)**: Harmonia direta com o blazer azul-sálvia e a blusa verde-sálvia que ela veste nas fotos.
- **Azul-Petróleo Profundo (`petrol-900: #182C34` / `petrol-950: #101E24`)**: Fundo institucional de alto contraste no Header, seção de Formação, cards alternados e Footer.
- **Bege Linho & Areia Quente (`sand-50: #FAF8F5` / `sand-100: #F5F1EA` / `sand-200: #EAE3D5`)**: Harmonia com o terninho bege, a poltrona clara e a marcenaria do consultório.
- **Dourado / Bronze Suave (`bronze-400: #C8A27A` / `bronze-500: #B89166`)**: Usado no monograma `IM`, selos de CRP e detalhes de destaque.
- **Esmeralda / Teal de Conversão**: Usado nos botões de CTA para o WhatsApp.

### 4.3. Tipografia Editorial e Monograma `IM`
- **Títulos (`font-serif`)**: `Cormorant Garamond` (pesos 500, 600, 700) — transmite sofisticação editorial, acolhimento humano e autoridade clínica.
- **Corpo e Interface (`font-sans`)**: `Plus Jakarta Sans` (pesos 400 a 800) — máxima legibilidade no celular e computador.
- **Monograma `IM`**: Criado em SVG vetorial ([public/icon.svg](file:///c:/Users/JonathanHenriqueMome/Desktop/psi/public/icon.svg)) e no cabeçalho/rodapé, funcionando tanto como logotipo da marca quanto como ícone de aplicativo PWA na tela inicial do celular.

### 4.4. Processamento e Tratamento das 4 Fotos do Projeto
As 4 imagens originais enviadas pelo WhatsApp foram processadas e salvas em `/public/images/`:
1. **[public/images/isabelle-poltrona.jpg](file:///c:/Users/JonathanHenriqueMome/Desktop/psi/public/images/isabelle-poltrona.jpg)**: Isabelle sentada na poltrona clara com blazer bege e blusa verde-sálvia. Usada no **Hero Banner principal**, no card de autora do Blog e na galeria do consultório.
2. **[public/images/isabelle-escrevendo.jpg](file:///c:/Users/JonathanHenriqueMome/Desktop/psi/public/images/isabelle-escrevendo.jpg)**: Isabelle escrevendo no caderno com a placa *"PSICÓLOGA – Cuidar é Transformar"* e o quadro *"Escuta, Acolhe, Transforma"*. Usada na seção **"Quem Sou Eu?"** e na página **"Valor da Consulta"**.
3. **[public/images/isabelle-notebook.jpg](file:///c:/Users/JonathanHenriqueMome/Desktop/psi/public/images/isabelle-notebook.jpg)**: Isabelle de blazer sálvia usando o notebook com o caderno *"Intenção / Propósito"* e o quadro *"Escuta, Empatia, Ciência, Propósito"*. Usada na seção de **Terapia Online** e capas de artigos.
4. **[public/images/isabelle-consultorio.jpg](file:///c:/Users/JonathanHenriqueMome/Desktop/psi/public/images/isabelle-consultorio.jpg)**: Isabelle em pé apoiada na mesa de madeira do consultório com blazer verde-floresta. **Nota técnica**: O arquivo original (`738x1600`) era um print de tela de celular; executamos um script automatizado de processamento de imagem que detectou as bordas brancas do print (`topY=338`, `bottomY=1262`) e gerou a foto limpa (`738x925`) sem barra de bateria ou botões do Android, usada em destaque na página **"O Consultório"**.

---

## 5. Parte 4: Arquitetura Técnica do Nosso Sistema (Next.js + Tailwind + Supabase + Vercel + PWA)

### 5.1. Estrutura de Pastas e Arquivos do Projeto
```text
psi/
├── public/
│   ├── images/
│   │   ├── isabelle-consultorio.jpg   # Foto 4 recortada e otimizada (Consultório em pé)
│   │   ├── isabelle-escrevendo.jpg    # Foto 3 (Placa Psicóloga - Cuidar é Transformar)
│   │   ├── isabelle-notebook.jpg      # Foto 1 (Notebook - Terapia Online)
│   │   └── isabelle-poltrona.jpg      # Foto 2 (Poltrona bege - Hero principal)
│   ├── icon.svg                       # Logotipo Monograma "IM" para Favicon e PWA
│   ├── manifest.json                  # Manifesto PWA para instalação em Android/iOS
│   └── sw.js                          # Service Worker para cache e suporte offline
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   └── page.tsx               # Painel Administrativo (/admin) para Blog e Depoimentos
│   │   ├── blog/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx           # Página individual do artigo (Progresso + Sumário + CTAs)
│   │   │   └── page.tsx               # Listagem do Blog com Busca e Filtro por Categoria
│   │   ├── o-consultorio/
│   │   │   └── page.tsx               # Página O Consultório (Clínica Almenara, Café, Sigilo, Mapa)
│   │   ├── valor-da-consulta/
│   │   │   └── page.tsx               # Página Valor da Consulta, Pacote Mensal e Guia de Reembolso
│   │   ├── globals.css                # Estilos globais e Tailwind CSS
│   │   ├── layout.tsx                 # Layout raiz, Google Fonts, Metadados SEO e Schema.org JSON-LD
│   │   ├── page.tsx                   # Homepage completa com todas as 7 seções estratégicas
│   │   ├── robots.ts                  # Geração dinâmica do robots.txt
│   │   └── sitemap.ts                 # Geração dinâmica do sitemap.xml com todos os artigos do banco
│   ├── components/
│   │   ├── Footer.tsx                 # Rodapé global com CRP, contatos, links e acesso ao /admin
│   │   ├── Header.tsx                 # Cabeçalho fixo com Monograma, Menu, Busca e WhatsApp
│   │   ├── ReadingProgressBar.tsx     # Barra de progresso de leitura no topo dos artigos
│   │   └── WhatsAppCta.tsx            # Botão flutuante PWA + Botão de conversão reutilizável
│   └── lib/
│       ├── blog-service.ts            # Funções CRUD assíncronas conectadas ao Supabase
│       ├── constants.ts               # Fonte única da verdade (Perfil, CRP, Formação, Demandas, FAQs)
│       └── supabase.ts                # Cliente Singleton do Supabase
├── .env.local                         # Variáveis de ambiente locais
├── next.config.ts                     # Configuração do Next.js
├── package.json                       # Dependências e scripts
├── postcss.config.js                  # Configuração PostCSS
├── tailwind.config.js                 # Design tokens customizados (sage, petrol, sand, bronze)
└── tsconfig.json                      # Configuração TypeScript estrita
```

### 5.2. Banco de Dados Supabase (`psibelle` — `wmfgygofrgptchbcecul`)
Criamos um banco dedicado chamado **`psibelle`** no Supabase com Row Level Security (RLS) ativo e 3 tabelas principais:
1. **`public.blog_posts`**:
   - Campos: `id` (UUID), `slug` (TEXT UNIQUE), `title`, `subtitle`, `excerpt`, `content` (Markdown), `category`, `tags` (TEXT[]), `cover_image`, `reading_time`, `published`, `featured`, `seo_title`, `seo_description`, `author_name`, `author_crp`, `created_at`, `updated_at`.
   - Índices criados: `idx_blog_posts_slug`, `idx_blog_posts_published_created`, `idx_blog_posts_category`.
2. **`public.testimonials`**:
   - Campos: `id` (UUID), `patient_initials` (apenas iniciais para sigilo ético do CFP), `patient_label`, `rating` (1 a 5), `content`, `modality`, `approved`, `created_at`.
3. **`public.site_settings`**:
   - Campos: `key` (TEXT PRIMARY KEY), `value` (JSONB), `updated_at`. Armazena os dados gerais do perfil da psicóloga.

### 5.3. Os 11 Artigos de SEO pré-cadastrados no Banco
O site já nasceu com **11 artigos profundos** cadastrados no banco `psibelle`:
1. `/blog/dificuldade-de-dizer-nao-culpa-e-limites-saudaveis` — *Dificuldade de dizer "não": como vencer a culpa e construir limites saudáveis*
2. `/blog/ansiedade-e-preocupacao-excessiva-como-recuperar-o-equilibrio` — *Ansiedade e preocupação excessiva: como acalmar a mente e recuperar o equilíbrio*
3. `/blog/quando-procurar-uma-psicologa-e-como-funciona-a-tcc` — *Quando procurar uma psicóloga e como a Terapia Cognitivo-Comportamental pode transformar sua vida*
4. `/blog/burnout-e-esgotamento-emocional-sinais-de-alerta` — *Burnout e esgotamento emocional: sinais de alerta de que você passou do seu limite*
5. `/blog/autoestima-relacionamentos-e-dependencia-emocional` — *Autoestima, relacionamentos e dependência emocional: como construir vínculos leves*
6. `/blog/depressao-tristeza-persistente-e-desanimo-quando-buscar-ajuda` — *Depressão, tristeza persistente e desânimo: muito além de "falta de força de vontade"*
7. `/blog/tdah-na-vida-adulta-falta-de-foco-e-procrastinacao` — *TDAH e falta de foco na vida adulta: estratégias da TCC para organização e equilíbrio emocional*
8. `/blog/toc-entendendo-pensamentos-intrusivos-e-compulsoes` — *TOC: entendendo pensamentos intrusivos, dúvidas constantes e compulsões*
9. `/blog/insonia-e-ansiedade-noturna-dicas-praticas-de-higiene-do-sono` — *Insônia e ansiedade noturna: hábitos práticos para desligar a mente na hora de dormir*
10. `/blog/terapia-online-funciona-como-se-preparar-para-sua-sessao` — *Terapia Online funciona? Veja como se preparar para sua sessão (no Brasil ou no exterior)*
11. `/blog/luto-e-grandes-mudancas-de-vida-como-atravessar-recomecos` — *Luto e grandes mudanças de vida: como atravessar fases de transição e recomeços*

---

## 6. Parte 5: Manual do Painel Administrativo (`/admin`) e Manutenção Futura

### 6.1. Credenciais e Como Publicar Novos Artigos no Blog
A psicóloga pode acessar o painel pelo computador ou pelo celular:
- **Endereço**: `https://psibelle.vercel.app/admin` (ou `https://www.psibelle10.com.br/admin` após apontar o domínio) — também há um link discreto **"Painel da Psicóloga"** no canto inferior direito do rodapé do site.
- **E-mail de Login**: `isabelle_carlamomesso@yahoo.com.br`
- **Senha de Acesso**: `psibelle10`

**Passo a passo para ela postar um novo artigo**:
1. Clicar no botão verde **"+ Novo Artigo"** no topo do painel.
2. Digitar o **Título do Artigo**, escolher a **Categoria** e selecionar uma das **Fotos de Capa**.
3. Escrever um **Resumo Curto** (2 frases).
4. Escrever o texto no campo **Conteúdo Completo** (usando `## Título da Seção` quando quiser criar um subtítulo novo).
5. Clicar em **"Salvar e Publicar Artigo"**.
6. **O que o sistema faz sozinho**: Gera a URL amigável (`slug`), cria o Sumário clicável no início do texto, adiciona a barra de progresso de leitura no topo, insere os botões de **"Agende sua consulta!"** intercalados no meio do artigo, adiciona o card de autoridade com a foto e o `CRP 06/85692` dela no final e inclui o artigo automaticamente no `sitemap.xml` do Google!

### 6.2. Como Adicionar Depoimentos de Pacientes
1. No painel `/admin`, clicar na aba **"Depoimentos de Pacientes"**.
2. Preencher as **Iniciais do Paciente** (ex: `M. S.`), a modalidade (ex: `Terapia Presencial • Sorocaba` ou `Terapia Online`) e o relato.
3. Clicar em **"Publicar Depoimento no Site"**.
4. Assim que o primeiro depoimento é cadastrado, a seção **"Relatos e Avaliações de Pacientes"** passa a ser exibida automaticamente na Página Inicial!

### 6.3. Como Conectar o Domínio Próprio (`www.psibelle10.com.br`) na Vercel
Quando o domínio `psibelle10.com.br` for registrado (ex.: no Registro.br):
1. Acessar o painel da Vercel no projeto **`psibelle`** (`Settings` → `Domains`).
2. Digitar `www.psibelle10.com.br` e `psibelle10.com.br`.
3. Copiar o registro DNS tipo `A` (`76.76.21.21`) e o `CNAME` (`cname.vercel-dns.com`) informados pela Vercel e colar na zona de DNS do Registro.br.
4. Em poucos minutos o certificado SSL (cadeado HTTPS) será emitido automaticamente pela Vercel.
