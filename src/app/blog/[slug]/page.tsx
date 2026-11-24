import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BookOpen,
  Calendar,
  ArrowLeft,
  MessageCircle,
  ShieldCheck,
  ListChecks,
  Tag,
} from "lucide-react";
import { PSI_PROFILE, getWhatsAppUrl } from "@/lib/constants";
import { fetchPostBySlug, fetchPublishedPosts } from "@/lib/blog-service";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { WhatsAppCtaButton } from "@/components/WhatsAppCta";

export const revalidate = 30;

interface HeadingItem {
  id: string;
  text: string;
  level: 2 | 3;
}

/**
 * Converts a heading title into a URL-safe anchor slug.
 */
function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Extracts H2 and H3 headings from Markdown content to automatically generate the Table of Contents.
 */
function extractHeadings(markdown: string): HeadingItem[] {
  const lines = markdown.split("\n");
  const headings: HeadingItem[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("### ")) {
      const text = trimmed.replace(/^###\s+/, "");
      headings.push({ id: slugifyHeading(text), text, level: 3 });
    } else if (trimmed.startsWith("## ")) {
      const text = trimmed.replace(/^##\s+/, "");
      headings.push({ id: slugifyHeading(text), text, level: 2 });
    }
  }
  return headings;
}

/**
 * Formats inline markdown bold/italic segments safely.
 */
function renderInlineFormatting(text: string): React.ReactNode {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="font-bold text-petrol-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={idx} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part;
  });
}

/**
 * Renders markdown content with automatic interleaved conversion CTAs ("Agende sua consulta!")
 * every 2 major sections — replicating the exact high-converting article template of the reference site.
 */
function renderArticleContentWithInterleavedCtas(
  markdown: string,
  articleTitle: string
): React.ReactNode[] {
  const blocks = markdown.split(/\n\n+/);
  const elements: React.ReactNode[] = [];
  let h2Counter = 0;

  blocks.forEach((rawBlock, index) => {
    const block = rawBlock.trim();
    if (!block) return;

    if (block.startsWith("## ")) {
      h2Counter += 1;
      const text = block.replace(/^##\s+/, "");
      const id = slugifyHeading(text);

      // Insert interleaved CTA before every 2nd H2 (after section 1, 3, 5...)
      if (h2Counter > 1 && h2Counter % 2 === 1) {
        elements.push(
          <div
            key={`cta-${index}`}
            className="my-8 p-6 rounded-2xl bg-sand-100 border border-sand-300 text-center space-y-3"
          >
            <p className="text-sm font-semibold text-petrol-900">
              Identificou-se com esse tema? A psicoterapia pode ajudar você a
              construir caminhos mais leves e saudáveis.
            </p>
            <a
              href={getWhatsAppUrl(
                `Olá, Isabelle! Estava lendo seu artigo "${articleTitle}" e gostaria de informações para agendar uma sessão.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-petrol-900 hover:bg-sage-700 text-white font-bold text-sm shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Agende sua consulta!</span>
            </a>
          </div>
        );
      }

      elements.push(
        <h2
          key={`h2-${index}`}
          id={id}
          className="scroll-mt-28 font-serif text-2xl sm:text-3xl font-bold text-petrol-900 mt-10 mb-4"
        >
          {text}
        </h2>
      );
      return;
    }

    if (block.startsWith("### ")) {
      const text = block.replace(/^###\s+/, "");
      const id = slugifyHeading(text);
      elements.push(
        <h3
          key={`h3-${index}`}
          id={id}
          className="scroll-mt-28 font-serif text-xl sm:text-2xl font-bold text-sage-700 mt-7 mb-3"
        >
          {text}
        </h3>
      );
      return;
    }

    if (block.startsWith("> ")) {
      const quoteText = block.replace(/^>\s+/, "");
      elements.push(
        <blockquote
          key={`quote-${index}`}
          className="my-6 border-l-4 border-bronze-500 bg-sand-50 pl-5 py-3 italic font-serif text-xl text-petrol-900 rounded-r-xl"
        >
          {renderInlineFormatting(quoteText)}
        </blockquote>
      );
      return;
    }

    // Bullet or Numbered lists
    const lines = block.split("\n");
    if (lines.every((l) => l.trim().startsWith("- ") || l.trim().match(/^\d+\.\s/))) {
      elements.push(
        <ul
          key={`list-${index}`}
          className="my-4 space-y-2.5 pl-5 list-disc marker:text-sage-600 text-sage-900 leading-relaxed"
        >
          {lines.map((line, lIdx) => {
            const cleanLine = line.trim().replace(/^(-|\d+\.)\s+/, "");
            return <li key={lIdx}>{renderInlineFormatting(cleanLine)}</li>;
          })}
        </ul>
      );
      return;
    }

    elements.push(
      <p
        key={`p-${index}`}
        className="my-4 text-base sm:text-lg text-sage-900/90 leading-relaxed"
      >
        {renderInlineFormatting(block)}
      </p>
    );
  });

  return elements;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  if (!post) {
    return { title: "Artigo não encontrado" };
  }
  return {
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt,
    openGraph: {
      title: post.seo_title || post.title,
      description: post.seo_description || post.excerpt,
      type: "article",
      images: [post.cover_image || "/images/isabelle-escrevendo.jpg"],
    },
  };
}

/**
 * Single Blog Post Page ('/blog/[slug]') featuring:
 * 1. Top Reading Progress Bar
 * 2. Clickable Table of Contents (Sumário)
 * 3. Educational content with interleaved "Agende sua consulta!" WhatsApp CTAs
 * 4. Recurring Specialist Authority Block ("Psicóloga especialista em TCC")
 * 5. "Leia também" internal cross-links
 */
export default async function SingleBlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<React.ReactElement> {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([
    fetchPostBySlug(slug),
    fetchPublishedPosts(),
  ]);

  if (!post) {
    notFound();
  }

  const headings = extractHeadings(post.content);
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 4);

  return (
    <div className="bg-white pb-20">
      <ReadingProgressBar />

      {/* Article Header */}
      <header className="bg-gradient-to-b from-sand-100 to-white pt-10 pb-10 border-b border-sand-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sage-700 hover:text-petrol-900"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para o Blog</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-petrol-900 text-bronze-400 text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-sage-700 font-medium">
              <BookOpen className="w-3.5 h-3.5" />
              Leitura de {post.reading_time} min
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-sage-700 font-medium">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.created_at).toLocaleDateString("pt-BR")}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-petrol-900 leading-tight">
            {post.title}
          </h1>

          {post.subtitle && (
            <p className="text-base sm:text-lg text-sage-800 leading-relaxed">
              {post.subtitle}
            </p>
          )}

          {/* Author Byline */}
          <div className="pt-2 flex items-center gap-3.5">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-bronze-400">
              <Image
                src="/images/isabelle-poltrona.jpg"
                alt={PSI_PROFILE.name}
                fill
                sizes="48px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-petrol-900">
                Por {PSI_PROFILE.name}
              </p>
              <p className="text-xs text-sage-700">
                {PSI_PROFILE.crp} • {PSI_PROFILE.approach}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Article Container (max-w-3xl like reference single posts) */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Featured Cover Image */}
        <div className="relative w-full h-72 sm:h-96 rounded-3xl overflow-hidden shadow-card border border-sand-200 mb-8 bg-sand-100">
          <Image
            src={post.cover_image || "/images/isabelle-escrevendo.jpg"}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover object-top"
          />
        </div>

        {/* Table of Contents (Sumário do Artigo — Essential Blocks equivalent) */}
        {headings.length > 0 && (
          <nav
            aria-label="Sumário do artigo"
            className="my-8 p-6 rounded-2xl bg-sand-50 border border-sand-300 shadow-sm"
          >
            <div className="flex items-center gap-2 font-serif text-xl font-bold text-petrol-900 mb-3">
              <ListChecks className="w-5 h-5 text-sage-600" />
              <span>Neste artigo você vai ler:</span>
            </div>
            <ul className="space-y-2 text-sm">
              {headings.map((h) => (
                <li
                  key={h.id}
                  className={h.level === 3 ? "pl-4 text-sage-700" : "font-semibold text-petrol-900"}
                >
                  <a
                    href={`#${h.id}`}
                    className="hover:text-sage-600 hover:underline transition-colors"
                  >
                    • {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Rendered Article Body with Interleaved WhatsApp CTAs */}
        <div className="prose max-w-none">
          {renderArticleContentWithInterleavedCtas(post.content, post.title)}
        </div>

        {/* Recurring Authority Block ("Psicóloga especialista em Terapia Cognitivo-Comportamental") */}
        <section className="mt-12 p-7 sm:p-8 rounded-3xl bg-petrol-900 text-sand-50 shadow-card border border-bronze-400/30 space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-bronze-400 shrink-0">
              <Image
                src="/images/isabelle-poltrona.jpg"
                alt={PSI_PROFILE.name}
                fill
                sizes="80px"
                className="object-cover object-top"
              />
            </div>
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-bronze-400 font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Acompanhamento Psicológico Especializado
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {PSI_PROFILE.name} ({PSI_PROFILE.crp})
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-sand-100/90 leading-relaxed">
            A <strong>Psicóloga Isabelle Momesso</strong> realiza atendimentos
            presenciais em seu consultório na <strong>Clínica Almenara</strong>, na
            cidade de <strong>Sorocaba/SP</strong>, além de realizar{" "}
            <strong>sessões online por videochamada</strong> para pacientes em todo o
            Brasil e brasileiros no exterior. É graduada em Psicologia pela UNIP
            Sorocaba, com Pós-Graduação em{" "}
            <strong>Terapia Cognitivo-Comportamental (TCC)</strong>,{" "}
            <strong>Terapia Familiar</strong> e especialização em <strong>PNL</strong>.
          </p>

          <div className="pt-2">
            <WhatsAppCtaButton
              label="Agende sua consulta!"
              customMessage={`Olá, Isabelle! Li o seu artigo "${post.title}" no site e gostaria de informações para agendar uma sessão.`}
            />
          </div>
        </section>

        {/* Article Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-8 pt-6 border-t border-sand-200 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-sage-600" />
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?q=${encodeURIComponent(tag)}`}
                className="px-3 py-1 rounded-full bg-sand-100 hover:bg-sage-100 text-xs font-medium text-sage-800 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
      </article>

      {/* Section "Leia também" (Cross-links for SEO) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-sand-200">
        <h2 className="font-serif text-3xl font-bold text-petrol-900 mb-8">
          Leia também outros artigos do Blog:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedPosts.map((rel) => (
            <Link
              key={rel.id}
              href={`/blog/${rel.slug}`}
              className="group p-6 rounded-2xl bg-sand-50 hover:bg-sand-100 border border-sand-200 transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sage-600">
                  {rel.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-petrol-900 group-hover:text-sage-700 transition-colors">
                  {rel.title}
                </h3>
                <p className="text-xs text-sage-800 line-clamp-2">{rel.excerpt}</p>
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-sage-700">
                Ler artigo »
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
