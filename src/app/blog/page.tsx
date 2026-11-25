import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Search, BookOpen, Sparkles, MapPin, Clock, MessageCircle } from "lucide-react";
import { PSI_PROFILE, getWhatsAppUrl } from "@/lib/constants";
import { fetchPublishedPosts } from "@/lib/blog-service";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Blog de Saúde Emocional e Terapia Cognitivo-Comportamental",
  description:
    "Artigos educativos da Psicóloga Isabelle Momesso (CRP 06/85692) sobre limites, dificuldade de dizer não, ansiedade, depressão, TDAH, burnout, relacionamentos e terapia online.",
};

const CATEGORIES = [
  "Todos",
  "Limites e Autonomia",
  "Ansiedade",
  "Psicoterapia e TCC",
  "Relacionamentos e Autoestima",
  "Burnout e Carreira",
  "Depressão",
  "TDAH e Foco",
  "TOC e Ansiedade",
  "Sono e Estresse",
  "Terapia Online",
  "Luto e Transições",
];

/**
 * Blog listing page ('/blog') with animated underline headline, keyword search,
 * category filter pills, 3-column article grid, and updated contact/map footer section.
 */
export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; categoria?: string }>;
}): Promise<React.ReactElement> {
  const resolvedParams = await searchParams;
  const searchQuery = resolvedParams.q || "";
  const selectedCategory = resolvedParams.categoria || "Todos";

  const posts = await fetchPublishedPosts(searchQuery, selectedCategory);

  return (
    <div className="bg-sand-50 min-h-screen flex flex-col justify-between">
      {/* Section 1: Blog Header & Search Bar */}
      <section className="bg-white pt-12 pb-14 border-b border-sand-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sage-100 text-sage-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-bronze-600" />
            Espaço de Aprendizado, Acolhimento e Reflexão
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-petrol-900">
            Blog da Psicóloga Isabelle Momesso
          </h1>

          {/* Animated-style highlighted subtitle */}
          <p className="font-serif text-2xl sm:text-3xl text-sage-800">
            Ajudo você a construir uma vida{" "}
            <span className="relative inline-block font-bold text-sage-700">
              mais leve e consciente
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-2.5 text-bronze-500"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9C55 2 145 2 197 9"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </p>

          {/* Search Form */}
          <form
            action="/blog"
            method="GET"
            className="max-w-2xl mx-auto pt-4 flex items-center"
          >
            <div className="relative w-full">
              <input
                type="search"
                name="q"
                defaultValue={searchQuery}
                placeholder="Pesquisar por tema (ex: limites, culpa, ansiedade, TDAH, burnout, insônia)..."
                className="w-full h-14 pl-5 pr-16 rounded-2xl bg-sand-50 border-2 border-sand-300 text-petrol-900 placeholder-sage-600/70 text-sm sm:text-base focus:outline-none focus:border-sage-600 shadow-inner"
              />
              <button
                type="submit"
                aria-label="Pesquisar no blog"
                className="absolute right-2 top-2 bottom-2 px-4 rounded-xl bg-petrol-900 hover:bg-sage-700 text-white flex items-center justify-center transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              const href =
                cat === "Todos"
                  ? "/blog"
                  : `/blog?categoria=${encodeURIComponent(cat)}`;
              return (
                <Link
                  key={cat}
                  href={href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    active
                      ? "bg-petrol-900 text-white shadow-sm"
                      : "bg-sand-100 text-sage-800 hover:bg-sage-200/70"
                  }`}
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Paginated / Filtered 3-Column Article Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {(searchQuery || selectedCategory !== "Todos") && (
          <div className="mb-8 flex items-center justify-between flex-wrap gap-4 bg-white p-4 rounded-2xl border border-sand-200">
            <p className="text-sm text-sage-800">
              Exibindo <strong>{posts.length}</strong> artigo(s)
              {selectedCategory !== "Todos" && (
                <>
                  {" "}
                  na categoria <strong>“{selectedCategory}”</strong>
                </>
              )}
              {searchQuery && (
                <>
                  {" "}
                  para a busca <strong>“{searchQuery}”</strong>
                </>
              )}
            </p>
            <Link
              href="/blog"
              className="text-xs font-bold text-sage-700 hover:underline uppercase tracking-wider"
            >
              Limpar filtros ×
            </Link>
          </div>
        )}

        {posts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-sand-200 max-w-xl mx-auto space-y-4">
            <h2 className="font-serif text-2xl font-bold text-petrol-900">
              Nenhum artigo encontrado para essa busca
            </h2>
            <p className="text-sm text-sage-800">
              Tente buscar por outra palavra-chave ou visualize todos os nossos artigos
              sobre saúde emocional e Terapia Cognitivo-Comportamental.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-petrol-900 text-white text-xs font-bold uppercase tracking-wider"
            >
              Ver todos os artigos
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden shadow-card border border-sand-200 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
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
                    <div className="flex items-center justify-between text-xs text-sage-600 font-medium">
                      <span className="inline-flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        Leitura de {post.reading_time} min
                      </span>
                      <span>{PSI_PROFILE.crp}</span>
                    </div>

                    <h2 className="font-serif text-2xl font-bold text-petrol-900 group-hover:text-sage-600 transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-sm text-sage-800 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-sand-100 flex items-center justify-between">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-extrabold uppercase tracking-wider text-sage-700 hover:text-petrol-900"
                  >
                    LER ARTIGO COMPLETO »
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Section 3: Consistent Contact Details & Map (Fixing the reference site's outdated address bug) */}
      <section className="bg-sand-100 py-16 border-t border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-serif text-3xl font-bold text-petrol-900">
              Detalhes para contato
            </h2>
            <p className="text-sm text-sage-800">
              Agende sua sessão presencial em Sorocaba ({PSI_PROFILE.clinicName}) ou
              online para todo o Brasil e exterior:
            </p>
            <ul className="space-y-2.5 text-sm text-petrol-900">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-sage-600 shrink-0" />
                <span>{PSI_PROFILE.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sage-600 shrink-0" />
                <span>{PSI_PROFILE.businessHours}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-whatsapp-deep shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-whatsapp-deep hover:underline"
                >
                  {PSI_PROFILE.whatsappDisplay} (WhatsApp)
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-6 h-64 rounded-2xl overflow-hidden border-2 border-white shadow">
            <iframe
              title="Localização Clínica Almenara"
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
