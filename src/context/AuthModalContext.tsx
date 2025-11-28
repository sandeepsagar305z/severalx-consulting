"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

interface AuthModalContextValue {
  isOpen: boolean;
  pendingQuestion: string;
  openAuthModal: (question?: string) => void;
  closeAuthModal: () => void;
  setPendingQuestion: (question: string) => void;
}

const AuthModalContext = createContext<AuthModalContextValue | undefined>(undefined);

export function AuthModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingQuestion, setPendingQuestion] = useState("");

  const openAuthModal = useCallback((question?: string) => {
    setPendingQuestion(typeof question === "string" ? question : "");
    setIsOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      pendingQuestion,
      openAuthModal,
      closeAuthModal,
      setPendingQuestion,
    }),
    [isOpen, pendingQuestion, openAuthModal, closeAuthModal],
  );

  return <AuthModalContext.Provider value={value}>{children}</AuthModalContext.Provider>;
}

export function useAuthModal() {
  const context = useContext(AuthModalContext);
  if (context == null) {
    throw new Error("useAuthModal must be used within an AuthModalProvider");
  }
  return context;
}
