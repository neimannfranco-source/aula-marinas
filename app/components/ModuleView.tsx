"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MODULES } from "@/lib/modules";
import type { AppState, TabType } from "@/lib/types";
import {
  C,
  FONT,
  DISPLAY,
  catColor,
  btnGhost,
  btnDanger,
} from "@/lib/constants";

type Props = {
  appState: AppState;
  setAppState: React.Dispatch<React.SetStateAction<AppState>>;
  selectedModuleId: string;
  resumeToken?: number;
  onGoHome?: () => void;
  onPositionChange?: (position: {
    moduleId: string;
    tab: TabType;
    phraseIndex: number;
    dialogueIndex: number;
    quizIndex: number;
  }) => void;
};

export default function ModuleView({
  appState,
  setAppState,
  selectedModuleId,
  resumeToken,
  onGoHome,
  onPositionChange,
}: Props) {
  const module = useMemo(
    () => MODULES.find((m) => m.id === selectedModuleId) ?? MODULES[0],
    [selectedModuleId]
  );

  const [activeTab, setActiveTab] = useState<TabType>("phrases");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showTranslation, setShowTranslation] = useState(true);
  const [speaking, setSpeaking] = useState(false);
  const [didRestorePosition, setDidRestorePosition] = useState(false);

  const stopSpeak = () => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const synth = window.speechSynthesis;
    synth.getVoices();
    speechSynthesis.onvoiceschanged = () => synth.getVoices();
    return () => {
      speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  useEffect(() => {
    if (!module) return;

    onPositionChange?.({
      moduleId: module.id,
      tab: activeTab,
      phraseIndex,
      dialogueIndex,
      quizIndex,
    });
  }, [module?.id, activeTab, phraseIndex, dialogueIndex, quizIndex, onPositionChange]);

  useEffect(() => {
    const studentId = appState.currentStudentId;
    if (!studentId || !module) return;

    const saved = appState.lastPosition?.[studentId];

    if (saved && saved.moduleId === module.id) {
      const safeTab: TabType =
        saved.tab === "phrases" ||
        saved.tab === "dialogue" ||
        saved.tab === "quiz"
          ? saved.tab
          : "phrases";

      setActiveTab(safeTab);
      setPhraseIndex(saved.phraseIndex ?? 0);
      setDialogueIndex(saved.dialogueIndex ?? 0);
      setQuizIndex(saved.quizIndex ?? 0);
    } else {
      setActiveTab("phrases");
      setPhraseIndex(0);
      setDialogueIndex(0);
      setQuizIndex(0);
    }

    setSelectedAnswer(null);
    setShowTranslation(true);
    stopSpeak();
    setDidRestorePosition(true);
  }, [appState.currentStudentId, appState.lastPosition, module?.id, resumeToken]);

  useEffect(() => {
    if (!didRestorePosition) return;

    const studentId = appState.currentStudentId;
    if (!studentId || !module) return;

    setAppState((prev) => {
      const prevPosition = prev.lastPosition?.[studentId];

      const nextPosition = {
        moduleId: module.id,
        tab: activeTab,
        phraseIndex,
        vocabIndex: 0,
        dialogueIndex,
        quizIndex,
      };

      if (
        prevPosition &&
        prevPosition.moduleId === nextPosition.moduleId &&
        prevPosition.tab === nextPosition.tab &&
        prevPosition.phraseIndex === nextPosition.phraseIndex &&
        prevPosition.vocabIndex === nextPosition.vocabIndex &&
        prevPosition.dialogueIndex === nextPosition.dialogueIndex &&
        prevPosition.quizIndex === nextPosition.quizIndex
      ) {
        return prev;
      }

      return {
        ...prev,
        lastPosition: {
          ...prev.lastPosition,
          [studentId]: nextPosition,
        },
      };
    });
  }, [
    didRestorePosition,
    appState.currentStudentId,
    module?.id,
    activeTab,
    phraseIndex,
    dialogueIndex,
    quizIndex,
    setAppState,
  ]);

  useEffect(() => {
    stopSpeak();
  }, [phraseIndex, dialogueIndex, activeTab]);

  const currentPhrase = module?.phrases?.[phraseIndex];
  const currentDialogue = module?.dialogue?.[dialogueIndex];
  const currentQuiz = module?.quiz?.[quizIndex];

  const speak = (text: string, slow = false) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const synth = window.speechSynthesis;
    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();

    const ptVoice =
      voices.find((v) => v.lang?.toLowerCase() === "pt-br") ||
      voices.find((v) => v.lang?.toLowerCase().startsWith("pt")) ||
      voices.find((v) => v.name?.toLowerCase().includes("portugu")) ||
      null;

    if (ptVoice) {
      utterance.voice = ptVoice;
      utterance.lang = ptVoice.lang;
    } else {
      utterance.lang = "pt-BR";
    }

    utterance.rate = slow ? 0.78 : 0.95;
    utterance.pitch = 1;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    setSpeaking(true);
    synth.speak(utterance);
  };

  const markModuleDone = () => {
    const studentId = appState.currentStudentId;
    if (!studentId || !module) return;

    setAppState((prev) => ({
      ...prev,
      progress: {
        ...prev.progress,
        [studentId]: {
          ...(prev.progress?.[studentId] ?? {}),
          [module.id]: true,
        },
      },
    }));
  };

  const resetModule = () => {
    const studentId = appState.currentStudentId;
    if (!studentId || !module) return;

    setActiveTab("phrases");
    setPhraseIndex(0);
    setDialogueIndex(0);
    setQuizIndex(0);
    setSelectedAnswer(null);
    setShowTranslation(true);
    stopSpeak();

    setAppState((prev) => {
      const nextProgress = { ...(prev.progress?.[studentId] ?? {}) };
      delete nextProgress[module.id];

      return {
        ...prev,
        progress: {
          ...prev.progress,
          [studentId]: nextProgress,
        },
        lastPosition: {
          ...prev.lastPosition,
          [studentId]: {
            moduleId: module.id,
            tab: "phrases",
            phraseIndex: 0,
            vocabIndex: 0,
            dialogueIndex: 0,
            quizIndex: 0,
          },
        },
      };
    });
  };

  const isCompleted =
    !!appState.currentStudentId &&
    !!module &&
    !!appState.progress?.[appState.currentStudentId]?.[module.id];

  const tabs: { id: TabType; label: string }[] = [
    { id: "phrases", label: "Frases" },
    { id: "dialogue", label: "Diálogo" },
    { id: "quiz", label: "Quiz" },
  ];

  const color = catColor(module?.category ?? "");

  const premiumPanel: React.CSSProperties = {
    background:
      "linear-gradient(180deg, rgba(11,31,24,0.96), rgba(9,24,20,0.98))",
    border: `1px solid ${C.border}`,
    borderRadius: 28,
    padding: "30px 32px 24px",
    boxShadow: "0 24px 70px rgba(0,0,0,0.34)",
    backdropFilter: "blur(10px)",
  };

  const sectionLabel: React.CSSProperties = {
    fontSize: 11,
    color: C.textDim,
    textAlign: "center",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  };

  const bigPt: React.CSSProperties = {
    fontFamily: DISPLAY,
    fontSize: 54,
    fontWeight: 700,
    lineHeight: 1.04,
    color: "#FFF8ED",
    textAlign: "center",
    marginTop: 28,
    letterSpacing: "-0.03em",
  };

  const esText: React.CSSProperties = {
    fontSize: 24,
    lineHeight: 1.3,
    color: "rgba(232,225,214,0.82)",
    textAlign: "center",
    marginTop: 10,
    minHeight: 32,
  };

  const btnAccent: React.CSSProperties = {
    background: "linear-gradient(180deg, #D6B36A, #B88B3A)",
    color: "#16110A",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 14,
    padding: "12px 18px",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: FONT,
    boxShadow: "0 10px 24px rgba(184,139,58,0.18)",
    transition: "all 0.22s ease",
  };

  const btnPrimary: React.CSSProperties = {
    background: `linear-gradient(135deg, ${C.green}, ${C.greenDim})`,
    color: "#F5F0E8",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 14,
    padding: "11px 16px",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: FONT,
    transition: "all 0.22s ease",
  };

  const navBtn: React.CSSProperties = {
    ...btnGhost,
    minWidth: 116,
    borderRadius: 14,
    padding: "11px 16px",
    fontSize: 13,
    fontWeight: 600,
  };

  const smallDarkBtn: React.CSSProperties = {
    ...navBtn,
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: C.textMid,
  };

  const progressDots = (
    count: number,
    active: number,
    onSelect: (i: number) => void
  ) => (
    <div style={{ display: "flex", justifyContent: "center", gap: 4, margin: "14px auto 0" }}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          onClick={() => onSelect(i)}
          style={{
            width: i === active ? 18 : 5,
            height: 5,
            borderRadius: 999,
            background:
              i === active
                ? "linear-gradient(90deg, #D6B36A, #E4C98E)"
                : i < active
                ? "rgba(214,179,106,0.35)"
                : "rgba(255,255,255,0.08)",
            cursor: "pointer",
            transition: "all 0.22s ease",
          }}
        />
      ))}
    </div>
  );

  if (!module) {
    return (
      <div
        style={{
          background: C.bg2,
          border: `1px solid ${C.border}`,
          borderRadius: 20,
          padding: 24,
          color: C.text,
          fontFamily: FONT,
        }}
      >
        No hay módulos disponibles.
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gap: 16, fontFamily: FONT }}>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 28,
          border: `1px solid ${C.border}`,
          boxShadow: "0 24px 70px rgba(0,0,0,0.34)",
          minHeight: 300,
          background: "#0C1C1A",
        }}
      >
        <img
          src="/villa.jpg"
          alt={module.title}
          style={{
            display: "block",
            width: "100%",
            height: 300,
            objectFit: "cover",
            filter: "brightness(0.82) contrast(1.05) saturate(1.03)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
              linear-gradient(180deg, rgba(5,12,18,0.06) 0%, rgba(5,12,18,0.20) 30%, rgba(5,12,18,0.72) 100%),
              linear-gradient(90deg, rgba(6,17,26,0.60) 0%, rgba(6,17,26,0.18) 50%, rgba(6,17,26,0.50) 100%)
            `,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          {onGoHome && (
            <button
              onClick={onGoHome}
              style={{
                ...btnGhost,
                fontSize: 12,
                padding: "8px 12px",
                borderRadius: 999,
                background: "rgba(9,18,24,0.40)",
                color: "rgba(255,248,237,0.88)",
                border: "1px solid rgba(255,255,255,0.10)",
                backdropFilter: "blur(8px)",
              }}
            >
              🏠 Inicio
            </button>
          )}

          <button
            onClick={resetModule}
            style={{
              ...btnDanger,
              fontSize: 12,
              padding: "8px 12px",
              borderRadius: 999,
              background: "rgba(9,18,24,0.40)",
              color: "#F2C6BF",
              border: "1px solid rgba(255,255,255,0.10)",
              backdropFilter: "blur(8px)",
            }}
          >
            ↺ Reset
          </button>
        </div>

        <div
          style={{
            position: "absolute",
            left: 24,
            right: 24,
            bottom: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 10,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 10px",
                borderRadius: 999,
                background: "rgba(255,248,237,0.08)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "rgba(255,248,237,0.90)",
                backdropFilter: "blur(8px)",
                fontSize: 11,
                fontWeight: 600,
              }}
            >
              {module.category}
            </span>

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 10px",
                borderRadius: 999,
                background: "rgba(255,248,237,0.08)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "rgba(255,248,237,0.90)",
                backdropFilter: "blur(8px)",
                fontSize: 11,
              }}
            >
              {module.phrases?.length ?? 0} frases · {module.quiz?.length ?? 0} quiz
            </span>
          </div>

          <div
            style={{
              color: "#FFF8ED",
              fontSize: 46,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              fontFamily: DISPLAY,
              textShadow: "0 4px 18px rgba(0,0,0,0.35)",
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: 28 }}>{module.emoji}</span>
            {module.title}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", gap: 8, flex: 1, flexWrap: "wrap" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                stopSpeak();
                setActiveTab(tab.id);
              }}
              style={{
                padding: "10px 16px",
                borderRadius: 999,
                background:
                  activeTab === tab.id
                    ? "rgba(214,179,106,0.12)"
                    : "rgba(255,255,255,0.02)",
                border:
                  activeTab === tab.id
                    ? "1px solid rgba(214,179,106,0.22)"
                    : "1px solid rgba(255,255,255,0.06)",
                color: activeTab === tab.id ? C.text : C.textDim,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: FONT,
                transition: "all 0.22s ease",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          onClick={markModuleDone}
          style={{
            ...btnAccent,
            ...(isCompleted
              ? {
                  background: `${C.green}18`,
                  color: C.green,
                  border: `1px solid ${C.green}44`,
                  boxShadow: "none",
                }
              : {}),
          }}
        >
          {isCompleted ? "✓ Completado" : "Marcar completo"}
        </button>
      </div>

      {activeTab === "phrases" && currentPhrase && (
        <div style={premiumPanel}>
          <div style={sectionLabel}>
            Frase {phraseIndex + 1} de {module.phrases.length}
          </div>

          {progressDots(module.phrases.length, phraseIndex, setPhraseIndex)}

          <div style={bigPt}>{currentPhrase.pt}</div>

          <div style={esText}>
            {showTranslation ? currentPhrase.es : "· · · · · · · · · · · · ·"}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              marginTop: 26,
              flexWrap: "wrap",
            }}
          >
            <button onClick={() => speak(currentPhrase.pt)} style={btnPrimary}>
              🔊 Escuchar
            </button>

            <button onClick={() => speak(currentPhrase.pt, true)} style={smallDarkBtn}>
              🐢 Lento
            </button>

            <button
              onClick={stopSpeak}
              style={{ ...btnDanger, borderRadius: 14, padding: "11px 16px" }}
            >
              ⏹ Parar
            </button>

            <button
              onClick={() => setShowTranslation((v) => !v)}
              style={{
                ...smallDarkBtn,
                color: C.accent,
                border: `1px solid ${C.accent}44`,
              }}
            >
              {showTranslation ? "Ocultar ES" : "Mostrar ES"}
            </button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
              marginTop: 26,
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => setPhraseIndex((i) => Math.max(i - 1, 0))}
              style={smallDarkBtn}
              disabled={phraseIndex === 0}
            >
              ← Anterior
            </button>

            <button
              onClick={() =>
                setPhraseIndex((i) => Math.min(i + 1, module.phrases.length - 1))
              }
              style={btnAccent}
              disabled={phraseIndex === module.phrases.length - 1}
            >
              Siguiente →
            </button>
          </div>
        </div>
      )}

      {activeTab === "dialogue" && currentDialogue && (
        <div style={premiumPanel}>
          <div style={sectionLabel}>
            Diálogo {dialogueIndex + 1} de {module.dialogue?.length ?? 0}
          </div>

          {progressDots(module.dialogue?.length ?? 0, dialogueIndex, setDialogueIndex)}

          <div style={{ textAlign: "center", marginTop: 18 }}>
            <span
              style={{
                display: "inline-block",
                padding: "6px 14px",
                borderRadius: 999,
                background: `${color}18`,
                color: color,
                fontWeight: 600,
                fontSize: 13,
                border: `1px solid ${color}44`,
              }}
            >
              {currentDialogue.speaker}
            </span>
          </div>

          <div style={bigPt}>{currentDialogue.pt}</div>

          <div style={esText}>
            {showTranslation ? currentDialogue.es : "· · · · · · · · · · · · ·"}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              marginTop: 26,
              flexWrap: "wrap",
            }}
          >
            <button onClick={() => speak(currentDialogue.pt)} style={btnPrimary}>
              🔊 Escuchar
            </button>

            <button
              onClick={() => speak(currentDialogue.pt, true)}
              style={smallDarkBtn}
            >
              🐢 Lento
            </button>

            <button
              onClick={stopSpeak}
              style={{ ...btnDanger, borderRadius: 14, padding: "11px 16px" }}
            >
              ⏹ Parar
            </button>

            <button
              onClick={() => setShowTranslation((v) => !v)}
              style={{
                ...smallDarkBtn,
                color: C.accent,
                border: `1px solid ${C.accent}44`,
              }}
            >
              {showTranslation ? "Ocultar ES" : "Mostrar ES"}
            </button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
              marginTop: 26,
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => setDialogueIndex((i) => Math.max(i - 1, 0))}
              style={smallDarkBtn}
              disabled={dialogueIndex === 0}
            >
              ← Anterior
            </button>

            <button
              onClick={() =>
                setDialogueIndex((i) =>
                  Math.min(i + 1, (module.dialogue?.length ?? 1) - 1)
                )
              }
              style={btnAccent}
              disabled={dialogueIndex === (module.dialogue?.length ?? 1) - 1}
            >
              Siguiente →
            </button>
          </div>
        </div>
      )}

      {activeTab === "quiz" && currentQuiz && (
        <div style={premiumPanel}>
          <div style={sectionLabel}>
            Quiz {quizIndex + 1} de {module.quiz?.length ?? 0}
          </div>

          <div
            style={{
              height: 4,
              width: 220,
              background: "rgba(255,255,255,0.08)",
              borderRadius: 999,
              margin: "14px auto 0",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${((quizIndex + 1) / (module.quiz?.length ?? 1)) * 100}%`,
                height: "100%",
                background: "linear-gradient(90deg, #D6B36A, #E4C98E)",
                borderRadius: 999,
                transition: "width 0.3s ease",
              }}
            />
          </div>

          <div
            style={{
              fontFamily: DISPLAY,
              fontSize: 30,
              fontWeight: 700,
              lineHeight: 1.25,
              color: "#FFF8ED",
              textAlign: "center",
              margin: "30px 0 24px",
              letterSpacing: "-0.02em",
            }}
          >
            {currentQuiz.question}
          </div>

          <div style={{ display: "grid", gap: 10 }}>
            {currentQuiz.options.map((opt) => {
              const isCorrect = !!selectedAnswer && opt === currentQuiz.answer;
              const isWrong = selectedAnswer === opt && opt !== currentQuiz.answer;

              return (
                <button
                  key={opt}
                  onClick={() => setSelectedAnswer(opt)}
                  style={{
                    textAlign: "left",
                    borderRadius: 16,
                    padding: "14px 16px",
                    border: `1px solid ${
                      isCorrect
                        ? `${C.green}60`
                        : isWrong
                        ? `${C.red}60`
                        : "rgba(255,255,255,0.08)"
                    }`,
                    background: isCorrect
                      ? `${C.green}12`
                      : isWrong
                      ? `${C.red}12`
                      : "rgba(255,255,255,0.03)",
                    color: isCorrect ? C.green : isWrong ? C.red : C.textMid,
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: 14,
                    fontFamily: FONT,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    transition: "all 0.18s ease",
                  }}
                >
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      border: `1.5px solid ${
                        isCorrect ? C.green : isWrong ? C.red : C.border
                      }`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 11,
                      flexShrink: 0,
                    }}
                  >
                    {isCorrect ? "✓" : isWrong ? "✗" : ""}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>

          {selectedAnswer && (
            <div
              style={{
                marginTop: 16,
                padding: "12px 16px",
                borderRadius: 14,
                background:
                  selectedAnswer === currentQuiz.answer
                    ? `${C.green}10`
                    : `${C.red}10`,
                border: `1px solid ${
                  selectedAnswer === currentQuiz.answer
                    ? `${C.green}40`
                    : `${C.red}40`
                }`,
                fontSize: 14,
                fontWeight: 600,
                color:
                  selectedAnswer === currentQuiz.answer ? C.green : C.red,
                textAlign: "center",
              }}
            >
              {selectedAnswer === currentQuiz.answer
                ? "✓ ¡Correcto!"
                : `✗ Respuesta correcta: ${currentQuiz.answer}`}
            </div>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
              marginTop: 24,
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => {
                setSelectedAnswer(null);
                setQuizIndex((i) => Math.max(i - 1, 0));
              }}
              style={smallDarkBtn}
              disabled={quizIndex === 0}
            >
              ← Anterior
            </button>

            <button
              onClick={() => {
                setSelectedAnswer(null);
                setQuizIndex((i) => Math.min(i + 1, (module.quiz?.length ?? 1) - 1));
              }}
              style={btnAccent}
              disabled={quizIndex === (module.quiz?.length ?? 1) - 1}
            >
              Siguiente →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}