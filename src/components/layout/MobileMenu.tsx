"use client";

import { useEffect, useId, useState } from "react";
import type { NavLink } from "@/content/home";
import { conversionAttributes } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/ButtonLink";

type MobileMenuProps = {
  links: NavLink[];
  phoneHref: string;
  phoneLabel: string;
  whatsappHref: string;
};

export function MobileMenu({
  links,
  phoneHref,
  phoneLabel,
  whatsappHref,
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="mobile-menu">
      <button
        className="mobile-menu__button"
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="mobile-menu__bars" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="visually-hidden">Abrir menu</span>
      </button>

      <div className="mobile-menu__panel" data-open={open} id={menuId}>
        <nav aria-label="Menu principal móvel">
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__actions">
          <ButtonLink
            href={whatsappHref}
            icon="whatsapp"
            variant="primary"
            {...conversionAttributes("menu-movel")}
          >
            Chamar no WhatsApp
          </ButtonLink>
          <ButtonLink href={phoneHref} icon="phone" variant="secondary">
            {phoneLabel}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
