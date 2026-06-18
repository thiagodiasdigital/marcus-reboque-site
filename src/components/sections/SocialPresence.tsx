import { siteConfig } from "@/content/site";
import { buildWhatsappUrl, conversionAttributes } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SocialPresence() {
  const whatsappHref = buildWhatsappUrl({
    origin: "presenca-oficial",
    message: "Olá, vim pelo site oficial da Marcus Reboque.",
  });

  return (
    <section className="section section--light" aria-labelledby="presenca-title">
      <div className="container social-presence">
        <SectionHeading
          id="presenca-title"
          eyebrow="Presença oficial"
          title="Canais oficiais disponíveis nesta fase"
          text="Links de redes sociais e Perfil da Empresa no Google entram somente após validação oficial."
        />
        <div className="official-links">
          <a href={siteConfig.canonicalUrl}>Site oficial</a>
          <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phoneFormatted}</a>
          <ButtonLink
            href={whatsappHref}
            icon="whatsapp"
            variant="ghost"
            {...conversionAttributes("presenca-oficial")}
          >
            WhatsApp oficial
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
