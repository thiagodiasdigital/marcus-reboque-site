import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function NotFound() {
  return (
    <main className="technical-page">
      <section className="technical-hero" aria-labelledby="not-found-title">
        <div className="technical-copy">
          <p className="technical-notice">
            Fundacao tecnica, nao layout final.
          </p>
          <h1 id="not-found-title">Pagina nao encontrada</h1>
          <p className="technical-summary">
            O site da Marcus Reboque ainda esta em preparacao tecnica.
          </p>
          <div className="technical-actions">
            <Link className="technical-button secondary" href="/">
              Voltar ao inicio
            </Link>
            <a className="technical-button primary" href={siteConfig.whatsapp.url}>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
