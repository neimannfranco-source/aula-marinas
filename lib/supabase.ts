import { createClient } from "@supabase/supabase-js";
import type { AppState } from "@/lib/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

const TABLE = "aula_marinas_state";
const ROW_ID = "global-app-state";

export async function loadRemoteState(): Promise<AppState | null> {
  const { data, error } = await supabase
    .from(TABLE)
    .select("data")
    .eq("id", ROW_ID)
    .single();

  if (error) {
    console.error("LOAD ERROR:", error);
    return null;
  }

  if (!data?.data) return null;

  return data.data as AppState;
}

export async function saveRemoteState(state: AppState): Promise<void> {
  const { error } = await supabase.from(TABLE).upsert({
    id: ROW_ID,
    data: state,
  });

  if (error) {
    console.error("SAVE ERROR:", error);
    throw error;
  }

  console.log("STATE SAVED TO SUPABASE");
}