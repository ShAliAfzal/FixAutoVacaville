import type { Metadata } from "next";
import { SITE_URL, business, fullAddress } from "./site";
import type { Service } from "./services";

const ORG_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_URL = `${SITE_URL}/brand/fixauto-logo-navy.png`;

export function buildMetadata(input: {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${input.path === "/" ? "" : input.path}`;
  const image = input.image ?? `${SITE_URL}/opengraph-image`;
  return {
    title: { absolute: input.title },
    description: input.description,
    alternates: { canonical: url },
    robots: input.noIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: "website",
      url,
      siteName: business.name,
      title: input.title,
      description: input.description,
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: `${business.name} - ${business.tagline}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [image],
    },
  };
}

/** Organization / LocalBusiness entity used site-wide (rendered once in the root layout). */
export function localBusinessJsonLd() {
  const openDays = business.hours.filter((h) => h.open).map((h) => h.day);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["AutoBodyShop", "AutoRepair", "LocalBusiness"],
        "@id": ORG_ID,
        name: business.name,
        alternateName: business.formerName,
        url: SITE_URL,
        logo: LOGO_URL,
        image: `${SITE_URL}/images/body-shop-vehicle-in-primer.jpg`,
        telephone: business.phoneE164,
        email: business.email,
        description:
          "Collision repair and auto body shop in Vacaville, CA offering collision repair, auto body repair, paintless dent repair, paint and scratch repair, windshield repair and post-collision inspection.",
        address: {
          "@type": "PostalAddress",
          streetAddress: business.address.street,
          addressLocality: business.address.city,
          addressRegion: business.address.region,
          postalCode: business.address.postalCode,
          addressCountry: business.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: business.geo.lat,
          longitude: business.geo.lng,
        },
        hasMap: business.googleMapsUrl,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: openDays,
            opens: "09:00",
            closes: "17:00",
          },
        ],
        areaServed: {
          "@type": "City",
          name: "Vacaville",
          containedInPlace: { "@type": "State", name: "California" },
        },
        parentOrganization: {
          "@type": "Organization",
          name: business.brand,
          url: business.brandUrl,
        },
        sameAs: [
          business.googleMapsUrl,
          business.brandLocationUrl,
          ...business.social.map((s) => s.href),
        ],
        priceRange: "$$",
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: business.name,
        publisher: { "@id": ORG_ID },
        inLanguage: "en-US",
      },
    ],
  };
}

export function webPageJsonLd(input: { path: string; title: string; description: string; type?: string }) {
  const url = `${SITE_URL}${input.path === "/" ? "" : input.path}`;
  return {
    "@context": "https://schema.org",
    "@type": input.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: input.title,
    description: input.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function serviceJsonLd(service: Service) {
  const url = `${SITE_URL}/services/${service.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.name,
    serviceType: service.schemaServiceType,
    description: service.description,
    url,
    image: `${SITE_URL}${service.heroImage.src}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "City", name: "Vacaville" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE_URL}/contact`,
      servicePhone: { "@type": "ContactPoint", telephone: business.phoneE164, contactType: "customer service" },
    },
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export const addressLine = fullAddress;
