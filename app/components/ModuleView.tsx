"use client";
import { useState, useEffect } from "react";
import type { AppState, ActiveSection, DictationResult } from "@/lib/types";
import { MODULES } from "@/lib/modules";
import { C, FONT, MONO, DISPLAY, catColor, catBg, btnPrimary, btnGhost, btnDanger, shuffleOpts, strSeed, normalize } from "@/lib/constants";
import { ScoreRing } from "./ui";

interface Props {
  appState: AppState;
  setAppState: (s: AppState | ((p: AppState) => AppState)) => void;
  selectedModuleId: string;
}

const speak = (text: string, rate = 0.88) => {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "pt-BR";
  u.rate = rate;
  const v = window.speechSynthesis.getVoices().find((x) => x.lang.startsWith("pt"));
  if (v) u.voice = v;
  window.speechSynthesis.speak(u);
};
const stopSpeak = () => {
  if (typeof window !== "undefined" && "speechSynthesis" in window)
    window.speechSynthesis.cancel();
};

export default function ModuleView({ appState, setAppState, selectedModuleId }: Props) {
  const sid = appState.currentStudentId!;
  const module = MODULES.find((m) => m.id === selectedModuleId) ?? MODULES[0];
  const studentProgress = appState.progress[sid] || {};
  const studentDictations = appState.dictations[sid] || {};
  const progModule = studentProgress[module.id];
  const dictModule = studentDictations[module.id];

  const [section, setSection] = useState<ActiveSection>("reading");
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [dictText, setDictText] = useState("");
  const [dictResult, setDictResult] = useState<DictationResult | null>(null);

  // Reset on module change
  useEffect(() => {
    stopSpeak();
    setSection("reading");
    setQIdx(0);
    setSelected("");
    setSubmitted(false);
    setAnswers({});
    setDictText("");
    setDictResult(null);
  }, [selectedModuleId]);

  const currentQ = module.quiz[qIdx];
  const shuffled = shuffleOpts(currentQ.options, strSeed(module.id + String(qIdx)));
  const isCorrect = submitted && selected === currentQ.answer;

  const saveProgress = (score: number, total: number) => {
    setAppState((prev) => {
      const prevSP = prev.progress[sid] || {};
      const prevM = prevSP[module.id] || { completed: false, score: 0, total, attempts: 0 };
      return {
        ...prev,
        progress: {
          ...prev.progress,
          [sid]: {
            ...prevSP,
            [module.id]: {
              completed: true,
              score: Math.max(prevM.score || 0, score),
              total,
              attempts: (prevM.attempts || 0) + 1,
            },
          },
        },
      };
    });
  };

  const resetModule = () => {
    if (!window.confirm(`Reiniciar "${module.title}"?`)) return;
    setAppState((prev) => {
      const newP = { ...(prev.progress[sid] || {}) };
      const newD = { ...(prev.dictations[sid] || {}) };
      delete newP[module.id];
      delete newD[module.id];
      return {
        ...prev,
        progress: { ...prev.progress, [sid]: newP },
        dictations: { ...prev.dictations, [sid]: newD },
      };
    });
    setSection("reading");
    setQIdx(0);
    setSelected("");
    setSubmitted(false);
    setAnswers({});
    setDictText("");
    setDictResult(null);
  };

  const setAnswerMem = (val: string) => {
    setSelected(val);
    setAnswers((p) => ({ ...p, [qIdx]: val }));
  };

  const handleSubmit = () => { if (!selected) return; setSubmitted(true); };

  const handleNext = () => {
    if (qIdx < module.quiz.length - 1) {
      const next = qIdx + 1;
      setQIdx(next);
      setSelected(answers[next] || "");
      setSubmitted(false);
      return;
    }
    const correct = module.quiz.reduce((sum, q, i) => sum + (answers[i] === q.answer ? 1 : 0), 0);
    saveProgress(correct, module.quiz.length);
    setQIdx(0); setSelected(""); setSubmitted(false); setAnswers({});
    setSection("reading");
  };

  const checkDictation = () => {
    const expected = normalize(module.dictation);
    const written = normalize(dictText);
    const expWords = expected.split(" ").filter(Boolean);
    const wrtWords = written.split(" ").filter(Boolean);
    const matches = wrtWords.filter((w, i) => w === expWords[i]).length;
    const score = expWords.length ? Math.round((matches / expWords.length) * 100) : 0;
    const result: DictationResult = {
      exact: expected === written,
      score,
      written: dictText,
      expected: module.dictation,
      updatedAt: new Date().toLocaleString(),
    };
    setDictResult(result);
    setAppState((prev) => ({
      ...prev,
      dictations: {
        ...prev.dictations,
        [sid]: { ...(prev.dictations[sid] || {}), [module.id]: result },
      },
    }));
  };

  const optStyle = (opt: string) => {
    const sel = selected === opt;
    const correct = submitted && opt === currentQ.answer;
    const wrong = submitted && sel && opt !== currentQ.answer;
    return {
      textAlign: "left" as const,
      padding: "13px 18px",
      borderRadius: 13,
      border: `1px solid ${correct ? C.correct + "55" : wrong ? C.wrong + "55" : sel ? catColor(module.category) + "55" : C.border}`,
      background: correct ? "rgba(74,222,128,0.08)" : wrong ? C.redDim : sel ? catBg(module.category) : C.bg3,
      color: correct ? C.correct : wrong ? C.wrong : sel ? catColor(module.category) : C.textMid,
      cursor: "pointer",
      fontFamily: FONT,
      fontSize: 14,
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 12,
    };
  };

  const sectionBtn = (s: ActiveSection, label: string) => (
    <button
      key={s}
      onClick={() => setSection(s)}
      style={{
        flex: 1,
        borderRadius: 11,
        padding: "9px 4px",
        fontSize: 13,
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        fontFamily: FONT,
        background: section === s ? catColor(module.category) : "transparent",
        color: section === s ? "#052e16" : C.textMid,
      }}
    >
      {label}
    </button>
  );

  return (
    <main>
      {/* Module header */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 16,
              background: catBg(module.category),
              border: `1px solid ${catColor(module.category)}22`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              flexShrink: 0,
            }}
          >
            {module.emoji}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
              <h2
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  margin: 0,
                  letterSpacing: "-0.02em",
                  fontFamily: DISPLAY,
                  color: C.text,
                }}
              >
                {module.title}
              </h2>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "3px 10px",
                  borderRadius: 20,
                  background: catBg(module.category),
                  color: catColor(module.category),
                  fontFamily: MONO,
                }}
              >
                {module.category}
              </span>
              <span
                style={{
                  fontSize: 11,
                  padding: "3px 10px",
                  borderRadius: 20,
                  background: "rgba(255,255,255,0.03)",
                  color: C.textDim,
                  fontFamily: MONO,
                  border: `1px solid ${C.border}`,
                }}
              >
                {module.level}
              </span>
              {progModule && (
                <span
                  style={{
                    fontSize: 11,
                    padding: "3px 10px",
                    borderRadius: 20,
                    background: "rgba(74,222,128,0.08)",
                    color: C.green,
                    fontFamily: MONO,
                    border: `1px solid rgba(74,222,128,0.22)`,
                  }}
                >
                  ✓ {progModule.score}/{progModule.total}
                </span>
              )}
            </div>
            <p style={{ color: C.textMid, fontSize: 14, margin: 0 }}>{module.description}</p>
          </div>
          <button onClick={resetModule} style={{ ...btnDanger, flexShrink: 0, marginTop: 4 }}>↺</button>
        </div>

        {/* Section tabs */}
        <div
          style={{
            display: "flex",
            gap: 4,
            background: C.bg2,
            border: `1px solid ${C.border}`,
            borderRadius: 14,
            padding: 4,
          }}
        >
          {sectionBtn("reading", "📖 Leitura")}
          {sectionBtn("vocab", "📝 Vocabulário")}
          {sectionBtn("quiz", "🧠 Quiz")}
          {sectionBtn("dictation", "🎙 Ditado")}
        </div>
      </div>

      {/* READING */}
      {section === "reading" && (
        <div
          style={{
            background: C.bg2,
            border: `1px solid ${C.border}`,
            borderRadius: 20,
            padding: 32,
            animation: "fadeIn 0.25s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
            <h3 style={{ fontSize: 19, fontWeight: 700, margin: 0, fontFamily: DISPLAY, letterSpacing: "-0.02em", color: C.text }}>
              {module.readingTitle}
            </h3>
            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={() => speak(module.reading.join(" "))}
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  background: "rgba(74,222,128,0.08)", border: `1px solid rgba(74,222,128,0.22)`,
                  borderRadius: 10, padding: "7px 14px", fontSize: 13, color: C.green, cursor: "pointer", fontFamily: FONT,
                }}
              >
                🔊 Ouvir
              </button>
              <button onClick={stopSpeak} style={{ ...btnGhost, padding: "7px 12px" }}>⏹</button>
            </div>
          </div>
          {module.reading.map((para, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 20,
                padding: "16px 0",
                borderBottom: i < module.reading.length - 1 ? `1px solid ${C.border}` : "none",
              }}
            >
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 12,
                  color: C.textDim,
                  flexShrink: 0,
                  paddingTop: 4,
                  width: 20,
                  textAlign: "right",
                }}
              >
                {i + 1}
              </span>
              <p style={{ lineHeight: 2.0, color: "#bbf7d0", fontSize: 15, margin: 0 }}>{para}</p>
            </div>
          ))}
          <div style={{ marginTop: 24, paddingTop: 20, borderTop: `1px solid ${C.border}`, display: "flex", gap: 10 }}>
            <button onClick={() => setSection("vocab")} style={btnGhost}>📝 Vocabulário</button>
            <button onClick={() => setSection("quiz")} style={btnPrimary}>Ir ao quiz →</button>
          </div>
        </div>
      )}

      {/* VOCAB */}
      {section === "vocab" && (
        <div
          style={{
            background: C.bg2,
            border: `1px solid ${C.border}`,
            borderRadius: 20,
            padding: 32,
            animation: "fadeIn 0.25s ease",
          }}
        >
          <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 24px", fontFamily: DISPLAY, color: C.text }}>
            📝 Vocabulário-chave
          </h3>
          <div style={{ display: "grid", gap: 8, gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
            {module.vocab.map((item) => (
              <div
                key={item.es}
                style={{
                  background: C.bg3,
                  border: `1px solid ${C.border}`,
                  borderRadius: 14,
                  padding: "14px 18px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: C.text }}>{item.es}</div>
                  <div style={{ fontSize: 10, color: C.textDim, marginTop: 2, fontFamily: MONO }}>ES</div>
                </div>
                <div style={{ width: 1, height: 32, background: C.border }} />
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: C.green }}>{item.pt}</div>
                  <div style={{ fontSize: 10, color: C.textDim, marginTop: 2, fontFamily: MONO }}>PT</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24, display: "flex", gap: 10 }}>
            <button onClick={() => setSection("reading")} style={btnGhost}>← Leitura</button>
            <button onClick={() => setSection("quiz")} style={btnPrimary}>Ir ao quiz →</button>
          </div>
        </div>
      )}

      {/* QUIZ */}
      {section === "quiz" && (
        <div
          style={{
            background: C.bg2,
            border: `1px solid ${C.border}`,
            borderRadius: 20,
            padding: 32,
            animation: "fadeIn 0.25s ease",
          }}
        >
          {/* Progress bar */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <div style={{ flex: 1, height: 4, borderRadius: 99, background: C.bg3, overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  width: `${((qIdx + (submitted ? 1 : 0)) / module.quiz.length) * 100}%`,
                  background: catColor(module.category),
                  borderRadius: 99,
                  transition: "width 0.4s ease",
                }}
              />
            </div>
            <span style={{ fontFamily: MONO, fontSize: 13, fontWeight: 600, color: C.textMid, flexShrink: 0 }}>
              {qIdx + 1}{" "}
              <span style={{ color: C.textDim }}>/ {module.quiz.length}</span>
            </span>
          </div>

          <p style={{ fontSize: 17, fontWeight: 600, color: C.text, lineHeight: 1.65, margin: "0 0 24px" }}>
            {currentQ.question}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
            {shuffled.map((opt) => (
              <button
                key={opt}
                onClick={() => !submitted && setAnswerMem(opt)}
                disabled={submitted}
                style={optStyle(opt)}
              >
                <span
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    border: `1.5px solid ${submitted && opt === currentQ.answer ? C.correct : submitted && selected === opt ? C.wrong : selected === opt ? catColor(module.category) : C.border}`,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                  }}
                >
                  {submitted && opt === currentQ.answer ? "✓" : submitted && selected === opt && opt !== currentQ.answer ? "✗" : ""}
                </span>
                {opt}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <div style={{ fontSize: 14 }}>
              {submitted ? (
                isCorrect ? (
                  <span style={{ color: C.correct, fontWeight: 600 }}>✓ Correto!</span>
                ) : (
                  <div>
                    <span style={{ color: C.wrong }}>✗ Resposta: </span>
                    <strong style={{ color: C.text }}>{currentQ.answer}</strong>
                  </div>
                )
              ) : (
                <span style={{ color: C.textDim }}>Selecione uma opção</span>
              )}
            </div>
            {!submitted ? (
              <button
                onClick={handleSubmit}
                disabled={!selected}
                style={{ ...btnPrimary, opacity: selected ? 1 : 0.35 }}
              >
                Verificar
              </button>
            ) : (
              <button onClick={handleNext} style={btnPrimary}>
                {qIdx < module.quiz.length - 1 ? "Próxima →" : "Finalizar ✓"}
              </button>
            )}
          </div>
        </div>
      )}

      {/* DICTATION */}
      {section === "dictation" && (
        <div
          style={{
            background: C.bg2,
            border: `1px solid ${C.border}`,
            borderRadius: 20,
            padding: 32,
            animation: "fadeIn 0.25s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
            <h3 style={{ fontSize: 19, fontWeight: 700, margin: 0, fontFamily: DISPLAY, color: C.text }}>🎙 Ditado</h3>
            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={() => speak(module.dictation, 0.72)}
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  background: "rgba(74,222,128,0.08)", border: `1px solid rgba(74,222,128,0.22)`,
                  borderRadius: 10, padding: "7px 14px", fontSize: 13, color: C.green, cursor: "pointer", fontFamily: FONT,
                }}
              >
                🔊 Reproduzir
              </button>
              <button onClick={stopSpeak} style={{ ...btnGhost, padding: "7px 12px" }}>⏹</button>
            </div>
          </div>

          <p style={{ color: C.textMid, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
            Ouça o áudio e escreva a frase em português abaixo.
          </p>

          <textarea
            value={dictText}
            onChange={(e) => setDictText(e.target.value)}
            rows={4}
            placeholder="Escreva o que ouviu..."
            style={{
              width: "100%",
              background: C.bg3,
              border: `1px solid ${C.border}`,
              borderRadius: 14,
              padding: "14px 18px",
              color: C.text,
              fontSize: 14,
              fontFamily: FONT,
              outline: "none",
              resize: "none",
              lineHeight: 1.8,
              boxSizing: "border-box",
            }}
          />

          <button onClick={checkDictation} style={{ ...btnPrimary, marginTop: 14 }}>
            Corrigir ditado
          </button>

          {(dictResult || dictModule) &&
            (() => {
              const r = dictResult || dictModule!;
              const sc = r.score >= 80 ? C.correct : r.score >= 50 ? C.accent : C.wrong;
              return (
                <div
                  style={{
                    background: C.bg3,
                    border: `1px solid ${C.border}`,
                    borderRadius: 16,
                    padding: 20,
                    marginTop: 20,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                    <div style={{ position: "relative", flexShrink: 0 }}>
                      <ScoreRing percent={r.score} size={64} />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: MONO,
                          fontSize: 14,
                          fontWeight: 700,
                          color: sc,
                        }}
                      >
                        {r.score}%
                      </div>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 16, color: C.text }}>
                        {r.score === 100 ? "Perfeito! 🎉" : r.score >= 80 ? "Muito bem! 👍" : r.score >= 50 ? "Bom esforço" : "Continue praticando"}
                      </div>
                      <div style={{ fontSize: 12, color: C.textDim, marginTop: 2 }}>{r.updatedAt}</div>
                    </div>
                  </div>
                  <div style={{ background: C.bg2, borderRadius: 12, padding: "12px 16px" }}>
                    <div style={{ fontSize: 10, fontWeight: 600, color: C.textDim, marginBottom: 6, letterSpacing: "0.07em", fontFamily: MONO, textTransform: "uppercase" }}>
                      Frase modelo
                    </div>
                    <p style={{ fontSize: 14, color: "#bbf7d0", fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>
                      {r.expected}
                    </p>
                  </div>
                </div>
              );
            })()}
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </main>
  );
}

