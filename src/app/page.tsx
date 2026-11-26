import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChoose } from "@/components/home/WhyChoose";
import { ProcessJourney } from "@/components/home/ProcessJourney";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { SafetySection } from "@/components/home/SafetySection";
import { GalleryTeaser } from "@/components/home/GalleryTeaser";
import { FaqSection } from "@/components/home/FaqSection";
import { LocationSection } from "@/components/home/LocationSection";
import { FinalCta } from "@/components/home/FinalCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Collision & Auto Body Repair in Vacaville, CA | Fix Auto Vacaville",
  description:
    "Expert collision and auto body repair in Vacaville, CA. Fix Auto Vacaville at 70 Peabody Road - free photo estimates, insurance help, paint, dent and glass. 4.7 Google rating. Call (707) 898-7313.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          path: "/",
          title: "Collision & Auto Body Repair in Vacaville, CA",
          description:
            "Collision repair and auto body shop in Vacaville, California offering estimates, insurance coordination and factory-quality refinish work.",
        })}
      />
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <WhyChoose />
      <ProcessJourney />
      <BeforeAfter />
      <ReviewsSection />
      <SafetySection />
      <GalleryTeaser />
      <FaqSection />
      <LocationSection />
      <FinalCta />
    </>
  );
}
