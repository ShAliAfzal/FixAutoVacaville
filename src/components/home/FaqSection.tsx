import { Section, SectionHeading } from "@/components/ui/Section";
import { FaqList } from "@/components/shared/FaqList";

const homeFaqs = [
  {
    q: "How do I get a collision or auto body estimate?",
    a: "Call (707) 898-7313, stop by 70 Peabody Road during business hours, or use the Request an Estimate form on this site. Photos of the damage help us prepare a preliminary estimate; an in-person look confirms the final plan.",
  },
  {
    q: "Do I have to use the body shop my insurance company recommends?",
    a: "No. In California you may choose your repair shop. Tell your insurer you are using Fix Auto Vacaville and we will work with them on the claim.",
  },
  {
    q: "How long does collision repair take?",
    a: "It depends on the damage, parts availability and insurance approval. Minor bumper and panel work is often measured in days; structural repairs or back-ordered parts take longer. We give a realistic target and update you as work progresses.",
  },
  {
    q: "What should I do right after an accident?",
    a: "Confirm everyone is safe, move out of traffic if you can, exchange information, photograph the scene and damage, and notify your insurer. Then call us - we can advise whether the vehicle is safe to drive and help start the claim.",
  },
  {
    q: "Do you offer oil changes or general mechanical repair?",
    a: "No. Fix Auto Vacaville specializes in collision, auto body, paint, dent and auto glass repair, including the diagnostics that go with accident damage. For routine maintenance we recommend a trusted mechanical shop.",
  },
  {
    q: "What are your hours and where are you located?",
    a: "We are at 70 Peabody Road, Vacaville, CA 95687. Hours are Monday-Friday, 9:00 AM - 5:00 PM. Closed Saturday and Sunday.",
  },
];

export function FaqSection() {
  return (
    <Section tone="mist" labelledBy="faq-heading">
      <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <SectionHeading
          id="faq-heading"
          eyebrow="FAQ"
          title="Answers before you pick up the phone"
          lede="Straight answers to the questions Vacaville drivers ask most after an accident or body damage."
        />
        <div data-reveal>
          <FaqList faqs={homeFaqs} />
        </div>
      </div>
    </Section>
  );
}
