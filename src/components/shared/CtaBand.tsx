import { Phone } from "lucide-react";
import { TrackedA, TrackedLink } from "@/components/ui/TrackedLink";
import { business, estimateHref } from "@/lib/site";

export function CtaBand({
  title = "Ready for a clear estimate?",
  lede = "Send photos online or call the shop. We will walk you through the repair and handle the insurance paperwork.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 text-white sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgb(42 114 234 / 0.45), transparent 55%), radial-gradient(ellipse at 90% 100%, rgb(26 95 214 / 0.25), transparent 45%)",
        }}
        aria-hidden="true"
      />
      <div className="container-x relative grid gap-8 lg:grid-cols-[1.2fr_auto] lg:items-center">
        <div data-reveal>
          <p className="eyebrow mb-4 text-blue-400">Fix Auto Vacaville</p>
          <h2 className="headline-md text-white">{title}</h2>
          <p className="mt-4 max-w-xl text-lg text-white/70">{lede}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col" data-reveal>
          <TrackedLink
            href={estimateHref}
            event="estimate_cta_click"
            payload={{ location: "cta_band" }}
            className="btn-primary"
          >
            Request an Estimate
          </TrackedLink>
          <TrackedA
            href={business.phoneHref}
            event="phone_click"
            payload={{ location: "cta_band" }}
            className="btn-ghost-light"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {business.phone}
          </TrackedA>
        </div>
      </div>
    </section>
  );
}
