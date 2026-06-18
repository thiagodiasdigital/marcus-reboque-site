import Image from "next/image";
import { siteImages } from "@/content/images";
import { siteConfig } from "@/content/site";
import { JsonLd } from "@/components/seo/json-ld";
import { buildHomeJsonLd } from "@/lib/schema";

export default function Home() {
  const hero = siteImages.homepageHero;

  return (
    <main className="technical-page">
      <JsonLd data={buildHomeJsonLd()} />

      <section className="technical-hero" aria-labelledby="homepage-title">
        <div className="technical-copy">
          <p className="technical-notice">
            Fundacao tecnica, nao layout final.
          </p>
          <p className="technical-kicker">{siteConfig.service.hoursLabel}</p>
          <h1 id="homepage-title">Marcus Reboque</h1>
          <p className="technical-summary">
            Site em preparacao tecnica para atendimento de reboque em Fortaleza
            e Regiao Metropolitana.
          </p>

          <address className="technical-contact">
            <span>{siteConfig.location.city}, {siteConfig.location.state}</span>
            <a href={siteConfig.contact.phoneHref}>
              {siteConfig.contact.phoneFormatted}
            </a>
          </address>

          <div className="technical-actions" aria-label="Contato">
            <a className="technical-button primary" href={siteConfig.whatsapp.url}>
              WhatsApp
            </a>
            <a className="technical-button secondary" href={siteConfig.contact.phoneHref}>
              Ligar agora
            </a>
          </div>
        </div>

        <figure className="technical-media">
          <Image
            src={hero.src}
            alt={hero.alt}
            width={hero.width}
            height={hero.height}
            priority
            sizes="(max-width: 768px) 100vw, 48vw"
          />
          <figcaption>Imagem operacional aprovada para a homepage.</figcaption>
        </figure>
      </section>
    </main>
  );
}
