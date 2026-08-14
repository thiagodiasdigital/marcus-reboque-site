import Image from "next/image";
import { emergencySteps } from "@/content/home";
import { siteImages } from "@/content/images";
import { siteConfig } from "@/content/site";
import { buildWhatsappUrl, conversionAttributes } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function EmergencyCta() {
  const image = siteImages.emergencyCaminhonete;
  const whatsappHref = buildWhatsappUrl({
    origin: "emergencia",
    message: "Olá, preciso de guincho agora em Fortaleza.",
  });

  return (
    <section className="section emergency-band" aria-labelledby="emergency-title">
      <div className="container emergency-band__inner">
        <div className="emergency-band__copy">
          <p className="eyebrow">Atendimento emergencial</p>
          <h2 id="emergency-title">Precisa de guincho agora em Fortaleza?</h2>
          <p>
            Fale pelo WhatsApp ou telefone e envie as informações do veículo.
            A orientação depende da localização, do destino e das condições do
            atendimento.
          </p>
          <ol className="steps-list">
            {emergencySteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <div className="inline-actions">
            <ButtonLink
              href={whatsappHref}
              icon="whatsapp"
              variant="primary"
              {...conversionAttributes("emergencia")}
            >
              Chamar no WhatsApp
            </ButtonLink>
            <ButtonLink
              href={siteConfig.contact.phoneHref}
              icon="phone"
              variant="dark"
            >
              {siteConfig.contact.phoneFormatted}
            </ButtonLink>
          </div>
        </div>
        <div className="emergency-band__media">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 900px) 100vw, 44vw"
            style={{ objectPosition: image.objectPosition }}
          />
        </div>
      </div>
    </section>
  );
}
