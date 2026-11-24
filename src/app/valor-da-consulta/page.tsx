import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  Clock,
  CheckCircle2,
  FileCheck2,
  CreditCard,
  Video,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PSI_PROFILE, FAQS } from "@/lib/constants";
import { WhatsAppCtaButton } from "@/components/WhatsAppCta";

export const metadata: Metadata = {
  title: "Valor da Consulta, Como Funciona e Reembolso de Convênio",
  description:
    "Saiba como funciona a sessão particular com a Psicóloga Isabelle Momesso (CRP 06/85692), pacote mensal de 4 sessões com desconto e passo a passo para pedir Reembolso no Plano de Saúde.",
};

/**
 * Page '/valor-da-consulta' — Captures high-intent search queries for session pricing
 * while strictly adhering to CFP ethics (Art. 20), explaining the value of private care,
 * the 4-session monthly package discount, online therapy, and health insurance reimbursement.
 */
export default function ValorDaConsultaPage(): React.ReactElement {
  return (
    <div className="bg-gradient-to-b from-white via-sand-50 to-sage-100/70 pb-20">
      {/* Page Hero */}
      <section className="pt-12 pb-16 border-b border-sand-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sage-100 text-sage-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-bronze-600" />
            Atendimento Particular Humanizado • {PSI_PROFILE.crp}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-petrol-900">
            Valor da Consulta
          </h1>
          <p className="text-base sm:text-lg text-sage-800 max-w-2xl mx-auto leading-relaxed">
            Entenda como funciona o investimento na sua saúde emocional, as modalidades
            de pagamento (Sessão Avulsa ou Pacote Mensal) e como utilizar o{" "}
            <strong className="text-petrol-900">Reembolso do seu Plano de Saúde</strong>.
          </p>
        </div>
      </section>

      {/* Block 1: Why Private Care & Session Details (Mirroring Reference Structure) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-3xl shadow-card border border-sand-200 p-8 sm:p-12 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-petrol-900 leading-tight">
                Por que o acompanhamento é exclusivamente particular?
              </h2>
              <p className="text-sage-900/90 leading-relaxed">
                O cuidado psicológico, especialmente dentro da{" "}
                <strong>Terapia Cognitivo-Comportamental (TCC)</strong>, exige um padrão
                de qualidade que depende diretamente do{" "}
                <strong>tempo de escuta, acolhimento sem pressa e preparo clínico</strong>{" "}
                para alcançar os melhores resultados.
              </p>
              <p className="text-sage-900/90 leading-relaxed">
                Para garantir essa entrega, as sessões com a{" "}
                <strong>{PSI_PROFILE.name}</strong> são particulares. Assim, o seu
                tratamento segue o ritmo e a profundidade que a sua história merece, sem
                as limitações de tempo impostas pelos atendimentos diretos de convênio.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-sand-50 border border-sand-200 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-petrol-900 text-sm">
                      Duração e Frequência
                    </p>
                    <p className="text-xs text-sage-800 mt-0.5">
                      Sessões de <strong>50 minutos</strong>, habitualmente{" "}
                      <strong>1 vez por semana</strong>.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-sand-50 border border-sand-200 flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-petrol-900 text-sm">
                      Avulsa ou Pacote Mensal
                    </p>
                    <p className="text-xs text-sage-800 mt-0.5">
                      Pagamento via <strong>PIX</strong> por sessão avulsa ou{" "}
                      <strong>Pacote Mensal de 4 sessões com desconto</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-md border-4 border-sand-100 aspect-[4/5]">
                <Image
                  src="/images/isabelle-escrevendo.jpg"
                  alt="Sessão de Psicoterapia com a Psicóloga Isabelle Momesso"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-sand-200 text-center space-y-3">
            <p className="text-xs text-sage-700 max-w-xl mx-auto">
              *Em conformidade com o Código de Ética do Conselho Federal de Psicologia
              (CFP), valores não são exibidos publicamente no site, mas são informados
              imediatamente pelo WhatsApp.
            </p>
            <WhatsAppCtaButton
              label="CONSULTAR VALORES E AGENDAR"
              customMessage="Olá, Isabelle! Vim pela página de Valor da Consulta do seu site e gostaria de saber os valores da sessão avulsa e do pacote mensal."
            />
          </div>
        </div>
      </section>

      {/* Block 2: Health Insurance Reimbursement Guide (Reembolso do Plano de Saúde) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="bg-petrol-900 text-sand-50 rounded-3xl shadow-card p-8 sm:p-12 border border-bronze-400/30 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-700/60 text-bronze-400 text-xs font-bold uppercase tracking-wider">
              <FileCheck2 className="w-3.5 h-3.5" />
              Direito de Livre Escolha
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-snug">
              Uma excelente maneira de realizar sua terapia utilizando seu Plano de Saúde
              é através do{" "}
              <span className="underline decoration-bronze-400 italic text-bronze-400">
                Reembolso da Consulta
              </span>
              .
            </h2>
            <p className="text-sand-200/90 text-sm sm:text-base">
              Através do reembolso, o seu convênio garante a você o direito de escolher a
              psicóloga da sua preferência e receber de volta parte ou a totalidade do
              valor investido.
            </p>
          </div>

          {/* 3-Step Reimbursement Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-petrol-950/80 border border-white/10 p-6 rounded-2xl space-y-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-bronze-500 text-petrol-950 font-extrabold text-sm">
                1
              </span>
              <h3 className="font-serif text-xl font-bold text-white">
                Consulte seu Plano de Saúde
              </h3>
              <p className="text-sm text-sand-200/85 leading-relaxed">
                Entre em contato com o seu <strong>Plano de Saúde</strong> (ou verifique
                no aplicativo do convênio) as regras de reembolso para sessões de
                Psicoterapia. Cada plano possui sua própria tabela e política.
              </p>
            </div>

            <div className="bg-petrol-950/80 border border-white/10 p-6 rounded-2xl space-y-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-bronze-500 text-petrol-950 font-extrabold text-sm">
                2
              </span>
              <h3 className="font-serif text-xl font-bold text-white">
                Solicite o Recibo com CRP
              </h3>
              <p className="text-sm text-sand-200/85 leading-relaxed">
                Ao efetuar o pagamento da sessão ou pacote mensal, emito o{" "}
                <strong>Recibo / Nota Fiscal oficial</strong> contendo todos os dados
                profissionais e o registro ativo (<strong>{PSI_PROFILE.crp}</strong>).
              </p>
            </div>

            <div className="bg-petrol-950/80 border border-white/10 p-6 rounded-2xl space-y-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-bronze-500 text-petrol-950 font-extrabold text-sm">
                3
              </span>
              <h3 className="font-serif text-xl font-bold text-white">
                Receba o Ressarcimento
              </h3>
              <p className="text-sm text-sand-200/85 leading-relaxed">
                Envie o documento pelo aplicativo do seu convênio para receber o
                ressarcimento do valor na sua conta bancária, unindo qualidade clínica e
                economia.
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <WhatsAppCtaButton
              label="AGENDAR CONSULTA"
              customMessage="Olá, Isabelle! Gostaria de saber mais sobre os valores das sessões e como funciona o recibo para reembolso no plano de saúde."
            />
          </div>
        </div>
      </section>

      {/* Block 3: Online Therapy via WhatsApp Video */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="bg-white rounded-3xl shadow-card border border-sand-200 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-md border-4 border-sand-100 aspect-[4/5]">
                <Image
                  src="/images/isabelle-notebook.jpg"
                  alt="Terapia Online por Videochamada com a Psicóloga Isabelle Momesso"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sage-600">
                <Video className="w-4 h-4" />
                <span>Presencial em Sorocaba ou Online sem Fronteiras</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-petrol-900">
                Como funciona a Terapia Online?
              </h2>
              <p className="text-sage-800 leading-relaxed text-sm sm:text-base">
                Além do atendimento presencial na <strong>Clínica Almenara</strong> em
                Sorocaba/SP, realizo sessões online para pacientes em qualquer cidade do
                Brasil e para <strong>brasileiros que moram no exterior</strong>.
              </p>
              <ul className="space-y-2.5 text-sm text-petrol-900">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0 mt-1" />
                  <span>
                    <strong>Praticidade pelo WhatsApp Vídeo:</strong> A sessão acontece
                    por videochamada diretamente pelo WhatsApp no seu horário reservado.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0 mt-1" />
                  <span>
                    <strong>Mesma eficácia e duração:</strong> 50 minutos de escuta
                    focada com todas as ferramentas da Terapia Cognitivo-Comportamental.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0 mt-1" />
                  <span>
                    <strong>Sigilo ético e recibo para reembolso:</strong> Total
                    conformidade com o Conselho Federal de Psicologia ({PSI_PROFILE.crp}
                    ).
                  </span>
                </li>
              </ul>

              <div className="pt-3">
                <WhatsAppCtaButton label="AGENDAR SESSÃO ONLINE OU PRESENCIAL" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 4: FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <h2 className="font-serif text-3xl font-bold text-center text-petrol-900 mb-8">
          Dúvidas Frequentes sobre Valores e Sessões
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group bg-white rounded-2xl border border-sand-200 p-6 shadow-sm"
            >
              <summary className="font-serif text-xl font-bold text-petrol-900 cursor-pointer list-none flex items-center justify-between gap-4">
                <span>{faq.question}</span>
                <span className="text-sage-600 group-open:rotate-45 transition-transform text-2xl">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm sm:text-base text-sage-800 leading-relaxed pt-3 border-t border-sand-100">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
