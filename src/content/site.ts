export const officialSocialOrder = [
  "instagram",
  "facebook",
  "youtube",
  "tiktok",
  "pinterest",
  "linkedin",
  "x",
] as const;

export type OfficialSocialKey = (typeof officialSocialOrder)[number];

export type OfficialSocialProfile = {
  key: OfficialSocialKey;
  label: string;
  shortLabel: string;
  url: string;
};

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
    address: {
      label: string;
      locality: string;
      region: string;
      countryName: string;
    };
    coordinates: null;
  };
  service: {
    hoursLabel: string;
    openingHours: string;
  };
  socials: {
    instagram: string;
    facebook: string;
    youtube: string;
    x: string;
    linkedin: string;
    tiktok: string;
    pinterest: string;
    googleBusinessProfile: string;
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
    address: {
      label: "Fortaleza, CE",
      locality: "Fortaleza",
      region: "CE",
      countryName: "Brasil",
    },
    coordinates: null,
  },
  service: {
    hoursLabel: "Atendimento 24 horas",
    openingHours: "Mo-Su 00:00-23:59",
  },
  socials: {
    instagram: "https://www.instagram.com/marcus_reboque_oficial/",
    facebook: "https://www.facebook.com/marcusreboque/",
    youtube: "https://www.youtube.com/@MarcusReboqueFortaleza24h/shorts",
    x: "https://x.com/Marcus_Reboque",
    linkedin:
      "https://www.linkedin.com/in/marcus-reboque-fortaleza-24h-984450383/",
    tiktok: "https://www.tiktok.com/@marcus_reboque_fortaleza",
    pinterest: "https://br.pinterest.com/marcusreboquefortaleza24h/",
    googleBusinessProfile: "https://maps.app.goo.gl/Xxv9XfzphbuHkZGC9",
  },
  siteUrlEnv: "NEXT_PUBLIC_SITE_URL",
  indexableEnv: "NEXT_PUBLIC_INDEXABLE",
  analyticsEnv: "NEXT_PUBLIC_GA_ID",
} as const satisfies SiteConfig;

export const officialSocialProfiles: OfficialSocialProfile[] =
  officialSocialOrder.map((key) => {
    const labels: Record<
      OfficialSocialKey,
      Pick<OfficialSocialProfile, "label" | "shortLabel">
    > = {
      instagram: { label: "Instagram", shortLabel: "IG" },
      facebook: { label: "Facebook", shortLabel: "FB" },
      youtube: { label: "YouTube", shortLabel: "YT" },
      tiktok: { label: "TikTok", shortLabel: "TK" },
      pinterest: { label: "Pinterest", shortLabel: "PT" },
      linkedin: { label: "LinkedIn", shortLabel: "IN" },
      x: { label: "X", shortLabel: "X" },
    };

    return {
      key,
      label: labels[key].label,
      shortLabel: labels[key].shortLabel,
      url: siteConfig.socials[key],
    };
  });
