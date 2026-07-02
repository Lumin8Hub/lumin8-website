import { SITE_URL } from "@/lib/constants";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lumin8",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  email: "hello@lumin8.agency",
  sameAs: [
    "https://linkedin.com/company/lumin8-digital-agency",
    "https://instagram.com/lumin8.agency",
    "https://facebook.com/lumin8digitalagency",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Lumin8",
  url: SITE_URL,
  email: "hello@lumin8.agency",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: ["Toronto", "Montreal", "New York"],
};

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: {
      "@type": "Organization",
      name: "Lumin8",
      url: SITE_URL,
    },
    areaServed: ["Toronto", "Montreal", "New York"],
  };
}

export function articleSchema({
  title,
  description,
  path,
  author,
  datePublished,
}: {
  title: string;
  description: string;
  path: string;
  author: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${path}`,
    datePublished,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Lumin8",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.png`,
      },
    },
  };
}
