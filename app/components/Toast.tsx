"use client";

import { useEffect, useState } from "react";
import { C, FONT } from "@/lib/constants";

interface ToastProps {
  message: string;
  type?: "success" | "error";
  duration?: number;
  onDone?: () => void;
}

export default function Toast({ message, type = "success", duration = 2000, onDone }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onDone?.(), 300);
    }, duration);
    return () => clearTimeout(t);
  }, [duration, onDone]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 300,
        background: type === "success" ? "rgba(74,222,128,0.12)" : "rgba(239,68,68,0.12)",
        border: `1px solid ${type === "success" ? "rgba(74,222,128,0.3)" : "rgba(239,68,68,0.3)"}`,
        color: type === "success" ? C.green : C.red,
        borderRadius: 10,
        padding: "10px 18px",
        fontSize: 13,
        fontWeight: 600,
        fontFamily: FONT,
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 0.25s, transform 0.25s",
        pointerEvents: "none",
      }}
    >
      {message}
    </div>
  );
}