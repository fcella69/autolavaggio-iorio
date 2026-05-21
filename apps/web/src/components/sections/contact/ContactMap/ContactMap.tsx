import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import styles from "./ContactMap.module.css";

type ContactMapProps = {
  data?: {
    eyebrow?: string;
    title?: string;
    text?: string;
    address?: string;
    mapEmbedUrl?: string;
    googleMapsUrl?: string;
    ctaLabel?: string;
  };
};

function decodeHtmlEntities(value: string) {
  return value
    .replaceAll("&quot;", '"')
    .replaceAll("&#34;", '"')
    .replaceAll("&amp;", "&")
    .replaceAll("&#38;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function getGoogleMapsEmbedSrc(value?: string) {
  if (!value) {
    return "";
  }

  const decodedValue = decodeHtmlEntities(value.trim());

  const iframeSrcMatch = decodedValue.match(/src=["']([^"']+)["']/i);
  const src = iframeSrcMatch?.[1] || decodedValue;

  if (!src.startsWith("https://www.google.com/maps/embed")) {
    return "";
  }

  return src;
}

export function ContactMap({ data }: ContactMapProps) {
  const mapSrc = getGoogleMapsEmbedSrc(data?.mapEmbedUrl);

  return (
    <section className={styles.section} id="mappa">
      <Container>
        <div className={styles.head}>
          <span className="eyebrow">{data?.eyebrow || "Dove siamo"}</span>

          <h2>{data?.title || "Autolavaggio Iorio si trova in Via Agnano Astroni."}</h2>

          <p>
            {data?.text ||
              "Consulta la mappa e raggiungici facilmente in zona Agnano, Napoli Nord."}
          </p>

          {data?.address ? <div className={styles.address}>{data.address}</div> : null}

          {data?.googleMapsUrl ? (
            <div className={styles.actions}>
              <Button href={data.googleMapsUrl} variant="secondary">
                {data?.ctaLabel || "Apri su Google Maps"}
              </Button>
            </div>
          ) : null}
        </div>
      </Container>

      <div className={styles.mapWrap}>
        {mapSrc ? (
          <iframe
            src={mapSrc}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa Autolavaggio Iorio"
          />
        ) : (
          <div className={styles.mapPlaceholder}>
            <div>
              <strong>Mappa interattiva Google Maps</strong>
              <p>
                La mappa non è ancora configurata oppure il documento Contatti non è stato
                pubblicato su Sanity. Inserisci il codice iframe o il link embed di Google Maps nel
                campo dedicato.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}