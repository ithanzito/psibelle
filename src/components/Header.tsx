"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Search, MessageCircle, MapPin, ShieldCheck } from "lucide-react";
import { PSI_PROFILE, getWhatsAppUrl } from "@/lib/constants";

const NAV_ITEMS = [
  { label: "Início", href: "/" },
  { label: "Sobre Mim", href: "/#sobre" },
  { label: "Especialidades", href: "/#especialidades" },
  { label: "Valor da Consulta", href: "/valor-da-consulta" },
  { label: "O Consultório", href: "/o-consultorio" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/#contato" },
];

/**
 * Global sticky Header with single-line guaranteed alignment (`whitespace-nowrap`),
 * expandable search bar drawer, and high-contrast WhatsApp CTA.
 */
export function Header(): React.ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const pathname = usePathname();
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      router.push("/blog");
      setSearchOpen(false);
      return;
    }
    router.push(`/blog?q=${encodeURIComponent(searchTerm.trim())}`);
    setSearchOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-petrol-900/95 backdrop-blur-md text-sand-50 border-b border-bronze-500/20 shadow-md">
      {/* Top micro bar for credentials & location */}
      <div className="bg-petrol-950 text-sand-200 text-xs py-1.5 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 font-semibold text-bronze-400 whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              {PSI_PROFILE.crp}
            </span>
            <span className="hidden sm:inline text-white/25">|</span>
            <span className="hidden sm:inline text-sand-200/90">
              {PSI_PROFILE.approach}
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1 text-sand-200/90">
              <MapPin className="w-3.5 h-3.5 text-bronze-400 shrink-0" />
              <span>
                Presencial em Sorocaba (Clínica Almenara) & Online (Brasil e Exterior)
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Single-Row Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Column 1: Logo Monogram & Brand Name (Never wraps) */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none shrink-0"
            aria-label="Página Inicial - Psicóloga Isabelle Momesso"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-sage-600 to-petrol-950 border-2 border-bronze-400/80 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform shrink-0">
              <span className="font-serif text-lg font-bold tracking-wider text-sand-50">
                IM
              </span>
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-sand-50 leading-none">
                Isabelle Momesso
              </span>
              <span className="text-[11px] uppercase tracking-widest text-bronze-400 font-semibold mt-1 leading-none">
                Psicóloga • {PSI_PROFILE.crp}
              </span>
            </div>
          </Link>

          {/* Column 2: Desktop Menu Links (Single line guaranteed) */}
          <nav
            className="hidden xl:flex items-center gap-5 2xl:gap-7 shrink-0"
            aria-label="Menu Principal"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : !item.href.includes("#") && pathname.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`whitespace-nowrap text-sm font-medium transition-colors py-1.5 border-b-2 ${
                    isActive
                      ? "text-bronze-400 border-bronze-400"
                      : "text-sand-100/95 border-transparent hover:text-bronze-400 hover:border-bronze-400/50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Column 3: Compact Search Toggle + Direct Single-Line WhatsApp CTA */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label="Abrir busca de artigos no blog"
              title="Pesquisar artigos no blog"
              className="w-10 h-10 rounded-full bg-petrol-950/90 hover:bg-petrol-800 border border-sage-700/70 text-bronze-400 hover:text-sand-50 flex items-center justify-center transition-colors"
            >
              {searchOpen ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current shrink-0" />
              <span>{PSI_PROFILE.whatsappDisplay}</span>
            </a>
          </div>

          {/* Mobile / Tablet Actions */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar pelo WhatsApp"
              className="lg:hidden whitespace-nowrap inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold shadow"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
              <span>Agendar</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-sand-100 hover:bg-petrol-800 focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Desktop Search Bar */}
      {searchOpen && (
        <div className="hidden lg:block bg-petrol-950 border-t border-white/10 py-3 px-4">
          <form
            onSubmit={handleSearchSubmit}
            className="max-w-2xl mx-auto flex items-center gap-2"
          >
            <div className="relative flex-1">
              <input
                type="search"
                autoFocus
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquisar tema ou sintoma no blog (ex: limites, culpa, ansiedade, burnout, TDAH)..."
                aria-label="Pesquisar artigos no blog"
                className="w-full pl-4 pr-10 py-2.5 text-sm rounded-full bg-petrol-900 border border-sage-700 text-sand-50 placeholder-sand-300/70 focus:outline-none focus:border-bronze-400"
              />
              <button
                type="submit"
                aria-label="Executar busca"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-bronze-400 hover:text-white"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-full bg-sage-600 hover:bg-sage-500 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Buscar
            </button>
          </form>
        </div>
      )}

      {/* Mobile & Tablet Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-petrol-950 border-t border-white/10 px-4 pt-4 pb-6 space-y-4">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Pesquisar sintomas ou artigos..."
              className="w-full pl-4 pr-11 py-2.5 text-sm rounded-full bg-petrol-900 border border-sage-700 text-sand-50 placeholder-sand-300/60 focus:outline-none focus:border-bronze-400"
            />
            <button
              type="submit"
              aria-label="Buscar"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-bronze-400"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          <nav className="grid grid-cols-1 gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-sand-100 hover:bg-petrol-800 hover:text-bronze-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>AGENDAR SESSÃO • {PSI_PROFILE.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
