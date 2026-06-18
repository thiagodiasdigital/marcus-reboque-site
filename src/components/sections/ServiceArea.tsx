import Image from "next/image";
import { serviceAreas } from "@/content/home";
import { siteImages } from "@/content/images";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServiceArea() {
  const image = siteImages.serviceArea;

  return (
    <section className="section section--light" id="areas" aria-labelledby="areas-title">
      <div className="container split-layout split-layout--reverse">
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
        <div>
          <SectionHeading
            id="areas-title"
            eyebrow="Áreas atendidas"
            title="Atendimento em Fortaleza e Região Metropolitana"
            text="A confirmação de deslocamento considera rota, horário, tipo de veículo e condições do ponto de retirada."
          />
          <ul className="area-list">
            {serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
