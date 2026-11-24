import { getSupabaseClient } from "./supabase";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  cover_image: string;
  reading_time: number;
  published: boolean;
  featured: boolean;
  seo_title: string | null;
  seo_description: string | null;
  author_name: string;
  author_crp: string;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: string;
  patient_initials: string;
  patient_label: string;
  rating: number;
  content: string;
  modality: string;
  approved: boolean;
  created_at: string;
}

/**
 * Fetches all published blog posts ordered by creation date descending.
 */
export async function fetchPublishedPosts(searchQuery?: string, category?: string): Promise<BlogPost[]> {
  try {
    const supabase = getSupabaseClient();
    let query = supabase
      .from("blog_posts")
      .select("*")
      .eq("published", true)
      .order("featured", { ascending: false })
      .order("created_at", { ascending: false });

    if (category && category !== "Todos") {
      query = query.eq("category", category);
    }

    if (searchQuery && searchQuery.trim().length > 0) {
      const sanitized = searchQuery.trim().replace(/[%_]/g, "");
      query = query.or(
        `title.ilike.%${sanitized}%,excerpt.ilike.%${sanitized}%,content.ilike.%${sanitized}%`
      );
    }

    const { data, error } = await query;
    if (error) {
      console.error("Error fetching blog posts:", error.message);
      return [];
    }
    return (data as BlogPost[]) || [];
  } catch (err) {
    console.error("Unexpected error in fetchPublishedPosts:", err);
    return [];
  }
}

/**
 * Fetches all blog posts (including drafts) for the admin dashboard.
 */
export async function fetchAllPostsAdmin(): Promise<BlogPost[]> {
  try {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching admin posts:", error.message);
      return [];
    }
    return (data as BlogPost[]) || [];
  } catch (err) {
    console.error("Unexpected error in fetchAllPostsAdmin:", err);
    return [];
  }
}

/**
 * Fetches a single blog post by slug.
 */
export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) {
      console.error(`Error fetching post ${slug}:`, error.message);
      return null;
    }
    return data as BlogPost;
  } catch (err) {
    console.error("Unexpected error in fetchPostBySlug:", err);
    return null;
  }
}

/**
 * Creates or updates a blog post in Supabase.
 */
export async function upsertBlogPost(
  post: Partial<BlogPost> & { title: string; slug: string; excerpt: string; content: string }
): Promise<{ success: boolean; error?: string; data?: BlogPost }> {
  try {
    const supabase = getSupabaseClient();
    const payload = {
      ...post,
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from("blog_posts")
      .upsert(payload, { onConflict: "slug" })
      .select()
      .single();

    if (error) {
      return { success: false, error: error.message };
    }
    return { success: true, data: data as BlogPost };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Erro ao salvar artigo",
    };
  }
}

/**
 * Deletes a blog post by ID.
 */
export async function deleteBlogPost(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    const supabase = getSupabaseClient();
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) {
      return { success: false, error: error.message };
    }
    return { success: true };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Erro ao excluir artigo",
    };
  }
}

/**
 * Fetches approved testimonials from Supabase.
 */
export async function fetchApprovedTestimonials(): Promise<Testimonial[]> {
  try {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .eq("approved", true)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching testimonials:", error.message);
      return [];
    }
    return (data as Testimonial[]) || [];
  } catch (err) {
    console.error("Unexpected error in fetchApprovedTestimonials:", err);
    return [];
  }
}

/**
 * Creates a new testimonial in Supabase.
 */
export async function createTestimonial(
  testimonial: Omit<Testimonial, "id" | "created_at">
): Promise<{ success: boolean; error?: string }> {
  try {
    const supabase = getSupabaseClient();
    const { error } = await supabase.from("testimonials").insert(testimonial);
    if (error) {
      return { success: false, error: error.message };
    }
    return { success: true };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Erro ao salvar depoimento",
    };
  }
}

/**
 * Deletes a testimonial by ID.
 */
export async function deleteTestimonial(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    const supabase = getSupabaseClient();
    const { error } = await supabase.from("testimonials").delete().eq("id", id);
    if (error) {
      return { success: false, error: error.message };
    }
    return { success: true };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Erro ao remover depoimento",
    };
  }
}
