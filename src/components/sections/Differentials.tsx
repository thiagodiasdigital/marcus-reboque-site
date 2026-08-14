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
            title="Por que chamar a Marcus Reboque"
            text="A Marcus Reboque prioriza orientação clara, avaliação antes do embarque e comunicação direta pelo WhatsApp."
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
