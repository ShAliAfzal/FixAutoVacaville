import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBand } from "@/components/shared/CtaBand";
import { StarRating } from "@/components/shared/StarRating";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import { TrackedA } from "@/components/ui/TrackedLink";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";
import { business } from "@/lib/site";
import { reviews } from "@/lib/reviews";

export const metadata = buildMetadata({
  title: "Customer Reviews | Fix Auto Vacaville Google Feedback",
  description:
    `Read authentic Google review excerpts for Fix Auto Vacaville (${business.googleRating}★ from ${business.googleReviewCountLabel} reviews). Collision and auto body customers in Vacaville.`,
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          path: "/reviews",
          title: "Customer Reviews",
          description: "Google review excerpts for Fix Auto Vacaville.",
        })}
      />

      <section className="border-b border-line bg-navy-950 text-white">
        <div className="container-x py-16 sm:py-20">
          <Breadcrumbs
            dark
            items={[
              { name: "Home", path: "/" },
              { name: "Reviews", path: "/reviews" },
            ]}
          />
          <p className="eyebrow mb-4 text-blue-400">Reviews</p>
          <h1 className="headline-lg max-w-3xl text-white">
            Google reviews from Vacaville customers
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70">
            These excerpts appear on the shop&apos;s public Fix Auto USA listing, which syndicates
            Google Business Profile reviews. Nothing here is invented or rewritten for marketing
            spin.
          </p>
          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-5 py-4">
            <StarRating rating={business.googleRating} size={22} />
            <div>
              <p className="text-2xl font-extrabold">{business.googleRating}</p>
              <p className="text-sm text-white/65">
                {business.googleReviewCountLabel} Google reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section tone="paper">
        <div className="container-x">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Customer feedback"
              title="What people highlight most"
              lede="Communication, insurance help, finishing early and returning cars clean come up repeatedly."
            />
            <TrackedA
              href={business.googleReviewsUrl}
              event="reviews_link_click"
              payload={{ location: "reviews_page" }}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-dark shrink-0 self-start"
            >
              Open Google reviews
            </TrackedA>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {reviews.map((r, i) => (
              <blockquote
                key={`${r.name}-${i}`}
                className="rounded-2xl border border-line bg-mist/60 p-6 sm:p-7"
                data-reveal
              >
                <StarRating rating={5} size={14} />
                <p className="mt-4 text-[1.02rem] leading-relaxed text-charcoal">“{r.quote}”</p>
                <footer className="mt-6 border-t border-line pt-4">
                  <cite className="not-italic font-bold text-navy-900">{r.name}</cite>
                  <p className="mt-1 text-sm text-slate-400">
                    {r.context ? `${r.context} · ` : ""}
                    Google review · {r.when}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand title="Ready to have the same experience?" />
    </>
  );
}
