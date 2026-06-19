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
  title: "Hub de servicos | Marcus Reboque",
  description:
    "Catalogo central de guincho, reboque e transporte da Marcus Reboque em Fortaleza, com rotas preparadas para expansao.",
  canonicalPath: "/servicos",
  image: siteImages.homepageHeroDesktop,
});

export default function ServicesHubPage() {
  const whatsappHref = buildWhatsappUrl({
    origin: "hub-servicos",
    message:
      "Olá, preciso conhecer o catalogo de servicos da Marcus Reboque em Fortaleza.",
  });

  const roadmapRoutes = futureRoutes.filter((route) => route.href !== "/servicos");

  return (
    <>
      <JsonLd data={buildServicesHubJsonLd()} />
      <main id="conteudo">
        <section className="section section--dark">
          <div className="container split-layout">
            <div>
              <p className="eyebrow">Hub de servicos</p>
              <h1>Catalogo de guincho, reboque e transporte em Fortaleza</h1>
              <p className="hero-section__lead">
                Esta pagina organiza os servicos ja validados da Marcus Reboque
                e reserva espaco para as proximas paginas especializadas do
                projeto.
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
                <h3>Servicos catalogados</h3>
                <p>Atendimento imediato e transporte sob consulta.</p>
              </article>
              <article className="process-item">
                <span>07</span>
                <h3>Perfis oficiais</h3>
                <p>As redes oficiais seguem consolidadas em uma base unica.</p>
              </article>
              <article className="process-item">
                <span>24h</span>
                <h3>Disponibilidade</h3>
                <p>O atendimento divulgado permanece continuo para Fortaleza.</p>
              </article>
              <article className="process-item">
                <span>{String(roadmapRoutes.length).padStart(2, "0")}</span>
                <h3>Rotas planejadas</h3>
                <p>Novas paginas especializadas estao preparadas para a proxima etapa.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--light" aria-labelledby="catalogo-title">
          <div className="container">
            <SectionHeading
              id="catalogo-title"
              eyebrow="Catalogo"
              title="Servicos validados na homepage V1"
              text="Os servicos abaixo ja compoem a vitrine principal e servem como base para o hub e para as futuras paginas especializadas."
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
              eyebrow="Proximas paginas"
              title="Estrutura preparada para expansao do hub"
              text="O proximo estagio do projeto usa esta lista como mapa de implementacao, sem misturar o que ja esta publicado com o que ainda nao existe."
            />
            <div className="process-grid">
              {roadmapRoutes.map((route) => (
                <article className="process-item" key={route.href}>
                  <span>{route.href}</span>
                  <h3>{route.label}</h3>
                  <p>Pagina prevista para a expansao do hub de servicos.</p>
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
                <p>Atendimento orientado para Fortaleza e Regiao Metropolitana.</p>
              </article>
              <article className="process-item">
                <span>{siteConfig.service.hoursLabel}</span>
                <h3>Janela de atendimento</h3>
                <p>Modelo continuo para acionamentos emergenciais e programados.</p>
              </article>
            </div>
            <div>
              <SectionHeading
                id="hub-cta-title"
                eyebrow="Proxima acao"
                title="Quer atendimento agora?"
                text="Use o WhatsApp para solicitar orientacao imediata ou volte para a homepage para revisar a apresentacao principal."
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
                    Voltar ao inicio
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
