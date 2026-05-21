import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container/Container";
import styles from "./ServicesIntro.module.css";
import { sanityImageCss } from "@/lib/sanity/image";

type ServicesIntroProps = {
    intro?: {
        eyebrow?: string;
        title?: string;
        text?: string;
        highlights?: Array<{
            label?: string;
            value?: string;
        }>;
    };
    completeWash?: {
        eyebrow?: string;
        title?: string;
        text?: string;
        imageUrl?: string;
        imageAlt?: string;
    };
};

const fallbackHighlights = [
    { label: "Veicoli", value: "Auto, moto, furgoni e mezzi da lavoro" },
    { label: "Interni", value: "Aspirazione, spolverata e pulizia vetri" },
    { label: "Extra", value: "Su richiesta anche lavaggio motori" }
];

export function ServicesIntro({ intro, completeWash }: ServicesIntroProps) {
    const highlights = intro?.highlights?.length ? intro.highlights : fallbackHighlights;

    const mediaStyle = completeWash?.imageUrl
        ? ({
            "--services-image": sanityImageCss(completeWash.imageUrl, {
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
                <div className={styles.introGrid}>
                    <div className={styles.copy}>
                        <span className="eyebrow">{intro?.eyebrow || "Autolavaggio a mano Napoli Nord"}</span>
                        <h2>{intro?.title || "Servizi e fasi del lavaggio veicoli."}</h2>
                        <p>
                            {intro?.text ||
                                "I servizi dell’autolavaggio a mano comprendono la pulizia e la sanificazione di carrozzerie e interni auto, furgoni e motoveicoli di qualsiasi marca e modello. Su richiesta si effettua anche lavaggio motori."}
                        </p>
                    </div>

                    <div className={styles.highlights}>
                        {highlights.map((item, index) => (
                            <article className={styles.highlight} key={`${item.label}-${index}`}>
                                <span>{item.label}</span>
                                <strong>{item.value}</strong>
                            </article>
                        ))}
                    </div>
                </div>

                <div className={styles.wash}>
                    <div
                        className={`${styles.media} ${completeWash?.imageUrl ? styles.hasImage : ""}`}
                        style={mediaStyle}
                        aria-label={completeWash?.imageAlt || "Lavaggio auto a mano completo"}
                    >
                        <span>Immagine da Sanity</span>
                    </div>

                    <div className={styles.washCopy}>
                        <span className="eyebrow">{completeWash?.eyebrow || "Lavaggio completo"}</span>
                        <h2>{completeWash?.title || "Lavaggio auto a mano completo."}</h2>
                        <p>
                            {completeWash?.text ||
                                "Il lavaggio dell’auto, moto o furgone viene eseguito con attenzione manuale e tecnologie moderne. Nell’arco di pochi minuti si effettuano aspirazione interna, pulizia dei tappeti, lavaggio completo della carrozzeria con shampoo sgrassante, lucidatura, ceratura e asciugatura con rifiniture a mano."}
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}