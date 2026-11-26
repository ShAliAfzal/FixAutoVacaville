import Image from "next/image";
import { Phone, MapPin, ShieldCheck } from "lucide-react";
import { business } from "@/lib/site";
import { TrackedA } from "@/components/ui/TrackedLink";
import { OpenEstimateButton } from "@/components/lead/OpenEstimateButton";
import { StarRating } from "@/components/shared/StarRating";

export function Hero() {
  return (
    <section className="relative isolate min-h-[min(92vh,820px)] overflow-hidden bg-navy-950 text-white">
      <Image
        src="/images/hero-dark-sports-car-dusk.jpg"
        alt="Dark sports car at dusk representing premium collision and auto body repair"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_center] hero-zoom"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/88 to-navy-950/35"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40"
        aria-hidden="true"
      />

      <div className="container-x relative flex min-h-[min(92vh,820px)] flex-col justify-end pb-16 pt-28 sm:justify-center sm:pb-24 sm:pt-32 lg:pb-28">
        <div className="max-w-2xl hero-fade-in">
          <p className="eyebrow mb-5 text-blue-400">
            70 Peabody Road · Free photo estimates
          </p>
          <h1 className="headline-xl text-white">
            Expert Collision & Auto Body Repair in Vacaville, CA
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Fix Auto Vacaville restores vehicles after accidents with clear estimates, insurance
            coordination, and status updates - so you get a safe, factory-quality finish without the
            runaround.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <OpenEstimateButton source="hero" className="btn-primary">
              Request an Estimate
            </OpenEstimateButton>
            <TrackedA
              href={business.phoneHref}
              event="phone_click"
              payload={{ location: "hero" }}
              className="btn-ghost-light"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {business.phone}
            </TrackedA>
            <TrackedA
              href={business.googleDirectionsUrl}
              event="directions_click"
              payload={{ location: "hero" }}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Get Directions
            </TrackedA>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80 hero-fade-in-delay">
            <TrackedA
              href={business.googleReviewsUrl}
              event="reviews_link_click"
              payload={{ location: "hero" }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <StarRating rating={business.googleRating} size={15} />
              <span>
                <strong className="text-white">{business.googleRating}</strong> ·{" "}
                {business.googleReviewCountLabel} Google reviews
              </span>
            </TrackedA>
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-blue-400" aria-hidden="true" />
              Nationwide limited lifetime warranty
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
