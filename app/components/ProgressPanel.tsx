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

  if (!currentStudent) {
    return null;
  }

  const progress = appState.progress?.[currentStudent.id] ?? {};
  const completed = Object.keys(progress).filter((key) => progress[key]).length;
  const total = MODULES.length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div
      style={{
        background: C.bg2,
        border: `1px solid ${C.border}`,
        borderRadius: 24,
        padding: 20,
        fontFamily: FONT,
        display: "grid",
        gap: 16,
      }}
    >
      <div>
        <h3 style={{ margin: 0, fontSize: 20, color: C.text }}>Progreso</h3>
        <div style={{ marginTop: 6, fontSize: 13, color: C.textDim }}>
          {currentStudent.name}
        </div>
      </div>

      <div
        style={{
          background: C.bg3,
          border: `1px solid ${C.border}`,
          borderRadius: 18,
          padding: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 10,
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
            background: "rgba(255,255,255,0.08)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${percent}%`,
              height: "100%",
              background: C.green,
              borderRadius: 999,
            }}
          />
        </div>

        <div
          style={{
            marginTop: 10,
            fontSize: 13,
            color: C.textDim,
          }}
        >
          {percent}% completado
        </div>
      </div>

      <div
        style={{
          background: C.bg3,
          border: `1px solid ${C.border}`,
          borderRadius: 18,
          padding: 16,
          display: "grid",
          gap: 10,
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
    </div>
  );
}