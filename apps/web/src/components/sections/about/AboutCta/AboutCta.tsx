import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import styles from "./AboutCta.module.css";

type AboutCtaProps = {
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

export function AboutCta({ data }: AboutCtaProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.panel}>
          <div className={styles.copy}>
            <span className="eyebrow">{data?.eyebrow || "Vieni a trovarci"}</span>
            <h2>{data?.title || "Autolavaggio Iorio ti aspetta in Via Agnano Astroni."}</h2>
            <p>
              {data?.text ||
                "Siamo a Napoli, nei pressi dell’Ippodromo di Agnano. Il servizio è attivo dal lunedì al sabato dalle 8:00 alle 18:30. Domenica chiuso."}
            </p>
          </div>

          <div className={styles.actions}>
            <Button href={data?.primaryCta?.href || "/contatti"}>
              {data?.primaryCta?.label || "Vai ai contatti"}
            </Button>
            <Button href={data?.secondaryCta?.href || "/servizi"} variant="ghost">
              {data?.secondaryCta?.label || "Scopri i servizi"}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}