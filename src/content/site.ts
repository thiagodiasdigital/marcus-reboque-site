export type SiteConfig = {
  name: string;
  legalName: string | null;
  url: string;
  canonicalUrl: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  contact: {
    phoneRaw: string;
    phoneFormatted: string;
    phoneHref: string;
  };
  whatsapp: {
    number: string;
    url: string;
    defaultMessage: string;
  };
  location: {
    city: string;
    state: string;
    country: "BR";
    serviceAreaLabel: string;
    address: null;
    coordinates: null;
  };
  service: {
    hoursLabel: string;
    openingHours: string;
  };
  socials: {
    instagram: null;
    facebook: null;
    youtube: null;
    linkedin: null;
    googleBusinessProfile: null;
  };
  siteUrlEnv: "NEXT_PUBLIC_SITE_URL";
  indexableEnv: "NEXT_PUBLIC_INDEXABLE";
  analyticsEnv: "NEXT_PUBLIC_GA_ID";
};

export const siteConfig = {
  name: "Marcus Reboque",
  legalName: null,
  url: "https://marcusreboque.com.br",
  canonicalUrl: "https://marcusreboque.com.br/",
  description:
    "Guincho, reboque e auto socorro 24h em Fortaleza para motos, carros, vans, caminhonetes, barcos, máquinas e pequenas cargas.",
  seoTitle:
    "Guincho 24h em Fortaleza | Reboque e Auto Socorro | Marcus Reboque",
  seoDescription:
    "Guincho, reboque e auto socorro 24h em Fortaleza para motos, carros, vans, caminhonetes, barcos, máquinas e pequenas cargas. Atendimento pelo WhatsApp.",
  contact: {
    phoneRaw: "+55 85 98600-7392",
    phoneFormatted: "(85) 98600-7392",
    phoneHref: "tel:+5585986007392",
  },
  whatsapp: {
    number: "5585986007392",
    url: "https://wa.me/5585986007392",
    defaultMessage:
      "Olá, preciso de atendimento da Marcus Reboque em Fortaleza.",
  },
  location: {
    city: "Fortaleza",
    state: "CE",
    country: "BR",
    serviceAreaLabel: "Fortaleza e Região Metropolitana",
    address: null,
    coordinates: null,
  },
  service: {
    hoursLabel: "Atendimento 24 horas",
    openingHours: "Mo-Su 00:00-23:59",
  },
  socials: {
    instagram: null,
    facebook: null,
    youtube: null,
    linkedin: null,
    googleBusinessProfile: null,
  },
  siteUrlEnv: "NEXT_PUBLIC_SITE_URL",
  indexableEnv: "NEXT_PUBLIC_INDEXABLE",
  analyticsEnv: "NEXT_PUBLIC_GA_ID",
} as const satisfies SiteConfig;
