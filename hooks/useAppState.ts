import { useState, useEffect } from "react";
import type { AppState, LoadStatus } from "@/lib/types";
import { LS_KEY } from "@/lib/constants";
import { loadRemoteState, saveRemoteState } from "@/lib/supabase";

function createInitialState(): AppState {
  return {
    students: [],
    currentStudentId: null,
    progress: {},
    dictations: {},
  };
}

async function loadState(): Promise<AppState> {
  // 1. Try remote first
  try {
    const remote = await loadRemoteState();
    if (remote) return { ...remote, currentStudentId: null };
  } catch {}

  // 2. Fall back to localStorage
  try {
    const saved = localStorage.getItem(LS_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...createInitialState(), ...parsed, currentStudentId: null };
    }
  } catch {}

  return createInitialState();
}

export function useAppState() {
  const [appState, setAppState] = useState<AppState>(createInitialState);
  const [loadStatus, setLoadStatus] = useState<LoadStatus>("loading");

  // Load on mount
  useEffect(() => {
    let mounted = true;
    loadState().then((state) => {
      if (!mounted) return;
      setAppState(state);
      setLoadStatus("ready");
    });
    return () => { mounted = false; };
  }, []);

  // Persist on change — only persisted fields, debounced
  useEffect(() => {
    if (loadStatus !== "ready") return;

    const timer = setTimeout(async () => {
      // Exclude currentStudentId (UI-only) from persistence
      const { currentStudentId: _, ...persistable } = appState;

      try {
        localStorage.setItem(LS_KEY, JSON.stringify(persistable));
      } catch {}

      try {
        await saveRemoteState(appState);
      } catch {}
    }, 500);

    return () => clearTimeout(timer);
  }, [appState, loadStatus]);

  return { appState, setAppState, loadStatus };
}