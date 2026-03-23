"use client";
import type { AppState } from "@/lib/types";
import { MODULES } from "@/lib/modules";
import { C, FONT, MONO, DISPLAY, catColor } from "@/lib/constants";
import { ScoreRing, MiniBar } from "./ui";

interface Props {
  appState: AppState;
}

const CATEGORY_GROUPS = [
  "Recepção",
  "Check-in",
  "Alojamento",
  "Restaurante",
  "Desayuno",
  "Reclamos",
  "Reservas",
  "Comunicação",
  "Excursiones",
  "Gastronomía",
];

export default function ProgressPanel({ appState }: Props) {
  const sid = appState.currentStudentId!;
  const prog = appState.progress[sid] || {};

  const completed = Object.keys(prog).length;
  const totalScore = MODULES.reduce((sum, m) => sum + (prog[m.id]?.score || 0), 0);
  const percent = Math.round((completed / MODULES.length) * 100);

  return (
    <aside style={{ position: "sticky", top: 72, display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Overall */}
      <div
        style={{
          background: C.bg2,
          border: `1px solid ${C.border}`,
          borderRadius: 20,
          padding: 24,
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.09em",
            color: C.textDim,
            marginBottom: 16,
            fontFamily: MONO,
            textTransform: "uppercase",
          }}
        >
          Meu progresso
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
          <div style={{ position: "relative", flexShrink: 0 }}>
            <ScoreRing percent={percent} size={80} />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 16,
                  fontWeight: 800,
                  color: C.green,
                }}
              >
                {percent}%
              </span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: C.text, fontWeight: 600 }}>
              {completed} de {MODULES.length}
            </div>
            <div style={{ fontSize: 12, color: C.textDim, marginTop: 2 }}>
              módulos completos
            </div>
            <div
              style={{
                fontSize: 13,
                color: C.green,
                fontWeight: 700,
                marginTop: 6,
                fontFamily: MONO,
              }}
            >
              {totalScore} pts
            </div>
          </div>
        </div>

        {CATEGORY_GROUPS.map((cat) => {
          const mods = MODULES.filter((m) => m.category === cat);
          if (mods.length === 0) return null;
          const done = mods.filter((m) => prog[m.id]).length;
          return (
            <div
              key={cat}
              style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: catColor(cat),
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  color: C.textMid,
                  width: 84,
                  flexShrink: 0,
                  fontFamily: FONT,
                }}
              >
                {cat}
              </span>
              <MiniBar value={done} max={mods.length} color={catColor(cat)} />
              <span
                style={{
                  fontSize: 11,
                  color: C.textDim,
                  fontFamily: MONO,
                  flexShrink: 0,
                }}
              >
                {done}/{mods.length}
              </span>
            </div>
          );
        })}
      </div>

      {/* Dica */}
      <div
        style={{
          background: C.bg2,
          border: `1px solid ${C.border}`,
          borderRadius: 20,
          padding: 20,
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.09em",
            color: C.textDim,
            marginBottom: 10,
            fontFamily: MONO,
            textTransform: "uppercase",
          }}
        >
          Dica do dia
        </div>
        <p
          style={{
            fontSize: 13,
            color: C.textMid,
            lineHeight: 1.8,
            margin: 0,
            fontFamily: FONT,
          }}
        >
          💡 Em hotelaria, o tratamento{" "}
          <span style={{ color: C.green, fontWeight: 600 }}>
            "senhor / senhora"
          </span>{" "}
          transmite respeito e profissionalismo em todo momento.
        </p>
      </div>

      {/* Spotify */}
      <div
        style={{
          borderRadius: 20,
          overflow: "hidden",
          border: "1px solid rgba(30,215,96,0.18)",
          background: "linear-gradient(135deg, rgba(30,215,96,0.05), rgba(10,15,13,0.99))",
        }}
      >
        <div
          style={{
            padding: "12px 16px 6px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#1DB954">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
          <span style={{ fontSize: 11, fontWeight: 600, color: C.text, fontFamily: FONT }}>
            Ouça enquanto estuda
          </span>
        </div>
        <iframe
          style={{ borderRadius: "0 0 20px 20px", display: "block" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcOFHFBj89A5?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder={0}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </aside>
  );
}

