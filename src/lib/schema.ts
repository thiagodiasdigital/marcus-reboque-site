import { faqItems } from "@/content/home";
import { siteImages } from "@/content/images";
import { officialSocialProfiles, siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/site-url";

export function buildHomeJsonLd(): Record<string, unknown> {
  const homeUrl = absoluteUrl("/");
  const logoUrl = absoluteUrl(siteImages.logo.src);
  const heroUrl = absoluteUrl(siteImages.homepageHeroDesktop.src);
  const sameAs = officialSocialProfiles.map((profile) => profile.url);

  const organization: Record<string, unknown> = {
    "@type": "Organization",
    "@id": `${homeUrl}#organization`,
    name: siteConfig.name,
    url: homeUrl,
    logo: logoUrl,
    telephone: siteConfig.contact.phoneRaw,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.address.locality,
      addressRegion: siteConfig.location.address.region,
      addressCountry: siteConfig.location.country,
    },
  };

  organization.sameAs = sameAs;

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "TowingService",
        "@id": `${homeUrl}#localbusiness`,
        name: siteConfig.name,
        url: homeUrl,
        image: heroUrl,
        telephone: siteConfig.contact.phoneRaw,
        hasMap: siteConfig.socials.googleBusinessProfile,
        openingHours: siteConfig.service.openingHours,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.address.locality,
          addressRegion: siteConfig.location.address.region,
          addressCountry: siteConfig.location.country,
        },
        serviceType: [
          "Guincho 24h",
          "Reboque",
          "Auto socorro",
          "Transporte de veículos",
        ],
        areaServed: [
          {
            "@type": "City",
            name: siteConfig.location.city,
            address: {
              "@type": "PostalAddress",
              addressRegion: siteConfig.location.state,
              addressCountry: siteConfig.location.country,
            },
          },
          {
            "@type": "AdministrativeArea",
            name: "Região Metropolitana de Fortaleza",
          },
        ],
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
      {
        "@type": "FAQPage",
        "@id": `${homeUrl}#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
