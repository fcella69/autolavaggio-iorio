import { Container } from "@/components/ui/Container/Container";
import styles from "./ServicesGrid.module.css";

type ServicesGridProps = {
  data?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    items?: Array<{
      label?: string;
      title?: string;
      description?: string;
    }>;
  };
};

const fallbackItems = [
  {
    label: "Servizio",
    title: "Lavaggio auto a mano",
    description: "Pulizia accurata di carrozzeria e interni, con rifiniture manuali."
  },
  {
    label: "Servizio",
    title: "Lavaggio furgoni e motoveicoli",
    description: "Trattamenti per veicoli di qualsiasi marca e modello."
  },
  {
    label: "Servizio",
    title: "Sanificazione interni",
    description: "Pulizia e igienizzazione dell’abitacolo, vetri, tappeti e superfici interne."
  },
  {
    label: "Su richiesta",
    title: "Lavaggio motori",
    description: "Servizio disponibile su richiesta per esigenze specifiche."
  },
  {
    label: "Accessori",
    title: "Tergicristalli, tappetini e profumi",
    description: "Vendita e montaggio di accessori utili per la cura quotidiana dell’auto."
  },
  {
    label: "Comfort",
    title: "Sala d’attesa",
    description: "Uno spazio con sedute e TV per attendere durante il servizio."
  }
];

export function ServicesGrid({ data }: ServicesGridProps) {
  const items = data?.items?.length ? data.items : fallbackItems;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          <div>
            <span className="eyebrow">{data?.eyebrow || "Cosa facciamo"}</span>
            <h2>{data?.title || "Servizi per carrozzeria, interni e cura del veicolo."}</h2>
          </div>
          <p>
            {data?.text ||
              "Dalla pulizia ordinaria al lavaggio completo, ogni servizio è pensato per offrire un risultato pratico, curato e conveniente."}
          </p>
        </div>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <article className={styles.card} key={`${item.title}-${index}`}>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.label}>{item.label || "Servizio"}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}