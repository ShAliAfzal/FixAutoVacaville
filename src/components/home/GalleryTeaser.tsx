import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

const shots = [
  {
    src: "/images/workshop-interior-lit-bay.jpg",
    alt: "Lit repair bay inside an auto body workshop",
    className: "sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-auto",
  },
  {
    src: "/images/technician-hands-with-tools.jpg",
    alt: "Technician hands working with automotive tools",
    className: "aspect-[4/3]",
  },
  {
    src: "/images/red-vehicle-paint-detail.jpg",
    alt: "Close detail of a red vehicle paint finish",
    className: "aspect-[4/3]",
  },
  {
    src: "/images/vehicle-wash-and-detail-after-repair.jpg",
    alt: "Vehicle being cleaned after repair work",
    className: "aspect-[4/3] sm:col-span-2",
  },
];

export function GalleryTeaser() {
  return (
    <Section tone="paper" labelledBy="gallery-heading">
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="gallery-heading"
            eyebrow="Inside the shop"
            title="Workshop atmosphere, craft and finish"
            lede="A look at the environments and finishes that define professional collision and body repair."
          />
          <Link href="/gallery" className="btn-ghost-dark shrink-0 self-start">
            Open gallery
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-4 sm:grid-rows-2 sm:gap-4 sm:min-h-[520px]">
          {shots.map((shot, i) => (
            <div
              key={shot.src}
              className={`relative overflow-hidden rounded-2xl bg-navy-900 ${shot.className}`}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
