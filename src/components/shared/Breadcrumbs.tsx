import Link from "next/link";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export function Breadcrumbs({
  items,
  dark = false,
}: {
  items: { name: string; path: string }[];
  dark?: boolean;
}) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(items)} />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol
          className={`flex flex-wrap items-center gap-2 text-sm ${
            dark ? "text-white/60" : "text-slate-600"
          }`}
        >
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li key={item.path} className="inline-flex items-center gap-2">
                {i > 0 && (
                  <span aria-hidden="true" className={dark ? "text-white/35" : "text-slate-400"}>
                    /
                  </span>
                )}
                {last ? (
                  <span
                    aria-current="page"
                    className={`font-semibold ${dark ? "text-white" : "text-navy-900"}`}
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className={dark ? "hover:text-white" : "hover:text-blue-600"}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
