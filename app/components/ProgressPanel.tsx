"use client";

import type { AppState } from "@/lib/types";
import { MODULES } from "@/lib/modules";
import { C, FONT } from "@/lib/constants";

type Props = {
  appState: AppState;
};

export default function ProgressPanel({ appState }: Props) {
  const currentStudent =
    appState.students.find((s) => s.id === appState.currentStudentId) ?? null;

  if (!currentStudent) return null;

  const progress = appState.progress?.[currentStudent.id] ?? {};
  const completed = Object.keys(progress).filter((key) => progress[key]).length;
  const total = MODULES.length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <aside
      style={{
        background: "rgba(6, 12, 10, 0.6)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 24,
        padding: 18,
        fontFamily: FONT,
        display: "grid",
        gap: 16,
        position: "sticky",
        top: 76,
        boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
      }}
    >
      {/* HEADER */}
      <div>
        <h3 style={{ margin: 0, fontSize: 18, color: C.text }}>
          Progreso
        </h3>
        <div style={{ marginTop: 4, fontSize: 13, color: C.textDim }}>
          {currentStudent.name}
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: 18,
          padding: 14,
          display: "grid",
          gap: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            fontWeight: 700,
            color: C.text,
          }}
        >
          <span>Módulos completados</span>
          <span>
            {completed}/{total}
          </span>
        </div>

        <div
          style={{
            height: 12,
            borderRadius: 999,
            background: "rgba(255,255,255,0.06)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${percent}%`,
              height: "100%",
              borderRadius: 999,
              background: "linear-gradient(135deg, #22c55e, #16a34a)",
              transition: "width 0.3s ease",
            }}
          />
        </div>

        <div style={{ fontSize: 13, color: C.textDim }}>
          {percent}% completado
        </div>
      </div>

      {/* STATUS */}
      <div
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: 18,
          padding: 14,
          display: "grid",
          gap: 8,
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>
          Estado
        </div>

        <div style={{ fontSize: 13, color: C.textDim }}>
          Alumno activo: {currentStudent.name}
        </div>

        <div style={{ fontSize: 13, color: C.textDim }}>
          Total de módulos: {total}
        </div>

        <div style={{ fontSize: 13, color: C.textDim }}>
          Módulos pendientes: {Math.max(total - completed, 0)}
        </div>
      </div>
    </aside>
  );
}