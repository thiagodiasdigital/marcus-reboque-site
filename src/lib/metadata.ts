import type { Metadata } from "next";
import { siteImages } from "@/content/images";
import type { SiteImage } from "@/content/images";
import { siteConfig } from "@/content/site";
import { absoluteUrl, getSiteUrl, isIndexable } from "@/lib/site-url";

type PageMetadataOptions = {
  title: string;
  description: string;
  canonicalPath: string;
  image?: SiteImage;
};

export function buildPageMetadata({
  title,
  description,
  canonicalPath,
  image = siteImages.homepageHeroDesktop,
}: PageMetadataOptions): Metadata {
  const indexable = isIndexable();

  return {
    metadataBase: getSiteUrl(),
    title,
    description,
    applicationName: siteConfig.name,
    alternates: {
      canonical: absoluteUrl(canonicalPath),
    },
    icons: {
      icon: siteImages.logo.src,
      shortcut: siteImages.logo.src,
      apple: siteImages.logo.src,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(canonicalPath),
      siteName: siteConfig.name,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: absoluteUrl(image.src),
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image.src)],
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

export function buildBaseMetadata(): Metadata {
  return buildPageMetadata({
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    canonicalPath: "/",
  });
}
