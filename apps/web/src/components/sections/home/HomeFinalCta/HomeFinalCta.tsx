import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";

export function HomeFinalCta() {
  return (
    <Section className="dark-band">
      <Container>
        <div className="content-grid">
          <div>
            <span className="eyebrow">Contatti</span>
            <h2 className="section-heading">Prenota o richiedi informazioni.</h2>
            <p className="section-lead">
              Via Agnano Astroni, 123/131 - Napoli. Telefono, email e orari definitivi saranno
              collegati dal CMS.
            </p>
          </div>
          <div className="section-actions">
            <Button href="/contatti">Contattaci</Button>
            <Button href="tel:+390000000000" variant="ghost">Chiama ora</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
