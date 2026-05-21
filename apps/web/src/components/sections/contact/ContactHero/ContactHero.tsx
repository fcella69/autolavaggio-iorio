import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import styles from "./ContactHero.module.css";

type ContactHeroProps = {
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

export function ContactHero({ data }: ContactHeroProps) {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <span className="eyebrow">{data?.eyebrow || "Contatti"}</span>
          <h1>{data?.title || "Raggiungi Autolavaggio Iorio ad Agnano, Napoli."}</h1>
          <p>
            {data?.text ||
              "Siamo in Via Agnano Astroni, 131/123: un punto di riferimento a Napoli Nord per lavaggio auto a mano, furgoni, camion e mezzi industriali."}
          </p>

          <div className="section-actions">
            <Button href={data?.primaryCta?.href || "tel:+393382350148"}>
              {data?.primaryCta?.label || "Chiama ora"}
            </Button>
            <Button href={data?.secondaryCta?.href || "#mappa"} variant="ghost">
              {data?.secondaryCta?.label || "Apri la mappa"}
            </Button>
          </div>
        </div>

        <aside className={styles.panel}>
          <span>Zona</span>
          <strong>Napoli Nord, area Agnano / Via Agnano Astroni</strong>
        </aside>
      </Container>
    </section>
  );
}