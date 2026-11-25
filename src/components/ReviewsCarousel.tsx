"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, ShieldCheck, Quote } from "lucide-react";
import { PSI_PROFILE, PILLARS } from "@/lib/constants";
import type { Testimonial } from "@/lib/blog-service";

interface CarouselCardItem {
  id: string;
  initials: string;
  title: string;
  subtitle: string;
  body: string;
  isPatientReview: boolean;
}

/**
 * Interactive Carousel of Patient Reviews & Clinical Pillars (styled after verified
 * Trustindex / Google Reviews widgets with a left summary badge + sliding cards with arrows & dots).
 */
export function ReviewsCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}): React.ReactElement {
  const items: CarouselCardItem[] = [
    ...testimonials.map((t) => ({
      id: `rev-${t.id}`,
      initials: t.patient_initials,
      title: t.patient_label,
      subtitle: t.modality,
      body: `“${t.content}”`,
      isPatientReview: true,
    })),
    ...PILLARS.map((p, idx) => ({
      id: `pil-${idx}`,
      initials: "IM",
      title: p.title,
      subtitle: p.subtitle,
      body: p.description,
      isPatientReview: false,
    })),
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const total = items.length;

  const nextSlide = useCallback((): void => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback((): void => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused || total <= 1) return;
    const timer = setInterval(nextSlide, 5500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide, total]);

  // Show 2 cards side-by-side on desktop (from currentIndex)
  const visibleCards = [
    items[currentIndex % total],
    items[(currentIndex + 1) % total],
  ];

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left Trust Summary Card (4 cols) */}
      <div className="lg:col-span-4 bg-petrol-950/90 border border-bronze-400/35 rounded-3xl p-7 flex flex-col justify-between text-center lg:text-left shadow-xl">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-700/50 text-bronze-400 text-[11px] font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            Ética, Ciência & Escuta
          </span>

          <h3 className="font-serif text-3xl font-bold text-white">EXCELENTE</h3>

          <div className="flex items-center justify-center lg:justify-start gap-1 text-amber-400">
            {[...Array(5)].map((_, idx) => (
              <Star key={idx} className="w-5 h-5 fill-current" />
            ))}
          </div>

          <p className="text-sm text-sand-100/90 leading-relaxed">
            {testimonials.length > 0
              ? `Com base em relatos reais de pacientes e nos 4 pilares éticos do consultório (${PSI_PROFILE.crp}).`
              : `Acompanhamento pautado nos 4 pilares da Terapia Cognitivo-Comportamental e no sigilo ético (${PSI_PROFILE.crp}).`}
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {items.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? "w-6 bg-bronze-400"
                    : "w-2 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Anterior"
              className="w-9 h-9 rounded-full bg-petrol-900 hover:bg-sage-600 border border-white/15 text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Próximo"
              className="w-9 h-9 rounded-full bg-petrol-900 hover:bg-sage-600 border border-white/15 text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Sliding Cards Area (8 cols -> 2 cards on md+) */}
      <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleCards.map((card, idx) => (
          <div
            key={`${card.id}-${idx}`}
            className={`bg-white text-petrol-900 p-7 rounded-3xl shadow-card border border-sand-200 flex flex-col justify-between transition-all duration-300 ${
              idx === 1 ? "hidden md:flex" : "flex"
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-petrol-900 text-bronze-400 font-serif font-bold text-base flex items-center justify-center shrink-0">
                    {card.initials}
                  </div>
                  <div>
                    <p className="font-bold text-petrol-900 text-sm leading-tight">
                      {card.title}
                    </p>
                    <p className="text-[11px] uppercase tracking-wider text-sage-700 font-bold mt-0.5">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
                <Quote className="w-6 h-6 text-bronze-400/50 shrink-0" />
              </div>

              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, sIdx) => (
                  <Star key={sIdx} className="w-4 h-4 fill-current" />
                ))}
                <span className="ml-1.5 text-[11px] font-semibold text-sage-700">
                  {card.isPatientReview ? "Relato Verificado" : "Pilar Clínico"}
                </span>
              </div>

              <p
                className={`text-sm sm:text-base text-sage-900/90 leading-relaxed ${
                  card.isPatientReview ? "italic" : ""
                }`}
              >
                {card.body}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-sand-200 flex items-center justify-between text-xs text-sage-700 font-semibold">
              <span>{PSI_PROFILE.name}</span>
              <span>{PSI_PROFILE.crp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
