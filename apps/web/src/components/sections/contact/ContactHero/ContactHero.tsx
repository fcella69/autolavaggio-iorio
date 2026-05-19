import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";

export function ContactHero() {
  return (
    <Section className="dark-band">
      <Container>
        <span className="eyebrow">Contatti</span>
        <h1 className="section-heading">Raggiungi Autolavaggio Iorio a Napoli.</h1>
        <p className="section-lead">
          Indirizzo, orari, recapiti e form sono predisposti per essere gestiti dal CMS.
        </p>
      </Container>
    </Section>
  );
}
