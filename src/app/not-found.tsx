import Link from "next/link";
import { business } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="container-x flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="eyebrow mb-4 text-blue-600">404</p>
      <h1 className="headline-lg text-navy-900">Page not found</h1>
      <p className="lede mt-4 max-w-xl">
        That URL does not exist on this site. Head home, browse services, or call the shop for help.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/services" className="btn-ghost-dark">
          View services
        </Link>
        <a href={business.phoneHref} className="btn-ghost-dark">
          Call {business.phone}
        </a>
      </div>
    </div>
  );
}
