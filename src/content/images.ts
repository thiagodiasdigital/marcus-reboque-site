export type SiteImage = {
  id: string;
  src: string;
  originalPath: string;
  alt: string;
  width: number;
  height: number;
  objectPosition: string;
  sha256?: string;
};

export const siteImages = {
  logo: {
    id: "001",
    src: "/images/marcus-reboque/institucional/marcus-reboque-logotipo-fortaleza-ce-01.png",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/01_IDENTIDADE_VISUAL/marcus-reboque-logotipo-fortaleza-ce-01.png",
    alt: "Logotipo da Marcus Reboque 24h em Fortaleza, Ceará",
    width: 1254,
    height: 1254,
    objectPosition: "center",
    sha256:
      "86310A403CC941B7363307810B90A81C072958FF59436FC087B889B5415DBD3D",
  },
  homepageHeroDesktop: {
    id: "064",
    src: "/images/marcus-reboque/hero/marcus-reboque-hero-guincho-caminhonete-fortaleza-ce-03.webp",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/02_HERO/marcus-reboque-hero-guincho-caminhonete-fortaleza-ce-03.webp",
    alt: "Picape cinza transportada em caminhão plataforma da Marcus Reboque em Fortaleza",
    width: 677,
    height: 510,
    objectPosition: "center",
    sha256:
      "CF6D980C9015A43AFB9E229A9FFB0C0270C928C6C4ADDB761AF80A464C87AC35",
  },
  homepageHeroMobile: {
    id: "064-mobile",
    src: "/images/marcus-reboque/hero/marcus-reboque-hero-guincho-caminhonete-fortaleza-ce-03-mobile.webp",
    originalPath:
      "public/images/marcus-reboque/hero/marcus-reboque-hero-guincho-caminhonete-fortaleza-ce-03-mobile.webp",
    alt: "Picape cinza transportada em caminhão plataforma da Marcus Reboque em Fortaleza",
    width: 960,
    height: 1200,
    objectPosition: "top center",
    sha256:
      "289DB562C7CFAB6084C5CC188587FE8B5C6185BB5A11856735C1CACA2B3C4B7F",
  },
  serviceMoto: {
    id: "moto-01",
    src: "/images/marcus-reboque/servicos/motos/marcus-reboque-guincho-moto-fortaleza-ce-01.jpg",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/03_SERVICOS/motos/marcus-reboque-guincho-moto-fortaleza-ce-01.jpg",
    alt: "Motocicleta posicionada para transporte em caminhão plataforma da Marcus Reboque",
    width: 899,
    height: 900,
    objectPosition: "center",
  },
  serviceCarro: {
    id: "carro-01",
    src: "/images/marcus-reboque/servicos/carros/marcus-reboque-guincho-carro-fortaleza-ce-01.jpg",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/03_SERVICOS/carros/marcus-reboque-guincho-carro-fortaleza-ce-01.jpg",
    alt: "Carro sendo atendido por guincho plataforma da Marcus Reboque",
    width: 899,
    height: 900,
    objectPosition: "center",
  },
  serviceCaminhonete: {
    id: "caminhonete-02",
    src: "/images/marcus-reboque/servicos/caminhonetes/marcus-reboque-guincho-caminhonete-fortaleza-ce-02.webp",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/03_SERVICOS/caminhonetes/marcus-reboque-guincho-caminhonete-fortaleza-ce-02.webp",
    alt: "Caminhonete sobre plataforma de reboque em operação da Marcus Reboque",
    width: 510,
    height: 510,
    objectPosition: "center",
  },
  serviceVan: {
    id: "van-01",
    src: "/images/marcus-reboque/servicos/vans/marcus-reboque-guincho-van-fortaleza-ce-01.jpg",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/03_SERVICOS/vans/marcus-reboque-guincho-van-fortaleza-ce-01.jpg",
    alt: "Van atendida por caminhão plataforma da Marcus Reboque",
    width: 899,
    height: 900,
    objectPosition: "center",
  },
  serviceVeiculoEspecial: {
    id: "veiculo-especial-01",
    src: "/images/marcus-reboque/servicos/veiculos-especiais/marcus-reboque-transporte-veiculo-especial-fortaleza-ce-01.webp",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/03_SERVICOS/veiculos-especiais/marcus-reboque-transporte-veiculo-especial-fortaleza-ce-01.webp",
    alt: "Veículo especial transportado por caminhão plataforma da Marcus Reboque",
    width: 510,
    height: 510,
    objectPosition: "center",
  },
  serviceBarco: {
    id: "barco-01",
    src: "/images/marcus-reboque/servicos/barcos/marcus-reboque-transporte-barco-fortaleza-ce-01.webp",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/03_SERVICOS/barcos/marcus-reboque-transporte-barco-fortaleza-ce-01.webp",
    alt: "Barco transportado com apoio de caminhão plataforma da Marcus Reboque",
    width: 510,
    height: 510,
    objectPosition: "center",
  },
  serviceMaquinaAgricola: {
    id: "maquina-agricola-04",
    src: "/images/marcus-reboque/servicos/maquinas-agricolas/marcus-reboque-transporte-maquina-agricola-fortaleza-ce-04.webp",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/03_SERVICOS/maquinas-agricolas/marcus-reboque-transporte-maquina-agricola-fortaleza-ce-04.webp",
    alt: "Máquina agrícola transportada por caminhão plataforma da Marcus Reboque",
    width: 510,
    height: 510,
    objectPosition: "center",
  },
  serviceVeiculoAntigo: {
    id: "veiculo-antigo-01",
    src: "/images/marcus-reboque/servicos/veiculos-antigos/marcus-reboque-transporte-veiculo-antigo-fortaleza-ce-01.webp",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/03_SERVICOS/veiculos-antigos/marcus-reboque-transporte-veiculo-antigo-fortaleza-ce-01.webp",
    alt: "Veículo antigo transportado em caminhão plataforma da Marcus Reboque",
    width: 510,
    height: 510,
    objectPosition: "center",
  },
  serviceEmpilhadeira: {
    id: "empilhadeira-01",
    src: "/images/marcus-reboque/servicos/empilhadeiras/marcus-reboque-transporte-empilhadeira-fortaleza-ce-01.webp",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/03_SERVICOS/empilhadeiras/marcus-reboque-transporte-empilhadeira-fortaleza-ce-01.webp",
    alt: "Empilhadeira posicionada para transporte com a Marcus Reboque",
    width: 384,
    height: 510,
    objectPosition: "center",
  },
  servicePequenoCaminhao: {
    id: "pequeno-caminhao-02",
    src: "/images/marcus-reboque/servicos/pequenos-caminhoes/marcus-reboque-guincho-pequeno-caminhao-fortaleza-ce-02.webp",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/03_SERVICOS/pequenos-caminhoes/marcus-reboque-guincho-pequeno-caminhao-fortaleza-ce-02.webp",
    alt: "Pequeno caminhão em atendimento de guincho plataforma da Marcus Reboque",
    width: 680,
    height: 510,
    objectPosition: "center",
  },
  servicePequenaCarga: {
    id: "pequena-carga-01",
    src: "/images/marcus-reboque/servicos/pequenas-cargas/marcus-reboque-transporte-pequenas-cargas-fortaleza-ce-01.jpg",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/03_SERVICOS/pequenas-cargas/marcus-reboque-transporte-pequenas-cargas-fortaleza-ce-01.jpg",
    alt: "Pequena carga transportada em caminhão plataforma da Marcus Reboque",
    width: 900,
    height: 900,
    objectPosition: "center",
  },
  emergencyCaminhonete: {
    id: "operacao-caminhonete-danificada-01",
    src: "/images/marcus-reboque/operacao/marcus-reboque-atendimento-real-caminhonete-danificada-fortaleza-ce-01.webp",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/04_OPERACAO/marcus-reboque-atendimento-real-caminhonete-danificada-fortaleza-ce-01.webp",
    alt: "Atendimento real a caminhonete danificada em operação da Marcus Reboque",
    width: 677,
    height: 510,
    objectPosition: "center",
  },
  howItWorksCaminhonete: {
    id: "caminhonete-03",
    src: "/images/marcus-reboque/servicos/caminhonetes/marcus-reboque-guincho-caminhonete-fortaleza-ce-03.webp",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/03_SERVICOS/caminhonetes/marcus-reboque-guincho-caminhonete-fortaleza-ce-03.webp",
    alt: "Caminhonete alinhada na rampa do caminhão plataforma da Marcus Reboque",
    width: 510,
    height: 510,
    objectPosition: "center",
  },
  operationNight: {
    id: "operacao-noturna-01",
    src: "/images/marcus-reboque/operacao/marcus-reboque-atendimento-noturno-fortaleza-ce-01.webp",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/04_OPERACAO/marcus-reboque-atendimento-noturno-fortaleza-ce-01.webp",
    alt: "Atendimento noturno de guincho plataforma da Marcus Reboque",
    width: 510,
    height: 510,
    objectPosition: "center",
  },
  programmedCar: {
    id: "carro-12",
    src: "/images/marcus-reboque/servicos/carros/marcus-reboque-guincho-carro-fortaleza-ce-12.webp",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/03_SERVICOS/carros/marcus-reboque-guincho-carro-fortaleza-ce-12.webp",
    alt: "Carro transportado em atendimento programado pela Marcus Reboque",
    width: 677,
    height: 510,
    objectPosition: "center",
  },
  operationCarDamaged: {
    id: "operacao-carro-danificado-01",
    src: "/images/marcus-reboque/operacao/marcus-reboque-atendimento-real-carro-danificado-fortaleza-ce-01.webp",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/04_OPERACAO/marcus-reboque-atendimento-real-carro-danificado-fortaleza-ce-01.webp",
    alt: "Carro danificado em atendimento real com caminhão plataforma da Marcus Reboque",
    width: 510,
    height: 510,
    objectPosition: "center",
  },
  serviceArea: {
    id: "caminhonete-12",
    src: "/images/marcus-reboque/servicos/caminhonetes/marcus-reboque-guincho-caminhonete-fortaleza-ce-12.webp",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/03_SERVICOS/caminhonetes/marcus-reboque-guincho-caminhonete-fortaleza-ce-12.webp",
    alt: "Caminhão plataforma da Marcus Reboque em atendimento na região de Fortaleza",
    width: 510,
    height: 510,
    objectPosition: "center",
  },
  equipmentFixation: {
    id: "equipamento-02",
    src: "/images/marcus-reboque/equipamentos/marcus-reboque-equipamentos-fixacao-fortaleza-ce-02.webp",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/05_EQUIPAMENTOS/marcus-reboque-equipamentos-fixacao-fortaleza-ce-02.webp",
    alt: "Equipamentos de fixação usados em transporte com caminhão plataforma",
    width: 510,
    height: 510,
    objectPosition: "center",
  },
  galleryMoto: {
    id: "moto-04",
    src: "/images/marcus-reboque/servicos/motos/marcus-reboque-guincho-moto-fortaleza-ce-04.webp",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/03_SERVICOS/motos/marcus-reboque-guincho-moto-fortaleza-ce-04.webp",
    alt: "Moto transportada em caminhão plataforma da Marcus Reboque",
    width: 677,
    height: 510,
    objectPosition: "center",
  },
  galleryCarro: {
    id: "carro-06",
    src: "/images/marcus-reboque/servicos/carros/marcus-reboque-guincho-carro-fortaleza-ce-06.webp",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/03_SERVICOS/carros/marcus-reboque-guincho-carro-fortaleza-ce-06.webp",
    alt: "Carro sobre caminhão plataforma durante operação da Marcus Reboque",
    width: 677,
    height: 510,
    objectPosition: "center",
  },
  galleryBarco: {
    id: "barco-02",
    src: "/images/marcus-reboque/servicos/barcos/marcus-reboque-transporte-barco-fortaleza-ce-02.webp",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/03_SERVICOS/barcos/marcus-reboque-transporte-barco-fortaleza-ce-02.webp",
    alt: "Barco transportado com apoio de caminhão plataforma em Fortaleza",
    width: 510,
    height: 510,
    objectPosition: "center",
  },
  galleryMaquina: {
    id: "maquina-agricola-05",
    src: "/images/marcus-reboque/servicos/maquinas-agricolas/marcus-reboque-transporte-maquina-agricola-fortaleza-ce-05.webp",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/03_SERVICOS/maquinas-agricolas/marcus-reboque-transporte-maquina-agricola-fortaleza-ce-05.webp",
    alt: "Máquina agrícola transportada por caminhão plataforma da Marcus Reboque",
    width: 510,
    height: 510,
    objectPosition: "center",
  },
  galleryAntigo: {
    id: "veiculo-antigo-04",
    src: "/images/marcus-reboque/servicos/veiculos-antigos/marcus-reboque-transporte-veiculo-antigo-fortaleza-ce-04.webp",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/03_SERVICOS/veiculos-antigos/marcus-reboque-transporte-veiculo-antigo-fortaleza-ce-04.webp",
    alt: "Veículo antigo preparado para transporte pela Marcus Reboque",
    width: 510,
    height: 510,
    objectPosition: "center",
  },
  galleryPequenaCarga: {
    id: "pequena-carga-02",
    src: "/images/marcus-reboque/servicos/pequenas-cargas/marcus-reboque-transporte-pequenas-cargas-fortaleza-ce-02.webp",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/03_SERVICOS/pequenas-cargas/marcus-reboque-transporte-pequenas-cargas-fortaleza-ce-02.webp",
    alt: "Pequena carga transportada em caminhão plataforma da Marcus Reboque",
    width: 510,
    height: 510,
    objectPosition: "center",
  },
  finalTruck: {
    id: "operacao-plataforma-02",
    src: "/images/marcus-reboque/operacao/marcus-reboque-caminhao-plataforma-fortaleza-ce-02.webp",
    originalPath:
      "IMAGENS_MARCUS_REBOQUE/04_OPERACAO/marcus-reboque-caminhao-plataforma-fortaleza-ce-02.webp",
    alt: "Caminhão plataforma da Marcus Reboque pronto para atendimento",
    width: 510,
    height: 510,
    objectPosition: "center",
  },
} as const satisfies Record<string, SiteImage>;

export type SiteImageKey = keyof typeof siteImages;
