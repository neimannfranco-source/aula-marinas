"use client";

import { useState, useEffect, useRef } from "react";
import { C, FONT, MONO, input, btnGhost } from "@/lib/constants";

interface ProfessorModalProps {
  onSubmit: (pwd: string) => void;
  onClose: () => void;
  error: string;
}

export default function ProfessorModal({ onSubmit, onClose, error }: ProfessorModalProps) {
  const [pwd, setPwd] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = () => {
    if (pwd.trim()) onSubmit(pwd.trim());
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
    if (e.key === "Escape") onClose();
  };

  return (
    // Backdrop
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: FONT,
      }}
    >
      {/* Dialog */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: C.bg2,
          border: `1px solid ${C.border}`,
          borderRadius: 12,
          padding: 24,
          width: 320,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontWeight: 700, fontSize: 15, color: C.text }}>
            👨‍🏫 Acesso do Professor
          </span>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: C.textDim,
              cursor: "pointer",
              fontSize: 18,
              lineHeight: 1,
              padding: "0 4px",
            }}
          >
            ×
          </button>
        </div>

        <input
          ref={inputRef}
          type="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Senha do professor"
          style={{ ...input, width: "100%" }}
        />

        {error && (
          <span style={{ fontSize: 12, color: C.red }}>{error}</span>
        )}

        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
          <button onClick={onClose} style={{ ...btnGhost, fontSize: 13 }}>
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            style={{
              ...btnGhost,
              fontSize: 13,
              background: "rgba(74,222,128,0.1)",
              borderColor: "rgba(74,222,128,0.3)",
              color: C.green,
            }}
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}