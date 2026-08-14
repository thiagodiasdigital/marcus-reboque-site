import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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

type ServiceFaqItem = {
  question: string;
  answer: string;
};

type ServiceSupportCopy = {
  whenToContract: string;
  process: string;
  care: string;
  budget: string;
  proof: string;
  faqItems: ServiceFaqItem[];
};

export const dynamicParams = false;

function getServiceBySlug(slug: string) {
  return services.find((item) => item.futureSlug === `/servicos/${slug}`);
}

function buildFaqItems(
  serviceTitle: string,
  whenToContract: string,
  care: string,
  budget: string,
): ServiceFaqItem[] {
  return [
    {
      question: `Quando contratar ${serviceTitle.toLowerCase()}?`,
      answer: whenToContract,
    },
    {
      question: `O que devo informar antes de pedir ${serviceTitle.toLowerCase()}?`,
      answer:
        "Envie a localização, o destino, o tipo de veículo, o estado atual e qualquer restrição de acesso ou manobra.",
    },
    {
      question: `O que mais influencia o orçamento de ${serviceTitle.toLowerCase()}?`,
      answer: budget,
    },
    {
      question: `Quais cuidados são importantes para ${serviceTitle.toLowerCase()}?`,
      answer: care,
    },
  ];
}

function buildServiceSupportCopy(
  serviceSlug: string,
  serviceTitle: string,
): ServiceSupportCopy {
  const title = serviceTitle.toLowerCase();

  const presets: Record<string, ServiceSupportCopy> = {
    "/servicos/guincho-reboque-24h-fortaleza": {
      whenToContract:
        "Use quando o veículo precisa sair com prioridade, está imobilizado ou exige remoção em qualquer horário.",
      process:
        "A triagem confirma localização, acesso, condição de mobilidade e destino antes de liberar o embarque.",
      care:
        "Envie o ponto exato, fotos se possível e avise se há bloqueio de roda, direção travada ou área de difícil acesso.",
      budget:
        "Horário, distância, acesso, porte e complexidade do embarque influenciam a avaliação.",
      proof:
        "A imagem principal reforça a operação 24h e ajuda a alinhar a expectativa antes do atendimento.",
      faqItems: buildFaqItems(
        serviceTitle,
        "Quando o veículo está parado em local de risco, imobilizado ou precisa sair com prioridade.",
        "Retire objetos soltos, confirme se há bloqueio de roda ou direção travada e envie o destino.",
        "Horário, acesso, distância e complexidade da remoção pesam na avaliação.",
      ),
    },
    "/servicos/auto-socorro-24h-fortaleza": {
      whenToContract:
        "Use quando o veículo teve pane, não consegue seguir rodando ou precisa de apoio inicial para remoção segura.",
      process:
        "A triagem identifica o tipo de pane, o nível de imobilização e o melhor caminho para retirar o veículo.",
      care:
        "Informe se a bateria descarregou, se há pneu furado, roda travada ou qualquer restrição de manobra.",
      budget:
        "Tipo de pane, horário, acesso, distância e necessidade de apoio adicional pesam na avaliação.",
      proof:
        "A página deixa claro que o foco é a remoção e a orientação inicial, não o conserto mecânico.",
      faqItems: buildFaqItems(
        serviceTitle,
        "Quando o veículo apresentou pane, ficou imobilizado ou precisa de orientação imediata para seguir a remoção.",
        "Envie localização, sintomas da pane, tipo de veículo e qualquer restrição de roda, direção ou freio.",
        "Pane, acesso, distância e urgência influenciam a avaliação.",
      ),
    },
    "/servicos/transporte-emergencial-fortaleza": {
      whenToContract:
        "Use quando o veículo precisa deixar o local com urgência, por segurança, fluxo operacional ou restrição de permanência.",
      process:
        "A confirmação prioriza local, acesso, destino e a velocidade de retirada desejada antes da operação.",
      care:
        "Avise sobre prazo interno, área de risco, carga adicional e qualquer detalhe que altere a retirada.",
      budget:
        "Urgência, distância, acesso e complexidade da retirada afetam a avaliação.",
      proof:
        "O texto destaca prioridade operacional sem prometer prazo fixo ou condição não confirmada.",
      faqItems: buildFaqItems(
        serviceTitle,
        "Quando a retirada não pode esperar e o veículo precisa sair do local com prioridade operacional.",
        "Informe localização, destino, tipo de veículo e qualquer restrição de segurança ou acesso.",
        "Urgência, acesso, distância e complexidade da operação pesam na avaliação.",
      ),
    },
    "/servicos/transporte-programado-fortaleza": {
      whenToContract:
        "Use quando a retirada pode ser agendada em data combinada e exige planejamento prévio.",
      process:
        "A confirmação avalia agenda, rota, acesso e o ponto de embarque com antecedência.",
      care:
        "Envie endereço, janela desejada, tipo de veículo ou carga e restrições do local.",
      budget:
        "Data, rota, acesso e tempo de espera entram na avaliação.",
      proof:
        "A página reforça o planejamento prévio e o alinhamento antes da saída.",
      faqItems: buildFaqItems(
        serviceTitle,
        "Quando a remoção pode ser agendada e precisa de alinhamento prévio de rota e horário.",
        "Informe data desejada, local de retirada, destino e qualquer restrição de acesso.",
        "Data, distância, acesso e tempo de espera influenciam a avaliação.",
      ),
    },
  };

  const preset = presets[serviceSlug];
  if (preset) {
    return preset;
  }

  return {
    whenToContract: `Use quando ${title} precisar sair de um ponto de risco, pane ou transporte programado.`,
    process:
      "A confirmação começa com localização, tipo de veículo, acesso e destino.",
    care:
      "Informe restrições de acesso, objetos soltos e qualquer detalhe que altere a operação.",
    budget:
      "Rota, acesso, porte, condição do veículo e destino influenciam a operação.",
    proof: "A imagem principal documenta a categoria e apoia a triagem visual.",
    faqItems: buildFaqItems(
      serviceTitle,
      `Quando ${title} precisar sair de um ponto de risco, pane ou transporte programado.`,
      "Informe localização, destino, estado do veículo e restrições de acesso.",
      "Rota, acesso, porte, condição e destino influenciam o serviço.",
    ),
  };
}

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
  const service = getServiceBySlug(slug);

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
    image: service.imageKey
      ? siteImages[service.imageKey]
      : siteImages.homepageHeroDesktop,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<ServicePageParams>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const supportCopy = buildServiceSupportCopy(service.futureSlug, service.title);
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
      <JsonLd
        data={buildServicePageJsonLd(
          service,
          service.futureSlug,
          supportCopy.faqItems,
        )}
      />
      <main id="conteudo" className="service-page">
        <nav aria-label="Breadcrumb" className="service-breadcrumb">
          <div className="container">
            <ol className="service-breadcrumb__list">
              <li>
                <Link href="/">Início</Link>
              </li>
              <li>
                <Link href="/servicos">Serviços</Link>
              </li>
              <li aria-current="page">{service.title}</li>
            </ol>
          </div>
        </nav>

        <section className="section section--dark">
          <div className="container split-layout">
            <div>
              <p className="eyebrow">Serviços</p>
              <h1>{service.title}</h1>
              <p className="hero-section__lead">{service.description}</p>
              <p>
                Atendimento em {siteConfig.location.city} e região com foco em
                orientação clara, avaliação do acesso e confirmação do destino
                antes da operação.
              </p>
              <div className="inline-actions">
                <ButtonLink
                  href={whatsappHref}
                  icon="whatsapp"
                  variant="primary"
                  {...conversionAttributes(`servicos/${slug}`, service.title)}
                >
                  Solicitar no WhatsApp
                </ButtonLink>
                <ButtonLink
                  href={siteConfig.contact.phoneHref}
                  icon="phone"
                  variant="secondary"
                >
                  {siteConfig.contact.phoneFormatted}
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
                <p>Envie local, veículo, destino e qualquer restrição relevante.</p>
              </article>
              <article className="process-item">
                <span>Telefone</span>
                <h3>Atendimento humano</h3>
                <p>{siteConfig.contact.phoneFormatted}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--light" aria-labelledby="detalhes-title">
          <div className="container split-layout split-layout--reverse">
            <div className="split-layout__media">
              {service.imageKey ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 720px) 100vw, (max-width: 1120px) 72vw, 760px"
                  style={{ objectPosition: image.objectPosition }}
                  priority
                />
              ) : (
                <div className="service-card__institutional" aria-hidden="true">
                  <span>MR</span>
                  <small>Tratamento institucional</small>
                </div>
              )}
            </div>
            <div>
              <p className="eyebrow">Detalhes do serviço</p>
              <h2 id="detalhes-title">Quando solicitar este serviço</h2>
              <p className="hero-section__lead">
                A página apresenta o serviço com foco em solicitação clara,
                operação segura e cobertura regional.
              </p>
              <div className="process-grid">
                <article className="process-item">
                  <span>Quando contratar</span>
                  <h3>Momento adequado</h3>
                  <p>{supportCopy.whenToContract}</p>
                </article>
                <article className="process-item">
                  <span>Processo</span>
                  <h3>Como funciona</h3>
                  <p>{supportCopy.process}</p>
                </article>
                <article className="process-item">
                  <span>Cuidados</span>
                  <h3>O que preparar</h3>
                  <p>{supportCopy.care}</p>
                </article>
                <article className="process-item">
                  <span>Orçamento</span>
                  <h3>Fatores que pesam</h3>
                  <p>{supportCopy.budget}</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--muted" aria-labelledby="prova-title">
          <div className="container split-layout">
            <div>
              <p className="eyebrow">Prova operacional</p>
              <h2 id="prova-title">Informações para confirmar o atendimento</h2>
              <p className="hero-section__lead">{supportCopy.proof}</p>
              <p>
                Antes de avançar, envie localização, referência de acesso e uma
                descrição objetiva do veículo ou carga para receber a
                orientação adequada.
              </p>
            </div>
            <div className="process-grid">
              <article className="process-item">
                <span>01</span>
                <h3>Local</h3>
                <p>Indique ponto de coleta, acesso e qualquer obstáculo visível.</p>
              </article>
              <article className="process-item">
                <span>02</span>
                <h3>Veículo</h3>
                <p>Informe modelo, estado e se há restrição de roda, direção ou carga.</p>
              </article>
              <article className="process-item">
                <span>03</span>
                <h3>Destino</h3>
                <p>Defina oficina, residência, pátio, marina, empresa ou outro ponto.</p>
              </article>
              <article className="process-item">
                <span>04</span>
                <h3>Confirmação</h3>
                <p>Receba a orientação de embarque antes de autorizar a operação.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="faq-title">
          <div className="container faq-layout">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 id="faq-title">Perguntas específicas do serviço</h2>
              <p className="hero-section__lead">
                Dúvidas comuns sobre este serviço em Fortaleza, com respostas
                objetivas para ajudar na solicitação pelo WhatsApp.
              </p>
            </div>
            <div className="faq-list">
              {supportCopy.faqItems.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
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
                <span>Telefone</span>
                <h3>Contato rápido</h3>
                <p>{siteConfig.contact.phoneFormatted}</p>
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
                <ButtonLink href={siteConfig.contact.phoneHref} icon="phone" variant="secondary">
                  {siteConfig.contact.phoneFormatted}
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
