import { Differentials } from "@/components/sections/Differentials";
import { EmergencyCta } from "@/components/sections/EmergencyCta";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { GoogleReviewsCta } from "@/components/sections/GoogleReviewsCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { OperationsGallery } from "@/components/sections/OperationsGallery";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { SocialPresence } from "@/components/sections/SocialPresence";
import { TransportSolutions } from "@/components/sections/TransportSolutions";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/json-ld";
import { buildHomeJsonLd } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <JsonLd data={buildHomeJsonLd()} />
      <Header />
      <main id="conteudo">
        <Hero />
        <ServicesGrid />
        <EmergencyCta />
        <HowItWorks />
        <TransportSolutions />
        <ServiceArea />
        <Differentials />
        <OperationsGallery />
        <GoogleReviewsCta />
        <Faq />
        <SocialPresence />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
