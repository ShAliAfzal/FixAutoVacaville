import { Section, SectionHeading } from "@/components/ui/Section";

const steps = [
  {
    n: "01",
    title: "Estimate",
    detail:
      "Send photos online or stop by 70 Peabody Road. You get a clear written estimate before anything starts.",
  },
  {
    n: "02",
    title: "Claim & approval",
    detail:
      "We coordinate with your insurance company on the repair plan, supplements and approvals.",
  },
  {
    n: "03",
    title: "Repair",
    detail:
      "Structural work, body repair, paint and glass - completed with status updates by text and email.",
  },
  {
    n: "04",
    title: "Quality check",
    detail:
      "Fit, finish and systems are inspected so the vehicle is safe and the repair is invisible.",
  },
  {
    n: "05",
    title: "Delivery",
    detail:
      "Your vehicle is cleaned and ready for pickup. Ask about warranty paperwork at handoff.",
  },
];

export function ProcessJourney() {
  return (
    <Section tone="navy" labelledBy="process-heading" className="overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
      <div className="container-x relative">
        <SectionHeading
          id="process-heading"
          dark
          eyebrow="Collision repair journey"
          title="What happens after you call"
          lede="Knowing the process removes the uncertainty. Here is how a typical repair moves from first contact to keys in hand."
        />

        <ol className="mt-14 grid gap-0 md:grid-cols-5">
          {steps.map((step, i) => (
            <li
              key={step.n}
              className="relative border-t border-white/15 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-5 md:first:border-l-0 md:first:pl-0"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
            >
              <span className="font-mono text-sm font-bold tracking-wider text-blue-400">
                {step.n}
              </span>
              <h3 className="mt-3 text-xl font-extrabold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
