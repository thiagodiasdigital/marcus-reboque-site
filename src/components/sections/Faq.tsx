import { faqItems } from "@/content/home";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq() {
  return (
    <section className="section section--muted" id="faq" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <SectionHeading
          id="faq-title"
          eyebrow="FAQ"
          title="Perguntas frequentes"
          text="Respostas objetivas para solicitar guincho, reboque e transporte com informações completas."
        />
        <div className="faq-list">
          {faqItems.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
