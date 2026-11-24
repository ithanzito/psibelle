import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  Coffee,
  VolumeX,
  Car,
  HeartHandshake,
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { PSI_PROFILE, CLINIC_FEATURES } from "@/lib/constants";
import { WhatsAppCtaButton } from "@/components/WhatsAppCta";

export const metadata: Metadata = {
  title: "O Consultório – Clínica Almenara em Sorocaba",
  description:
    "Conheça o consultório da Psicóloga Isabelle Momesso (CRP 06/85692) na Clínica Almenara em Sorocaba/SP. Sala de espera com café e lanches, sigilo acústico e estacionamento.",
};

const FEATURE_ICONS = [Coffee, VolumeX, Car, HeartHandshake];

/**
 * Page '/o-consultorio' — Presents the physical office at Clínica Almenara in Sorocaba/SP,
 * featuring the exact welcoming copy provided by Isabelle Momesso, photo showcase, and Google Maps.
 */
export default function OConsultorioPage(): React.ReactElement {
  return (
    <div className="bg-gradient-to-b from-white via-sand-50 to-sage-100/60 pb-20">
      {/* Hero Header */}
      <section className="pt-12 pb-16 border-b border-sand-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sage-100 text-sage-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-bronze-600" />
            {PSI_PROFILE.clinicName} • Sorocaba/SP
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-petrol-900">
            Um espaço pensado para acolher você
          </h1>
          <p className="font-serif text-xl sm:text-2xl italic text-sage-700 max-w-2xl mx-auto">
            “Um espaço onde você se sente acolhido, com conforto, privacidade e cuidado
            em cada detalhe.”
          </p>
        </div>
      </section>

      {/* Main Story & Atmosphere Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-3xl shadow-card border border-sand-200 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Text Column (7 cols) */}
            <div className="lg:col-span-7 space-y-5 text-sage-900/90 text-base leading-relaxed">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-petrol-900">
                Conforto, Privacidade e Sigilo desde a sua chegada
              </h2>

              <p>
                Meu consultório particular na <strong>{PSI_PROFILE.clinicName}</strong>{" "}
                foi cuidadosamente planejado para oferecer conforto, privacidade e
                acolhimento desde o primeiro momento em que você chega.
              </p>

              <p>
                Contamos com uma{" "}
                <strong>
                  sala de espera confortável, café, água e pequenos lanches
                </strong>{" "}
                para tornar sua experiência ainda mais agradável. Durante a sessão, você
                também pode desfrutar de um café fresquinho, se desejar.
              </p>

              <p>
                O ambiente oferece <strong>sigilo acústico</strong>, respeitando sua
                privacidade e garantindo a discrição necessária para que você possa falar
                livremente e se sentir seguro(a).
              </p>

              <p>
                Além disso, dispomos de{" "}
                <strong>estacionamento e fácil acesso</strong> na Vila Hortência, para
                proporcionar mais praticidade e tranquilidade no seu atendimento.
              </p>

              <p className="font-serif text-xl italic font-semibold text-sage-700 border-l-4 border-bronze-500 pl-4 py-1">
                Mais do que um consultório, um espaço preparado para receber você com
                respeito, cuidado e acolhimento. Aqui, você encontra um lugar onde pode
                ser você, no seu tempo e sem julgamentos.
              </p>

              <div className="pt-3">
                <WhatsAppCtaButton label="AGENDAR SESSÃO PRESENCIAL" />
              </div>
            </div>

            {/* Right Image Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-card border-4 border-sand-100 aspect-[3/4]">
                <Image
                  src="/images/isabelle-consultorio.jpg"
                  alt="Psicóloga Isabelle Momesso em seu consultório na Clínica Almenara em Sorocaba"
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Comfort & Privacy Highlights */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-petrol-900">
            Diferenciais do Nosso Espaço
          </h2>
          <p className="text-sm sm:text-base text-sage-800 mt-2">
            Cada detalhe foi desenhado para que os seus 50 minutos semanais sejam uma
            pausa restauradora na sua rotina.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLINIC_FEATURES.map((feat, idx) => {
            const IconComponent = FEATURE_ICONS[idx] || HeartHandshake;
            return (
              <div
                key={feat.title}
                className="bg-white rounded-2xl p-6 shadow-soft border border-sand-200 space-y-3 hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 rounded-2xl bg-sage-100 text-sage-700 flex items-center justify-center">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-petrol-900">
                  {feat.title}
                </h3>
                <p className="text-sm text-sage-800 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Gallery Showcase of the Environment */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="bg-petrol-900 text-sand-50 rounded-3xl p-8 sm:p-12 shadow-card space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-bronze-400 font-semibold">
              Ambiente Acolhedor
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Conheça um pouquinho do nosso ambiente
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/15 aspect-[4/5]">
              <Image
                src="/images/isabelle-poltrona.jpg"
                alt="Poltrona e ambiente de atendimento - Psicóloga Isabelle Momesso"
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/15 aspect-[4/5]">
              <Image
                src="/images/isabelle-escrevendo.jpg"
                alt="Mesa de atendimento - Escuta, Acolhe, Transforma"
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/15 aspect-[4/5]">
              <Image
                src="/images/isabelle-notebook.jpg"
                alt="Espaço de Psicoterapia Presencial e Online - Escuta, Empatia, Ciência e Propósito"
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center pt-2">
            <WhatsAppCtaButton label="AGENDAR CONSULTA" />
          </div>
        </div>
      </section>

      {/* Location & Map Block */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="bg-white rounded-3xl shadow-card border border-sand-200 p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-widest text-sage-600 font-bold">
              Como Chegar
            </span>
            <h2 className="font-serif text-3xl font-bold text-petrol-900">
              {PSI_PROFILE.clinicName}
            </h2>
            <div className="space-y-3 text-sm text-sage-800">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Endereço:</strong> {PSI_PROFILE.addressStreet} –{" "}
                  {PSI_PROFILE.addressNeighborhood}, {PSI_PROFILE.addressCityState} (
                  {PSI_PROFILE.addressZip})
                </span>
              </p>
              <p className="flex items-start gap-2.5">
                <Clock className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Horários:</strong> {PSI_PROFILE.businessHours}
                </span>
              </p>
            </div>

            <div className="pt-2">
              <a
                href={PSI_PROFILE.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sage-100 hover:bg-sage-200 text-petrol-900 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Abrir rota no Google Maps / Waze</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-2xl overflow-hidden border-2 border-sand-200 h-80">
            <iframe
              title="Localização Clínica Almenara Sorocaba"
              src={PSI_PROFILE.googleMapsEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
