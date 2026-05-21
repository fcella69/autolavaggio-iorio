import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import { sanityImageCss } from "@/lib/sanity/image";

type ServicePreviewItem = {
  label?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
};

type HomeServicesPreviewProps = {
  data?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    items?: ServicePreviewItem[];
    cta?: {
      label?: string;
      href?: string;
    };
  };
};

const fallbackServices: ServicePreviewItem[] = [
  {
    label: "Servizio 01",
    title: "Lavaggio auto a mano",
    description:
      "Prelavaggio, spugnatura, risciacquo, asciugatura, ceratura e pulizia interni per un risultato curato in ogni fase.",
    imageUrl: undefined,
    imageAlt: "Lavaggio auto a mano"
  },
  {
    label: "Servizio 02",
    title: "Camion e mezzi industriali",
    description:
      "Servizi dedicati a veicoli commerciali, camion, mezzi industriali e automezzi per attività professionali.",
    imageUrl: undefined,
    imageAlt: "Lavaggio camion e mezzi industriali"
  },
  {
    label: "Servizio 03",
    title: "Sanificazione auto",
    description:
      "Soluzioni per igienizzare gli interni del veicolo e migliorare comfort, pulizia e qualità dell’abitacolo.",
    imageUrl: undefined,
    imageAlt: "Sanificazione auto"
  }
];

export function HomeServicesPreview({ data }: HomeServicesPreviewProps) {
  const services: ServicePreviewItem[] = data?.items?.length ? data.items : fallbackServices;

  return (
    <Section>
      <Container>
        <div className="services-preview-head">
          <div>
            <span className="eyebrow">{data?.eyebrow || "Servizi"}</span>
            <h2 className="section-heading">
              {data?.title || "Dal lavaggio auto alla cura dei mezzi da lavoro."}
            </h2>
          </div>

          <p className="services-preview-note">
            {data?.text ||
              "Una pagina servizi unica, semplice da consultare, pensata per valorizzare le lavorazioni già presenti nel vecchio sito senza disperdere il valore SEO."}
          </p>
        </div>

        <div className="card-grid">
          {services.map((service, index) => {
            const mediaStyle = service.imageUrl
              ? ({
                "--cms-bg": sanityImageCss(service.imageUrl, {
                  width: 900,
                  height: 560,
                  quality: 80,
                  fit: "crop"
                })
              } as CSSProperties)
              : undefined;

            return (
              <article
                className="feature-card service-preview-card"
                key={`${service.title || "service"}-${index}`}
              >
                <div
                  className={
                    service.imageUrl
                      ? "cms-media service-preview-media"
                      : "placeholder-media service-preview-media"
                  }
                  style={mediaStyle}
                  aria-label={service.imageAlt || service.title || "Servizio Autolavaggio Iorio"}
                />

                <div className="service-preview-body">
                  <span className="service-preview-tag">
                    {service.label || `Servizio ${String(index + 1).padStart(2, "0")}`}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="section-actions">
          <Button href={data?.cta?.href || "/servizi"}>
            {data?.cta?.label || "Scopri tutti i servizi"}
          </Button>
        </div>
      </Container>
    </Section>
  );
}