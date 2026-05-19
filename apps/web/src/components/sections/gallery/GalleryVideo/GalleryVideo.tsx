import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";

export function GalleryVideo() {
  return (
    <Section>
      <Container>
        <div className="content-grid">
          <div>
            <span className="eyebrow">Video</span>
            <h2 className="section-heading">Spazio pronto per un video incorporato.</h2>
            <p className="section-lead">
              Il video resterà dentro la Gallery, senza creare una pagina separata.
            </p>
          </div>
          <div className="placeholder-media" />
        </div>
      </Container>
    </Section>
  );
}
