import type { Faq } from "@/lib/services";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqJsonLd } from "@/lib/seo";

export function FaqList({
  faqs,
  withSchema = true,
  dark = false,
}: {
  faqs: Faq[];
  withSchema?: boolean;
  dark?: boolean;
}) {
  return (
    <>
      {withSchema && <JsonLd data={faqJsonLd(faqs)} />}
      <div className="divide-y divide-line/80">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
              <span
                className={`text-base font-bold sm:text-lg ${dark ? "text-white" : "text-navy-900"}`}
              >
                {f.q}
              </span>
              <span
                className={`faq-icon mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-lg leading-none ${
                  dark
                    ? "border-white/25 text-white"
                    : "border-navy-900/15 text-navy-900"
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p
              className={`mt-3 max-w-3xl text-[0.98rem] leading-relaxed ${
                dark ? "text-white/70" : "text-slate-600"
              }`}
            >
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </>
  );
}
