"use client";

import { useMemo, useState } from "react";
import type { AppState } from "@/lib/types";
import { MODULES } from "@/lib/modules";
import { C, FONT, input, btnPrimary, btnGhost, btnDanger } from "@/lib/constants";

type Props = {
  appState: AppState;
  setAppState: React.Dispatch<React.SetStateAction<AppState>>;
};

export default function ProfessorPanel({ appState, setAppState }: Props) {
  const [studentName, setStudentName] = useState("");
  const [studentCode, setStudentCode] = useState("");
  const [msg, setMsg] = useState("");

  const students = appState.students ?? [];

  const totals = useMemo(() => {
    return students.map((student) => {
      const progress = appState.progress?.[student.id] ?? {};
      const completed = Object.keys(progress).filter((key) => progress[key]).length;

      return {
        id: student.id,
        name: student.name,
        code: student.code,
        completed,
        total: MODULES.length,
      };
    });
  }, [students, appState.progress]);

  const addStudent = () => {
    const name = studentName.trim();
    const code = studentCode.trim().toUpperCase();

    if (!name || !code) {
      setMsg("Complete nombre y contraseña.");
      return;
    }

    const exists = students.some(
      (s) => s.name.toLowerCase() === name.toLowerCase() || s.code === code
    );

    if (exists) {
      setMsg("Ya existe un alumno con ese nombre o contraseña.");
      return;
    }

    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    setAppState((prev) => ({
      ...prev,
      students: [
        ...prev.students,
        {
          id,
          name,
          code,
        },
      ],
    }));

    setStudentName("");
    setStudentCode("");
    setMsg("✓ Alumno agregado.");
  };

  const removeStudent = (studentId: string) => {
    const confirmed = window.confirm("¿Eliminar este alumno?");
    if (!confirmed) return;

    setAppState((prev) => {
      const nextStudents = prev.students.filter((s) => s.id !== studentId);

      const nextProgress = { ...prev.progress };
      delete nextProgress[studentId];

      const nextDictations = { ...prev.dictations };
      delete nextDictations[studentId];

      return {
        ...prev,
        students: nextStudents,
        currentStudentId:
          prev.currentStudentId === studentId ? null : prev.currentStudentId,
        progress: nextProgress,
        dictations: nextDictations,
      };
    });
  };

  const resetStudentProgress = (studentId: string) => {
    const confirmed = window.confirm("¿Resetear progreso de este alumno?");
    if (!confirmed) return;

    setAppState((prev) => ({
      ...prev,
      progress: {
        ...prev.progress,
        [studentId]: {},
      },
    }));
  };

  const resetAll = () => {
    const confirmed = window.confirm("¿Resetear TODO el progreso de todos los alumnos?");
    if (!confirmed) return;

    setAppState((prev) => ({
      ...prev,
      progress: {},
      dictations: {},
    }));
  };

  return (
    <div
      style={{
        marginTop: 16,
        marginBottom: 20,
        background: C.bg2,
        border: `1px solid ${C.border}`,
        borderRadius: 24,
        padding: 20,
        fontFamily: FONT,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
          marginBottom: 18,
        }}
      >
        <div>
          <h3 style={{ margin: 0, fontSize: 22, color: C.text }}>Panel del profesor</h3>
          <div style={{ fontSize: 13, color: C.textDim, marginTop: 4 }}>
            Alumnos, accesos y progreso
          </div>
        </div>

        <button onClick={resetAll} style={btnDanger}>
          Reset total
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 10,
          marginBottom: 18,
        }}
      >
        <input
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Nombre del alumno"
          style={input}
        />
        <input
          value={studentCode}
          onChange={(e) => setStudentCode(e.target.value)}
          placeholder="Contraseña"
          style={input}
        />
        <button onClick={addStudent} style={btnPrimary}>
          Agregar alumno
        </button>
      </div>

      {msg && (
        <div
          style={{
            marginBottom: 14,
            fontSize: 13,
            color: msg.startsWith("✓") ? C.green : C.red,
          }}
        >
          {msg}
        </div>
      )}

      <div style={{ display: "grid", gap: 12 }}>
        {totals.length === 0 && (
          <div
            style={{
              border: `1px solid ${C.border}`,
              borderRadius: 18,
              padding: 16,
              color: C.textDim,
              background: C.bg3,
            }}
          >
            Todavía no hay alumnos cargados.
          </div>
        )}

        {totals.map((student) => (
          <div
            key={student.id}
            style={{
              border: `1px solid ${C.border}`,
              borderRadius: 18,
              padding: 16,
              background: C.bg3,
              display: "grid",
              gap: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: C.text }}>
                  {student.name}
                </div>
                <div style={{ fontSize: 13, color: C.textDim }}>
                  Contraseña: {student.code}
                </div>
              </div>

              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: C.green,
                  background: "rgba(74,222,128,0.10)",
                  border: "1px solid rgba(74,222,128,0.25)",
                  borderRadius: 999,
                  padding: "6px 10px",
                }}
              >
                {student.completed}/{student.total} módulos
              </div>
            </div>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <button onClick={() => resetStudentProgress(student.id)} style={btnGhost}>
                Reset progreso
              </button>
              <button onClick={() => removeStudent(student.id)} style={btnDanger}>
                Eliminar alumno
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}