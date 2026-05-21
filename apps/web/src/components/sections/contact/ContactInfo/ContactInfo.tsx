import { Container } from "@/components/ui/Container/Container";
import styles from "./ContactInfo.module.css";

type ContactInfoProps = {
  data?: Array<{
    label?: string;
    value?: string;
    href?: string;
  }>;
};

const fallbackCards = [
  {
    label: "Indirizzo",
    value: "Via Agnano Astroni, 131/123\n80125 Napoli (NA)",
    href: "#mappa"
  },
  {
    label: "Telefono",
    value: "+39 338 235 0148",
    href: "tel:+393382350148"
  },
  {
    label: "Email",
    value: "lucianoiorio@hotmail.it",
    href: "mailto:lucianoiorio@hotmail.it"
  },
  {
    label: "Orari",
    value: "Lun - Sab: 08:00 - 18:30\nDomenica: chiuso"
  }
];

export function ContactInfo({ data }: ContactInfoProps) {
  const cards = data?.length ? data : fallbackCards;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {cards.map((card, index) => {
            const content = (
              <>
                <span>{card.label}</span>
                <strong>{card.value}</strong>
              </>
            );

            if (card.href) {
              return (
                <a className={styles.card} href={card.href} key={`${card.label}-${index}`}>
                  {content}
                </a>
              );
            }

            return (
              <article className={styles.card} key={`${card.label}-${index}`}>
                {content}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}