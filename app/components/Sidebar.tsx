"use client";
import type { AppState } from "@/lib/types";
import { MODULES } from "@/lib/modules";
import { C, FONT, MONO, catColor, catBg } from "@/lib/constants";
import { MiniBar } from "./ui";

interface Props {
  appState: AppState;
  selectedModuleId: string;
  setSelectedModuleId: (id: string) => void;
  activeCategory: string;
}

export default function Sidebar({ appState, selectedModuleId, setSelectedModuleId, activeCategory }: Props) {
  const currentStudentId = appState.currentStudentId!;
  const studentProgress = appState.progress[currentStudentId] || {};

  const filtered = activeCategory === "Todos"
    ? MODULES
    : MODULES.filter((m) => m.category === activeCategory);

  const completed = filtered.filter((m) => studentProgress[m.id]).length;

  return (
    <aside style={{ position: "sticky", top: 72 }}>
      <div
        style={{
          background: C.bg2,
          border: `1px solid ${C.border}`,
          borderRadius: 20,
          padding: 16,
          maxHeight: "calc(100vh - 120px)",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 14,
            padding: "0 4px",
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.09em",
              color: C.textDim,
              fontFamily: MONO,
              textTransform: "uppercase",
            }}
          >
            Módulos
          </span>
          <span style={{ fontSize: 11, color: C.textDim, fontFamily: MONO }}>
            {completed}/{filtered.length}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {filtered.map((m) => {
            const p = studentProgress[m.id];
            const isActive = m.id === selectedModuleId;

            return (
              <button
                key={m.id}
                onClick={() => setSelectedModuleId(m.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  borderRadius: 12,
                  padding: "9px 10px",
                  background: isActive ? catBg(m.category) : "transparent",
                  border: `1px solid ${isActive ? catColor(m.category) + "33" : "transparent"}`,
                  cursor: "pointer",
                  textAlign: "left",
                  width: "100%",
                  fontFamily: FONT,
                }}
              >
                <span style={{ fontSize: 15, flexShrink: 0 }}>{m.emoji}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? C.text : C.textMid,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {m.title}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 1 }}>
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: catColor(m.category),
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: 10, color: C.textDim, fontFamily: MONO }}>{m.level}</span>
                  </div>
                </div>
                {p ? (
                  <div style={{ flexShrink: 0, textAlign: "right" }}>
                    <div style={{ fontFamily: MONO, fontSize: 11, fontWeight: 700, color: C.green }}>
                      {p.score}/{p.total}
                    </div>
                    <div style={{ fontSize: 10, color: C.green }}>✓</div>
                  </div>
                ) : (
                  <span style={{ color: C.textDim, fontSize: 14 }}>·</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

