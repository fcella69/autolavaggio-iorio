import { Container } from "@/components/ui/Container/Container";
import styles from "./AboutValues.module.css";

type AboutValuesProps = {
  values?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    items?: Array<{
      title?: string;
      text?: string;
    }>;
  };
  advancedServices?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    items?: Array<{
      title?: string;
      text?: string;
    }>;
  };
};

const fallbackValues = [
  {
    title: "Serietà e velocità",
    text: "Un approccio pratico e organizzato, pensato per offrire un servizio affidabile e tempi chiari."
  },
  {
    title: "Qualità dei prodotti",
    text: "Prodotti e materiali selezionati per garantire pulizia, brillantezza e cura delle superfici."
  },
  {
    title: "Gestione acque reflue",
    text: "Impiego di moderni depuratori per il corretto uso e trattamento delle acque di lavaggio."
  },
  {
    title: "Area telesorvegliata",
    text: "Tutta l’area è costantemente controllata con telecamere a circuito interno."
  },
  {
    title: "Impianto di circa 1700 mq",
    text: "Spazi ampi per gestire auto, furgoni, camion e mezzi industriali."
  },
  {
    title: "Ritiro e consegna per aziende",
    text: "Possibilità di ritiro e consegna degli automezzi per aziende con lavaggi periodici del parco mezzi."
  }
];

const fallbackAdvanced = [
  {
    title: "Sanificazione con ozono",
    text: "Trattamento dell’abitacolo con macchinario a ozono per eliminare batteri e odori senza prodotti chimici."
  },
  {
    title: "Certificazione di sanità",
    text: "Possibilità di rilascio di certificazione di corretta sanità degli ambienti dopo il lavaggio di mezzi per medicinali o alimentari."
  },
  {
    title: "Lucidatura carrozzeria",
    text: "Interventi su piccoli graffi e abrasioni grazie a materiali specifici e all’esperienza del titolare."
  },
  {
    title: "Ripristino fanali",
    text: "Trattamento per riportare brillantezza ai fanali senza doverli sostituire."
  },
  {
    title: "Accessori auto",
    text: "Possibilità di cambio spazzole, lampadine e accessori auto di vario genere."
  },
  {
    title: "Pagamenti flessibili",
    text: "Pagamenti in contanti o con carte, salvo diverse negoziazioni con grandi aziende."
  }
];

export function AboutValues({ values, advancedServices }: AboutValuesProps) {
  const valueItems = values?.items?.length ? values.items : fallbackValues;
  const advancedItems = advancedServices?.items?.length ? advancedServices.items : fallbackAdvanced;

  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.head}>
          <span className="eyebrow">{values?.eyebrow || "Punti di forza"}</span>
          <h2>{values?.title || "Serietà, competenza e impianti organizzati per ogni esigenza."}</h2>
          <p>
            {values?.text ||
              "La ditta Iorio si distingue per qualità del servizio, corretto trattamento delle acque reflue, impianti moderni e attenzione alle esigenze di privati, aziende ed enti."}
          </p>
        </div>

        <div className={styles.grid}>
          {valueItems.map((item, index) => (
            <article className={styles.card} key={`${item.title}-${index}`}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.advanced}>
          <span className="eyebrow">{advancedServices?.eyebrow || "Trattamenti specifici"}</span>
          <h2>
            {advancedServices?.title ||
              "Dalla sanificazione alla lucidatura, servizi aggiuntivi per una cura completa."}
          </h2>
          <p>
            {advancedServices?.text ||
              "Oltre al lavaggio, Autolavaggio Iorio offre trattamenti specifici per interni, carrozzeria, fanali, accessori e mezzi destinati al trasporto di alimenti o medicinali."}
          </p>

          <div className={styles.grid2}>
            {advancedItems.map((item, index) => (
              <article className={styles.card} key={`${item.title}-${index}`}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}