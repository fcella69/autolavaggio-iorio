import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";

export function GalleryGrid() {
  return (
    <Section>
      <Container>
        <div className="card-grid">
          {Array.from({ length: 6 }, (_, index) => (
            <article className="feature-card" key={index}>
              <div className="placeholder-media" style={{ minHeight: 220, margin: "-24px" }} />
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
