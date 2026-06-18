import { services } from "@/content/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function ServicesGrid() {
  return (
    <section className="section section--light" id="servicos" aria-labelledby="servicos-title">
      <div className="container">
        <SectionHeading
          id="servicos-title"
          eyebrow="Serviços"
          title="Guincho e transporte para diferentes necessidades"
          text="Atendimentos emergenciais e programados, sempre com avaliação do veículo, rota e condições de acesso."
        />
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              index={index}
              key={service.title}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
