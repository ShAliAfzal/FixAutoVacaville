import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { business, fullAddress, nav } from "@/lib/site";
import { services } from "@/lib/services";
import { TrackedA } from "@/components/ui/TrackedLink";
import { BrandLogo } from "@/components/layout/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr] lg:gap-10 lg:py-20">
        <div>
          <BrandLogo variant="white" size="xl" />
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-white/65">
            Collision repair and auto body specialists at {business.address.street}. Insurance claims
            handled, status updates by text, and repairs backed by the Fix Auto USA nationwide limited
            lifetime warranty.
          </p>
          <TrackedA
            href={business.googleMapsUrl}
            event="directions_click"
            payload={{ location: "footer" }}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex text-sm font-bold text-blue-400 hover:text-blue-300"
          >
            View Google Business Profile →
          </TrackedA>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white/45">Explore</h2>
          <ul className="mt-5 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/gallery" className="text-white/80 hover:text-white">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-white/80 hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white/45">Services</h2>
          <ul className="mt-5 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-white/80 hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white/45">Visit & call</h2>
          <ul className="mt-5 space-y-4 text-[0.95rem] text-white/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
              <span>
                {fullAddress}
                <br />
                <TrackedA
                  href={business.googleDirectionsUrl}
                  event="directions_click"
                  payload={{ location: "footer_address" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-semibold text-blue-400 hover:text-blue-300"
                >
                  Get directions
                </TrackedA>
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
              <TrackedA
                href={business.phoneHref}
                event="phone_click"
                payload={{ location: "footer" }}
                className="font-bold text-white hover:text-blue-300"
              >
                {business.phone}
              </TrackedA>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
              <TrackedA
                href={`mailto:${business.email}`}
                event="email_click"
                payload={{ location: "footer" }}
                className="hover:text-white"
              >
                {business.email}
              </TrackedA>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
              <span>{business.hoursSummary}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {business.name}. All rights reserved. Formerly {business.formerName}.
          </p>
          <p>A Fix Auto USA location · Vacaville, California</p>
        </div>
      </div>
    </footer>
  );
}
