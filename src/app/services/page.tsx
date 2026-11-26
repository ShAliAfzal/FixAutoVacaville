import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBand } from "@/components/shared/CtaBand";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Auto Body & Collision Services in Vacaville | Fix Auto Vacaville",
  description:
    "Browse collision repair, auto body, paintless dent repair, paint, windshield and post-collision inspection services at Fix Auto Vacaville, 70 Peabody Road.",
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          path: "/services",
          title: "Auto Body & Collision Services in Vacaville",
          description:
            "Directory of collision and auto body services offered by Fix Auto Vacaville.",
        })}
      />

      <section className="border-b border-line bg-navy-950 text-white">
        <div className="container-x py-16 sm:py-20">
          <Breadcrumbs
            dark
            items={[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ]}
          />
          <p className="eyebrow mb-4 text-blue-400">Services</p>
          <h1 className="headline-lg max-w-3xl text-white">
            Collision and auto body services in Vacaville
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70">
            Every page below is written for a specific repair decision - not a recycled template with
            the service name swapped. Choose the service that matches what happened to your vehicle.
          </p>
        </div>
      </section>

      <Section tone="paper">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group grid overflow-hidden rounded-2xl border border-line bg-paper shadow-soft transition hover:shadow-lift sm:grid-cols-[0.9fr_1.1fr]"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 4) * 60}ms` }}
            >
              <div className="relative min-h-[200px]">
                <Image
                  src={s.heroImage.src}
                  alt={s.heroImage.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-between p-6 sm:p-7">
                <div>
                  <h2 className="text-xl font-extrabold text-navy-900 group-hover:text-blue-600">
                    {s.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.cardSummary}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-blue-600">
                  View {s.shortName.toLowerCase()} service
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="mist" labelledBy="note-heading">
        <div className="container-x max-w-3xl">
          <SectionHeading
            id="note-heading"
            eyebrow="What we do not offer"
            title="Specialists in body and collision - not routine mechanical"
            lede="We do not perform oil changes, brake jobs or general mechanical repair. If your need is accident, body, paint, dent or glass related, you are in the right place."
          />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
