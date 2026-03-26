"use client";

import type { AppState } from "@/lib/types";
import { MODULES } from "@/lib/modules";
import { C, FONT, DISPLAY, catColor } from "@/lib/constants";

type Props = { appState: AppState };

const CATEGORIES = [
  "Comunicación",
  "Check-in",
  "Alojamiento",
  "Gastronomía",
  "Reservas",
  "Excursiones",
  "Reclamos",
  "Premium",
];

export default function ProgressPanel({ appState }: Props) {
  const currentStudent =
    appState.students.find((s) => s.id === appState.currentStudentId) ?? null;

  if (!currentStudent) return null;

  const progress = appState.progress?.[currentStudent.id] ?? {};
  const completed = Object.keys(progress).filter((k) => progress[k]).length;
  const total = MODULES.length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  // Ring SVG values
  const r = 36;
  const circ = 2 * Math.PI * r;
  const dash = (percent / 100) * circ;

  // Per-category stats
  const catStats = CATEGORIES.map((cat) => {
    const mods = MODULES.filter((m) => m.category === cat);
    const done = mods.filter((m) => progress[m.id]).length;
    return { cat, done, total: mods.length };
  }).filter((c) => c.total > 0);

  // Stat cards
  const totalPhrases = MODULES.reduce((s, m) => s + (m.phrases?.length ?? 0), 0);
  const seenPhrases = MODULES.filter((m) => progress[m.id]).reduce(
    (s, m) => s + (m.phrases?.length ?? 0),
    0
  );

  return (
    <aside
      style={{
        background: C.bg2,
        border: `1px solid ${C.border}`,
        borderRadius: 20,
        padding: 20,
        fontFamily: FONT,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        position: "sticky",
        top: 76,
      }}
    >
      {/* Header */}
      <div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: C.textDim,
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          Mi progreso
        </div>

        {/* Ring + numbers */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="88" height="88" viewBox="0 0 88 88" style={{ flexShrink: 0 }}>
            {/* Track */}
            <circle
              cx="44" cy="44" r={r}
              fill="none"
              stroke={C.bg3}
              strokeWidth="7"
            />
            {/* Progress arc */}
            <circle
              cx="44" cy="44" r={r}
              fill="none"
              stroke={C.accent}
              strokeWidth="7"
              strokeDasharray={`${dash} ${circ}`}
              strokeLinecap="round"
              transform="rotate(-90 44 44)"
              style={{ transition: "stroke-dasharray 0.6s ease" }}
            />
            {/* Center text */}
            <text
              x="44" y="40"
              textAnchor="middle"
              fill={C.text}
              fontSize="17"
              fontWeight="700"
              fontFamily={DISPLAY}
            >
              {percent}%
            </text>
            <text
              x="44" y="56"
              textAnchor="middle"
              fill={C.textDim}
              fontSize="10"
              fontFamily={FONT}
            >
              completado
            </text>
          </svg>

          <div style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: DISPLAY,
                fontSize: 26,
                fontWeight: 700,
                color: C.text,
                lineHeight: 1,
              }}
            >
              {completed}
              <span style={{ fontSize: 14, color: C.textDim, fontFamily: FONT, fontWeight: 400 }}>
                /{total}
              </span>
            </div>
            <div style={{ fontSize: 12, color: C.textDim, marginTop: 4 }}>
              módulos completados
            </div>
            <div
              style={{
                marginTop: 10,
                fontSize: 12,
                color: C.textMid,
                background: `${C.accent}12`,
                border: `1px solid ${C.accent}30`,
                borderRadius: 8,
                padding: "4px 10px",
                display: "inline-block",
              }}
            >
              {currentStudent.name}
            </div>
          </div>
        </div>
      </div>

      {/* Stat mini-grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 8,
        }}
      >
        {[
          { val: completed, lbl: "Completados" },
          { val: total - completed, lbl: "Pendientes" },
          { val: seenPhrases, lbl: "Frases vistas" },
          { val: totalPhrases - seenPhrases, lbl: "Frases restantes" },
        ].map(({ val, lbl }) => (
          <div
            key={lbl}
            style={{
              background: C.bg3,
              borderRadius: 12,
              padding: "12px 14px",
              border: `1px solid ${C.border}`,
            }}
          >
            <div
              style={{
                fontFamily: DISPLAY,
                fontSize: 22,
                fontWeight: 700,
                color: C.accent,
                lineHeight: 1,
              }}
            >
              {val}
            </div>
            <div style={{ fontSize: 11, color: C.textDim, marginTop: 4 }}>
              {lbl}
            </div>
          </div>
        ))}
      </div>

      {/* Category bars */}
      <div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: C.textDim,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Por categoría
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
          {catStats.map(({ cat, done, total: tot }) => {
            const pct = tot > 0 ? Math.round((done / tot) * 100) : 0;
            const color = catColor(cat);
            return (
              <div key={cat}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 4,
                  }}
                >
                  <span style={{ fontSize: 12, color: C.textMid }}>{cat}</span>
                  <span
                    style={{
                      fontSize: 11,
                      color: C.textDim,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {done}/{tot}
                  </span>
                </div>
                <div
                  style={{
                    height: 5,
                    borderRadius: 99,
                    background: C.bg3,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${pct}%`,
                      height: "100%",
                      borderRadius: 99,
                      background: color,
                      transition: "width 0.5s ease",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tip */}
      <div
        style={{
          background: `${C.accent}0e`,
          border: `1px solid ${C.accent}28`,
          borderRadius: 12,
          padding: "12px 14px",
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: C.accent,
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          Consejo del día
        </div>
        <div style={{ fontSize: 12, color: C.textMid, lineHeight: 1.65 }}>
          Practicá las frases en voz alta — la pronunciación mejora mucho más rápido hablando que leyendo.
        </div>
      </div>
    </aside>
  );
}