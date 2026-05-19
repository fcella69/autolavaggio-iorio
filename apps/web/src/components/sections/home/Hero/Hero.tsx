import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <div className="fade-in">
          <span className="eyebrow">Autolavaggio a Napoli</span>
          <h1>Lavaggio a mano, cura professionale e attenzione al dettaglio.</h1>
          <p>
            Autolavaggio Iorio è il punto di riferimento per auto, furgoni, camion e mezzi
            industriali nell&apos;area di Napoli.
          </p>
          <div className="section-actions">
            <Button href="/contatti">Contattaci</Button>
            <Button href="/servizi" variant="ghost">Scopri i servizi</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
