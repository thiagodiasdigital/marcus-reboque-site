import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JsonLd } from "@/components/seo/json-ld";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/content/home";
import { siteConfig } from "@/content/site";
import { siteImages } from "@/content/images";
import { buildPageMetadata } from "@/lib/metadata";
import { buildServicePageJsonLd } from "@/lib/schema";
import { buildWhatsappUrl, conversionAttributes } from "@/lib/whatsapp";

type ServicePageParams = {
  slug: string;
};

export const dynamicParams = false;

export function generateStaticParams(): ServicePageParams[] {
  return services.map((service) => ({
    slug: service.futureSlug.replace("/servicos/", ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ServicePageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(
    (item) => item.futureSlug === `/servicos/${slug}`,
  );

  if (!service) {
    return buildPageMetadata({
      title: "Serviço não encontrado | Marcus Reboque",
      description: "A página solicitada não foi encontrada.",
      canonicalPath: `/servicos/${slug}`,
    });
  }

  return buildPageMetadata({
    title: `${service.title} | Marcus Reboque`,
    description: service.description,
    canonicalPath: service.futureSlug,
    image: service.imageKey ? siteImages[service.imageKey] : siteImages.homepageHeroDesktop,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<ServicePageParams>;
}) {
  const { slug } = await params;
  const service = services.find(
    (item) => item.futureSlug === `/servicos/${slug}`,
  );

  if (!service) {
    notFound();
  }

  const image = service.imageKey
    ? siteImages[service.imageKey]
    : siteImages.homepageHeroDesktop;
  const whatsappHref = buildWhatsappUrl({
    origin: `servicos/${slug}`,
    service: service.title,
    message: service.message,
  });
  const relatedServices = services
    .filter((item) => item.futureSlug !== service.futureSlug)
    .slice(0, 3);

  return (
    <>
      <JsonLd data={buildServicePageJsonLd(service, service.futureSlug)} />
      <main id="conteudo">
        <section className="section section--dark">
          <div className="container split-layout">
            <div>
              <p className="eyebrow">Serviços</p>
              <h1>{service.title}</h1>
              <p className="hero-section__lead">{service.description}</p>
              <div className="inline-actions">
                <ButtonLink
                  href={whatsappHref}
                  icon="whatsapp"
                  variant="primary"
                  {...conversionAttributes(`servicos/${slug}`, service.title)}
                >
                  Solicitar no WhatsApp
                </ButtonLink>
                <ButtonLink href="/servicos" icon="arrow" variant="secondary">
                  Voltar ao hub
                </ButtonLink>
              </div>
            </div>

            <div className="process-grid" aria-label="Resumo do serviço">
              <article className="process-item">
                <span>{siteConfig.location.city}</span>
                <h3>Base operacional</h3>
                <p>Atendimento em Fortaleza e Região Metropolitana.</p>
              </article>
              <article className="process-item">
                <span>{siteConfig.service.hoursLabel}</span>
                <h3>Disponibilidade</h3>
                <p>Operação contínua para emergências e agendamentos.</p>
              </article>
              <article className="process-item">
                <span>WhatsApp</span>
                <h3>Contato direto</h3>
                <p>Solicite orientação e envie localização, veículo e destino.</p>
              </article>
              <article className="process-item">
                <span>Plataforma</span>
                <h3>Modalidade</h3>
                <p>Remoção e transporte com avaliação do caso e do acesso.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--light" aria-labelledby="detalhes-title">
          <div className="container split-layout split-layout--reverse">
            <div className="split-layout__media">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                style={{ objectPosition: image.objectPosition }}
                priority
              />
            </div>
            <div>
              <p className="eyebrow">Detalhes do serviço</p>
              <h2 id="detalhes-title">O que considerar antes do atendimento</h2>
              <p className="hero-section__lead">
                A página detalha o serviço com base no catálogo validado da
                homepage e mantém o foco em solicitação clara, operação segura e
                cobertura regional.
              </p>
              <div className="process-grid">
                <article className="process-item">
                  <span>01</span>
                  <h3>Informe o ponto</h3>
                  <p>Envie localização, referência e acesso ao veículo.</p>
                </article>
                <article className="process-item">
                  <span>02</span>
                  <h3>Explique a situação</h3>
                  <p>Descreva o modelo, o estado do veículo e o destino.</p>
                </article>
                <article className="process-item">
                  <span>03</span>
                  <h3>Confirme a operação</h3>
                  <p>Receba a orientação de embarque e o alinhamento final.</p>
                </article>
                <article className="process-item">
                  <span>04</span>
                  <h3>Avance com segurança</h3>
                  <p>O atendimento segue com base no caso real e na viabilidade.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="relacionados-title">
          <div className="container">
            <p className="eyebrow">Serviços relacionados</p>
            <h2 id="relacionados-title">Outras opções do catálogo</h2>
            <div className="services-grid">
              {relatedServices.map((relatedService, index) => (
                <ServiceCard
                  index={index}
                  key={relatedService.futureSlug}
                  service={relatedService}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--dark">
          <div className="container split-layout">
            <div className="process-grid">
              <article className="process-item">
                <span>Hub</span>
                <h3>Voltar ao catálogo</h3>
                <p>Veja todas as opções reunidas em uma página central.</p>
              </article>
              <article className="process-item">
                <span>WhatsApp</span>
                <h3>Atendimento rápido</h3>
                <p>Use o canal oficial para pedir orientação imediata.</p>
              </article>
            </div>
            <div>
              <p className="eyebrow">Próximo passo</p>
              <h2>Quer seguir com este atendimento?</h2>
              <p className="hero-section__lead">
                Envie sua localização e os dados do veículo para receber a
                orientação adequada ao tipo de serviço.
              </p>
              <div className="inline-actions">
                <ButtonLink
                  href={whatsappHref}
                  icon="whatsapp"
                  variant="primary"
                  {...conversionAttributes(`servicos/${slug}-cta`)}
                >
                  Falar no WhatsApp
                </ButtonLink>
                <ButtonLink href="/servicos" icon="arrow" variant="secondary">
                  Ver hub
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
