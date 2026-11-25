import { MapPin, MessageSquareText, BadgeCheck, Clock } from "lucide-react";
import { business } from "@/lib/site";
import { StarRating } from "@/components/shared/StarRating";

export function TrustBar() {
  return (
    <section aria-label="Trust signals" className="border-b border-line bg-paper">
      <div className="container-x">
        <ul className="grid divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
          <li className="flex items-start gap-3 px-1 py-6 sm:px-5 lg:py-8">
            <span className="mt-0.5">
              <StarRating rating={business.googleRating} size={16} />
            </span>
            <div>
              <p className="font-bold text-navy-900">{business.googleRating} Google rating</p>
              <p className="mt-1 text-sm text-slate-600">
                {business.googleReviewCountLabel} verified customer reviews
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3 px-1 py-6 sm:px-5 lg:py-8">
            <MessageSquareText className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
            <div>
              <p className="font-bold text-navy-900">Updates by text</p>
              <p className="mt-1 text-sm text-slate-600">Repair status sent to your phone</p>
            </div>
          </li>
          <li className="flex items-start gap-3 px-1 py-6 sm:px-5 lg:py-8">
            <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
            <div>
              <p className="font-bold text-navy-900">Insurance handled</p>
              <p className="mt-1 text-sm text-slate-600">We coordinate claims & approvals</p>
            </div>
          </li>
          <li className="flex items-start gap-3 px-1 py-6 sm:px-5 lg:py-8">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
            <div>
              <p className="font-bold text-navy-900">{business.hoursSummary.split(" · ")[0]}</p>
              <p className="mt-1 text-sm text-slate-600">Closed weekends · Walk-ins welcome</p>
            </div>
          </li>
          <li className="flex items-start gap-3 px-1 py-6 sm:px-5 lg:py-8">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
            <div>
              <p className="font-bold text-navy-900">70 Peabody Road</p>
              <p className="mt-1 text-sm text-slate-600">Vacaville, CA 95687</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
