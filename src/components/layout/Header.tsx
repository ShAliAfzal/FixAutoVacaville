"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import { business, nav } from "@/lib/site";
import { serviceNavItems } from "@/lib/services";
import { TrackedA } from "@/components/ui/TrackedLink";
import { useLead } from "@/components/lead/LeadContext";
import { BrandLogo } from "@/components/layout/BrandLogo";

const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasServices: true },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
] as const;

export function Header() {
  const { openLead } = useLead();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy-950/90 shadow-soft backdrop-blur-md"
          : "bg-navy-950"
      }`}
    >
      <div className="border-b border-white/10 bg-navy-900/80">
        <div className="container-x flex items-center justify-between gap-4 py-2 text-xs text-white/75 sm:text-sm">
          <p className="truncate">
            {business.address.street}, {business.address.city}, {business.address.region} ·{" "}
            {business.hoursSummary.split(" · ")[0]}
          </p>
          <TrackedA
            href={business.phoneHref}
            event="phone_click"
            payload={{ location: "header_top" }}
            className="hidden items-center gap-1.5 font-bold text-white hover:text-blue-400 sm:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {business.phone}
          </TrackedA>
        </div>
      </div>

      <div className="container-x flex h-[5.25rem] items-center justify-between gap-4 sm:h-[5.75rem] lg:h-[6rem]">
        <BrandLogo variant="white" size="xl" className="relative z-10 min-w-0" />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) =>
            "hasServices" in item && item.hasServices ? (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-[0.92rem] font-semibold text-white/85 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 opacity-70" aria-hidden="true" />
                </Link>
                <div className="invisible absolute left-0 top-full z-20 min-w-[240px] translate-y-1 pt-2 opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="rounded-lg border border-line bg-paper p-2 shadow-lift">
                    {serviceNavItems.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block rounded-md px-3 py-2.5 text-sm font-semibold text-navy-900 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {s.label}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="mt-1 block rounded-md border-t border-line px-3 py-2.5 text-sm font-bold text-blue-600 hover:bg-blue-50"
                    >
                      View all services
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-[0.92rem] font-semibold text-white/85 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <TrackedA
            href={business.phoneHref}
            event="phone_click"
            payload={{ location: "header" }}
            className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-bold text-white hover:bg-white/5 lg:inline-flex"
          >
            <Phone className="h-4 w-4 text-blue-400" aria-hidden="true" />
            {business.phone}
          </TrackedA>
          <button
            type="button"
            onClick={() => openLead("header")}
            className="btn-primary hidden !min-h-11 !px-4 !text-sm sm:inline-flex"
          >
            Request Estimate
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={`fixed inset-x-0 bottom-0 top-[calc(5.25rem+2.25rem)] z-40 bg-navy-950 transition-[opacity,visibility] duration-300 sm:top-[calc(5.75rem+2.25rem)] lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="container-x flex h-full flex-col gap-2 overflow-y-auto py-6 pb-28">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-3 text-lg font-bold text-white hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            className="mt-2 flex items-center justify-between rounded-lg px-3 py-3 text-left text-lg font-bold text-white hover:bg-white/5"
            aria-expanded={servicesOpen}
            onClick={() => setServicesOpen((v) => !v)}
          >
            All services
            <ChevronDown
              className={`h-5 w-5 transition ${servicesOpen ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
          {servicesOpen && (
            <div className="mb-2 space-y-1 border-l border-white/15 pl-4">
              {serviceNavItems.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-base font-semibold text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}
          <div className="mt-4 grid gap-3">
            <button
              type="button"
              className="btn-primary w-full"
              onClick={() => {
                setMobileOpen(false);
                openLead("mobile_nav");
              }}
            >
              Request an Estimate
            </button>
            <TrackedA
              href={business.phoneHref}
              event="phone_click"
              payload={{ location: "mobile_nav" }}
              className="btn-ghost-light w-full"
              onClick={() => setMobileOpen(false)}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {business.phone}
            </TrackedA>
          </div>
        </div>
      </div>
    </header>
  );
}
