export type FutureRoute = {
  label: string;
  href: string;
  status: "future";
};

export const futureRoutes: FutureRoute[] = [
  { label: "Areas atendidas", href: "/areas-atendidas", status: "future" },
  { label: "Sobre", href: "/sobre", status: "future" },
  { label: "Avaliacoes", href: "/avaliacoes", status: "future" },
  { label: "Contato", href: "/contato", status: "future" },
  { label: "Guias", href: "/guias", status: "future" },
];
