import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";

type HomeFinalCtaProps = {
  data?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    contactCards?: Array<{
      label?: string;
      value?: string;
    }>;
    primaryCta?: {
      label?: string;
      href?: string;
    };
    secondaryCta?: {
      label?: string;
      href?: string;
    };
  };
};

const fallbackContactCards = [
  {
    label: "Indirizzo",
    value: "Via Agnano Astroni, 131/123 - Napoli"
  },
  {
    label: "Telefono",
    value: "+39 338 235 0148"
  },
  {
    label: "Orari",
    value: "Lun - Sab: 08:00 - 18:30"
  }
];

export function HomeFinalCta({ data }: HomeFinalCtaProps) {
  const contactCards = data?.contactCards?.length ? data.contactCards : fallbackContactCards;

  return (
    <Section className="dark-band">
      <Container>
        <div className="final-cta-panel">
          <div className="final-cta-grid">
            <div>
              <span className="eyebrow">{data?.eyebrow || "Contatti"}</span>
              <h2 className="section-heading">
                {data?.title || "Passa da Autolavaggio Iorio ad Agnano."}
              </h2>
              <p className="section-lead">
                {data?.text ||
                  "Ci trovi in Via Agnano Astroni, 131/123 a Napoli. L’autolavaggio è aperto dal lunedì al sabato, con servizi per auto, furgoni, camion e mezzi industriali."}
              </p>

              <div className="contact-mini-grid">
                {contactCards.map((card, index) => (
                  <div className="contact-mini-card" key={`${card.label}-${index}`}>
                    <span>{card.label}</span>
                    <strong>{card.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-actions">
              <Button href={data?.primaryCta?.href || "/contatti"}>
                {data?.primaryCta?.label || "Vai ai contatti"}
              </Button>
              <Button href={data?.secondaryCta?.href || "tel:+393382350148"} variant="ghost">
                {data?.secondaryCta?.label || "Chiama ora"}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}