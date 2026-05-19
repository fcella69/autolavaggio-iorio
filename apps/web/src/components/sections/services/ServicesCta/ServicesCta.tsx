import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";

export function ServicesCta() {
  return (
    <Section>
      <Container>
        <h2 className="section-heading">Vuoi informazioni su un servizio?</h2>
        <div className="section-actions">
          <Button href="/contatti">Richiedi informazioni</Button>
        </div>
      </Container>
    </Section>
  );
}
