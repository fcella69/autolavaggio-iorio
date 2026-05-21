import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import styles from "./Hero.module.css";
import { sanityImageCss } from "@/lib/sanity/image";

type HeroProps = {
  data?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    backgroundImageUrl?: string;
    backgroundImageAlt?: string;
    mobileBackgroundImageUrl?: string;
    mobileBackgroundImageAlt?: string;
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

const fallback = {
  eyebrow: "Autolavaggio a Napoli",
  title: "Lavaggio a mano, cura professionale e attenzione al dettaglio.",
  subtitle:
    "Autolavaggio Iorio è il punto di riferimento per auto, furgoni, camion e mezzi industriali nell'area di Napoli.",
  primaryCta: {
    label: "Contattaci",
    href: "/contatti"
  },
  secondaryCta: {
    label: "Scopri i servizi",
    href: "/servizi"
  }
};

export function Hero({ data }: HeroProps) {
  const hasDesktopBackground = Boolean(data?.backgroundImageUrl);
  const hasMobileBackground = Boolean(data?.mobileBackgroundImageUrl);
  const hasAnyBackground = hasDesktopBackground || hasMobileBackground;

  const desktopBackground = sanityImageCss(data?.backgroundImageUrl, {
    width: 1800,
    quality: 82,
    fit: "max"
  });

  const mobileBackground = sanityImageCss(data?.mobileBackgroundImageUrl || data?.backgroundImageUrl, {
    width: 900,
    quality: 82,
    fit: "max"
  });

  const heroStyle = hasAnyBackground
    ? ({
      "--hero-bg": desktopBackground || "none",
      "--hero-mobile-bg": mobileBackground || "none"
    } as CSSProperties)
    : undefined;

  return (
    <section
      className={`${styles.hero} ${hasAnyBackground ? styles.hasBackground : ""}`}
      style={heroStyle}
      aria-label={
        data?.mobileBackgroundImageAlt ||
        data?.backgroundImageAlt ||
        "Autolavaggio Iorio a Napoli"
      }
    >
      <div className={styles.waterGlow} aria-hidden="true" />
      <div className={styles.bubbleOne} aria-hidden="true" />
      <div className={styles.bubbleTwo} aria-hidden="true" />

      <Container className={styles.inner}>
        <div className={styles.copy}>
          <span className="eyebrow">{data?.eyebrow || fallback.eyebrow}</span>

          <h1>{data?.title || fallback.title}</h1>

          <p>{data?.subtitle || fallback.subtitle}</p>

          <div className="section-actions">
            <Button href={data?.primaryCta?.href || fallback.primaryCta.href}>
              {data?.primaryCta?.label || fallback.primaryCta.label}
            </Button>

            <Button href={data?.secondaryCta?.href || fallback.secondaryCta.href} variant="ghost">
              {data?.secondaryCta?.label || fallback.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>

      <div className={styles.wave} aria-hidden="true" />
    </section>
  );
}