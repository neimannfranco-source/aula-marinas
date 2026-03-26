"use client";

import type { AppState } from "@/lib/types";
import { MODULES } from "@/lib/modules";
import { C, FONT, DISPLAY, catColor } from "@/lib/constants";

type Props = {
  appState: AppState;
};

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

  const totalPhrases = MODULES.reduce(
    (sum, module) => sum + (module.phrases?.length ?? 0),
    0
  );

  const seenPhrases = MODULES.filter((m) => progress[m.id]).reduce(
    (sum, module) => sum + (module.phrases?.length ?? 0),
    0
  );

  const catStats = CATEGORIES.map((cat) => {
    const modules = MODULES.filter((m) => m.category === cat);
    const done = modules.filter((m) => progress[m.id]).length;
    return {
      cat,
      done,
      total: modules.length,
      percent: modules.length > 0 ? Math.round((done / modules.length) * 100) : 0,
      color: catColor(cat),
    };
  }).filter((c) => c.total > 0);

  return (
    <aside
      style={{
        background:
          "linear-gradient(180deg, rgba(7,18,24,0.82), rgba(7,16,22,0.94))",
        border: `1px solid ${C.border}`,
        borderRadius: 24,
        padding: 20,
        fontFamily: FONT,
        display: "flex",
        flexDirection: "column",
        gap: 18,
        position: "sticky",
        top: 76,
        boxShadow: "0 18px 50px rgba(0,0,0,0.28)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Header */}
      <div>
        <div
          style={{
            fontSize: 30,
            lineHeight: 1,
            color: C.text,
            fontWeight: 700,
            fontFamily: DISPLAY,
            letterSpacing: "-0.03em",
          }}
        >
          Progreso
        </div>

        <div
          style={{
            fontSize: 12,
            color: C.textDim,
            marginTop: 6,
          }}
        >
          {currentStudent.name}
        </div>
      </div>

      {/* Main metric */}
      <div
        style={{
          padding: 18,
          borderRadius: 20,
          background: "rgba(255,255,255,0.025)",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
        }}
      >
        <div
          style={{
            fontSize: 12,
            color: C.textDim,
            marginBottom: 10,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontWeight: 600,
          }}
        >
          Módulos completados
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 6,
          }}
        >
          <span
            style={{
              fontSize: 38,
              fontWeight: 700,
              color: "#FFF8ED",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              fontFamily: DISPLAY,
            }}
          >
            {completed}
          </span>
          <span
            style={{
              fontSize: 18,
              color: C.textDim,
              fontWeight: 500,
            }}
          >
            /{total}
          </span>
        </div>

        <div
          style={{
            height: 6,
            borderRadius: 999,
            background: "rgba(255,255,255,0.08)",
            overflow: "hidden",
            marginTop: 16,
          }}
        >
          <div
            style={{
              width: `${percent}%`,
              height: "100%",
              borderRadius: 999,
              background: "linear-gradient(90deg, #D6B36A, #E3C786)",
              transition: "width 0.45s ease",
              boxShadow: "0 0 16px rgba(214,179,106,0.22)",
            }}
          />
        </div>

        <div
          style={{
            fontSize: 12,
            color: C.textDim,
            marginTop: 10,
          }}
        >
          {percent}% completado
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "grid",
          gap: 10,
          padding: 16,
          borderRadius: 18,
          background: "rgba(255,255,255,0.018)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {[
          { label: "Alumno activo", value: currentStudent.name },
          { label: "Módulos pendientes", value: String(total - completed) },
          { label: "Frases vistas", value: String(seenPhrases) },
          { label: "Frases restantes", value: String(totalPhrases - seenPhrases) },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
              fontSize: 12,
            }}
          >
            <span style={{ color: C.textDim }}>{item.label}</span>
            <span
              style={{
                color: C.textMid,
                fontWeight: 600,
                textAlign: "right",
              }}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Categories */}
      <div
        style={{
          padding: 16,
          borderRadius: 18,
          background: "rgba(255,255,255,0.018)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            fontSize: 12,
            color: C.textDim,
            marginBottom: 14,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontWeight: 600,
          }}
        >
          Por categoría
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {catStats.map(({ cat, done, total: tot, percent: pct, color }) => (
            <div key={cat}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 6,
                  gap: 10,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    color: C.textMid,
                  }}
                >
                  {cat}
                </span>

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
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.07)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${pct}%`,
                    height: "100%",
                    borderRadius: 999,
                    background: color,
                    transition: "width 0.45s ease",
                    boxShadow: pct > 0 ? `0 0 12px ${color}40` : "none",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium note */}
      <div
        style={{
          background: "rgba(214,179,106,0.07)",
          border: "1px solid rgba(214,179,106,0.16)",
          borderRadius: 16,
          padding: "14px 15px",
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: C.accent,
            textTransform: "uppercase",
            marginBottom: 7,
          }}
        >
          Consejo premium
        </div>

        <div
          style={{
            fontSize: 12,
            color: C.textMid,
            lineHeight: 1.7,
          }}
        >
          Repetí cada frase en voz alta dos o tres veces. En hotelería premium,
          la seguridad al hablar transmite confianza, calidez y profesionalismo.
        </div>
      </div>
    </aside>
  );
}