import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import styles from "./GalleryHero.module.css";

type GalleryHeroProps = {
  data?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    primaryCta?: {
      label?: string;
      href?: string;
    };
    secondaryCta?: {
      label?: string;
      href?: string;
    };
  };
};

export function GalleryHero({ data }: GalleryHeroProps) {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <span className="eyebrow">{data?.eyebrow || "Gallery"}</span>
          <h1>{data?.title || "Guarda da vicino l’autolavaggio e i nostri servizi."}</h1>
          <p>
            {data?.text ||
              "Foto e video di Autolavaggio Iorio a Napoli Nord: spazi, lavorazioni e dettagli dei servizi dedicati ad auto, furgoni, camion e mezzi industriali."}
          </p>

          <div className="section-actions">
            <Button href={data?.primaryCta?.href || "#foto"}>
              {data?.primaryCta?.label || "Guarda le foto"}
            </Button>
            <Button href={data?.secondaryCta?.href || "#video"} variant="ghost">
              {data?.secondaryCta?.label || "Guarda il video"}
            </Button>
          </div>
        </div>

        <aside className={styles.panel}>
          <span>Foto e video</span>
          <strong>Un’unica area per raccogliere immagini, lavorazioni e contenuti video.</strong>
        </aside>
      </Container>
    </section>
  );
}