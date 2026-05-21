import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import { sanityImageCss } from "@/lib/sanity/image";

type HomeGalleryPreviewProps = {
  data?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    images?: Array<{
      imageUrl?: string;
      alt?: string;
      caption?: string;
    }>;
    cta?: {
      label?: string;
      href?: string;
    };
  };
};

export function HomeGalleryPreview({ data }: HomeGalleryPreviewProps) {
  const images = data?.images?.filter((image) => image.imageUrl).slice(0, 2) || [];

  return (
    <Section>
      <Container>
        <div className="gallery-preview-layout">
          <div>
            <span className="eyebrow">{data?.eyebrow || "Gallery"}</span>
            <h2 className="section-heading">
              {data?.title || "Immagini, risultati e futuro video in un’unica area."}
            </h2>
            <p className="section-lead">
              {data?.text ||
                "La Gallery raccoglierà foto dell’impianto, dettagli dei lavaggi, risultati sui veicoli e il video che nel vecchio sito era presente in una sezione separata."}
            </p>
            <div className="section-actions">
              <Button href={data?.cta?.href || "/gallery"}>
                {data?.cta?.label || "Guarda la gallery"}
              </Button>
            </div>
          </div>

          <div className="gallery-stack">
            {[0, 1].map((index) => {
              const image = images[index];
              const mediaStyle = image?.imageUrl
                ? ({
                  "--cms-bg": sanityImageCss(image.imageUrl, {
                    width: 1100,
                    height: 820,
                    quality: 80,
                    fit: "crop"
                  })
                } as CSSProperties)
                : undefined;
              return (
                <div
                  key={index}
                  className={
                    image?.imageUrl
                      ? "cms-media gallery-tile"
                      : "placeholder-media gallery-tile"
                  }
                  style={mediaStyle}
                  aria-label={image?.alt || "Gallery Autolavaggio Iorio"}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}