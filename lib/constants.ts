import type { CSSProperties } from "react";

export const C = {
  // Fondos — tierra patagónica oscura
  bg: "#0e1410",
  bg2: "#141c16",
  bg3: "#1a241d",
  surface: "rgba(255,255,255,0.03)",
  border: "rgba(255,255,255,0.08)",
  borderA: "rgba(200,169,110,0.35)",
  borderStrong: "rgba(200,169,110,0.22)",

  // Acento principal — verde bosque patagónico
  green: "#5a9e7a",
  greenDim: "#2C4A3E",
  greenGlow: "rgba(90,158,122,0.12)",

  // Acento dorado — como la luz en el lago al atardecer
  accent: "#C8A96E",
  accentDim: "rgba(200,169,110,0.12)",
  accentBright: "#E8D5A3",

  // Textos
  text: "#F5F0E8",
  textMid: "#A8C4B0",
  textDim: "#5A7A64",

  // Estados
  red: "#e07070",
  redDim: "rgba(224,112,112,0.10)",
  redBorder: "rgba(224,112,112,0.22)",
  correct: "#5a9e7a",
  wrong: "#e07070",
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
  color: "#F5F0E8",
  border: "none",
  borderRadius: 12,
  padding: "11px 24px",
  fontSize: 14,
  fontWeight: 700,
  cursor: "pointer",
  fontFamily: FONT,
};

export const btnAccent: CSSProperties = {
  background: `linear-gradient(135deg, ${C.accent}, #A0803A)`,
  color: "#0e1410",
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
  "Check-in",
  "Comunicación",
  "Alojamiento",
  "Gastronomía",
  "Reclamos",
  "Reservas",
  "Excursiones",
  "Premium",
];

export const catColor = (cat: string): string => {
  const m: Record<string, string> = {
    "Check-in":    "#5a9e7a",   // verde bosque
    Alojamiento:   "#C8A96E",   // dorado lago
    Gastronomía:   "#d4896a",   // terracota cálido
    Reclamos:      "#e07070",   // rojo suave
    Reservas:      "#8fa8d4",   // azul cielo patagónico
    Comunicación:  "#7dc4a8",   // turquesa agua
    Excursiones:   "#a3c47a",   // verde montaña
    Premium:       "#C8A96E",   // dorado
    Familias:      "#c48fa0",   // rosa suave
    Ventas:        "#b4a87a",   // ocre
  };
  return m[cat] || C.textMid;
};

export const catBg = (cat: string): string => {
  const c = catColor(cat);
  return `${c}18`;
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