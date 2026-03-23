"use client";

import type { AppState } from "@/lib/types";
import { MODULES } from "@/lib/modules";
import { C, FONT } from "@/lib/constants";

type Props = {
  appState: AppState;
  selectedModuleId: string;
  setSelectedModuleId: React.Dispatch<React.SetStateAction<string>>;
  activeCategory: string;
};

export default function Sidebar({
  appState,
  selectedModuleId,
  setSelectedModuleId,
  activeCategory,
}: Props) {
  const currentStudent =
    appState.students.find((s) => s.id === appState.currentStudentId) ?? null;

  const filteredModules =
    activeCategory === "Todos"
      ? MODULES
      : MODULES.filter((m) => m.category === activeCategory);

  return (
    <aside
      style={{
        background: C.bg2,
        border: `1px solid ${C.border}`,
        borderRadius: 24,
        padding: 16,
        fontFamily: FONT,
        display: "grid",
        gap: 12,
        position: "sticky",
        top: 76,
      }}
    >
      <div>
        <h3 style={{ margin: 0, fontSize: 18, color: C.text }}>Módulos</h3>
        <div style={{ marginTop: 4, fontSize: 13, color: C.textDim }}>
          {filteredModules.length} disponibles
        </div>
      </div>

      <div style={{ display: "grid", gap: 10 }}>
        {filteredModules.map((m) => {
          const completed =
            !!currentStudent &&
            !!appState.progress?.[currentStudent.id]?.[m.id];

          const isActive = selectedModuleId === m.id;

          return (
            <button
              key={m.id}
              onClick={() => setSelectedModuleId(m.id)}
              style={{
                textAlign: "left",
                border: `1px solid ${
                  isActive ? "rgba(74,222,128,0.35)" : C.border
                }`,
                background: isActive
                  ? "rgba(74,222,128,0.10)"
                  : C.bg3,
                borderRadius: 18,
                padding: 14,
                cursor: "pointer",
                display: "grid",
                gap: 6,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    minWidth: 0,
                  }}
                >
                  <span style={{ fontSize: 20 }}>{m.emoji}</span>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: C.text,
                      lineHeight: 1.2,
                    }}
                  >
                    {m.title}
                  </span>
                </div>

                {completed && (
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: C.green,
                      whiteSpace: "nowrap",
                    }}
                  >
                    ✓
                  </span>
                )}
              </div>

              <div style={{ fontSize: 12, color: C.textDim }}>
                {m.category}
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}