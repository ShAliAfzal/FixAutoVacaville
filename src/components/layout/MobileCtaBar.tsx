"use client";

import { Phone, FileText } from "lucide-react";
import { business } from "@/lib/site";
import { TrackedA } from "@/components/ui/TrackedLink";
import { useLead } from "@/components/lead/LeadContext";

export function MobileCtaBar() {
  const { openLead } = useLead();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-900/10 bg-paper/95 p-3 shadow-[0_-8px_30px_-12px_rgb(10_31_61_/_0.35)] backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <TrackedA
          href={business.phoneHref}
          event="phone_click"
          payload={{ location: "mobile_sticky" }}
          className="btn-dark !min-h-12 !text-sm"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Shop
        </TrackedA>
        <button
          type="button"
          onClick={() => openLead("mobile_sticky")}
          className="btn-primary !min-h-12 !text-sm"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          Estimate
        </button>
      </div>
    </div>
  );
}
