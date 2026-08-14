import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";
import { buildWhatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = buildPageMetadata({
  title: "Contato | Marcus Reboque",
  description:
    "Entre em contato por telefone, WhatsApp ou redes oficiais para solicitar guincho, reboque e transporte.",
  canonicalPath: "/contato",
});

export default function ContatoPage() {
  const whatsappHref = buildWhatsappUrl({
    origin: "contato",
    message: "Olá, preciso de atendimento da Marcus Reboque em Fortaleza.",
  });

  return (
    <main id="conteudo">
      <section className="section section--dark">
        <div className="container split-layout">
          <div>
            <p className="eyebrow">Contato</p>
            <h1>Fale com a Marcus Reboque</h1>
            <p className="hero-section__lead">
              Envie sua localização, o tipo de veículo e o destino desejado
              para receber a orientação adequada.
            </p>
            <div className="inline-actions">
              <ButtonLink
                href={whatsappHref}
                icon="whatsapp"
                variant="primary"
              >
                Abrir WhatsApp
              </ButtonLink>
              <ButtonLink href={siteConfig.contact.phoneHref} icon="phone" variant="secondary">
                {siteConfig.contact.phoneFormatted}
              </ButtonLink>
            </div>
          </div>
          <div className="process-grid" aria-label="Canais de contato">
            <article className="process-item">
              <span>WhatsApp</span>
              <h3>Canal principal</h3>
              <p>Resposta rápida com orientação operacional e confirmação de demanda.</p>
            </article>
            <article className="process-item">
              <span>Telefone</span>
              <h3>Ligação direta</h3>
              <p>{siteConfig.contact.phoneFormatted}</p>
            </article>
            <article className="process-item">
              <span>Google</span>
              <h3>Perfil oficial</h3>
              <p>Local e avaliação pública da empresa na fonte confirmada.</p>
            </article>
            <article className="process-item">
              <span>Redes</span>
              <h3>Presença oficial</h3>
              <p>As contas confirmadas ficam concentradas nas redes e no site.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container split-layout split-layout--reverse">
          <div>
            <SectionHeading
              eyebrow="Como enviar"
              title="O que informar no primeiro contato"
              text="Esses dados aceleram a triagem e evitam idas e vindas desnecessárias."
            />
          </div>
          <div className="process-grid">
            <article className="process-item">
              <span>01</span>
              <h3>Localização</h3>
              <p>Ponto exato, referência e condição de acesso.</p>
            </article>
            <article className="process-item">
              <span>02</span>
              <h3>Veículo</h3>
              <p>Modelo, tipo, estado geral e restrições de mobilidade.</p>
            </article>
            <article className="process-item">
              <span>03</span>
              <h3>Destino</h3>
              <p>Oficina, residência, empresa, pátio ou outro ponto final.</p>
            </article>
            <article className="process-item">
              <span>04</span>
              <h3>Fotos</h3>
              <p>Imagens ajudam a entender a situação antes da saída.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Redes oficiais" title="Presença externa confirmada" />
          <SocialLinks />
        </div>
      </section>
    </main>
  );
}
