import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/services";
import { getService, services } from "@/lib/services";
import { business } from "@/lib/site";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FaqList } from "@/components/shared/FaqList";
import { CtaBand } from "@/components/shared/CtaBand";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import { TrackedA, TrackedLink } from "@/components/ui/TrackedLink";
import { OpenEstimateButton } from "@/components/lead/OpenEstimateButton";
import { faqJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/seo";
import { ReviewsSection } from "@/components/home/ReviewsSection";

export function ServicePage({ service }: { service: Service }) {
  const related = service.related
    .map((slug) => getService(slug))
    .filter((s): s is Service => Boolean(s));

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: `/services/${service.slug}`,
            title: service.title,
            description: service.description,
          }),
          serviceJsonLd(service),
          faqJsonLd(service.faqs),
        ]}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <Image
          src={service.heroImage.src}
          alt={service.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/55" />
        <div className="container-x relative py-16 sm:py-20 lg:py-24">
          <Breadcrumbs
            dark
            items={[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.name, path: `/services/${service.slug}` },
            ]}
          />
          <p className="eyebrow mb-4 text-blue-400">{service.heroKicker}</p>
          <h1 className="headline-lg max-w-3xl text-white">{service.h1}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{service.heroLede}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <OpenEstimateButton
              source={`service_${service.slug}`}
              className="btn-primary"
            >
              Request an Estimate
            </OpenEstimateButton>
            <TrackedA
              href={business.phoneHref}
              event="phone_click"
              payload={{ location: `service_${service.slug}` }}
              className="btn-ghost-light"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {business.phone}
            </TrackedA>
          </div>
        </div>
      </section>

      {/* Problem */}
      <Section tone="paper" labelledBy="problem-heading">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              id="problem-heading"
              eyebrow="The situation"
              title={service.problem.heading}
            />
            <div className="mt-6 space-y-4">
              {service.problem.body.map((p) => (
                <p key={p.slice(0, 40)} className="text-[1.02rem] leading-relaxed text-slate-600">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl" data-reveal>
            <Image
              src={service.secondaryImage.src}
              alt={service.secondaryImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* What we do */}
      <Section tone="mist" labelledBy="what-heading">
        <div className="container-x">
          <SectionHeading
            id="what-heading"
            eyebrow="Scope of work"
            title={service.whatWeDo.heading}
          />
          <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {service.whatWeDo.items.map((item, i) => (
              <li
                key={item.title}
                className="bg-paper p-6 sm:p-7"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 50}ms` }}
              >
                <span className="font-mono text-xs font-bold tracking-wider text-blue-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-extrabold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Benefits */}
      <Section tone="paper" labelledBy="benefits-heading">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            id="benefits-heading"
            eyebrow="Why it matters"
            title="What you get when the repair is done right"
          />
          <ul className="grid gap-6 sm:grid-cols-2">
            {service.benefits.map((b, i) => (
              <li
                key={b.title}
                className="border-t border-line pt-5"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
              >
                <h3 className="text-lg font-extrabold text-navy-900">{b.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-600">{b.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Process */}
      <Section tone="navy" labelledBy="svc-process-heading">
        <div className="container-x">
          <SectionHeading
            id="svc-process-heading"
            dark
            eyebrow="Process"
            title={`How ${service.shortName.toLowerCase()} work moves forward`}
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {service.process.map((step, i) => (
              <li
                key={step.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              >
                <span className="font-mono text-sm font-bold text-blue-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-extrabold text-white">{step.step}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Local note */}
      <Section tone="mist">
        <div className="container-x max-w-3xl" data-reveal>
          <p className="eyebrow mb-4 text-blue-600">Local to Vacaville</p>
          <p className="text-xl font-medium leading-relaxed text-navy-900 sm:text-2xl">
            {service.localNote}
          </p>
          <TrackedLink
            href="/contact"
            event="service_cta_click"
            payload={{ service: service.slug, target: "contact" }}
            className="btn-primary mt-8"
          >
            Talk to the shop
          </TrackedLink>
        </div>
      </Section>

      {/* FAQs */}
      <Section tone="paper" labelledBy="svc-faq-heading">
        <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            id="svc-faq-heading"
            eyebrow="FAQ"
            title={`${service.name} questions`}
          />
          <div data-reveal>
            <FaqList faqs={service.faqs} withSchema={false} />
          </div>
        </div>
      </Section>

      <ReviewsSection limit={3} />

      {/* Related */}
      {related.length > 0 && (
        <Section tone="mist" labelledBy="related-heading">
          <div className="container-x">
            <SectionHeading
              id="related-heading"
              eyebrow="Related services"
              title="Continue exploring"
            />
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/services/${r.slug}`}
                    className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-paper p-6 transition hover:border-blue-200 hover:shadow-soft"
                  >
                    <div>
                      <h3 className="text-lg font-extrabold text-navy-900 group-hover:text-blue-600">
                        {r.name}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">{r.cardSummary}</p>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-blue-600">
                      View service
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-slate-500">
              Looking for something else? See the full{" "}
              <Link href="/services" className="font-semibold text-blue-600 hover:underline">
                services directory
              </Link>{" "}
              or compare with{" "}
              {services
                .filter((s) => s.slug !== service.slug && !service.related.includes(s.slug))
                .slice(0, 2)
                .map((s, i, arr) => (
                  <span key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="font-semibold text-blue-600 hover:underline">
                      {s.name}
                    </Link>
                    {i < arr.length - 1 ? " and " : ""}
                  </span>
                ))}
              .
            </p>
          </div>
        </Section>
      )}

      <CtaBand
        title={`Ready for a ${service.shortName.toLowerCase()} estimate?`}
        lede="Send photos or call Fix Auto Vacaville. We will outline the repair and handle the insurance paperwork with you."
      />
    </>
  );
}
