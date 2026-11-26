import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBand } from "@/components/shared/CtaBand";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";
import { business, fullAddress } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About Fix Auto Vacaville | Collision Shop on Peabody Road",
  description:
    "Learn about Fix Auto Vacaville (formerly Peabody Auto Body): a locally operated collision and auto body shop at 70 Peabody Road with Fix Auto USA network support.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          path: "/about",
          title: "About Fix Auto Vacaville",
          description:
            "Locally operated collision and auto body shop in Vacaville, California.",
        })}
      />

      <section className="border-b border-line bg-navy-950 text-white">
        <div className="container-x py-16 sm:py-20">
          <Breadcrumbs
            dark
            items={[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ]}
          />
          <p className="eyebrow mb-4 text-blue-400">About the shop</p>
          <h1 className="headline-lg max-w-3xl text-white">
            A Vacaville collision shop with national network standards
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70">
            Fix Auto Vacaville is the collision and auto body location at {fullAddress}. The shop
            was formerly known as Peabody Auto Body and now operates under the Fix Auto USA brand.
          </p>
        </div>
      </section>

      <Section tone="paper">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="Locally operated. Network backed."
              lede="Customers come to us after accidents and everyday body damage because they want clear communication, insurance help and a finish that matches the rest of the vehicle."
            />
            <div className="mt-8 space-y-4 text-[1.02rem] leading-relaxed text-slate-600">
              <p>
                As a Fix Auto USA location, repairs are supported by brand standards that include a
                nationwide limited lifetime warranty. Ask for the written warranty terms when you
                drop off your vehicle.
              </p>
              <p>
                Day to day, the experience is personal: estimates you can understand, status updates
                by text and email, and a vehicle returned clean - details that appear again and again
                in Google reviews for this location.
              </p>
              <p>
                We specialize in collision, auto body, paint, paintless dent repair and auto glass.
                We do not perform routine mechanical maintenance such as oil changes.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl" data-reveal>
            <Image
              src="/images/repair-workshop-service-bays.jpg"
              alt="Repair workshop service bays"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Section>

      <Section tone="mist" labelledBy="visit-heading">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <SectionHeading id="visit-heading" eyebrow="Visit" title="Shop details" />
          <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-paper p-6">
              <h2 className="font-extrabold text-navy-900">Address & hours</h2>
              <p className="mt-3 text-slate-600">{fullAddress}</p>
              <p className="mt-2 text-slate-600">{business.hoursSummary}</p>
            </div>
            <div className="rounded-2xl border border-line bg-paper p-6">
              <h2 className="font-extrabold text-navy-900">Contact</h2>
              <p className="mt-3 text-slate-600">
                <a href={business.phoneHref} className="font-bold text-blue-600">
                  {business.phone}
                </a>
              </p>
              <p className="mt-2 text-slate-600">
                <a href={`mailto:${business.email}`} className="hover:underline">
                  {business.email}
                </a>
              </p>
              <Link href="/contact" className="mt-4 inline-block text-sm font-bold text-blue-600">
                Contact & estimate form
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand title="Meet the team over an estimate" />
    </>
  );
}
