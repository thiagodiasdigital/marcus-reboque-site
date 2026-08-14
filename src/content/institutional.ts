export type InstitutionalLink = {
  label: string;
  href: string;
};

export type InstitutionalPageContent = {
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  highlights: Array<{
    label: string;
    title: string;
    text: string;
  }>;
  links: InstitutionalLink[];
};

export const institutionalPages = {
  areas: {
    title: "Áreas atendidas | Marcus Reboque",
    description:
      "Cobertura em Fortaleza, Região Metropolitana e localidades sob consulta, com foco em acesso, rota e tipo de atendimento.",
    eyebrow: "Cobertura",
    intro:
      "A Marcus Reboque atende Fortaleza e Região Metropolitana e avalia outras localidades caso a caso. O foco é confirmar rota, acesso e condição de retirada antes de iniciar a operação.",
    highlights: [
      {
        label: "Base",
        title: "Fortaleza como referência",
        text: "A operação parte de Fortaleza, com atendimento contínuo para chamados urgentes e programados.",
      },
      {
        label: "Região",
        title: "Região Metropolitana",
        text: "Municípios próximos podem ser atendidos conforme rota, disponibilidade e tipo de veículo.",
      },
      {
        label: "Consulta",
        title: "Outras localidades",
        text: "Chamados fora da área principal são avaliados individualmente para evitar promessa não confirmada.",
      },
    ],
    links: [
      { label: "Falar no WhatsApp", href: "/servicos" },
      { label: "Ver serviços", href: "/servicos" },
    ],
  },
  about: {
    title: "Sobre a Marcus Reboque",
    description:
      "Conheça a proposta operacional da Marcus Reboque, com foco em atendimento direto, informação clara e transporte de veículos.",
    eyebrow: "Quem somos",
    intro:
      "A Marcus Reboque atua com foco em guincho, reboque e transporte de veículos, priorizando comunicação objetiva, avaliação técnica e transparência sobre o que pode ser atendido.",
    highlights: [
      {
        label: "Atendimento",
        title: "Contato direto",
        text: "WhatsApp e telefone são os canais principais para confirmar local, veículo, destino e urgência.",
      },
      {
        label: "Operação",
        title: "Caminhão plataforma",
        text: "O trabalho é orientado para transporte com fixação e embarque avaliados antes da saída.",
      },
      {
        label: "Conteúdo",
        title: "Sem exagero comercial",
        text: "O site evita promessas não confirmadas e descreve o que é possível solicitar de forma realista.",
      },
    ],
    links: [
      { label: "Áreas atendidas", href: "/areas-atendidas" },
      { label: "Contato", href: "/contato" },
    ],
  },
  reviews: {
    title: "Avaliações | Marcus Reboque",
    description:
      "Acesse o perfil oficial do Google para ver avaliações públicas da Marcus Reboque sem reproduzir notas dentro do site.",
    eyebrow: "Reputação",
    intro:
      "As avaliações públicas são consultadas no perfil oficial do Google Business Profile. Esta página direciona para a fonte externa confirmada e evita copiar depoimentos sem contexto.",
    highlights: [
      {
        label: "Fonte",
        title: "Perfil oficial",
        text: "As avaliações devem ser lidas diretamente no perfil oficial da empresa no Google.",
      },
      {
        label: "Contexto",
        title: "Sem nota inventada",
        text: "O site não reproduz média, quantidade de estrelas ou depoimentos isolados fora da fonte original.",
      },
      {
        label: "Uso",
        title: "Consulta pública",
        text: "O objetivo é facilitar o acesso à reputação pública sem misturar isso com a página de vendas.",
      },
    ],
    links: [
      { label: "Abrir Google", href: "https://maps.app.goo.gl/Xxv9XfzphbuHkZGC9" },
      { label: "Falar no WhatsApp", href: "/servicos" },
    ],
  },
  contact: {
    title: "Contato | Marcus Reboque",
    description:
      "Fale com a Marcus Reboque por WhatsApp, telefone ou redes oficiais para solicitar guincho, reboque e transporte.",
    eyebrow: "Contato",
    intro:
      "Para atendimento rápido, envie localização, tipo de veículo, destino e qualquer restrição de acesso. O contato humano é o centro da operação.",
    highlights: [
      {
        label: "Telefone",
        title: "(85) 98600-7392",
        text: "Ligação direta para confirmar disponibilidade e detalhes do serviço.",
      },
      {
        label: "WhatsApp",
        title: "Canal principal",
        text: "Envie mensagem com local, veículo, destino e fotos quando possível.",
      },
      {
        label: "Perfil",
        title: "Redes oficiais",
        text: "As redes confirmadas e o Google Business Profile concentram a presença externa da empresa.",
      },
    ],
    links: [
      { label: "Abrir WhatsApp", href: "https://wa.me/5585986007392" },
      { label: "Redes oficiais", href: "/" },
    ],
  },
  guides: {
    title: "Guias | Marcus Reboque",
    description:
      "Guia rápido com orientações práticas para pedir guincho, reboque e transporte com mais clareza.",
    eyebrow: "Guias",
    intro:
      "Esta área reúne orientações curtas para quem precisa enviar uma solicitação mais clara e acelerar a triagem operacional.",
    highlights: [
      {
        label: "Antes",
        title: "O que enviar",
        text: "Localização, destino, tipo de veículo e fotos ajudam a reduzir retrabalho.",
      },
      {
        label: "Durante",
        title: "Como informar",
        text: "Descreva pane, bloqueio de roda, altura, carga ou qualquer restrição de acesso.",
      },
      {
        label: "Depois",
        title: "Confirmação",
        text: "Após a triagem, a operação avança com orientação clara sobre embarque e destino.",
      },
    ],
    links: [
      { label: "Ir para contato", href: "/contato" },
      { label: "Ver serviços", href: "/servicos" },
    ],
  },
} satisfies Record<string, InstitutionalPageContent>;
