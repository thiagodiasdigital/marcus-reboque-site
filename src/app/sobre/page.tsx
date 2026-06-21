import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Sobre a Marcus Reboque | Fortaleza",
  description:
    "Conheca a proposta operacional da Marcus Reboque para guincho, reboque e transporte em Fortaleza.",
  canonicalPath: "/sobre",
});

const principles = [
  {
    title: "Atendimento direto",
    text: "A conversa com o cliente acontece nos canais oficiais, sem intermediar o pedido com formulacoes vazias.",
  },
  {
    title: "Operacao pratica",
    text: "O foco fica em local, veiculo, destino e condicao de acesso para reduzir retrabalho antes da saida.",
  },
  {
    title: "Transparencia",
    text: "O site evita prometer prazo, valor ou servico mecanico que nao foi confirmado.",
  },
];

export default function SobrePage() {
  return (
    <main id="conteudo">
      <section className="section section--dark">
        <div className="container split-layout">
          <div>
            <p className="eyebrow">Quem somos</p>
            <h1>Sobre a Marcus Reboque</h1>
            <p className="hero-section__lead">
              A Marcus Reboque atua com guincho, reboque e transporte de
              veiculos em Fortaleza, com comunicacao objetiva e triagem tecnica.
            </p>
            <div className="inline-actions">
              <ButtonLink href="/contato" icon="arrow" variant="primary">
                Falar com a equipe
              </ButtonLink>
              <ButtonLink href={siteConfig.contact.phoneHref} icon="phone" variant="secondary">
                {siteConfig.contact.phoneFormatted}
              </ButtonLink>
            </div>
          </div>
          <div className="process-grid" aria-label="Principios">
            <article className="process-item">
              <span>01</span>
              <h3>Clareza</h3>
              <p>Informacao curta, direta e util para quem precisa acionar o servico.</p>
            </article>
            <article className="process-item">
              <span>02</span>
              <h3>Seguranca</h3>
              <p>Remocao e transporte sao tratados com avaliacao antes da operacao.</p>
            </article>
            <article className="process-item">
              <span>03</span>
              <h3>Responsabilidade</h3>
              <p>O site mostra apenas o que foi confirmado e publicado no catalogo.</p>
            </article>
            <article className="process-item">
              <span>04</span>
              <h3>Contato humano</h3>
              <p>Telefone e WhatsApp seguem como canais principais de atendimento.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionHeading
            eyebrow="Principios"
            title="O que orienta o trabalho"
            text="A pagina resume a postura da empresa sem transformar isso em discurso genrico."
          />
          <div className="process-grid">
            {principles.map((item) => (
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
