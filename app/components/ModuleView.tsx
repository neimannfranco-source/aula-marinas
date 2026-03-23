"use client";

import { useEffect, useMemo, useState } from "react";
import { MODULES } from "@/lib/modules";
import type { AppState } from "@/lib/types";
import { C, FONT, btnGhost, btnPrimary, btnDanger } from "@/lib/constants";

type Props = {
  appState: AppState;
  setAppState: React.Dispatch<React.SetStateAction<AppState>>;
  selectedModuleId: string;
  onGoHome?: () => void;
};

type TabType = "phrases" | "vocab" | "dialogue" | "quiz";

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
  const [vocabIndex, setVocabIndex] = useState(0);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showTranslation, setShowTranslation] = useState(true);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    setActiveTab("phrases");
    setPhraseIndex(0);
    setVocabIndex(0);
    setDialogueIndex(0);
    setQuizIndex(0);
    setSelectedAnswer(null);
    stopSpeak();
  }, [selectedModuleId]);

  useEffect(() => {
    stopSpeak();
  }, [phraseIndex, vocabIndex, dialogueIndex, activeTab]);

  const currentPhrase = module?.phrases?.[phraseIndex];
  const currentVocab = module?.vocab?.[vocabIndex];
  const currentDialogue = module?.miniDialogues?.[dialogueIndex];
  const currentQuiz = module?.quiz?.[quizIndex];

  const speak = (text: string, slow = false) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR";
    utterance.rate = slow ? 0.78 : 0.95;
    utterance.pitch = 1;

    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeak = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  const markModuleDone = () => {
    const studentId = appState.currentStudentId;
    if (!studentId || !module) return;

    setAppState((prev) => {
      const prevProgress = prev.progress?.[studentId] ?? {};
      return {
        ...prev,
        progress: {
          ...prev.progress,
          [studentId]: {
            ...prevProgress,
            [module.id]: true,
          },
        },
      };
    });
  };

  const resetModule = () => {
    const studentId = appState.currentStudentId;
    if (!studentId || !module) return;

    setPhraseIndex(0);
    setVocabIndex(0);
    setDialogueIndex(0);
    setQuizIndex(0);
    setSelectedAnswer(null);
    setActiveTab("phrases");
    stopSpeak();

    setAppState((prev) => {
      const prevProgress = prev.progress?.[studentId] ?? {};
      const nextProgress = { ...prevProgress };
      delete nextProgress[module.id];

      return {
        ...prev,
        progress: {
          ...prev.progress,
          [studentId]: nextProgress,
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
    { id: "vocab", label: "Palabras" },
    { id: "dialogue", label: "Diálogo" },
    { id: "quiz", label: "Quiz" },
  ];

  const cardStyle: React.CSSProperties = {
    background: C.bg2,
    border: `1px solid ${C.border}`,
    borderRadius: 24,
    padding: 24,
    boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
  };

  const bigPt: React.CSSProperties = {
    fontSize: 30,
    fontWeight: 800,
    lineHeight: 1.2,
    color: C.text,
    marginBottom: 10,
    textAlign: "center",
  };

  const esText: React.CSSProperties = {
    fontSize: 18,
    lineHeight: 1.4,
    color: C.textDim,
    textAlign: "center",
    minHeight: 28,
  };

  const navBtn: React.CSSProperties = {
    ...btnGhost,
    minWidth: 110,
    justifyContent: "center",
  };

  const actionBtn: React.CSSProperties = {
    ...btnPrimary,
    minWidth: 120,
    justifyContent: "center",
  };

  if (!module) {
    return (
      <div style={cardStyle}>
        <div style={{ color: C.text }}>No hay módulos disponibles.</div>
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gap: 18, fontFamily: FONT }}>
      <div
        style={{
          ...cardStyle,
          padding: 18,
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div>
          <div style={{ fontSize: 13, color: C.textDim, marginBottom: 6 }}>
            {module.category}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 24 }}>{module.emoji}</span>
            <h2 style={{ margin: 0, fontSize: 24, color: C.text }}>
              {module.title}
            </h2>
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {onGoHome && (
            <button onClick={onGoHome} style={navBtn}>
              🏠 Inicio
            </button>
          )}
          <button onClick={resetModule} style={btnDanger}>
            Reset módulo
          </button>
          <button onClick={markModuleDone} style={actionBtn}>
            {isCompleted ? "✓ Completado" : "Marcar completo"}
          </button>
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              stopSpeak();
              setActiveTab(tab.id);
            }}
            style={{
              border: "none",
              borderRadius: 999,
              padding: "10px 16px",
              cursor: "pointer",
              fontWeight: 700,
              background: activeTab === tab.id ? C.green : C.bg3,
              color: activeTab === tab.id ? "#052e16" : C.text,
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "phrases" && currentPhrase && (
        <div style={cardStyle}>
          <div style={{ fontSize: 13, color: C.textDim, textAlign: "center", marginBottom: 14 }}>
            Frase {phraseIndex + 1} de {module.phrases.length}
          </div>

          <div style={bigPt}>{currentPhrase.pt}</div>
          <div style={esText}>{showTranslation ? currentPhrase.es : "••••••••••••••••"}</div>

          <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", marginTop: 22 }}>
            <button onClick={() => speak(currentPhrase.pt)} style={actionBtn}>🔊 Escuchar</button>
            <button onClick={() => speak(currentPhrase.pt, true)} style={navBtn}>🐢 Lento</button>
            <button onClick={stopSpeak} style={btnDanger}>⏹ Parar</button>
            <button onClick={() => setShowTranslation((v) => !v)} style={navBtn}>
              {showTranslation ? "Ocultar ES" : "Mostrar ES"}
            </button>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginTop: 24 }}>
            <button
              onClick={() => setPhraseIndex((i) => Math.max(i - 1, 0))}
              style={navBtn}
              disabled={phraseIndex === 0}
            >
              ⬅ Anterior
            </button>
            <button
              onClick={() => setPhraseIndex((i) => Math.min(i + 1, module.phrases.length - 1))}
              style={actionBtn}
              disabled={phraseIndex === module.phrases.length - 1}
            >
              Siguiente ➡
            </button>
          </div>
        </div>
      )}

      {activeTab === "vocab" && currentVocab && (
        <div style={cardStyle}>
          <div style={{ fontSize: 13, color: C.textDim, textAlign: "center", marginBottom: 14 }}>
            Palabra {vocabIndex + 1} de {module.vocab.length}
          </div>

          <div style={bigPt}>{currentVocab.pt}</div>
          <div style={esText}>{showTranslation ? currentVocab.es : "••••••••"}</div>

          <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", marginTop: 22 }}>
            <button onClick={() => speak(currentVocab.pt)} style={actionBtn}>🔊 Escuchar</button>
            <button onClick={() => speak(currentVocab.pt, true)} style={navBtn}>🐢 Lento</button>
            <button onClick={stopSpeak} style={btnDanger}>⏹ Parar</button>
            <button onClick={() => setShowTranslation((v) => !v)} style={navBtn}>
              {showTranslation ? "Ocultar ES" : "Mostrar ES"}
            </button>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginTop: 24 }}>
            <button
              onClick={() => setVocabIndex((i) => Math.max(i - 1, 0))}
              style={navBtn}
              disabled={vocabIndex === 0}
            >
              ⬅ Anterior
            </button>
            <button
              onClick={() => setVocabIndex((i) => Math.min(i + 1, module.vocab.length - 1))}
              style={actionBtn}
              disabled={vocabIndex === module.vocab.length - 1}
            >
              Siguiente ➡
            </button>
          </div>
        </div>
      )}

      {activeTab === "dialogue" && currentDialogue && (
        <div style={cardStyle}>
          <div style={{ fontSize: 13, color: C.textDim, textAlign: "center", marginBottom: 14 }}>
            Diálogo {dialogueIndex + 1} de {module.miniDialogues.length}
          </div>

          <div
            style={{
              display: "inline-block",
              margin: "0 auto 16px",
              padding: "6px 12px",
              borderRadius: 999,
              background: "rgba(74,222,128,0.12)",
              color: C.green,
              fontWeight: 700,
            }}
          >
            {currentDialogue.speaker}
          </div>

          <div style={bigPt}>{currentDialogue.pt}</div>
          <div style={esText}>{showTranslation ? currentDialogue.es : "••••••••••••••••"}</div>

          <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", marginTop: 22 }}>
            <button onClick={() => speak(currentDialogue.pt)} style={actionBtn}>🔊 Escuchar</button>
            <button onClick={() => speak(currentDialogue.pt, true)} style={navBtn}>🐢 Lento</button>
            <button onClick={stopSpeak} style={btnDanger}>⏹ Parar</button>
            <button onClick={() => setShowTranslation((v) => !v)} style={navBtn}>
              {showTranslation ? "Ocultar ES" : "Mostrar ES"}
            </button>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginTop: 24 }}>
            <button
              onClick={() => setDialogueIndex((i) => Math.max(i - 1, 0))}
              style={navBtn}
              disabled={dialogueIndex === 0}
            >
              ⬅ Anterior
            </button>
            <button
              onClick={() => setDialogueIndex((i) => Math.min(i + 1, module.miniDialogues.length - 1))}
              style={actionBtn}
              disabled={dialogueIndex === module.miniDialogues.length - 1}
            >
              Siguiente ➡
            </button>
          </div>
        </div>
      )}

      {activeTab === "quiz" && currentQuiz && (
        <div style={cardStyle}>
          <div style={{ fontSize: 13, color: C.textDim, textAlign: "center", marginBottom: 14 }}>
            Quiz {quizIndex + 1} de {module.quiz.length}
          </div>

          <div
            style={{
              fontSize: 24,
              fontWeight: 800,
              lineHeight: 1.3,
              color: C.text,
              textAlign: "center",
              marginBottom: 24,
            }}
          >
            {currentQuiz.question}
          </div>

          <div style={{ display: "grid", gap: 12 }}>
            {currentQuiz.options.map((opt) => {
              const isCorrect = selectedAnswer && opt === currentQuiz.answer;
              const isWrong = selectedAnswer === opt && opt !== currentQuiz.answer;

              return (
                <button
                  key={opt}
                  onClick={() => setSelectedAnswer(opt)}
                  style={{
                    textAlign: "left",
                    borderRadius: 18,
                    padding: "14px 16px",
                    border: `1px solid ${
                      isCorrect
                        ? "rgba(74,222,128,0.45)"
                        : isWrong
                        ? "rgba(248,113,113,0.45)"
                        : C.border
                    }`,
                    background: isCorrect
                      ? "rgba(74,222,128,0.10)"
                      : isWrong
                      ? "rgba(248,113,113,0.10)"
                      : C.bg3,
                    color: C.text,
                    cursor: "pointer",
                    fontWeight: 700,
                  }}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {selectedAnswer && (
            <div
              style={{
                marginTop: 18,
                fontSize: 15,
                fontWeight: 700,
                color: selectedAnswer === currentQuiz.answer ? C.green : C.red,
                textAlign: "center",
              }}
            >
              {selectedAnswer === currentQuiz.answer
                ? "✓ Correcto"
                : `✗ Correcta: ${currentQuiz.answer}`}
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginTop: 24 }}>
            <button
              onClick={() => {
                setSelectedAnswer(null);
                setQuizIndex((i) => Math.max(i - 1, 0));
              }}
              style={navBtn}
              disabled={quizIndex === 0}
            >
              ⬅ Anterior
            </button>
            <button
              onClick={() => {
                setSelectedAnswer(null);
                setQuizIndex((i) => Math.min(i + 1, module.quiz.length - 1));
              }}
              style={actionBtn}
              disabled={quizIndex === module.quiz.length - 1}
            >
              Siguiente ➡
            </button>
          </div>
        </div>
      )}
    </div>
  );
}