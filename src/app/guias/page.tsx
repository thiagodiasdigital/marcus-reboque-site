import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Guias | Marcus Reboque",
  description:
    "Orientações práticas para pedir guincho, reboque e transporte com mais clareza.",
  canonicalPath: "/guias",
});

const guides = [
  {
    title: "Antes de chamar",
    text: "Separe localização, modelo do veículo, destino e uma descrição curta da situação.",
  },
  {
    title: "Se houver pane",
    text: "Informe se o carro liga, se a direção trava, se há pneu furado ou bloqueio de roda.",
  },
  {
    title: "Se houver carga",
    text: "Avise sobre peso aproximado, volume, amarração e qualquer risco de deslocamento.",
  },
  {
    title: "Quando agendar",
    text: "Defina data, janela de atendimento e o ponto de embarque com antecedência.",
  },
];

export default function GuiasPage() {
  return (
    <main id="conteudo">
      <section className="section section--dark">
        <div className="container split-layout">
          <div>
            <p className="eyebrow">Guias</p>
            <h1>Orientações rápidas para solicitar atendimento</h1>
            <p className="hero-section__lead">
              Estas instruções ajudam a enviar um pedido mais claro e agilizar
              a triagem do atendimento.
            </p>
            <div className="inline-actions">
              <ButtonLink href="/contato" icon="arrow" variant="primary">
                Ir para contato
              </ButtonLink>
              <ButtonLink href="/servicos" icon="arrow" variant="secondary">
                Ver catálogo
              </ButtonLink>
            </div>
          </div>
          <div className="process-grid" aria-label="Resumo dos guias">
            <article className="process-item">
              <span>Local</span>
              <h3>Onde o veículo está</h3>
              <p>Envie endereço, referência e condição de acesso.</p>
            </article>
            <article className="process-item">
              <span>Veículo</span>
              <h3>O que será transportado</h3>
              <p>Tipo, modelo e situação atual são os dados principais.</p>
            </article>
            <article className="process-item">
              <span>Destino</span>
              <h3>Para onde vai</h3>
              <p>Informe oficina, residência, pátio, empresa ou marina.</p>
            </article>
            <article className="process-item">
              <span>Confirma</span>
              <h3>Triagem e saída</h3>
              <p>A resposta volta com orientação sobre a melhor forma de avançar.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionHeading
            eyebrow="Checklist"
            title="O que enviar no primeiro contato"
            text="Quanto mais objetiva for a mensagem, mais rápida fica a análise do atendimento."
          />
          <div className="process-grid">
            {guides.map((guide) => (
              <article className="process-item" key={guide.title}>
                <span>{guide.title}</span>
                <h3>{guide.title}</h3>
                <p>{guide.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Acesso rápido</p>
          <h2>Pronto para pedir atendimento?</h2>
          <div className="inline-actions">
            <ButtonLink href="/contato" icon="whatsapp" variant="primary">
              Abrir contato
            </ButtonLink>
            <Link className="button-link button-link--secondary" href="/areas-atendidas">
              <span>Ver áreas atendidas</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
