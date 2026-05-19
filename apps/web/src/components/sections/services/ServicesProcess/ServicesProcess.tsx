import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";

const steps = ["Accoglienza", "Prelavaggio", "Trattamento", "Controllo finale"];

export function ServicesProcess() {
  return (
    <Section className="dark-band">
      <Container>
        <span className="eyebrow">Metodo</span>
        <h2 className="section-heading">Un processo semplice e ordinato.</h2>
        <div className="card-grid">
          {steps.map((step) => (
            <article className="feature-card dark-card" key={step}>
              <h3>{step}</h3>
              <p>Passaggio placeholder per raccontare il flusso del servizio.</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
