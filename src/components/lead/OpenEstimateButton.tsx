"use client";

import type { ReactNode } from "react";
import { useLead } from "./LeadContext";
import { track } from "@/lib/analytics";

export function OpenEstimateButton({
  children,
  className,
  source = "cta",
}: {
  children: ReactNode;
  className?: string;
  source?: string;
}) {
  const { openLead } = useLead();
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        track("estimate_cta_click", { location: source });
        openLead(source);
      }}
    >
      {children}
    </button>
  );
}
