import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import styles from "./ContactCta.module.css";

type ContactCtaProps = {
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

export function ContactCta({ data }: ContactCtaProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.panel}>
          <div className={styles.copy}>
            <span className="eyebrow">{data?.eyebrow || "Prima di arrivare"}</span>
            <h2>{data?.title || "Passa in autolavaggio o contattaci prima di arrivare."}</h2>
            <p>
              {data?.text ||
                "Per informazioni su servizi, orari o lavaggi per aziende e mezzi professionali, puoi chiamarci o raggiungerci direttamente in sede."}
            </p>
          </div>

          <div className={styles.actions}>
            <Button href={data?.primaryCta?.href || "tel:+393382350148"}>
              {data?.primaryCta?.label || "Chiama ora"}
            </Button>
            <Button href={data?.secondaryCta?.href || "/servizi"} variant="ghost">
              {data?.secondaryCta?.label || "Vai ai servizi"}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}