import Image from "next/image";
import { differentials } from "@/content/home";
import { siteImages } from "@/content/images";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Differentials() {
  const image = siteImages.equipmentFixation;

  return (
    <section className="section section--muted" aria-labelledby="diferenciais-title">
      <div className="container split-layout">
        <div>
          <SectionHeading
            id="diferenciais-title"
            eyebrow="Diferenciais"
            title="Operação prática, direta e sem promessa artificial"
            text="A comunicação do site fica restrita ao que está confirmado: guincho, reboque, orientação e transporte."
          />
          <ul className="differentials-list">
            {differentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="split-layout__media">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 900px) 100vw, 36vw"
            style={{ objectPosition: image.objectPosition }}
          />
        </div>
      </div>
    </section>
  );
}
