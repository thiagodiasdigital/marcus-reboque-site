import { heroSignals } from "@/content/home";
import { siteConfig } from "@/content/site";
import { buildWhatsappUrl, conversionAttributes } from "@/lib/whatsapp";
import { ResponsiveHero } from "@/components/media/ResponsiveHero";
import { ScrollMotionHero } from "@/components/media/ScrollMotionHero";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Hero() {
  const whatsappHref = buildWhatsappUrl({
    origin: "hero",
    message:
      "Olá, preciso de guincho, reboque ou auto socorro 24h em Fortaleza.",
  });

  return (
    <ScrollMotionHero>
      <section className="hero-section" aria-labelledby="homepage-title">
        <div className="hero-section__media" aria-hidden="true">
          <ResponsiveHero />
        </div>
        <div className="hero-section__overlay" />
        <div className="hero-section__content">
          <p className="eyebrow">{siteConfig.service.hoursLabel}</p>
          <h1 id="homepage-title">
            Guincho, Reboque e Auto Socorro 24h em Fortaleza
          </h1>
          <p className="hero-section__lead">
            Atendimento emergencial e transporte programado para motos, carros,
            caminhonetes, vans, barcos, máquinas, veículos especiais e pequenas
            cargas em Fortaleza e Região Metropolitana.
          </p>
          <div className="hero-section__actions" aria-label="Contato rápido">
            <ButtonLink
              href={whatsappHref}
              icon="whatsapp"
              variant="primary"
              {...conversionAttributes("hero")}
            >
              Chamar no WhatsApp
            </ButtonLink>
            <ButtonLink
              href={siteConfig.contact.phoneHref}
              icon="phone"
              variant="secondary"
            >
              Ligar agora
            </ButtonLink>
          </div>
          <ul className="hero-section__signals" aria-label="Informações rápidas">
            {heroSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </div>
      </section>
    </ScrollMotionHero>
  );
}
