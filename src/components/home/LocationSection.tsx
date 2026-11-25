import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { business, fullAddress } from "@/lib/site";
import { TrackedA } from "@/components/ui/TrackedLink";
import { OpenEstimateButton } from "@/components/lead/OpenEstimateButton";

export function LocationSection() {
  return (
    <Section id="location" tone="paper" labelledBy="location-heading">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <SectionHeading
            id="location-heading"
            eyebrow="Vacaville location"
            title="Find Fix Auto Vacaville on Peabody Road"
            lede="Convenient to I-80 and I-505 for drivers across Vacaville and nearby Solano County communities."
          />

          <dl className="mt-10 space-y-5">
            <div className="flex gap-3" data-reveal>
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
              <div>
                <dt className="font-bold text-navy-900">Address</dt>
                <dd className="mt-1 text-slate-600">{fullAddress}</dd>
              </div>
            </div>
            <div className="flex gap-3" data-reveal>
              <Phone className="mt-1 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
              <div>
                <dt className="font-bold text-navy-900">Phone</dt>
                <dd className="mt-1">
                  <TrackedA
                    href={business.phoneHref}
                    event="phone_click"
                    payload={{ location: "location_section" }}
                    className="font-bold text-blue-600 hover:underline"
                  >
                    {business.phone}
                  </TrackedA>
                </dd>
              </div>
            </div>
            <div className="flex gap-3" data-reveal>
              <Clock className="mt-1 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
              <div>
                <dt className="font-bold text-navy-900">Hours</dt>
                <dd className="mt-1 text-slate-600">
                  <ul className="space-y-1">
                    {business.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-8 max-w-xs">
                        <span>{h.day}</span>
                        <span className="tabular-nums">
                          {h.open ? `${h.open} - ${h.close}` : "Closed"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-reveal>
            <TrackedA
              href={business.googleDirectionsUrl}
              event="directions_click"
              payload={{ location: "location_section" }}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Get Directions
            </TrackedA>
            <OpenEstimateButton source="location_section" className="btn-ghost-dark">
              Request an Estimate
            </OpenEstimateButton>
          </div>
        </div>

        <div
          className="relative min-h-[320px] overflow-hidden rounded-2xl border border-line bg-mist shadow-soft lg:min-h-full"
          data-reveal
        >
          <iframe
            title="Map of Fix Auto Vacaville at 70 Peabody Road"
            src={business.mapEmbedUrl}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </Section>
  );
}
