export type SiteConfig = {
  name: string;
  legalName: string | null;
  description: string;
  contact: {
    phoneRaw: string;
    phoneFormatted: string;
    phoneHref: string;
  };
  whatsapp: {
    number: string;
    url: string;
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
    googleBusinessProfile: null;
  };
  siteUrlEnv: "NEXT_PUBLIC_SITE_URL";
};

export const siteConfig = {
  name: "Marcus Reboque",
  legalName: null,
  description:
    "Fundacao tecnica do site da Marcus Reboque para atendimento 24 horas de reboque em Fortaleza.",
  contact: {
    phoneRaw: "+55 85 98600-7392",
    phoneFormatted: "(85) 98600-7392",
    phoneHref: "tel:+5585986007392",
  },
  whatsapp: {
    number: "5585986007392",
    url: "https://wa.me/5585986007392",
  },
  location: {
    city: "Fortaleza",
    state: "CE",
    country: "BR",
    serviceAreaLabel: "Fortaleza e Regiao Metropolitana",
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
    googleBusinessProfile: null,
  },
  siteUrlEnv: "NEXT_PUBLIC_SITE_URL",
} as const satisfies SiteConfig;
