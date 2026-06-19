import type { Metadata } from "next";
import Link from "next/link";
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
  const serviceLower = serviceTitle.toLowerCase();

  return [
    {
      question: `Quando contratar ${serviceLower}?`,
      answer: whenToContract,
    },
    {
      question: `O que devo informar antes de pedir ${serviceLower}?`,
      answer:
        "Envie a localização, o destino, o tipo de veículo, o estado atual e qualquer restrição de acesso ou manobra.",
    },
    {
      question: `O que mais influencia o orçamento de ${serviceLower}?`,
      answer: budget,
    },
    {
      question: `Quais cuidados são importantes para ${serviceLower}?`,
      answer: care,
    },
  ];
}

function buildServiceSupportCopy(serviceSlug: string, serviceTitle: string): ServiceSupportCopy {
  const serviceLower = serviceTitle.toLowerCase();

  switch (serviceSlug) {
    case "/servicos/guincho-para-motos-fortaleza":
      return {
        whenToContract:
          "Use quando a moto não liga, sofreu queda, está sem mobilidade ou precisa ir para oficina, pátio ou outro destino combinado.",
        process:
          "A operação começa com a confirmação do modelo, do ponto de coleta e do formato de fixação mais adequado para a moto.",
        care:
          "Retire objetos soltos, mantenha o guidão estabilizado e confirme se há acessórios que exigem atenção extra na amarração.",
        budget:
          "A avaliação considera rota, acesso, condição da moto, ponto de retirada e destino final.",
        proof:
          "A imagem principal mostra o contexto real do serviço para apoiar a triagem visual antes do atendimento.",
        faqItems: buildFaqItems(
          serviceTitle,
          "A moto precisa sair de um ponto de risco, não liga ou exige transporte até outro local.",
          "A fixação precisa preservar roda, guidão, retrovisores e acessórios soltos.",
          "Acesso, distância, condição da moto e destino influenciam o atendimento.",
        ),
      };
    case "/servicos/guincho-para-carros-fortaleza":
      return {
        whenToContract:
          "Use quando o carro está imobilizado por pane, colisão, falha mecânica ou precisa de transporte programado.",
        process:
          "Confirme se o carro roda, se a direção e o freio estão livres e informe onde o veículo deve ser entregue.",
        care:
          "Deixe chave, documentos e objetos de valor com a pessoa responsável e informe qualquer restrição de roda ou direção.",
        budget:
          "A operação varia conforme rota, acesso, tipo de pane, destino e condição do carro no momento da remoção.",
        proof:
          "O serviço usa imagem real da categoria para registrar a operação e reforçar a avaliação visual.",
        faqItems: buildFaqItems(
          serviceTitle,
          "O carro está parado, sem condições de seguir rodando ou precisa sair com prioridade do local.",
          "Informe acesso, estado da direção, se o carro roda e o destino desejado.",
          "Distância, acesso, condição do carro e necessidade de embarque influenciam a operação.",
        ),
      };
    case "/servicos/guincho-para-caminhonetes-fortaleza":
      return {
        whenToContract:
          "Use quando a caminhonete ou picape precisa sair de pane, colisão, oficina ou de um ponto com acesso limitado.",
        process:
          "A análise considera altura, largura, estado das rodas e a melhor forma de aproximação para o embarque.",
        care:
          "Verifique acessórios externos, carga no compartimento e qualquer detalhe que altere o balanço do veículo.",
        budget:
          "O preço depende de rota, porte do veículo, condição de acesso e destino da caminhonete.",
        proof:
          "A foto principal mostra o tipo de veículo atendido e ajuda na leitura prévia da operação.",
        faqItems: buildFaqItems(
          serviceTitle,
          "A caminhonete está imobilizada, precisa de transporte planejado ou não deve seguir rodando.",
          "Informe modelo, porte, destino e eventuais obstáculos no acesso ao ponto de retirada.",
          "Porte, acesso, rota e condição do veículo pesam na avaliação.",
        ),
      };
    case "/servicos/guincho-para-vans-fortaleza":
      return {
        whenToContract:
          "Use quando a van precisa ser removida, está parada em pane ou exige transporte programado para outro endereço.",
        process:
          "A operação depende da altura, do entre-eixos, do acesso ao local e da confirmação do ponto de entrega.",
        care:
          "Desative o que for possível no interior e avise se há carga, bancos adaptados ou peças que influenciem a manobra.",
        budget:
          "Altura, acesso, distância, porte e condição da van entram na avaliação antes da confirmação.",
        proof:
          "A imagem do serviço documenta a categoria atendida e reduz a necessidade de suposições na triagem.",
        faqItems: buildFaqItems(
          serviceTitle,
          "A van está sem condição de rodar, precisa sair do local ou será levada de forma programada.",
          "Envie modelo, altura aproximada, local de retirada e destino.",
          "Altura, acesso, rota e condição do veículo influenciam a operação.",
        ),
      };
    case "/servicos/transporte-de-utilitarios-fortaleza":
      return {
        whenToContract:
          "Use quando um utilitário leve precisa ser deslocado e o modelo deve ser avaliado antes do embarque.",
        process:
          "A confirmação depende do modelo exato, do ponto de carga e da viabilidade real de acesso ao veículo.",
        care:
          "Como não há imagem dedicada, a página usa tratamento institucional honesto e pede confirmação detalhada do utilitário.",
        budget:
          "Modelo, acesso, rota, porte e condição de embarque são os fatores principais para este atendimento.",
        proof:
          "Sem foto específica da categoria, o conteúdo deixa claro que a validação é técnica e não visualmente simulada.",
        faqItems: buildFaqItems(
          serviceTitle,
          "Quando o utilitário leve precisa sair com segurança e o modelo ainda precisa ser confirmado.",
          "Informe o modelo, o destino, a localização e eventuais restrições de acesso.",
          "Modelo, distância, acesso e necessidade de apoio na carga influenciam a avaliação.",
        ),
      };
    case "/servicos/transporte-de-veiculos-especiais-fortaleza":
      return {
        whenToContract:
          "Use quando o veículo foge do padrão comum e precisa de análise técnica antes do transporte.",
        process:
          "A avaliação considera dimensões, adaptações, ponto de fixação e a viabilidade do acesso ao local.",
        care:
          "Informe qualquer adaptação, peça solta, dificuldade de tração ou detalhe que exija atenção especial na operação.",
        budget:
          "Dimensões, acesso, complexidade da operação e destino influenciam a contratação.",
        proof:
          "A foto do serviço reforça que a análise é técnica e feita por categoria confirmada, não por suposição.",
        faqItems: buildFaqItems(
          serviceTitle,
          "Quando o veículo especial exige transporte sem improviso e com análise prévia da operação.",
          "Envie fotos, medidas aproximadas, local de retirada e destino.",
          "Dimensões, adaptação, acesso e complexidade operacional pesam na avaliação.",
        ),
      };
    case "/servicos/transporte-de-barcos-fortaleza":
      return {
        whenToContract:
          "Use quando barco ou jet ski precisa de deslocamento com apoio técnico antes da retirada.",
        process:
          "A operação depende de suporte, dimensões, acesso à marina, pátio ou residência e do ponto de entrega.",
        care:
          "Confirme pontos de fixação, peso aproximado, suporte disponível e qualquer proteção necessária para casco ou estrutura.",
        budget:
          "Suporte, rota, acesso, dimensões e destino são os fatores mais relevantes para este transporte.",
        proof:
          "A imagem principal mostra a categoria atendida e ajuda a diferenciar o serviço de um transporte terrestre comum.",
        faqItems: buildFaqItems(
          serviceTitle,
          "Quando a embarcação ou o jet ski precisa sair de um ponto específico e a operação deve ser planejada.",
          "Informe medidas, acesso, ponto de retirada e destino final.",
          "Dimensões, suporte, acesso e distância afetam a avaliação.",
        ),
      };
    case "/servicos/transporte-de-maquinas-agricolas-fortaleza":
      return {
        whenToContract:
          "Use quando a máquina agrícola precisa de deslocamento e a operação exige análise de peso, altura e acesso.",
        process:
          "A confirmação considera piso, ponto de entrada, altura total e condições de fixação da máquina.",
        care:
          "Informe se há implementos acoplados, rodas livres ou qualquer característica que altere o embarque.",
        budget:
          "Peso, altura, acesso, distância e tipo de máquina influenciam o atendimento.",
        proof:
          "A imagem do serviço registra a categoria atendida e ajuda a validar a operação antes do deslocamento.",
        faqItems: buildFaqItems(
          serviceTitle,
          "Quando a máquina precisa ser transportada com análise prévia e não apenas por remoção simples.",
          "Envie tipo de máquina, local de retirada, destino e condições de acesso.",
          "Peso, altura, piso e distância impactam a operação.",
        ),
      };
    case "/servicos/transporte-de-veiculos-antigos-fortaleza":
      return {
        whenToContract:
          "Use quando o veículo antigo ou colecionável precisa sair sem improviso e com atenção à conservação.",
        process:
          "A avaliação considera mobilidade, bateria, condição dos pneus, ponto de acesso e destino combinado.",
        care:
          "Avise se o veículo está parado há muito tempo, se tem baixa carga elétrica ou se há itens frágeis na carroceria.",
        budget:
          "Conservação, acesso, condição de mobilidade e distância influenciam a operação.",
        proof:
          "A foto principal reforça a categoria de veículo antigo e ajuda a evitar confusão com transporte comum.",
        faqItems: buildFaqItems(
          serviceTitle,
          "Quando o veículo antigo precisa de remoção cuidadosa para oficina, evento, garagem ou outro destino.",
          "Informe o estado do veículo, se ele liga e quais cuidados de conservação são necessários.",
          "Conservação, acesso e distância entram na avaliação.",
        ),
      };
    case "/servicos/transporte-de-empilhadeiras-fortaleza":
      return {
        whenToContract:
          "Use quando a empilhadeira precisa de deslocamento técnico e o local deve ser avaliado antes da operação.",
        process:
          "A confirmação considera piso, acesso, ponto de apoio, peso e a posição de embarque da máquina.",
        care:
          "Informe o centro de gravidade, o estado do piso e qualquer limitação que altere a movimentação da empilhadeira.",
        budget:
          "Peso, piso, acesso, distância e complexidade da manobra influenciam o atendimento.",
        proof:
          "A cobertura visual é mais limitada, então a página destaca a imagem aprovada e o texto técnico da operação.",
        faqItems: buildFaqItems(
          serviceTitle,
          "Quando a empilhadeira precisa ser transportada com avaliação de piso e acesso, sem improviso.",
          "Envie peso aproximado, local de retirada, destino e condição do piso.",
          "Peso, acesso e complexidade da manobra alteram a operação.",
        ),
      };
    case "/servicos/guincho-para-pequenos-caminhoes-fortaleza":
      return {
        whenToContract:
          "Use quando o pequeno caminhão precisa sair de pane, oficina ou de um ponto com acesso reduzido.",
        process:
          "A confirmação considera cabine, largura, condição mecânica e a área necessária para o embarque.",
        care:
          "Informe se há carga, bloqueio de roda, direção dura ou qualquer detalhe que altere a manobra.",
        budget:
          "A rota, o porte, a condição do veículo e o destino afetam o orçamento.",
        proof:
          "A foto principal mostra a categoria já validada e apoia a triagem do atendimento.",
        faqItems: buildFaqItems(
          serviceTitle,
          "Quando o pequeno caminhão não deve seguir rodando ou precisa de remoção programada.",
          "Envie modelo, acesso, condição de mobilidade e destino.",
          "Porte, distância, acesso e condição mecânica influenciam a operação.",
        ),
      };
    case "/servicos/transporte-de-pequenas-cargas-fortaleza":
      return {
        whenToContract:
          "Use quando a pequena carga precisa de transporte e a operação pode ser feita com plataforma e amarração.",
        process:
          "A carga deve ser avaliada pelo volume, pela distribuição e pela necessidade de fixação antes da saída.",
        care:
          "Embale o material, evite peças soltas e confirme se o peso e a distribuição cabem na operação de forma segura.",
        budget:
          "Volume, peso, acesso, rota e necessidade de fixação influenciam o serviço.",
        proof:
          "A foto principal reforça a categoria e ajuda a separar carga leve de transporte de veículo.",
        faqItems: buildFaqItems(
          serviceTitle,
          "Quando a carga precisa de transporte com amarração e avaliação de segurança antes da saída.",
          "Informe volume, peso aproximado, destino e necessidade de apoio adicional.",
          "Peso, volume, rota e fixação alteram o orçamento.",
        ),
      };
    default:
      return {
        whenToContract: `Use quando ${serviceLower} precisar sair de um ponto de risco, pane ou transporte programado.`,
        process:
          "A confirmação começa com localização, tipo de veículo, acesso e destino.",
        care:
          "Informe restrições de acesso, objetos soltos e qualquer detalhe que altere a operação.",
        budget:
          "Rota, acesso, porte, condição do veículo e destino influenciam a operação.",
        proof:
          "A imagem principal documenta a categoria e apoia a triagem visual.",
        faqItems: buildFaqItems(
          serviceTitle,
          `Quando ${serviceLower} precisar sair de um ponto de risco, pane ou transporte programado.`,
          "Informe localização, destino, estado do veículo e restrições de acesso.",
          "Rota, acesso, porte, condição e destino influenciam o serviço.",
        ),
      };
  }
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
              <h2 id="detalhes-title">O que considerar antes do atendimento</h2>
              <p className="hero-section__lead">
                A página organiza o serviço com base no catálogo validado da
                homepage e mantém o foco em solicitação clara, operação segura e
                cobertura regional.
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
              <h2 id="prova-title">Imagem e confirmação de atendimento</h2>
              <p className="hero-section__lead">{supportCopy.proof}</p>
              <p>
                Antes de avançar, envie localização, referência de acesso e uma
                descrição objetiva do veículo ou carga para receber a orientação
                adequada.
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
                Respostas visíveis e coerentes com o serviço exibido nesta
                página, sem copiar automaticamente a mesma FAQ da home.
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
