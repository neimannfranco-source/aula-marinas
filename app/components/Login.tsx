"use client";
import { useState } from "react";
import type { AppState } from "@/lib/types";
import { C, FONT, DISPLAY, MONO, input, btnPrimary, btnGhost, normalize, PROFESSOR_PASSWORD } from "@/lib/constants";

interface Props {
  appState: AppState;
  setAppState: (s: AppState | ((p: AppState) => AppState)) => void;
  onProfessor: () => void;
  showProfPanel: boolean;
}

export default function Login({ appState, setAppState, onProfessor, showProfPanel }: Props) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const login = () => {
    const found = appState.students.find(
      (s) =>
        normalize(s.name) === normalize(name) &&
        normalize(s.code) === normalize(code)
    );
    if (!found) {
      setError("Nome ou senha incorretos.");
      return;
    }
    setAppState((prev) => ({ ...prev, currentStudentId: found.id }));
    setError("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.bg,
        backgroundImage:
          "radial-gradient(ellipse at 15% 40%, rgba(74,222,128,0.06) 0%, transparent 55%), radial-gradient(ellipse at 85% 15%, rgba(251,191,36,0.04) 0%, transparent 50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        fontFamily: FONT,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        input::placeholder { color: ${C.textDim}; }
        input:focus { border-color: ${C.borderA} !important; outline: none; }
        button { transition: opacity 0.15s; }
        button:hover { opacity: 0.85; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 99px; }
      `}</style>

      <div style={{ width: "100%", maxWidth: 420 }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 24,
              background: "rgba(74,222,128,0.08)",
              border: `1px solid rgba(74,222,128,0.22)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              margin: "0 auto 20px",
            }}
          >
            🏨
          </div>
          <h1
            style={{
              fontSize: 32,
              fontWeight: 800,
              color: C.text,
              margin: "0 0 6px",
              fontFamily: DISPLAY,
              letterSpacing: "-0.02em",
            }}
          >
            Aula Marinas
          </h1>
          <p
            style={{
              color: C.textMid,
              fontSize: 14,
              margin: "0 0 4px",
              fontFamily: FONT,
            }}
          >
            Português hoteleiro profissional
          </p>
          <p
            style={{
              color: C.textDim,
              fontSize: 12,
              margin: 0,
              fontFamily: MONO,
            }}
          >
            Marinas Alto Manzano · Villa La Angostura
          </p>
        </div>

        {/* Form */}
        <div
          style={{
            background: C.bg2,
            border: `1px solid ${C.border}`,
            borderRadius: 24,
            padding: 32,
          }}
        >
          <div style={{ marginBottom: 18 }}>
            <label
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: C.textDim,
                letterSpacing: "0.07em",
                display: "block",
                marginBottom: 8,
                fontFamily: MONO,
                textTransform: "uppercase",
              }}
            >
              Nome
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
              style={input}
              onKeyDown={(e) => e.key === "Enter" && login()}
            />
          </div>

          <div style={{ marginBottom: 24 }}>
            <label
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: C.textDim,
                letterSpacing: "0.07em",
                display: "block",
                marginBottom: 8,
                fontFamily: MONO,
                textTransform: "uppercase",
              }}
            >
              Senha
            </label>
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="••••••••"
              type="password"
              style={input}
              onKeyDown={(e) => e.key === "Enter" && login()}
            />
          </div>

          {error && (
            <div
              style={{
                background: "rgba(251,113,133,0.08)",
                border: `1px solid rgba(251,113,133,0.22)`,
                borderRadius: 10,
                padding: "10px 14px",
                fontSize: 13,
                color: C.red,
                marginBottom: 16,
              }}
            >
              {error}
            </div>
          )}

          <button onClick={login} style={{ ...btnPrimary, width: "100%", padding: "13px 24px", fontSize: 15 }}>
            Entrar no aula →
          </button>
        </div>

        <button
          onClick={onProfessor}
          style={{
            marginTop: 10,
            width: "100%",
            background: "transparent",
            border: `1px solid ${C.border}`,
            borderRadius: 14,
            padding: "11px 16px",
            color: C.textDim,
            fontSize: 13,
            cursor: "pointer",
            fontFamily: FONT,
          }}
        >
          👨‍🏫 Painel do professor
        </button>
      </div>
    </div>
  );
}

