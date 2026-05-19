import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";

const services = [
  "Lavaggio auto a mano",
  "Lavaggio camion e mezzi industriali",
  "Lavaggio furgoni e veicoli commerciali",
  "Sanificazione auto",
  "Pulizia interni",
  "Ceratura",
  "Prelavaggio",
  "Risciacquo e asciugatura"
];

export function ServicesGrid() {
  return (
    <Section>
      <Container>
        <div className="card-grid">
          {services.map((service) => (
            <article className="feature-card" key={service}>
              <h3>{service}</h3>
              <p>Descrizione placeholder del servizio con benefici, tempi e dettagli operativi.</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
