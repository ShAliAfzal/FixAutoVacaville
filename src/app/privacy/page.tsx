import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";
import { business, fullAddress } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for the Fix Auto Vacaville website, covering estimate form submissions and contact information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          path: "/privacy",
          title: "Privacy Policy",
          description: "Privacy policy for Fix Auto Vacaville.",
        })}
      />

      <section className="border-b border-line bg-mist">
        <div className="container-x py-14 sm:py-16">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Privacy Policy", path: "/privacy" },
            ]}
          />
          <h1 className="headline-lg text-navy-900">Privacy Policy</h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Last updated: November 25, 2026. This policy explains how {business.name} handles
            information collected through this website.
          </p>
        </div>
      </section>

      <Section tone="paper">
        <div className="container-x prose-like max-w-3xl space-y-8 text-[1.02rem] leading-relaxed text-slate-600">
          <div>
            <h2 className="text-xl font-extrabold text-navy-900">Who we are</h2>
            <p className="mt-3">
              {business.name} is located at {fullAddress}. Contact:{" "}
              <a href={business.phoneHref} className="font-semibold text-blue-600">
                {business.phone}
              </a>
              ,{" "}
              <a href={`mailto:${business.email}`} className="font-semibold text-blue-600">
                {business.email}
              </a>
              .
            </p>
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-navy-900">Information we collect</h2>
            <p className="mt-3">
              When you submit an estimate or contact request, we collect the details you provide -
              typically name, phone number, email, vehicle information and a description of the
              damage or service needed.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-navy-900">How we use information</h2>
            <p className="mt-3">
              We use submitted information to respond to estimate requests, schedule appointments,
              coordinate repairs and insurance claims, and improve our customer experience. We do
              not sell personal information.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-navy-900">Analytics</h2>
            <p className="mt-3">
              If analytics or tag management tools are connected to this site, they may collect
              anonymized or pseudonymized usage data such as pages viewed and button clicks
              (including phone and estimate CTAs). Configure those tools according to your privacy
              obligations before enabling them in production.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-navy-900">Contact</h2>
            <p className="mt-3">
              Questions about this policy or your information can be directed to {business.email} or{" "}
              {business.phone}.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
