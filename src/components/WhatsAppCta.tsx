"use client";

import React, { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { PSI_PROFILE, getWhatsAppUrl } from "@/lib/constants";

/**
 * Registers the PWA Service Worker and displays a high-conversion floating WhatsApp button.
 * On mobile screens, fades in smoothly after scrolling past the initial photo fold so it never
 * covers the Hero credential badge, while footer bottom padding keeps footer links 100% unobstructed.
 */
export function FloatingWhatsAppAndPwa(): React.ReactElement {
  const [scrolledPastFold, setScrolledPastFold] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .catch((err) => console.warn("Service worker registration skipped:", err));
    }

    const handleScroll = (): void => {
      setScrolledPastFold(window.scrollY > 180);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex items-center gap-2 transition-all duration-300 ${
        scrolledPastFold
          ? "opacity-100 translate-y-0"
          : "opacity-0 pointer-events-none translate-y-3 sm:opacity-100 sm:pointer-events-auto sm:translate-y-0"
      }`}
    >
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar sessão pelo WhatsApp"
        className="group flex items-center gap-2.5 bg-emerald-700 hover:bg-emerald-600 text-white pl-4 pr-5 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current shrink-0" />
        <div className="flex flex-col text-left leading-tight whitespace-nowrap">
          <span className="text-[10px] uppercase tracking-wider text-emerald-50 font-semibold">
            Online e Presencial
          </span>
          <span className="text-xs sm:text-sm font-bold">Agendar Sessão</span>
        </div>
      </a>
    </div>
  );
}

/**
 * Reusable conversion CTA button with WCAG AA high contrast (`bg-emerald-700`).
 */
export function WhatsAppCtaButton({
  label = "AGENDAR CONSULTA",
  subtext,
  customMessage,
  className = "",
}: {
  label?: string;
  subtext?: string;
  customMessage?: string;
  className?: string;
}): React.ReactElement {
  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <a
        href={getWhatsAppUrl(customMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="whitespace-nowrap inline-flex items-center justify-center gap-3 px-8 py-4 rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md bg-gradient-to-b from-emerald-700 to-teal-800 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-base sm:text-lg tracking-wide shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.99] transition-all duration-300"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0" />
        <span>{label}</span>
      </a>
      {subtext && (
        <span className="mt-2 text-xs text-sage-700 font-medium text-center">
          {subtext} • {PSI_PROFILE.whatsappDisplay}
        </span>
      )}
    </div>
  );
}
