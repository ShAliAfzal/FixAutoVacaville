/**
 * Authentic Google review excerpts for Fix Auto Vacaville, as displayed publicly on
 * fixautousa.com and fixauto.com (which syndicate the Google Business Profile reviews).
 * Reviewer names are shortened to first name + initial. Nothing here is invented.
 *
 * For a live, always-current feed, connect the Google Places API (see README).
 * Review text is NOT marked up as structured data: Google treats self-serving
 * review markup on LocalBusiness pages as ineligible for rich results.
 */
export type Review = {
  name: string;
  quote: string;
  context?: string;
  when: string;
};

export const reviews: Review[] = [
  {
    name: "Shall N.",
    quote:
      "From start to finish, the team was professional, honest, and kept me informed throughout the entire process. The quality of the work was outstanding. My car looks as good as new, and the attention to detail was exceptional.",
    context: "Mercedes-Benz body repair",
    when: "2026",
  },
  {
    name: "Tomas M.",
    quote:
      "They handled all the communication with my insurance company and ensured that only high-quality parts were used. They were honest from day one and actually finished a few days early.",
    context: "Insurance collision repair",
    when: "2026",
  },
  {
    name: "Charlie L.",
    quote:
      "I am very picky about my vehicle, and I was genuinely impressed by the attention to detail. Not only was the exterior bodywork flawless, but they also returned my car exceptionally clean. They turned a frustrating situation into a positive one.",
    context: "Collision repair",
    when: "2026",
  },
  {
    name: "Lori A.",
    quote:
      "Great communication throughout the entire process. My vehicle was repaired in a timely manner, actually earlier than promised. The work looks amazing, and my car was returned clean inside and out.",
    when: "2026",
  },
  {
    name: "Ashley G.",
    quote:
      "I experienced nothing but professionalism from all of the staff I interacted with. Although I had external bodywork done, they carefully vacuumed the interior, which felt like a step above and beyond. My car was in good hands.",
    context: "Insurance bodywork",
    when: "2026",
  },
  {
    name: "Wanda M.",
    quote:
      "My first time here and they did not disappoint! Excellent service, great repair, and very hard-working and competent guys. They went above and beyond. I already recommended them to several people.",
    when: "2026",
  },
  {
    name: "James G.",
    quote: "Professional shop, caring staff, clear communication.",
    when: "2026",
  },
  {
    name: "Bilal C.",
    quote: "Great experience at Fix Auto. The team does great work and great prices. Highly recommend.",
    when: "2026",
  },
];
