/**
 * Single source of truth for verified business information (NAP, hours, links).
 * Sources: fixautousa.com location page, fixauto.com shop page, Google Business Profile listings.
 * Keep this consistent with the Google Business Profile at all times.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://fixautovacaville.com"
).replace(/\/$/, "");

export const business = {
  name: "Fix Auto Vacaville",
  legalName: "Fix Auto Vacaville",
  brand: "Fix Auto USA",
  formerName: "Peabody Auto Body",
  tagline: "Collision repair and auto body shop in Vacaville, California",
  phone: "(707) 898-7313",
  phoneHref: "tel:+17078987313",
  phoneE164: "+17078987313",
  email: "vacaville@fixautousa.com",
  address: {
    street: "70 Peabody Road",
    city: "Vacaville",
    region: "CA",
    regionLong: "California",
    postalCode: "95687",
    country: "US",
  },
  geo: { lat: 38.353679, lng: -121.976497 },
  // Mon-Fri 9am-5pm per Google Business Profile and fixautousa.com. Closed Sat/Sun.
  hours: [
    { day: "Monday", open: "9:00 AM", close: "5:00 PM" },
    { day: "Tuesday", open: "9:00 AM", close: "5:00 PM" },
    { day: "Wednesday", open: "9:00 AM", close: "5:00 PM" },
    { day: "Thursday", open: "9:00 AM", close: "5:00 PM" },
    { day: "Friday", open: "9:00 AM", close: "5:00 PM" },
    { day: "Saturday", open: null, close: null },
    { day: "Sunday", open: null, close: null },
  ] as const,
  hoursSummary: "Mon-Fri 9:00 AM - 5:00 PM · Closed Sat & Sun",
  googleRating: 4.7,
  googleReviewCount: 112,
  googleReviewCountLabel: "112",
  googleMapsUrl: "https://maps.app.goo.gl/aC1UgQa7VZQkJRTPA",
  googleDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=70+Peabody+Road,+Vacaville,+CA+95687",
  googleReviewsUrl: "https://maps.app.goo.gl/aC1UgQa7VZQkJRTPA",
  brandUrl: "https://fixautousa.com/",
  brandLocationUrl:
    "https://fixautousa.com/locations/ca/vacaville/fix-auto-vacaville-24240/",
  mapEmbedUrl:
    "https://www.google.com/maps?q=70+Peabody+Road,+Vacaville,+CA+95687&output=embed",
  social: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/100493015399834",
      network: "facebook" as const,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/fixautousa/",
      network: "instagram" as const,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/c/FixAutoUSA",
      network: "youtube" as const,
    },
  ],
} as const;

export const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.region} ${business.address.postalCode}`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Collision Repair", href: "/services/collision-repair" },
  { label: "Auto Body Repair", href: "/services/auto-body-repair" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
] as const;

export const estimateHref = "/contact#estimate";
