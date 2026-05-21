import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container/Container";
import styles from "./AboutStory.module.css";
import { sanityImageCss } from "@/lib/sanity/image";

type AboutStoryProps = {
  story?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    sideLabel?: string;
    sideTitle?: string;
    sideText?: string;
    highlights?: Array<{
      label?: string;
      value?: string;
    }>;
  };
  industrial?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    imageUrl?: string;
    imageAlt?: string;
    items?: Array<{
      title?: string;
      text?: string;
    }>;
  };
};

const fallbackHighlights = [
  { label: "Origini", value: "Nata negli anni ’80" },
  { label: "Gestione", value: "Tre generazioni di attività" },
  { label: "Qualità", value: "Certificazione ISO 9001" }
];

const fallbackIndustrialItems = [
  {
    title: "Mezzi pesanti e industriali",
    text: "Lavaggio manuale di camion, furgoni, camper, automezzi industriali e mezzi per l’igiene urbana."
  },
  {
    title: "Interni e tappezzerie",
    text: "Pulizia di sedili, moquette, cielo vettura, interni in pelle, tessuti e superfici plastiche."
  },
  {
    title: "Motori e sottoscocca",
    text: "Trattamenti specifici disponibili per motori, sottoscocca, grafitaggio e ingrassaggio."
  }
];

export function AboutStory({ story, industrial }: AboutStoryProps) {
  const highlights = story?.highlights?.length ? story.highlights : fallbackHighlights;
  const industrialItems = industrial?.items?.length ? industrial.items : fallbackIndustrialItems;

  const mediaStyle = industrial?.imageUrl
    ? ({
      "--about-industrial-image": sanityImageCss(industrial.imageUrl, {
        width: 1000,
        height: 1200,
        quality: 80,
        fit: "crop"
      })
    } as CSSProperties)
    : undefined;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.storyGrid}>
          <div className={styles.copy}>
            <span className="eyebrow">{story?.eyebrow || "La nostra storia"}</span>
            <h2>{story?.title || "Una realtà nata negli anni ’80, cresciuta con il territorio."}</h2>
            <p>
              {story?.text ||
                "L’azienda è attiva da tre generazioni ed è attualmente gestita da Luciano Iorio. Grazie all’innovamento tecnologico degli impianti, all’esperienza maturata e alla tenacia nella gestione, Autolavaggio Iorio ha saputo acquisire competenze specifiche nelle dinamiche del settore pubblico, aggiudicandosi importanti appalti con enti locali e aziende speciali a partecipazione pubblica."}
            </p>
          </div>

          <aside className={styles.sideCard}>
            <span>{story?.sideLabel || "Esperienza"}</span>
            <h3>{story?.sideTitle || "20+"}</h3>
            <p>
              {story?.sideText ||
                "Anni di attività nel lavaggio manuale di autoveicoli, camion, mezzi industriali e automezzi per l’igiene urbana."}
            </p>
          </aside>
        </div>

        <div className={styles.highlights}>
          {highlights.map((item, index) => (
            <article className={styles.highlight} key={`${item.label}-${index}`}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>

        <div className={styles.industrial}>
          <div
            className={`${styles.media} ${industrial?.imageUrl ? styles.hasImage : ""}`}
            style={mediaStyle}
            aria-label={industrial?.imageAlt || "Autolavaggio camion e mezzi industriali Napoli"}
          >
            <span>Immagine da Sanity</span>
          </div>

          <div className={styles.industrialCopy}>
            <span className="eyebrow">
              {industrial?.eyebrow || "Autolavaggio camion e mezzi industriali"}
            </span>
            <h2>
              {industrial?.title ||
                "Specializzati nel lavaggio di grandi mezzi, senza trascurare auto e veicoli privati."}
            </h2>
            <p>
              {industrial?.text ||
                "Autolavaggio Iorio si è specializzato nel lavaggio di grandi mezzi industriali, mantenendo un servizio accurato anche per auto, moto, camper, furgoni, tappezzerie, interni in pelle, motori e sottoscocca."}
            </p>

            <div className={styles.industrialItems}>
              {industrialItems.map((item, index) => (
                <article className={styles.industrialItem} key={`${item.title}-${index}`}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}