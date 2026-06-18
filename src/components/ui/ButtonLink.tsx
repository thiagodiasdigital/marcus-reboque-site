import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "dark" | "ghost";
type ButtonIcon = "whatsapp" | "phone" | "arrow" | "external";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ButtonIcon;
};

function Icon({ name }: { name: ButtonIcon }) {
  const common = {
    "aria-hidden": true,
    className: "button-link__icon",
    focusable: false,
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
  } as const;

  if (name === "phone") {
    return (
      <svg {...common}>
        <path d="M6.6 3.8 9.2 3l2.3 5-1.8 1.2c.9 1.8 2.3 3.2 4.1 4.1l1.2-1.8 5 2.3-.8 2.6c-.3 1-1.2 1.6-2.2 1.6C10.9 18 6 13.1 6 7c0-1 .6-1.9 1.6-2.2Z" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg {...common}>
        <path d="M12 4a8 8 0 0 0-6.9 12l-1 3.6 3.7-1A8 8 0 1 0 12 4Zm-3.1 5.1c.1-.3.3-.4.6-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c.7 1.2 1.6 2.1 2.8 2.7l.5-.4c.2-.2.5-.2.7-.1l1.6.7c.3.1.4.3.4.6v.5c0 .3-.2.5-.5.6-.7.3-1.5.3-2.4 0-2.5-.8-4.5-2.8-5.3-5.3-.3-.9-.3-1.7-.1-2.4Z" />
      </svg>
    );
  }

  if (name === "external") {
    return (
      <svg {...common}>
        <path d="M7 5h12v12h-2V8.4l-9.3 9.3-1.4-1.4L15.6 7H7V5Z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M13.3 5.3 20 12l-6.7 6.7-1.4-1.4 4.3-4.3H4v-2h12.2l-4.3-4.3 1.4-1.4Z" />
    </svg>
  );
}

export function ButtonLink({
  children,
  className,
  variant = "primary",
  icon,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={["button-link", `button-link--${variant}`, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {icon ? <Icon name={icon} /> : null}
      <span>{children}</span>
    </a>
  );
}
