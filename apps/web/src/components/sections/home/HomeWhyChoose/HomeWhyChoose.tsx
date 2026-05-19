import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";

const reasons = ["Cura manuale", "Prodotti professionali", "Servizio per privati e aziende"];

export function HomeWhyChoose() {
  return (
    <Section className="dark-band">
      <Container>
        <span className="eyebrow">Perche sceglierci</span>
        <h2 className="section-heading">Un autolavaggio pratico, preciso e vicino alle tue esigenze.</h2>
        <div className="card-grid">
          {reasons.map((reason) => (
            <article className="feature-card dark-card" key={reason}>
              <h3>{reason}</h3>
              <p>Testo placeholder per raccontare metodo, affidabilita e attenzione al risultato.</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
