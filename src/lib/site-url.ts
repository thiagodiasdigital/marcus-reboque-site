const DEFAULT_SITE_URL = "https://marcusreboque.com.br";

export function getSiteUrl(): URL {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;
  const siteUrl = new URL(configuredUrl);

  siteUrl.pathname = "/";
  siteUrl.search = "";
  siteUrl.hash = "";

  return siteUrl;
}

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, getSiteUrl()).toString();
}

export function isIndexable(): boolean {
  return process.env.NEXT_PUBLIC_INDEXABLE === "true";
}
