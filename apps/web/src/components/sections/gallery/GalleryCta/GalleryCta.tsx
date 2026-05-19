import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";

export function GalleryCta() {
  return (
    <Section className="dark-band">
      <Container>
        <h2 className="section-heading">Vuoi vedere il risultato sul tuo veicolo?</h2>
        <div className="section-actions">
          <Button href="/contatti">Contattaci</Button>
        </div>
      </Container>
    </Section>
  );
}
