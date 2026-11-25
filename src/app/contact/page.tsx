import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EstimateForm } from "@/components/lead/EstimateForm";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import { TrackedA } from "@/components/ui/TrackedLink";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";
import { business, fullAddress } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact & Free Estimate | Fix Auto Vacaville",
  description:
    "Request a collision or auto body estimate from Fix Auto Vacaville. Call (707) 898-7313 or visit 70 Peabody Road, Vacaville, CA 95687. Mon-Fri 9AM-5PM.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          path: "/contact",
          title: "Contact & Free Estimate",
          description: "Contact Fix Auto Vacaville for estimates and appointments.",
        })}
      />

      <section className="border-b border-line bg-navy-950 text-white">
        <div className="container-x py-16 sm:py-20">
          <Breadcrumbs
            dark
            items={[
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ]}
          />
          <p className="eyebrow mb-4 text-blue-400">Contact</p>
          <h1 className="headline-lg max-w-3xl text-white">
            Request an estimate or call the shop
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70">
            Send vehicle details and a short description of the damage. Prefer to talk now? Call{" "}
            {business.phone} during business hours.
          </p>
        </div>
      </section>

      <Section tone="paper">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Shop info"
              title="How to reach Fix Auto Vacaville"
            />
            <ul className="mt-10 space-y-6">
              <li className="flex gap-3">
                <Phone className="mt-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                <div>
                  <p className="font-bold text-navy-900">Phone</p>
                  <TrackedA
                    href={business.phoneHref}
                    event="phone_click"
                    payload={{ location: "contact_page" }}
                    className="mt-1 inline-block text-lg font-extrabold text-blue-600 hover:underline"
                  >
                    {business.phone}
                  </TrackedA>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                <div>
                  <p className="font-bold text-navy-900">Email</p>
                  <TrackedA
                    href={`mailto:${business.email}`}
                    event="email_click"
                    payload={{ location: "contact_page" }}
                    className="mt-1 hover:underline"
                  >
                    {business.email}
                  </TrackedA>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                <div>
                  <p className="font-bold text-navy-900">Address</p>
                  <p className="mt-1 text-slate-600">{fullAddress}</p>
                  <TrackedA
                    href={business.googleDirectionsUrl}
                    event="directions_click"
                    payload={{ location: "contact_page" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-bold text-blue-600 hover:underline"
                  >
                    Get directions
                  </TrackedA>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                <div>
                  <p className="font-bold text-navy-900">Hours</p>
                  <ul className="mt-2 max-w-xs space-y-1 text-slate-600">
                    {business.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-6">
                        <span>{h.day}</span>
                        <span>{h.open ? `${h.open} - ${h.close}` : "Closed"}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            <div className="relative mt-10 min-h-[240px] overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Map of Fix Auto Vacaville"
                src={business.mapEmbedUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div
            id="estimate"
            className="scroll-mt-28 rounded-2xl border border-line bg-mist p-6 sm:p-8 lg:p-10"
          >
            <h2 className="headline-md text-navy-900">Estimate request</h2>
            <p className="mt-3 text-slate-600">
              Fields marked with * are required. Photos can be discussed after we contact you - or
              email them to {business.email}.
            </p>
            <div className="mt-8">
              <EstimateForm source="contact_page" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
