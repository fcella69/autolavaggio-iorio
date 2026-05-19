import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";

export function GalleryHero() {
  return (
    <Section className="dark-band">
      <Container>
        <span className="eyebrow">Gallery</span>
        <h1 className="section-heading">Immagini, risultati e futuro video incorporato.</h1>
        <p className="section-lead">
          La pagina è predisposta per contenuti fotografici, video e una futura lightbox.
        </p>
      </Container>
    </Section>
  );
}
