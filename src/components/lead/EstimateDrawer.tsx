"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { EstimateForm } from "./EstimateForm";
import { useLead } from "./LeadContext";
import { business } from "@/lib/site";

export function EstimateDrawer() {
  const { open, closeLead, source } = useLead();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[80] ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
      {...(!open ? { inert: true } : {})}
    >
      <button
        type="button"
        tabIndex={open ? 0 : -1}
        aria-label="Close estimate form"
        className={`absolute inset-0 bg-navy-950/55 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeLead}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="estimate-drawer-title"
        className={`absolute inset-y-0 right-0 flex w-full max-w-lg flex-col bg-paper shadow-lift transition-transform duration-500 ease-[var(--ease-out-expo)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-5 sm:px-7">
          <div>
            <p className="eyebrow mb-2 text-blue-600">Free estimate</p>
            <h2 id="estimate-drawer-title" className="text-2xl font-extrabold text-navy-900">
              Tell us about the damage
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              We usually respond during shop hours. Urgent? Call{" "}
              <a href={business.phoneHref} className="font-bold text-blue-600">
                {business.phone}
              </a>
              .
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={closeLead}
            className="rounded-md border border-line p-2 text-navy-900 hover:bg-mist"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-7">
          {open ? <EstimateForm source={source} compact /> : null}
        </div>
      </div>
    </div>
  );
}
