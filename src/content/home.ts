import type { SiteImageKey } from "@/content/images";

export type NavLink = {
  label: string;
  href: string;
};

export type HomeService = {
  title: string;
  description: string;
  imageKey: SiteImageKey | null;
  message: string;
  location: string;
  futureSlug: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type TransportSolution = {
  title: string;
  text: string;
  imageKey: SiteImageKey;
};

export const headerLinks: NavLink[] = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Áreas", href: "#areas" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export const heroSignals = [
  "Atendimento 24 horas",
  "Fortaleza e Região Metropolitana",
  "Emergencial e programado",
] as const;

export const services: HomeService[] = [
  {
    title: "Guincho e reboque 24h em Fortaleza",
    description:
      "Atendimento 24 horas para remoção de veículos imobilizados em Fortaleza e Região Metropolitana, com orientação sobre acesso, destino e condições de embarque.",
    imageKey: "finalTruck",
    message: "Olá, preciso de guincho e reboque 24h em Fortaleza.",
    location: "servico-guincho-reboque-24h",
    futureSlug: "/servicos/guincho-reboque-24h-fortaleza",
  },
  {
    title: "Auto socorro 24h em Fortaleza",
    description:
      "Apoio inicial para pane, veículo parado ou necessidade de remoção segura em Fortaleza, com triagem rápida e foco em transporte, não em conserto mecânico.",
    imageKey: "operationNight",
    message: "Olá, preciso de auto socorro 24h em Fortaleza.",
    location: "servico-auto-socorro-24h",
    futureSlug: "/servicos/auto-socorro-24h-fortaleza",
  },
  {
    title: "Transporte emergencial em Fortaleza",
    description:
      "Saída prioritária quando o veículo precisa deixar o local com urgência, por risco, pane, colisão ou bloqueio operacional.",
    imageKey: "operationCarDamaged",
    message: "Olá, preciso de transporte emergencial em Fortaleza.",
    location: "servico-transporte-emergencial",
    futureSlug: "/servicos/transporte-emergencial-fortaleza",
  },
  {
    title: "Transporte programado em Fortaleza",
    description:
      "Agendamento para deslocamento seguro em Fortaleza, com avaliação prévia da rota, do ponto de embarque e do destino desejado.",
    imageKey: "programmedCar",
    message: "Olá, preciso de transporte programado em Fortaleza.",
    location: "servico-transporte-programado",
    futureSlug: "/servicos/transporte-programado-fortaleza",
  },
  {
    title: "Guincho para motos",
    description:
      "Remoção e transporte de motos com cuidado na amarração, atenção a guidão, rodas, acessórios e condições de retirada.",
    imageKey: "serviceMoto",
    message: "Olá, preciso de guincho para moto em Fortaleza.",
    location: "servico-motos",
    futureSlug: "/servicos/guincho-para-motos-fortaleza",
  },
  {
    title: "Guincho para carros",
    description:
      "Reboque para carros em pane, colisão ou transporte programado, conforme acesso, condição do veículo e destino.",
    imageKey: "serviceCarro",
    message: "Olá, preciso de guincho para carro em Fortaleza.",
    location: "servico-carros",
    futureSlug: "/servicos/guincho-para-carros-fortaleza",
  },
  {
    title: "Guincho para caminhonetes",
    description:
      "Atendimento para caminhonetes e picapes, com avaliação de porte, peso, acesso, destino e condições de embarque.",
    imageKey: "serviceCaminhonete",
    message: "Olá, preciso de guincho para caminhonete em Fortaleza.",
    location: "servico-caminhonetes",
    futureSlug: "/servicos/guincho-para-caminhonetes-fortaleza",
  },
  {
    title: "Guincho para vans",
    description:
      "Transporte de vans sob análise de altura, peso, rota e ponto de acesso para operação em caminhão plataforma.",
    imageKey: "serviceVan",
    message: "Olá, preciso de guincho para van em Fortaleza.",
    location: "servico-vans",
    futureSlug: "/servicos/guincho-para-vans-fortaleza",
  },
  {
    title: "Transporte de utilitários",
    description:
      "Solução sob consulta para utilitários leves, com confirmação prévia do modelo, dimensões, ponto de coleta e destino.",
    imageKey: null,
    message: "Olá, preciso consultar transporte de utilitário em Fortaleza.",
    location: "servico-utilitarios",
    futureSlug: "/servicos/transporte-de-utilitarios-fortaleza",
  },
  {
    title: "Transporte de veículos especiais",
    description:
      "Remoção e deslocamento de veículos fora do padrão comum, sempre após avaliação prévia de peso, altura, fixação e acesso.",
    imageKey: "serviceVeiculoEspecial",
    message: "Olá, preciso consultar transporte de veículo especial.",
    location: "servico-veiculos-especiais",
    futureSlug: "/servicos/transporte-de-veiculos-especiais-fortaleza",
  },
  {
    title: "Transporte de barcos e jet skis",
    description:
      "Transporte sob consulta para embarcações leves, considerando suporte, dimensões e local de retirada.",
    imageKey: "serviceBarco",
    message: "Olá, preciso consultar transporte de barco ou jet ski.",
    location: "servico-barcos",
    futureSlug: "/servicos/transporte-de-barcos-fortaleza",
  },
  {
    title: "Transporte de máquinas agrícolas",
    description:
      "Deslocamento de máquinas de pequeno porte mediante avaliação de peso, altura, acesso e fixação.",
    imageKey: "serviceMaquinaAgricola",
    message: "Olá, preciso consultar transporte de máquina agrícola.",
    location: "servico-maquinas",
    futureSlug: "/servicos/transporte-de-maquinas-agricolas-fortaleza",
  },
  {
    title: "Transporte de veículos antigos",
    description:
      "Transporte cuidadoso para veículos antigos, colecionáveis ou parados, com orientação antes do embarque.",
    imageKey: "serviceVeiculoAntigo",
    message: "Olá, preciso consultar transporte de veículo antigo.",
    location: "servico-veiculos-antigos",
    futureSlug: "/servicos/transporte-de-veiculos-antigos-fortaleza",
  },
  {
    title: "Transporte de empilhadeiras",
    description:
      "Remoção de empilhadeiras sob consulta técnica, com atenção a peso, altura, piso e pontos de carga.",
    imageKey: "serviceEmpilhadeira",
    message: "Olá, preciso consultar transporte de empilhadeira.",
    location: "servico-empilhadeiras",
    futureSlug: "/servicos/transporte-de-empilhadeiras-fortaleza",
  },
  {
    title: "Guincho para pequenos caminhões",
    description:
      "Atendimento para pequenos caminhões compatíveis com a operação, após confirmação das condições do veículo.",
    imageKey: "servicePequenoCaminhao",
    message: "Olá, preciso consultar guincho para pequeno caminhão.",
    location: "servico-pequenos-caminhoes",
    futureSlug: "/servicos/guincho-para-pequenos-caminhoes-fortaleza",
  },
  {
    title: "Transporte de pequenas cargas",
    description:
      "Apoio para pequenas cargas compatíveis com caminhão plataforma, com amarração, rota e condições de retirada avaliadas antes do transporte.",
    imageKey: "servicePequenaCarga",
    message: "Olá, preciso consultar transporte de pequena carga.",
    location: "servico-pequenas-cargas",
    futureSlug: "/servicos/transporte-de-pequenas-cargas-fortaleza",
  },
];

export const emergencySteps = [
  "Envie sua localização atual.",
  "Informe o tipo de veículo e a situação.",
  "Confirme o destino ou ponto de apoio.",
  "Aguarde a orientação de embarque pelo WhatsApp ou telefone.",
] as const;

export const howItWorksSteps = [
  {
    title: "Localização",
    text: "Compartilhe o ponto de retirada, referência e condições de acesso.",
  },
  {
    title: "Veículo e situação",
    text: "Informe modelo, estado do veículo e se há restrição de roda, direção ou freio.",
  },
  {
    title: "Destino",
    text: "Defina oficina, residência, pátio, marina, empresa ou outro local de entrega.",
  },
  {
    title: "Orientação",
    text: "Receba a orientação de preparo e acompanhamento até a conclusão do transporte.",
  },
] as const;

export const transportSolutions: TransportSolution[] = [
  {
    title: "Auto socorro 24 horas",
    text: "Atendimento para situações de pane, veículo imobilizado ou necessidade de remoção.",
    imageKey: "operationNight",
  },
  {
    title: "Transporte emergencial",
    text: "Apoio quando o veículo precisa sair do local com prioridade operacional.",
    imageKey: "operationCarDamaged",
  },
  {
    title: "Transporte programado",
    text: "Agendamento para deslocamento de veículos, máquinas leves e pequenas cargas.",
    imageKey: "programmedCar",
  },
];

export const serviceAreas = [
  "Fortaleza",
  "Região Metropolitana",
  "Outras localidades sob consulta",
] as const;

export const differentials = [
  "Atendimento direto por WhatsApp e telefone.",
  "Operação com caminhão plataforma e equipamentos de fixação.",
  "Orientação antes do embarque para reduzir riscos na remoção.",
  "Transporte emergencial e programado para diferentes tipos de veículo.",
  "Conteúdo do site baseado em fotos reais e serviços confirmados.",
  "Sem promessa pública de prazo, preço ou serviço mecânico não confirmado.",
] as const;

export const galleryImages: SiteImageKey[] = [
  "galleryMoto",
  "galleryCarro",
  "galleryBarco",
  "galleryMaquina",
  "galleryAntigo",
  "galleryPequenaCarga",
];

export const faqItems: FaqItem[] = [
  {
    question: "A Marcus Reboque atende 24 horas?",
    answer:
      "Sim. O atendimento é divulgado como 24 horas, com solicitação pelo WhatsApp ou telefone.",
  },
  {
    question: "O atendimento é em Fortaleza e Região Metropolitana?",
    answer:
      "Sim. A base de atendimento informada é Fortaleza e Região Metropolitana, com outras localidades sob consulta.",
  },
  {
    question: "Vocês fazem guincho para motos?",
    answer:
      "Sim. A Marcus Reboque atende transporte de motos, respeitando as condições de retirada, destino e fixação.",
  },
  {
    question: "Vocês transportam carros, caminhonetes e vans?",
    answer:
      "Sim. Carros, caminhonetes e vans podem ser atendidos conforme porte, acesso e condição do veículo.",
  },
  {
    question: "É possível agendar transporte programado?",
    answer:
      "Sim. Além de emergências, o atendimento pode ser programado pelo WhatsApp conforme disponibilidade.",
  },
  {
    question: "Vocês transportam barcos, jet skis ou máquinas?",
    answer:
      "O transporte de barcos, jet skis, máquinas agrícolas e equipamentos é feito sob consulta técnica prévia.",
  },
  {
    question: "Como pedir atendimento pelo WhatsApp?",
    answer:
      "Use o botão de WhatsApp do site e envie localização, tipo de veículo, situação e destino desejado.",
  },
  {
    question: "Quais informações devo enviar na solicitação?",
    answer:
      "Envie localização, destino, modelo do veículo, fotos se possível e qualquer restrição de acesso ou movimentação.",
  },
  {
    question: "O serviço inclui conserto mecânico?",
    answer:
      "O foco divulgado no site é guincho, reboque, remoção e transporte. Reparos mecânicos no local não fazem parte da comunicação pública.",
  },
  {
    question: "Há preço fixo no site?",
    answer:
      "Não. Valores dependem da rota, tipo de veículo, condições de acesso e complexidade do transporte.",
  },
];
