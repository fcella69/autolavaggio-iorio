import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";

export function AboutStory() {
  return (
    <Section>
      <Container>
        <div className="content-grid">
          <div className="placeholder-media" />
          <div>
            <span className="eyebrow">La nostra storia</span>
            <h2 className="section-heading">Un servizio concreto, costruito sul lavoro quotidiano.</h2>
            <p className="section-lead">
              Testi placeholder per descrivere l&apos;attivita, il rapporto con il territorio e la cura
              riservata a ogni veicolo, dalle auto private ai mezzi da lavoro.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
