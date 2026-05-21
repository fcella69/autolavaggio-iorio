import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";

type HomeWhyChooseProps = {
  data?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    reasons?: Array<{
      title?: string;
      text?: string;
    }>;
  };
};

const fallbackReasons = [
  {
    title: "Qualità e competenza",
    text: "Personale qualificato, esperienza nel trattamento di veicoli diversi e attenzione alla qualità dei prodotti utilizzati."
  },
  {
    title: "Spazi e organizzazione",
    text: "Un impianto di circa 1700 mq, pensato per gestire auto, furgoni, camion e mezzi industriali."
  },
  {
    title: "Area videosorvegliata",
    text: "L’area è controllata con telecamere a circuito interno, per offrire maggiore sicurezza durante il servizio."
  },
  {
    title: "Servizi per aziende",
    text: "Per grandi aziende è prevista la possibilità di ritiro e consegna dell’auto a domicilio per il lavaggio periodico del parco auto."
  }
];

export function HomeWhyChoose({ data }: HomeWhyChooseProps) {
  const reasons = data?.reasons?.length ? data.reasons : fallbackReasons;

  return (
    <Section className="dark-band why-section">
      <Container>
        <div className="why-layout">
          <div>
            <span className="eyebrow">{data?.eyebrow || "Perché sceglierci"}</span>
            <h2 className="section-heading">
              {data?.title || "Serietà, velocità e cura in ogni fase del lavaggio."}
            </h2>
            <p className="section-lead">
              {data?.text ||
                "Autolavaggio Iorio unisce attenzione manuale, competenza operativa e servizi pensati per privati, aziende e veicoli professionali."}
            </p>
          </div>

          <div className="why-list">
            {reasons.map((reason, index) => (
              <article className="why-item" key={`${reason.title}-${index}`}>
                <span className="why-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}