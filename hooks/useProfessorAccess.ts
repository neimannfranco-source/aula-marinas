import { useState, useCallback } from "react";
import { PROFESSOR_PASSWORD } from "@/lib/constants";

export function useProfessorAccess() {
  const [profUnlocked, setProfUnlocked] = useState(false);
  const [showProfPanel, setShowProfPanel] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleProfessorClick = useCallback(() => {
    if (profUnlocked) {
      setShowProfPanel((v) => !v);
      return;
    }
    setShowPasswordModal(true);
    setPasswordError("");
  }, [profUnlocked]);

  const submitPassword = useCallback((pwd: string) => {
    if (pwd === PROFESSOR_PASSWORD) {
      setProfUnlocked(true);
      setShowProfPanel(true);
      setShowPasswordModal(false);
      setPasswordError("");
    } else {
      setPasswordError("Senha incorreta.");
    }
  }, []);

  const closeModal = useCallback(() => {
    setShowPasswordModal(false);
    setPasswordError("");
  }, []);

  const reset = useCallback(() => {
    setProfUnlocked(false);
    setShowProfPanel(false);
    setShowPasswordModal(false);
    setPasswordError("");
  }, []);

  return {
    profUnlocked,
    showProfPanel,
    setShowProfPanel,
    showPasswordModal,
    passwordError,
    handleProfessorClick,
    submitPassword,
    closeModal,
    reset,
  };
}