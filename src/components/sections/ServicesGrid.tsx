import { services } from "@/content/home";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function ServicesGrid() {
  return (
    <section
      className="section section--light"
      id="servicos"
      aria-labelledby="servicos-title"
    >
      <div className="container">
        <SectionHeading
          id="servicos-title"
          eyebrow="Serviços"
          title="Guincho e transporte para diferentes necessidades"
          text="Atendimentos emergenciais e programados, sempre com avaliação do veículo, rota e condições de acesso."
        >
          <div className="inline-actions">
            <ButtonLink href="/servicos" icon="arrow" variant="dark">
              Ver hub completo de serviços
            </ButtonLink>
          </div>
        </SectionHeading>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard index={index} key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
