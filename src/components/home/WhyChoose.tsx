import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";

const reasons = [
  {
    title: "Insurance coordination without the chase",
    body: "We work directly with your insurer on the estimate, supplements and approvals so you are not stuck in the middle of the claim.",
  },
  {
    title: "Status updates by text and email",
    body: "Customers repeatedly mention communication. You know when parts arrive, when paint is done and when the vehicle is ready.",
  },
  {
    title: "Returned clean - not just repaired",
    body: "Vehicles go back washed and vacuumed. It is a small detail that shows how the shop treats the handoff.",
  },
  {
    title: "Nationwide limited lifetime warranty",
    body: "Repairs are backed by the Fix Auto USA warranty program. Ask for the written terms when you drop off.",
  },
];

export function WhyChoose() {
  return (
    <Section tone="paper" labelledBy="why-heading">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative" data-reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[5/6]">
            <Image
              src="/images/friendly-technician-with-customer-car.jpg"
              alt="Technician speaking with a customer next to a vehicle"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 max-w-[240px] rounded-xl border border-line bg-paper p-5 shadow-lift sm:right-6">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-600">Local shop</p>
            <p className="mt-2 text-lg font-extrabold leading-snug text-navy-900">
              Formerly Peabody Auto Body - same Vacaville location, Fix Auto network backing.
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            id="why-heading"
            eyebrow="Why this shop"
            title="A repair process built to lower stress after an accident"
            lede="When something hits your car, you want honesty, a realistic timeline and a finish that disappears. That is the standard reviews describe at Fix Auto Vacaville."
          />
          <ul className="mt-10 space-y-6">
            {reasons.map((r, i) => (
              <li
                key={r.title}
                className="border-t border-line pt-6"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              >
                <h3 className="text-lg font-extrabold text-navy-900">{r.title}</h3>
                <p className="mt-2 text-[0.98rem] leading-relaxed text-slate-600">{r.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
