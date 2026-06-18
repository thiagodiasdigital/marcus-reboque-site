import Image from "next/image";
import { howItWorksSteps } from "@/content/home";
import { siteImages } from "@/content/images";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  const image = siteImages.howItWorksCaminhonete;

  return (
    <section className="section section--muted" id="como-funciona" aria-labelledby="como-funciona-title">
      <div className="container split-layout">
        <div>
          <SectionHeading
            id="como-funciona-title"
            eyebrow="Como funciona"
            title="Do pedido ao destino com orientação clara"
            text="O atendimento começa com informações objetivas para confirmar viabilidade, rota e preparo do veículo."
          />
          <div className="process-grid">
            {howItWorksSteps.map((step, index) => (
              <article className="process-item" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
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
