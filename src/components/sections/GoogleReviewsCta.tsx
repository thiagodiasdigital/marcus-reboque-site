import { siteConfig } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GoogleReviewsCta() {
  const googleProfile = siteConfig.socials.googleBusinessProfile;

  return (
    <section className="section reviews-band" aria-labelledby="reviews-title">
      <div className="container reviews-band__inner">
        <SectionHeading
          id="reviews-title"
          eyebrow="Reputação"
          title="Confira a reputação da Marcus Reboque no Google"
          text="Avaliações públicas devem ser consultadas apenas no perfil oficial confirmado, sem reproduzir notas ou depoimentos no site."
        />
        <ButtonLink
          aria-label="Ver avaliações da Marcus Reboque no Google em nova aba"
          href={googleProfile}
          icon="external"
          rel="noopener noreferrer"
          target="_blank"
          variant="primary"
        >
          Ver avaliações no Google
        </ButtonLink>
      </div>
    </section>
  );
}
