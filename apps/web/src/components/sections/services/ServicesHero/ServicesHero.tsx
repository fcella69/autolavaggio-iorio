import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";

export function ServicesHero() {
  return (
    <Section className="dark-band">
      <Container>
        <span className="eyebrow">Servizi</span>
        <h1 className="section-heading">Lavaggio e pulizia per auto, furgoni e mezzi industriali.</h1>
        <p className="section-lead">
          Una singola pagina servizi, senza sottopagine e senza dropdown.
        </p>
      </Container>
    </Section>
  );
}
