import { Container } from "@/components/ui/Container/Container";
import styles from "./LegalPageTemplate.module.css";

type LegalPageTemplateProps = {
  data?: {
    hero?: {
      eyebrow?: string;
      title?: string;
      text?: string;
    };
    lastUpdated?: string;
    sections?: Array<{
      title?: string;
      text?: string;
    }>;
  } | null;
  fallback: {
    eyebrow: string;
    title: string;
    text: string;
    lastUpdated: string;
    sections: Array<{
      title: string;
      text: string;
    }>;
  };
};

export function LegalPageTemplate({ data, fallback }: LegalPageTemplateProps) {
  const hero = data?.hero || fallback;
  const sections = data?.sections?.length ? data.sections : fallback.sections;
  const lastUpdated = data?.lastUpdated || fallback.lastUpdated;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Container>
          <span className="eyebrow">{hero.eyebrow || fallback.eyebrow}</span>
          <h1>{hero.title || fallback.title}</h1>
          <p>{hero.text || fallback.text}</p>
          <div className={styles.updated}>{lastUpdated}</div>
        </Container>
      </section>

      <section className={styles.content}>
        <Container className={styles.contentInner}>
          {sections.map((section, index) => (
            <article className={styles.block} key={`${section.title}-${index}`}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </article>
          ))}
        </Container>
      </section>
    </main>
  );
}