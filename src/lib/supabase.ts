import { createClient, SupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://wmfgygofrgptchbcecul.supabase.co";
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtZmd5Z29mcmdwdGNoYmNlY3VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU1NDM5MDYsImV4cCI6MjExMTExOTkwNn0.UuuWWvqhOGKoGE3MAGgT4L8TZDqs2yGwSi9x7aYL2lk";

let supabaseInstance: SupabaseClient | null = null;

/**
 * Returns a singleton Supabase client configured for the psibelle project.
 */
export function getSupabaseClient(): SupabaseClient {
  if (!supabaseInstance) {
    supabaseInstance = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
      },
    });
  }
  return supabaseInstance;
}
