import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { services } from "@/lib/services";

export function ServicesOverview() {
  const [featured, ...rest] = services;

  return (
    <Section id="services" tone="mist" labelledBy="services-heading">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-heading"
            eyebrow="What we repair"
            title="Collision and auto body services built around the claim - and the car"
            lede="From full collision repair to paintless dent removal and windshield work, every service page is written for the decision you are actually making."
          />
          <Link
            href="/services"
            className="btn-ghost-dark shrink-0 self-start lg:self-auto"
          >
            All services
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Featured large tile */}
          <Link
            href={`/services/${featured.slug}`}
            className="group relative isolate overflow-hidden rounded-2xl bg-navy-900 lg:col-span-7 lg:min-h-[420px]"
            data-reveal
          >
            <Image
              src={featured.heroImage.src}
              alt={featured.heroImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
            <div className="relative flex h-full min-h-[320px] flex-col justify-end p-7 sm:p-9">
              <p className="eyebrow mb-3 text-blue-400">Featured</p>
              <h3 className="headline-md text-white">{featured.name}</h3>
              <p className="mt-3 max-w-md text-white/75">{featured.cardSummary}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white">
                Explore collision repair
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>

          {/* Stacked secondary */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:gap-6">
            {rest.slice(0, 2).map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group relative isolate overflow-hidden rounded-2xl bg-navy-900 min-h-[200px]"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i + 1) * 80}ms` }}
              >
                <Image
                  src={s.heroImage.src}
                  alt={s.heroImage.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 28vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-6">
                  <h3 className="text-xl font-extrabold text-white">{s.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-white/70">{s.cardSummary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Remaining as editorial list */}
        <ul className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {rest.slice(2).map((s, i) => (
            <li key={s.slug} className="bg-paper" data-reveal style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col justify-between gap-6 p-6 transition hover:bg-blue-50/60 sm:p-7"
              >
                <div>
                  <h3 className="text-lg font-extrabold text-navy-900 group-hover:text-blue-600">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.cardSummary}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-blue-600">
                  Learn more
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
