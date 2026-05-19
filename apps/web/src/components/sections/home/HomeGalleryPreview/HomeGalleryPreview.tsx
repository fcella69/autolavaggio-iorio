import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";

export function HomeGalleryPreview() {
  return (
    <Section>
      <Container>
        <div className="content-grid">
          <div>
            <span className="eyebrow">Gallery</span>
            <h2 className="section-heading">Uno spazio pronto per mostrare lavori e risultati.</h2>
            <p className="section-lead">
              La gallery è predisposta per immagini, video incorporato e futura lightbox.
            </p>
            <div className="section-actions">
              <Button href="/gallery">Vai alla gallery</Button>
            </div>
          </div>
          <div className="placeholder-media" />
        </div>
      </Container>
    </Section>
  );
}
