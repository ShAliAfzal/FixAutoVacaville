import Image from "next/image";
import { Phone } from "lucide-react";
import { business } from "@/lib/site";
import { TrackedA } from "@/components/ui/TrackedLink";
import { OpenEstimateButton } from "@/components/lead/OpenEstimateButton";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28">
      <Image
        src="/images/dark-muscle-car-cinematic.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy-950/85" aria-hidden="true" />
      <div className="container-x relative text-center text-white" data-reveal>
        <p className="eyebrow mx-auto mb-5 justify-center text-blue-400">Next step</p>
        <h2 className="headline-lg mx-auto max-w-3xl text-white">
          Get a clear plan for your vehicle - today
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
          Call the shop, request an estimate with photos, or stop by 70 Peabody Road during business
          hours. We will tell you what the damage needs and how we will handle the claim.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <OpenEstimateButton source="final_cta" className="btn-primary">
            Request an Estimate
          </OpenEstimateButton>
          <TrackedA
            href={business.phoneHref}
            event="phone_click"
            payload={{ location: "final_cta" }}
            className="btn-ghost-light"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {business.phone}
          </TrackedA>
        </div>
      </div>
    </section>
  );
}
