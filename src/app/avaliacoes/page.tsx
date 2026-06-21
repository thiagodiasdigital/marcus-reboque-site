import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GoogleReviewsCta } from "@/components/sections/GoogleReviewsCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Avaliacoes | Marcus Reboque",
  description:
    "Acesse o perfil oficial do Google para ver avaliacoes publicas da Marcus Reboque.",
  canonicalPath: "/avaliacoes",
});

export default function AvaliacoesPage() {
  return (
    <main id="conteudo">
      <section className="section section--dark">
        <div className="container split-layout">
          <div>
            <p className="eyebrow">Reputacao</p>
            <h1>Avaliacoes da Marcus Reboque</h1>
            <p className="hero-section__lead">
              As avaliacoes publicas ficam no perfil oficial do Google, sem
              reproduzir notas ou depoimentos fora da fonte original.
            </p>
            <div className="inline-actions">
              <ButtonLink
                href={siteConfig.socials.googleBusinessProfile}
                icon="external"
                rel="noopener noreferrer"
                target="_blank"
                variant="primary"
              >
                Abrir no Google
              </ButtonLink>
              <ButtonLink href="/contato" icon="arrow" variant="secondary">
                Falar no WhatsApp
              </ButtonLink>
            </div>
          </div>
          <div className="process-grid" aria-label="Resumo das avaliacoes">
            <article className="process-item">
              <span>Fonte</span>
              <h3>Perfil oficial</h3>
              <p>Somente a origem externa confirmada deve ser usada para consulta.</p>
            </article>
            <article className="process-item">
              <span>Nota</span>
              <h3>Sem inventar media</h3>
              <p>O site nao cria estrelas, contagem ou depoimentos.</p>
            </article>
            <article className="process-item">
              <span>Uso</span>
              <h3>Consulta publica</h3>
              <p>A pagina encaminha para a fonte real, sem misturar com a oferta.</p>
            </article>
            <article className="process-item">
              <span>Contexto</span>
              <h3>Sem recorte isolado</h3>
              <p>O cliente ve a reputacao dentro do perfil oficial completo.</p>
            </article>
          </div>
        </div>
      </section>

      <GoogleReviewsCta />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Leitura"
            title="Como interpretar as avaliacoes"
            text="A melhor leitura e a que considera atendimento, clareza da resposta e compatibilidade com o tipo de servico procurado."
          />
        </div>
      </section>
    </main>
  );
}
