import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";

export function AboutHero() {
  return (
    <Section className="dark-band">
      <Container>
        <span className="eyebrow">Chi siamo</span>
        <h1 className="section-heading">Autolavaggio Iorio, cura manuale per Napoli.</h1>
        <p className="section-lead">
          Una base editoriale pronta per raccontare esperienza, metodo e attenzione al dettaglio.
        </p>
      </Container>
    </Section>
  );
}
