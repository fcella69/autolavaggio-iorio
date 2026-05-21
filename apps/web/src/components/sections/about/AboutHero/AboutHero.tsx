import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import styles from "./AboutHero.module.css";

type AboutHeroProps = {
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

export function AboutHero({ data }: AboutHeroProps) {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <span className="eyebrow">{data?.eyebrow || "Chi siamo"}</span>
          <h1>{data?.title || "Tre generazioni di esperienza nel lavaggio manuale a Napoli."}</h1>
          <p>
            {data?.text ||
              "Autolavaggio Iorio vanta un’esperienza più che ventennale nel lavaggio manuale di camion, autoveicoli, mezzi industriali e automezzi per l’igiene urbana."}
          </p>

          <div className="section-actions">
            <Button href={data?.primaryCta?.href || "/servizi"}>
              {data?.primaryCta?.label || "Scopri i servizi"}
            </Button>
            <Button href={data?.secondaryCta?.href || "/contatti"} variant="ghost">
              {data?.secondaryCta?.label || "Contattaci"}
            </Button>
          </div>
        </div>

        <aside className={styles.panel}>
          <span>Dal territorio</span>
          <strong>Una realtà nata negli anni ’80 e attiva da tre generazioni.</strong>
        </aside>
      </Container>
    </section>
  );
}