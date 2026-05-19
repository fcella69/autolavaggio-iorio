import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";

const services = [
  "Lavaggio auto a mano",
  "Lavaggio mezzi industriali",
  "Sanificazione auto"
];

export function HomeServicesPreview() {
  return (
    <Section>
      <Container>
        <span className="eyebrow">Servizi</span>
        <h2 className="section-heading">Soluzioni per auto private e veicoli da lavoro.</h2>
        <p className="section-lead">
          Una preview dei principali servizi, pronta per essere alimentata da Sanity.
        </p>
        <div className="card-grid">
          {services.map((service) => (
            <article className="feature-card" key={service}>
              <div className="placeholder-media" style={{ minHeight: 180, margin: "-24px -24px 22px" }} />
              <h3>{service}</h3>
              <p>Descrizione placeholder del servizio, sintetica e orientata al beneficio.</p>
            </article>
          ))}
        </div>
        <div className="section-actions">
          <Button href="/servizi">Vedi tutti i servizi</Button>
        </div>
      </Container>
    </Section>
  );
}
