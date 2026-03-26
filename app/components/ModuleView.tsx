"use client";

import { useEffect, useMemo, useState } from "react";
import { MODULES } from "@/lib/modules";
import type { AppState } from "@/lib/types";
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
  onGoHome?: () => void;
};

type TabType = "phrases" | "dialogue" | "quiz";

export default function ModuleView({
  appState,
  setAppState,
  selectedModuleId,
  onGoHome,
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

  useEffect(() => {
    if (typeof window === "undefined") return;
    const synth = window.speechSynthesis;
    synth.getVoices();
    speechSynthesis.onvoiceschanged = () => synth.getVoices();
    return () => { speechSynthesis.onvoiceschanged = null; };
  }, []);

  useEffect(() => {
    setActiveTab("phrases");
    setPhraseIndex(0);
    setDialogueIndex(0);
    setQuizIndex(0);
    setSelectedAnswer(null);
    stopSpeak();
  }, [selectedModuleId]);

  useEffect(() => { stopSpeak(); }, [phraseIndex, dialogueIndex, activeTab]);

  const currentPhrase = module?.phrases?.[phraseIndex];
  const currentDialogue = module?.miniDialogues?.[dialogueIndex];
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
    if (ptVoice) { utterance.voice = ptVoice; utterance.lang = ptVoice.lang; }
    else { utterance.lang = "pt-BR"; }
    utterance.rate = slow ? 0.78 : 0.95;
    utterance.pitch = 1;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    setSpeaking(true);
    synth.speak(utterance);
  };

  const stopSpeak = () => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  const markModuleDone = () => {
    const studentId = appState.currentStudentId;
    if (!studentId || !module) return;
    setAppState((prev) => ({
      ...prev,
      progress: {
        ...prev.progress,
        [studentId]: { ...(prev.progress?.[studentId] ?? {}), [module.id]: true },
      },
    }));
  };

  const resetModule = () => {
    const studentId = appState.currentStudentId;
    if (!studentId || !module) return;
    setPhraseIndex(0); setDialogueIndex(0); setQuizIndex(0);
    setSelectedAnswer(null); setActiveTab("phrases"); stopSpeak();
    setAppState((prev) => {
      const next = { ...(prev.progress?.[studentId] ?? {}) };
      delete next[module.id];
      return { ...prev, progress: { ...prev.progress, [studentId]: next } };
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

  // Shared styles
  const card: React.CSSProperties = {
    background: C.bg2,
    border: `1px solid ${C.border}`,
    borderRadius: 20,
    padding: 24,
  };

  const bigPt: React.CSSProperties = {
    fontFamily: DISPLAY,
    fontSize: 28,
    fontWeight: 700,
    lineHeight: 1.25,
    color: C.text,
    marginBottom: 10,
    textAlign: "center",
  };

  const esText: React.CSSProperties = {
    fontSize: 17,
    lineHeight: 1.5,
    color: C.textMid,
    textAlign: "center",
    minHeight: 28,
  };

  // Accent button (golden)
  const btnAccent: React.CSSProperties = {
    background: `linear-gradient(135deg, ${C.accent}, #9a7230)`,
    color: "#0e1410",
    border: "none",
    borderRadius: 10,
    padding: "10px 20px",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: FONT,
  };

  const btnPrimary: React.CSSProperties = {
    background: `linear-gradient(135deg, ${C.green}, ${C.greenDim})`,
    color: "#F5F0E8",
    border: "none",
    borderRadius: 10,
    padding: "10px 20px",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: FONT,
  };

  const navBtn: React.CSSProperties = { ...btnGhost, minWidth: 110 };

  const color = catColor(module?.category ?? "");

  if (!module) {
    return (
      <div style={card}>
        <div style={{ color: C.text }}>No hay módulos disponibles.</div>
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gap: 16, fontFamily: FONT }}>

      {/* ── Module hero ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 240,
          borderRadius: 20,
          overflow: "hidden",
          border: `1px solid ${C.border}`,
        }}
      >
        <img
          src="/villa.jpg"
          alt="Villa"
          style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(10,18,14,0.90) 0%, rgba(10,18,14,0.25) 55%, transparent 100%)",
          }}
        />
        {/* action buttons top-right */}
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            display: "flex",
            gap: 8,
          }}
        >
          {onGoHome && (
            <button onClick={onGoHome} style={{ ...btnGhost, fontSize: 12, padding: "6px 12px", background: "rgba(10,18,14,0.7)" }}>
              🏠 Inicio
            </button>
          )}
          <button
            onClick={resetModule}
            style={{ ...btnDanger, fontSize: 12, padding: "6px 12px", background: "rgba(10,18,14,0.7)" }}
          >
            ↺ Reset
          </button>
        </div>
        {/* bottom content */}
        <div style={{ position: "absolute", left: 20, bottom: 18, right: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.06em",
                padding: "3px 10px",
                borderRadius: 20,
                background: `${color}22`,
                color: color,
                border: `1px solid ${color}44`,
              }}
            >
              {module.category}
            </span>
            <span
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.5)",
                background: "rgba(255,255,255,0.1)",
                padding: "3px 10px",
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {module.phrases?.length ?? 0} frases · {module.quiz?.length ?? 0} quiz
            </span>
          </div>
          <div
            style={{
              fontFamily: DISPLAY,
              fontSize: 26,
              fontWeight: 700,
              color: "#F5F0E8",
              lineHeight: 1.2,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ fontSize: 22 }}>{module.emoji}</span>
            {module.title}
          </div>
        </div>
      </div>

      {/* ── Tabs + complete button ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        <div style={{ display: "flex", gap: 4, flex: 1 }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { stopSpeak(); setActiveTab(tab.id); }}
              style={{
                borderRadius: 20,
                padding: "8px 18px",
                fontSize: 13,
                fontWeight: 600,
                border: activeTab === tab.id ? `1px solid ${C.accent}55` : `1px solid ${C.border}`,
                cursor: "pointer",
                fontFamily: FONT,
                background: activeTab === tab.id ? `${C.accent}18` : "transparent",
                color: activeTab === tab.id ? C.accent : C.textDim,
                letterSpacing: "0.02em",
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
              ? { background: `${C.green}20`, color: C.green, border: `1px solid ${C.green}44` }
              : {}),
          }}
        >
          {isCompleted ? "✓ Completado" : "Marcar completo"}
        </button>
      </div>

      {/* ── Phrases tab ── */}
      {activeTab === "phrases" && currentPhrase && (
        <div style={card}>
          <div style={{ fontSize: 12, color: C.textDim, textAlign: "center", marginBottom: 20, letterSpacing: "0.06em" }}>
            Frase {phraseIndex + 1} de {module.phrases.length}
          </div>

          {/* Progress dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 24 }}>
            {module.phrases.map((_, i) => (
              <div
                key={i}
                onClick={() => setPhraseIndex(i)}
                style={{
                  width: i === phraseIndex ? 20 : 6,
                  height: 6,
                  borderRadius: 99,
                  background: i === phraseIndex ? C.accent : i < phraseIndex ? `${C.accent}50` : C.bg3,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  border: `1px solid ${i === phraseIndex ? C.accent : C.border}`,
                }}
              />
            ))}
          </div>

          <div style={bigPt}>{currentPhrase.pt}</div>
          <div style={esText}>
            {showTranslation ? currentPhrase.es : "· · · · · · · · · · · · ·"}
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap", marginTop: 24 }}>
            <button onClick={() => speak(currentPhrase.pt)} style={btnPrimary}>
              🔊 Escuchar
            </button>
            <button onClick={() => speak(currentPhrase.pt, true)} style={navBtn}>
              🐢 Lento
            </button>
            <button onClick={stopSpeak} style={btnDanger}>
              ⏹ Parar
            </button>
            <button onClick={() => setShowTranslation((v) => !v)} style={{ ...navBtn, color: C.accent, borderColor: `${C.accent}44` }}>
              {showTranslation ? "Ocultar ES" : "Mostrar ES"}
            </button>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginTop: 24 }}>
            <button onClick={() => setPhraseIndex((i) => Math.max(i - 1, 0))} style={navBtn} disabled={phraseIndex === 0}>
              ← Anterior
            </button>
            <button onClick={() => setPhraseIndex((i) => Math.min(i + 1, module.phrases.length - 1))} style={btnAccent} disabled={phraseIndex === module.phrases.length - 1}>
              Siguiente →
            </button>
          </div>
        </div>
      )}

      {/* ── Dialogue tab ── */}
      {activeTab === "dialogue" && currentDialogue && (
        <div style={card}>
          <div style={{ fontSize: 12, color: C.textDim, textAlign: "center", marginBottom: 16, letterSpacing: "0.06em" }}>
            Diálogo {dialogueIndex + 1} de {module.miniDialogues.length}
          </div>

          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <span
              style={{
                display: "inline-block",
                padding: "5px 14px",
                borderRadius: 20,
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

          <div style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap", marginTop: 24 }}>
            <button onClick={() => speak(currentDialogue.pt)} style={btnPrimary}>
              🔊 Escuchar
            </button>
            <button onClick={() => speak(currentDialogue.pt, true)} style={navBtn}>
              🐢 Lento
            </button>
            <button onClick={stopSpeak} style={btnDanger}>
              ⏹ Parar
            </button>
            <button onClick={() => setShowTranslation((v) => !v)} style={{ ...navBtn, color: C.accent, borderColor: `${C.accent}44` }}>
              {showTranslation ? "Ocultar ES" : "Mostrar ES"}
            </button>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginTop: 24 }}>
            <button onClick={() => setDialogueIndex((i) => Math.max(i - 1, 0))} style={navBtn} disabled={dialogueIndex === 0}>
              ← Anterior
            </button>
            <button onClick={() => setDialogueIndex((i) => Math.min(i + 1, module.miniDialogues.length - 1))} style={btnAccent} disabled={dialogueIndex === module.miniDialogues.length - 1}>
              Siguiente →
            </button>
          </div>
        </div>
      )}

      {/* ── Quiz tab ── */}
      {activeTab === "quiz" && currentQuiz && (
        <div style={card}>
          <div style={{ fontSize: 12, color: C.textDim, textAlign: "center", marginBottom: 16, letterSpacing: "0.06em" }}>
            Quiz {quizIndex + 1} de {module.quiz.length}
          </div>

          {/* Quiz progress bar */}
          <div style={{ height: 3, background: C.bg3, borderRadius: 99, marginBottom: 24, overflow: "hidden" }}>
            <div
              style={{
                width: `${((quizIndex + 1) / module.quiz.length) * 100}%`,
                height: "100%",
                background: C.accent,
                borderRadius: 99,
                transition: "width 0.3s ease",
              }}
            />
          </div>

          <div
            style={{
              fontFamily: DISPLAY,
              fontSize: 22,
              fontWeight: 700,
              lineHeight: 1.35,
              color: C.text,
              textAlign: "center",
              marginBottom: 24,
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
                    borderRadius: 14,
                    padding: "13px 16px",
                    border: `1px solid ${
                      isCorrect ? `${C.green}60`
                      : isWrong ? `${C.red}60`
                      : C.border
                    }`,
                    background: isCorrect
                      ? `${C.green}12`
                      : isWrong
                      ? `${C.red}12`
                      : C.bg3,
                    color: isCorrect ? C.green : isWrong ? C.red : C.textMid,
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: 14,
                    fontFamily: FONT,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    transition: "all 0.15s",
                  }}
                >
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      border: `1.5px solid ${isCorrect ? C.green : isWrong ? C.red : C.border}`,
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
                borderRadius: 12,
                background: selectedAnswer === currentQuiz.answer ? `${C.green}10` : `${C.red}10`,
                border: `1px solid ${selectedAnswer === currentQuiz.answer ? `${C.green}40` : `${C.red}40`}`,
                fontSize: 14,
                fontWeight: 600,
                color: selectedAnswer === currentQuiz.answer ? C.green : C.red,
                textAlign: "center",
              }}
            >
              {selectedAnswer === currentQuiz.answer
                ? "✓ ¡Correcto!"
                : `✗ Respuesta correcta: ${currentQuiz.answer}`}
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginTop: 20 }}>
            <button
              onClick={() => { setSelectedAnswer(null); setQuizIndex((i) => Math.max(i - 1, 0)); }}
              style={navBtn}
              disabled={quizIndex === 0}
            >
              ← Anterior
            </button>
            <button
              onClick={() => { setSelectedAnswer(null); setQuizIndex((i) => Math.min(i + 1, module.quiz.length - 1)); }}
              style={btnAccent}
              disabled={quizIndex === module.quiz.length - 1}
            >
              Siguiente →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}