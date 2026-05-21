import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import styles from "./GalleryCta.module.css";

type GalleryCtaProps = {
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

export function GalleryCta({ data }: GalleryCtaProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.panel}>
          <div className={styles.copy}>
            <span className="eyebrow">{data?.eyebrow || "Vuoi maggiori informazioni?"}</span>
            <h2>{data?.title || "Contattaci o scopri tutti i servizi disponibili."}</h2>
            <p>
              {data?.text ||
                "Per informazioni su lavaggio auto a mano, furgoni, camion, mezzi industriali e sanificazione, puoi chiamarci o consultare la pagina servizi."}
            </p>
          </div>

          <div className={styles.actions}>
            <Button href={data?.primaryCta?.href || "/contatti"}>
              {data?.primaryCta?.label || "Contattaci"}
            </Button>
            <Button href={data?.secondaryCta?.href || "/servizi"} variant="ghost">
              {data?.secondaryCta?.label || "Vai ai servizi"}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}