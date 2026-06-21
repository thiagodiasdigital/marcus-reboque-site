import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Areas atendidas | Marcus Reboque",
  description:
    "Fortaleza, Regiao Metropolitana e localidades sob consulta para guincho, reboque e transporte.",
  canonicalPath: "/areas-atendidas",
});

const coverage = [
  {
    title: "Fortaleza",
    text: "Base principal da operacao, com atendimento continuo e foco em retirada rapida e organizada.",
  },
  {
    title: "Regiao Metropolitana",
    text: "Municipios proximos podem ser atendidos conforme rota, tipo de veiculo e disponibilidade.",
  },
  {
    title: "Outras localidades",
    text: "Chamados fora da area principal sao avaliados caso a caso para evitar promessa nao confirmada.",
  },
];

export default function AreasAtendidasPage() {
  return (
    <main id="conteudo">
      <section className="section section--dark">
        <div className="container split-layout">
          <div>
            <p className="eyebrow">Cobertura</p>
            <h1>Areas atendidas em Fortaleza e Regiao Metropolitana</h1>
            <p className="hero-section__lead">
              A Marcus Reboque trabalha com base em Fortaleza e avalia outras
              localidades conforme rota, acesso e tipo de atendimento.
            </p>
            <div className="inline-actions">
              <ButtonLink href="/servicos" icon="arrow" variant="primary">
                Ver servicos
              </ButtonLink>
              <ButtonLink href={siteConfig.contact.phoneHref} icon="phone" variant="secondary">
                {siteConfig.contact.phoneFormatted}
              </ButtonLink>
            </div>
          </div>
          <div className="process-grid" aria-label="Resumo de cobertura">
            <article className="process-item">
              <span>01</span>
              <h3>Fortaleza</h3>
              <p>Atendimento central da operacao.</p>
            </article>
            <article className="process-item">
              <span>02</span>
              <h3>Regiao Metropolitana</h3>
              <p>Atendimento conforme acesso e disponibilidade.</p>
            </article>
            <article className="process-item">
              <span>03</span>
              <h3>Sob consulta</h3>
              <p>Outras localidades sao avaliadas individualmente.</p>
            </article>
            <article className="process-item">
              <span>24h</span>
              <h3>Operacao continua</h3>
              <p>Chamados urgentes e programados seguem a mesma triagem.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionHeading
            eyebrow="Regioes"
            title="Como a cobertura e avaliada"
            text="A area atendida nao e apenas geografica. A definicao passa por acesso, tipo de veiculo, destino e momento do chamado."
          />
          <div className="process-grid">
            {coverage.map((item) => (
              <article className="process-item" key={item.title}>
                <span>{item.title}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
