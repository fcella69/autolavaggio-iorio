import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container/Container";
import { sanityImageCss } from "@/lib/sanity/image";
import styles from "./ServicesProcess.module.css";

type ProcessStep = {
  title?: string;
  text?: string;
  imageUrl?: string;
  imageAlt?: string;
};

type ExtraInfoItem = {
  title?: string;
  text?: string;
};

type ServicesProcessProps = {
  process?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    steps?: ProcessStep[];
  };
  extraInfo?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    items?: ExtraInfoItem[];
  };
};

const fallbackSteps: ProcessStep[] = [
  {
    title: "Prelavaggio",
    text: "Prima rimozione dello sporco più evidente e preparazione della carrozzeria al lavaggio completo."
  },
  {
    title: "Spugnatura",
    text: "Trattamento manuale della carrozzeria con prodotti specifici per una pulizia accurata."
  },
  {
    title: "Risciacquo",
    text: "Eliminazione dei residui di shampoo e sporco, lasciando la superficie pronta alle fasi successive."
  },
  {
    title: "Ceratura",
    text: "Applicazione di cera per proteggere la carrozzeria e migliorare brillantezza e resa finale."
  },
  {
    title: "Supercera",
    text: "Trattamento aggiuntivo per una finitura più intensa e una maggiore sensazione di protezione."
  },
  {
    title: "Asciugatura e pulizia interni",
    text: "Asciugatura con rifiniture a mano, aspirazione interna, pulizia tappeti, vetri e superfici dell’abitacolo."
  }
];

const fallbackExtraItems: ExtraInfoItem[] = [
  {
    title: "Detergenti di alta gamma",
    text: "Utilizzo di prodotti professionali, efficaci e rispettosi dell’ambiente, selezionati per qualità e resa."
  },
  {
    title: "Accessori auto",
    text: "Vendita e montaggio di tergicristalli, tappetini, profumi e accessori utili per la cura del veicolo."
  },
  {
    title: "Sala d’attesa",
    text: "Uno spazio con sedute e TV per attendere comodamente il completamento del servizio."
  }
];

export function ServicesProcess({ process, extraInfo }: ServicesProcessProps) {
  const steps: ProcessStep[] = process?.steps?.length ? process.steps : fallbackSteps;
  const extraItems: ExtraInfoItem[] = extraInfo?.items?.length
    ? extraInfo.items
    : fallbackExtraItems;

  return (
    <section className={styles.section} id="fasi">
      <Container className={styles.inner}>
        <div className={styles.head}>
          <span className="eyebrow">{process?.eyebrow || "Fasi del lavaggio"}</span>
          <h2>{process?.title || "Un processo completo, dalla preparazione alla rifinitura."}</h2>
          <p>
            {process?.text ||
              "Il lavaggio viene organizzato in fasi chiare, pensate per trattare carrozzeria, interni e dettagli del veicolo con cura progressiva."}
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, index) => {
            const mediaStyle = step.imageUrl
              ? ({
                  "--process-image": sanityImageCss(step.imageUrl, {
                    width: 900,
                    height: 620,
                    quality: 80,
                    fit: "crop"
                  })
                } as CSSProperties)
              : undefined;

            return (
              <article className={styles.step} key={`${step.title || "step"}-${index}`}>
                <div
                  className={`${styles.media} ${step.imageUrl ? styles.hasImage : ""}`}
                  style={mediaStyle}
                  aria-label={step.imageAlt || step.title || "Fase lavaggio"}
                >
                  <span className={styles.placeholder}>Immagine fase da Sanity</span>
                </div>

                <div className={styles.body}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.extra}>
          <span className="eyebrow">{extraInfo?.eyebrow || "Qualità e comfort"}</span>
          <h2>{extraInfo?.title || "Prodotti professionali, accessori e sala d’attesa."}</h2>
          <p>
            {extraInfo?.text ||
              "Autolavaggio Iorio utilizza detergenti di alta gamma e offre anche servizi accessori per rendere la cura dell’auto più completa e pratica."}
          </p>

          <div className={styles.extraGrid}>
            {extraItems.map((item, index) => (
              <article className={styles.extraItem} key={`${item.title || "extra"}-${index}`}>
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