"use client";
import { useState } from "react";
import type { AppState } from "../../lib/types";
import {
  C,
  FONT,
  DISPLAY,
  MONO,
  input,
  btnPrimary,
  normalize,
} from "../../lib/constants";

interface Props {
  appState: AppState;
  setAppState: (s: AppState | ((p: AppState) => AppState)) => void;
  onProfessor: () => void;
  showProfPanel: boolean;
}

export default function Login({
  appState,
  setAppState,
  onProfessor,
  showProfPanel,
}: Props) {
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
      setError("Nombre o contraseña incorrectos.");
      return;
    }

    setAppState((prev) => ({ ...prev, currentStudentId: found.id }));
    setError("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        fontFamily: FONT,
        overflow: "hidden",
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
          filter: "brightness(0.90) saturate(1.15) contrast(1.05)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(160deg, rgba(6,17,14,0.45) 0%, rgba(9,24,18,0.55) 100%)",
        }}
      />
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

      <div style={{ width: "100%", maxWidth: 420, position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ marginBottom: 20 }} />

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
              color: "rgba(255,255,255,0.90)",
              fontSize: 15,
              margin: "0 0 12px",
              fontFamily: FONT,
              fontWeight: 500,
            }}
          >
            Portugués hotelero profesional
          </p>

          <p
            style={{
              color: "rgba(255,255,255,0.70)",
              fontSize: 12,
              margin: 0,
              fontFamily: MONO,
              letterSpacing: "0.06em",
            }}
          >
            Marinas Alto Manzano · Villa La Angostura
          </p>
        </div>

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
              Nombre
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre completo"
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
              Contraseña
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

          <button
            onClick={login}
            style={{
              ...btnPrimary,
              width: "100%",
              padding: "13px 24px",
              fontSize: 15,
            }}
          >
            Entrar a la plataforma →
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
          👨‍🏫 Panel del profesor
        </button>
      </div>
    </div>
  );
}