import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";

const values = ["Precisione", "Affidabilita", "Pulizia profonda"];

export function AboutValues() {
  return (
    <Section>
      <Container>
        <span className="eyebrow">Valori</span>
        <h2 className="section-heading">Metodo, attenzione e risultati visibili.</h2>
        <div className="card-grid">
          {values.map((value) => (
            <article className="feature-card" key={value}>
              <h3>{value}</h3>
              <p>Descrizione placeholder del valore, pronta per essere raffinata con i testi finali.</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
