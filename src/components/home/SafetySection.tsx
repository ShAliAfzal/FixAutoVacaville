import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";

const points = [
  {
    title: "Damage you cannot see still matters",
    body: "Bumper covers can spring back while absorbers, reinforcements and sensor brackets behind them are crushed or misaligned.",
  },
  {
    title: "Structure before cosmetics",
    body: "Panels should only be refinished after the structure is measured and returned to manufacturer specifications.",
  },
  {
    title: "Paint is a system, not a cover-up",
    body: "Proper prep, color match and clear coat protect the metal and keep the repair invisible over time.",
  },
  {
    title: "Safety systems ride in the bodywork",
    body: "Cameras, radar and airbags depend on correct mounts and clearances. Collision repair is vehicle safety work.",
  },
];

export function SafetySection() {
  return (
    <Section tone="mist" labelledBy="safety-heading">
      <div className="container-x grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            id="safety-heading"
            eyebrow="Repair quality & safety"
            title="A finished car should be safe - not just shiny"
            lede="Professional collision repair is about restoring how the vehicle protects you, not only how it looks in the parking lot."
          />
          <ul className="mt-10 space-y-5">
            {points.map((p, i) => (
              <li key={p.title} className="flex gap-4" data-reveal style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}>
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
                <div>
                  <h3 className="font-extrabold text-navy-900">{p.title}</h3>
                  <p className="mt-1 text-[0.95rem] leading-relaxed text-slate-600">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link
            href="/services/post-collision-diagnostics"
            className="btn-ghost-dark mt-8"
          >
            Learn about post-collision inspection
          </Link>
        </div>

        <div className="relative grid gap-4 sm:grid-cols-2" data-reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:mt-10">
            <Image
              src="/images/technician-working-on-vehicle-panel.jpg"
              alt="Technician performing careful panel repair work"
              fill
              sizes="(max-width: 640px) 100vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/technician-inspecting-engine-bay.jpg"
              alt="Technician inspecting a vehicle after impact"
              fill
              sizes="(max-width: 640px) 100vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
