import type { CSSProperties } from "react";

export const C = {
  bg: "#0a0f0d",
  bg2: "#0f1710",
  bg3: "#141f15",
  surface: "rgba(255,255,255,0.03)",
  border: "rgba(255,255,255,0.07)",
  borderA: "rgba(74,222,128,0.28)",
  green: "#4ade80",
  greenDim: "#16a34a",
  greenGlow: "rgba(74,222,128,0.10)",
  text: "#f0fdf4",
  textMid: "#86efac",
  textDim: "#4b7a55",
  accent: "#fbbf24",
  accentDim: "rgba(251,191,36,0.12)",
  red: "#fb7185",
  redDim: "rgba(251,113,133,0.10)",
  redBorder: "rgba(251,113,133,0.22)",
  correct: "#4ade80",
  wrong: "#fb7185",
};

export const FONT = "'Plus Jakarta Sans', system-ui, sans-serif";
export const MONO = "'JetBrains Mono', 'Fira Mono', monospace";
export const DISPLAY = "'Playfair Display', Georgia, serif";

export const glassCard: CSSProperties = {
  background: C.bg2,
  border: `1px solid ${C.border}`,
  borderRadius: 20,
};

export const input: CSSProperties = {
  width: "100%",
  background: C.bg3,
  border: `1px solid ${C.border}`,
  borderRadius: 12,
  padding: "12px 16px",
  color: C.text,
  fontSize: 14,
  fontFamily: FONT,
  outline: "none",
  boxSizing: "border-box",
};

export const btnPrimary: CSSProperties = {
  background: `linear-gradient(135deg, ${C.green}, ${C.greenDim})`,
  color: "#052e16",
  border: "none",
  borderRadius: 12,
  padding: "11px 24px",
  fontSize: 14,
  fontWeight: 700,
  cursor: "pointer",
  fontFamily: FONT,
};

export const btnGhost: CSSProperties = {
  background: "transparent",
  border: `1px solid ${C.border}`,
  borderRadius: 10,
  padding: "7px 14px",
  fontSize: 13,
  color: C.textMid,
  cursor: "pointer",
  fontFamily: FONT,
};

export const btnDanger: CSSProperties = {
  background: C.redDim,
  border: `1px solid ${C.redBorder}`,
  borderRadius: 10,
  padding: "7px 14px",
  fontSize: 12,
  color: C.red,
  cursor: "pointer",
  fontFamily: FONT,
};

export const CATEGORIES = [
  "Todos",
  "Recepción",
  "Check-in",
  "Alojamiento",
  "Restaurante",
  "Desayuno",
  "Reclamos",
  "Reservas",
  "Comunicación",
  "Excursiones",
  "Gastronomía",
];

export const catColor = (cat: string): string => {
  const m: Record<string, string> = {
    Recepción: "#4ade80",
    "Check-in": "#34d399",
    Alojamiento: "#86efac",
    Restaurante: "#fbbf24",
    Desayuno: "#fb923c",
    Reclamos: "#fb7185",
    Reservas: "#a78bfa",
    Comunicación: "#60a5fa",
    Excursiones: "#2dd4bf",
    Gastronomía: "#f472b6",
  };
  return m[cat] || C.textMid;
};

export const catBg = (cat: string): string => {
  const c = catColor(cat);
  return `${c}15`;
};

export function getInitial(name: string): string {
  return name.charAt(0).toUpperCase();
}

export function strSeed(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = (h * 16777619) >>> 0;
  }
  return h;
}

export function shuffleOpts(opts: string[], seed: number): string[] {
  const arr = [...opts];
  let s = seed || 1;
  for (let i = arr.length - 1; i > 0; i--) {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    s = s >>> 0;
    const j = s % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function normalize(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export const PROFESSOR_PASSWORD = "pietromarinas";
export const DB_ROW_ID = "global-app-state-marinas";
export const LS_KEY = "aula-marinas-v1";

