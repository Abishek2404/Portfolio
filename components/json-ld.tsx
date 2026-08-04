import { SITE, SOCIAL_LINKS } from "@/lib/constants";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    url: SITE.url,
    jobTitle: SITE.role,
    description: SITE.description,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.location,
    },
    sameAs: SOCIAL_LINKS.map((s) => s.href),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
