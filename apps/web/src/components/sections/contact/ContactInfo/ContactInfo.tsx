import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";

const items = [
  ["Ragione sociale", "Autolavaggio Iorio S.R.L."],
  ["Indirizzo", "Via Agnano Astroni, 123/131 - Napoli"],
  ["Telefono", "Da definire"],
  ["Email", "Da definire"],
  ["Orari", "Lun - Sab: 08:00 - 19:00"]
];

export function ContactInfo() {
  return (
    <Section>
      <Container>
        <div className="card-grid">
          {items.map(([label, value]) => (
            <article className="feature-card" key={label}>
              <span className="eyebrow">{label}</span>
              <h3>{value}</h3>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
