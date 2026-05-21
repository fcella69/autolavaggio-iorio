import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import styles from "./ServicesHero.module.css";

type ServicesHeroProps = {
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

export function ServicesHero({ data }: ServicesHeroProps) {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <span className="eyebrow">{data?.eyebrow || "Servizi"}</span>
          <h1>{data?.title || "Autolavaggio a mano, pulizia interni e sanificazione a Napoli."}</h1>
          <p>
            {data?.text ||
              "Servizi professionali per auto, moto, furgoni e mezzi da lavoro: lavaggio completo, cura della carrozzeria, pulizia interni e trattamenti dedicati."}
          </p>

          <div className="section-actions">
            <Button href={data?.primaryCta?.href || "/contatti"}>
              {data?.primaryCta?.label || "Richiedi informazioni"}
            </Button>
            <Button href={data?.secondaryCta?.href || "#fasi"} variant="ghost">
              {data?.secondaryCta?.label || "Scopri le fasi"}
            </Button>
          </div>
        </div>

        <aside className={styles.panel}>
          <span>Napoli Nord</span>
          <strong>Lavaggio auto, moto, furgoni e mezzi industriali.</strong>
        </aside>
      </Container>
    </section>
  );
}