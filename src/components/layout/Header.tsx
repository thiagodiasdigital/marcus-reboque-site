import Image from "next/image";
import Link from "next/link";
import { headerLinks } from "@/content/home";
import { siteImages } from "@/content/images";
import { siteConfig } from "@/content/site";
import { buildWhatsappUrl, conversionAttributes } from "@/lib/whatsapp";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Header() {
  const navigationLinks = [
    { label: "Hub de serviços", href: "/servicos" },
    ...headerLinks,
  ];
  const whatsappHref = buildWhatsappUrl({
    origin: "header",
    message: "Olá, preciso de atendimento da Marcus Reboque.",
  });

  return (
    <header className="site-header">
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="Marcus Reboque - início">
          <Image
            src={siteImages.logo.src}
            alt=""
            width={56}
            height={56}
            sizes="56px"
          />
          <span>
            <strong>{siteConfig.name}</strong>
            <small>Guincho 24h</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Principal">
          {navigationLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="desktop-actions">
          <ButtonLink
            href={whatsappHref}
            icon="whatsapp"
            variant="primary"
            {...conversionAttributes("header")}
          >
            WhatsApp
          </ButtonLink>
          <ButtonLink
            href={siteConfig.contact.phoneHref}
            icon="phone"
            variant="secondary"
          >
            {siteConfig.contact.phoneFormatted}
          </ButtonLink>
        </div>

        <MobileMenu
          links={navigationLinks}
          phoneHref={siteConfig.contact.phoneHref}
          phoneLabel={siteConfig.contact.phoneFormatted}
          whatsappHref={whatsappHref}
        />
      </div>
    </header>
  );
}
