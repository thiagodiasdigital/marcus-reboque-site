import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function SocialPresence() {
  return (
    <section className="section section--light" aria-labelledby="presenca-title">
      <div className="container social-presence">
        <SectionHeading
          id="presenca-title"
          eyebrow="Presença oficial"
          title="Marcus Reboque nas redes"
          text="Perfis oficiais configurados para consulta pública, sem widgets, scripts externos ou avaliações reproduzidas no site."
        />
        <SocialLinks />
      </div>
    </section>
  );
}
