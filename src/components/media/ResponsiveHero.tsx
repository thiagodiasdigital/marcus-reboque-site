import { getImageProps } from "next/image";
import { siteImages } from "@/content/images";

export function ResponsiveHero() {
  const desktop = siteImages.homepageHeroDesktop;
  const mobile = siteImages.homepageHeroMobile;
  const common = {
    alt: desktop.alt,
    sizes: "100vw",
  };
  const {
    props: { srcSet: desktopSrcSet, ...imageProps },
  } = getImageProps({
    ...common,
    src: desktop.src,
    width: desktop.width,
    height: desktop.height,
  });
  const {
    props: { srcSet: mobileSrcSet },
  } = getImageProps({
    ...common,
    src: mobile.src,
    width: mobile.width,
    height: mobile.height,
  });
  const heroImageProps = { ...imageProps };
  delete heroImageProps.loading;

  return (
    <picture className="hero-picture">
      <source media="(max-width: 767px)" srcSet={mobileSrcSet} />
      <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
      <img
        {...heroImageProps}
        alt={desktop.alt}
        decoding="async"
        fetchPriority="high"
      />
    </picture>
  );
}
