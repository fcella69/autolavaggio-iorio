import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import styles from "./ServicesCta.module.css";

type ServicesCtaProps = {
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

export function ServicesCta({ data }: ServicesCtaProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.panel}>
          <div className={styles.copy}>
            <span className="eyebrow">{data?.eyebrow || "Contatti"}</span>
            <h2>{data?.title || "Vuoi informazioni su un servizio specifico?"}</h2>
            <p>
              {data?.text ||
                "Contattaci per informazioni su lavaggio auto a mano, pulizia interni, sanificazione, lavaggio furgoni, moto, motori e mezzi professionali."}
            </p>
          </div>

          <div className={styles.actions}>
            <Button href={data?.primaryCta?.href || "/contatti"}>
              {data?.primaryCta?.label || "Contattaci"}
            </Button>
            <Button href={data?.secondaryCta?.href || "tel:+393382350148"} variant="ghost">
              {data?.secondaryCta?.label || "Chiama ora"}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}