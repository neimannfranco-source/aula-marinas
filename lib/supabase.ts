import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { AppState } from "./types";
import { DB_ROW_ID } from "./constants";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://wsrmdtblnhvgindxrxbq.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indzcm1kdGJsbmh2Z2luZHhyeGJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5NzQ2OTEsImV4cCI6MjA4OTU1MDY5MX0.isDKYbv_kjdDZJF8l_x19ZC9PGr55wAp--_y7FJ7K4c";

export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export async function loadRemoteState(): Promise<AppState | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("aula_marinas_state")
    .select("data")
    .eq("id", DB_ROW_ID)
    .maybeSingle();
  if (error) throw error;
  return (data?.data as AppState) || null;
}

export async function saveRemoteState(state: AppState): Promise<void> {
  if (!supabase) return;
  const { error } = await supabase
    .from("aula_marinas_state")
    .upsert(
      { id: DB_ROW_ID, data: state, updated_at: new Date().toISOString() },
      { onConflict: "id" }
    );
  if (error) throw error;
}

