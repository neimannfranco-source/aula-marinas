"use client";

import { useEffect, useState } from "react";
import type { AppState, LoadStatus } from "@/lib/types";
import { MODULES } from "@/lib/modules";
import {
  C,
  FONT,
  MONO,
  DISPLAY,
  CATEGORIES,
  btnGhost,
  btnDanger,
  catColor,
  getInitial,
  PROFESSOR_PASSWORD,
  LS_KEY,
  input,
} from "@/lib/constants";
import { loadRemoteState, saveRemoteState } from "@/lib/supabase";

import Login from "./components/Login";
import ProfessorPanel from "./components/ProfessorPanel";
import Sidebar from "./components/Sidebar";
import ModuleView from "./components/ModuleView";
import ProgressPanel from "./components/ProgressPanel";

function createInitialState(): AppState {
  return {
    students: [],
    currentStudentId: null,
    progress: {},
    dictations: {},
    lastPosition: {},
    lastVisitedModuleId: {},
  };
}

export default function Home() {
  const [appState, setAppState] = useState<AppState>(createInitialState);
  const [loadStatus, setLoadStatus] = useState<LoadStatus>("loading");
  const [selectedModuleId, setSelectedModuleId] = useState(
    MODULES[0]?.id ?? ""
  );
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [showProfPanel, setShowProfPanel] = useState(false);
  const [profUnlocked, setProfUnlocked] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showChangePwd, setShowChangePwd] = useState(false);
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [pwdMsg, setPwdMsg] = useState("");
  const [resumeToken, setResumeToken] = useState(0);

  const currentStudent =
    appState.students.find((s) => s.id === appState.currentStudentId) ?? null;

  const lastVisitedId = currentStudent
  ? appState.lastVisitedModuleId?.[currentStudent.id] ?? selectedModuleId
  : selectedModuleId;

const lastPosition = currentStudent
  ? appState.lastPosition?.[currentStudent.id]?.[lastVisitedId] ?? null
  : null;

const continueModule = lastPosition
  ? MODULES.find((m) => m.id === lastPosition.moduleId)
  : null;

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const remote = await loadRemoteState();
        if (!mounted) return;

        if (remote) {
          setAppState({ ...remote, currentStudentId: null });
          setLoadStatus("ready");
          return;
        }
      } catch (err) {
        console.error("SUPABASE LOAD ERROR:", err);
      }

      if (!mounted) return;

      try {
        const saved = localStorage.getItem(LS_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          setAppState({
            ...createInitialState(),
            ...parsed,
            currentStudentId: null,
          });
        } else {
          setAppState(createInitialState());
        }
      } catch {
        setAppState(createInitialState());
      }

      setLoadStatus("ready");
    })();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (loadStatus !== "ready") return;

    const timer = setTimeout(async () => {
      try {
        localStorage.setItem(LS_KEY, JSON.stringify(appState));
      } catch {}

      try {
        await saveRemoteState(appState);
      } catch (err) {
        console.error("SUPABASE SAVE ERROR:", err);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [appState, loadStatus]);

  const logout = () => {
    setAppState((prev) => ({ ...prev, currentStudentId: null }));
    setSelectedModuleId(MODULES[0]?.id ?? "");
    setShowProfPanel(false);
    setProfUnlocked(false);
    setShowChangePwd(false);
    setPwdMsg("");
  };
  const handleSelectModule = (moduleId: string) => {
  setSelectedModuleId(moduleId);
  if (!appState.currentStudentId) return;
  setAppState((prev) => ({
    ...prev,
    lastVisitedModuleId: {
      ...prev.lastVisitedModuleId,
      [prev.currentStudentId!]: moduleId,
    },
  }));
};

  const handleProfessorClick = () => {
    if (profUnlocked) {
      setShowProfPanel((v) => !v);
      return;
    }

    const pwd = window.prompt("Senha do professor:");
    if (pwd === PROFESSOR_PASSWORD) {
      setProfUnlocked(true);
      setShowProfPanel(true);
    } else if (pwd !== null) {
      alert("Senha incorreta.");
    }
  };

  const changePwd = () => {
    if (!newPwd.trim()) {
      setPwdMsg("Digite uma nova senha.");
      return;
    }

    if (newPwd.trim().length < 4) {
      setPwdMsg("Mínimo 4 caracteres.");
      return;
    }

    if (newPwd.trim() !== confirmPwd.trim()) {
      setPwdMsg("As senhas não coincidem.");
      return;
    }

    if (!currentStudent) return;

    setAppState((prev) => ({
      ...prev,
      students: prev.students.map((student) =>
        student.id === currentStudent.id
          ? { ...student, code: newPwd.trim().toUpperCase() }
          : student
      ),
    }));

    setPwdMsg("✓ Senha atualizada.");
    setNewPwd("");
    setConfirmPwd("");

    setTimeout(() => {
      setShowChangePwd(false);
      setPwdMsg("");
    }, 1500);
  };

  if (loadStatus === "loading") {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: C.bg,
          fontFamily: FONT,
          gap: 16,
        }}
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
          @keyframes spin { to { transform: rotate(360deg); } }
          * { box-sizing: border-box; }
        `}</style>

        <div
          style={{
            width: 48,
            height: 48,
            border: `3px solid ${C.border}`,
            borderTop: `3px solid ${C.green}`,
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
          }}
        />
        <span style={{ color: C.textDim, fontSize: 13 }}>
          Carregando Aula Marinas...
        </span>
      </div>
    );
  }

  if (!currentStudent) {
    return (
      <>
        <Login
          appState={appState}
          setAppState={setAppState}
          onProfessor={handleProfessorClick}
          showProfPanel={showProfPanel}
        />

        {showProfPanel && profUnlocked && (
          <ProfessorPanel
            appState={appState}
            setAppState={setAppState}
            onClose={() => setShowProfPanel(false)}
          />
        )}
      </>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "transparent",
        color: C.text,
        fontFamily: FONT,
        position: "relative",
      }}
    >
      <img
        src="/villa.jpg"
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.22) saturate(1.05)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "linear-gradient(160deg, rgba(6,17,14,0.60) 0%, rgba(9,24,18,0.80) 100%)",
          zIndex: 0,
        }}
      />
      <img
        src="/villa.jpg"
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.22) saturate(1.05)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "linear-gradient(160deg, rgba(6,17,14,0.60) 0%, rgba(9,24,18,0.80) 100%)",
          zIndex: 0,
        }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        input::placeholder, textarea::placeholder { color: ${C.textDim}; }
        input:focus, textarea:focus { border-color: rgba(74,222,128,0.28) !important; outline: none; }
        button { transition: opacity 0.15s; }
        button:hover { opacity: 0.86; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 99px; }
      `}</style>

      <header
        style={{
          background: C.bg2,
          borderBottom: `1px solid ${C.border}`,
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 24px",
            height: 56,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", gap: 8, marginRight: 4 }}
          >
            <span style={{ fontSize: 18 }}>🏨</span>
            <span
              style={{
                fontWeight: 800,
                fontSize: 15,
                letterSpacing: "-0.02em",
                fontFamily: DISPLAY,
                color: C.text,
              }}
            >
              Aula Marinas
            </span>
          </div>

          <div style={{ width: 1, height: 20, background: C.border }} />

          <div style={{ display: "flex", gap: 3, overflowX: "auto", flex: 1 }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  borderRadius: 20,
                  padding: "4px 11px",
                  fontSize: 12,
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  fontFamily: FONT,
                  background: activeCategory === cat ? catColor(cat) : "transparent",
                  color: activeCategory === cat ? "#052e16" : C.textDim,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <button
              onClick={() => {
                setShowChangePwd((v) => !v);
                setShowProfPanel(false);
              }}
              style={{ ...btnGhost, padding: "5px 10px", fontSize: 13 }}
            >
              🔑
            </button>

            <button
              onClick={handleProfessorClick}
              style={{ ...btnGhost, padding: "5px 10px", fontSize: 13 }}
            >
              👨‍🏫
            </button>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: C.bg3,
                border: `1px solid ${C.border}`,
                borderRadius: 20,
                padding: "4px 12px 4px 6px",
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "rgba(74,222,128,0.1)",
                  border: `1px solid rgba(74,222,128,0.28)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 700,
                  color: C.green,
                  fontFamily: MONO,
                }}
              >
                {getInitial(currentStudent.name)}
              </div>

              <span style={{ fontSize: 13, fontWeight: 600, color: C.text }}>
                {currentStudent.name}
              </span>
            </div>

            <button onClick={logout} style={btnDanger}>
              Cerrar sesión
            </button>
          </div>
        </div>

        {showChangePwd && (
          <div
            style={{
              background: C.bg2,
              borderTop: `1px solid ${C.border}`,
              padding: "14px 24px",
            }}
          >
            <div
              style={{
                maxWidth: 500,
                display: "flex",
                gap: 8,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <input
                type="password"
                value={newPwd}
                onChange={(e) => setNewPwd(e.target.value)}
                placeholder="Nova senha"
                style={{ ...input, flex: 1, minWidth: 140 }}
              />

              <input
                type="password"
                value={confirmPwd}
                onChange={(e) => setConfirmPwd(e.target.value)}
                placeholder="Confirmar"
                style={{ ...input, flex: 1, minWidth: 130 }}
              />

              <button onClick={changePwd} style={btnGhost}>
                Salvar
              </button>

              <button
                onClick={() => {
                  setShowChangePwd(false);
                  setPwdMsg("");
                }}
                style={btnGhost}
              >
                Cancelar
              </button>

              {pwdMsg && (
                <span
                  style={{
                    fontSize: 13,
                    color: pwdMsg.startsWith("✓") ? C.green : C.red,
                    width: "100%",
                  }}
                >
                  {pwdMsg}
                </span>
              )}
            </div>
          </div>
        )}
      </header>

      {showProfPanel && profUnlocked && (
        <ProfessorPanel
          appState={appState}
          setAppState={setAppState}
          onClose={() => setShowProfPanel(false)}
        />
      )}

      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "24px 24px 64px",
          display: "grid",
          gridTemplateColumns: sidebarOpen ? "264px 1fr 284px" : "1fr 284px",
          gap: 20,
          alignItems: "start",
          position: "relative",
          zIndex: 1,
        }}
      >
        {sidebarOpen && (
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setSidebarOpen(false)}
              style={{
                position: "absolute",
                top: 12,
                right: -14,
                zIndex: 10,
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: C.bg2,
                border: `1px solid ${C.border}`,
                color: C.textDim,
                cursor: "pointer",
                fontSize: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: MONO,
              }}
            >
              ◀
            </button>

            <Sidebar
  appState={appState}
  selectedModuleId={selectedModuleId}
  setSelectedModuleId={handleSelectModule}
  activeCategory={activeCategory}
/>
          </div>
        )}

        <div>
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              style={{ ...btnGhost, marginBottom: 16, fontSize: 12 }}
            >
              ▶ Módulos
            </button>
          )}

          {lastPosition && continueModule && (
            <div
              style={{
                marginBottom: 16,
                borderRadius: 18,
                border: `1px solid ${C.border}`,
                overflow: "hidden",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                flexWrap: "wrap",
                padding: 20,
              }}
            >
              <img
                src="/villa.jpg"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.28) blur(2px)",
                  transform: "scale(1.04)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(90deg, rgba(6,17,26,0.82) 0%, rgba(6,17,26,0.40) 100%)",
                }}
              />

              <div style={{ position: "relative" }}>
                <div style={{ fontSize: 12, color: C.textDim, marginBottom: 4, fontWeight: 600 }}>
                  Continuar donde dejaste
                </div>
                <div style={{ fontSize: 18, fontWeight: 800, color: C.text, marginBottom: 4 }}>
                  {continueModule.emoji} {continueModule.title}
                </div>
                <div style={{ fontSize: 13, color: C.textDim }}>
                  {lastPosition.tab === "phrases" && `Te quedaste en la frase ${lastPosition.phraseIndex + 1}`}
                  {lastPosition.tab === "dialogue" && `Te quedaste en el diálogo ${lastPosition.dialogueIndex + 1}`}
                  {lastPosition.tab === "quiz" && `Te quedaste en el quiz ${lastPosition.quizIndex + 1}`}
                </div>
              </div>

              <button
                onClick={() => {
                  setResumeToken((v) => v + 1);
                  handleSelectModule(lastPosition.moduleId);
                  setActiveCategory("Todos");
                  if (!sidebarOpen) setSidebarOpen(true);
                }}
                style={{
                  position: "relative",
                  background: "rgba(214,179,106,0.18)",
                  color: "#E7D19A",
                  border: "1px solid rgba(214,179,106,0.40)",
                  borderRadius: 12,
                  padding: "10px 18px",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: FONT,
                  backdropFilter: "blur(8px)",
                }}
              >
                ▶ Continuar
              </button>
            </div>
          )}

          <ModuleView
            key={`${selectedModuleId}-${resumeToken}`}
            appState={appState}
            setAppState={setAppState}
            selectedModuleId={selectedModuleId}
            onGoHome={() => {
  handleSelectModule(MODULES[0]?.id ?? "");
  setActiveCategory("Todos");
  setShowProfPanel(false);
  setSidebarOpen(true);
}}
          />
        </div>

        <ProgressPanel appState={appState} />
      </div>
    </div>
  );
}