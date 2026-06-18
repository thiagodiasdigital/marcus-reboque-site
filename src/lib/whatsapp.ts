import { siteConfig } from "@/content/site";

type WhatsappOptions = {
  origin: string;
  service?: string;
  message?: string;
};

export function buildWhatsappUrl({
  message,
}: WhatsappOptions): string {
  const text = message || siteConfig.whatsapp.defaultMessage;
  const params = new URLSearchParams({
    text,
  });

  const url = new URL(siteConfig.whatsapp.url);
  url.search = params.toString();

  return url.toString();
}

export function conversionAttributes(origin: string, service?: string) {
  return {
    "data-conversion": "whatsapp",
    "data-location": origin,
    ...(service ? { "data-service": service } : {}),
  };
}
