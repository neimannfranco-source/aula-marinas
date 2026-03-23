"use client";
import { useMemo, useState } from "react";
import type { AppState, TeacherTab } from "@/lib/types";
import { MODULES } from "@/lib/modules";
import { C, FONT, MONO, DISPLAY, input, btnPrimary, btnGhost, btnDanger, getInitial } from "@/lib/constants";
import { MiniBar, ScoreRing } from "./ui";

interface Props {
  appState: AppState;
  setAppState: (s: AppState | ((p: AppState) => AppState)) => void;
}

export default function ProfessorPanel({ appState, setAppState }: Props) {
  const [tab, setTab] = useState<TeacherTab>("progress");
  const [newName, setNewName] = useState("");
  const [newCode, setNewCode] = useState("");

  const normalize = (v: string) =>
    v.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ").trim();

  const rows = useMemo(
    () =>
      appState.students.map((s) => {
        const prog = appState.progress[s.id] || {};
        const dicts = appState.dictations[s.id] || {};
        const done = Object.keys(prog).length;
        const score = MODULES.reduce((sum, m) => sum + (prog[m.id]?.score || 0), 0);
        const dictScores = MODULES.map((m) => dicts[m.id]?.score).filter((v): v is number => typeof v === "number");
        const dictAvg = dictScores.length ? Math.round(dictScores.reduce((a, b) => a + b, 0) / dictScores.length) : null;
        return { ...s, done, score, dictAvg };
      }),
    [appState]
  );

  const addStudent = () => {
    if (!newName.trim() || !newCode.trim()) return;
    const exists = appState.students.some(
      (s) => normalize(s.name) === normalize(newName) || normalize(s.code) === normalize(newCode)
    );
    if (exists) { alert("Esse aluno ou código já existe."); return; }
    const id = `${normalize(newName)}-${Date.now()}`;
    setAppState((p) => ({ ...p, students: [...p.students, { id, name: newName.trim(), code: newCode.trim().toUpperCase() }] }));
    setNewName(""); setNewCode("");
  };

  const removeStudent = (id: string, name: string) => {
    if (!window.confirm(`Remover ${name}?`)) return;
    setAppState((p) => {
      const s = p.students.filter((x) => x.id !== id);
      const prog = { ...p.progress }; delete prog[id];
      const dicts = { ...p.dictations }; delete dicts[id];
      return { ...p, students: s, progress: prog, dictations: dicts };
    });
  };

  const resetAll = () => {
    if (!window.confirm("Apagar TODO o progresso de TODOS os alunos?")) return;
    setAppState((p) => ({ ...p, progress: {}, dictations: {} }));
  };

  const resetStudent = (id: string, name: string) => {
    if (!window.confirm(`Reiniciar TODO de ${name}?`)) return;
    setAppState((p) => ({ ...p, progress: { ...p.progress, [id]: {} }, dictations: { ...p.dictations, [id]: {} } }));
  };

  const tabBtn = (t: TeacherTab, label: string) => (
    <button
      key={t}
      onClick={() => setTab(t)}
      style={{
        flex: 1, borderRadius: 9, padding: "8px 0", fontSize: 12, fontWeight: 600,
        border: "none", cursor: "pointer", fontFamily: FONT,
        background: tab === t ? C.surface : "transparent",
        color: tab === t ? C.text : C.textDim,
        boxShadow: tab === t ? `0 0 0 1px ${C.border}` : "none",
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 20, padding: 24, marginTop: 16 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, fontFamily: DISPLAY, color: C.text }}>Painel do Professor</h3>
        <button onClick={resetAll} style={{ ...btnDanger, fontSize: 11 }}>🗑 Tudo</button>
      </div>

      <div style={{ display: "flex", gap: 4, background: C.bg3, borderRadius: 12, padding: 4, marginBottom: 20 }}>
        {tabBtn("progress", "📊 Progresso")}
        {tabBtn("students", "👥 Alunos")}
        {tabBtn("dictations", "🎙 Ditados")}
      </div>

      {/* PROGRESSO */}
      {tab === "progress" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 8, maxHeight: 420, overflowY: "auto" }}>
          {rows.length === 0 && <p style={{ color: C.textDim, fontSize: 13 }}>Nenhum aluno cadastrado.</p>}
          {rows.map((r) => (
            <div key={r.id} style={{ background: C.bg3, border: `1px solid ${C.border}`, borderRadius: 14, padding: "12px 16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(74,222,128,0.1)", border: `1px solid rgba(74,222,128,0.28)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: C.green, fontFamily: MONO }}>
                  {getInitial(r.name)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: C.text }}>{r.name}</div>
                  <div style={{ fontSize: 11, color: C.textDim, fontFamily: MONO }}>{r.done}/{MODULES.length} mód · {r.score} pts</div>
                </div>
                <button onClick={() => resetStudent(r.id, r.name)} style={btnDanger}>Reset</button>
              </div>
              <MiniBar value={r.done} max={MODULES.length} />
            </div>
          ))}
        </div>
      )}

      {/* ALUNOS */}
      {tab === "students" && (
        <div>
          <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
            <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Nome do aluno" style={{ ...input, flex: 2 }} />
            <input value={newCode} onChange={(e) => setNewCode(e.target.value)} placeholder="Senha" style={{ ...input, flex: 1 }} />
            <button onClick={addStudent} style={{ ...btnPrimary, padding: "0 16px", whiteSpace: "nowrap" }}>+ Adicionar</button>
          </div>
          <div style={{ maxHeight: 320, overflowY: "auto", display: "flex", flexDirection: "column", gap: 4 }}>
            {appState.students.length === 0 && <p style={{ color: C.textDim, fontSize: 13 }}>Nenhum aluno ainda.</p>}
            {appState.students.map((s) => (
              <div key={s.id} style={{ background: C.bg3, border: `1px solid ${C.border}`, borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(74,222,128,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: C.green }}>{getInitial(s.name)}</div>
                <div style={{ flex: 1, fontSize: 14, color: C.text }}>{s.name}</div>
                <div style={{ fontSize: 11, color: C.textDim, fontFamily: MONO }}>{s.code}</div>
                <button onClick={() => removeStudent(s.id, s.name)} style={{ background: "transparent", border: "none", color: C.red, cursor: "pointer", fontSize: 16, padding: "0 4px" }}>×</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* DITADOS */}
      {tab === "dictations" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10, maxHeight: 420, overflowY: "auto" }}>
          {rows.map((r) => {
            const dicts = appState.dictations[r.id] || {};
            const hasDicts = MODULES.some((m) => dicts[m.id]);
            return (
              <div key={r.id} style={{ background: C.bg3, border: `1px solid ${C.border}`, borderRadius: 14, padding: "12px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontWeight: 600, fontSize: 14, color: C.text }}>{r.name}</span>
                  {r.dictAvg !== null && (
                    <span style={{ fontFamily: MONO, fontSize: 11, color: C.green, background: "rgba(74,222,128,0.1)", padding: "2px 8px", borderRadius: 20 }}>
                      avg {r.dictAvg}%
                    </span>
                  )}
                </div>
                {!hasDicts && <div style={{ fontSize: 12, color: C.textDim }}>Sem ditados ainda</div>}
                {MODULES.filter((m) => dicts[m.id]).map((m) => {
                  const d = dicts[m.id];
                  const sc = d.score >= 80 ? C.correct : d.score >= 50 ? C.accent : C.wrong;
                  return (
                    <div key={m.id} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: 12, color: C.textMid, flex: 1 }}>{m.emoji} {m.title}</span>
                      <span style={{ fontFamily: MONO, fontSize: 12, fontWeight: 700, color: sc }}>{d.score}%</span>
                      <MiniBar value={d.score} max={100} color={sc} />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

