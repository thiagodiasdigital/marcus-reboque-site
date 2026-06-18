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
        {googleProfile ? (
          <ButtonLink href={googleProfile} icon="external" variant="primary">
            Ver avaliações no Google
          </ButtonLink>
        ) : (
          <span className="button-link button-link--disabled" aria-disabled="true">
            Ver avaliações no Google
          </span>
        )}
      </div>
    </section>
  );
}
