import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { futureRoutes } from "@/content/navigation";
import { services } from "@/content/home";
import { siteConfig } from "@/content/site";
import { siteImages } from "@/content/images";
import { buildPageMetadata } from "@/lib/metadata";
import { buildServicesHubJsonLd } from "@/lib/schema";
import { buildWhatsappUrl, conversionAttributes } from "@/lib/whatsapp";

export const metadata: Metadata = buildPageMetadata({
  title: "Serviços de Guincho e Reboque em Fortaleza | Marcus Reboque",
  description:
    "Catálogo de serviços da Marcus Reboque: guincho 24h, auto socorro, transporte emergencial, transporte programado, motos, carros, caminhonetes, vans e cargas compatíveis em Fortaleza.",
  canonicalPath: "/servicos",
  image: siteImages.homepageHeroDesktop,
});

export default function ServicesHubPage() {
  const whatsappHref = buildWhatsappUrl({
    origin: "hub-servicos",
    message:
      "Olá, preciso conhecer o catálogo de serviços da Marcus Reboque em Fortaleza.",
  });

  const roadmapRoutes = futureRoutes.filter((route) => route.href !== "/servicos");

  return (
    <>
      <JsonLd data={buildServicesHubJsonLd()} />
      <main id="conteudo">
        <section className="section section--dark">
          <div className="container split-layout">
            <div>
              <p className="eyebrow">Hub de serviços</p>
              <h1>Catálogo de guincho, reboque e transporte em Fortaleza</h1>
              <p className="hero-section__lead">
                Conheça os serviços de guincho 24h, reboque, auto socorro e
                transporte programado oferecidos pela Marcus Reboque em
                Fortaleza e Região Metropolitana.
              </p>
              <div className="inline-actions">
                <ButtonLink
                  href={whatsappHref}
                  icon="whatsapp"
                  variant="primary"
                  {...conversionAttributes("hub-servicos")}
                >
                  Falar no WhatsApp
                </ButtonLink>
                <ButtonLink href="/" icon="arrow" variant="secondary">
                  Voltar para a home
                </ButtonLink>
              </div>
            </div>

            <div className="process-grid" aria-label="Resumo do hub">
              <article className="process-item">
                <span>{String(services.length).padStart(2, "0")}</span>
                <h3>16 tipos de atendimento</h3>
                <p>Guincho, reboque e transporte sob consulta.</p>
              </article>
              <article className="process-item">
                <span>07</span>
                <h3>Presença oficial</h3>
                <p>Consulte os canais oficiais da Marcus Reboque para confirmar informações públicas.</p>
              </article>
              <article className="process-item">
                <span>24h</span>
                <h3>Disponibilidade</h3>
                <p>O atendimento divulgado permanece contínuo para Fortaleza.</p>
              </article>
              <article className="process-item">
                <span>{String(roadmapRoutes.length).padStart(2, "0")}</span>
                <h3>Atendimento local</h3>
                <p>Fortaleza e Região Metropolitana como base principal de atendimento.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--light" aria-labelledby="catalogo-title">
          <div className="container">
            <SectionHeading
              id="catalogo-title"
              eyebrow="Catálogo"
              title="Serviços de guincho e transporte disponíveis para consulta"
              text="Escolha o tipo de atendimento mais próximo da sua necessidade e fale pelo WhatsApp para confirmar viabilidade, rota, acesso e destino."
            />
            <div className="services-grid">
              {services.map((service, index) => {
                const cardId = service.futureSlug.replace("/servicos/", "");

                return (
                  <ServiceCard
                    id={cardId}
                    index={index}
                    key={service.title}
                    service={service}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="roadmap-title">
          <div className="container">
            <SectionHeading
              id="roadmap-title"
              eyebrow="Informações complementares"
              title="Conteúdo institucional para apoio à consulta"
              text="Esta área reúne links institucionais e conteúdos complementares que ajudam o usuário a entender atendimento, reputação, áreas atendidas e formas de contato da Marcus Reboque."
            />
            <div className="process-grid">
              {roadmapRoutes.map((route) => (
                <article className="process-item" key={route.href}>
                  <span>{route.href}</span>
                  <h3>{route.label}</h3>
                  <p>Link institucional disponível no site.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--dark" aria-labelledby="hub-cta-title">
          <div className="container split-layout split-layout--reverse">
            <div className="process-grid">
              <article className="process-item">
                <span>{siteConfig.location.city}</span>
                <h3>Base operacional</h3>
                <p>Atendimento orientado para Fortaleza e Região Metropolitana.</p>
              </article>
              <article className="process-item">
                <span>{siteConfig.service.hoursLabel}</span>
                <h3>Janela de atendimento</h3>
                <p>Modelo contínuo para acionamentos emergenciais e programados.</p>
              </article>
            </div>
            <div>
              <SectionHeading
                id="hub-cta-title"
                eyebrow="Próxima ação"
                title="Quer atendimento agora?"
                text="Use o WhatsApp para solicitar orientação imediata ou volte para a homepage para revisar a apresentação principal."
              >
                <div className="inline-actions">
                  <ButtonLink
                    href={whatsappHref}
                    icon="whatsapp"
                    variant="primary"
                    {...conversionAttributes("hub-servicos-cta")}
                  >
                    Solicitar atendimento
                  </ButtonLink>
                  <ButtonLink href="/" icon="arrow" variant="secondary">
                    Voltar ao início
                  </ButtonLink>
                </div>
              </SectionHeading>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
