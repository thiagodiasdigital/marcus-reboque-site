import { siteImages } from "@/content/images";
import { siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/site-url";

export function buildHomeJsonLd(): Record<string, unknown> {
  const homeUrl = absoluteUrl("/");
  const logoUrl = absoluteUrl(siteImages.logo.src);
  const heroUrl = absoluteUrl(siteImages.homepageHero.src);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${homeUrl}#organization`,
        name: siteConfig.name,
        url: homeUrl,
        logo: logoUrl,
        telephone: siteConfig.contact.phoneRaw,
      },
      {
        "@type": "TowingService",
        "@id": `${homeUrl}#localbusiness`,
        name: siteConfig.name,
        url: homeUrl,
        image: heroUrl,
        telephone: siteConfig.contact.phoneRaw,
        openingHours: siteConfig.service.openingHours,
        areaServed: {
          "@type": "City",
          name: siteConfig.location.city,
          address: {
            "@type": "PostalAddress",
            addressRegion: siteConfig.location.state,
            addressCountry: siteConfig.location.country,
          },
        },
      },
      {
        "@type": "WebSite",
        "@id": `${homeUrl}#website`,
        name: siteConfig.name,
        url: homeUrl,
        inLanguage: "pt-BR",
        publisher: {
          "@id": `${homeUrl}#organization`,
        },
      },
    ],
  };
}
