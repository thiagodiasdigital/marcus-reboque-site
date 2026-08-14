import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function NotFound() {
  return (
    <main className="technical-page">
      <section className="technical-hero" aria-labelledby="not-found-title">
        <div className="technical-copy">
          <p className="technical-notice">
            Fundação técnica, não layout final.
          </p>
          <h1 id="not-found-title">Página não encontrada</h1>
          <p className="technical-summary">
            O site da Marcus Reboque ainda está em preparação técnica.
          </p>
          <div className="technical-actions">
            <Link className="technical-button secondary" href="/">
              Voltar ao início
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
