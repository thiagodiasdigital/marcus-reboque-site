import type { Metadata } from "next";
import { siteImages } from "@/content/images";
import { siteConfig } from "@/content/site";
import { getSiteUrl, isIndexable } from "@/lib/site-url";

export function buildBaseMetadata(): Metadata {
  const indexable = isIndexable();
  const title = "Marcus Reboque | Fundacao tecnica";
  const description = siteConfig.description;

  return {
    metadataBase: getSiteUrl(),
    title,
    description,
    applicationName: siteConfig.name,
    alternates: {
      canonical: "/",
    },
    icons: {
      icon: siteImages.logo.src,
      shortcut: siteImages.logo.src,
      apple: siteImages.logo.src,
    },
    openGraph: {
      title,
      description,
      url: "/",
      siteName: siteConfig.name,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: siteImages.homepageHero.src,
          width: siteImages.homepageHero.width,
          height: siteImages.homepageHero.height,
          alt: siteImages.homepageHero.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteImages.homepageHero.src],
    },
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
      },
    },
  };
}
