"use client";

import { useState } from "react";
import type { AppState } from "@/lib/types";
import { MODULES } from "@/lib/modules";
import { C, FONT, DISPLAY } from "@/lib/constants";

type Props = {
  appState: AppState;
  setAppState: React.Dispatch<React.SetStateAction<AppState>>;
  onClose: () => void;
};

export default function ProfessorPanel({
  appState,
  setAppState,
  onClose,
}: Props) {
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentCode, setNewStudentCode] = useState("");
  const [studentMsg, setStudentMsg] = useState("");

  const currentStudent =
    appState.students.find((s) => s.id === appState.currentStudentId) ?? null;

  const currentProgress = currentStudent
    ? appState.progress?.[currentStudent.id] ?? {}
    : {};

  const setCurrentStudent = (studentId: string) => {
    setAppState((prev) => ({
      ...prev,
      currentStudentId: studentId,
    }));
  };

  const createStudent = () => {
    const name = newStudentName.trim();
    const code = newStudentCode.trim().toUpperCase();

    if (!name) {
      setStudentMsg("Ingresá un nombre.");
      return;
    }

    if (!code) {
      setStudentMsg("Ingresá una contraseña.");
      return;
    }

    const existingName = appState.students.some(
      (s) => s.name.trim().toLowerCase() === name.toLowerCase()
    );

    if (existingName) {
      setStudentMsg("Ya existe un alumno con ese nombre.");
      return;
    }

    const newId =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `student-${Date.now()}`;

    const newStudent = {
      id: newId,
      name,
      code,
    };

    setAppState((prev) => ({
      ...prev,
      students: [...prev.students, newStudent],
      currentStudentId: newId,
      progress: {
        ...prev.progress,
        [newId]: {},
      },
    }));

    setNewStudentName("");
    setNewStudentCode("");
    setStudentMsg("✓ Alumno creado correctamente.");
  };

  const deleteCurrentStudent = () => {
    if (!currentStudent) {
      setStudentMsg("No hay alumno seleccionado.");
      return;
    }

    const ok = window.confirm(
      `¿Eliminar a ${currentStudent.name}? Esta acción borrará también su progreso.`
    );

    if (!ok) return;

    setAppState((prev) => {
      const nextStudents = prev.students.filter((s) => s.id !== currentStudent.id);
      const nextProgress = { ...prev.progress };
      delete nextProgress[currentStudent.id];

      return {
        ...prev,
        students: nextStudents,
        currentStudentId: nextStudents[0]?.id ?? null,
        progress: nextProgress,
      };
    });

    setStudentMsg(`✓ Alumno eliminado: ${currentStudent.name}`);
  };

  const toggleModule = (moduleId: string) => {
    if (!currentStudent) return;

    setAppState((prev) => {
      const studentId = currentStudent.id;
      const current = prev.progress?.[studentId] ?? {};
      const nextValue = !current[moduleId];

      return {
        ...prev,
        progress: {
          ...prev.progress,
          [studentId]: {
            ...current,
            [moduleId]: nextValue,
          },
        },
      };
    });
  };

  const markAll = () => {
    if (!currentStudent) return;

    const allDone = Object.fromEntries(MODULES.map((m) => [m.id, true]));

    setAppState((prev) => ({
      ...prev,
      progress: {
        ...prev.progress,
        [currentStudent.id]: allDone,
      },
    }));
  };

  const resetAll = () => {
    if (!currentStudent) return;

    setAppState((prev) => ({
      ...prev,
      progress: {
        ...prev.progress,
        [currentStudent.id]: {},
      },
    }));
  };

  const completedCount = Object.values(currentProgress).filter(Boolean).length;
  const studentSummaries = appState.students.map((student) => {
  const studentProgress = appState.progress?.[student.id] ?? {};
  const completed = Object.values(studentProgress).filter(Boolean).length;
  const total = MODULES.length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return {
    id: student.id,
    name: student.name,
    completed,
    total,
    percent,
  };
});

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 300,
        background: "rgba(3, 8, 7, 0.82)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      willChange: "transform",
      transform: "translateZ(0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 1120,
          maxHeight: "88vh",
          overflowY: "auto",
          background:
            "linear-gradient(180deg, rgba(10,24,22,0.98), rgba(7,18,17,0.99))",
          border: `1px solid ${C.border}`,
          borderRadius: 28,
          padding: 22,
          boxShadow: "0 28px 90px rgba(0,0,0,0.42)",
          fontFamily: FONT,
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 2,
            background:
              "linear-gradient(180deg, rgba(10,24,22,0.98), rgba(10,24,22,0.94))",
            paddingBottom: 16,
            marginBottom: 18,
            borderBottom: `1px solid ${C.border}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: DISPLAY,
                fontSize: 34,
                color: C.text,
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              Panel del profesor
            </div>

            <div
              style={{
                fontSize: 12,
                color: C.textDim,
                marginTop: 8,
              }}
            >
              Control total del alumno, progreso y módulos.
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${C.border}`,
              borderRadius: 999,
              padding: "10px 14px",
              color: C.textMid,
              cursor: "pointer",
              fontFamily: FONT,
              fontWeight: 600,
            }}
          >
            ✕ Cerrar
          </button>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.02)",
            border: `1px solid ${C.border}`,
            borderRadius: 20,
            padding: 16,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: C.textDim,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 12,
              fontWeight: 700,
            }}
          >
            Crear alumno
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr auto",
              gap: 10,
              alignItems: "center",
            }}
          >
            <input
              value={newStudentName}
              onChange={(e) => {
                setNewStudentName(e.target.value);
                setStudentMsg("");
              }}
              placeholder="Nombre del alumno"
              style={{
                width: "100%",
                background: C.bg3,
                border: `1px solid ${C.border}`,
                borderRadius: 12,
                padding: "12px 14px",
                color: C.text,
                fontSize: 14,
                outline: "none",
              }}
            />

            <input
              value={newStudentCode}
              onChange={(e) => {
                setNewStudentCode(e.target.value);
                setStudentMsg("");
              }}
              placeholder="Contraseña"
              style={{
                width: "100%",
                background: C.bg3,
                border: `1px solid ${C.border}`,
                borderRadius: 12,
                padding: "12px 14px",
                color: C.text,
                fontSize: 14,
                outline: "none",
              }}
            />

            <button
              onClick={createStudent}
              style={{
                background: "linear-gradient(180deg, #D6B36A, #B88B3A)",
                color: "#16110A",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: 12,
                padding: "12px 16px",
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: FONT,
                whiteSpace: "nowrap",
              }}
            >
              Crear alumno
            </button>
          </div>

          {studentMsg && (
            <div
              style={{
                marginTop: 10,
                fontSize: 13,
                color: studentMsg.startsWith("✓") ? C.green : C.red,
              }}
            >
              {studentMsg}
            </div>
          )}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 16,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.02)",
              border: `1px solid ${C.border}`,
              borderRadius: 20,
              padding: 16,
            }}
          >
            <div
              style={{
                fontSize: 11,
                color: C.textDim,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 12,
                fontWeight: 700,
              }}
            >
              Alumno activo
            </div>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {appState.students.map((student) => {
                const active = student.id === appState.currentStudentId;

                return (
                  <button
                    key={student.id}
                    onClick={() => {
                      setCurrentStudent(student.id);
                      setStudentMsg("");
                    }}
                    style={{
                      padding: "10px 14px",
                      borderRadius: 999,
                      border: active
                        ? "1px solid rgba(200,169,110,0.28)"
                        : `1px solid ${C.border}`,
                      background: active
                        ? "rgba(200,169,110,0.12)"
                        : "rgba(255,255,255,0.03)",
                      color: active ? C.text : C.textMid,
                      cursor: "pointer",
                      fontFamily: FONT,
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {student.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.02)",
              border: `1px solid ${C.border}`,
              borderRadius: 20,
              padding: 16,
            }}
          >
            <div
              style={{
                fontSize: 11,
                color: C.textDim,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 12,
                fontWeight: 700,
              }}
            >
              Resumen rápido
            </div>

            <div style={{ display: "grid", gap: 10, fontSize: 13 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 8,
                }}
              >
                <span style={{ color: C.textDim }}>Alumno</span>
                <span style={{ color: C.text, fontWeight: 600 }}>
                  {currentStudent?.name ?? "—"}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 8,
                }}
              >
                <span style={{ color: C.textDim }}>Módulos completos</span>
                <span style={{ color: C.text, fontWeight: 600 }}>
                  {completedCount}/{MODULES.length}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 8,
                }}
              >
                <span style={{ color: C.textDim }}>Estado</span>
                <span
                  style={{
                    color: currentStudent ? C.green : C.textDim,
                    fontWeight: 600,
                  }}
                >
                  {currentStudent ? "Activo" : "Sin alumno"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            marginBottom: 16,
          }}
        >
          <button
            onClick={markAll}
            disabled={!currentStudent}
            style={{
              background: "linear-gradient(180deg, #D6B36A, #B88B3A)",
              color: "#16110A",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 12,
              padding: "10px 14px",
              fontWeight: 700,
              cursor: currentStudent ? "pointer" : "not-allowed",
              fontFamily: FONT,
              opacity: currentStudent ? 1 : 0.5,
            }}
          >
            Marcar todo
          </button>

          <button
            onClick={resetAll}
            disabled={!currentStudent}
            style={{
              background: "rgba(224,112,112,0.10)",
              color: C.red,
              border: `1px solid ${C.redBorder}`,
              borderRadius: 12,
              padding: "10px 14px",
              fontWeight: 700,
              cursor: currentStudent ? "pointer" : "not-allowed",
              fontFamily: FONT,
              opacity: currentStudent ? 1 : 0.5,
            }}
          >
            Resetear todo
          </button>

          <button
            onClick={deleteCurrentStudent}
            disabled={!currentStudent}
            style={{
              background: "rgba(224,112,112,0.10)",
              color: C.red,
              border: `1px solid ${C.redBorder}`,
              borderRadius: 12,
              padding: "10px 14px",
              fontWeight: 700,
              cursor: currentStudent ? "pointer" : "not-allowed",
              fontFamily: FONT,
              opacity: currentStudent ? 1 : 0.5,
            }}
          >
            Eliminar alumno
          </button>
        </div>
        <div
  style={{
    background: "rgba(255,255,255,0.02)",
    border: `1px solid ${C.border}`,
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
  }}
>
  <div
    style={{
      fontSize: 11,
      color: C.textDim,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      marginBottom: 14,
      fontWeight: 700,
    }}
  >
    Dashboard del hotel
  </div>

  <div style={{ display: "grid", gap: 10 }}>
    {studentSummaries.map((student) => (
      <div
        key={student.id}
        style={{
          background: "rgba(255,255,255,0.025)",
          border: `1px solid ${C.border}`,
          borderRadius: 16,
          padding: 14,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            marginBottom: 10,
          }}
        >
          <div style={{ color: C.text, fontWeight: 700 }}>
            {student.name}
          </div>

          <div
            style={{
              color: C.textDim,
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            {student.completed}/{student.total}
          </div>
        </div>

        <div
          style={{
            height: 6,
            borderRadius: 999,
            background: "rgba(255,255,255,0.08)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${student.percent}%`,
              height: "100%",
              borderRadius: 999,
              background: "linear-gradient(90deg, #D6B36A, #E4C98E)",
            }}
          />
        </div>

        <div
          style={{
            marginTop: 8,
            fontSize: 12,
            color: C.textDim,
          }}
        >
          {student.percent}% completado
        </div>
      </div>
    ))}
  </div>
</div>

        <div
          style={{
            background: "rgba(255,255,255,0.02)",
            border: `1px solid ${C.border}`,
            borderRadius: 20,
            padding: 16,
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: C.textDim,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 14,
              fontWeight: 700,
            }}
          >
            Control por módulo
          </div>

          <div style={{ display: "grid", gap: 10 }}>
            {MODULES.map((m) => {
              const done = !!currentProgress[m.id];

              return (
                <button
                  key={m.id}
                  onClick={() => toggleModule(m.id)}
                  disabled={!currentStudent}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                    textAlign: "left",
                    padding: "12px 14px",
                    borderRadius: 14,
                    border: done
                      ? "1px solid rgba(90,158,122,0.28)"
                      : `1px solid ${C.border}`,
                    background: done
                      ? "rgba(90,158,122,0.10)"
                      : "rgba(255,255,255,0.02)",
                    color: done ? C.text : C.textMid,
                    cursor: currentStudent ? "pointer" : "not-allowed",
                    fontFamily: FONT,
                    opacity: currentStudent ? 1 : 0.5,
                  }}
                >
                  <span>
                    {m.emoji} {m.title}
                  </span>

                  <span
                    style={{
                      fontSize: 12,
                      color: done ? C.green : C.textDim,
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {done ? "Completo" : "Pendiente"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}