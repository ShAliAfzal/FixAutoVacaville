import { Section, SectionHeading } from "@/components/ui/Section";
import { StarRating } from "@/components/shared/StarRating";
import { TrackedA } from "@/components/ui/TrackedLink";
import { business } from "@/lib/site";
import { reviews } from "@/lib/reviews";

export function ReviewsSection({ limit = 6 }: { limit?: number }) {
  const list = reviews.slice(0, limit);

  return (
    <Section tone="paper" labelledBy="reviews-heading">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="reviews-heading"
            eyebrow="Google reviews"
            title="What Vacaville drivers say after the repair"
            lede="Excerpts from publicly shared Google reviews for Fix Auto Vacaville. Ratings and wording are not altered."
          />
          <TrackedA
            href={business.googleReviewsUrl}
            event="reviews_link_click"
            payload={{ location: "home_reviews" }}
            target="_blank"
            rel="noopener noreferrer"
            className="block shrink-0 rounded-2xl border-2 border-navy-900/10 bg-navy-900 px-6 py-5 text-white shadow-soft transition hover:border-blue-400/40 hover:bg-navy-800"
            data-reveal
          >
            <div className="flex items-center gap-3">
              <StarRating rating={business.googleRating} size={22} className="text-[#f5c518]" />
              <div>
                <p className="text-2xl font-extrabold tabular-nums text-white">
                  {business.googleRating}
                  <span className="ml-1 text-base font-bold text-white/70">/ 5</span>
                </p>
                <p className="text-sm text-white/70">
                  {business.googleReviewCountLabel} Google reviews
                </p>
              </div>
            </div>
            <span className="mt-4 inline-flex text-sm font-bold text-blue-400">
              View Google Business Profile
            </span>
          </TrackedA>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {list.map((r, i) => (
            <blockquote
              key={`${r.name}-${r.when}-${i}`}
              className="flex h-full flex-col justify-between rounded-2xl border border-line bg-paper p-6 shadow-soft"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 70}ms` }}
            >
              <div>
                <StarRating rating={5} size={14} className="text-[#e6b800]" />
                <p className="mt-4 text-[0.98rem] leading-relaxed text-charcoal">
                  “{r.quote}”
                </p>
              </div>
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
  );
}
