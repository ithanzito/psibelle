"use client";

import React, { useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { PSI_PROFILE, getWhatsAppUrl } from "@/lib/constants";

/**
 * Registers the PWA Service Worker and displays a high-conversion floating WhatsApp button
 * optimized for mobile Google Ads visitors.
 */
export function FloatingWhatsAppAndPwa(): React.ReactElement {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .catch((err) => console.warn("Service worker registration skipped:", err));
    }
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar sessão pelo WhatsApp"
        className="group flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white pl-4 pr-5 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] uppercase tracking-wider text-emerald-100 font-medium">
            Atendimento Online e Presencial
          </span>
          <span className="text-xs sm:text-sm font-bold">
            Agendar Sessão
          </span>
        </div>
      </a>
    </div>
  );
}

/**
 * Reusable conversion CTA button matching the high-converting pattern of the reference site,
 * styled with our bespoke botanical emerald/teal identity.
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
        className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md bg-gradient-to-b from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-base sm:text-lg tracking-wide shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.99] transition-all duration-300"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0" />
        <span>{label}</span>
      </a>
      {subtext && (
        <span className="mt-2 text-xs text-sage-700 font-medium">
          {subtext} • {PSI_PROFILE.whatsappDisplay}
        </span>
      )}
    </div>
  );
}
