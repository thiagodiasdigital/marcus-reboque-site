const LOCAL_SITE_URL = "http://localhost:3000";

export function getSiteUrl(): URL {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) {
    return new URL(LOCAL_SITE_URL);
  }

  return new URL(configuredUrl);
}

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, getSiteUrl()).toString();
}

export function isIndexable(): boolean {
  return process.env.NEXT_PUBLIC_INDEXABLE === "true";
}
