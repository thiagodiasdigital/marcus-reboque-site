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
    title: "Areas atendidas | Marcus Reboque",
    description:
      "Cobertura em Fortaleza, Regiao Metropolitana e localidades sob consulta, com foco em acesso, rota e tipo de atendimento.",
    eyebrow: "Cobertura",
    intro:
      "A Marcus Reboque atende Fortaleza e Regiao Metropolitana e avalia outras localidades caso a caso. O foco e confirmar rota, acesso e condicao de retirada antes de iniciar a operacao.",
    highlights: [
      {
        label: "Base",
        title: "Fortaleza como referencia",
        text: "A operacao parte de Fortaleza, com atendimento continuo para chamados urgentes e programados.",
      },
      {
        label: "Regiao",
        title: "Regiao Metropolitana",
        text: "Municipios proximos podem ser atendidos conforme rota, disponibilidade e tipo de veiculo.",
      },
      {
        label: "Consulta",
        title: "Outras localidades",
        text: "Chamados fora da area principal sao avaliados individualmente para evitar promessa nao confirmada.",
      },
    ],
    links: [
      { label: "Falar no WhatsApp", href: "/servicos" },
      { label: "Ver servicos", href: "/servicos" },
    ],
  },
  about: {
    title: "Sobre a Marcus Reboque",
    description:
      "Conheca a proposta operacional da Marcus Reboque, com foco em atendimento direto, informacao clara e transporte de veiculos.",
    eyebrow: "Quem somos",
    intro:
      "A Marcus Reboque atua com foco em guincho, reboque e transporte de veiculos, priorizando comunicacao objetiva, avaliacao tecnica e transparência sobre o que pode ser atendido.",
    highlights: [
      {
        label: "Atendimento",
        title: "Contato direto",
        text: "WhatsApp e telefone sao os canais principais para confirmar local, veiculo, destino e urgencia.",
      },
      {
        label: "Operacao",
        title: "Caminhao plataforma",
        text: "O trabalho e orientado para transporte com fixacao e embarque avaliados antes da saida.",
      },
      {
        label: "Conteudo",
        title: "Sem exagero comercial",
        text: "O site evita promessas nao confirmadas e descreve o que e possivel solicitar de forma realista.",
      },
    ],
    links: [
      { label: "Areas atendidas", href: "/areas-atendidas" },
      { label: "Contato", href: "/contato" },
    ],
  },
  reviews: {
    title: "Avaliacoes | Marcus Reboque",
    description:
      "Acesse o perfil oficial do Google para ver avaliacoes publicas da Marcus Reboque sem reproduzir notas dentro do site.",
    eyebrow: "Reputacao",
    intro:
      "As avaliacoes publicas sao consultadas no perfil oficial do Google Business Profile. Esta pagina direciona para a fonte externa confirmada e evita copiar depoimentos sem contexto.",
    highlights: [
      {
        label: "Fonte",
        title: "Perfil oficial",
        text: "As avaliacoes devem ser lidas diretamente no perfil oficial da empresa no Google.",
      },
      {
        label: "Contexto",
        title: "Sem nota inventada",
        text: "O site nao reproduz media, quantidade de estrelas ou depoimentos isolados fora da fonte original.",
      },
      {
        label: "Uso",
        title: "Consulta publica",
        text: "O objetivo e facilitar o acesso a reputacao publica sem misturar isso com a pagina de vendas.",
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
      "Para atendimento rapido, envie localizacao, tipo de veiculo, destino e qualquer restricao de acesso. O contato humano e o centro da operacao.",
    highlights: [
      {
        label: "Telefone",
        title: "(85) 98600-7392",
        text: "Ligacao direta para confirmar disponibilidade e detalhes do servico.",
      },
      {
        label: "WhatsApp",
        title: "Canal principal",
        text: "Envie mensagem com local, veiculo, destino e fotos quando possivel.",
      },
      {
        label: "Perfil",
        title: "Redes oficiais",
        text: "As redes confirmadas e o Google Business Profile concentram a presenca externa da empresa.",
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
      "Guia rapido com orientacoes praticas para pedir guincho, reboque e transporte com mais clareza.",
    eyebrow: "Guias",
    intro:
      "Esta area reune orientacoes curtas para quem precisa enviar uma solicitacao mais clara e acelerar a triagem operacional.",
    highlights: [
      {
        label: "Antes",
        title: "O que enviar",
        text: "Localizacao, destino, tipo de veiculo e fotos ajudam a reduzir retrabalho.",
      },
      {
        label: "Durante",
        title: "Como informar",
        text: "Descreva pane, bloqueio de roda, altura, carga ou qualquer restricao de acesso.",
      },
      {
        label: "Depois",
        title: "Confirmacao",
        text: "Apos a triagem, a operacao avanca com orientacao clara sobre embarque e destino.",
      },
    ],
    links: [
      { label: "Ir para contato", href: "/contato" },
      { label: "Ver servicos", href: "/servicos" },
    ],
  },
} satisfies Record<string, InstitutionalPageContent>;
