import { useState, useCallback } from "react";
import type { AppState } from "@/lib/types";
import type { Student } from "@/lib/types";

export function useChangePassword(
  currentStudent: Student | null,
  setAppState: React.Dispatch<React.SetStateAction<AppState>>
) {
  const [showChangePwd, setShowChangePwd] = useState(false);
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [pwdMsg, setPwdMsg] = useState("");

  const open = useCallback(() => {
    setShowChangePwd(true);
    setPwdMsg("");
  }, []);

  const close = useCallback(() => {
    setShowChangePwd(false);
    setNewPwd("");
    setConfirmPwd("");
    setPwdMsg("");
  }, []);

  const changePwd = useCallback(() => {
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
      students: prev.students.map((s) =>
        s.id === currentStudent.id
          ? { ...s, code: newPwd.trim().toUpperCase() }
          : s
      ),
    }));

    setPwdMsg("✓ Senha atualizada.");
    setNewPwd("");
    setConfirmPwd("");
    setTimeout(close, 1500);
  }, [newPwd, confirmPwd, currentStudent, setAppState, close]);

  const reset = useCallback(() => {
    setShowChangePwd(false);
    setNewPwd("");
    setConfirmPwd("");
    setPwdMsg("");
  }, []);

  return {
    showChangePwd,
    newPwd,
    confirmPwd,
    pwdMsg,
    setNewPwd,
    setConfirmPwd,
    open,
    close,
    changePwd,
    reset,
  };
}