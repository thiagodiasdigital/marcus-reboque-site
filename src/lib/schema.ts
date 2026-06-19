import type { HomeService } from "@/content/home";
import { faqItems, services } from "@/content/home";
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

export function buildServicesHubJsonLd(): Record<string, unknown> {
  const servicesUrl = absoluteUrl("/servicos");
  const homeUrl = absoluteUrl("/");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${servicesUrl}#page`,
        name: "Hub de serviços | Marcus Reboque",
        url: servicesUrl,
        description:
          "Catálogo central de guincho, reboque e transporte da Marcus Reboque em Fortaleza.",
        inLanguage: "pt-BR",
        isPartOf: {
          "@id": `${homeUrl}#website`,
        },
        mainEntity: {
          "@id": `${servicesUrl}#service-item-list`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${servicesUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Serviços",
            item: servicesUrl,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${servicesUrl}#service-item-list`,
        name: "Serviços da Marcus Reboque",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          url: `${servicesUrl}#${service.futureSlug.replace("/servicos/", "")}`,
        })),
      },
    ],
  };
}

export function buildServicePageJsonLd(
  service: HomeService,
  pathname: string,
): Record<string, unknown> {
  const pageUrl = absoluteUrl(pathname);
  const homeUrl = absoluteUrl("/");
  const image = service.imageKey ? siteImages[service.imageKey] : siteImages.homepageHeroDesktop;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Serviços",
            item: absoluteUrl("/servicos"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: service.title,
        description: service.description,
        serviceType: service.title,
        url: pageUrl,
        image: absoluteUrl(image.src),
        provider: {
          "@id": `${homeUrl}#organization`,
        },
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
            name: siteConfig.location.serviceAreaLabel,
          },
        ],
      },
    ],
  };
}
