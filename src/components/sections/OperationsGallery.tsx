import Image from "next/image";
import { galleryImages } from "@/content/home";
import { siteImages } from "@/content/images";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function OperationsGallery() {
  return (
    <section className="section section--light" aria-labelledby="galeria-title">
      <div className="container">
        <SectionHeading
          id="galeria-title"
          eyebrow="Galeria"
          title="Operações e transportes reais"
          text="Seleção inicial com diversidade de motos, carros, embarcações, máquinas, veículos antigos e pequenas cargas."
        />
        <div className="gallery-grid">
          {galleryImages.map((imageKey) => {
            const image = siteImages[imageKey];

            return (
              <figure className="gallery-item" key={image.id}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 720px) 100vw, (max-width: 1120px) 50vw, 33vw"
                  style={{ objectPosition: image.objectPosition }}
                />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
