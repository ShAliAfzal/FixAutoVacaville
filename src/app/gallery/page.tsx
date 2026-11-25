import Image from "next/image";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBand } from "@/components/shared/CtaBand";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Shop Gallery | Fix Auto Vacaville Workshop & Finish",
  description:
    "Browse workshop, refinish and automotive imagery representing the collision and auto body environment at Fix Auto Vacaville.",
  path: "/gallery",
});

const images = [
  {
    src: "/images/workshop-interior-lit-bay.jpg",
    alt: "Lit interior of an automotive repair bay",
    caption: "Repair bay lighting",
  },
  {
    src: "/images/body-shop-vehicle-in-primer.jpg",
    alt: "Vehicle in primer during body shop repair",
    caption: "Bodywork in primer",
  },
  {
    src: "/images/technician-working-on-vehicle-panel.jpg",
    alt: "Technician repairing a vehicle body panel",
    caption: "Panel repair",
  },
  {
    src: "/images/blue-sedan-gloss-paint-finish.jpg",
    alt: "Blue sedan with gloss paint finish",
    caption: "Refinished paint",
  },
  {
    src: "/images/red-vehicle-paint-detail.jpg",
    alt: "Detail of red vehicle paint",
    caption: "Paint detail",
  },
  {
    src: "/images/technician-using-precision-tool.jpg",
    alt: "Technician using a precision tool",
    caption: "Precision work",
  },
  {
    src: "/images/vehicle-wash-and-detail-after-repair.jpg",
    alt: "Vehicle being washed after repair",
    caption: "Delivery detail",
  },
  {
    src: "/images/friendly-technician-with-customer-car.jpg",
    alt: "Technician with a customer vehicle",
    caption: "Customer handoff",
  },
  {
    src: "/images/dark-muscle-car-cinematic.jpg",
    alt: "Cinematic photo of a dark performance car",
    caption: "Finished presence",
  },
  {
    src: "/images/grey-sedan-front-three-quarter.jpg",
    alt: "Grey sedan front three-quarter view",
    caption: "Straight panels",
  },
  {
    src: "/images/repair-workshop-service-bays.jpg",
    alt: "Multiple service bays in a repair workshop",
    caption: "Shop floor",
  },
  {
    src: "/images/blue-coupe-flawless-bodywork.jpg",
    alt: "Blue coupe with smooth bodywork",
    caption: "Body lines",
  },
];

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          path: "/gallery",
          title: "Shop Gallery",
          description: "Workshop and automotive imagery for Fix Auto Vacaville.",
        })}
      />

      <section className="border-b border-line bg-navy-950 text-white">
        <div className="container-x py-16 sm:py-20">
          <Breadcrumbs
            dark
            items={[
              { name: "Home", path: "/" },
              { name: "Gallery", path: "/gallery" },
            ]}
          />
          <p className="eyebrow mb-4 text-blue-400">Gallery</p>
          <h1 className="headline-lg max-w-3xl text-white">Workshop, craft and finish</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70">
            Industry and shop-atmosphere photography used to communicate the repair environment.
            Images are not labeled as specific customer before-and-after jobs unless verified.
          </p>
        </div>
      </section>

      <Section tone="paper">
        <div className="container-x">
          <SectionHeading
            eyebrow="Visual archive"
            title="A closer look at the work environment"
          />
          <ul className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {images.map((img, i) => (
              <li
                key={img.src}
                className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-line bg-mist"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 6) * 40}ms` }}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="px-4 py-3 text-sm font-semibold text-navy-900">{img.caption}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
