export type FutureRoute = {
  label: string;
  href: string;
  status: "future";
};

export const futureRoutes: FutureRoute[] = [
  { label: "Servicos", href: "/servicos", status: "future" },
  { label: "Guincho para motos", href: "/servicos/guincho-para-motos", status: "future" },
  { label: "Guincho para carros", href: "/servicos/guincho-para-carros", status: "future" },
  { label: "Guincho para caminhonetes", href: "/servicos/guincho-para-caminhonetes", status: "future" },
  { label: "Guincho para vans", href: "/servicos/guincho-para-vans", status: "future" },
  { label: "Transporte de utilitarios", href: "/servicos/transporte-de-utilitarios", status: "future" },
  { label: "Veiculos especiais", href: "/servicos/veiculos-especiais", status: "future" },
  { label: "Barcos e jet skis", href: "/servicos/barcos-e-jet-skis", status: "future" },
  { label: "Maquinas agricolas", href: "/servicos/maquinas-agricolas", status: "future" },
  { label: "Veiculos antigos", href: "/servicos/veiculos-antigos", status: "future" },
  { label: "Empilhadeiras", href: "/servicos/empilhadeiras", status: "future" },
  { label: "Pequenos caminhoes", href: "/servicos/pequenos-caminhoes", status: "future" },
  { label: "Pequenas cargas", href: "/servicos/pequenas-cargas", status: "future" },
  { label: "Auto socorro 24 horas", href: "/servicos/auto-socorro-24-horas", status: "future" },
  { label: "Areas atendidas", href: "/areas-atendidas", status: "future" },
  { label: "Sobre", href: "/sobre", status: "future" },
  { label: "Avaliacoes", href: "/avaliacoes", status: "future" },
  { label: "Contato", href: "/contato", status: "future" },
  { label: "Guias", href: "/guias", status: "future" },
];
