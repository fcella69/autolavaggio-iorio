import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";

export function ContactCta() {
  return (
    <Section className="dark-band">
      <Container>
        <h2 className="section-heading">Passa in sede o contattaci prima di arrivare.</h2>
        <div className="section-actions">
          <Button href="tel:+390000000000">Chiama ora</Button>
        </div>
      </Container>
    </Section>
  );
}
