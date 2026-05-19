import { Container } from "@/components/ui/Container/Container";
import { Section } from "@/components/ui/Section/Section";
import styles from "./LegalPageTemplate.module.css";

type LegalPageTemplateProps = {
  title: string;
  children: React.ReactNode;
};

export function LegalPageTemplate({ title, children }: LegalPageTemplateProps) {
  return (
    <Section>
      <Container>
        <article className={styles.article}>
          <span className="eyebrow">Informativa</span>
          <h1 className="section-heading">{title}</h1>
          <div className={styles.content}>{children}</div>
        </article>
      </Container>
    </Section>
  );
}
