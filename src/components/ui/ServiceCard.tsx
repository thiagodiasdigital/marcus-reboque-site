import Image from "next/image";
import type { HomeService } from "@/content/home";
import { siteImages } from "@/content/images";
import { buildWhatsappUrl, conversionAttributes } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/ButtonLink";

type ServiceCardProps = {
  service: HomeService;
  index: number;
  id?: string;
};

export function ServiceCard({ service, index, id }: ServiceCardProps) {
  const image = service.imageKey ? siteImages[service.imageKey] : null;
  const whatsappHref = buildWhatsappUrl({
    origin: service.location,
    service: service.title,
    message: service.message,
  });

  return (
    <article className="service-card" data-future-slug={service.futureSlug} id={id}>
      <div className="service-card__media">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 720px) 100vw, (max-width: 1120px) 50vw, 25vw"
            style={{ objectPosition: image.objectPosition }}
          />
        ) : (
          <div className="service-card__institutional" aria-hidden="true">
            <span>MR</span>
            <small>Utilitários</small>
          </div>
        )}
      </div>
      <div className="service-card__body">
        <p className="service-card__number">{String(index + 1).padStart(2, "0")}</p>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <ButtonLink
          href={whatsappHref}
          icon="whatsapp"
          variant="ghost"
          {...conversionAttributes(service.location, service.title)}
        >
          Consultar no WhatsApp
        </ButtonLink>
      </div>
    </article>
  );
}
