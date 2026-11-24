import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Sparkles,
  MapPin,
  Clock,
  Mail,
  MessageCircle,
  ArrowRight,
  Star,
  Globe2,
  Users,
  ShieldCheck,
  BookOpen,
  Instagram,
} from "lucide-react";
import {
  PSI_PROFILE,
  FORMATIONS,
  PILLARS,
  SPECIALTIES,
  ABOUT_STORY_PARAGRAPHS,
  FAQS,
  getWhatsAppUrl,
} from "@/lib/constants";
import {
  fetchPublishedPosts,
  fetchApprovedTestimonials,
} from "@/lib/blog-service";
import { WhatsAppCtaButton } from "@/components/WhatsAppCta";

export const revalidate = 60;

/**
 * Homepage containing all 7 strategic sections inspired by the reference site's conversion architecture,
 * uniquely styled in the Botanical Sage, Petrol, Warm Linen & Bronze palette.
 */
export default async function HomePage(): Promise<React.ReactElement> {
  const [posts, testimonials] = await Promise.all([
    fetchPublishedPosts(),
    fetchApprovedTestimonials(),
  ]);

  const latestPosts = posts.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* =====================================================================
          SECTION 1: HERO BANNER (#home)
      ====================================================================== */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-b from-sand-100 via-sand-50 to-sage-50/60 pt-10 pb-20 lg:py-20 border-b border-sand-200"
      >
        {/* Decorative organic background shapes */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-sage-200/40 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-bronze-400/15 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left/Top on Mobile: Portrait Composition (5 cols) */}
            <div className="lg:col-span-5 order-1">
              <div className="relative mx-auto max-w-md">
                {/* Architectural frame accent */}
                <div className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-tr from-sage-500/25 via-bronze-400/25 to-transparent -rotate-2" />
                <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-card bg-sand-200 aspect-[4/5]">
                  <Image
                    src="/images/isabelle-poltrona.jpg"
                    alt="Psicóloga Isabelle Momesso - CRP 06/85692 em Sorocaba e Online"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Floating Credential Badge */}
                <div className="absolute -bottom-5 left-4 right-4 sm:left-6 sm:right-6 bg-petrol-900/95 backdrop-blur-md text-sand-50 px-5 py-3.5 rounded-2xl shadow-xl border border-bronze-400/30 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-bronze-400 font-semibold">
                      Registro Profissional Ativo
                    </p>
                    <p className="font-serif text-lg font-bold text-white">
                      {PSI_PROFILE.crp} • TCC
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-sage-600/40 border border-bronze-400/50 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-bronze-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Hero Value Proposition & Direct Conversion (7 cols) */}
            <div className="lg:col-span-7 order-2 space-y-6 pt-4 lg:pt-0">
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-100 border border-sage-300/80 text-sage-800 text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-bronze-600" />
                <span>Escuta, Empatia, Ciência e Propósito</span>
              </div>

              <div className="space-y-2">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-petrol-900 tracking-tight leading-[1.1]">
                  Psicóloga Isabelle Momesso
                </h1>
                <p className="text-lg sm:text-2xl font-bold text-sage-600">
                  {PSI_PROFILE.crp} <span className="text-bronze-500 mx-1.5">|</span>{" "}
                  {PSI_PROFILE.approach}
                </p>
              </div>

              <p className="text-base sm:text-lg text-sage-800/90 leading-relaxed max-w-2xl">
                Um espaço seguro de acolhimento e transformação para ajudar você a
                compreender padrões de pensamento, desenvolver{" "}
                <strong className="text-petrol-900">autonomia emocional</strong>,
                construir <strong className="text-petrol-900">limites sem culpa</strong>{" "}
                e viver com mais equilíbrio.
              </p>

              {/* Value Bullets (mirroring the reference site's clarity + expanded audience) */}
              <ul className="space-y-3 text-sm sm:text-base text-petrol-900 font-medium">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                  <span>
                    Atendimentos particulares com escuta acolhedora, sem julgamentos e
                    baseados em evidências científicas (TCC).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Público atendido:</strong> Adolescentes, Adultos, Idosos e
                    Casais.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Consultas presenciais em Sorocaba/SP</strong> (Clínica
                    Almenara – Vila Hortência, com estacionamento e sigilo acústico).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Consultas online por videochamada</strong> para todo o
                    Brasil e brasileiros que moram no exterior.
                  </span>
                </li>
              </ul>

              {/* Audience & Modality Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-sand-300 text-xs font-semibold text-petrol-900 shadow-sm">
                  <Users className="w-3.5 h-3.5 text-sage-600" />
                  Individual, Casal e Família
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-sand-300 text-xs font-semibold text-petrol-900 shadow-sm">
                  <Globe2 className="w-3.5 h-3.5 text-sage-600" />
                  Presencial Sorocaba & Online Exterior
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-sand-300 text-xs font-semibold text-petrol-900 shadow-sm">
                  <Clock className="w-3.5 h-3.5 text-sage-600" />
                  Seg a Sex • 8h às 20h
                </span>
              </div>

              {/* Primary CTA */}
              <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-4">
                <WhatsAppCtaButton
                  label="AGENDAR CONSULTA"
                  subtext="Atendimento rápido pelo WhatsApp"
                />
                <Link
                  href="/valor-da-consulta"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-sage-600/30 hover:border-sage-600 text-petrol-900 font-semibold text-sm hover:bg-sage-50 transition-all"
                >
                  <span>Como funciona e Reembolso</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: FORMAÇÃO ACADÊMICA E QUALIFICAÇÕES
      ====================================================================== */}
      <section className="relative bg-petrol-900 text-sand-50 py-20 overflow-hidden">
        {/* Top wave/curve divider effect */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs uppercase tracking-widest text-bronze-400 font-semibold">
              Qualificação Técnica e Trajetória Humana
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Formação e Especializações
            </h2>
            <p className="text-sand-200/85 text-sm sm:text-base">
              Constante aprimoramento científico aliado a anos de experiência prática no
              cuidado e acolhimento de pessoas e famílias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {FORMATIONS.map((item, idx) => (
              <div
                key={item.title}
                className={`p-6 rounded-2xl bg-petrol-950/75 border border-white/10 hover:border-bronze-400/50 transition-all shadow-lg flex items-start gap-4 ${
                  idx === FORMATIONS.length - 1 ? "md:col-span-2" : ""
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-sage-600/30 border border-bronze-400/40 flex items-center justify-center shrink-0 mt-0.5">
                  <GraduationCap className="w-5 h-5 text-bronze-400" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-bronze-400 font-semibold">
                    {item.institution}
                  </p>
                  <p className="text-sm text-sand-200/85 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <WhatsAppCtaButton label="AGENDAR CONSULTA" />
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: PILARES DO ATENDIMENTO & DEPOIMENTOS DE PACIENTES
      ====================================================================== */}
      <section className="bg-sage-800 text-sand-50 py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs uppercase tracking-widest text-bronze-400 font-semibold">
              Compromisso Ético e Acolhimento
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              O que você encontra em nossas sessões?
            </h2>
            <p className="text-sand-100/85 text-sm sm:text-base">
              Cada consulta é valorizada como um momento único de escuta ativa,
              respeito à sua individualidade e construção de caminhos reais.
            </p>
          </div>

          {/* 4 Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white text-petrol-900 p-6 rounded-2xl shadow-card border border-sand-200 flex flex-col justify-between hover:-translate-y-1 transition-transform"
              >
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-[11px] uppercase tracking-widest text-sage-600 font-bold">
                    {pillar.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-petrol-900">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-sage-800 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-sand-200 flex items-center justify-between text-xs text-sage-600 font-semibold">
                  <span>Psicóloga Isabelle Momesso</span>
                  <span>{PSI_PROFILE.crp}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Testimonials Carousel/Grid (Appears automatically when added in /admin) */}
          {testimonials.length > 0 && (
            <div className="mt-14 pt-12 border-t border-white/15">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-center text-white mb-8">
                Relatos e Avaliações de Pacientes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {testimonials.map((t) => (
                  <div
                    key={t.id}
                    className="bg-petrol-950/80 border border-bronze-400/30 p-6 rounded-2xl space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-sage-600 text-white font-bold flex items-center justify-center text-sm">
                          {t.patient_initials}
                        </div>
                        <div>
                          <p className="font-semibold text-white text-sm">
                            {t.patient_label}
                          </p>
                          <p className="text-xs text-bronze-400">{t.modality}</p>
                        </div>
                      </div>
                      <div className="flex text-amber-400">
                        {[...Array(t.rating)].map((_, idx) => (
                          <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-sand-100/90 italic leading-relaxed">
                      “{t.content}”
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-center mt-8">
            <WhatsAppCtaButton label="AGENDAR CONSULTA" />
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: PRINCIPAIS DEMANDAS / ÁREAS DE ATUAÇÃO (#especialidades)
      ====================================================================== */}
      <section
        id="especialidades"
        className="bg-sand-100 py-20 border-b border-sand-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs uppercase tracking-widest text-sage-600 font-bold">
              Como Posso Te Ajudar
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-petrol-900">
              Principais Demandas Atendidas
            </h2>
            <p className="text-sage-800 text-sm sm:text-base">
              Conheça as principais questões emocionais, comportamentais e relacionais
              que trabalhamos no consultório sob a perspectiva da Terapia
              Cognitivo-Comportamental (TCC).
            </p>
          </div>

          {/* Alternating high-contrast editorial cards inspired by the reference site's pathology cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
            {SPECIALTIES.map((item, index) => {
              const isDarkCard = index % 2 === 1;
              return (
                <div
                  key={item.id}
                  className={`rounded-3xl p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between border ${
                    isDarkCard
                      ? "bg-petrol-900 text-sand-50 border-petrol-800"
                      : "bg-white text-petrol-900 border-sand-200"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full ${
                          isDarkCard
                            ? "bg-sage-700/60 text-bronze-400 border border-bronze-400/30"
                            : "bg-sage-100 text-sage-700"
                        }`}
                      >
                        {item.badge}
                      </span>
                      <HeartHandshake
                        className={`w-5 h-5 ${
                          isDarkCard ? "text-bronze-400" : "text-sage-600"
                        }`}
                      />
                    </div>

                    <h3
                      className={`font-serif text-2xl font-bold leading-snug ${
                        isDarkCard ? "text-white" : "text-petrol-900"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed ${
                        isDarkCard ? "text-sand-200/90" : "text-sage-800"
                      }`}
                    >
                      {item.description}
                    </p>

                    <ul className="space-y-2 pt-2">
                      {item.symptoms.map((sym) => (
                        <li
                          key={sym}
                          className={`flex items-start gap-2 text-xs font-medium ${
                            isDarkCard ? "text-sand-100" : "text-petrol-900"
                          }`}
                        >
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isDarkCard ? "text-bronze-400" : "text-sage-600"
                            }`}
                          />
                          <span>{sym}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`mt-6 pt-4 border-t flex items-center justify-between ${
                      isDarkCard ? "border-white/10" : "border-sand-200"
                    }`}
                  >
                    <Link
                      href={`/blog/${item.articleSlug}`}
                      className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider hover:underline ${
                        isDarkCard ? "text-bronze-400" : "text-sage-700"
                      }`}
                    >
                      <span>Ler artigo sobre o tema</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={getWhatsAppUrl(
                        `Olá, Isabelle! Vim pelo seu site e gostaria de informações sobre terapia para ${item.title}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${
                        isDarkCard
                          ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                          : "bg-sage-100 hover:bg-sage-200 text-petrol-900"
                      }`}
                    >
                      Agendar
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <WhatsAppCtaButton
              label="AGENDAR CONSULTA"
              subtext="Tire suas dúvidas diretamente comigo pelo WhatsApp"
            />
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: SOBRE A PSICÓLOGA — "QUEM SOU EU?" (#sobre)
      ====================================================================== */}
      <section id="sobre" className="bg-white py-20 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Full Humanized Story (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-widest text-sage-600 font-bold">
                Minha Trajetória e Propósito
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-petrol-900">
                Quem sou eu?
              </h2>

              <div className="space-y-4 text-sage-900/90 text-base leading-relaxed">
                {ABOUT_STORY_PARAGRAPHS.map((paragraph, index) => (
                  <p
                    key={index}
                    className={
                      index === 0
                        ? "font-serif text-xl sm:text-2xl italic font-semibold text-sage-700 border-l-4 border-bronze-500 pl-4 py-1"
                        : ""
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-sand-100 border border-sand-300 space-y-2">
                <p className="text-sm font-medium text-petrol-900">
                  Se este conteúdo chegou até você, espero que este espaço seja um
                  lugar de aprendizado, acolhimento e reflexão. Seja muito
                  bem-vindo(a)!
                </p>
                <p className="font-serif text-lg font-bold text-sage-700">
                  {PSI_PROFILE.name} • {PSI_PROFILE.crp}
                </p>
              </div>

              <div className="pt-2">
                <WhatsAppCtaButton label="AGENDAR CONSULTA" />
              </div>
            </div>

            {/* Right Column: Vertical Photo Showcase (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-card border-4 border-sand-100 aspect-[4/5]">
                <Image
                  src="/images/isabelle-escrevendo.jpg"
                  alt="Psicóloga Isabelle Momesso em seu consultório - Cuidar é Transformar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-sand-100 aspect-[4/4]">
                  <Image
                    src="/images/isabelle-notebook.jpg"
                    alt="Psicóloga Isabelle Momesso - Terapia Online e Presencial"
                    fill
                    sizes="(max-width: 1024px) 50vw, 240px"
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-sand-100 aspect-[4/4]">
                  <Image
                    src="/images/isabelle-consultorio.jpg"
                    alt="Consultório Psicóloga Isabelle Momesso em Sorocaba"
                    fill
                    sizes="(max-width: 1024px) 50vw, 240px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: ÚLTIMOS POSTS DO BLOG
      ====================================================================== */}
      <section className="bg-petrol-900 text-sand-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs uppercase tracking-widest text-bronze-400 font-semibold">
              Conteúdo Educativo & Reflexões
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Últimos Artigos do Blog
            </h2>
            <p className="text-sand-200/85 text-sm sm:text-base">
              Textos escritos com carinho e embasamento na Terapia
              Cognitivo-Comportamental para ajudar você a compreender suas emoções e
              construir uma vida mais leve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {latestPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white text-petrol-900 rounded-3xl overflow-hidden shadow-card flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block relative h-56 overflow-hidden bg-sand-200"
                  >
                    <Image
                      src={post.cover_image || "/images/isabelle-escrevendo.jpg"}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-petrol-900/90 text-bronze-400 text-[11px] font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                  </Link>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-sage-600 font-medium">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Leitura de {post.reading_time} min</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-petrol-900 group-hover:text-sage-600 transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-sm text-sage-800 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-sand-100">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-sage-700 hover:text-petrol-900"
                  >
                    <span>SAIBA MAIS »</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-sage-600 hover:bg-sage-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all"
            >
              <span>IR AO BLOG COMPLETO ({posts.length} ARTIGOS)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6.5: PERGUNTAS FREQUENTES (FAQ)
      ====================================================================== */}
      <section className="bg-sand-50 py-16 border-b border-sand-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs uppercase tracking-widest text-sage-600 font-bold">
              Tire Suas Dúvidas
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-petrol-900">
              Perguntas Frequentes sobre as Sessões
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white rounded-2xl border border-sand-200 p-6 shadow-sm open:shadow-md transition-all"
              >
                <summary className="font-serif text-xl font-bold text-petrol-900 cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-sage-600 group-open:rotate-45 transition-transform text-2xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm sm:text-base text-sage-800 leading-relaxed pt-3 border-t border-sand-100">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: DETALHES PARA CONTATO E MAPA INTERATIVO (#contato)
      ====================================================================== */}
      <section id="contato" className="bg-sand-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Column: Contact Details (6 cols) */}
            <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl shadow-card border border-sand-200 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-sage-600 font-bold">
                  Localização & Agendamento
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-petrol-900">
                  Detalhes para contato
                </h2>
                <p className="text-sm sm:text-base text-sage-800">
                  Se você tem qualquer dúvida ou deseja agendar sua primeira sessão
                  (presencial em Sorocaba ou online), entre em contato:
                </p>

                <ul className="space-y-4 pt-3 text-sm sm:text-base text-petrol-900">
                  <li className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-sage-100 text-sage-700 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-petrol-900">
                        {PSI_PROFILE.clinicName} – Sorocaba/SP
                      </p>
                      <p className="text-sage-800 text-sm">
                        {PSI_PROFILE.addressStreet} – {PSI_PROFILE.addressNeighborhood}{" "}
                        – {PSI_PROFILE.addressZip}
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-petrol-900">WhatsApp Agendamentos</p>
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-semibold hover:underline text-sm"
                      >
                        {PSI_PROFILE.whatsappDisplay} (Clique para iniciar conversa)
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-sage-100 text-sage-700 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-petrol-900">Horário de Atendimento</p>
                      <p className="text-sage-800 text-sm">
                        {PSI_PROFILE.businessHours}
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-sage-100 text-sage-700 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-petrol-900">E-mail Profissional</p>
                      <a
                        href={`mailto:${PSI_PROFILE.email}`}
                        className="text-sage-700 hover:underline text-sm break-all"
                      >
                        {PSI_PROFILE.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-sage-100 text-sage-700 flex items-center justify-center shrink-0">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-petrol-900">Redes Sociais</p>
                      <div className="flex flex-wrap gap-3 text-sm pt-0.5">
                        <a
                          href={PSI_PROFILE.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sage-700 font-medium hover:underline"
                        >
                          Instagram: {PSI_PROFILE.handle}
                        </a>
                        <span>•</span>
                        <a
                          href={PSI_PROFILE.tiktokUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sage-700 font-medium hover:underline"
                        >
                          TikTok: @psibelle10
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <WhatsAppCtaButton label="AGENDAR CONSULTA" className="w-full" />
              </div>
            </div>

            {/* Right Column: Embedded Google Map (6 cols) */}
            <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-card border-4 border-white min-h-[420px] bg-sand-200 flex flex-col">
              <iframe
                title="Mapa de Localização - Clínica Almenara - Psicóloga Isabelle Momesso"
                src={PSI_PROFILE.googleMapsEmbedUrl}
                className="w-full flex-1 min-h-[420px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
