import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";

const points = ["Esperienza locale", "Lavaggio a mano", "Mezzi industriali", "Sanificazione"];

export function HomeIntro() {
  return (
    <Section>
      <Container>
        <div className="content-grid">
          <div>
            <span className="eyebrow">Chi siamo</span>
            <h2 className="section-heading">Pulizia accurata, tempi chiari e servizio concreto.</h2>
            <p className="section-lead">
              Lavoriamo ogni veicolo con attenzione manuale, prodotti selezionati e un approccio
              pratico pensato per chi cerca un risultato pulito e affidabile.
            </p>
          </div>
          <div className="card-grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            {points.map((point) => (
              <article className="feature-card" key={point}>
                <h3>{point}</h3>
                <p>Placeholder testo breve da collegare ai contenuti CMS.</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
