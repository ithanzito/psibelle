/**
 * Centralized constants, profile info, specialties, formations, and fallback articles
 * for Psicóloga Isabelle Momesso (CRP 06/85692).
 */

export interface SpecialtyItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  symptoms: string[];
  articleSlug: string;
}

export interface FormationItem {
  title: string;
  institution: string;
  detail: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const PSI_PROFILE = {
  name: "Psicóloga Isabelle Momesso",
  shortName: "Isabelle Momesso",
  monogram: "IM",
  handle: "@psi.isabellemomesso",
  crp: "CRP 06/85692",
  approach: "Terapia Cognitivo-Comportamental (TCC)",
  audiences: ["Adolescentes", "Adultos", "Idosos", "Casais"],
  audiencesText: "Adolescentes, Adultos, Idosos e Casais",
  city: "Sorocaba - SP",
  modalities: "Presencial em Sorocaba e Online para todo o Brasil e Exterior",
  sessionDuration: "50 minutos",
  sessionFrequency: "1 vez por semana (ou conforme necessidade clínica)",
  paymentMethods: "PIX (Sessão Avulsa ou Pacote Mensal de 4 sessões com desconto)",
  reimbursement: "Emissão de Recibo / Nota Fiscal com CRP para Reembolso no Plano de Saúde",
  onlinePlatform: "Videochamada pelo WhatsApp",
  whatsappNumber: "5515991230882",
  whatsappDisplay: "(15) 99123-0882",
  whatsappMessage:
    "Olá! Vim pelo seu site e gostaria de informações para agendar uma sessão.",
  email: "isabelle_carlamomesso@yahoo.com.br",
  clinicName: "Clínica Almenara",
  addressStreet: "Avenida Coronel Nogueira Padilha, Nº 1100",
  addressNeighborhood: "Vila Hortência",
  addressCityState: "Sorocaba - SP",
  addressZip: "CEP 18020-000",
  fullAddress:
    "Clínica Almenara – Av. Coronel Nogueira Padilha, 1100 – Vila Hortência, Sorocaba/SP – CEP 18020-000",
  businessHours: "Segunda a Sexta, das 8h às 20h (Presencial e Online)",
  instagramUrl: "https://www.instagram.com/psi.isabellemomesso/",
  tiktokUrl: "https://www.tiktok.com/@psibelle10",
  facebookLabel: "Isabelle Carla",
  facebookUrl: "https://www.facebook.com/search/top?q=isabelle%20carla",
  siteUrl: "https://www.psibelle10.com.br",
  adminEmail: "isabelle_carlamomesso@yahoo.com.br",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Avenida+Coronel+Nogueira+Padilha,+1100+-+Vila+Hortencia,+Sorocaba+-+SP,+18020-000&output=embed",
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Avenida+Coronel+Nogueira+Padilha,+1100+Vila+Hortencia+Sorocaba+SP",
} as const;

/**
 * Generates an official WhatsApp click-to-chat URL with pre-filled message.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const text = encodeURIComponent(customMessage || PSI_PROFILE.whatsappMessage);
  return `https://wa.me/${PSI_PROFILE.whatsappNumber}?text=${text}`;
}

export const FORMATIONS: FormationItem[] = [
  {
    title: "Graduação em Psicologia",
    institution: "UNIP – Universidade Paulista (Campus Sorocaba)",
    detail:
      "Formação sólida e ética com registro ativo no Conselho Regional de Psicologia de São Paulo (CRP 06/85692).",
  },
  {
    title: "Pós-Graduação / Especialização em Terapia Cognitivo-Comportamental (TCC)",
    institution: "Abordagem Baseada em Evidências Científicas",
    detail:
      "Foco na identificação e transformação de padrões de pensamento, emoções e comportamentos que mantêm o sofrimento emocional.",
  },
  {
    title: "Pós-Graduação / Especialização em Terapia Familiar",
    institution: "Vínculos Afetivos, Familiares e Casais",
    detail:
      "Compreensão sistêmica das dinâmicas familiares, resolução de conflitos, fortalecimento do diálogo e construção de vínculos saudáveis.",
  },
  {
    title: "Especialização em PNL – Programação Neurolinguística",
    institution: "Comunicação, Mudança de Padrões e Autodesenvolvimento",
    detail:
      "Recursos práticos para ressignificação de experiências, fortalecimento de recursos internos e clareza de objetivos.",
  },
  {
    title: "Trajetória Humana e Social Consolidada",
    institution: "Atuação prévia como Assistente Social, Conselheira Tutelar e Projetos Sociais",
    detail:
      "Anos de escuta prática ao lado de pessoas e famílias em momentos de vulnerabilidade, desafios e recomeços, unindo técnica e profunda humanidade.",
  },
];

export const PILLARS = [
  {
    title: "Escuta sem Julgamentos",
    subtitle: "Acolhimento Verdadeiro",
    description:
      "Um espaço seguro onde sua história é ouvida com profundo respeito, empatia e humanidade, no seu tempo e sem críticas.",
  },
  {
    title: "Base Científica (TCC)",
    subtitle: "Método Claro e Estruturado",
    description:
      "Trabalhamos com a Terapia Cognitivo-Comportamental para identificar pensamentos e crenças que geram dor e construir respostas mais saudáveis.",
  },
  {
    title: "Autonomia e Limites",
    subtitle: "Liberdade para Ser Você",
    description:
      "Caminhamos juntos para que você aprenda a dizer não sem culpa, respeite seus próprios limites e desenvolva segurança emocional.",
  },
  {
    title: "Sigilo e Conforto Total",
    subtitle: "Presencial ou Online",
    description:
      "Consultório com isolamento acústico, sala de espera com café e estacionamento em Sorocaba, ou atendimento online para o Brasil e exterior.",
  },
];

export const SPECIALTIES: SpecialtyItem[] = [
  {
    id: "limites",
    title: "Construção de Limites, Culpa e Dificuldade de Dizer Não",
    badge: "Destaque Clínico",
    description:
      "Para quem sente que carrega todo mundo nas costas, tem medo constante de desagradar e sente muita culpa toda vez que tenta se colocar em primeiro lugar.",
    symptoms: [
      "Dificuldade de recusar pedidos mesmo exausta(o)",
      "Culpa intensa ao tentar se priorizar",
      "Sensação de que todos abusam da sua boa vontade",
    ],
    articleSlug: "dificuldade-de-dizer-nao-culpa-e-limites-saudaveis",
  },
  {
    id: "ansiedade",
    title: "Ansiedade (TAG) e Preocupação Excessiva",
    badge: "Muito Frequente",
    description:
      "Quando a mente não desliga, antecipando cenários negativos o tempo todo e gerando inquietação, tensão muscular, cansaço e aperto no peito.",
    symptoms: [
      "Mente acelerada e pensamentos do tipo 'e se...?'",
      "Tensão física, irritabilidade e cansaço constante",
      "Necessidade de controle e medo de imprevistos",
    ],
    articleSlug: "ansiedade-e-preocupacao-excessiva-como-recuperar-o-equilibrio",
  },
  {
    id: "depressao",
    title: "Depressão, Tristeza Persistente e Desânimo",
    badge: "Cuidado Integral",
    description:
      "Apoio especializado para resgatar a vitalidade, o sentido e o prazer de viver quando o desânimo, a apatia, a autocrítica e o cansaço emocional tomam conta.",
    symptoms: [
      "Perda de interesse por atividades que antes gostava",
      "Falta de energia, alterações de sono e apetite",
      "Sentimento de vazio, culpa ou pessimismo",
    ],
    articleSlug: "depressao-tristeza-persistente-e-desanimo-quando-buscar-ajuda",
  },
  {
    id: "relacionamentos",
    title: "Relacionamentos Afetivos, Familiares e Dependência Emocional",
    badge: "Individual e Casais",
    description:
      "Compreensão e transformação de padrões dolorosos nos vínculos amorosos e familiares, superando o medo de abandono, a autoanulação e falhas de comunicação.",
    symptoms: [
      "Medo excessivo de rejeição ou término",
      "Conflitos repetitivos no casamento ou na família",
      "Anulação dos próprios desejos para manter a relação",
    ],
    articleSlug: "autoestima-relacionamentos-e-dependencia-emocional",
  },
  {
    id: "autoestima",
    title: "Autoestima, Autoconhecimento e Insegurança",
    badge: "Desenvolvimento",
    description:
      "Fortalecimento da sua identidade, redução da autocrítica severa e construção de autoconfiança para tomar decisões alinhadas com quem você deseja ser.",
    symptoms: [
      "Autocrítica cruel e comparação constante",
      "Insegurança para tomar decisões sozinha(o)",
      "Sensação de insuficiência pessoal ou profissional",
    ],
    articleSlug: "autoestima-relacionamentos-e-dependencia-emocional",
  },
  {
    id: "burnout",
    title: "Burnout e Esgotamento no Trabalho",
    badge: "Saúde Emocional",
    description:
      "Quando a sobrecarga profissional ultrapassa todos os limites, gerando exaustão que não passa com o descanso, perda de motivação e queda no rendimento.",
    symptoms: [
      "Exaustão física e mental ao acordar",
      "Dificuldade de se desconectar do trabalho",
      "Cobrança extrema e sensação de ineficácia",
    ],
    articleSlug: "burnout-e-esgotamento-emocional-sinais-de-alerta",
  },
  {
    id: "tdah",
    title: "TDAH: Falta de Foco, Procrastinação e Organização",
    badge: "Jovens e Adultos",
    description:
      "Estratégias práticas da TCC para lidar com a desatenção, a paralisia por sobrecarga, a procrastinação crônica e o desgaste emocional de tentar dar conta de tudo.",
    symptoms: [
      "Dificuldade de manter o foco e concluir tarefas",
      "Procrastinação seguida de culpa e estresse",
      "Desorganização na rotina e esquecimentos",
    ],
    articleSlug: "tdah-na-vida-adulta-falta-de-foco-e-procrastinacao",
  },
  {
    id: "insonia",
    title: "Insônia, Ansiedade Noturna e Estresse",
    badge: "Equilíbrio",
    description:
      "Reeducação cognitiva e comportamental para quem deita exausto, mas vê a mente acelerar assim que apaga a luz, prejudicando o descanso e o humor.",
    symptoms: [
      "Demora para pegar no sono por excesso de pensamentos",
      "Despertares noturnos e sono não reparador",
      "Cansaço e irritabilidade ao longo do dia",
    ],
    articleSlug: "insonia-e-ansiedade-noturna-dicas-praticas-de-higiene-do-sono",
  },
  {
    id: "luto",
    title: "Luto, Recomeços e Grandes Mudanças de Vida",
    badge: "Acolhimento",
    description:
      "Acompanhamento humano e seguro para atravessar perdas, términos, transição de carreira, maternidade, ninho vazio ou adaptação ao morar no exterior.",
    symptoms: [
      "Dor pela perda de alguém querido ou fim de um ciclo",
      "Insegurança diante de mudanças importantes",
      "Necessidade de reconstruir sentido e rotina",
    ],
    articleSlug: "luto-e-grandes-mudancas-de-vida-como-atravessar-recomecos",
  },
];

export const ABOUT_STORY_PARAGRAPHS = [
  "“Cuidar de pessoas nunca foi apenas uma profissão para mim. Sempre foi uma escolha.”",
  "Eu sou Isabelle Momesso, psicóloga (CRP 06/85692) e atuo sob a perspectiva da Terapia Cognitivo-Comportamental. Antes mesmo de estar no consultório, minha história já era construída ao lado de pessoas que enfrentavam desafios, recomeços e momentos de muita vulnerabilidade.",
  "Como Assistente Social, Conselheira Tutelar e participante de projetos sociais, aprendi que cada pessoa carrega uma história que merece ser ouvida com respeito, acolhimento e humanidade. Hoje, na Psicologia, encontrei uma forma ainda mais profunda de exercer esse cuidado.",
  "Acredito que muitas das dificuldades que enfrentamos na vida adulta — seja nos relacionamentos, na autoestima ou na forma como lidamos com nós mesmos — são mantidas por padrões de pensamento que aprendemos ao longo da nossa história. E a boa notícia é que esses padrões podem ser compreendidos e transformados.",
  "É por isso que escolhi a Terapia Cognitivo-Comportamental (TCC), uma abordagem baseada em evidências científicas que ajuda a identificar pensamentos, emoções e comportamentos que alimentam o sofrimento, permitindo construir respostas mais saudáveis e uma vida com mais equilíbrio.",
  "Meu trabalho é caminhar ao lado de cada paciente para que ele desenvolva autonomia emocional, aprenda a respeitar seus próprios limites e descubra que é possível viver de forma mais leve, sem deixar de ser quem é.",
  "Além da profissão, sou uma pessoa que acredita no valor da família, cultiva amizades de longa data, encontra na leitura uma forma de crescimento, ama cozinhar, dançar e fortalece diariamente sua fé em Deus. Acredito que cuidar da saúde emocional não significa buscar uma vida perfeita, mas construir uma vida mais consciente, com escolhas que façam sentido para quem você deseja ser.",
];

export const CLINIC_FEATURES = [
  {
    title: "Sala de Espera com Café e Lanches",
    description:
      "Ambiente acolhedor com café fresquinho, água e pequenos lanches desde a sua chegada. Durante a sessão, você também pode desfrutar de um café, se desejar.",
  },
  {
    title: "Sigilo Acústico Absoluto",
    description:
      "Consultório planejado com isolamento e sigilo acústico, garantindo total discrição e privacidade para que você fale livremente e se sinta seguro(a).",
  },
  {
    title: "Estacionamento e Fácil Acesso",
    description:
      "Localizado na Clínica Almenara (Av. Coronel Nogueira Padilha, 1100 – Vila Hortência, Sorocaba/SP), com estacionamento e praticidade para o seu dia a dia.",
  },
  {
    title: "No Seu Tempo e Sem Julgamentos",
    description:
      "Mais do que um consultório físico, um espaço preparado em cada detalhe para receber você com respeito, cuidado, conforto e humanidade.",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Como saber o valor da sessão e como funciona o pagamento?",
    answer:
      "Em respeito ao Código de Ética do Conselho Federal de Psicologia (CFP), os valores não são divulgados abertamente em páginas publicitárias. Ao clicar no botão de WhatsApp, informo prontamente os valores atualizados. Você pode optar pelo pagamento de Sessão Avulsa ou pelo Pacote Mensal de 4 sessões com desconto especial, realizados via PIX.",
  },
  {
    question: "Posso usar meu Plano de Saúde para ter Reembolso das sessões?",
    answer:
      "Sim! O atendimento é particular para garantir 50 minutos de escuta individualizada e sem as limitações dos convênios, mas eu emito o Recibo / Nota Fiscal com meu registro oficial (CRP 06/85692) para você solicitar o reembolso diretamente no aplicativo do seu Plano de Saúde.",
  },
  {
    question: "Qual é a duração e a frequência das sessões de psicoterapia?",
    answer:
      "Cada sessão tem duração média de 50 minutos e ocorre habitualmente 1 vez por semana, em dia e horário reservados exclusivamente para você.",
  },
  {
    question: "Como funciona a Terapia Online? Ela tem a mesma eficácia da presencial?",
    answer:
      "Sim, estudos científicos comprovam que a Terapia Cognitivo-Comportamental online possui a mesma eficácia do atendimento presencial. Realizamos a sessão por videochamada diretamente pelo WhatsApp no horário agendado, com total sigilo ético — atendendo pacientes em todo o Brasil e brasileiros que moram no exterior.",
  },
  {
    question: "Qual público você atende no consultório e online?",
    answer:
      "Realizo psicoterapia individual para Adolescentes, Adultos e Idosos, além de atendimento para Casais e orientação com foco em Terapia Familiar.",
  },
  {
    question: "Onde fica o consultório presencial em Sorocaba?",
    answer:
      "Atendo presencialmente na Clínica Almenara, localizada na Avenida Coronel Nogueira Padilha, Nº 1100 – Vila Hortência, Sorocaba/SP (CEP 18020-000), de segunda a sexta-feira, das 8h às 20h. O local conta com estacionamento, sala de espera com café e lanches e sigilo acústico.",
  },
];
