import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { business, fullAddress, nav } from "@/lib/site";
import { services } from "@/lib/services";
import { TrackedA } from "@/components/ui/TrackedLink";
import { BrandLogo } from "@/components/layout/BrandLogo";

function SocialIcon({ network }: { network: (typeof business.social)[number]["network"] }) {
  const common = {
    className: "h-4 w-4",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
  };

  if (network === "facebook") {
    return (
      <svg {...common}>
        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.174 2.097 15.943 2 14.643 2 11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
      </svg>
    );
  }

  if (network === "instagram") {
    return (
      <svg {...common}>
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm10.5 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
    </svg>
  );
}

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
            View Google Business Profile
          </TrackedA>
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            {business.social.map((item) => (
              <TrackedA
                key={item.href}
                href={item.href}
                event="social_click"
                payload={{ network: item.network, location: "footer" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.label} (opens in a new tab)`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-blue-400/50 hover:bg-blue-500/15 hover:text-blue-300"
              >
                <SocialIcon network={item.network} />
              </TrackedA>
            ))}
          </div>
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
