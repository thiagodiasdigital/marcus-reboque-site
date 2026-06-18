import Image from "next/image";
import { siteImages } from "@/content/images";
import { siteConfig } from "@/content/site";
import { buildWhatsappUrl, conversionAttributes } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function FinalCta() {
  const image = siteImages.finalTruck;
  const whatsappHref = buildWhatsappUrl({
    origin: "cta-final",
    message: "Olá, preciso solicitar atendimento da Marcus Reboque.",
  });

  return (
    <section className="section final-cta" aria-labelledby="final-cta-title">
      <div className="container final-cta__inner">
        <div>
          <p className="eyebrow">Atendimento 24h</p>
          <h2 id="final-cta-title">
            Solicite guincho, reboque ou transporte em Fortaleza
          </h2>
          <p>
            Envie sua localização, o tipo de veículo e o destino. A Marcus
            Reboque orienta a próxima etapa pelo WhatsApp ou telefone.
          </p>
          <div className="inline-actions">
            <ButtonLink
              href={whatsappHref}
              icon="whatsapp"
              variant="primary"
              {...conversionAttributes("cta-final")}
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
        </div>
        <div className="final-cta__media">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 900px) 100vw, 34vw"
            style={{ objectPosition: image.objectPosition }}
          />
        </div>
      </div>
    </section>
  );
}
