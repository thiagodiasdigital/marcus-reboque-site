import Image from "next/image";
import { headerLinks } from "@/content/home";
import { siteImages } from "@/content/images";
import { siteConfig } from "@/content/site";
import { buildWhatsappUrl, conversionAttributes } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    { label: "Hub de serviços", href: "/servicos" },
    ...headerLinks,
  ];
  const whatsappHref = buildWhatsappUrl({
    origin: "footer",
    message: "Olá, preciso falar com a Marcus Reboque.",
  });

  return (
    <footer className="site-footer" id="contato">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Image
            src={siteImages.logo.src}
            alt=""
            width={64}
            height={64}
            sizes="64px"
          />
          <div>
            <strong>{siteConfig.name}</strong>
            <p>
              Guincho, reboque e auto socorro 24h em Fortaleza e Região
              Metropolitana.
            </p>
            <p>{siteConfig.service.hoursLabel}</p>
          </div>
        </div>

        <nav aria-label="Links do rodapé" className="site-footer__links">
          {footerLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <address className="site-footer__contact">
          <span>{siteConfig.location.address.label}</span>
          <span>{siteConfig.location.serviceAreaLabel}</span>
          <a href={siteConfig.contact.phoneHref}>
            {siteConfig.contact.phoneFormatted}
          </a>
          <ButtonLink
            href={whatsappHref}
            icon="whatsapp"
            variant="primary"
            {...conversionAttributes("footer")}
          >
            Chamar no WhatsApp
          </ButtonLink>
          <a
            className="site-footer__map"
            href={siteConfig.socials.googleBusinessProfile}
            rel="noopener noreferrer"
            target="_blank"
          >
            Ver endereço no Google
          </a>
        </address>

        <div className="site-footer__social">
          <strong>Redes oficiais</strong>
          <SocialLinks compact />
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {currentYear} {siteConfig.name}</span>
        <span>Domínio oficial: marcusreboque.com.br</span>
      </div>
    </footer>
  );
}
