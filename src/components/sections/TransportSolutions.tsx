import Image from "next/image";
import { transportSolutions } from "@/content/home";
import { siteImages } from "@/content/images";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TransportSolutions() {
  return (
    <section className="section section--dark" aria-labelledby="solucoes-title">
      <div className="container">
        <SectionHeading
          id="solucoes-title"
          eyebrow="Soluções"
          title="Auto socorro e transporte sob medida"
          text="A operação é direcionada para remoção e transporte. Serviços mecânicos não são divulgados no site."
        />
        <div className="solutions-grid">
          {transportSolutions.map((solution) => {
            const image = siteImages[solution.imageKey];

            return (
              <article className="solution-card" key={solution.title}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectPosition: image.objectPosition }}
                />
                <div>
                  <h3>{solution.title}</h3>
                  <p>{solution.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
