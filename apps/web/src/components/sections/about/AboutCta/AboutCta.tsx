import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";

export function AboutCta() {
  return (
    <Section className="dark-band">
      <Container>
        <h2 className="section-heading">Hai bisogno di un lavaggio professionale?</h2>
        <div className="section-actions">
          <Button href="/contatti">Parla con noi</Button>
          <Button href="/servizi" variant="ghost">Scopri i servizi</Button>
        </div>
      </Container>
    </Section>
  );
}
