"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Lock,
  Plus,
  Edit3,
  Trash2,
  Eye,
  Save,
  LogOut,
  FileText,
  MessageSquareQuote,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { PSI_PROFILE } from "@/lib/constants";
import {
  BlogPost,
  Testimonial,
  fetchAllPostsAdmin,
  upsertBlogPost,
  deleteBlogPost,
  fetchApprovedTestimonials,
  createTestimonial,
  deleteTestimonial,
} from "@/lib/blog-service";

const ADMIN_ALLOWED_EMAIL = "isabelle_carlamomesso@yahoo.com.br";
const ADMIN_PASSCODE = "psibelle10";

const COVER_OPTIONS = [
  { label: "Isabelle Escrevendo (Consultório)", value: "/images/isabelle-escrevendo.jpg" },
  { label: "Isabelle na Poltrona Bege", value: "/images/isabelle-poltrona.jpg" },
  { label: "Isabelle no Notebook (Terapia Online)", value: "/images/isabelle-notebook.jpg" },
  { label: "Isabelle em Pé no Consultório", value: "/images/isabelle-consultorio.jpg" },
];

const CATEGORY_OPTIONS = [
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

function slugifyText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Full-featured Admin Panel ('/admin') allowing Psicóloga Isabelle Momesso to write,
 * edit, and publish blog posts and manage patient testimonials directly in Supabase.
 */
export default function AdminDashboardPage(): React.ReactElement {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loginEmail, setLoginEmail] = useState<string>(ADMIN_ALLOWED_EMAIL);
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [authError, setAuthError] = useState<string>("");

  const [activeTab, setActiveTab] = useState<"posts" | "editor" | "testimonials">("posts");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(
    null
  );

  // Blog Editor State
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const [subtitle, setSubtitle] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [category, setCategory] = useState<string>(CATEGORY_OPTIONS[0]);
  const [coverImage, setCoverImage] = useState<string>(COVER_OPTIONS[0].value);
  const [readingTime, setReadingTime] = useState<number>(6);
  const [excerpt, setExcerpt] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [published, setPublished] = useState<boolean>(true);
  const [featured, setFeatured] = useState<boolean>(false);

  // Testimonial Form State
  const [patientInitials, setPatientInitials] = useState<string>("");
  const [patientLabel, setPatientLabel] = useState<string>("Paciente de Psicoterapia");
  const [modality, setModality] = useState<string>("Terapia Presencial • Sorocaba");
  const [testimonialContent, setTestimonialContent] = useState<string>("");

  useEffect(() => {
    const savedSession = localStorage.getItem("psibelle_admin_auth");
    if (savedSession === "authenticated") {
      setIsAuthenticated(true);
      void loadDashboardData();
    }
  }, []);

  const loadDashboardData = async (): Promise<void> => {
    setLoading(true);
    const [allPosts, allTestimonials] = await Promise.all([
      fetchAllPostsAdmin(),
      fetchApprovedTestimonials(),
    ]);
    setPosts(allPosts);
    setTestimonials(allTestimonials);
    setLoading(false);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const normalizedEmail = loginEmail.trim().toLowerCase();
    if (
      normalizedEmail === ADMIN_ALLOWED_EMAIL &&
      loginPassword.trim() === ADMIN_PASSCODE
    ) {
      localStorage.setItem("psibelle_admin_auth", "authenticated");
      setIsAuthenticated(true);
      setAuthError("");
      void loadDashboardData();
    } else {
      setAuthError(
        "Credenciais inválidas. Use o e-mail isabelle_carlamomesso@yahoo.com.br e a senha configurada."
      );
    }
  };

  const handleLogout = (): void => {
    localStorage.removeItem("psibelle_admin_auth");
    setIsAuthenticated(false);
  };

  const startNewPost = (): void => {
    setEditingId(null);
    setTitle("");
    setSubtitle("");
    setSlug("");
    setCategory(CATEGORY_OPTIONS[0]);
    setCoverImage(COVER_OPTIONS[0].value);
    setReadingTime(6);
    setExcerpt("");
    setContent(
      "## Introdução do Tema\n\nEscreva aqui o seu texto acolhedor...\n\n## Como a Terapia Cognitivo-Comportamental ajuda?\n\n- Ponto importante 1\n- Ponto importante 2"
    );
    setPublished(true);
    setFeatured(false);
    setFeedback(null);
    setActiveTab("editor");
  };

  const startEditPost = (post: BlogPost): void => {
    setEditingId(post.id);
    setTitle(post.title);
    setSubtitle(post.subtitle || "");
    setSlug(post.slug);
    setCategory(post.category);
    setCoverImage(post.cover_image);
    setReadingTime(post.reading_time);
    setExcerpt(post.excerpt);
    setContent(post.content);
    setPublished(post.published);
    setFeatured(post.featured);
    setFeedback(null);
    setActiveTab("editor");
  };

  const handleSavePost = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const finalSlug = slug.trim() || slugifyText(title);
    if (!title.trim() || !finalSlug || !excerpt.trim() || !content.trim()) {
      setFeedback({
        type: "error",
        text: "Preencha título, resumo e conteúdo do artigo.",
      });
      return;
    }

    setLoading(true);
    const payload: Partial<BlogPost> & {
      title: string;
      slug: string;
      excerpt: string;
      content: string;
    } = {
      ...(editingId ? { id: editingId } : {}),
      title: title.trim(),
      subtitle: subtitle.trim() || null,
      slug: finalSlug,
      category,
      cover_image: coverImage,
      reading_time: Number(readingTime) || 5,
      excerpt: excerpt.trim(),
      content: content.trim(),
      published,
      featured,
      seo_title: `${title.trim()} | ${PSI_PROFILE.name}`,
      seo_description: excerpt.trim(),
    };

    const res = await upsertBlogPost(payload);
    if (res.success) {
      setFeedback({
        type: "success",
        text: "Artigo salvo e publicado com sucesso no site!",
      });
      await loadDashboardData();
      setActiveTab("posts");
    } else {
      setFeedback({
        type: "error",
        text: res.error || "Erro ao salvar artigo.",
      });
    }
    setLoading(false);
  };

  const handleDeletePost = async (id: string, postTitle: string): Promise<void> => {
    if (!window.confirm(`Deseja realmente excluir o artigo "${postTitle}"?`)) {
      return;
    }
    setLoading(true);
    const res = await deleteBlogPost(id);
    if (res.success) {
      setFeedback({ type: "success", text: "Artigo excluído com sucesso." });
      await loadDashboardData();
    } else {
      setFeedback({ type: "error", text: res.error || "Erro ao excluir." });
    }
    setLoading(false);
  };

  const handleAddTestimonial = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (!patientInitials.trim() || !testimonialContent.trim()) {
      return;
    }
    setLoading(true);
    const res = await createTestimonial({
      patient_initials: patientInitials.trim().toUpperCase(),
      patient_label: patientLabel.trim(),
      modality: modality.trim(),
      rating: 5,
      content: testimonialContent.trim(),
      approved: true,
    });
    if (res.success) {
      setPatientInitials("");
      setTestimonialContent("");
      setFeedback({
        type: "success",
        text: "Depoimento adicionado e já visível na página inicial!",
      });
      await loadDashboardData();
    } else {
      setFeedback({
        type: "error",
        text: res.error || "Erro ao salvar depoimento.",
      });
    }
    setLoading(false);
  };

  const handleRemoveTestimonial = async (id: string): Promise<void> => {
    setLoading(true);
    await deleteTestimonial(id);
    await loadDashboardData();
    setLoading(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] bg-sand-50 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-card border border-sand-200 p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-petrol-900 text-bronze-400 flex items-center justify-center mx-auto shadow-md">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="font-serif text-3xl font-bold text-petrol-900">
              Painel da Psicóloga
            </h1>
            <p className="text-xs text-sage-700">
              Gerencie os artigos do seu Blog e Depoimentos ({PSI_PROFILE.name})
            </p>
          </div>

          {authError && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-petrol-900 mb-1.5">
                E-mail de Acesso
              </label>
              <input
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-sand-300 text-sm focus:outline-none focus:border-sage-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-petrol-900 mb-1.5">
                Senha de Acesso
              </label>
              <input
                type="password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Digite sua senha de acesso"
                className="w-full px-4 py-3 rounded-xl border border-sand-300 text-sm focus:outline-none focus:border-sage-600"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-petrol-900 hover:bg-sage-700 text-white font-bold text-sm transition-colors shadow-md"
            >
              Entrar no Painel do Blog
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sand-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top Bar */}
        <div className="bg-petrol-900 text-sand-50 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-card">
          <div>
            <span className="text-xs uppercase tracking-widest text-bronze-400 font-bold">
              Painel Administrativo • {PSI_PROFILE.crp}
            </span>
            <h1 className="font-serif text-3xl font-bold text-white">
              Olá, Isabelle Momesso!
            </h1>
            <p className="text-xs sm:text-sm text-sand-200/85">
              Aqui você pode criar novos artigos para o Blog, editar textos ou adicionar
              avaliações de pacientes.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={startNewPost}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow"
            >
              <Plus className="w-4 h-4" />
              <span>Novo Artigo</span>
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-petrol-950 hover:bg-red-900/60 text-sand-200 text-xs font-semibold border border-white/10"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sair</span>
            </button>
          </div>
        </div>

        {/* Feedback Banner */}
        {feedback && (
          <div
            className={`p-4 rounded-2xl border flex items-center justify-between ${
              feedback.type === "success"
                ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                : "bg-red-50 border-red-200 text-red-800"
            }`}
          >
            <div className="flex items-center gap-2.5 text-sm font-medium">
              {feedback.type === "success" ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600" />
              )}
              <span>{feedback.text}</span>
            </div>
            <button
              type="button"
              onClick={() => setFeedback(null)}
              className="text-xs font-bold underline"
            >
              Fechar
            </button>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-sand-200 pb-3">
          <button
            type="button"
            onClick={() => setActiveTab("posts")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "posts"
                ? "bg-petrol-900 text-white shadow"
                : "bg-white text-sage-800 hover:bg-sand-100"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Meus Artigos ({posts.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("editor")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "editor"
                ? "bg-petrol-900 text-white shadow"
                : "bg-white text-sage-800 hover:bg-sand-100"
            }`}
          >
            <Edit3 className="w-4 h-4" />
            <span>{editingId ? "Editando Artigo" : "Escrever Novo Artigo"}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("testimonials")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "testimonials"
                ? "bg-petrol-900 text-white shadow"
                : "bg-white text-sage-800 hover:bg-sand-100"
            }`}
          >
            <MessageSquareQuote className="w-4 h-4" />
            <span>Depoimentos de Pacientes ({testimonials.length})</span>
          </button>
        </div>

        {/* TAB 1: POSTS LIST */}
        {activeTab === "posts" && (
          <div className="bg-white rounded-3xl shadow-card border border-sand-200 overflow-hidden">
            <div className="p-6 border-b border-sand-200 flex items-center justify-between">
              <h2 className="font-serif text-2xl font-bold text-petrol-900">
                Artigos Publicados no Blog
              </h2>
              {loading && <Loader2 className="w-5 h-5 animate-spin text-sage-600" />}
            </div>

            <div className="divide-y divide-sand-200">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-sand-50/60 transition-colors"
                >
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-sage-100 text-sage-800 text-[11px] font-bold">
                        {post.category}
                      </span>
                      <span className="text-xs text-sage-600">
                        • {post.reading_time} min de leitura
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-petrol-900">
                      {post.title}
                    </h3>
                    <p className="text-xs text-sage-700 line-clamp-1">{post.excerpt}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-sand-100 hover:bg-sand-200 text-petrol-900 text-xs font-semibold"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Ver</span>
                    </Link>
                    <button
                      type="button"
                      onClick={() => startEditPost(post)}
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-sage-100 hover:bg-sage-200 text-sage-800 text-xs font-semibold"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Editar</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeletePost(post.id, post.title)}
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 text-xs font-semibold"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Excluir</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: POST EDITOR */}
        {activeTab === "editor" && (
          <form
            onSubmit={handleSavePost}
            className="bg-white rounded-3xl shadow-card border border-sand-200 p-6 sm:p-10 space-y-6"
          >
            <div className="flex items-center justify-between border-b border-sand-200 pb-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-petrol-900">
                {editingId ? "Editar Artigo do Blog" : "Publicar Novo Artigo no Blog"}
              </h2>
              <span className="text-xs text-sage-600">
                Os botões de WhatsApp e o seu perfil CRP são inseridos automaticamente!
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-petrol-900 mb-1.5">
                  Título do Artigo *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    if (!editingId) {
                      setSlug(slugifyText(e.target.value));
                    }
                  }}
                  placeholder='Ex: Dificuldade de dizer "não": como vencer a culpa'
                  className="w-full px-4 py-3 rounded-xl border border-sand-300 text-base font-medium focus:outline-none focus:border-sage-600"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-petrol-900 mb-1.5">
                  Subtítulo (Opcional)
                </label>
                <input
                  type="text"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  placeholder="Uma frase complementar que aparece logo abaixo do título"
                  className="w-full px-4 py-2.5 rounded-xl border border-sand-300 text-sm focus:outline-none focus:border-sage-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-petrol-900 mb-1.5">
                  Categoria / Tema *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-sand-300 text-sm bg-white focus:outline-none focus:border-sage-600"
                >
                  {CATEGORY_OPTIONS.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-petrol-900 mb-1.5">
                  Foto de Capa do Artigo
                </label>
                <select
                  value={coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-sand-300 text-sm bg-white focus:outline-none focus:border-sage-600"
                >
                  {COVER_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-petrol-900 mb-1.5">
                  Endereço da URL (Slug automático)
                </label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(slugifyText(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-sand-300 text-xs bg-sand-50 text-sage-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-petrol-900 mb-1.5">
                  Tempo estimado de leitura (minutos)
                </label>
                <input
                  type="number"
                  min={1}
                  max={30}
                  value={readingTime}
                  onChange={(e) => setReadingTime(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-sand-300 text-sm"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-petrol-900 mb-1.5">
                  Resumo Curto (Aparece no card do Blog e no Google) *
                </label>
                <textarea
                  rows={2}
                  required
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Escreva 2 ou 3 frases resumindo sobre o que é o artigo..."
                  className="w-full px-4 py-3 rounded-xl border border-sand-300 text-sm focus:outline-none focus:border-sage-600"
                />
              </div>

              <div className="md:col-span-2">
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-petrol-900">
                    Conteúdo Completo do Artigo *
                  </label>
                  <span className="text-[11px] text-sage-600">
                    Dica: Use &quot;## Título da Seção&quot; para criar subtítulos e sumário
                    automático
                  </span>
                </div>
                <textarea
                  rows={16}
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-sand-300 text-sm font-sans leading-relaxed focus:outline-none focus:border-sage-600"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-4 pt-4 border-t border-sand-200">
              <button
                type="button"
                onClick={() => setActiveTab("posts")}
                className="px-6 py-3 rounded-xl border border-sand-300 text-xs font-bold uppercase tracking-wider text-sage-800"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                <span>Salvar e Publicar Artigo</span>
              </button>
            </div>
          </form>
        )}

        {/* TAB 3: TESTIMONIALS MANAGER */}
        {activeTab === "testimonials" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <form
              onSubmit={handleAddTestimonial}
              className="lg:col-span-5 bg-white rounded-3xl shadow-card border border-sand-200 p-6 sm:p-8 space-y-4 h-fit"
            >
              <h2 className="font-serif text-2xl font-bold text-petrol-900">
                Adicionar Depoimento de Paciente
              </h2>
              <p className="text-xs text-sage-700">
                Para preservar o sigilo ético do CFP, utilize apenas as iniciais do
                paciente (ex: M. S. ou A. C.).
              </p>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-petrol-900 mb-1">
                  Iniciais do Paciente *
                </label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  value={patientInitials}
                  onChange={(e) => setPatientInitials(e.target.value)}
                  placeholder="Ex: M. S."
                  className="w-full px-4 py-2.5 rounded-xl border border-sand-300 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-petrol-900 mb-1">
                  Identificação Exibida
                </label>
                <input
                  type="text"
                  value={patientLabel}
                  onChange={(e) => setPatientLabel(e.target.value)}
                  placeholder="Ex: Paciente de Psicoterapia (M. S.)"
                  className="w-full px-4 py-2.5 rounded-xl border border-sand-300 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-petrol-900 mb-1">
                  Modalidade
                </label>
                <input
                  type="text"
                  value={modality}
                  onChange={(e) => setModality(e.target.value)}
                  placeholder="Ex: Terapia Presencial • Sorocaba"
                  className="w-full px-4 py-2.5 rounded-xl border border-sand-300 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-petrol-900 mb-1">
                  Relato / Avaliação *
                </label>
                <textarea
                  rows={4}
                  required
                  value={testimonialContent}
                  onChange={(e) => setTestimonialContent(e.target.value)}
                  placeholder="Cole aqui o depoimento enviado pelo paciente..."
                  className="w-full px-4 py-2.5 rounded-xl border border-sand-300 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-petrol-900 hover:bg-sage-700 text-white font-bold text-xs uppercase tracking-wider shadow"
              >
                Publicar Depoimento no Site
              </button>
            </form>

            <div className="lg:col-span-7 bg-white rounded-3xl shadow-card border border-sand-200 p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-petrol-900">
                Depoimentos Ativos ({testimonials.length})
              </h2>
              {testimonials.length === 0 ? (
                <p className="text-sm text-sage-700">
                  Ainda não há depoimentos cadastrados. Assim que você adicionar o
                  primeiro depoimento ao lado, ele aparecerá automaticamente na Página
                  Inicial!
                </p>
              ) : (
                <div className="space-y-4">
                  {testimonials.map((t) => (
                    <div
                      key={t.id}
                      className="p-4 rounded-2xl bg-sand-50 border border-sand-200 flex items-start justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <p className="font-bold text-sm text-petrol-900">
                          {t.patient_initials} — {t.patient_label} ({t.modality})
                        </p>
                        <p className="text-xs text-sage-800 italic">“{t.content}”</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveTestimonial(t.id)}
                        className="text-red-600 hover:text-red-800 p-1"
                        title="Remover depoimento"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
