import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container/Container";
import { sanityImageCss } from "@/lib/sanity/image";
import styles from "./GalleryGrid.module.css";

type GalleryImageItem = {
  imageUrl?: string;
  alt?: string;
  caption?: string;
};

type GalleryGridProps = {
  intro?: {
    eyebrow?: string;
    title?: string;
    text?: string;
  };
  gallery?: {
    images?: GalleryImageItem[];
  };
};

const placeholderItems: GalleryImageItem[] = [
  {
    caption: "Lavaggio auto a mano",
    alt: "Lavaggio auto a mano"
  },
  {
    caption: "Pulizia interni",
    alt: "Pulizia interni auto"
  },
  {
    caption: "Lavaggio furgoni",
    alt: "Lavaggio furgoni"
  },
  {
    caption: "Mezzi industriali",
    alt: "Lavaggio mezzi industriali"
  },
  {
    caption: "Ceratura",
    alt: "Ceratura auto"
  },
  {
    caption: "Sanificazione",
    alt: "Sanificazione auto"
  }
];

export function GalleryGrid({ intro, gallery }: GalleryGridProps) {
  const images: GalleryImageItem[] = gallery?.images?.length ? gallery.images : [];

  const items: GalleryImageItem[] = images.length ? images : placeholderItems;

  return (
    <section className={styles.section} id="foto">
      <Container>
        <div className={styles.head}>
          <div>
            <span className="eyebrow">{intro?.eyebrow || "Immagini"}</span>
            <h2>{intro?.title || "Dettagli, spazi e risultati del lavaggio."}</h2>
          </div>

          <p>
            {intro?.text ||
              "Una selezione di immagini pensata per raccontare il metodo di lavoro, l’attenzione al dettaglio e i servizi disponibili presso Autolavaggio Iorio ad Agnano."}
          </p>
        </div>

        <div className={styles.grid}>
          {items.map((item, index) => {
            const imageStyle = item.imageUrl
              ? ({
                  "--gallery-image": sanityImageCss(item.imageUrl, {
                    width: index % 3 === 0 ? 1400 : 900,
                    height: index % 3 === 0 ? 980 : 720,
                    quality: 80,
                    fit: "crop"
                  })
                } as CSSProperties)
              : undefined;

            return (
              <article
                className={`${styles.tile} ${item.imageUrl ? styles.hasImage : ""}`}
                style={imageStyle}
                key={`${item.caption || item.alt || "gallery-image"}-${index}`}
                aria-label={item.alt || item.caption || "Immagine gallery"}
              >
                {!item.imageUrl ? (
                  <div className={styles.placeholderText}>Immagine da Sanity</div>
                ) : null}

                {item.caption ? (
                  <div className={styles.caption}>
                    <span>Gallery</span>
                    <strong>{item.caption}</strong>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}