import type { Metadata } from "next";
import { siteImages } from "@/content/images";
import { siteConfig } from "@/content/site";
import { absoluteUrl, getSiteUrl, isIndexable } from "@/lib/site-url";

export function buildBaseMetadata(): Metadata {
  const indexable = isIndexable();
  const title = siteConfig.seoTitle;
  const description = siteConfig.seoDescription;
  const hero = siteImages.homepageHeroDesktop;

  return {
    metadataBase: getSiteUrl(),
    title,
    description,
    applicationName: siteConfig.name,
    alternates: {
      canonical: absoluteUrl("/"),
    },
    icons: {
      icon: siteImages.logo.src,
      shortcut: siteImages.logo.src,
      apple: siteImages.logo.src,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl("/"),
      siteName: siteConfig.name,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: absoluteUrl(hero.src),
          width: hero.width,
          height: hero.height,
          alt: hero.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(hero.src)],
    },
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
        noimageindex: !indexable,
      },
    },
  };
}
