"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type LeadContextValue = {
  open: boolean;
  openLead: (source?: string) => void;
  closeLead: () => void;
  source: string;
};

const LeadContext = createContext<LeadContextValue | null>(null);

export function LeadProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState("header");

  const openLead = useCallback((src = "header") => {
    setSource(src);
    setOpen(true);
  }, []);

  const closeLead = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === "#estimate") openLead("hash");
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [openLead]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLead();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeLead]);

  const value = useMemo(
    () => ({ open, openLead, closeLead, source }),
    [open, openLead, closeLead, source],
  );

  return <LeadContext.Provider value={value}>{children}</LeadContext.Provider>;
}

export function useLead() {
  const ctx = useContext(LeadContext);
  if (!ctx) throw new Error("useLead must be used within LeadProvider");
  return ctx;
}
