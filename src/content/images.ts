export type SiteImage = {
  id: string;
  src: string;
  originalPath: string;
  alt: string;
  width: number;
  height: number;
  focus: "center" | "top" | "bottom";
  futurePriority: boolean;
  needsMobileDerivative: boolean;
  sha256: string;
};

export const siteImages = {
  homepageHero: {
    id: "064",
    src: "/images/marcus-reboque/hero/marcus-reboque-hero-guincho-caminhonete-fortaleza-ce-03.webp",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/02_HERO/marcus-reboque-hero-guincho-caminhonete-fortaleza-ce-03.webp",
    alt: "Picape cinza transportada em caminhao plataforma da Marcus Reboque",
    width: 677,
    height: 510,
    focus: "center",
    futurePriority: true,
    needsMobileDerivative: true,
    sha256:
      "CF6D980C9015A43AFB9E229A9FFB0C0270C928C6C4ADDB761AF80A464C87AC35",
  },
  logo: {
    id: "001",
    src: "/images/marcus-reboque/institucional/marcus-reboque-logotipo-fortaleza-ce-01.png",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/01_IDENTIDADE_VISUAL/marcus-reboque-logotipo-fortaleza-ce-01.png",
    alt: "Logotipo da Marcus Reboque 24h com indicacao Fortaleza-CE",
    width: 520,
    height: 520,
    focus: "center",
    futurePriority: false,
    needsMobileDerivative: false,
    sha256:
      "86310A403CC941B7363307810B90A81C072958FF59436FC087B889B5415DBD3D",
  },
} as const satisfies Record<string, SiteImage>;
