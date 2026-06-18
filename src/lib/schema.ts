import { faqItems } from "@/content/home";
import { siteImages } from "@/content/images";
import { siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/site-url";

export function buildHomeJsonLd(): Record<string, unknown> {
  const homeUrl = absoluteUrl("/");
  const logoUrl = absoluteUrl(siteImages.logo.src);
  const heroUrl = absoluteUrl(siteImages.homepageHeroDesktop.src);
  const socialProfiles = Object.values(siteConfig.socials) as Array<string | null>;
  const sameAs = socialProfiles.filter(
    (profile): profile is string => typeof profile === "string" && profile.length > 0,
  );

  const organization: Record<string, unknown> = {
    "@type": "Organization",
    "@id": `${homeUrl}#organization`,
    name: siteConfig.name,
    url: homeUrl,
    logo: logoUrl,
    telephone: siteConfig.contact.phoneRaw,
  };

  if (sameAs.length > 0) {
    organization.sameAs = sameAs;
  }

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
        openingHours: siteConfig.service.openingHours,
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
